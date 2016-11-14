import { Map } from 'immutable';
import persistable from './persistable';

const defaultState = Map({});
const players = (state, action) => {
  switch(action.type) {
    case 'ADD_PLAYER':
      return state.set(action.playerId, action.player);
    case 'DELETE_PLAYER':
      return state.delete(action.playerId);
    case 'CLOSE_ENCOUNTER':
      return state.withMutations(map => {
        action.results.players.forEach(player => {
          map.setIn([player.id, 'hp'], player.hp);
        });
      });
    default:
      return state;
  }
}
const persistableReducer = persistable(defaultState, players);

export default persistableReducer;
