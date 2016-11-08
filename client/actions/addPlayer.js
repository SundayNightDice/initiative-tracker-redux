import uuid from 'node-uuid';
import Player from './../models/player';
import { reset } from 'redux-form';

export default (playerData) => {
  return (dispatch, getState) => {
    const attributes = {
      strength: Number(playerData.strength),
      dexterity: Number(playerData.dexterity),
      constitution: Number(playerData.constitution),
      intelligence: Number(playerData.intelligence),
      wisdom: Number(playerData.wisdom),
      charisma: Number(playerData.charisma)
    };
    const modifiers = modify(attributes);

    dispatch({
      type: 'ADD_PLAYER',
      playerId: uuid.v4(),
      player: new Player({
        name: playerData.name,
        maxHp: playerData.hp,
        hp: playerData.hp,
        attributes: attributes,
        modifiers: modifiers,
        level: playerData.level,
        class: playerData.class,
        race: playerData.race
      })
    });

    dispatch(reset('addPlayer'));
  }
}

const modify = (attributes) => {
  return {
    strength: calculateModifier(attributes.strength),
    dexterity: calculateModifier(attributes.dexterity),
    constitution: calculateModifier(attributes.constitution),
    intelligence: calculateModifier(attributes.intelligence),
    wisdom: calculateModifier(attributes.wisdom),
    charisma: calculateModifier(attributes.charisma)
  };
};

const calculateModifier = (stat) => Math.floor(Math.max(stat - 10, 0) / 2)
