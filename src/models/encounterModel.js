import { List, Map, Record } from 'immutable';
import EncounterStatus from './encounterStatus';

const _Encounter = {
  combatants: Map({}),
  round: 0,
  currentPlayer: '',
  status: EncounterStatus.PENDING,
  order: List([]),
  name: ''
};

export default class EncounterModel extends Record(_Encounter) {
}
