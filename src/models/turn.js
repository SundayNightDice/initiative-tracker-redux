import immutable from 'immutable';

const _Turn = {
  damageTargets: [],
  healingTargets: [],
  damageTarget: null,
  damage: 0,
  healingTarget: null,
  healing: 0,
  conditions: [],
  applyConditions: false,
  deathSave: false,
  deathFail: false
};

export default class Turn extends immutable.Record(_Turn) {
  constructor(targets, healingTargets, damageTarget, healingTarget) {
    super({
      damageTargets: targets,
      healingTargets: healingTargets,
      damageTarget: damageTarget || targets.get(0).name,
      damage: 0,
      healingTarget: healingTarget || healingTargets.get(0).name,
      healing: 0,
      conditions: [],
      applyConditions: false,
      deathSave: false,
      deathFail: false
    });
  }
}
