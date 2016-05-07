import { combineReducers } from 'redux';
import enemies from './enemies';
import encounter from './encounter';
import players from './players';

export default combineReducers({
  enemies,
  encounter,
  players
});
