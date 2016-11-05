import React from 'react';
import StatBlock from './statblock';

const formatChallengeRating = (value) => {
  if (value === 0.5) {
    return '\u00BD';
  }
  if (value === 0.25) {
    return '\u00BC';
  }
  if (value === 0.125) {
    return '\u215B';
  }
  return value;
}

const Bestiary = (props) => {
  if (!props.monster) {
    return (
      <div className="bestiary">
      </div>
    );
  }

  const description = `${props.monster.size} ${props.monster.type}, ${props.monster.alignment}`;
  const hp = `${props.monster.hp} (${props.monster.dice})`;

  return (
    <div className="bestiary">
      <h1>{ props.monster.name }</h1>
      <p>{description}</p>
      <ul>
        <li>CR {formatChallengeRating(props.monster.cr)}</li>
        <li>AC {props.monster.ac}</li>
        <li>HP {hp}</li>
      </ul>
      <StatBlock attributes={props.monster.attributes} modifiers={props.monster.modifiers} />
    </div>
  );
}

export default Bestiary;
