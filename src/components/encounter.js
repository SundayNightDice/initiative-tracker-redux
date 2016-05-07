import React from 'react';

import InitiativeList from './initiativeList';
import TurnOptions from './turnOptions';

export default class Encounter extends React.Component {
  render() {
    return (
      <div id="contents">
        <InitiativeList
          combatants={this.props.combatants}
          currentPlayer={this.props.currentPlayer} />
        <TurnOptions
          currentPlayer={this.props.currentPlayer}
          conditions={this.props.conditions}
          turn={this.props.turn}
          damageTargets={this.props.damageTargets}
          healingTargets={this.props.healingTargets}
          onDamageTargetSelected={this.props.onDamageTargetSelected}
          onDamageChange={this.props.onDamageChange}
          onToggleApplyCondition={this.props.onToggleApplyCondition}
          onToggleCondition={this.props.onToggleCondition}
          onApplyDamage={this.props.onApplyDamage}
          onHealTargetSelected={this.props.onHealTargetSelected}
          onHealChange={this.props.onHealChange}
          onApplyHealing={this.props.onApplyHealing}
          onDeathSave={this.props.onDeathSave}
          onDeathFail={this.props.onDeathFail}
          onCriticalDamage={this.props.onCriticalDamage}
          onCriticalSave={this.props.onCriticalSave}
          onEndTurn={this.props.onEndTurn} />
      </div>
    );
  }
}
