import { List } from 'immutable';

const defaultState = List([]);

export default function races(state = defaultState, action) {
  switch(action.type) {
    case 'RACES_LOADED':
      return action.races;
    default:
      return state;
  }
}
