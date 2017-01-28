import { connect } from 'react-redux';

import dealDamage from './../actions/dealDamage';
import dealHealing from './../actions/dealHealing';
import deathSave from './../actions/deathSave';
import endTurn from './../actions/endTurn';
import toggleCondition from './../actions/toggleCondition';

import EncounterTurns from './../components/turn/EncounterTurns';
import { getDamageTargets, getHealingTargets } from './../selectors/getTurnTargets';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const encounter = state.encounters.get(id);
  const combatants = encounter.combatants;
  const order = encounter.order;

  return {
    combatants: order.map(id => combatants.get(id)),
    currentPlayer: combatants.get(order.get(encounter.currentPlayer)),
    damageTargets: getDamageTargets(state),
    healingTargets: getHealingTargets(state),
    round: encounter.round
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.id;
  return {
    onToggleCondition: (condition, checked) => dispatch(toggleCondition(condition, checked, id)),
    onApplyDamage: (e) => dispatch(dealDamage(e, id)),
    onApplyHealing: (e) => dispatch(dealHealing(e, id)),
    onDeathSave: (e) => dispatch(deathSave(e, id)),
    onEndTurn: (e) => dispatch(endTurn(id))
  };
};

const EncounterTurnsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncounterTurns);

export default EncounterTurnsContainer;
