import { Record } from 'immutable';

const _Combatant = {
  name: '',
  type: '',
  hp: 0,
  maxHp: 0,
  deathSaves: 0,
  deathFails: 0,
  conditions: [],
  bonus: 0,
  initiative: 0,
  startingRound: 0,
  id: ''
};

export default class Combatant extends Record(_Combatant) {
  constructor(name, type, hp, bonus, startingRound, id) {
    super({
      name: name,
      type: type,
      hp: hp,
      maxHp: hp,
      deathSaves: 0,
      deathFails: 0,
      conditions: [],
      bonus: bonus,
      initiative: 0,
      startingRound: startingRound,
      id: id
    });
  }
}
