import { createSelector } from 'reselect';

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

const getDamageTargetIds = createSelector(
  [getActiveEncounter],
  (encounter) => encounter.turn.damageTargets
);

const getHealingTargetIds = createSelector(
  [getActiveEncounter],
  (encounter) => encounter.turn.healingTargets
);

export const getDamageTargets = createSelector(
  [getCombatants, getDamageTargetIds],
  (combatants, damageTargetIds) => {
    return damageTargetIds.map(id => combatants.get(id).name);
  }
);

export const getHealingTargets = createSelector(
  [getCombatants, getHealingTargetIds],
  (combatants, healingTargetIds) => {
    return healingTargetIds.map(id => combatants.get(id).name);
  }
);
