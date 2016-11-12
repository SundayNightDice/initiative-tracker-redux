import { List, Map } from 'immutable';
import Combatant from './../models/combatant';
import EncounterModel from './../models/encounterModel';
import EncounterStatus from './../models/encounterStatus';

const defaultState = new EncounterModel();

export default function encounter(state = defaultState, action) {
  switch(action.type) {
    case 'SET_ENCOUNTER_NAME':
      return state.set('name', action.name);
    case 'ADD_ENEMY':
      return state.setIn(['enemies', action.enemyId], action.enemy);
    case 'DELETE_ENEMY':
      return state.deleteIn(['enemies', action.enemyId]);
    case 'ENEMIES_ADDED':
      return state.set('status', EncounterStatus.PENDING);
    case 'START_ENCOUNTER':
      return _startEncounter(state, action);
    case 'SET_INITIATIVE':
      return _setInitiative(state, action);
    case 'BEGIN_COMBAT':
      return _beginCombat(state, action);
    case 'DEAL_DAMAGE':
      return _dealDamage(state, action);
    case 'DEAL_HEALING':
    return _dealHealing(state, action);
    case 'DEATH_SAVE':
      return _deathSave(state, action);
    case 'END_TURN':
      return _endTurn(state, action);
    case 'CLOSE_ENCOUNTER':
      return state.set('status', action.reason);
    default:
      return state;
  }
};

function _startEncounter(state, action) {
  const enemies = state.enemies.map((enemy, id) => Combatant.fromEnemy(enemy.name, enemy.hp, enemy.initiative, enemy.startingRound, id));
  const players = action.players
    .map((player, id) => Combatant.fromPlayer(player.name, player.hp, player.modifiers.dexterity, 1, id));
  const combatants = players.merge(enemies);

  return state
    .set('combatants', combatants)
    .set('status', EncounterStatus.INITIATIVES);
}

function _setInitiative(state, action) {
  const combatants = state.combatants
    .get(action.id)
    .set('initiative', action.initiative);
  return state.setIn(['combatants', action.id], combatants);
}

function _beginCombat(state, action) {
  const order = calculateInitiativeOrder(state.combatants);
  return state
  .set('order', order)
  .set('round', 1)
  .set('currentPlayer', nextTurnIndex(state.combatants, order, -1, 1))
  .set('status', EncounterStatus.ACTIVE);
}

function _dealDamage(state, action) {
  const attacker = getCurrentPlayer(state)
    .set('acted', true);

  const target = state.combatants.find(x => x.name === action.attack.target);
  const remainingHp = Math.max(0, target.hp - action.attack.damage);
  const leftoverHp = Math.abs(Math.min(0, target.hp - action.attack.damage));
  const damaged = target.hp > 0 ?
    target
      .set('hp', remainingHp)
      .set('deathFails', leftoverHp < target.maxHp ? target.deathFails : 3) :
    target
      .set('deathFails', action.attack.damage < target.maxHp ?
        target.deathFails + (action.attack.isCritical ? 2 : 1 ) :
        3
      );

  return state
    .setIn(['combatants', attacker.id], attacker)
    .setIn(['combatants', damaged.id], damaged);
}

function _dealHealing(state, action) {
  const healer = getCurrentPlayer(state)
    .set('acted', true);

  const target = state.combatants.find(x => x.name === action.healing.target);
  const healed = target
    .set('hp', Math.min(target.maxHp, target.hp + action.healing.value))
    .set('deathSaves', 0)
    .set('deathFails', 0);

  return state
    .setIn(['combatants', healer.id], healer)
    .setIn(['combatants', healed.id], healed);
}

function _deathSave(state, action) {
  const player = getCurrentPlayer(state)
    .set('acted', true);
  return state
    .setIn(['combatants', player.id], applyDeathSavingThrows(player, action.formData));
}

function _endTurn(state, action) {
  const player = getCurrentPlayer(state)
    .set('acted', false);
  const nextIndex = nextTurnIndex(state.combatants, state.order, state.currentPlayer, state.round);
  const round = nextIndex === 0 ? state.round + 1 : state.round;
  return state
    .setIn(['combatants', player.id], player)
    .set('round', round)
    .set('currentPlayer', nextIndex)
    .set('status', calculateEncounterStatus(state.combatants));
}

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

function nextTurnIndex(combatants, order, currentPlayerIndex, round) {
  const increment = (i) => (i + 1) % order.size;

  for (let i = increment(currentPlayerIndex); i !== currentPlayerIndex; i = increment(i)) {
    const combatant = combatants.get(order.get(i));
    const r = (i < currentPlayerIndex) ? round + 1 : round;

    if (combatant.startingRound > r) {
      continue;
    }
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
