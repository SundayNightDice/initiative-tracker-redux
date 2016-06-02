import React from 'react';
import { reduxForm } from 'redux-form';

const AddPlayer = (props) => {
  const { fields: { name, hp, strength, dexterity, constitution, intelligence, wisdom, charisma, level }, handleSubmit } = props;
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
            <td><input type="number" min="0" max="20" {...strength} /></td>
            <td><input type="number" min="0" max="20" {...dexterity} /></td>
            <td><input type="number" min="0" max="20" {...constitution} /></td>
            <td><input type="number" min="0" max="20" {...intelligence} /></td>
            <td><input type="number" min="0" max="20" {...wisdom} /></td>
            <td><input type="number" min="0" max="20" {...charisma} /></td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <label>Level:</label>
        <input type="number" min="0" max="20" {...level} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

const AddPlayerForm = reduxForm({
  form: 'addPlayer',
  fields: ['name', 'hp', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'level'],
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
