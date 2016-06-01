import Turn from './../models/turn';

const defaultState = null;

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_HEALING_TARGET':
      return state.setIn(['healing', 'target'], action.target);
    case 'SET_HEALING':
      return state.setIn(['healing', 'value'], action.value);
    case 'TOGGLE_CONDITION':
      return state; //TODO
    case 'DEATH_SAVE':
      return state
        .set('deathSave', action.value)
        .set('deathFail', false);
    case 'DEATH_FAIL':
      return state
        .set('deathFail', action.value)
        .set('deathSave', false);
    case 'CRITICAL_SAVE':
      return state.set('criticalSave', action.value);
    default:
      return state;
  }
}
