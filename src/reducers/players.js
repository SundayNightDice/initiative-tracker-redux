import { Map } from 'immutable';

const defaultState = Map({
  'PL1': {
    name: 'Bella',
    maxHp: 24,
    initiativeBonus: 7
  },
  'PL2': {
    name: 'Cedric',
    maxHp: 25,
    initiativeBonus: 6
  },
  'PL3': {
    name: 'Fargrim',
    maxHp: 30,
    initiativeBonus: 5
  },
  'PL4': {
    name: 'Kasimir',
    maxHp: 18,
    initiativeBonus: 4
  },
  'PL5': {
    name: 'Sibilant Caius',
    maxHp: 16,
    initiativeBonus: 3
  }
});

export default function players(state = defaultState, action) {
  switch(action.type) {
    case 'ADD_PLAYER':
      const playerId = action.player.name.trim();
      return state.set(playerId, action.player);
    default:
      return state;
  }
}
