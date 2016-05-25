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
    <li key={encounter[0]}>
      <span className={"encounter " + encounter[1].status}>{encounter[0]}</span>
      { encounter[1].status === 'pending' ? <button onClick={() => onStart(encounter[0])}>Start</button> : null }
    </li>
);

export default EncountersList;
