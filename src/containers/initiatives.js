import { connect } from 'react-redux';

import beginCombat from './../actions/beginCombat';
import setInitiative from './../actions/setInitiative';
import InitiativeRoll from './../components/InitiativeRoll';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const encounter = state.encounters.get(id);
  const combatants = encounter.combatants;
  return {
    combatants: combatants,
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
