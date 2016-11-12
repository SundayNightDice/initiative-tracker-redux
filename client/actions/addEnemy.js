import uuid from 'node-uuid';
import { reset } from 'redux-form';

export default (enemyData, encounterId) => {
  return (dispatch, getState) => {
    const monster = getState().monsters.get(enemyData.monster);

    dispatch({
      type: 'ADD_ENEMY',
      enemy: {
        name: enemyData.name,
        hp: monster.hp,
        initiative: monster.modifiers.dexterity,
        monsterId: enemyData.monster,
        startingRound: enemyData.startingRound
      },
      encounterId: encounterId,
      enemyId: uuid.v4()
    });

    dispatch(reset('addEnemy'));
  }
}
