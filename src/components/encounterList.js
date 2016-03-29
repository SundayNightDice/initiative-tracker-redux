import React from 'react';
import Status from './status';

export default class EncounterList extends React.Component {

  render() {
    const currentPlayerName = this.props.combatants.get(this.props.currentPlayer).name;
    return (
      <div id="initiativeList">
        <ul>
          {this.props.combatants.map(combatant =>
            <li
              className={combatant.name === currentPlayerName ? 'turn': ''}
              key={combatant.name}>
                {combatant.name + ' - '+ combatant.hp}
                <Status hp={combatant.hp}
                  deathSaves={combatant.deathSaves}
                  deathFails={combatant.deathFails} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}
