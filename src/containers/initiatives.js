import { connect } from 'react-redux';
import EncounterList from './../components/encounterList';

const mapStateToProps = (state) => {
  return {
    combatants: state.encounter.combatants,
    currentPlayer: state.encounter.currentPlayer
  };
};

const Initiatives = connect(
  mapStateToProps,
  null
)(EncounterList);

export default Initiatives;
