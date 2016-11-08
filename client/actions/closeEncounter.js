import { push } from 'react-router-redux'

export default (encounterId, reason) => {
  return (dispatch, getState) => {
    const encounter = getState().encounters.get(encounterId);
    const players = encounter.combatants.filter(c => c.type === 'player');

    dispatch({
      type: 'CLOSE_ENCOUNTER',
      encounterId: encounterId,
      reason: reason,
      results: {
        players: players
      }
    });
    dispatch(push('/'));
  }
}
