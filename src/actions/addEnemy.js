import uuid from 'node-uuid';

export default (enemyData, encounterId) => ({
  type: 'ADD_ENEMY',
  enemy: {
    name: enemyData.name,
    hp: Number(enemyData.hp),
    initiative: Number(enemyData.bonus),
    encounterId: encounterId
  },
  id: uuid.v4()
});
