import React from 'react';
import EncounterStatus from './../models/encounterStatus';

const EncountersList = (props) => (
  <div className="encounters">
    <h2>Encounters</h2>
      <ul>
        {props.encounters.map(e => EncounterItem(e, props.onStartEncounter))}
      </ul>
      <button onClick={props.onAddEncounter}>Add Encounter</button>
  </div>
);

const EncounterItem = (encounter, onStart) => (
    <li key={encounter[0]}>
      <span className={"encounter " + encounter[1].status}>{encounter[1].name}</span>
      { encounter[1].status === EncounterStatus.PENDING ? <button onClick={() => onStart(encounter[0])}>Start</button> : null }
    </li>
);

export default EncountersList;
