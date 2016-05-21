import { createSelector } from 'reselect';

const getPlayers = (state, encounterId) => state.players;
const getEnemies = (state, encounterId) => state.enemies;

const getEncounterCombatants = createSelector(
  [getPlayers, getEnemies],
  (players, enemies) => {
    return {
      players: players,
      enemies: enemies
    };
  }
);

export default getEncounterCombatants;
