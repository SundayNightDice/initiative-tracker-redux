import immutable from 'immutable';

const _Combatant = {
  name: '',
  type: '',
  hp: 0,
  maxHp: 0,
  initiativeBonus: 0,
  deathSaves: 0,
  deathFails: 0,
  conditions: []
};

export default class Combatant extends immutable.Record(_Combatant) {
  constructor(name, type, hp, initiativeBonus) {
    super({
      name: name,
      type: type,
      hp: hp,
      maxHp: hp,
      initiativeBonus: initiativeBonus,
      deathSaves: 0,
      deathFails: 0,
      conditions: []
    });
  }
}
