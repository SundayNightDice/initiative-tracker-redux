export default function startEncounter(enemies) {
  return {
    type: 'START_ENCOUNTER',
    enemies: enemies
  };
}
