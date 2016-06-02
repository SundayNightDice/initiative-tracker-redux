let count = 0;

export default function addPlayer(playerData) {
  const id = `PL${count}`;
  count++;

  const attributes = {
    strength: Number(playerData.strength),
    dexterity: Number(playerData.dexterity),
    constitution: Number(playerData.constitution),
    intelligence: Number(playerData.intelligence),
    wisdom: Number(playerData.wisdom),
    charisma: Number(playerData.charisma)
  };
  const modifiers = modify(attributes);

  return {
    type: 'ADD_PLAYER',
    playerId: id,
    player: {
      name: playerData.name,
      maxHp: playerData.hp,
      attributes: attributes,
      modifiers: modifiers,
      level: playerData.level
    }
  };
}

const modify = (attributes) => {
  return {
    strength: Math.max(attributes.strength - 10, 0) - 2,
    dexterity: Math.max(attributes.dexterity - 10, 0) - 2,
    constitution: Math.max(attributes.constitution - 10, 0) - 2,
    intelligence: Math.max(attributes.intelligence - 10, 0) - 2,
    wisdom: Math.max(attributes.wisdom - 10, 0) / 2,
    charisma: Math.max(attributes.charisma - 10, 0) / 2
  };
};
