import React from 'react';
import StatBlock from './statblock';

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
    <StatBlock attributes={props.monster.attributes} modifiers={props.monster.modifiers} />
    </div>
  );
}

export default Bestiary;
