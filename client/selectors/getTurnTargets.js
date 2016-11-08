import { createSelector } from 'reselect';
import { List } from 'immutable';

const getActiveEncounterId = (state) => state.encounters.filter(e => e.status === 'active').keySeq().get(0);
const getEncounters = (state) => state.encounters;

const getActiveEncounter = createSelector(
  [getActiveEncounterId, getEncounters],
  (activeEncounterId, encounters) => encounters.get(activeEncounterId)
);

const getCombatants = createSelector(
  [getActiveEncounter],
  (encounter) => encounter.combatants
);

const getCurrentPlayerId = createSelector(
  [getActiveEncounter],
  (encounter) => encounter.order.get(encounter.currentPlayer)
);

export const getDamageTargets = createSelector(
  [getCombatants, getCurrentPlayerId],
  (combatants, currentPlayerId) => itemsList(combatants
    .filter((c, i) => i !== currentPlayerId && isAlive(c))
    .map((c, i) => c.name))
);

export const getHealingTargets = createSelector(
  [getCombatants, getCurrentPlayerId],
  (combatants, currentPlayerId) => itemsList(combatants
    .filter(isAlive)
    .map((c, i) => c.name))
);

const isAlive = (c) => {
  return c.type === 'enemy' ?
    c.hp > 0 :
    c.deathFails < 3;
}

const itemsList = (i) => {
  return List(i.values());
}
