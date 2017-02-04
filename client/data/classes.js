import { Map } from 'immutable';

const classes = Map({
  "Barbarian": {
    name: "Barbarian",
    hitDie: 12,
    saves: ["STR", "CON"],
    description: "A fierce warrior of primitive background who can enter a battle rage"
  },
  "Bard": {
    name: "Bard",
    hitDie: 8,
    saves: ["DEX", "CHA"],
    description: "An inspiring magician whose power echoes the music of creation"
  },
  "Cleric": {
    name: "Cleric",
    hitDie: 8,
    saves: ["WIS", "CHA"],
    description: "A priestly champion who wields divine magic in service of a higher power"
  },
  "Druid": {
    name: "Druid",
    hitDie: 8,
    saves: ["INT", "WIS"],
    description: "A priest of the Old Faith, wielding the powers of nature - moonlight and plant growth, fire and lightning - and adopting animal forms"
  },
  "Fighter": {
    name: "Fighter",
    hitDie: 10,
    saves: ["STR", "CON"],
    description: "A master of martial combat, skilled with a variety of weapons and armor"
  },
  "Monk": {
    name: "Monk",
    hitDie: "8",
    saves: ["STR", "DEX"],
    description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection"
  },
  "Paladin": {
    name: "Paladin",
    hitDie: 10,
    saves: ["WIS", "CHA"],
    description: "A holy warrior bound to a sacred oath"
  },
  "Ranger": {
    name: "Ranger",
    hitDie: "10",
    saves: ["STR", "DEX"],
    description: "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization"
  },
  "Rogue": {
    name: "Rogue",
    hitDie: 8,
    saves: ["DEX", "INT"],
    description: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies"
  },
  "Sorceror": {
    name: "Sorceror",
    hitDie: "6",
    saves: ["CON", "CHA"],
    description: "A spellcaster who draws on inherent magic from a gift or bloodline"
  },
  "Warlock": {
    name: "Warlock",
    hitDie: 8,
    saves: ["WIS", "CHA"],
    description: "A wielder of magic that is derived from a bargain with an extraplanar entity"
  },
  "Wizard": {
    name: "Wizard",
    hitDie: 6,
    saves: ["INT", "WIS"],
    description: "A scholary magic-user capable of manipulating the structure of reality"
  }
});

export default classes;
