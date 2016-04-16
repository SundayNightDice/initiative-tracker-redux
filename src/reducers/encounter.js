import immutable from 'immutable';
import turnReducer from './turn';
import Combatant from './../models/combatant';
import EncounterModel from './../models/encounterModel';
import Turn from './../models/turn';

const defaultState = new EncounterModel({
  combatants: new immutable.List([
    new Combatant('Orc', 'enemy', 15, 1),
    new Combatant('Bugbear', 'enemy', 45, 3),
    new Combatant('Bella', 'player', 24, 3),
    new Combatant('Cedric', 'player', 25, 4),
    new Combatant('Fargrim', 'player', 30, 2),
    new Combatant('Kasimir', 'player', 18, 3),
    new Combatant('Sibilant Caius', 'player', 16, 3)
  ]),
  conditions: new immutable.List([
    'Blinded',
    'Charmed',
    'Deafened',
    'Fatigued',
    'Frightened',
    'Grappled',
    'Incapacitated',
    'Invisible',
    'Paralyzed',
    'Petrified',
    'Poisoned',
    'Prone',
    'Restrained',
    'Stunned',
    'Unconscious'
  ]),
  round: 0,
  currentPlayer: -1,
  turn: null
});

export default function encounter(state = defaultState, action) {
  switch(action.type) {
    case 'START_ENCOUNTER':
    return state
      .set('round', 1)
      .set('currentPlayer', 0)
      .set('turn', new Turn(targetsForPlayer(state.combatants, 0)));
    case 'DEAL_DAMAGE':
      const item = state.combatants.find(x => x.name === state.turn.target);
      const index = state.combatants.indexOf(item);
      const newItem = item.hp > 0 ?
        item.set('hp', Math.max(0, item.hp - state.turn.damage)) :
        item.set('deathFails', item.deathFails + 1);

      return state
        .set('combatants', state.combatants.set(index, newItem))
        .set('turn', new Turn(state.turn.targets, state.turn.target));
    case 'END_TURN':
      // Assumes that the combatants array is sorted by initiative.
      const player = state.combatants.get(state.currentPlayer);
      const nextIndex = nextTurnIndex(state.combatants, state.currentPlayer);
      const round = nextIndex === 0 ? state.round + 1 : state.round;
      const nextState = state
        .set('round', round)
        .set('currentPlayer', nextIndex)
        .set('turn', new Turn(targetsForPlayer(state.combatants, nextIndex)));

      if (state.turn.deathSave) {
        return nextState
          .setIn(['combatants', state.currentPlayer, 'deathSaves'], player.deathSaves + 1);
      } else if (state.turn.deathFail) {
        return nextState
          .setIn(['combatants', state.currentPlayer, 'deathFails'], player.deathFails + 1);
      } else {
        return nextState;
      }
    default:
      const turn = turnReducer(state.turn, action);
      return state.set('turn', turn);
  }
};

function targetsForPlayer(combatants, index) {
  const player = combatants.get(index);
  return combatants.filter(c => c.name !== player.name);
}

function nextTurnIndex(combatants, currentPlayerIndex) {
  const size = combatants.size;
  const increment = (i) => i + 1 === size ? 0 : i + 1;

  for (let i = increment(currentPlayerIndex); i !== currentPlayerIndex; i = increment(i)) {
    const combatant = combatants.get(i);

    if (
      (combatant.type === 'enemy' && combatant.hp > 0) ||
      (combatant.type === 'player' && combatant.deathFails < 3)) {
        return i;
      }
  }

  return -1; // All enemies defeated!
}
