import immutable from 'immutable';
import Combatant from './../models/combatant';
import Turn from './../models/turn';

const defaultState = {
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
};

export default function encounter(state = defaultState, action) {
  switch(action.type) {
    case 'SET_TARGET':
      return Object.assign({}, state, { turn: state.turn.set('target', action.value) });
    case 'CHANGE_DAMAGE':
      return Object.assign({}, state, { turn: state.turn.set('damage', action.value) });
    case 'TOGGLE_APPLY_CONDITION':
      return Object.assign(
        {},
        state,
        { turn: state.turn.set('applyConditions', action.checked) }
      );
    case 'TOGGLE_CONDITION':
      // todo
      return state;
    case 'APPLY_DAMAGE':
      const item = state.combatants.find(x => x.name === state.turn.target);
      const index = state.combatants.indexOf(item);
      const newItem = item.set('hp', Math.max(0, item.hp - state.turn.damage));

      return Object.assign(
        {},
        state,
        {
          combatants: state.combatants.set(index, newItem),
          turn: new Turn()
        }
      );
    case 'DEATH_SAVE':
      return Object.assign({}, state, { turn: state.turn.set('deathSave', action.value) });
    case 'DEATH_FAIL':
      return Object.assign({}, state, { turn: state.turn.set('deathFail', action.value) });
    case 'END_TURN':
      // Assumes that the combatants array is sorted by initiative.
      const player = state.combatants.get(state.currentPlayer);
      const nextIndex = state.currentPlayer + 1 === state.combatants.size ? 0 : state.currentPlayer + 1;
      const round = nextIndex == 0 ? state.round + 1 : state.round;

      if (state.turn.deathSave) {
        return Object.assign({}, state, {
          combatants: state.combatants.set(state.currentPlayer, player.set('deathSaves', player.deathSaves + 1)),
          round: round,
          currentPlayer: nextIndex,
          turn: new Turn()
        });
      } else if (state.turn.deathFail) {
        return Object.assign({}, state, {
          combatants: state.combatants.set(state.currentPlayer, player.set('deathFails', player.deathFails + 1)),
          round: round,
          currentPlayer: nextIndex,
          turn: new Turn()
        });
      } else {
        return Object.assign({}, state, {
          round: round,
          currentPlayer: nextIndex,
          turn: new Turn()
        });
      }
    default:
      return state;
  }
};
