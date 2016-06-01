import { Record } from 'immutable';
import Target from './target';

const _Turn = {
  damageTargets: [],
  healing: null,
  conditions: [],
  applyConditions: false,
  deathSave: false,
  deathFail: false,
  criticalSave: false
};

export default class Turn extends Record(_Turn) {
  constructor(damageTargets, healingTargets, healingTarget) {
    super({
      damageTargets: damageTargets,
      healing: new Target(healingTargets, healingTarget),
      conditions: [],
      applyConditions: false,
      deathSave: false,
      deathFail: false,
      criticalSave: false
    });
  }
}
