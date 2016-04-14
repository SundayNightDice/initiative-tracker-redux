import { connect } from 'react-redux';

import TurnOptions from './../components/TurnOptions';

import dealDamage from './../actions/dealDamage';
import deathFail from './../actions/deathFail';
import deathSave from './../actions/deathSave';
import endTurn from './../actions/endTurn';
import setDamage from './../actions/setDamage';
import setTarget from './../actions/setTarget';
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
    onTargetSelected: (e) => dispatch(setTarget(e.target.value)),
    onToggleApplyCondition: (e) => dispatch(toggleApplyCondition(e.target.checked)),
    onToggleCondition: (condition, checked) => dispatch(toggleCondition(condition, checked)),
    onDamageChange: (e) => dispatch(setDamage(e.target.value)),
    onApplyDamage: (e) => dispatch(dealDamage()),
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
