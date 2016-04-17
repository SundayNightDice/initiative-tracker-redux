import React from 'react';
import ThreeChanceButtons from './threeChanceButtons';

export default class Death extends React.Component {

  render() {
    const saves = this.props.player.deathSaves;
    const fails = this.props.player.deathFails;

    if (saves === 3) {
      return <p>Stable</p>;
    }
    if (fails === 3 || this.props.player.type === 'enemy') {
      return <p>Dead</p>;
    }

    return (
      <div>
        <h2>Death Saving Throws</h2>
        <label>Is Critical?</label>
        <input type="checkbox"
          checked={this.props.turn.criticalSave}
          onClick={this.props.onCriticalSave} />
        <ThreeChanceButtons
          title='Successes:'
          value={saves}
          checked={this.props.turn.deathSave}
          onChange={this.props.onDeathSave} />
        <ThreeChanceButtons
          title='Failures:'
          value={fails}
          checked={this.props.turn.deathFail}
          onChange={this.props.onDeathFail} />
      </div>
    );
  }
}
