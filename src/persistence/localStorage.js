import EncounterModel from './../models/encounterModel';

export const save = (state) => {
  try {
    const saveState = {
      enemies: state.enemies,
      encounters: state.encounters,
      players: state.players
    }
    localStorage.setItem('state', JSON.stringify(saveState));
  } catch (err) {}
}

export const load = () => {
  try {
    const loadData = localStorage.getItem('state');
    if (loadData === null) {
      return undefined;
    } else {
      const loadedState = JSON.parse(loadData);




      return loadedState;
    }
  } catch (err) {
    return undefined;
  }
}
