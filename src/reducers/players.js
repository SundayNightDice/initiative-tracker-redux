import { Map } from 'immutable';

const defaultState = Map({});

export default function players(state = defaultState, action) {
  switch(action.type) {
    case 'ADD_PLAYER':
      return state.set(action.playerId, action.player);
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
