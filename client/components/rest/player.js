import React from 'react';

import HealthBar from '../common/healthBar';
import ShortRestForm from './shortRestForm';

const Player = (props) => (
  <li className="player">
    <div>
      <span className="name">{props.player.name}</span>
      <span className="hp">{ `(${props.player.hp}/${props.player.maxHp} HP)` }</span>
      <HealthBar hp={props.player.hp} maxHp={props.player.maxHp} />
      <span className="hd">{ `${props.player.hitDie} (d${props.hitDie}) Remaining` }</span>
      {
        props.player.hitDie > 0 ?
          <ShortRestForm
            hitDie={props.hitDie}
            con={props.player.modifiers.constitution}
            form={`shortRest-${props.playerId}`}
            onSubmit={props.onSpendHitDie} /> :
            null
      }
    </div>
  </li>
);

export default Player;
