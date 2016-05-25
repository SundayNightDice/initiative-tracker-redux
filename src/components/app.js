import React from 'react';
import Header from './../containers/header';
import Encounter from './../containers/encounter';
import EncounterBuilder from './../containers/encounterBuilder';
import EncounterSummary from './encounterSummary';
import Home from './../containers/home';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.id ?
            this.renderContent(this.props.encounter) :
            <Home />
        }
      </div>
    );
  }

  renderContent(activeEncounter) {
    switch (activeEncounter.status) {
      case 'active':
        return (<Encounter id={this.props.id} />);
      case 'building':
        return <EncounterBuilder id={this.props.id} />;
      default:
        return (<EncounterSummary
          id={this.props.id}
          status={activeEncounter.status}
          onCloseEncounter={this.props.onCloseEncounter} />);
    }
  }
}
