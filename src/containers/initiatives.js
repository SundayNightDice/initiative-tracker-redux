import { connect } from 'react-redux';
import EncounterList from './../components/encounterList';

const mapStateToProps = (state) => {
  const combatants = state.encounter.combatants;
  const order = state.encounter.order;
  return {
    combatants: order.map(id => combatants.get(id)),
    currentPlayer: combatants.get(order.get(state.encounter.currentPlayer))
  };
};

const Initiatives = connect(
  mapStateToProps,
  null
)(EncounterList);

export default Initiatives;
