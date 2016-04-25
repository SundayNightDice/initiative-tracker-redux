import immutable from 'immutable';
import turnReducer from './turn';
import Combatant from './../models/combatant';
import EncounterModel from './../models/encounterModel';
import Turn from './../models/turn';

const defaultState = new EncounterModel(
  new immutable.Map({
    'ORC1': new Combatant('Orc', 'enemy', 15, 13, 1, 'ORC1'),
    'BUG1': new Combatant('Bugbear', 'enemy', 45, 10, 1, 'BUG1'),
    'PL1': new Combatant('Bella', 'player', 24, 7, 1, 'PL1'),
    'PL2': new Combatant('Cedric', 'player', 25, 6, 1, 'PL2'),
    'PL3': new Combatant('Fargrim', 'player', 30, 5, 1, 'PL3'),
    'PL4': new Combatant('Kasimir', 'player', 18, 4, 1, 'PL4'),
    'PL5': new Combatant('Sibilant Caius', 'player', 16, 3, 1, 'PL5')
  })
);

export default function encounter(state = defaultState, action) {
  switch(action.type) {
    case 'START_ENCOUNTER':
      const order = calculateInitiativeOrder(state.combatants);
      return state
        .set('order', order)
        .set('round', 1)
        .set('currentPlayer', 0)
        .set('turn', new Turn(getDamageTargets(state.combatants, order.get(0)), getHealingTargets(state.combatants)))
        .set('status', 'active');
    case 'DEAL_DAMAGE':
      return dealDamage(state);
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
    default:
      return state.set('turn', turnReducer(state.turn, action));
  }
};

function calculateInitiativeOrder(combatants) {
  // For now assume that initiatives are all unique
  return new immutable.List(combatants
    .sort((a, b) => {
      if (a.initiative < b.initiative) return 1;
      if (a.initiative > b.initiative) return -1;
      return 0;
    })
    .keys());
}

function dealDamage(state) {
  const item = state.combatants.find(x => x.name === state.turn.damage.target);
  const remainingHp = Math.max(0, item.hp - state.turn.damage.value);
  const leftoverHp = Math.abs(Math.min(0, item.hp - state.turn.damage.value));
  const newItem = item.hp > 0 ?
    item
      .set('hp', remainingHp)
      .set('deathFails', leftoverHp < item.maxHp ? item.deathFails : 3) :
    item.set('deathFails', state.turn.damage.value < item.maxHp ? item.deathFails + 1 : 3);

  return state
    .setIn(['combatants', item.id], newItem)
    .set('turn', new Turn(state.turn.damage.targets, state.turn.healing.targets, state.turn.damage.target, state.turn.healing.target));
}

function dealHealing(state) {
  const item = state.combatants.find(x => x.name === state.turn.healing.target);
  const newItem = item
    .set('hp', Math.min(item.maxHp, item.hp + state.turn.healing.value))
    .set('deathSaves', 0)
    .set('deathFails', 0);

  return state
    .setIn(['combatants', item.id], newItem)
    .set('turn', new Turn(state.turn.damage.targets, state.turn.healing.targets, state.turn.damage.target, state.turn.healing.target));
}

function getDamageTargets(combatants, id) {
  return itemsList(combatants.filter(c => c.id !== id && isAlive(c)));
}

function getHealingTargets(combatants) {
  return itemsList(combatants.filter(isAlive));
}

function isAlive(combatant) {
  return combatant.type === 'enemy' ?
    combatant.hp > 0 :
    combatant.deathFails < 3;
}

function itemsList(items) {
  return new immutable.List(items.values());
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
