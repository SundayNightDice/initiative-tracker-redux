import { connect } from 'react-redux';

import Encounter from './../components/Encounter';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id;
  const encounter = state.encounters.get(id);
  return {
    id: id,
    status: encounter.status
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const EncounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Encounter);

export default EncounterContainer;
