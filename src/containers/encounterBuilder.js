import { connect } from 'react-redux';

import addEnemy from './../actions/addEnemy';
import enemiesAdded from './../actions/enemiesAdded';

import EncounterBuilder from './../components/encounterBuilder';
import getEnemiesForEncounter from './../selectors/getEnemiesForEncounter';

const mapStateToProps = (state, ownProps) => {
  return {
    enemies: getEnemiesForEncounter(state, ownProps.id).entrySeq()
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddEnemy: (enemy) => dispatch(addEnemy(enemy, ownProps.id)),
    onDone: () => dispatch(enemiesAdded(ownProps.id))
  };
};

const EncounterBuilderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterBuilder);

export default EncounterBuilderContainer;
