import React from 'react';

import EncounterSummary from './../containers/encounterSummary';
import EncounterTurns from './../containers/encounterTurns';
import Initiatives from './../containers/initiatives';
import EncounterStatus from './../models/encounterStatus';

const Encounter = (props) => {
  switch (props.status) {
    case EncounterStatus.INITIATIVES:
      return <Initiatives id={props.id} />
    case EncounterStatus.ACTIVE:
      return <EncounterTurns id={props.id} />
    default:
      return <EncounterSummary id={props.id} />
  }
};

export default Encounter;
