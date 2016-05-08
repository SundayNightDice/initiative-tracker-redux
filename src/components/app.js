import React from 'react';
import Header from './../containers/header';
import Encounter from './../containers/encounter';
import EncounterBuilder from './../containers/encounterBuilder';
import EncounterSummary from './encounterSummary';

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
        return (<Encounter id={this.props.id} />);
      case 'pending':
        return <EncounterBuilder id={this.props.id} />;
      default:
        return (<EncounterSummary status={status} />);
    }
  }
}
