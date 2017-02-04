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
    case 'SPEND_HIT_DIE':
      const hpToAdd = action.value + state.getIn([action.playerId, 'modifiers']).constitution;
      const maxHp = state.getIn([action.playerId, 'maxHp']);
      return state
        .updateIn([action.playerId, 'hitDie'], v => v - 1)
        .updateIn([action.playerId, 'hp'], hp => Math.min(hp + hpToAdd, maxHp));
    case 'LONG_REST':
      // TODO - track character death, don't apply long rest benefits
      return state.withMutations(map => {
        state.forEach((item, id) => {
          map
            .setIn([id, 'hp'], item.maxHp)
            .updateIn([id, 'hitDie'], h => h + Math.max(1, Math.floor((item.level - h) / 2)))
        });
      });
    default:
      return state;
  }
}
const persistableReducer = persistable(defaultState, players);

export default persistableReducer;
