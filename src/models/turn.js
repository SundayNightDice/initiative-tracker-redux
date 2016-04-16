import immutable from 'immutable';

const _Turn = {
  targets: [],
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
  constructor(targets, target) {
    super({
      targets: targets,
      damageTarget: target || targets.get(0).name,
      damage: 0,
      healingTarget: target || targets.get(0).name,
      healing: 0,
      conditions: [],
      applyConditions: false,
      deathSave: false,
      deathFail: false
    });
  }
}
