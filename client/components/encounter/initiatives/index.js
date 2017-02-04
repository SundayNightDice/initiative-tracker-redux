import { connect } from 'react-redux';

import beginCombat from '../../../actions/beginCombat';
import setInitiative from '../../../actions/setInitiative';
import InitiativeRoll from './InitiativeRoll';

const Initiatives = connect(
  (state, ownProps) => ({
    combatants: state.encounters
      .get(ownProps.id)
      .combatants
      .valueSeq()
  }),
  (dispatch, ownProps) => ({
    onSetInitiative: (combatantId, initiative) => dispatch(setInitiative(ownProps.id, combatantId, initiative)),
    onBeginCombat: () => dispatch(beginCombat(ownProps.id))
  })
)(InitiativeRoll);

export default Initiatives;
