import { connect } from 'react-redux';

import TurnOptions from './../components/TurnOptions';

import dealDamage from './../actions/dealDamage';
import dealHealing from './../actions/dealHealing';
import deathFail from './../actions/deathFail';
import deathSave from './../actions/deathSave';
import endTurn from './../actions/endTurn';
import setDamage from './../actions/setDamage';
import setHealing from './../actions/setHealing';
import setDamageTarget from './../actions/setDamageTarget';
import setHealingTarget from './../actions/setHealingTarget';
import toggleApplyCondition from './../actions/toggleApplyCondition';
import toggleCondition from './../actions/toggleCondition';

const mapStateToProps = (state) => {
  return {
    currentPlayer: state.encounter.currentPlayer,
    combatants: state.encounter.combatants,
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
    onEndTurn: (e) => dispatch(endTurn())
  };
};

const Turn = connect(
  mapStateToProps,
  mapDispatchToProps
)(TurnOptions);

export default Turn;
