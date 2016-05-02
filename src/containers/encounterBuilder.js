import { connect } from 'react-redux';

import addEnemy from './../actions/addEnemy';
import startEncounter from './../actions/startEncounter';

import EncounterBuilder from './../components/encounterBuilder';

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEnemy: (enemy) => dispatch(addEnemy(enemy)),
    onStart: (e) => dispatch(startEncounter(e))
  };
};

const EncounterBuilderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterBuilder);

export default EncounterBuilderContainer;
