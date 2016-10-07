import React from 'react';

const Bestiary = (props) => {
  if (!props.monster) {
    return (
      <div className="bestiary">
      </div>
    );
  }

  return (
    <div className="bestiary">
    <h1>{ props.monster.name }</h1>
    <ul>
      <li>{props.monster.type}</li>
      <li>CR {props.monster.cr}</li>
      <li>AC {props.monster.ac}</li>
      <li>HP {props.monster.dice} ({props.monster.hp})</li>
    </ul>
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
          <td>{props.monster.attributes.strength}</td>
          <td>{props.monster.attributes.dexterity}</td>
          <td>{props.monster.attributes.constitution}</td>
          <td>{props.monster.attributes.intelligence}</td>
          <td>{props.monster.attributes.wisdom}</td>
          <td>{props.monster.attributes.charisma}</td>
        </tr>
        <tr>
          <td>{props.monster.modifiers.strength}</td>
          <td>{props.monster.modifiers.dexterity}</td>
          <td>{props.monster.modifiers.constitution}</td>
          <td>{props.monster.modifiers.intelligence}</td>
          <td>{props.monster.modifiers.wisdom}</td>
          <td>{props.monster.modifiers.charisma}</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default Bestiary;
