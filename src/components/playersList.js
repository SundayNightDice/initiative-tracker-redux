import React from 'react';
import AddPlayer from './addPlayer';
import StatBlock from './statblock';

const Player = (props) => (
  <li>
    <span>{props.player.name}</span>
    <span className="level">Level {props.player.level} {props.player.class}</span>
    <span className="hp">({props.player.hp + ' / ' + props.player.maxHp + ' HP'})</span>
    <StatBlock attributes={props.player.attributes} modifiers={props.player.modifiers} />
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
