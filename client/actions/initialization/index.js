import classesLoaded from './classesLoaded';
import monstersLoaded from './monstersLoaded';
import racesLoaded from './racesLoaded';
import classes from '../../data/classes';
import monsters from '../../data/monsters';
import races from '../../data/races';

export default () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'INITIALIZING'
    });
    dispatch(classesLoaded(classes));
    dispatch(monstersLoaded(monsters));
    dispatch(racesLoaded(races));
  }
}
