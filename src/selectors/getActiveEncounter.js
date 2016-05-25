import { createSelector } from 'reselect';

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
  return e.status === 'pending' ||
    e.status === 'aborted' ||
    e.status === 'complete';
}

export default getActiveEncounter;
