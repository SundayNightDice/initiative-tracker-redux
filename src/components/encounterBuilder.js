import React from 'react';
import AddEnemyForm from './addEnemy';
import Bestiary from './bestiary';

const EnemyListItem = (props) => {
  const description = `${props.enemy.name} ()`;
  return (
    <li>
      <span>{description}</span>
      <button className="delete-enemy" onClick={() => props.onDelete(props.enemyId)}></button>
    </li>
  );
};

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
          { props.enemies.map(e =>
              <EnemyListItem key={e[0]} enemyId={e[0]} enemy={e[1]} onDelete={props.onDeleteEnemy} />
            )
          }
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
