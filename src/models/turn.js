import immutable from 'immutable';

const _Turn = {
  target: null,
  damage: 0,
  conditions: [],
  applyConditions: false,
  deathSave: false,
  deathFail: false
};

export default class Turn extends immutable.Record(_Turn) {
}
