import { connect } from 'react-redux';

import addEnemy from './../actions/addEnemy';
import enemiesAdded from './../actions/enemiesAdded';
import setEncounterName from './../actions/setEncounterName';

import EncounterBuilder from './../components/encounterBuilder';

const mapStateToProps = (state, ownProps) => {
  const encounter = state.encounters.get(ownProps.params.id);
  return {
    enemies: encounter.enemies.entrySeq(),
    monsters: state.monsters.entrySeq(),
    name: encounter.name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSetEncounterName: (e) => dispatch(setEncounterName(ownProps.params.id, e.target.value)),
    onAddEnemy: (enemy) => dispatch(addEnemy(enemy, ownProps.params.id)),
    onDone: () => dispatch(enemiesAdded(ownProps.params.id))
  };
};

const EncounterBuilderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterBuilder);

export default EncounterBuilderContainer;
