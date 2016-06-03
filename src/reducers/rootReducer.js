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
    turnHealing: (state, action) => state
  })
});
