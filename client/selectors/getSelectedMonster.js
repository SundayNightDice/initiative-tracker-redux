import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

const getSelectedMonsterKey = (state) => {
  const f = getFormValues('addEnemy')(state);
  if (f) {
    return f.monster;
  }
  return f;
};

export const getMonsters = (state) => state.monsters;

export const getEncounter = (state, id) => state.encounters.get(id);

export const getSelectedMonster = createSelector(
  [getSelectedMonsterKey, getMonsters],
  (key, monsters) => {
    return monsters.get(key);
  }
);

export const getEnemiesAsMonsters = (encounter, monsters) => {
  return encounter.enemies.map(item => {
    const m = monsters.get(item.monsterId);
    item.size = m.size;
    item.monsterType = m.name;
    return item;
  });
};
