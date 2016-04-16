import immutable from 'immutable';

const _Turn = {
  targets: [],
  target: null,
  damage: 0,
  conditions: [],
  applyConditions: false,
  deathSave: false,
  deathFail: false
};

export default class Turn extends immutable.Record(_Turn) {
  constructor(targets, target) {
    super({
      targets: targets,
      target: target || targets.get(0).name,
      damage: 0,
      conditions: [],
      applyConditions: false,
      deathSave: false,
      deathFail: false
    });
  }
}
