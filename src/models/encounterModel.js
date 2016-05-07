import { List, Map, Record } from 'immutable';

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
  status: 'pending',
  order: List([])
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
      status: "pending",
      order: List([])
    });
  }
}
