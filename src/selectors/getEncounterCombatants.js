import { createSelector } from 'reselect';
import getEnemiesForEncounter from './getEnemiesForEncounter';

const getPlayers = (state, encounterId) => state.players;

const getEncounterCombatants = createSelector(
  [getPlayers, getEnemiesForEncounter],
  (players, enemies) => {
    return {
      players: players,
      enemies: enemies
    };
  }
);

export default getEncounterCombatants;
