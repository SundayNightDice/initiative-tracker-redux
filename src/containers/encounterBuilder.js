import { connect } from 'react-redux';

import addEnemy from './../actions/addEnemy';
import enemiesAdded from './../actions/enemiesAdded';

import EncounterBuilder from './../components/encounterBuilder';

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddEnemy: (enemy) => dispatch(addEnemy(enemy)),
    onDone: () => dispatch(enemiesAdded(ownProps.id))
  };
};

const EncounterBuilderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterBuilder);

export default EncounterBuilderContainer;
