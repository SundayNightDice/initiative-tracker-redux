export default function startEncounter(enemies, players, encounterId) {
  return {
    type: 'START_ENCOUNTER',
    enemies: enemies,
    players: players,
    encounterId: encounterId
  };
}
