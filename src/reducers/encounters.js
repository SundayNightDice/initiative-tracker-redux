import { Map } from 'immutable';
import encounter from './encounter';
import EncounterModel from './../models/encounterModel';

const defaultState = Map({
  'ENC1': new EncounterModel()
});

export default function encounters(state = defaultState, action) {
    switch (action.type) {
      default:
        if (action.encounterId) {
          const encounterState = state.get(action.encounterId);
          return state.set(action.encounterId, encounter(encounterState, action));
        } else {
          return state;
        }
    }
}
