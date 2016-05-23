import React from 'react';
import AddPlayer from './addPlayer';

const PlayersList = (props) => (
  <div className="players">
    <h2>Players</h2>
      <ul>
        {props.players.map(p => <li key={p[0]}>{p[1].name}</li>)}
      </ul>
      <AddPlayer />
  </div>
);

export default PlayersList;
