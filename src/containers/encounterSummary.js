import { connect } from 'react-redux';
import closeEncounter from './../actions/closeEncounter';
import EncounterSummary from './../components/encounterSummary';

const mapStateToProps = (state, ownProps) => {
  const encounter = state.encounters.get(ownProps.id);
  return {
    status: encounter.staus
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCloseEncounter: () => dispatch(closeEncounter('complete', ownProps.id))
  }
};

const EncounterSummaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterSummary);

export default EncounterSummaryContainer;
