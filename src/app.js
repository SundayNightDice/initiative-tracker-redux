import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import EncounterList from './components/encounterList';
import TurnOptions from './components/turnOptions';
import '../styles/style.less';

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
          onTargetSelected={e => store.dispatch({ type: 'SET_TARGET', value: e.target.value})}
          onToggleApplyCondition={e => store.dispatch({ type: 'TOGGLE_APPLY_CONDITION', checked: e.target.checked })}
          onToggleCondition={(condition, checked) => store.dispatch({ type: 'TOGGLE_CONDITION', condition: condition, checked: checked})}
          onDamageChange={e => store.dispatch({ type: 'CHANGE_DAMAGE', value: e.target.value})}
          onApplyDamage={e => store.dispatch({ type: 'APPLY_DAMAGE', value: e.value})}
          onDeathSave={e => store.dispatch({ type: 'DEATH_SAVE', value: e.target.value })}
          onDeathFail={e => store.dispatch({ type: 'DEATH_FAIL', value: e.target.value })}
          onEndTurn={e => store.dispatch({ type: 'END_TURN' })}
          />
      </div>
      </div>,
    root
  );
}

render();
store.subscribe(render);
