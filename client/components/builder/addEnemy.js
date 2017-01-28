import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Row from '../common/row';

const AddEnemy = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Add</h2>
      <Row>
        <label>Enemy Type:</label>
        <Field name="monster" component="select" onChange={props.onChangeEnemy}>
          <option value="">Select...</option>
          { props.monsters.map(item => <option value={item[0]} key={item[0]}>{item[1].name}</option>) }
        </Field>
      </Row>
      <Row>
        <label>Name:</label>
        <Field name="name"
          type="text"
          component="input" />
      </Row>
      <Row>
        <label>Starting Round:</label>
        <Field name="startingRound"
          type="number"
          component="input"
          min="1" />
      </Row>
      <Row>
        <button type="submit">Add</button>
      </Row>
    </form>
  );
};

const AddEnemyForm = reduxForm({
  form: 'addEnemy',
  initialValues: {
    'name': '',
    'startingRound': 1
  }
})(AddEnemy);

export default AddEnemyForm;
