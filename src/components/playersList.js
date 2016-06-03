import React from 'react';
import AddPlayer from './addPlayer';

const Player = (props) => (
  <li>
    <span>{props.player.name}</span>
    <span className="level">Level {props.player.level}</span>
    <span className="hp">({props.player.hp + ' / ' + props.player.maxHp + ' HP'})</span>
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
          <td>{props.player.attributes.strength}</td>
          <td>{props.player.attributes.dexterity}</td>
          <td>{props.player.attributes.constitution}</td>
          <td>{props.player.attributes.intelligence}</td>
          <td>{props.player.attributes.wisdom}</td>
          <td>{props.player.attributes.charisma}</td>
        </tr>
        <tr>
          <td>{props.player.modifiers.strength}</td>
          <td>{props.player.modifiers.dexterity}</td>
          <td>{props.player.modifiers.constitution}</td>
          <td>{props.player.modifiers.intelligence}</td>
          <td>{props.player.modifiers.wisdom}</td>
          <td>{props.player.modifiers.charisma}</td>
        </tr>
      </tbody>
    </table>
  </li>
);

const PlayersList = (props) => (
  <div className="players">
    <h2>Players</h2>
      <ul>
        {props.players.map(p => <Player key={p[0]} player={p[1]} />)}
      </ul>
      <AddPlayer
        onSubmit={props.onAddPlayer} />
  </div>
);

export default PlayersList;
