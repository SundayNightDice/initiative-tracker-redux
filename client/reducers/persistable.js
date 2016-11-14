// A higher-order reducer that will clear the state on a CLEAR action.

const persistable = (defaultState, wrappedReducer) => {
  return (state = defaultState, action) => {
    if (action.type === 'CLEAR_PERSISTENCE') {
      return defaultState;
    }
    else {
      return wrappedReducer(state, action);
    }
  }
};

export default persistable;
