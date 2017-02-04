import React from 'react';
import { connect } from 'react-redux';

import onBack from '../../actions/back';
import onLongRest from '../../actions/resting/longRest';
import onSpendHitDie from '../../actions/resting/spendHitDie';

import Player from './player';

const Rest = (props) => {
  const hitDie = (player, classes) => classes.get(player.class).hitDie;

  return (
    <div>
    <button className="back" onClick={props.onBack} />
      <h2>Resting</h2>
      <button onClick={props.onLongRest}>Long Rest</button>
      <div>
        <ul>
          {
            props.players.entrySeq().map(p =>
              <Player
                key={p[0]}
                playerId={p[0]}
                player={p[1]}
                onSpendHitDie={(data) => props.onSpendHitDie(data, p[0])}
                hitDie={hitDie(p[1], props.classes)} />
            )
          }
        </ul>
      </div>
      <div>
      </div>
    </div>
  );
}

const RestContainer = connect(
  (state) => ({
    players: state.players,
    classes: state.classes
  }),
  (dispatch) => ({
    onBack: () => dispatch(onBack()),
    onLongRest: () => dispatch(onLongRest()),
    onSpendHitDie: (data, playerId) => dispatch(onSpendHitDie(data, playerId))
  })
)(Rest);

export default RestContainer;
