import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import App from './components/app';
import startEncounter from './actions/startEncounter';

import '../styles/style.less';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

console.log('dispatching');
store.dispatch(startEncounter());
