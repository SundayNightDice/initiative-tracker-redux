import React from 'react';
import Header from './../containers/header';
import Encounter from './../containers/encounter';
import EncounterBuilder from './../containers/encounterBuilder';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        { this.renderContent(this.props.status) }
      </div>
    );
  }

  renderContent(status) {
    switch (status) {
      case 'active':
        return (<Encounter />);
      case 'pending':
        return <EncounterBuilder />;
      default:
        return (<p>{status}</p>);
    }
  }
}
