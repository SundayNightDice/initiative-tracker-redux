import React from 'react';
import Death from './death';
import TargetValueSelector from './targetValueSelector';

export default class TurnOptions extends React.Component {

  render() {
    if (this.props.turn) {
      return this._renderTurnOptions();
    } else {
      return <div id="turnOptions"></div>;
    }
  }

  _renderTurnOptions() {
    const currentPlayer = this.props.currentPlayer;
    const turnText = 'It\'s ' + currentPlayer.name + '\'s turn!';
    const canEndTurn = currentPlayer.hp > 0 || (this.props.turn.deathSave || this.props.turn.deathFail);

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
              turn={this.props.turn}
              onDeathSave={this.props.onDeathSave}
              onDeathFail={this.props.onDeathFail}
              onCriticalSave={this.props.onCriticalSave} />
        }
      </div>
    );
  }

  _renderActiveOptions(currentPlayerName) {
    return (
      <div>
        <section>
          <TargetValueSelector title="Damage"
            model={this.props.turn.damage}
            onTargetSelected={this.props.onDamageTargetSelected}
            onChange={this.props.onDamageChange} />
          <div>
            <span>
              <input type="checkbox"
                onChange={this.props.onToggleApplyCondition}
                checked={this.props.turn.applyConditions} />
              <label>Apply condition</label>
            </span>
            <div>
              {this.props.conditions.map(condition =>
                <span>
                  <input key={condition}
                    type="checkbox"
                    disabled={!this.props.turn.applyConditions}
                    onChange={e => this.props.onToggleCondition(condition, e.target.checked)} />
                  <label>{condition}</label>
                </span>
              )}
            </div>
          </div>
          <button
            onClick={this.props.onApplyDamage}
            disabled={this.props.turn.damage.value === 0 || !this.props.turn.damage.target}>Apply Damage</button>
        </section>
        <section>
          <TargetValueSelector title="Healing"
            model={this.props.turn.healing}
            onTargetSelected={this.props.onHealTargetSelected}
            onChange={this.props.onHealChange} />
          <button
            onClick={this.props.onApplyHealing}
            disabled={this.props.turn.healing.value === 0 || !this.props.turn.healing.target}>Apply Healing</button>
        </section>
      </div>
    );
  }
}
