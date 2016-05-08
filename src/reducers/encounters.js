import { Map } from 'immutable';
import encounter from './encounter';
import EncounterModel from './../models/encounterModel';

const defaultState = Map({});

export default function encounters(state = defaultState, action) {
    switch (action.type) {
      case 'ADD_ENCOUNTER':
        return state.set(action.id,
          new EncounterModel()
            .set('status', 'building'));
      default:
        if (action.encounterId) {
          const encounterState = state.get(action.encounterId);
          return state.set(action.encounterId, encounter(encounterState, action));
        } else {
          return state;
        }
    }
}
