import { connect } from 'react-redux';

import closeEncounter from '../../../actions/closeEncounter';
import EncounterSummary from './encounterSummary';

const EncounterSummaryContainer = connect(
  (state, ownProps) => {
    const encounter = state.encounters.get(ownProps.id);
    return {
      status: encounter.status,
      players: encounter.combatants.filter(c => c.type === 'player'),
      enemies: encounter.combatants.filter(c => c.type === 'enemy')
    };
  },
  (dispatch, ownProps) => ({
      onCloseEncounter: () => dispatch(closeEncounter(ownProps.id, 'complete'))
  })
)(EncounterSummary);

export default EncounterSummaryContainer;
