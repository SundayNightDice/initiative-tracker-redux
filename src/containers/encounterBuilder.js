import { connect } from 'react-redux';

import addEnemy from './../actions/addEnemy';
import startEncounter from './../actions/startEncounter';

import EncounterBuilder from './../components/encounterBuilder';

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies,
    players: state.players
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddEnemy: (enemy) => dispatch(addEnemy(enemy)),
    onStart: (e, p) => dispatch(startEncounter(e, p, ownProps.id))
  };
};

const EncounterBuilderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterBuilder);

export default EncounterBuilderContainer;
