import immutable from 'immutable';
import turnReducer from './turn';
import Combatant from './../models/combatant';
import EncounterModel from './../models/encounterModel';
import Turn from './../models/turn';

const defaultState = new EncounterModel({
  combatants: new immutable.List([
    new Combatant({ name: "Orc", type: 'enemy', hp: 15, initiativeBonus: 1, deathSaves: 0, deathFails: 0, conditions: [] }),
    new Combatant({ name: "Bugbear", type: 'enemy', hp: 45, initiativeBonus: 3, deathSaves: 0, deathFails: 0, conditions: [] }),
    new Combatant({ name: "Bella", type: 'player', hp: 24, initiativeBonus: 3, deathSaves: 0, deathFails: 0, conditions: [] }),
    new Combatant({ name: "Cedric", type: 'player', hp: 25, initiativeBonus: 4, deathSaves: 0, deathFails: 0, conditions: [] }),
    new Combatant({ name: "Fargrim", type: 'player', hp: 30, initiativeBonus: 2, deathSaves: 0, deathFails: 0, conditions: [] }),
    new Combatant({ name: "Kasimir", type: 'player', hp: 18, initiativeBonus: 3, deathSaves: 0, deathFails: 0, conditions: [] }),
    new Combatant({ name: "Sibilant Caius", type: 'player', hp: 16, initiativeBonus: 3, deathSaves: 0, deathFails: 0, conditions: [] })
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
  round: 1,
  currentPlayer: 0,
  turn: new Turn()
});

export default function encounter(state = defaultState, action) {
  switch(action.type) {
    case 'DEAL_DAMAGE':
      const item = state.combatants.find(x => x.name === state.turn.target);
      const index = state.combatants.indexOf(item);
      const newItem = item.set('hp', Math.max(0, item.hp - state.turn.damage));

      return state
        .set('combatants', state.combatants.set(index, newItem))
        .set('turn', turnReducer(state.turn, action));
    case 'END_TURN':
      // Assumes that the combatants array is sorted by initiative.
      const player = state.combatants.get(state.currentPlayer);
      const nextIndex = state.currentPlayer + 1 === state.combatants.size ? 0 : state.currentPlayer + 1;
      const round = nextIndex == 0 ? state.round + 1 : state.round;
      const nextState = state
        .set('round', round)
        .set('currentPlayer', nextIndex)
        .set('turn', turnReducer(state.turn, action));

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
