export default function criticalSave(enemy) {
  const id = enemy.name.replace(/ /g, '').toUpperCase();
  return {
    type: 'ADD_ENEMY',
    enemy: enemy,
    id: id
  };
}
