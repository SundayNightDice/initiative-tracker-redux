import React from 'react';
import AddEnemyForm from './addEnemy';

const EncounterBuilder = (props) => {
  return (
    <div className="box">
      <h2>Enemies</h2>
      <ul>
        { props.enemies.entrySeq().map(item => <li key={item[0]}>{item[1].name}</li>) }
      </ul>
      <h3>Add</h3>
        <AddEnemyForm
          onSubmit={props.onAddEnemy} />
        <div className="builderOptions">
          <button
            className="start"
            onClick={() => props.onDone()}>Done</button>
        </div>
      <div className="clearfix" />
    </div>
  );
};

export default EncounterBuilder;
