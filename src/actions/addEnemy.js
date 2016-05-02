export default function criticalSave(enemy) {
  return {
    type: 'ADD_ENEMY',
    enemy: enemy,
  };
}
