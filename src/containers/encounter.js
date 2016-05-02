import { connect } from 'react-redux';

import dealDamage from './../actions/dealDamage';
import dealHealing from './../actions/dealHealing';
import deathFail from './../actions/deathFail';
import deathSave from './../actions/deathSave';
import criticalDamage from './../actions/criticalDamage';
import criticalSave from './../actions/criticalSave';
import endTurn from './../actions/endTurn';
import setDamage from './../actions/setDamage';
import setHealing from './../actions/setHealing';
import setDamageTarget from './../actions/setDamageTarget';
import setHealingTarget from './../actions/setHealingTarget';
import toggleApplyCondition from './../actions/toggleApplyCondition';
import toggleCondition from './../actions/toggleCondition';

import Encounter from './../components/Encounter';

const mapStateToProps = (state) => {
  const combatants = state.encounter.combatants;
  const order = state.encounter.order;
  return {
    combatants: order.map(id => combatants.get(id)),
    currentPlayer: combatants.get(order.get(state.encounter.currentPlayer)),
    conditions: state.encounter.conditions,
    turn: state.encounter.turn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDamageTargetSelected: (e) => dispatch(setDamageTarget(e.target.value)),
    onHealTargetSelected: (e) => dispatch(setHealingTarget(e.target.value)),
    onToggleApplyCondition: (e) => dispatch(toggleApplyCondition(e.target.checked)),
    onToggleCondition: (condition, checked) => dispatch(toggleCondition(condition, checked)),
    onDamageChange: (e) => dispatch(setDamage(e.target.value)),
    onHealChange: (e) => dispatch(setHealing(e.target.value)),
    onApplyDamage: (e) => dispatch(dealDamage()),
    onApplyHealing: (e) => dispatch(dealHealing()),
    onDeathSave: (e) => dispatch(deathSave(e.target.checked)),
    onDeathFail: (e) => dispatch(deathFail(e.target.checked)),
    onCriticalDamage: (e) => dispatch(criticalDamage(e.target.checked)),
    onCriticalSave: (e) => dispatch(criticalSave(e.target.checked)),
    onEndTurn: (e) => dispatch(endTurn())
  };
};

const EncounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Encounter);

export default EncounterContainer;
