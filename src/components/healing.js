import React from 'react';
import { reduxForm } from 'redux-form';

const Healing = (props) => {
  const { fields: { target, healing }, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Healing</h2>
      <div>
        <select {...target}>
          <option value="">Select...</option>
          { props.targets.map(t => <option value={t} key={t}>{t}</option>) }
        </select>
        <span>For:</span>
        <input type="number" min="0" max="100" {...healing} />
      </div>
      <button type="submit">Apply Healing</button>
    </form>
  );
};

const HealingForm = reduxForm({
  form: 'turnHealing',
  fields: ['target', 'healing']
})(Healing);

export default HealingForm;
