import React from 'react';
import Status from './status';

export default class EncounterList extends React.Component {

  render() {
    const currentPlayerName = this.props.currentPlayer ? this.props.currentPlayer.name : null;
    return (
      <div id="initiativeList">
        <ul>
          {this.props.combatants.map(combatant =>
            <li
              className={combatant.name === currentPlayerName ? 'turn': ''}
              key={combatant.id}>
                {combatant.name + ' - '+ combatant.hp + ' HP'}
                <Status hp={combatant.hp}
                  deathSaves={combatant.deathSaves}
                  deathFails={combatant.deathFails}
                  type={combatant.type} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}
