import React from 'react';
import Header from './../containers/header';
import Encounter from './../containers/encounter';
import EncounterBuilder from './../containers/encounterBuilder';
import EncounterSummary from './encounterSummary';
import Initiatives from './../containers/initiatives';
import EncounterStatus from './../models/encounterStatus';

const App = (props) => {
  return (
    <div>
      <Header />
      { props.children }
    </div>
  );
};

const renderContent = (props) => {
  switch(props.encounter.status) {
    case EncounterStatus.INITIATIVES:
      return <Initiatives id={props.id} />
    case EncounterStatus.ACTIVE:
      return <Encounter id={props.id} />;
    case EncounterStatus.BUILDING:
      return <EncounterBuilder id={props.id} />;
    default:
      return <EncounterSummary
        id={props.id}
        status={props.encounter.status}
        onCloseEncounter={props.onCloseEncounter} />
  }
};

export default App;
