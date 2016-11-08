import { Map } from 'immutable';

const defaultState = new Map({});

export default function monsters(state = defaultState, action) {
  switch(action.type) {
    case 'MONSTERS_LOADED':
      return action.monsters;
    default:
      return state;
  }
}
