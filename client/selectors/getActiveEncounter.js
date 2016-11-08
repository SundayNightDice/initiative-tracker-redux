import { createSelector } from 'reselect';
import EncounterStatus from './../models/encounterStatus';

const getEncounters = (state) => state.encounters;

const getActiveEncounter = createSelector(
  [getEncounters],
  (encounters) => {
    const active = encounters
      .filterNot(isActive)
      .entrySeq();
    return active.size ? active.get(0) : [null, null];
  }
);

const isActive = (e) => {
  return e.status === EncounterStatus.PENDING ||
    e.status === EncounterStatus.ABORTED ||
    e.status === EncounterStatus.COMPLETE;
}

export default getActiveEncounter;
