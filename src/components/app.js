import React from 'react';
import Header from './../containers/header';
import Initiatives from './../containers/initiatives';
import Turn from './../containers/turn';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="contents">
          <Initiatives />
          <Turn />
        </div>
      </div>
    );
  }
}
