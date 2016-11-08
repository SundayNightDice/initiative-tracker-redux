import { connect } from 'react-redux';

import beginCombat from './../actions/beginCombat';
import setInitiative from './../actions/setInitiative';
import InitiativeRoll from './../components/InitiativeRoll';

const mapStateToProps = (state, ownProps) => {
  return {
    combatants: state.encounters
      .get(ownProps.id)
      .combatants
      .valueSeq()
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSetInitiative: (combatantId, initiative) => dispatch(setInitiative(ownProps.id, combatantId, initiative)),
    onBeginCombat: () => dispatch(beginCombat(ownProps.id))
  };
};

const Initiatives = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitiativeRoll);

export default Initiatives;
