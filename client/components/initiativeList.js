import React from 'react';
import HealthBar from './healthBar';
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
            combatant={combatant}
            round={props.round} />
        )}
      </ul>
    </div>
  );
}

const InitiativeItem = ({ className, combatant, round }) => (
  <li className={className}>
    <span className="initiativeScore">{combatant.bonus + combatant.initiative}</span>
    {combatant.name + ' - '+ combatant.hp + ' HP'}
    <HealthBar hp={combatant.hp} maxHp={combatant.maxHp} />
    <Status hp={combatant.hp}
      deathSaves={combatant.deathSaves}
      deathFails={combatant.deathFails}
      type={combatant.type} />
    {
      (round < combatant.startingRound) ?
        <span className="wave">Enters on round {combatant.startingRound}</span> :
        null
    }
  </li>
);

export default InitiativeList;
