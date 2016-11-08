import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers/rootReducer';

import App from './components/app';
import Home from './containers/home';
import Encounter from './containers/encounter';
import EncounterBuilder from './containers/encounterBuilder';
import DevTools from './dev/DevTools';
import { save, load } from './persistence/localStorage';

import monstersLoaded from './actions/monstersLoaded';
import monsters from './data/monsters';

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

store.dispatch(monstersLoaded(monsters));

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
          <Redirect path="*" to="/" />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
