import React from 'react';
import { reduxForm } from 'redux-form';

const Damage = (props) => {
  const { fields: { target, damage, isCritical,applyConditions }, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Damage</h2>
      <div>
        <select {...target}>
          <option value="">Select...</option>
          { props.targets.map(t => <option value={t} key={t}>{t}</option>) }
        </select>
        <span>For:</span>
        <input type="number" min="0" max="100" {...damage} />
        <input type="checkbox" {...isCritical} />
        <label>Critical Hit</label>
      </div>
      <div>
        <span>
          <input type="checkbox" {...applyConditions} />
          <label>Apply condition</label>
        </span>
        <div>
          <p>TODO Conditions</p>
        </div>
      </div>
      <button type="submit">Apply Damage</button>
    </form>
  );
};

const DamageForm = reduxForm({
  form: 'turnDamage',
  fields: ['target', 'damage', 'isCritical', 'applyConditions']
})(Damage);

export default DamageForm;
