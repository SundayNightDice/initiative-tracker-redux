export default function startEncounter(enemies, players) {
  return {
    type: 'START_ENCOUNTER',
    enemies: enemies,
    players: players
  };
}
