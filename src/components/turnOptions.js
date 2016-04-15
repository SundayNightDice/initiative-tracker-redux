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
    const currentPlayer = this.props.combatants.get(this.props.currentPlayer);
    const turnText = 'It\'s ' + currentPlayer.name + '\'s turn!';
    const canEndTurn = currentPlayer.hp > 0 || (this.props.turn.deathSave || this.props.turn.deathFail);

    return (
      <div id="turnOptions">
        <h1>{turnText}</h1>
        {
          currentPlayer.hp > 0 ?
            this._renderActiveOptions(currentPlayer.name) :
            <Death player={currentPlayer}
              turn={this.props.turn}
              onDeathSave={this.props.onDeathSave}
              onDeathFail={this.props.onDeathFail} />
        }
        <button
          onClick={this.props.onEndTurn}
          disabled={!canEndTurn}>End Turn</button>
      </div>
    );
  }

  _renderActiveOptions(currentPlayerName) {
    return (
      <div>
        <section>
          <TargetValueSelector title="Damage"
            target={this.props.turn.target}
            targets={this.props.turn.targets}
            onTargetSelected={this.props.onTargetSelected}
            value={this.props.turn.damage}
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
            disabled={this.props.turn.damage === 0 || !this.props.turn.target}>Apply Damage</button>
        </section>
      </div>
    );
  }
}
