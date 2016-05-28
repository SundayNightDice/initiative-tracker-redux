import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers/rootReducer';
import App from './containers/app';
import Home from './containers/Home';
import DevTools from './dev/DevTools';

import '../styles/style.less';

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(browserHistory)
    ),
    DevTools.instrument()
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Redirect path="*" to="/" />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
