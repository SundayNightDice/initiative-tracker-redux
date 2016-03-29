import React from 'react';
import Death from './death';
import TargetValueSelector from './targetValueSelector';

export default class TurnOptions extends React.Component {

  render() {
    const currentPlayer = this.props.combatants.get(this.props.currentPlayer);
    const currentPlayerName = currentPlayer.name;
    const turnText = 'It\'s ' + currentPlayerName + '\'s turn!';

    return (
      <div id="turnOptions">
        <h1>{turnText}</h1>
        {
          currentPlayer.hp > 0 ?
          this._renderTurnOptions(currentPlayerName) :
          <Death player={currentPlayer}
            turn={this.props.turn}
            onDeathSave={this.props.onDeathSave}
            onDeathFail={this.props.onDeathFail} />
        }
        <button onClick={this.props.onEndTurn}>End Turn</button>
      </div>
    );
  }

  _renderTurnOptions(currentPlayerName) {
    const targets = this.props.combatants.filter(combatant => combatant.name !== currentPlayerName);
    return (
      <div>
        <section>
          <TargetValueSelector title="Damage"
            target={this.props.turn.target}
            targets={targets}
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
          <button onClick={this.props.onApplyDamage}>Apply Damage</button>
        </section>
      </div>
    );
  }
}
