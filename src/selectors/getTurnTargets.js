import { createSelector } from 'reselect';

const getCombatants = (state) => state.encounters.get('ENC1').combatants;
const getDamageTargetIds = (state) => state.encounters.get('ENC1').turn.damage.targets;
const getHealingTargetIds = (state) => state.encounters.get('ENC1').turn.healing.targets;

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
