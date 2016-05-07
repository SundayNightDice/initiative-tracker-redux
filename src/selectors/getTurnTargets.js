import { createSelector } from 'reselect';

const getCombatants = (state) => state.encounter.combatants;
const getDamageTargetIds = (state) => state.encounter.turn.damage.targets;
const getHealingTargetIds = (state) => state.encounter.turn.healing.targets;

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
