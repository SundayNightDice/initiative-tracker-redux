import { Map } from 'immutable';

const defaultState = Map({});

export default function builder(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_ENEMY':
      const id = action.enemy.name.replace(/ /g, '').toUpperCase();
      return state.set(id, action.enemy);
    default:
      return state;
  }
}
