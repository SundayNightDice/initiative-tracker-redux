import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import enemies from './enemies';
import encounters from './encounters';
import players from './players';

export default combineReducers({
  enemies,
  encounters,
  players,
  form: formReducer.plugin({
    addEnemy: (state, action) => {
      switch(action.type) {
        case 'ADD_ENEMY':
          return undefined;
        default:
          return state;
      }
    },
    addPlayer: (state, action) => state,
    turnDamage: (state, action) => state,
    turnHealing: (state, action) => state,
    deathSaves: (state, action) => {
      switch(action.type) {
        case 'redux-form/CHANGE':
          if (action.field === 'save' && action.value) {
            return Object.assign({}, state, { fail: {} });
          } else if (action.field === 'fail' && action.value) {
            return Object.assign({}, state, { save: {} });
          }
          else {
            return state;
          }
        case 'DEATH_SAVE':
          return undefined;
        default:
          return state;
      }
    }
  })
});
