import React from 'react';
import AddPlayer from './addPlayer';

const PlayersList = (props) => (
  <div className="players">
    <h2>Players</h2>
      <ul>
        {props.players.map(p => <li key={p[0]}>{p[1].name}</li>)}
      </ul>
      <AddPlayer
        onSubmit={props.onAddPlayer} />
  </div>
);

export default PlayersList;
