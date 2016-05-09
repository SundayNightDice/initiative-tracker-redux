import { Map } from 'immutable';

const defaultState = Map({});

export default function builder(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_ENEMY':
      return state.set(action.id, action.enemy);
    default:
      return state;
  }
}
