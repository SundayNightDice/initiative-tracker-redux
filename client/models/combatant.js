import { Record } from 'immutable';

const _Combatant = {
  name: '',
  type: '',
  hp: 0,
  maxHp: 0,
  deathSaves: 0,
  deathFails: 0,
  bonus: 0,
  initiative: 0,
  startingRound: 0,
  id: '',
  acted: false
};

export default class Combatant extends Record(_Combatant) {

  static fromPlayer(name, hp, bonus, startingRound, id) {
    return new Combatant({
      name: name,
      type: 'player',
      hp: hp,
      maxHp: hp,
      deathSaves: 0,
      deathFails: 0,
      bonus: bonus,
      initiative: 0,
      startingRound: startingRound,
      id: id,
      acted: false
    });
  }

  static fromEnemy(name, hp, bonus, startingRound, id) {
    return new Combatant({
      name: name,
      type: 'enemy',
      hp: hp,
      maxHp: hp,
      deathSaves: 0,
      deathFails: 0,
      bonus: bonus,
      initiative: 0,
      startingRound: startingRound,
      id: id,
      acted: false
    });
  }
}
