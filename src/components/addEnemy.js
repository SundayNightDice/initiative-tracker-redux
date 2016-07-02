import React from 'react';
import { reduxForm } from 'redux-form';

const AddEnemy = (props) => {
  const { fields: { name, monster }, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <label>Type:</label>
        <select {...monster}>
          <option value="">Select...</option>
          { props.monsters.map(item => <option value={item[0]} key={item[0]}>{item[1].name}</option>) }
        </select>
      </div>
      <div className="row">
        <label>Name:</label>
        <input type="text" {...name} />
      </div>
      <div className="row">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const AddEnemyForm = reduxForm({
  form: 'addEnemy',
  fields: ['name', 'monster'],
  initialValues: {
    'name': ''
  }
})(AddEnemy);

export default AddEnemyForm;
