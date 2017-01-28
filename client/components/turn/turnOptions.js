import React from 'react';
import Death from './death';
import DamageForm from './damage';
import HealingForm from './healing';
import ActivityLog from './activityLog';

export default class TurnOptions extends React.Component {

  render() {
    const currentPlayer = this.props.currentPlayer;
    const turnText = 'It\'s ' + currentPlayer.name + '\'s turn!';
    const canEndTurn = currentPlayer.acted;

    return (
      <div id="turnOptions">
        <div className="menu">
          <h1>{turnText}</h1>
          <span className="hp">{currentPlayer.hp + ' / ' + currentPlayer.maxHp + ' HP'}</span>
          <button
            className="turnEnd"
            onClick={this.props.onEndTurn}
            disabled={!canEndTurn}>✓ End Turn</button>
        </div>
        {
          currentPlayer.hp > 0 ?
            this._renderActiveOptions(currentPlayer.name) :
            <Death player={currentPlayer}
              onDeathSave={this.props.onDeathSave}
              acted={currentPlayer.acted} />
        }
        <ActivityLog log={currentPlayer.activityLog} />
      </div>
    );
  }

  _renderActiveOptions(currentPlayerName) {
    return (
      <div>
        <DamageForm
          targets={this.props.damageTargets}
          onSubmit={this.props.onApplyDamage} />
        <HealingForm
          targets={this.props.healingTargets}
          onSubmit={this.props.onApplyHealing} />
      </div>
    );
  }
}
