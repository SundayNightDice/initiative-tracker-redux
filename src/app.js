import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import App from './containers/app';
import DevTools from './dev/DevTools';

import '../styles/style.less';

const enhancer = compose(DevTools.instrument());
const store = createStore(rootReducer, {}, enhancer);

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
