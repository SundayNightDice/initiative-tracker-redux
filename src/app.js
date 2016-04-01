import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import EncounterList from './components/encounterList';
import TurnOptions from './components/turnOptions';
import '../styles/style.less';

import dealDamage from './actions/dealDamage';
import deathFail from './actions/deathFail';
import deathSave from './actions/deathSave';
import endTurn from './actions/endTurn';
import setDamage from './actions/setDamage';
import setTarget from './actions/setTarget';
import toggleApplyCondition from './actions/toggleApplyCondition';
import toggleCondition from './actions/toggleCondition';

const store = createStore(rootReducer);
const root = document.getElementById('root');

function render() {
  const state = store.getState().encounter;
  ReactDOM.render(
    <div>
      <header>
        <span>D&D Initiative Tracker</span>
        <span>{'Round ' + state.round}</span>
      </header>
      <div id="contents">
        <EncounterList
          combatants={state.combatants}
          currentPlayer={state.currentPlayer} />
        <TurnOptions
          currentPlayer={state.currentPlayer}
          combatants={state.combatants}
          conditions={state.conditions}
          turn={state.turn}
          onTargetSelected={e => store.dispatch(setTarget(e.target.value))}
          onToggleApplyCondition={e => store.dispatch(toggleApplyCondition(e.target.checked))}
          onToggleCondition={(condition, checked) => store.dispatch(toggleCondition(condition, checked))}
          onDamageChange={e => store.dispatch(setDamage(e.target.value))}
          onApplyDamage={e => store.dispatch(dealDamage())}
          onDeathSave={e => store.dispatch(deathSave(e.target.value))}
          onDeathFail={e => store.dispatch(deathFail(e.target.value))}
          onEndTurn={e => store.dispatch(endTurn())}
          />
      </div>
    </div>,
    root
  );
}

render();
store.subscribe(render);
