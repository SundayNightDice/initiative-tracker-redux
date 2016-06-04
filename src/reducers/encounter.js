import { List, Map } from 'immutable';
import turnReducer from './turn';
import Combatant from './../models/combatant';
import EncounterModel from './../models/encounterModel';
import Turn from './../models/turn';

const defaultState = new EncounterModel();

export default function encounter(state = defaultState, action) {
  switch(action.type) {
    case 'SET_ENCOUNTER_NAME':
      return state.set('name', action.name);
    case 'ENEMIES_ADDED':
      return state.set('status', 'pending');
    case 'START_ENCOUNTER':
      const enemies = action.enemies.map((enemy, id) => new Combatant(enemy.name, 'enemy', enemy.hp, enemy.initiative, 1, id));
      const players = action.players.map((player, id) => new Combatant(player.name, 'player', player.maxHp, player.modifiers.dexterity, 1, id));
      const combatants = players.merge(enemies);

      return state
        .set('combatants', combatants)
        .set('status', 'initiatives');
    case 'SET_INITIATIVE':
      const c = state.combatants
        .get(action.id)
        .set('initiative', action.initiative);
      return state.setIn(['combatants', action.id], c);
    case 'BEGIN_COMBAT':
      const order = calculateInitiativeOrder(state.combatants);
      return state
      .set('order', order)
      .set('round', 1)
      .set('currentPlayer', 0)
      .set('turn', new Turn())
      .set('status', 'active');
    case 'DEAL_DAMAGE':
      return dealDamage(state, action.attack);
    case 'DEAL_HEALING':
      return dealHealing(state, action.healing);
    case 'END_TURN':
      const player = state.combatants.get(state.order.get(state.currentPlayer));
      const nextIndex = nextTurnIndex(state.combatants, state.order, state.currentPlayer);
      const round = nextIndex === 0 ? state.round + 1 : state.round;
      return state
        .set('round', round)
        .set('currentPlayer', nextIndex)
        .set('turn', new Turn())
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
      const aint = a.initiative + a.bonus;
      const bint = b.initiative + b.bonus;

      if (aint < bint) return 1;
      if (aint > bint) return -1;
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

  return state
    .setIn(['combatants', item.id], newItem)
    .set('turn', new Turn());
}

function dealHealing(state, healing) {
  const item = state.combatants.find(x => x.name === healing.target);
  const newItem = item
    .set('hp', Math.min(item.maxHp, item.hp + healing.value))
    .set('deathSaves', 0)
    .set('deathFails', 0);

  return state
    .setIn(['combatants', item.id], newItem)
    .set('turn', new Turn());
}

function isAlive(combatant) {
  return combatant.type === 'enemy' ?
    combatant.hp > 0 :
    combatant.deathFails < 3;
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
