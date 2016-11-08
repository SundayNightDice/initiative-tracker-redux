import uuid from 'node-uuid';

export default (enemyData, encounterId) => {
  return (dispatch, getState) => {
    const monster = getState().monsters.get(enemyData.monster);

    dispatch({
      type: 'ADD_ENEMY',
      enemy: {
        name: enemyData.name,
        hp: monster.hp,
        initiative: monster.modifiers.dexterity,
        monsterId: enemyData.monster
      },
      encounterId: encounterId,
      enemyId: uuid.v4()
    });
  }
}
