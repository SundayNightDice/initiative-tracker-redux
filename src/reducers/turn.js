import Turn from './../models/turn';

const defaultState = null;

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_DAMAGE_TARGET':
      return state.setIn(['damage', 'target'], action.target);
    case 'SET_DAMAGE':
      return state.setIn(['damage', 'value'], action.value);
    case 'CRITICAL_DAMAGE':
      return state.set('criticalDamage', action.value);
    case 'SET_HEALING_TARGET':
      return state.setIn(['healing', 'target'], action.target);
    case 'SET_HEALING':
      return state.setIn(['healing', 'value'], action.value);
    case 'TOGGLE_APPLY_CONDITION':
      return state.set('applyConditions', action.checked);
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
