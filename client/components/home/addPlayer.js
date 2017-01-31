import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Row from '../common/row';

const TextField = ({ label, name }) => (
  <Row>
    <label>{label}</label>
    <Field type="text" component="input" name={name} />
  </Row>
);

const renderStatInput = (field) => (
  <input type="number" min="1" max="20" {...field.input} />
);

const OptionsList = ({ label, name, items }) => (
  <Row>
    <label>{label}</label>
    <Field component="select" name={name}>
      <option value="">Select...</option>
      { items.map(i => <option value={i} key={i}>{i}</option>) }
    </Field>
  </Row>
);

const AddPlayer = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextField name="name" label="Name:" />
      <TextField name="hp" label="HP:" />
      <table>
        <thead>
          <tr>
            <th>STR</th>
            <th>DEX</th>
            <th>CON</th>
            <th>INT</th>
            <th>WIS</th>
            <th>CHA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Field component={renderStatInput} name="strength" /></td>
            <td><Field component={renderStatInput} name="dexterity" /></td>
            <td><Field component={renderStatInput} name="constitution" /></td>
            <td><Field component={renderStatInput} name="intelligence" /></td>
            <td><Field component={renderStatInput} name="wisdom" /></td>
            <td><Field component={renderStatInput} name="charisma" /></td>
          </tr>
        </tbody>
      </table>
      <Row>
        <label>Level:</label>
        <Field component={renderStatInput} name="level" />
      </Row>
      <OptionsList name="race" label="Race:" items={props.races} />
      <OptionsList name="class" label="Class:" items={props.classes} />
      <button type="submit">Add</button>
    </form>
  );
};

const AddPlayerForm = reduxForm({
  form: 'addPlayer',
  initialValues: {
    'name': '',
    'hp': 1,
    'strength': 10,
    'dexterity': 10,
    'constitution': 10,
    'intelligence': 10,
    'wisdom': 10,
    'charisma': 10,
    'level': 1
  }
})(AddPlayer);

export default AddPlayerForm;
