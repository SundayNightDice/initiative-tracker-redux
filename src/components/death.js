import React from 'react';
import ThreeChanceButtons from './threeChanceButtons';

const Death = (props) => {
  const saves = props.player.deathSaves;
  const fails = props.player.deathFails;

  if (saves === 3) {
    return <p>Stable</p>;
  }
  if (fails === 3 || props.player.type === 'enemy') {
    return <p>Dead</p>;
  }

  return (
    <div>
      <h2>Death Saving Throws</h2>
      <label>Is Critical?</label>
      <input type="checkbox"
        checked={props.turn.criticalSave}
        onClick={props.onCriticalSave} />
      <ThreeChanceButtons
        title='Successes:'
        value={saves}
        checked={props.turn.deathSave}
        onChange={props.onDeathSave} />
      <ThreeChanceButtons
        title='Failures:'
        value={fails}
        checked={props.turn.deathFail}
        onChange={props.onDeathFail} />
    </div>
  );
};

export default Death;
