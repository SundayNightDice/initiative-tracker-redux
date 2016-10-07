import React from 'react';
import AddEnemyForm from './addEnemy';
import Bestiary from './bestiary';

const EncounterBuilder = (props) => {
  return (
    <div className="encounter-builder">
      <div className="builder">
        <div className="row">
          <label>Name: </label>
          <input type="text" value={props.name} onChange={props.onSetEncounterName} />
        </div>
        <h2>Enemies</h2>
        <ul>
          { props.enemies.map(item => <li key={item[0]}>{item[1].name}</li>) }
        </ul>
        <h3>Add</h3>
        <AddEnemyForm
          monsters={props.monsters}
          onSubmit={props.onAddEnemy} />
          <button
            className="start"
            onClick={() => props.onDone()}>Done</button>
      </div>
      <Bestiary monster={props.selectedMonster} />
    </div>
  );
};

export default EncounterBuilder;
