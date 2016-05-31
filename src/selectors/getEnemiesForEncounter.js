import { createSelector } from 'reselect';

const getEnemies = (state, encounterId) => state.enemies;
const getEncounter = (state, encounterId) => encounterId;

const getEnemiesForEncounter = createSelector(
  [getEnemies, getEncounter],
  (enemies, encounterId) => {
    return enemies
      .filter(e => e.encounterId === encounterId);
  }
);

export default getEnemiesForEncounter;
