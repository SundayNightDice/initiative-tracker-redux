const defaultState = {
  expandedOption: null
};

const home = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_PLAYER':
      return defaultState;
    case 'TOGGLE_ADD_PLAYER':
      return action.open ? { expandedOption: 'addPlayer' } : defaultState;
    default:
      return state;
  }
};

export default home;
