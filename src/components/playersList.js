import React from 'react';
import AddPlayer from './addPlayer';
import StatBlock from './statblock';

const Player = (props) => {
  const details = `Level ${props.player.level} ${props.player.class}`;
  const hp = `(${props.player.hp}/${props.player.maxHp} HP)`;

  return (
    <li className="player">
      <div>
        <span className="name">{props.player.name}</span>
        <span className="details">{details}</span>
        <span className="hp">{hp}</span>
        <button className="delete-player" onClick={() => props.onDeletePlayer(props.playerId)}></button>
      </div>
      <StatBlock attributes={props.player.attributes} modifiers={props.player.modifiers} />
    </li>
  );
};

const PlayersList = (props) => (
  <div className="players">
    <h2>Players</h2>
      <ul>
        {props.players.map(p => <Player key={p[0]} playerId={p[0]} player={p[1]} onDeletePlayer={props.onDeletePlayer} />)}
      </ul>
      <AddPlayer
        onSubmit={props.onAddPlayer} />
  </div>
);

export default PlayersList;
