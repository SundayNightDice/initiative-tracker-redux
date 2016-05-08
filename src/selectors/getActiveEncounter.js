import { createSelector } from 'reselect';

const getEncounters = (state) => state.encounters;

const getActiveEncounter = createSelector(
  [getEncounters],
  (encounters) => {
    const active = encounters
      .filterNot((e) => e.status === 'pending')
      .entrySeq();
    return active.size ? active.get(0) : [null, null];
  }
);

export default getActiveEncounter;
