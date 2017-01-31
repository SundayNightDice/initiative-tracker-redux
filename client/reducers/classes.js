import { List } from 'immutable';

const defaultState = List([]);

export default function classes(state = defaultState, action) {
  switch(action.type) {
    case 'CLASSES_LOADED':
      return action.classes;
    default:
      return state;
  }
}
