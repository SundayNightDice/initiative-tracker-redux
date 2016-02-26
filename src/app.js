import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Hello from './hello';
import nameReducer from './reducers/nameReducer';
import '../styles/style.less';

const store = createStore(nameReducer);
const root = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Hello name={store.getState()} />,
    root
  );
}

render();
store.subscribe(render);
