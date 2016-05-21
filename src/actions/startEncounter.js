import getEncounterCombatants from './../selectors/getEncounterCombatants';

export default function startEncounter(encounterId) {
  return (dispatch, getState) => {
    const state = getState();
    const encounterCombatants = getEncounterCombatants(state, encounterId);

    dispatch({
      type: 'START_ENCOUNTER',
      enemies: encounterCombatants.enemies,
      players: encounterCombatants.players,
      encounterId: encounterId
    });
  }
}
