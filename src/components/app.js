import React from 'react';
import Header from './../containers/header';
import Encounter from './../containers/encounter';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Encounter />
      </div>
    );
  }
}
