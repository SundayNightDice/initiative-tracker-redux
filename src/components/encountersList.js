import React from 'react';
import EncounterStatus from './../models/encounterStatus';

const EncountersList = (props) => (
  <div className="encounters">
    <h2>Encounters</h2>
      <ul>
        {props.encounters.map(e => EncounterItem(e[0], e[1], props.onStartEncounter, props.onDeleteEncounter))}
      </ul>
      <button onClick={props.onAddEncounter}>Add Encounter</button>
  </div>
);

const EncounterItem = (id, encounter, onStart, onDelete) => (
    <li key={id} className="encounter">
      <span className={encounter.status}>{encounter.name}</span>
      {
          encounter.status === EncounterStatus.PENDING ?
            <div>
              <button className="start-encounter" onClick={() => onStart(id)}>Start</button>
              <button className="delete-encounter" onClick={() => onDelete(id)}></button>
            </div> :
            null
      }
    </li>
);

export default EncountersList;
