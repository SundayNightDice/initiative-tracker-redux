import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

const getSelectedMonsterKey = (state) => {
  const f = getFormValues('addEnemy')(state);
  if (f) {
    return f.monster;
  }
  return f;
};
const getMonsters = (state) => state.monsters;

const getSelectedMonster = createSelector(
  [getSelectedMonsterKey, getMonsters],
  (key, monsters) => {
    return monsters.get(key);
  }
);

export default getSelectedMonster;
