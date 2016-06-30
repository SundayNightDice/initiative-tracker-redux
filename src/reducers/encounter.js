import { List, Map } from 'immutable';
import Combatant from './../models/combatant';
import EncounterModel from './../models/encounterModel';
import EncounterStatus from './../models/encounterStatus';

const defaultState = new EncounterModel();

export default function encounter(state = defaultState, action) {
  switch(action.type) {
    case 'SET_ENCOUNTER_NAME':
      return state.set('name', action.name);
    case 'ENEMIES_ADDED':
      return state.set('status', EncounterStatus.PENDING);
    case 'START_ENCOUNTER':
      const enemies = action.enemies.map((enemy, id) => Combatant.fromEnemy(enemy.name, enemy.hp, enemy.initiative, 1, id));
      const players = action.players
        .filter((player) => player.hp > 0)
        .map((player, id) => Combatant.fromPlayer(player.name, player.hp, player.modifiers.dexterity, 1, id));
      const combatants = players.merge(enemies);

      return state
        .set('combatants', combatants)
        .set('status', EncounterStatus.INITIATIVES);
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
      .set('status', EncounterStatus.ACTIVE);
    case 'DEAL_DAMAGE':
      const ddp = getCurrentPlayer(state).set('acted', true);
      const dds = state.setIn(['combatants', ddp.id], ddp);
      return dealDamage(dds, action.attack);
    case 'DEAL_HEALING':
      const dhp = getCurrentPlayer(state).set('acted', true);
      const dhs = state.setIn(['combatants', dhp.id], dhp);
      return dealHealing(dhs, action.healing);
    case 'DEATH_SAVE':
      const player = getCurrentPlayer(state).set('acted', true);
      return state
        .setIn(['combatants', player.id], applyDeathSavingThrows(player, action.formData));
    case 'END_TURN':
      const etp = getCurrentPlayer(state).set('acted', false);
      const nextIndex = nextTurnIndex(state.combatants, state.order, state.currentPlayer);
      const round = nextIndex === 0 ? state.round + 1 : state.round;
      return state
        .setIn(['combatants', etp.id], etp)
        .set('round', round)
        .set('currentPlayer', nextIndex)
        .set('status', calculateEncounterStatus(state.combatants));
    case 'CLOSE_ENCOUNTER':
      return state.set('status', action.reason);
    default:
      return state;
  }
};

function getCurrentPlayer(state) {
  return state.combatants.get(state.order.get(state.currentPlayer));
}

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

  return state.setIn(['combatants', item.id], newItem);
}

function dealHealing(state, healing) {
  const item = state.combatants.find(x => x.name === healing.target);
  const newItem = item
    .set('hp', Math.min(item.maxHp, item.hp + healing.value))
    .set('deathSaves', 0)
    .set('deathFails', 0);

  return state.setIn(['combatants', item.id], newItem);
}

function isAlive(combatant) {
  return combatant.type === 'enemy' ?
    combatant.hp > 0 :
    combatant.deathFails < 3;
}

function applyDeathSavingThrows(player, data) {
  if (data.save) {
    if (data.isCritical) {
      return player
        .set('hp', 1)
        .set('deathSaves', 0)
        .set('deathFails', 0);
    } else {
      return player
        .set('deathSaves', player.deathSaves + 1);
    }
  } else if (data.fail) {
    const fails = data.isCritical ? 2 : 1;
    return player
      .set('deathFails', player.deathFails + fails);
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
    return EncounterStatus.TPK;
  }

  if (aliveCombatants.filter(c => c.type === 'enemy').size === 0) {
    return EncounterStatus.VICTORY;
  }

  return EncounterStatus.ACTIVE;
}
