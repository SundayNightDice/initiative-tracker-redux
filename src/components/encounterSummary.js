import React from 'react';
import EncounterStatus from './../models/encounterStatus';

const EncounterSummary = (props) => (
  <div className="box">
    <div>
      <h2>Encounter {props.status === EncounterStatus.VICTORY ? 'Victory' : 'Failure'}</h2>
    </div>
    <div className="builderOptions">
      <button onClick={() => props.onCloseEncounter()}>Close</button>
    </div>
  </div>
);

export default EncounterSummary;
