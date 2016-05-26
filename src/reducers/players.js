import { Map } from 'immutable';

const defaultState = Map({});

export default function players(state = defaultState, action) {
  switch(action.type) {
    case 'ADD_PLAYER':
      return state.set(action.playerId, action.player);
    default:
      return state;
  }
}
