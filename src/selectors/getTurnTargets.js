import { createSelector } from 'reselect';

const getActiveEncounter = (state) => state.encounters.filter(e => e.status === 'active').keySeq().get(0);
const getEncounters = (state) => state.encounters;

const getCombatants = createSelector(
  [getActiveEncounter, getEncounters],
  (activeEncounter, encounters) => {
    return encounters.get(activeEncounter).combatants;
  }
);

const getDamageTargetIds = createSelector(
  [getActiveEncounter, getEncounters],
  (activeEncounter, encounters) => {
    return encounters.get(activeEncounter).turn.damage.targets;
  }
);

const getHealingTargetIds = createSelector(
  [getActiveEncounter, getEncounters],
  (activeEncounter, encounters) => {
    return encounters.get(activeEncounter).turn.healing.targets;
  }
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
