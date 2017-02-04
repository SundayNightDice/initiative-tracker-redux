import React from 'react';
import { reduxForm, Field } from 'redux-form';

const Damage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Damage</h2>
      <div>
        <Field name="target" component="select">
          <option value="">Select...</option>
          { props.targets.map(t => <option value={t} key={t}>{t}</option>) }
        </Field>
        <span>For:</span>
        <Field name="damage" type="number" min="0" max="100" component="input" />
        <Field name="isCritical" type="checkbox" component="input" />
        <label>Critical Hit</label>
      </div>
      <button type="submit">Apply Damage</button>
    </form>
  );
};

const DamageForm = reduxForm({
  form: 'turnDamage'
})(Damage);

export default DamageForm;
