import { Record } from 'immutable';

const _Turn = {
  damageTargets: [],
  healingTargets: [],
  conditions: [],
  applyConditions: false,
  deathSave: false,
  deathFail: false,
  criticalSave: false
};

export default class Turn extends Record(_Turn) {
  constructor(damageTargets, healingTargets) {
    super({
      damageTargets: damageTargets,
      healingTargets: healingTargets,
      conditions: [],
      applyConditions: false,
      deathSave: false,
      deathFail: false,
      criticalSave: false
    });
  }
}
