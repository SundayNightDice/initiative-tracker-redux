import React from 'react';
import Status from './status';

const InitiativeList = (props) => {
  const currentPlayerName = props.currentPlayer ? props.currentPlayer.name : null;
  return (
    <div id="initiativeList">
      <ul>
        {props.combatants.map(combatant =>
          <InitiativeItem
            key={combatant.id}
            className={combatant.name === currentPlayerName ? 'turn': ''}
            combatant={combatant} />
        )}
      </ul>
    </div>
  );
}

const InitiativeItem = ({ className, combatant }) => (
  <li className={className}>
    <span className="initiativeScore">{combatant.initiative}</span>
    {combatant.name + ' - '+ combatant.hp + ' HP'}
    <Status hp={combatant.hp}
      deathSaves={combatant.deathSaves}
      deathFails={combatant.deathFails}
      type={combatant.type} />
  </li>
);

export default InitiativeList;
