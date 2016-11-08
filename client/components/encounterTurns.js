import React from 'react';
import InitiativeList from './initiativeList';
import TurnOptions from './turnOptions';

const EncounterTurns = (props) => (
  <div id="contents">
    <InitiativeList
      combatants={props.combatants}
      currentPlayer={props.currentPlayer} />
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
