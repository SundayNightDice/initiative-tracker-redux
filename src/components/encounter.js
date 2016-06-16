import React from 'react';

import EncounterSummary from './../containers/encounterSummary';
import EncounterTurns from './../containers/encounterTurns';
import Initiatives from './../containers/initiatives';

const Encounter = (props) => {
  switch (props.status) {
    case 'initiatives':
      return <Initiatives id={props.id} />
    case 'active':
      return <EncounterTurns id={props.id} />
    default:
      return <EncounterSummary id={props.id} />
  }
};

export default Encounter;
