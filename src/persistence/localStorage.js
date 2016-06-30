import { List, Map } from 'immutable';
import Combatant from './../models/combatant';
import EncounterModel from './../models/encounterModel';
import Player from './../models/player';

export const save = (state) => {
  try {
    const saveState = {
      encounters: state.encounters,
      enemies: state.enemies,
      players: state.players,
      routing: state.routing
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
      return {
        encounters: new Map(loadedState.encounters).map(e => {
          const encProps = e;
          encProps.combatants = new Map(e.combatants).map(c => new Combatant(c));
          encProps.order = new List(e.order);

          return new EncounterModel(encProps);
        }),
        enemies: new Map(loadedState.enemies),
        players: new Map(loadedState.players).map(p => new Player(p)),
        routing: loadedState.routing
      };
    }
  } catch (err) {
    return undefined;
  }
}
