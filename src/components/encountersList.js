import React from 'react';

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
    <li key={encounter}><span>{encounter}</span><button onClick={() => onStart(encounter)}>Start</button></li>
);

export default EncountersList;
