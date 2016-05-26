let count = 0;

export default function addPlayer(playerData) {
  const id = `PL${count}`;
  count++;
  return {
    type: 'ADD_PLAYER',
    playerId: id,
    player: {
      name: playerData.name,
      maxHp: playerData.hp,
      initiativeBonus: playerData.bonus
    }
  };
}
