import React from 'react';
import { reduxForm, Field } from 'redux-form';

const AddEnemy = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Add</h2>
      <div className="row">
        <label>Type:</label>
        <Field name="monster" component="select" onChange={props.onChangeEnemy}>
          <option value="">Select...</option>
          { props.monsters.map(item => <option value={item[0]} key={item[0]}>{item[1].name}</option>) }
        </Field>
      </div>
      <div className="row">
        <label>Name:</label>
        <Field name="name"
          type="text"
          component="input" />
      </div>
      <div className="row">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const AddEnemyForm = reduxForm({
  form: 'addEnemy',
  initialValues: {
    'name': ''
  }
})(AddEnemy);

export default AddEnemyForm;
