import { push } from 'react-router-redux'

export default function startEncounter(id) {
  return (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: 'START_ENCOUNTER',
      players: state.players
        .filter((player) => player.hp > 0),
      encounterId: id
    });

    dispatch(push(`/encounter/${id}`));
  }
}
