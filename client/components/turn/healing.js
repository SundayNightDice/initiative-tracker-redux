import React from 'react';
import { reduxForm, Field } from 'redux-form';

const Healing = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Healing</h2>
      <div>
        <Field name="target" component="select">
          <option value="">Select...</option>
          { props.targets.map(t => <option value={t} key={t}>{t}</option>) }
        </Field>
        <span>For:</span>
        <Field name="healing" type="number" min="0" max="100" component="input" />
      </div>
      <button type="submit">Apply Healing</button>
    </form>
  );
};

const HealingForm = reduxForm({
  form: 'turnHealing'
})(Healing);

export default HealingForm;
