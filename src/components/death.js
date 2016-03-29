import React from 'react';

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
        <p>
          <span>Successes:</span>
          <input type="checkbox"
           disabled={saves !== 0}
           checked={saves === 0 ? this.props.turn.deathSave : true}
           onChange={this.props.onDeathSave} />
          <input type="checkbox"
            disabled={saves !== 1}
            checked={saves === 1 ? this.props.turn.deathSave : saves > 1}
            onChange={this.props.onDeathSave} />
          <input type="checkbox"
            disabled={saves !== 2}
            checked={saves === 2 ? this.props.turn.deathSave : false }
            onChange={this.props.onDeathSave} />
        </p>
        <p>
          <span>Failures:</span>
          <input type="checkbox"
            disabled={fails !== 0}
            checked={fails === 0 ? this.props.turn.deathFail : true}
            onChange={this.props.onDeathFail} />
          <input type="checkbox"
            disabled={fails !== 1}
            checked={fails === 1 ? this.props.turn.deathFail : fails > 1}
            onChange={this.props.onDeathFail} />
          <input type="checkbox"
            disabled={fails !== 2}
            checked={fails === 2 ? this.props.turn.deathFail : false}
            onChange={this.props.onDeathFail} />
        </p>
      </div>
    );
  }
}
