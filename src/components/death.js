import React from 'react';
import { reduxForm } from 'redux-form';
import ThreeChanceButtons from './threeChanceButtons';

const DeathSave = (props) => {
  const { fields: { save, fail, isCritical }, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Death Saving Throw</h2>
      <label>Is Critical?</label>
      <input type="checkbox"
        disabled={props.acted}
        {...isCritical} />
      <ThreeChanceButtons
        title='Successes:'
        value={props.saves}
        disabled={props.acted}
        formProps={save} />
      <ThreeChanceButtons
        title='Failures:'
        value={props.fails}
        disabled={props.acted}
        formProps={fail} />
      <button type="submit" disabled={props.acted}>Apply Death Save Roll</button>
    </form>
  )
};

const DeathSaveForm = reduxForm({
  form: 'deathSaves',
  fields: ['save', 'fail', 'isCritical']
})(DeathSave);

const Death = (props) => {
  const saves = props.player.deathSaves;
  const fails = props.player.deathFails;

  if (saves === 3) {
    return <p>Stable</p>;
  }
  if (fails === 3 || props.player.type === 'enemy') {
    return <p>Dead</p>;
  }

  return <DeathSaveForm
    saves={saves}
    fails={fails}
    onSubmit={props.onDeathSave}
    acted={props.acted} />;
};

export default Death;
