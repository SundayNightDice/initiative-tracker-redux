import { combineReducers } from 'redux';
import enemies from './enemies';
import encounter from './encounter';

export default combineReducers({
  enemies,
  encounter
});
