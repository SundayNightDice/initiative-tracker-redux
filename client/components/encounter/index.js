import React from 'react';
import { connect } from 'react-redux';

import EncounterSummary from './summary';
import EncounterTurns from '../turn';
import Initiatives from './initiatives';
import EncounterStatus from '../../models/encounterStatus';

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

const EncounterContainer = connect(
  (state, ownProps) => {
    const id = ownProps.params.id;
    const encounter = state.encounters.get(id);
    return {
      id: id,
      status: encounter.status
    };
  },
  (dispatch, ownProps) => ({})
)(Encounter);

export default EncounterContainer;
