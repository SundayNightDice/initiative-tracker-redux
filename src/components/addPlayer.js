import React from 'react';
import { reduxForm } from 'redux-form';

const AddPlayer = (props) => {
  const { fields: { name, hp, bonus }, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <label>Name:</label>
        <input type="text" {...name} />
      </div>
      <div className="row">
        <label>HP:</label>
        <input type="number" {...hp} />
      </div>
      <div className="row">
        <label>Initiative Bonus:</label>
        <input type="number" {...bonus} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

const AddPlayerForm = reduxForm({
  form: 'addPlayer',
  fields: ['name', 'hp', 'bonus']
})(AddPlayer);

export default AddPlayerForm;
