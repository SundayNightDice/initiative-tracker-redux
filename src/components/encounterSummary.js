import React from 'react';
import Box from './box';
import EncounterStatus from './../models/encounterStatus';
import Status from './status';

const EncounterSummary = (props) => (
  <Box>
    <div className="summary">
      <h2>Encounter {props.status === EncounterStatus.VICTORY ? 'Victory' : 'Failure'}</h2>
      <div>
        <div className="players">
          <h3>Players</h3>
          <ul>
            {props.players.map(player =>
              <SummaryItem
                key={player.id}
                combatant={player} />
            )}
          </ul>
        </div>
        <div className="enemies">
          <h3>Enemies</h3>
          <ul>
            {props.enemies.map(enemy =>
              <SummaryItem
                key={enemy.id}
                combatant={enemy} />
            )}
          </ul>
        </div>
      </div>
    </div>
    <div className="builderOptions">
      <button onClick={() => props.onCloseEncounter()}>Close</button>
    </div>
  </Box>
);

const SummaryItem = ({ combatant }) => (
  <li>
    {combatant.name + ' - ' + combatant.hp + ' HP'}
    <Status
      hp={combatant.hp}
      deathSaves={combatant.deathSaves}
      deathFails={combatant.deathFails}
      type={combatant.type} />
  </li>
)

export default EncounterSummary;
