import immutable from 'immutable';

const _Target = {
  targets: [],
  target: null,
  value: 0
};

export default class Target extends immutable.Record(_Target) {
  constructor(targets, target) {
    super({
      targets: targets,
      target: target || targets.get(0).name
    });
  }
}
