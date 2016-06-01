import { List, Map } from 'immutable';
import turnReducer from './turn';
import Combatant from './../models/combatant';
import EncounterModel from './../models/encounterModel';
import Turn from './../models/turn';

const defaultState = new EncounterModel();

export default function encounter(state = defaultState, action) {
  switch(action.type) {
    case 'ENEMIES_ADDED':
      return state.set('status', 'pending');
    case 'START_ENCOUNTER':
      const enemies = action.enemies.map((enemy, id) => new Combatant(enemy.name, 'enemy', enemy.hp, enemy.initiative, 1, id));
      const players = action.players.map((player, id) => new Combatant(player.name, 'player', player.maxHp, player.initiativeBonus, 1, id));
      const combatants = players.merge(enemies);
      const order = calculateInitiativeOrder(combatants);

      return state
        .set('combatants', combatants)
        .set('order', order)
        .set('round', 1)
        .set('currentPlayer', 0)
        .set('turn', new Turn(getDamageTargets(combatants, order.get(0)), getHealingTargets(combatants)))
        .set('status', 'active');
    case 'DEAL_DAMAGE':
      return dealDamage(state, action.attack);
    case 'DEAL_HEALING':
      return dealHealing(state);
    case 'END_TURN':
      const player = state.combatants.get(state.order.get(state.currentPlayer));
      const nextIndex = nextTurnIndex(state.combatants, state.order, state.currentPlayer);
      const round = nextIndex === 0 ? state.round + 1 : state.round;
      return state
        .set('round', round)
        .set('currentPlayer', nextIndex)
        .set('turn', new Turn(getDamageTargets(state.combatants, state.order.get(nextIndex)), getHealingTargets(state.combatants)))
        .setIn(['combatants', player.id], applyDeathSavingThrows(player, state.turn))
        .set('status', calculateEncounterStatus(state.combatants));
    case 'CLOSE_ENCOUNTER':
      return state.set('status', action.reason);
    default:
      return state.set('turn', turnReducer(state.turn, action));
  }
};

function calculateInitiativeOrder(combatants) {
  // For now assume that initiatives are all unique
  return List(combatants
    .sort((a, b) => {
      if (a.initiative < b.initiative) return 1;
      if (a.initiative > b.initiative) return -1;
      return 0;
    })
    .keys());
}

function dealDamage(state, attack) {
  const item = state.combatants.find(x => x.name === attack.target);
  const remainingHp = Math.max(0, item.hp - attack.damage);
  const leftoverHp = Math.abs(Math.min(0, item.hp - attack.damage));
  const newItem = item.hp > 0 ?
    item
      .set('hp', remainingHp)
      .set('deathFails', leftoverHp < item.maxHp ? item.deathFails : 3) :
    item.set('deathFails', attack.damage < item.maxHp ?
      item.deathFails + (attack.isCritical ? 2 : 1 ) : 3);
  const turn = new Turn(
    state.turn.damageTargets,
    state.turn.healing.targets,
    state.turn.healing.target
  );

  return state
    .setIn(['combatants', item.id], newItem)
    .set('turn', turn);
}

function dealHealing(state) {
  const item = state.combatants.find(x => x.name === state.turn.healing.target);
  const newItem = item
    .set('hp', Math.min(item.maxHp, item.hp + state.turn.healing.value))
    .set('deathSaves', 0)
    .set('deathFails', 0);
  const turn = new Turn(
    state.turn.damage.targets,
    state.turn.healing.targets,
    state.turn.healing.target
  );

  return state
    .setIn(['combatants', item.id], newItem)
    .set('turn', turn);
}

function getDamageTargets(combatants, id) {
  return itemsList(combatants
    .filter((c, i) => i !== id && isAlive(c))
    .map((c, i) => i)
  );
}

function getHealingTargets(combatants) {
  return itemsList(combatants
    .filter(isAlive)
    .map((c, i) => i)
  );
}

function isAlive(combatant) {
  return combatant.type === 'enemy' ?
    combatant.hp > 0 :
    combatant.deathFails < 3;
}

function itemsList(items) {
  return List(items.values());
}

function applyDeathSavingThrows(player, turn) {
  if (turn.deathSave) {
    if (turn.criticalSave) {
      return player
        .set('hp', 1)
        .set('deathSaves', 0)
        .set('deathFails', 0);
    } else {
      return player.set('deathSaves', player.deathSaves + 1);
    }
  } else if (turn.deathFail) {
    const fails = turn.criticalSave ? 2 : 1;
    return player.set('deathFails', player.deathFails + fails);
  } else {
    return player;
  }
}

function nextTurnIndex(combatants, order, currentPlayerIndex) {
  const increment = (i) => (i + 1) % order.size;

  for (let i = increment(currentPlayerIndex); i !== currentPlayerIndex; i = increment(i)) {
    const combatant = combatants.get(order.get(i));

    if (isAlive(combatant)) {
        return i;
      }
  }

  return -1; // All enemies defeated!
}

function calculateEncounterStatus(combatants) {
  const aliveCombatants = combatants.filter(isAlive);

  if (aliveCombatants.filter(c => c.type === 'player').size === 0) {
    return 'tpk';
  }

  if (aliveCombatants.filter(c => c.type === 'enemy').size === 0) {
    return 'victory';
  }

  return 'active';
}
