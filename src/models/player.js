import { Record } from 'immutable';

const _Player = {
  name: '',
  maxHp: 0,
  hp: 0,
  attributes: null,
  modifiers: null,
  level: 0,
  class: ''
};

export default class Player extends Record(_Player) {
}
