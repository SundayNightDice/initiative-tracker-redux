import React from 'react';
import AddPlayer from './addPlayer';
import HealthBar from './common/healthBar';
import StatBlock from './common/statblock';

const Player = (props) => {
  const details = `${props.player.race} - Level ${props.player.level} ${props.player.class}`;
  const hp = `(${props.player.hp}/${props.player.maxHp} HP)`;

  return (
    <li className="player">
      <div>
        <span className="name">{props.player.name}</span>
        <span className="details">{details}</span>
        <button className="delete-player" onClick={() => props.onDeletePlayer(props.playerId)}></button>
      </div>
      <HealthBar hp={props.player.hp} maxHp={props.player.maxHp} />
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
