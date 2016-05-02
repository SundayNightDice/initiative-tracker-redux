import { Record } from 'immutable';
import Target from './target';

const _Turn = {
  damage: null,
  healing: null,
  conditions: [],
  applyConditions: false,
  deathSave: false,
  deathFail: false,
  criticalSave: false,
  criticalDamage: false
};

export default class Turn extends Record(_Turn) {
  constructor(damageTargets, healingTargets, damageTarget, healingTarget) {
    super({
      damage: new Target(damageTargets, damageTarget),
      healing: new Target(healingTargets, healingTarget),
      conditions: [],
      applyConditions: false,
      deathSave: false,
      deathFail: false,
      criticalSave: false,
      criticalDamage: false
    });
  }
}
