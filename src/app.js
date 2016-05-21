import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import App from './containers/app';
import DevTools from './dev/DevTools';

import '../styles/style.less';

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunkMiddleware),
    DevTools.instrument()
  ));

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
