import React from 'react';
import Header from './../containers/header';
import Encounter from './../containers/encounter';
import EncounterBuilder from './../containers/encounterBuilder';
import EncounterSummary from './encounterSummary';
import Home from './../containers/home';

const App = (props) => {
  return (
    <div>
      <Header />
      { props.id ? renderContent(props) : <Home /> }
    </div>
  );
};

const renderContent = (props) => {
  switch(props.encounter.status) {
    case 'active':
      return <Encounter id={props.id} />;
    case 'building':
      return <EncounterBuilder id={props.id} />;
    default:
      return <EncounterSummary
        id={props.id}
        status={props.encounter.status}
        onCloseEncounter={props.onCloseEncounter} />
  }
};

export default App;
