import { connect } from 'react-redux';

import dealDamage from './../actions/dealDamage';
import dealHealing from './../actions/dealHealing';
import deathFail from './../actions/deathFail';
import deathSave from './../actions/deathSave';
import criticalSave from './../actions/criticalSave';
import endTurn from './../actions/endTurn';
import setHealing from './../actions/setHealing';
import setHealingTarget from './../actions/setHealingTarget';
import toggleCondition from './../actions/toggleCondition';

import Encounter from './../components/Encounter';
import { getDamageTargets, getHealingTargets } from './../selectors/getTurnTargets';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const encounter = state.encounters.get(id);
  const combatants = encounter.combatants;
  const order = encounter.order;
  return {
    combatants: order.map(id => combatants.get(id)),
    currentPlayer: combatants.get(order.get(encounter.currentPlayer)),
    conditions: encounter.conditions,
    turn: encounter.turn,
    damageTargets: getDamageTargets(state),
    healingTargets: getHealingTargets(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHealTargetSelected: (e) => dispatch(setHealingTarget(e.target.value, ownProps.id)),
    onToggleCondition: (condition, checked) => dispatch(toggleCondition(condition, checked, ownProps.id)),
    onHealChange: (e) => dispatch(setHealing(e.target.value, ownProps.id)),
    onApplyDamage: (e) => dispatch(dealDamage(e, ownProps.id)),
    onApplyHealing: (e) => dispatch(dealHealing(ownProps.id)),
    onDeathSave: (e) => dispatch(deathSave(e.target.checked, ownProps.id)),
    onDeathFail: (e) => dispatch(deathFail(e.target.checked, ownProps.id)),
    onCriticalSave: (e) => dispatch(criticalSave(e.target.checked, ownProps.id)),
    onEndTurn: (e) => dispatch(endTurn(ownProps.id))
  };
};

const EncounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Encounter);

export default EncounterContainer;
