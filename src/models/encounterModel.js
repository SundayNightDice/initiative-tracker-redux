import { List, Map, Record } from 'immutable';
import EncounterStatus from './encounterStatus';

const _Encounter = {
  combatants: Map({}),
  conditions: List([
    'Blinded',
    'Charmed',
    'Deafened',
    'Fatigued',
    'Frightened',
    'Grappled',
    'Incapacitated',
    'Invisible',
    'Paralyzed',
    'Petrified',
    'Poisoned',
    'Prone',
    'Restrained',
    'Stunned',
    'Unconscious'
  ]),
  round: 0,
  currentPlayer: '',
  turn: null,
  status: EncounterStatus.PENDING,
  order: List([]),
  name: ''
};

export default class EncounterModel extends Record(_Encounter) {
  constructor() {
    super({
      combatants: Map({}),
      conditions: List([
        'Blinded',
        'Charmed',
        'Deafened',
        'Fatigued',
        'Frightened',
        'Grappled',
        'Incapacitated',
        'Invisible',
        'Paralyzed',
        'Petrified',
        'Poisoned',
        'Prone',
        'Restrained',
        'Stunned',
        'Unconscious'
      ]),
      round: 0,
      currentPlayer: '',
      turn: null,
      status: EncounterStatus.PENDING,
      order: List([]),
      name: ''
    });
  }
}
