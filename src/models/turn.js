import { Record } from 'immutable';

const _Turn = {
  conditions: [],
  applyConditions: false,
  deathSave: false,
  deathFail: false,
  criticalSave: false
};

export default class Turn extends Record(_Turn) {}
