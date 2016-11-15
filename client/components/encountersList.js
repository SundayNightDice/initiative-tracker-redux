import React from 'react';
import EncounterStatus from './../models/encounterStatus';

const EncountersList = (props) => (
  <div className="encounters">
    <h2>Encounters</h2>
      <div className="options">
        <button onClick={props.onAddEncounter}>Add Encounter</button>
      </div>
      <ul>
        {props.encounters.map(e => EncounterItem(e[0], e[1], props.onStartEncounter, props.onDeleteEncounter, props.onEditEncounter))}
      </ul>
  </div>
);

const EncounterItem = (id, encounter, onStart, onDelete, onEdit) => (
    <li key={id} className="encounter">
      <span className={encounter.status}>{encounter.name}</span>
        <div>
          { encounter.status === EncounterStatus.PENDING ?
              <button className="start-encounter" onClick={() => onStart(id)}>Start</button> :
              null
          }
          {
            encounter.status === EncounterStatus.PENDING ||
            encounter.status === EncounterStatus.BUILDING ?
              <button className="edit-encounter" onClick={() => onEdit(id)}></button> :
              null
          }
          <button className="delete-encounter" onClick={() => onDelete(id)}></button>
        </div>
    </li>
);

export default EncountersList;
