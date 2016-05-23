import React from 'react';

import InitiativeList from './initiativeList';
import TurnOptions from './turnOptions';

const Encounter = (props) => (
  <div id="contents">
    <InitiativeList
      combatants={props.combatants}
      currentPlayer={props.currentPlayer} />
    <TurnOptions
      currentPlayer={props.currentPlayer}
      conditions={props.conditions}
      turn={props.turn}
      damageTargets={props.damageTargets}
      healingTargets={props.healingTargets}
      onDamageTargetSelected={props.onDamageTargetSelected}
      onDamageChange={props.onDamageChange}
      onToggleApplyCondition={props.onToggleApplyCondition}
      onToggleCondition={props.onToggleCondition}
      onApplyDamage={props.onApplyDamage}
      onHealTargetSelected={props.onHealTargetSelected}
      onHealChange={props.onHealChange}
      onApplyHealing={props.onApplyHealing}
      onDeathSave={props.onDeathSave}
      onDeathFail={props.onDeathFail}
      onCriticalDamage={props.onCriticalDamage}
      onCriticalSave={props.onCriticalSave}
      onEndTurn={props.onEndTurn} />
  </div>
);

export default Encounter;
