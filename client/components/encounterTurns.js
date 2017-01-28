import React from 'react';
import InitiativeList from './initiativeList';
import TurnOptions from './turn/turnOptions';

const EncounterTurns = (props) => (
  <div id="contents">
    <InitiativeList
      combatants={props.combatants}
      currentPlayer={props.currentPlayer}
      round={props.round} />
    <TurnOptions
      currentPlayer={props.currentPlayer}
      damageTargets={props.damageTargets}
      healingTargets={props.healingTargets}
      onToggleCondition={props.onToggleCondition}
      onApplyDamage={props.onApplyDamage}
      onApplyHealing={props.onApplyHealing}
      onDeathSave={props.onDeathSave}
      onEndTurn={props.onEndTurn} />
  </div>
);

export default EncounterTurns;
