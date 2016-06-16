import getEncounterCombatants from './../selectors/getEncounterCombatants';
import { push } from 'react-router-redux'

export default function startEncounter(id) {
  return (dispatch, getState) => {
    const state = getState();
    const encounterCombatants = getEncounterCombatants(state, id);

    dispatch({
      type: 'START_ENCOUNTER',
      enemies: encounterCombatants.enemies,
      players: encounterCombatants.players,
      encounterId: id
    });

    dispatch(push(`/encounter/${id}`));
  }
}
