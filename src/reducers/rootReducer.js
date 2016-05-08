import { combineReducers } from 'redux';
import enemies from './enemies';
import encounters from './encounters';
import players from './players';

export default combineReducers({
  enemies,
  encounters,
  players
});
