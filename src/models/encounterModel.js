import immutable from 'immutable';

const _Encounter = {
  combatants: new immutable.Map({}),
  conditions: new immutable.List([
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
  order: new immutable.List([])
};

export default class EncounterModel extends immutable.Record(_Encounter) {
  constructor(combatants) {
    super({
      combatants: combatants,
      conditions: new immutable.List([
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
      order: new immutable.List([])
    });
  }
}
