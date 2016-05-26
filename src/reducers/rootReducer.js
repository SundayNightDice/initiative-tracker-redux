import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import enemies from './enemies';
import encounters from './encounters';
import players from './players';

export default combineReducers({
  enemies,
  encounters,
  players,
  form
});
