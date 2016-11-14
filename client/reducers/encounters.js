import { Map } from 'immutable';
import encounter from './encounter';
import persistable from './persistable';
import EncounterModel from './../models/encounterModel';
import EncounterStatus from './../models/encounterStatus';

const defaultState = Map({});
const encounters = (state, action) => {
    switch (action.type) {
      case 'ADD_ENCOUNTER':
        return state.set(action.id, new EncounterModel());
      case 'DELETE_ENCOUNTER':
        return state.delete(action.id);
      case 'EDIT_ENCOUNTER':
        return state.setIn([action.id, 'status'], EncounterStatus.BUILDING)
      default:
        if (action.encounterId) {
          const encounterState = state.get(action.encounterId);
          return state.set(action.encounterId, encounter(encounterState, action));
        } else {
          return state;
        }
    }
}
const persistableReducer = persistable(defaultState, encounters);

export default persistableReducer;
