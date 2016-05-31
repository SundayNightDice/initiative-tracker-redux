export default function addEnemy(enemyData, encounterId) {
  const id = enemyData.name.replace(/ /g, '').toUpperCase();
  return {
    type: 'ADD_ENEMY',
    enemy: {
      name: enemyData.name,
      hp: enemyData.hp,
      initiative: enemyData.bonus,
      encounterId: encounterId
    },
    id: id
  };
}
