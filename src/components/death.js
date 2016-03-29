import React from 'react';
import ThreeChanceButtons from './threeChanceButtons';

export default class Death extends React.Component {

  render() {
    const saves = this.props.player.deathSaves;
    const fails = this.props.player.deathFails;

    if (saves === 3) {
      return <p>Stable</p>;
    }
    if (fails === 3) {
      return <p>Dead</p>;
    }

    return (
      <div>
        <h2>Death Saving Throws</h2>
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
