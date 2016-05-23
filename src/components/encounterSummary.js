import React from 'react';

const EncounterSummary = (props) => (
  <div className="box">
    <div>
      <h2>Encounter {props.status === 'victory' ? 'Victory' : 'Failure'}</h2>
    </div>
    <div className="builderOptions">
    </div>
  </div>
);

export default EncounterSummary;
