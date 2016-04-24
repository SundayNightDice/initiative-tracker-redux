import immutable from 'immutable';

const _Combatant = {
  name: '',
  type: '',
  hp: 0,
  maxHp: 0,
  deathSaves: 0,
  deathFails: 0,
  conditions: [],
  initiative: 0,
  startingRound: 0,
  id: ''
};

export default class Combatant extends immutable.Record(_Combatant) {
  constructor(name, type, hp, initiative, startingRound, id) {
    super({
      name: name,
      type: type,
      hp: hp,
      maxHp: hp,
      deathSaves: 0,
      deathFails: 0,
      conditions: [],
      initiative: initiative,
      startingRound: startingRound,
      id: id
    });
  }
}
