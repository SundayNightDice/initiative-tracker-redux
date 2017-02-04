import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers/rootReducer';

import App from './components/app';
import Home from './components/home';
import Encounter from './components/encounter';
import EncounterBuilder from './components/builder';
import Rest from './components/rest';
import Settings from './components/settings';
import DevTools from './dev/DevTools';
import { save, load } from './persistence/localStorage';

import initialization from './actions/initialization';

import './styles/style.less';

const initialState = load();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(browserHistory)
    ),
    DevTools.instrument()
  )
);

if (module.hot) {
  module.hot.accept('./reducers/rootReducer', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;

    store.replaceReducer(nextRootReducer);
  });
}

store.dispatch(initialization());

store.subscribe(() => {
  save(store.getState());
});

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="build/:id" component={EncounterBuilder} />
          <Route path="encounter/:id" component={Encounter} />
          <Route path="rest" component={Rest} />
          <Route path="settings" component={Settings} />
          <Redirect path="*" to="/" />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
