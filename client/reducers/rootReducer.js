import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import classes from './classes';
import encounters from './encounters';
import monsters from './monsters';
import players from './players';
import races from './races';
import ui from './ui';

export default combineReducers({
  classes,
  encounters,
  monsters,
  players,
  races,
  form: formReducer.plugin({
    addEnemy: (state, action) => state,
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
        default:
          return state;
      }
    }
  }),
  routing: routerReducer,
  ui
});
