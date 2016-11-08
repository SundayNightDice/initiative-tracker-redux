import React from 'react';
import { reduxForm, Field } from 'redux-form';
import ThreeChanceButtons from './threeChanceButtons';

const DeathSave = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Death Saving Throw</h2>
      <label>Is Critical?</label>
      <Field
        name="isCritical"
        type="checkbox"
        disabled={props.acted}
        component="input" />
      <ThreeChanceButtons
        name="save"
        title='Successes:'
        value={props.saves}
        disabled={props.acted} />
      <ThreeChanceButtons
        name="fail"
        title='Failures:'
        value={props.fails}
        disabled={props.acted} />
      <button type="submit" disabled={props.acted}>Apply Death Save Roll</button>
    </form>
  )
};

const DeathSaveForm = reduxForm({
  form: 'deathSaves'
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
