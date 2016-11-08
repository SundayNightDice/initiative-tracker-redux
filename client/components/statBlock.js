import React from 'react';

const StatBlock = (props) => (
  <table className="statblock">
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
        <td>{props.attributes.strength}</td>
        <td>{props.attributes.dexterity}</td>
        <td>{props.attributes.constitution}</td>
        <td>{props.attributes.intelligence}</td>
        <td>{props.attributes.wisdom}</td>
        <td>{props.attributes.charisma}</td>
      </tr>
      <tr className="modifiers">
        <td>{props.modifiers.strength}</td>
        <td>{props.modifiers.dexterity}</td>
        <td>{props.modifiers.constitution}</td>
        <td>{props.modifiers.intelligence}</td>
        <td>{props.modifiers.wisdom}</td>
        <td>{props.modifiers.charisma}</td>
      </tr>
    </tbody>
  </table>
);

export default StatBlock;
