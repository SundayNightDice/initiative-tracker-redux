import immutable from 'immutable';

const _Encounter = {
  combatants: new immutable.List([]),
  conditions: new immutable.List([]),
  round: 1,
  currentPlayer: 0,
  turn: null
};

export default class EncounterModel extends immutable.Record(_Encounter) {

}
