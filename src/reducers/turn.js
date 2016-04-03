import Turn from './../models/turn';

const defaultState = new Turn();

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_TARGET':
      return state.set('target', action.target);
    case 'SET_DAMAGE':
      return state.set('damage', action.value);
    case 'DEAL_DAMAGE':
      return new Turn();
    case 'TOGGLE_APPLY_CONDITION':
      return state.set('applyConditions', action.checked);
    case 'TOGGLE_CONDITION':
      return state; //TODO
    case 'DEATH_SAVE':
      return state.set('deathSave', action.value);
    case 'DEATH_FAIL':
      return state.set('deathFail', action.value);
    case 'END_TURN':
      return new Turn();
    default:
      return state;
  }
}
