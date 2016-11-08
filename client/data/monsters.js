import { Map } from 'immutable';

const monsters = Map({
  "7ec7e496-4704-4ead-a154-2c9880aa8aad": {
    "name": "Frog",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 1,
      "dexterity": 13,
      "constitution": 8,
      "intelligence": 1,
      "wisdom": 8,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "eb4e4762-d9ff-4e09-91ce-19917a650263": {
    "name": "Giant Centipede",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 4,
    "dice": "1d6",
    "attributes": {
      "strength": 5,
      "dexterity": 14,
      "constitution": 12,
      "intelligence": 1,
      "wisdom": 7,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Small",
    "alignment": "unaligned"
  },
  "0b2d277a-8493-4b40-8efe-169acb0f3f6f": {
    "name": "Brass Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 16,
    "hp": 16,
    "dice": "3d8",
    "attributes": {
      "strength": 15,
      "dexterity": 10,
      "constitution": 13,
      "intelligence": 10,
      "wisdom": 11,
      "charisma": 13
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "chaotic good"
  },
  "9b00b877-62c8-4319-a829-28d318b2c03c": {
    "name": "Giant Lizard",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 19,
    "dice": "3d10",
    "attributes": {
      "strength": 15,
      "dexterity": 12,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Large",
    "alignment": "unaligned"
  },
  "6c0f4b8d-b6b7-4a6f-bbab-75edf21de922": {
    "name": "Bandit Captain",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 15,
    "hp": 65,
    "dice": "10d8",
    "attributes": {
      "strength": 15,
      "dexterity": 16,
      "constitution": 14,
      "intelligence": 14,
      "wisdom": 11,
      "charisma": 14
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 3,
      "constitution": 2,
      "intelligence": 2,
      "wisdom": 0,
      "charisma": 2
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "any non-lawful alignment"
  },
  "33f5773f-7e63-4765-8991-bc77b49cb8e3": {
    "name": "Chuul",
    "type": "aberration",
    "subtype": "",
    "ac": 16,
    "hp": 93,
    "dice": "11d10",
    "attributes": {
      "strength": 19,
      "dexterity": 10,
      "constitution": 16,
      "intelligence": 5,
      "wisdom": 11,
      "charisma": 5
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 4,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "3d475d0b-0adc-4b1c-a9af-04a86a25775e": {
    "name": "Pseudodragon",
    "type": "dragon",
    "subtype": "",
    "ac": 13,
    "hp": 7,
    "dice": "2d4",
    "attributes": {
      "strength": 6,
      "dexterity": 15,
      "constitution": 13,
      "intelligence": 10,
      "wisdom": 12,
      "charisma": 10
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Tiny",
    "alignment": "neutral good"
  },
  "98f56d5f-5f1a-4704-abc8-874ba42cacc4": {
    "name": "Otyugh",
    "type": "aberration",
    "subtype": "",
    "ac": 14,
    "hp": 114,
    "dice": "12d10",
    "attributes": {
      "strength": 16,
      "dexterity": 11,
      "constitution": 19,
      "intelligence": 6,
      "wisdom": 13,
      "charisma": 6
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "neutral"
  },
  "92ac4320-791c-49d9-ae6c-5845214284a8": {
    "name": "Gorgon",
    "type": "monstrosity",
    "subtype": "",
    "ac": 19,
    "hp": 114,
    "dice": "12d10",
    "attributes": {
      "strength": 20,
      "dexterity": 11,
      "constitution": 18,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "unaligned"
  },
  "327072d6-d83d-4157-8df7-31fa56da1977": {
    "name": "Green Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 38,
    "dice": "7d8",
    "attributes": {
      "strength": 15,
      "dexterity": 12,
      "constitution": 13,
      "intelligence": 14,
      "wisdom": 11,
      "charisma": 13
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 2,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "fae339d7-bc1c-4d53-b82d-bcbc180d20f7": {
    "name": "Mage",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 12,
    "hp": 40,
    "dice": "9d8",
    "attributes": {
      "strength": 9,
      "dexterity": 14,
      "constitution": 11,
      "intelligence": 17,
      "wisdom": 12,
      "charisma": 11
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 3,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 6,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "9696ad88-cbb2-46f2-95de-6c752751cfa4": {
    "name": "Spider",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 2,
      "dexterity": 14,
      "constitution": 8,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 2
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "9d0c9956-6379-4419-a577-f91153b10c93": {
    "name": "Goat",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 4,
    "dice": "1d8",
    "attributes": {
      "strength": 12,
      "dexterity": 10,
      "constitution": 11,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "b118e47b-4382-47a6-9e68-a5fcf1c12b39": {
    "name": "Air Elemental",
    "type": "elemental",
    "subtype": "",
    "ac": 15,
    "hp": 90,
    "dice": "12d10",
    "attributes": {
      "strength": 14,
      "dexterity": 20,
      "constitution": 14,
      "intelligence": 6,
      "wisdom": 10,
      "charisma": 6
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 5,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "neutral"
  },
  "297e70f6-1bb5-4eca-8413-80c4fdb8690f": {
    "name": "Druid",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 11,
    "hp": 27,
    "dice": "5d8",
    "attributes": {
      "strength": 10,
      "dexterity": 12,
      "constitution": 13,
      "intelligence": 12,
      "wisdom": 15,
      "charisma": 11
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 1,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "f3ba3e0c-53b5-46e3-be56-5844df19955a": {
    "name": "Minotaur",
    "type": "monstrosity",
    "subtype": "",
    "ac": 14,
    "hp": 76,
    "dice": "9d10",
    "attributes": {
      "strength": 18,
      "dexterity": 11,
      "constitution": 16,
      "intelligence": 6,
      "wisdom": 16,
      "charisma": 9
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 3,
      "charisma": 0
    },
    "cr": 3,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "0d05c449-7eae-4fb8-8315-1837fa36bce6": {
    "name": "Priest",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 13,
    "hp": 27,
    "dice": "5d8",
    "attributes": {
      "strength": 10,
      "dexterity": 10,
      "constitution": 12,
      "intelligence": 13,
      "wisdom": 16,
      "charisma": 13
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 1,
      "wisdom": 3,
      "charisma": 1
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "84edbd4c-7f5a-4730-a715-b3e1c1b2300b": {
    "name": "Gargoyle",
    "type": "elemental",
    "subtype": "",
    "ac": 15,
    "hp": 52,
    "dice": "7d8",
    "attributes": {
      "strength": 15,
      "dexterity": 11,
      "constitution": 16,
      "intelligence": 6,
      "wisdom": 11,
      "charisma": 7
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "08988202-ddef-47b5-a9b7-dcda9196c7d5": {
    "name": "Gold Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 60,
    "dice": "8d8",
    "attributes": {
      "strength": 19,
      "dexterity": 14,
      "constitution": 17,
      "intelligence": 14,
      "wisdom": 11,
      "charisma": 16
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 2,
      "wisdom": 0,
      "charisma": 3
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "lawful good"
  },
  "34a6fd4b-2ed2-4bd2-9ee5-3a4e8a148e09": {
    "name": "Deva",
    "type": "celestial",
    "subtype": "",
    "ac": 17,
    "hp": 136,
    "dice": "16d8",
    "attributes": {
      "strength": 18,
      "dexterity": 18,
      "constitution": 18,
      "intelligence": 17,
      "wisdom": 20,
      "charisma": 20
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 4,
      "constitution": 4,
      "intelligence": 3,
      "wisdom": 5,
      "charisma": 5
    },
    "cr": 10,
    "size": "Medium",
    "alignment": "lawful good"
  },
  "1ade212e-e5d4-4b99-bf58-81bd32a85c70": {
    "name": "Ice Mephit",
    "type": "elemental",
    "subtype": "",
    "ac": 11,
    "hp": 21,
    "dice": "6d6",
    "attributes": {
      "strength": 7,
      "dexterity": 13,
      "constitution": 10,
      "intelligence": 9,
      "wisdom": 11,
      "charisma": 12
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 0.5,
    "size": "Small",
    "alignment": "neutral evil"
  },
  "663b119e-4bc7-40bc-a8ca-b91c83d481b6": {
    "name": "Swarm of Centipedes",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 12,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 3,
      "dexterity": 13,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 7,
      "charisma": 1
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "e9a11e02-b5ca-4cde-b16a-f2782417038c": {
    "name": "Swarm of Bats",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 12,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 5,
      "dexterity": 15,
      "constitution": 10,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 4
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "e3fcf958-6b64-4bb8-8a4b-146f8452552d": {
    "name": "Cockatrice",
    "type": "monstrosity",
    "subtype": "",
    "ac": 11,
    "hp": 27,
    "dice": "6d6",
    "attributes": {
      "strength": 6,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 2,
      "wisdom": 13,
      "charisma": 5
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Small",
    "alignment": "unaligned"
  },
  "1b415475-8bff-4657-bd3d-6c52622bc838": {
    "name": "Commoner",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 10,
    "hp": 4,
    "dice": "1d8",
    "attributes": {
      "strength": 10,
      "dexterity": 10,
      "constitution": 10,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 10
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "f13702e2-7525-4bab-b2e9-9447e48b5998": {
    "name": "Gladiator",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 16,
    "hp": 112,
    "dice": "15d8",
    "attributes": {
      "strength": 18,
      "dexterity": 15,
      "constitution": 16,
      "intelligence": 10,
      "wisdom": 12,
      "charisma": 15
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 5,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "3947fa6b-6b48-496e-896a-ee0c4eac8250": {
    "name": "Merfolk",
    "type": "humanoid",
    "subtype": "merfolk",
    "ac": 11,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 10,
      "dexterity": 13,
      "constitution": 12,
      "intelligence": 11,
      "wisdom": 11,
      "charisma": 12
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "neutral"
  },
  "65c3bbd5-16ac-4934-9ddc-edd48d77efc5": {
    "name": "Camel",
    "type": "beast",
    "subtype": "",
    "ac": 9,
    "hp": 15,
    "dice": "2d10",
    "attributes": {
      "strength": 16,
      "dexterity": 8,
      "constitution": 14,
      "intelligence": 2,
      "wisdom": 8,
      "charisma": 5
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Large",
    "alignment": "unaligned"
  },
  "478c2fd6-381d-4010-8458-eb4b3d5cae74": {
    "name": "Frost Giant",
    "type": "giant",
    "subtype": "",
    "ac": 15,
    "hp": 138,
    "dice": "12d12",
    "attributes": {
      "strength": 23,
      "dexterity": 9,
      "constitution": 21,
      "intelligence": 9,
      "wisdom": 10,
      "charisma": 12
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 8,
    "size": "Huge",
    "alignment": "neutral evil"
  },
  "787265fa-2ee8-409d-9662-29a7976312d0": {
    "name": "Giant Scorpion",
    "type": "beast",
    "subtype": "",
    "ac": 15,
    "hp": 52,
    "dice": "7d10",
    "attributes": {
      "strength": 15,
      "dexterity": 13,
      "constitution": 15,
      "intelligence": 1,
      "wisdom": 9,
      "charisma": 3
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 3,
    "size": "Large",
    "alignment": "unaligned"
  },
  "2b1434a7-e0a9-4a8a-a7f2-7534109234e5": {
    "name": "Cult Fanatic",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 13,
    "hp": 22,
    "dice": "6d8",
    "attributes": {
      "strength": 11,
      "dexterity": 14,
      "constitution": 12,
      "intelligence": 10,
      "wisdom": 13,
      "charisma": 14
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "any non-good alignment"
  },
  "009fa351-1341-42e1-aa9a-58a542a58466": {
    "name": "Salamander",
    "type": "elemental",
    "subtype": "",
    "ac": 15,
    "hp": 90,
    "dice": "12d10",
    "attributes": {
      "strength": 18,
      "dexterity": 14,
      "constitution": 15,
      "intelligence": 11,
      "wisdom": 10,
      "charisma": 12
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 5,
    "size": "Large",
    "alignment": "neutral evil"
  },
  "0ed43e23-95ae-408f-a272-31eb8da3bcb5": {
    "name": "Mule",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 14,
      "dexterity": 10,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "3ea8c91a-fe2b-4a82-ad41-048636bf20b7": {
    "name": "Behir",
    "type": "monstrosity",
    "subtype": "",
    "ac": 17,
    "hp": 168,
    "dice": "16d12",
    "attributes": {
      "strength": 23,
      "dexterity": 16,
      "constitution": 18,
      "intelligence": 7,
      "wisdom": 14,
      "charisma": 12
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 3,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 1
    },
    "cr": 11,
    "size": "Huge",
    "alignment": "neutral evil"
  },
  "d4ea56f1-08cd-47c4-b7d2-84ca2de85108": {
    "name": "Shadow",
    "type": "undead",
    "subtype": "",
    "ac": 12,
    "hp": 16,
    "dice": "3d8",
    "attributes": {
      "strength": 6,
      "dexterity": 14,
      "constitution": 13,
      "intelligence": 6,
      "wisdom": 10,
      "charisma": 8
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "8bad135d-9a03-4bfd-967a-5b50e9df76f4": {
    "name": "Giant Spider",
    "type": "beast",
    "subtype": "",
    "ac": 14,
    "hp": 26,
    "dice": "4d10",
    "attributes": {
      "strength": 14,
      "dexterity": 16,
      "constitution": 12,
      "intelligence": 2,
      "wisdom": 11,
      "charisma": 4
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 3,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "unaligned"
  },
  "2b76c138-6ac7-47a4-bb26-4085b6ee1277": {
    "name": "Blue Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 52,
    "dice": "8d8",
    "attributes": {
      "strength": 17,
      "dexterity": 10,
      "constitution": 15,
      "intelligence": 12,
      "wisdom": 11,
      "charisma": 15
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 1,
      "wisdom": 0,
      "charisma": 2
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "d1f476a9-e503-4124-b3bd-a163178fb834": {
    "name": "Wraith",
    "type": "undead",
    "subtype": "",
    "ac": 13,
    "hp": 67,
    "dice": "9d8",
    "attributes": {
      "strength": 6,
      "dexterity": 16,
      "constitution": 16,
      "intelligence": 12,
      "wisdom": 14,
      "charisma": 15
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 3,
      "intelligence": 1,
      "wisdom": 2,
      "charisma": 2
    },
    "cr": 5,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "4e784cce-98ac-46bb-9f71-78cf623270f4": {
    "name": "Ancient Brass Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 20,
    "hp": 297,
    "dice": "17d20",
    "attributes": {
      "strength": 27,
      "dexterity": 10,
      "constitution": 25,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 19
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 0,
      "constitution": 7,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 20,
    "size": "Gargantuan",
    "alignment": "chaotic good"
  },
  "e105eb80-f7f8-46d9-a985-60d2657da172": {
    "name": "Draft Horse",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 19,
    "dice": "3d10",
    "attributes": {
      "strength": 18,
      "dexterity": 10,
      "constitution": 12,
      "intelligence": 2,
      "wisdom": 11,
      "charisma": 7
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Large",
    "alignment": "unaligned"
  },
  "ba6185d2-e8a3-4467-a6ca-136360944776": {
    "name": "Bugbear",
    "type": "humanoid",
    "subtype": "goblinoid",
    "ac": 16,
    "hp": 27,
    "dice": "5d8",
    "attributes": {
      "strength": 15,
      "dexterity": 14,
      "constitution": 13,
      "intelligence": 8,
      "wisdom": 11,
      "charisma": 9
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "7a7c1bfb-e4e1-4731-870b-46562f1019c1": {
    "name": "Grick",
    "type": "monstrosity",
    "subtype": "",
    "ac": 14,
    "hp": 27,
    "dice": "6d8",
    "attributes": {
      "strength": 14,
      "dexterity": 14,
      "constitution": 11,
      "intelligence": 3,
      "wisdom": 14,
      "charisma": 5
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "neutral"
  },
  "9b4a3a3b-925f-4c16-b93b-6156553e4586": {
    "name": "Black Pudding",
    "type": "ooze",
    "subtype": "",
    "ac": 7,
    "hp": 85,
    "dice": "10d10",
    "attributes": {
      "strength": 16,
      "dexterity": 5,
      "constitution": 16,
      "intelligence": 1,
      "wisdom": 6,
      "charisma": 1
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 4,
    "size": "Large",
    "alignment": "unaligned"
  },
  "a17f1200-9207-4e14-966c-d727a6921f76": {
    "name": "Dryad",
    "type": "fey",
    "subtype": "",
    "ac": 11,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 10,
      "dexterity": 12,
      "constitution": 11,
      "intelligence": 14,
      "wisdom": 15,
      "charisma": 18
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 2,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "neutral"
  },
  "aba4a30b-2ab9-41c5-b982-ad566159f469": {
    "name": "Warhorse",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 19,
    "dice": "3d10",
    "attributes": {
      "strength": 18,
      "dexterity": 12,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Large",
    "alignment": "unaligned"
  },
  "3d75dd4d-bb56-4663-9c31-181ca3120487": {
    "name": "Gelatinous Cube",
    "type": "ooze",
    "subtype": "",
    "ac": 6,
    "hp": 84,
    "dice": "8d10",
    "attributes": {
      "strength": 14,
      "dexterity": 3,
      "constitution": 20,
      "intelligence": 1,
      "wisdom": 6,
      "charisma": 1
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "434c1c10-6423-4670-ba17-b5245909940a": {
    "name": "Unicorn",
    "type": "celestial",
    "subtype": "",
    "ac": 12,
    "hp": 67,
    "dice": "9d10",
    "attributes": {
      "strength": 18,
      "dexterity": 14,
      "constitution": 15,
      "intelligence": 11,
      "wisdom": 17,
      "charisma": 16
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 3,
      "charisma": 3
    },
    "cr": 5,
    "size": "Large",
    "alignment": "lawful good"
  },
  "585c08ce-400e-48f0-8e0a-25af9c948511": {
    "name": "Aboleth",
    "type": "aberration",
    "subtype": "",
    "ac": 17,
    "hp": 135,
    "dice": "18d10",
    "attributes": {
      "strength": 21,
      "dexterity": 9,
      "constitution": 15,
      "intelligence": 18,
      "wisdom": 15,
      "charisma": 18
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 4,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 10,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "0820e0cf-2800-4faa-bb1b-c71a5a259319": {
    "name": "Badger",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 3,
    "dice": "1d4",
    "attributes": {
      "strength": 4,
      "dexterity": 11,
      "constitution": 12,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 5
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "a558374c-9233-44cc-91ce-8fa90b54b8aa": {
    "name": "Ancient Red Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 22,
    "hp": 546,
    "dice": "28d20",
    "attributes": {
      "strength": 30,
      "dexterity": 10,
      "constitution": 29,
      "intelligence": 18,
      "wisdom": 15,
      "charisma": 23
    },
    "modifiers": {
      "strength": 10,
      "dexterity": 0,
      "constitution": 9,
      "intelligence": 4,
      "wisdom": 2,
      "charisma": 6
    },
    "cr": 24,
    "size": "Gargantuan",
    "alignment": "chaotic evil"
  },
  "c489fc50-9175-433a-8eb5-bb8361f9fe51": {
    "name": "Axe Beak",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 19,
    "dice": "3d10",
    "attributes": {
      "strength": 14,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Large",
    "alignment": "unaligned"
  },
  "6765e8bd-fea0-4ab3-a885-353b12f12daf": {
    "name": "White Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 16,
    "hp": 32,
    "dice": "5d8",
    "attributes": {
      "strength": 14,
      "dexterity": 10,
      "constitution": 14,
      "intelligence": 5,
      "wisdom": 10,
      "charisma": 11
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "90f4c54a-d7a1-43c6-a1bd-5c68346fa42b": {
    "name": "Dragon Turtle",
    "type": "dragon",
    "subtype": "",
    "ac": 20,
    "hp": 341,
    "dice": "22d20",
    "attributes": {
      "strength": 25,
      "dexterity": 10,
      "constitution": 20,
      "intelligence": 10,
      "wisdom": 12,
      "charisma": 12
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 1
    },
    "cr": 17,
    "size": "Gargantuan",
    "alignment": "neutral"
  },
  "0aa509de-a90b-40fb-9ec9-9f071da1b203": {
    "name": "Clay Golem",
    "type": "construct",
    "subtype": "",
    "ac": 14,
    "hp": 133,
    "dice": "14d10",
    "attributes": {
      "strength": 20,
      "dexterity": 9,
      "constitution": 18,
      "intelligence": 3,
      "wisdom": 8,
      "charisma": 1
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 9,
    "size": "Large",
    "alignment": "unaligned"
  },
  "d843e06b-f2df-48d0-9fb9-6026b146e0ad": {
    "name": "Earth Elemental",
    "type": "elemental",
    "subtype": "",
    "ac": 17,
    "hp": 126,
    "dice": "12d10",
    "attributes": {
      "strength": 20,
      "dexterity": 8,
      "constitution": 20,
      "intelligence": 5,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "neutral"
  },
  "4f4ec1f0-440f-4c9e-8527-b2a5f1e319bd": {
    "name": "Spy",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 12,
    "hp": 27,
    "dice": "6d8",
    "attributes": {
      "strength": 10,
      "dexterity": 15,
      "constitution": 10,
      "intelligence": 12,
      "wisdom": 14,
      "charisma": 16
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 1,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "d6f39214-46fe-48b3-b4a4-2268109b1c87": {
    "name": "Carrion Crawler",
    "type": "monstrosity",
    "subtype": "",
    "ac": 13,
    "hp": 51,
    "dice": "6d10",
    "attributes": {
      "strength": 14,
      "dexterity": 13,
      "constitution": 16,
      "intelligence": 1,
      "wisdom": 12,
      "charisma": 5
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "d7c5f42a-9f61-49b6-be10-3aa48d1dbdf8": {
    "name": "Swarm of Beetles",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 12,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 3,
      "dexterity": 13,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 7,
      "charisma": 1
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "8c7b26e0-7194-49d9-a61f-e2bb965b5adf": {
    "name": "Guardian Naga",
    "type": "monstrosity",
    "subtype": "",
    "ac": 18,
    "hp": 127,
    "dice": "15d10",
    "attributes": {
      "strength": 19,
      "dexterity": 18,
      "constitution": 16,
      "intelligence": 16,
      "wisdom": 19,
      "charisma": 18
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 4,
      "constitution": 3,
      "intelligence": 3,
      "wisdom": 4,
      "charisma": 4
    },
    "cr": 10,
    "size": "Large",
    "alignment": "lawful good"
  },
  "6414fd9d-33c5-47e9-ad8e-401a5c6af5e7": {
    "name": "Violet Fungus",
    "type": "plant",
    "subtype": "",
    "ac": 5,
    "hp": 18,
    "dice": "4d8",
    "attributes": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 3,
      "charisma": 1
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "74606325-d071-45a0-ab82-79a84fe4419a": {
    "name": "Bulette",
    "type": "monstrosity",
    "subtype": "",
    "ac": 17,
    "hp": 94,
    "dice": "9d10",
    "attributes": {
      "strength": 19,
      "dexterity": 11,
      "constitution": 21,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "unaligned"
  },
  "92bff5cd-8dbe-43d0-8b8b-ab61bba53ca1": {
    "name": "Tribal Warrior",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 12,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 13,
      "dexterity": 11,
      "constitution": 12,
      "intelligence": 8,
      "wisdom": 11,
      "charisma": 8
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "284100d2-8ac3-4a7d-ab8e-ad62d3e016be": {
    "name": "Rug of Smothering",
    "type": "construct",
    "subtype": "",
    "ac": 12,
    "hp": 33,
    "dice": "6d10",
    "attributes": {
      "strength": 17,
      "dexterity": 14,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 3,
      "charisma": 1
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "e9f2aa17-e052-4bc2-b207-b9fa3dccef75": {
    "name": "Doppelganger",
    "type": "monstrosity",
    "subtype": "shapechanger",
    "ac": 14,
    "hp": 52,
    "dice": "8d8",
    "attributes": {
      "strength": 11,
      "dexterity": 18,
      "constitution": 14,
      "intelligence": 11,
      "wisdom": 12,
      "charisma": 14
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 4,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "86f9b0fa-4257-4e32-8a12-5123f15a068d": {
    "name": "Marilith",
    "type": "fiend",
    "subtype": "demon",
    "ac": 18,
    "hp": 189,
    "dice": "18d10",
    "attributes": {
      "strength": 18,
      "dexterity": 20,
      "constitution": 20,
      "intelligence": 18,
      "wisdom": 16,
      "charisma": 20
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 5,
      "constitution": 5,
      "intelligence": 4,
      "wisdom": 3,
      "charisma": 5
    },
    "cr": 16,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "be6e210b-9197-44e6-b59e-32a2c64e2cac": {
    "name": "Flying Sword",
    "type": "construct",
    "subtype": "",
    "ac": 17,
    "hp": 17,
    "dice": "5d6",
    "attributes": {
      "strength": 12,
      "dexterity": 15,
      "constitution": 11,
      "intelligence": 1,
      "wisdom": 5,
      "charisma": 1
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Small",
    "alignment": "unaligned"
  },
  "abdc2525-cf08-45bd-a43b-c11ce06c1ded": {
    "name": "Animated Armor",
    "type": "construct",
    "subtype": "",
    "ac": 18,
    "hp": 33,
    "dice": "6d8",
    "attributes": {
      "strength": 14,
      "dexterity": 11,
      "constitution": 13,
      "intelligence": 1,
      "wisdom": 3,
      "charisma": 1
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "c7818807-4f89-48f0-8588-842a6f3549f8": {
    "name": "Quipper",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 2,
      "dexterity": 16,
      "constitution": 9,
      "intelligence": 1,
      "wisdom": 7,
      "charisma": 2
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "f0607025-47ff-4e06-8d48-269fec8f3844": {
    "name": "Hill Giant",
    "type": "giant",
    "subtype": "",
    "ac": 13,
    "hp": 105,
    "dice": "10d12",
    "attributes": {
      "strength": 21,
      "dexterity": 8,
      "constitution": 19,
      "intelligence": 5,
      "wisdom": 9,
      "charisma": 6
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Huge",
    "alignment": "chaotic evil"
  },
  "fa6028d7-3d3a-4e14-ac11-9447f820043f": {
    "name": "Horned Devil",
    "type": "fiend",
    "subtype": "devil",
    "ac": 18,
    "hp": 148,
    "dice": "17d10",
    "attributes": {
      "strength": 22,
      "dexterity": 17,
      "constitution": 21,
      "intelligence": 12,
      "wisdom": 16,
      "charisma": 17
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 3,
      "constitution": 5,
      "intelligence": 1,
      "wisdom": 3,
      "charisma": 3
    },
    "cr": 11,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "963850b3-9af5-455f-ba3c-147e2d97c064": {
    "name": "Giant Octopus",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 52,
    "dice": "8d10",
    "attributes": {
      "strength": 17,
      "dexterity": 13,
      "constitution": 13,
      "intelligence": 4,
      "wisdom": 10,
      "charisma": 4
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "unaligned"
  },
  "69ce0077-b9d2-49fc-a949-2c15d6259ee0": {
    "name": "Goblin",
    "type": "humanoid",
    "subtype": "goblinoid",
    "ac": 15,
    "hp": 7,
    "dice": "2d6",
    "attributes": {
      "strength": 8,
      "dexterity": 14,
      "constitution": 10,
      "intelligence": 10,
      "wisdom": 8,
      "charisma": 8
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Small",
    "alignment": "neutral evil"
  },
  "90ae513c-647b-4d56-99f3-f3b472a644c8": {
    "name": "Dust Mephit",
    "type": "elemental",
    "subtype": "",
    "ac": 12,
    "hp": 17,
    "dice": "5d6",
    "attributes": {
      "strength": 5,
      "dexterity": 14,
      "constitution": 10,
      "intelligence": 9,
      "wisdom": 11,
      "charisma": 10
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Small",
    "alignment": "neutral evil"
  },
  "5877474d-3d43-4e15-a340-755629b3f4d8": {
    "name": "Homunculus",
    "type": "construct",
    "subtype": "",
    "ac": 13,
    "hp": 5,
    "dice": "2d4",
    "attributes": {
      "strength": 4,
      "dexterity": 15,
      "constitution": 11,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 7
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "neutral"
  },
  "2b0949d9-7a3b-4137-babb-1d3fbf441496": {
    "name": "Blood Hawk",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 7,
    "dice": "2d6",
    "attributes": {
      "strength": 6,
      "dexterity": 14,
      "constitution": 10,
      "intelligence": 3,
      "wisdom": 14,
      "charisma": 5
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Small",
    "alignment": "unaligned"
  },
  "aeaa88e9-6f4d-44b5-b969-1cf8136997a0": {
    "name": "Minotaur Skeleton",
    "type": "undead",
    "subtype": "",
    "ac": 12,
    "hp": 67,
    "dice": "9d10",
    "attributes": {
      "strength": 18,
      "dexterity": 11,
      "constitution": 15,
      "intelligence": 6,
      "wisdom": 8,
      "charisma": 5
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "4c1b416f-6375-4935-8739-a0460af83057": {
    "name": "Crocodile",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 19,
    "dice": "3d10",
    "attributes": {
      "strength": 15,
      "dexterity": 10,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Large",
    "alignment": "unaligned"
  },
  "5128ac76-9b83-474b-90ef-0c713ff72132": {
    "name": "Ancient Blue Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 22,
    "hp": 481,
    "dice": "26d20",
    "attributes": {
      "strength": 29,
      "dexterity": 10,
      "constitution": 27,
      "intelligence": 18,
      "wisdom": 17,
      "charisma": 21
    },
    "modifiers": {
      "strength": 9,
      "dexterity": 0,
      "constitution": 8,
      "intelligence": 4,
      "wisdom": 3,
      "charisma": 5
    },
    "cr": 23,
    "size": "Gargantuan",
    "alignment": "lawful evil"
  },
  "26fbdaf4-de26-4a2d-a99b-56c46caf73ad": {
    "name": "Adult Red Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 19,
    "hp": 256,
    "dice": "19d12",
    "attributes": {
      "strength": 27,
      "dexterity": 10,
      "constitution": 25,
      "intelligence": 16,
      "wisdom": 13,
      "charisma": 21
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 0,
      "constitution": 7,
      "intelligence": 3,
      "wisdom": 1,
      "charisma": 5
    },
    "cr": 17,
    "size": "Huge",
    "alignment": "chaotic evil"
  },
  "94b79469-cc90-49d6-9fa8-c26bf4076a57": {
    "name": "Giant Boar",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 42,
    "dice": "5d10",
    "attributes": {
      "strength": 17,
      "dexterity": 10,
      "constitution": 16,
      "intelligence": 2,
      "wisdom": 7,
      "charisma": 5
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "0ea4f759-c5f5-44d4-8174-2f05ad6611b7": {
    "name": "Adult Blue Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 19,
    "hp": 225,
    "dice": "18d12",
    "attributes": {
      "strength": 25,
      "dexterity": 10,
      "constitution": 23,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 19
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 0,
      "constitution": 6,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 16,
    "size": "Huge",
    "alignment": "lawful evil"
  },
  "eb93dc76-7971-42ee-9ada-2d95f04501fa": {
    "name": "Guard",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 16,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 13,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 10,
      "wisdom": 11,
      "charisma": 10
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "d5def9ca-be78-4e23-887d-ac9752a22b38": {
    "name": "Fire Elemental",
    "type": "elemental",
    "subtype": "",
    "ac": 13,
    "hp": 102,
    "dice": "12d10",
    "attributes": {
      "strength": 10,
      "dexterity": 17,
      "constitution": 16,
      "intelligence": 6,
      "wisdom": 10,
      "charisma": 7
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "neutral"
  },
  "29001c07-2bb4-48a1-a174-7de9db1411ff": {
    "name": "Young Blue Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 152,
    "dice": "16d10",
    "attributes": {
      "strength": 21,
      "dexterity": 10,
      "constitution": 19,
      "intelligence": 14,
      "wisdom": 13,
      "charisma": 17
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 2,
      "wisdom": 1,
      "charisma": 3
    },
    "cr": 9,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "5c134041-ec04-4265-b582-6a6e93acfa32": {
    "name": "Succubus/Incubus",
    "type": "fiend",
    "subtype": "shapechanger",
    "ac": 15,
    "hp": 66,
    "dice": "12d8",
    "attributes": {
      "strength": 8,
      "dexterity": 17,
      "constitution": 13,
      "intelligence": 15,
      "wisdom": 12,
      "charisma": 20
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 1,
      "intelligence": 2,
      "wisdom": 1,
      "charisma": 5
    },
    "cr": 4,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "416ba17a-c82f-4497-bccb-7371e8e0c06d": {
    "name": "Swarm of Quippers",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 13,
    "hp": 28,
    "dice": "8d8",
    "attributes": {
      "strength": 13,
      "dexterity": 16,
      "constitution": 9,
      "intelligence": 1,
      "wisdom": 7,
      "charisma": 2
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "c3179b79-e7cd-4066-9409-3cfee274cf16": {
    "name": "Remorhaz",
    "type": "monstrosity",
    "subtype": "",
    "ac": 17,
    "hp": 195,
    "dice": "17d12",
    "attributes": {
      "strength": 24,
      "dexterity": 13,
      "constitution": 21,
      "intelligence": 4,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 1,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 11,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "ede00aa3-1e81-4c94-803d-dda914610b86": {
    "name": "Pegasus",
    "type": "celestial",
    "subtype": "",
    "ac": 12,
    "hp": 59,
    "dice": "7d10",
    "attributes": {
      "strength": 18,
      "dexterity": 15,
      "constitution": 16,
      "intelligence": 10,
      "wisdom": 15,
      "charisma": 13
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 1
    },
    "cr": 2,
    "size": "Large",
    "alignment": "chaotic good"
  },
  "652f65f3-10bd-4bf7-b2c4-7a2e9dd5db0d": {
    "name": "Balor",
    "type": "fiend",
    "subtype": "demon",
    "ac": 19,
    "hp": 262,
    "dice": "21d12",
    "attributes": {
      "strength": 26,
      "dexterity": 15,
      "constitution": 22,
      "intelligence": 20,
      "wisdom": 16,
      "charisma": 22
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 2,
      "constitution": 6,
      "intelligence": 5,
      "wisdom": 3,
      "charisma": 6
    },
    "cr": 19,
    "size": "Huge",
    "alignment": "chaotic evil"
  },
  "96206487-8eff-4905-8a91-683ae4d91c7d": {
    "name": "Death Dog",
    "type": "monstrosity",
    "subtype": "",
    "ac": 12,
    "hp": 39,
    "dice": "6d8",
    "attributes": {
      "strength": 15,
      "dexterity": 14,
      "constitution": 14,
      "intelligence": 3,
      "wisdom": 13,
      "charisma": 6
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "7e8b7d3a-e928-4140-aca6-4280d7f856b2": {
    "name": "Plesiosaurus",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 68,
    "dice": "8d10",
    "attributes": {
      "strength": 18,
      "dexterity": 15,
      "constitution": 16,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 5
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "aa5eefbd-516b-4613-832d-37ec7ce98da9": {
    "name": "Zombie",
    "type": "undead",
    "subtype": "",
    "ac": 8,
    "hp": 22,
    "dice": "3d8",
    "attributes": {
      "strength": 13,
      "dexterity": 6,
      "constitution": 16,
      "intelligence": 3,
      "wisdom": 6,
      "charisma": 5
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "d3a13138-f036-4ef0-a5c6-b4bcc4c5bf49": {
    "name": "Adult Silver Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 19,
    "hp": 243,
    "dice": "18d12",
    "attributes": {
      "strength": 27,
      "dexterity": 10,
      "constitution": 25,
      "intelligence": 16,
      "wisdom": 13,
      "charisma": 21
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 0,
      "constitution": 7,
      "intelligence": 3,
      "wisdom": 1,
      "charisma": 5
    },
    "cr": 16,
    "size": "Huge",
    "alignment": "lawful good"
  },
  "5b809e2c-c8c9-4ef2-b1ae-a69d91b7ea20": {
    "name": "Cloaker",
    "type": "aberration",
    "subtype": "",
    "ac": 14,
    "hp": 78,
    "dice": "12d10",
    "attributes": {
      "strength": 17,
      "dexterity": 15,
      "constitution": 12,
      "intelligence": 13,
      "wisdom": 12,
      "charisma": 14
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 1,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 8,
    "size": "Large",
    "alignment": "chaotic neutral"
  },
  "df974171-bf80-4074-9cab-5f67fb09b181": {
    "name": "Basilisk",
    "type": "monstrosity",
    "subtype": "",
    "ac": 12,
    "hp": 52,
    "dice": "8d8",
    "attributes": {
      "strength": 16,
      "dexterity": 8,
      "constitution": 15,
      "intelligence": 2,
      "wisdom": 8,
      "charisma": 7
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "891cc040-b2b1-415b-878f-946a808b1ea3": {
    "name": "Ice Devil",
    "type": "fiend",
    "subtype": "devil",
    "ac": 18,
    "hp": 180,
    "dice": "19d10",
    "attributes": {
      "strength": 21,
      "dexterity": 14,
      "constitution": 18,
      "intelligence": 18,
      "wisdom": 15,
      "charisma": 18
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 2,
      "constitution": 4,
      "intelligence": 4,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 14,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "4eb8e996-308f-4754-b480-55d789465a67": {
    "name": "Hunter Shark",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 45,
    "dice": "6d10",
    "attributes": {
      "strength": 18,
      "dexterity": 13,
      "constitution": 15,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 4
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "31b8c1af-75f8-44ac-9683-9485ca01f842": {
    "name": "Ancient Bronze Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 22,
    "hp": 444,
    "dice": "24d20",
    "attributes": {
      "strength": 29,
      "dexterity": 10,
      "constitution": 27,
      "intelligence": 18,
      "wisdom": 17,
      "charisma": 21
    },
    "modifiers": {
      "strength": 9,
      "dexterity": 0,
      "constitution": 8,
      "intelligence": 4,
      "wisdom": 3,
      "charisma": 5
    },
    "cr": 22,
    "size": "Gargantuan",
    "alignment": "lawful good"
  },
  "5e4d1902-52ce-483a-b12e-1e405c2476d2": {
    "name": "Flying Snake",
    "type": "beast",
    "subtype": "",
    "ac": 14,
    "hp": 5,
    "dice": "2d4",
    "attributes": {
      "strength": 4,
      "dexterity": 18,
      "constitution": 11,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 5
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 4,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "6ab76123-96d3-4f47-8427-5acf6fca9e73": {
    "name": "Jackal",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 3,
    "dice": "1d6",
    "attributes": {
      "strength": 8,
      "dexterity": 15,
      "constitution": 11,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 6
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Small",
    "alignment": "unaligned"
  },
  "b4df133d-fba2-4a24-bbb2-054b7a8acd9b": {
    "name": "Adult Gold Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 19,
    "hp": 256,
    "dice": "19d12",
    "attributes": {
      "strength": 27,
      "dexterity": 14,
      "constitution": 25,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 24
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 2,
      "constitution": 7,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 7
    },
    "cr": 17,
    "size": "Huge",
    "alignment": "lawful good"
  },
  "0dd9ccd1-8a30-4693-86f3-136bd4a5a458": {
    "name": "Gray Ooze",
    "type": "ooze",
    "subtype": "",
    "ac": 8,
    "hp": 22,
    "dice": "3d8",
    "attributes": {
      "strength": 12,
      "dexterity": 6,
      "constitution": 16,
      "intelligence": 1,
      "wisdom": 6,
      "charisma": 2
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "1d586a9d-06b4-43dd-b801-0e3e6a61b6e1": {
    "name": "Giant Vulture",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 22,
    "dice": "3d10",
    "attributes": {
      "strength": 15,
      "dexterity": 10,
      "constitution": 15,
      "intelligence": 6,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "neutral evil"
  },
  "adae698c-32ef-4cb4-994b-c3faecc73359": {
    "name": "Imp",
    "type": "fiend",
    "subtype": "devil",
    "ac": 13,
    "hp": 10,
    "dice": "3d4",
    "attributes": {
      "strength": 6,
      "dexterity": 17,
      "constitution": 13,
      "intelligence": 11,
      "wisdom": 12,
      "charisma": 14
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 1,
    "size": "Tiny",
    "alignment": "lawful evil"
  },
  "5a74fe59-a460-4644-8b2d-60d455ec7982": {
    "name": "Werebear",
    "type": "humanoid",
    "subtype": "human",
    "ac": 10,
    "hp": 135,
    "dice": "18d8",
    "attributes": {
      "strength": 19,
      "dexterity": 10,
      "constitution": 17,
      "intelligence": 11,
      "wisdom": 12,
      "charisma": 12
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 1
    },
    "cr": 5,
    "size": "Medium",
    "alignment": "neutral good"
  },
  "04d1547b-1c66-4f21-8854-30e213c98eed": {
    "name": "Androsphinx",
    "type": "monstrosity",
    "subtype": "",
    "ac": 17,
    "hp": 199,
    "dice": "19d10",
    "attributes": {
      "strength": 22,
      "dexterity": 10,
      "constitution": 20,
      "intelligence": 16,
      "wisdom": 18,
      "charisma": 23
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 3,
      "wisdom": 4,
      "charisma": 6
    },
    "cr": 17,
    "size": "Large",
    "alignment": "lawful neutral"
  },
  "7c88fe0b-649b-4f58-9c82-b367e7bd7157": {
    "name": "Adult Green Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 19,
    "hp": 207,
    "dice": "18d12",
    "attributes": {
      "strength": 23,
      "dexterity": 12,
      "constitution": 21,
      "intelligence": 18,
      "wisdom": 15,
      "charisma": 17
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 1,
      "constitution": 5,
      "intelligence": 4,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 15,
    "size": "Huge",
    "alignment": "lawful evil"
  },
  "ccc304c0-5b6b-41ed-b5ee-fcaf84cc6770": {
    "name": "Mummy Lord",
    "type": "undead",
    "subtype": "",
    "ac": 17,
    "hp": 97,
    "dice": "13d8",
    "attributes": {
      "strength": 18,
      "dexterity": 10,
      "constitution": 17,
      "intelligence": 11,
      "wisdom": 18,
      "charisma": 16
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 4,
      "charisma": 3
    },
    "cr": 15,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "36e861ad-c6c3-4c29-bacd-9aa83ccd2c89": {
    "name": "Ancient Black Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 22,
    "hp": 367,
    "dice": "21d20",
    "attributes": {
      "strength": 27,
      "dexterity": 14,
      "constitution": 25,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 19
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 2,
      "constitution": 7,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 21,
    "size": "Gargantuan",
    "alignment": "chaotic evil"
  },
  "dc1b07db-ccd4-4851-bca0-9422c33d1e04": {
    "name": "Bronze Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 32,
    "dice": "5d8",
    "attributes": {
      "strength": 17,
      "dexterity": 10,
      "constitution": 15,
      "intelligence": 12,
      "wisdom": 11,
      "charisma": 15
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 1,
      "wisdom": 0,
      "charisma": 2
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "lawful good"
  },
  "b57f4fff-415a-4ac5-8dae-dd418cf48e8d": {
    "name": "Stone Golem",
    "type": "construct",
    "subtype": "",
    "ac": 17,
    "hp": 178,
    "dice": "17d10",
    "attributes": {
      "strength": 22,
      "dexterity": 9,
      "constitution": 20,
      "intelligence": 3,
      "wisdom": 11,
      "charisma": 1
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 10,
    "size": "Large",
    "alignment": "unaligned"
  },
  "43afb48c-41c1-42fe-8322-2d174a470eb6": {
    "name": "Lizardfolk",
    "type": "humanoid",
    "subtype": "lizardfolk",
    "ac": 15,
    "hp": 22,
    "dice": "4d8",
    "attributes": {
      "strength": 15,
      "dexterity": 10,
      "constitution": 13,
      "intelligence": 7,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "neutral"
  },
  "c2ede063-8a0f-4a2f-aefa-ecaa6e780d8f": {
    "name": "Roc",
    "type": "monstrosity",
    "subtype": "",
    "ac": 15,
    "hp": 248,
    "dice": "16d20",
    "attributes": {
      "strength": 28,
      "dexterity": 10,
      "constitution": 20,
      "intelligence": 3,
      "wisdom": 10,
      "charisma": 9
    },
    "modifiers": {
      "strength": 9,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 11,
    "size": "Gargantuan",
    "alignment": "unaligned"
  },
  "6a08677d-6bc7-44b7-8cb2-456c946c3f28": {
    "name": "Nalfeshnee",
    "type": "fiend",
    "subtype": "demon",
    "ac": 18,
    "hp": 184,
    "dice": "16d10",
    "attributes": {
      "strength": 21,
      "dexterity": 10,
      "constitution": 22,
      "intelligence": 19,
      "wisdom": 12,
      "charisma": 15
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 6,
      "intelligence": 4,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 13,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "f3f473d2-8895-47a8-923a-f34928cf1edc": {
    "name": "Steam Mephit",
    "type": "elemental",
    "subtype": "",
    "ac": 10,
    "hp": 21,
    "dice": "6d6",
    "attributes": {
      "strength": 5,
      "dexterity": 11,
      "constitution": 10,
      "intelligence": 11,
      "wisdom": 10,
      "charisma": 12
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 0.25,
    "size": "Small",
    "alignment": "neutral evil"
  },
  "69732a65-5fbb-465f-9b0b-c4d93a635978": {
    "name": "Hydra",
    "type": "monstrosity",
    "subtype": "",
    "ac": 15,
    "hp": 172,
    "dice": "15d12",
    "attributes": {
      "strength": 20,
      "dexterity": 12,
      "constitution": 20,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 7
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 1,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 8,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "0b52db2d-126a-464c-9d1b-ce9bdd915ae8": {
    "name": "Elk",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 13,
    "dice": "2d10",
    "attributes": {
      "strength": 16,
      "dexterity": 10,
      "constitution": 12,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 6
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Large",
    "alignment": "unaligned"
  },
  "cf72421c-fc53-4f8e-81e3-82d6bb7da9e3": {
    "name": "Rhinoceros",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 45,
    "dice": "6d10",
    "attributes": {
      "strength": 21,
      "dexterity": 8,
      "constitution": 15,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 6
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "c7158651-27e9-450a-922c-8196f4310fa2": {
    "name": "Giant Hyena",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 45,
    "dice": "6d10",
    "attributes": {
      "strength": 16,
      "dexterity": 14,
      "constitution": 14,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "unaligned"
  },
  "99b9f0f3-125f-4c1d-ab20-a5302c4f097f": {
    "name": "Phase Spider",
    "type": "monstrosity",
    "subtype": "",
    "ac": 13,
    "hp": 32,
    "dice": "5d10",
    "attributes": {
      "strength": 15,
      "dexterity": 15,
      "constitution": 12,
      "intelligence": 6,
      "wisdom": 10,
      "charisma": 6
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 3,
    "size": "Large",
    "alignment": "unaligned"
  },
  "2a024fb2-e7b7-43a5-9861-3d169e77f9f7": {
    "name": "Sprite",
    "type": "fey",
    "subtype": "",
    "ac": 15,
    "hp": 2,
    "dice": "1d4",
    "attributes": {
      "strength": 3,
      "dexterity": 18,
      "constitution": 10,
      "intelligence": 14,
      "wisdom": 13,
      "charisma": 11
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 4,
      "constitution": 0,
      "intelligence": 2,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Tiny",
    "alignment": "neutral good"
  },
  "25c5b736-0e07-46af-813b-21f4327fba45": {
    "name": "Darkmantle",
    "type": "monstrosity",
    "subtype": "",
    "ac": 11,
    "hp": 22,
    "dice": "5d6",
    "attributes": {
      "strength": 16,
      "dexterity": 12,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Small",
    "alignment": "unaligned"
  },
  "aaeac689-94bc-468f-a65e-15cdfe9571a3": {
    "name": "Giant Sea Horse",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 16,
    "dice": "3d10",
    "attributes": {
      "strength": 12,
      "dexterity": 15,
      "constitution": 11,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 5
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Large",
    "alignment": "unaligned"
  },
  "7bd5c3cf-2e08-4750-bbe7-173547bccbcc": {
    "name": "Giant Crocodile",
    "type": "beast",
    "subtype": "",
    "ac": 14,
    "hp": 85,
    "dice": "9d12",
    "attributes": {
      "strength": 21,
      "dexterity": 9,
      "constitution": 17,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 7
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "8ba82c16-97ef-4fe4-9035-f0ddb3d69986": {
    "name": "Cat",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 2,
    "dice": "1d4",
    "attributes": {
      "strength": 3,
      "dexterity": 15,
      "constitution": 10,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "88edae47-9bf5-48a0-9de2-980689912006": {
    "name": "Tyrannosaurus Rex",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 136,
    "dice": "13d12",
    "attributes": {
      "strength": 25,
      "dexterity": 10,
      "constitution": 19,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 9
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 8,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "7cc7a39b-a977-479e-bcb3-e9880dd963a3": {
    "name": "Worg",
    "type": "monstrosity",
    "subtype": "",
    "ac": 13,
    "hp": 26,
    "dice": "4d10",
    "attributes": {
      "strength": 16,
      "dexterity": 13,
      "constitution": 13,
      "intelligence": 7,
      "wisdom": 11,
      "charisma": 8
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Large",
    "alignment": "neutral evil"
  },
  "2c321c95-9f97-45f0-9020-8522b6ae6dee": {
    "name": "Awakened Shrub",
    "type": "plant",
    "subtype": "",
    "ac": 9,
    "hp": 10,
    "dice": "3d6",
    "attributes": {
      "strength": 3,
      "dexterity": 8,
      "constitution": 11,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 6
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Small",
    "alignment": "unaligned"
  },
  "03863569-01c6-4c92-8f77-0d79732cd1b2": {
    "name": "Scorpion",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 2,
      "dexterity": 11,
      "constitution": 8,
      "intelligence": 1,
      "wisdom": 8,
      "charisma": 2
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "466c62a3-b0b6-43be-94a2-51ec19107a1a": {
    "name": "Young Brass Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 110,
    "dice": "13d10",
    "attributes": {
      "strength": 19,
      "dexterity": 10,
      "constitution": 17,
      "intelligence": 12,
      "wisdom": 11,
      "charisma": 15
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 1,
      "wisdom": 0,
      "charisma": 2
    },
    "cr": 6,
    "size": "Large",
    "alignment": "chaotic good"
  },
  "d62504e1-5046-4aa7-8ca8-941cc222879a": {
    "name": "Giant Frog",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 18,
    "dice": "4d8",
    "attributes": {
      "strength": 12,
      "dexterity": 13,
      "constitution": 11,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "8fcebe92-4798-4e3f-a6ec-2f77bac68a47": {
    "name": "Giant Toad",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 39,
    "dice": "6d10",
    "attributes": {
      "strength": 15,
      "dexterity": 13,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "unaligned"
  },
  "d5c94de6-04be-4eed-b590-bce1bacfe859": {
    "name": "Archmage",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 12,
    "hp": 99,
    "dice": "18d8",
    "attributes": {
      "strength": 10,
      "dexterity": 14,
      "constitution": 12,
      "intelligence": 20,
      "wisdom": 15,
      "charisma": 16
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 5,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 12,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "fb419623-1ed8-404f-8443-602995a18b1e": {
    "name": "Scout",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 13,
    "hp": 16,
    "dice": "3d8",
    "attributes": {
      "strength": 11,
      "dexterity": 14,
      "constitution": 12,
      "intelligence": 11,
      "wisdom": 13,
      "charisma": 11
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "31f599a4-ac10-409e-bea6-2f3712dd419a": {
    "name": "Bandit",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 12,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 11,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 10
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "any non-lawful alignment"
  },
  "49d45c73-bd68-45ed-a717-686da42a8f6d": {
    "name": "Cave Bear",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 42,
    "dice": "5d10",
    "attributes": {
      "strength": 20,
      "dexterity": 10,
      "constitution": 16,
      "intelligence": 2,
      "wisdom": 13,
      "charisma": 7
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "6552ea41-78f5-4c76-b38b-d827f85afeed": {
    "name": "Wereboar",
    "type": "humanoid",
    "subtype": "human",
    "ac": 10,
    "hp": 78,
    "dice": "12d8",
    "attributes": {
      "strength": 17,
      "dexterity": 10,
      "constitution": 15,
      "intelligence": 10,
      "wisdom": 11,
      "charisma": 8
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 4,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "e3854061-b014-47e3-8068-4da5e7e2b0a5": {
    "name": "Giant Rat (Diseased)",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 7,
    "dice": "2d6",
    "attributes": {
      "strength": 7,
      "dexterity": 15,
      "constitution": 11,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 4
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Small",
    "alignment": "unaligned"
  },
  "ef122589-5898-4038-b300-e8647c370e36": {
    "name": "Night Hag",
    "type": "fiend",
    "subtype": "",
    "ac": 17,
    "hp": 112,
    "dice": "15d8",
    "attributes": {
      "strength": 18,
      "dexterity": 15,
      "constitution": 16,
      "intelligence": 16,
      "wisdom": 14,
      "charisma": 16
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 5,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "98c0a1a4-ac8c-4f92-ae96-b4224597654e": {
    "name": "Treant",
    "type": "plant",
    "subtype": "",
    "ac": 16,
    "hp": 138,
    "dice": "12d12",
    "attributes": {
      "strength": 23,
      "dexterity": 8,
      "constitution": 21,
      "intelligence": 12,
      "wisdom": 16,
      "charisma": 12
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 1,
      "wisdom": 3,
      "charisma": 1
    },
    "cr": 9,
    "size": "Huge",
    "alignment": "chaotic good"
  },
  "4994190e-46f6-4263-976b-6f8efced70dc": {
    "name": "Will-o'-Wisp",
    "type": "undead",
    "subtype": "",
    "ac": 19,
    "hp": 22,
    "dice": "9d4",
    "attributes": {
      "strength": 1,
      "dexterity": 28,
      "constitution": 10,
      "intelligence": 13,
      "wisdom": 14,
      "charisma": 11
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 9,
      "constitution": 0,
      "intelligence": 1,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 2,
    "size": "Tiny",
    "alignment": "chaotic evil"
  },
  "e9eb908e-76a4-4a0b-96d2-3f063abb84a5": {
    "name": "Young White Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 133,
    "dice": "14d10",
    "attributes": {
      "strength": 18,
      "dexterity": 10,
      "constitution": 18,
      "intelligence": 6,
      "wisdom": 11,
      "charisma": 12
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 6,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "e0f25916-b151-4d46-9c9d-526a979f20f1": {
    "name": "Barbed Devil",
    "type": "fiend",
    "subtype": "devil",
    "ac": 15,
    "hp": 110,
    "dice": "13d8",
    "attributes": {
      "strength": 16,
      "dexterity": 17,
      "constitution": 18,
      "intelligence": 12,
      "wisdom": 14,
      "charisma": 14
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 3,
      "constitution": 4,
      "intelligence": 1,
      "wisdom": 2,
      "charisma": 2
    },
    "cr": 5,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "b16ca472-eb0e-43ea-bbda-69ffa652b5c3": {
    "name": "Young Copper Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 119,
    "dice": "14d10",
    "attributes": {
      "strength": 19,
      "dexterity": 12,
      "constitution": 17,
      "intelligence": 16,
      "wisdom": 13,
      "charisma": 15
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 1,
      "constitution": 3,
      "intelligence": 3,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 7,
    "size": "Large",
    "alignment": "chaotic good"
  },
  "3ac8f569-59ca-4e16-9e0a-3f306aa856c2": {
    "name": "Purple Worm",
    "type": "monstrosity",
    "subtype": "",
    "ac": 18,
    "hp": 247,
    "dice": "15d20",
    "attributes": {
      "strength": 28,
      "dexterity": 7,
      "constitution": 22,
      "intelligence": 1,
      "wisdom": 8,
      "charisma": 4
    },
    "modifiers": {
      "strength": 9,
      "dexterity": 0,
      "constitution": 6,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 15,
    "size": "Gargantuan",
    "alignment": "unaligned"
  },
  "6b74e8d4-0fc9-40cc-bab8-ec986e2537d8": {
    "name": "Hawk",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 5,
      "dexterity": 16,
      "constitution": 8,
      "intelligence": 2,
      "wisdom": 14,
      "charisma": 6
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "e258f2ac-df2e-4203-818a-eec88c76b5a5": {
    "name": "Planetar",
    "type": "celestial",
    "subtype": "",
    "ac": 19,
    "hp": 200,
    "dice": "16d10",
    "attributes": {
      "strength": 24,
      "dexterity": 20,
      "constitution": 24,
      "intelligence": 19,
      "wisdom": 22,
      "charisma": 25
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 5,
      "constitution": 7,
      "intelligence": 4,
      "wisdom": 6,
      "charisma": 7
    },
    "cr": 16,
    "size": "Large",
    "alignment": "lawful good"
  },
  "28d2a474-6590-4bba-9515-3e9952510fe7": {
    "name": "Ogre",
    "type": "giant",
    "subtype": "",
    "ac": 11,
    "hp": 59,
    "dice": "7d10",
    "attributes": {
      "strength": 19,
      "dexterity": 8,
      "constitution": 16,
      "intelligence": 5,
      "wisdom": 7,
      "charisma": 7
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "362ee93b-b1fd-4fbe-bfa1-ca5cfa2c0229": {
    "name": "Elephant",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 76,
    "dice": "8d12",
    "attributes": {
      "strength": 22,
      "dexterity": 9,
      "constitution": 17,
      "intelligence": 3,
      "wisdom": 11,
      "charisma": 6
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 4,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "4eb3e45f-3a4d-4402-ab4b-dda27d9a9f04": {
    "name": "Ancient Copper Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 21,
    "hp": 350,
    "dice": "20d20",
    "attributes": {
      "strength": 27,
      "dexterity": 12,
      "constitution": 25,
      "intelligence": 20,
      "wisdom": 17,
      "charisma": 19
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 1,
      "constitution": 7,
      "intelligence": 5,
      "wisdom": 3,
      "charisma": 4
    },
    "cr": 21,
    "size": "Gargantuan",
    "alignment": "chaotic good"
  },
  "ed183db6-3fb4-45fb-8f10-bf4f4864b69e": {
    "name": "Raven",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 2,
      "dexterity": 14,
      "constitution": 8,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 6
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "6b46a021-2908-463a-a411-7a8aeba92196": {
    "name": "Swarm of Spiders",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 12,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 3,
      "dexterity": 13,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 7,
      "charisma": 1
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "3d814202-7234-402c-b6eb-deba64d92d21": {
    "name": "Swarm of Wasps",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 12,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 3,
      "dexterity": 13,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 7,
      "charisma": 1
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "d6b4de9a-64c2-4949-a6d6-e912ce7f1ea3": {
    "name": "Tiger",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 37,
    "dice": "5d10",
    "attributes": {
      "strength": 17,
      "dexterity": 15,
      "constitution": 14,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 8
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "unaligned"
  },
  "70ba8da9-2e43-4226-9206-a63e5e02923c": {
    "name": "Silver Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 45,
    "dice": "6d8",
    "attributes": {
      "strength": 19,
      "dexterity": 10,
      "constitution": 17,
      "intelligence": 12,
      "wisdom": 11,
      "charisma": 15
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 1,
      "wisdom": 0,
      "charisma": 2
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "lawful good"
  },
  "f98638a6-3d50-48cd-9bb2-cb1ba8a06f53": {
    "name": "Swarm of Rats",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 10,
    "hp": 24,
    "dice": "7d8",
    "attributes": {
      "strength": 9,
      "dexterity": 11,
      "constitution": 9,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "ac07ec4a-14dd-4a30-b5d2-c393119089a4": {
    "name": "Young Red Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 178,
    "dice": "17d10",
    "attributes": {
      "strength": 23,
      "dexterity": 10,
      "constitution": 21,
      "intelligence": 14,
      "wisdom": 11,
      "charisma": 19
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 2,
      "wisdom": 0,
      "charisma": 4
    },
    "cr": 10,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "ec01df59-0b7f-4384-b850-a461a83b4c31": {
    "name": "Vampire Spawn",
    "type": "undead",
    "subtype": "",
    "ac": 15,
    "hp": 82,
    "dice": "11d8",
    "attributes": {
      "strength": 16,
      "dexterity": 16,
      "constitution": 16,
      "intelligence": 11,
      "wisdom": 10,
      "charisma": 12
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 3,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 5,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "5e6917ad-a67e-4a72-8893-32e8d24390b4": {
    "name": "Giant Eagle",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 26,
    "dice": "4d10",
    "attributes": {
      "strength": 16,
      "dexterity": 17,
      "constitution": 13,
      "intelligence": 8,
      "wisdom": 14,
      "charisma": 10
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 3,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "neutral good"
  },
  "d7b5179d-6143-40b0-ad6d-9fd43a375a97": {
    "name": "Hippogriff",
    "type": "monstrosity",
    "subtype": "",
    "ac": 11,
    "hp": 19,
    "dice": "3d10",
    "attributes": {
      "strength": 17,
      "dexterity": 13,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 8
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "unaligned"
  },
  "9e338c62-8bbd-40d3-8028-fa91b3dbef80": {
    "name": "Black Bear",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 19,
    "dice": "3d8",
    "attributes": {
      "strength": 15,
      "dexterity": 10,
      "constitution": 14,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "bb0388b6-66ed-453c-807a-4f432589693c": {
    "name": "Owl",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 3,
      "dexterity": 13,
      "constitution": 8,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "7869ee28-1332-4d02-b227-72c92bf527d8": {
    "name": "Pit Fiend",
    "type": "fiend",
    "subtype": "devil",
    "ac": 19,
    "hp": 300,
    "dice": "24d10",
    "attributes": {
      "strength": 26,
      "dexterity": 14,
      "constitution": 24,
      "intelligence": 22,
      "wisdom": 18,
      "charisma": 24
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 2,
      "constitution": 7,
      "intelligence": 6,
      "wisdom": 4,
      "charisma": 7
    },
    "cr": 20,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "dbc0dcbf-1489-4046-b1a6-8e48f5371228": {
    "name": "Ettin",
    "type": "giant",
    "subtype": "",
    "ac": 12,
    "hp": 85,
    "dice": "10d10",
    "attributes": {
      "strength": 21,
      "dexterity": 8,
      "constitution": 17,
      "intelligence": 6,
      "wisdom": 10,
      "charisma": 8
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 4,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "cf00c913-3811-4325-a042-66898647b2c5": {
    "name": "Constrictor Snake",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 13,
    "dice": "2d10",
    "attributes": {
      "strength": 15,
      "dexterity": 14,
      "constitution": 12,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Large",
    "alignment": "unaligned"
  },
  "96b61168-9d14-4935-84dc-b32bc620b691": {
    "name": "Grimlock",
    "type": "humanoid",
    "subtype": "grimlock",
    "ac": 11,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 16,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 9,
      "wisdom": 8,
      "charisma": 6
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "7e9d807b-fc8d-4be4-a047-6a54aeb9a283": {
    "name": "Assassin",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 15,
    "hp": 78,
    "dice": "12d8",
    "attributes": {
      "strength": 11,
      "dexterity": 16,
      "constitution": 14,
      "intelligence": 13,
      "wisdom": 11,
      "charisma": 10
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 2,
      "intelligence": 1,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 8,
    "size": "Medium",
    "alignment": "any non-good alignment"
  },
  "7c83e675-6710-4552-9ad6-f5d9bd2255c3": {
    "name": "Lizard",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 2,
    "dice": "1d4",
    "attributes": {
      "strength": 2,
      "dexterity": 11,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 8,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "768b249c-1971-4cd0-8486-c9014617f3a1": {
    "name": "Vampire",
    "type": "undead",
    "subtype": "shapechanger",
    "ac": 16,
    "hp": 144,
    "dice": "17d8",
    "attributes": {
      "strength": 18,
      "dexterity": 18,
      "constitution": 18,
      "intelligence": 17,
      "wisdom": 15,
      "charisma": 18
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 4,
      "constitution": 4,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 13,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "fcd5e46d-58ec-499c-9447-38513f536427": {
    "name": "Panther",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 13,
    "dice": "3d8",
    "attributes": {
      "strength": 14,
      "dexterity": 15,
      "constitution": 10,
      "intelligence": 3,
      "wisdom": 14,
      "charisma": 7
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "558539eb-0724-4868-9047-724567cd7ecd": {
    "name": "Water Elemental",
    "type": "elemental",
    "subtype": "",
    "ac": 14,
    "hp": 114,
    "dice": "12d10",
    "attributes": {
      "strength": 18,
      "dexterity": 14,
      "constitution": 18,
      "intelligence": 5,
      "wisdom": 10,
      "charisma": 8
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "neutral"
  },
  "11493fa3-ae69-4692-8b80-122c5bbcd5be": {
    "name": "Rakshasa",
    "type": "fiend",
    "subtype": "",
    "ac": 16,
    "hp": 110,
    "dice": "13d8",
    "attributes": {
      "strength": 14,
      "dexterity": 17,
      "constitution": 18,
      "intelligence": 13,
      "wisdom": 16,
      "charisma": 20
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 3,
      "constitution": 4,
      "intelligence": 1,
      "wisdom": 3,
      "charisma": 5
    },
    "cr": 13,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "01623cae-d8b3-4a5c-8c88-ed4ba0547353": {
    "name": "Magma Mephit",
    "type": "elemental",
    "subtype": "",
    "ac": 11,
    "hp": 22,
    "dice": "5d6",
    "attributes": {
      "strength": 8,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 7,
      "wisdom": 10,
      "charisma": 10
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Small",
    "alignment": "neutral evil"
  },
  "dd24ea3b-b3ca-4c06-b31e-3a6da822bb5e": {
    "name": "Ankheg",
    "type": "monstrosity",
    "subtype": "",
    "ac": 14,
    "hp": 39,
    "dice": "6d10",
    "attributes": {
      "strength": 17,
      "dexterity": 11,
      "constitution": 13,
      "intelligence": 1,
      "wisdom": 13,
      "charisma": 6
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "6ad80d51-3b4a-4601-94d8-eba428b5ed57": {
    "name": "Acolyte",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 10,
    "hp": 9,
    "dice": "2d8",
    "attributes": {
      "strength": 10,
      "dexterity": 10,
      "constitution": 10,
      "intelligence": 10,
      "wisdom": 14,
      "charisma": 11
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "c289d8b6-7967-4720-a00c-af7b6819b3a3": {
    "name": "Adult Copper Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 184,
    "dice": "16d12",
    "attributes": {
      "strength": 23,
      "dexterity": 12,
      "constitution": 21,
      "intelligence": 18,
      "wisdom": 15,
      "charisma": 17
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 1,
      "constitution": 5,
      "intelligence": 4,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 14,
    "size": "Huge",
    "alignment": "chaotic good"
  },
  "10d6c2f9-84f1-4d83-a0ac-98a845cff227": {
    "name": "Satyr",
    "type": "fey",
    "subtype": "",
    "ac": 14,
    "hp": 31,
    "dice": "7d8",
    "attributes": {
      "strength": 12,
      "dexterity": 16,
      "constitution": 11,
      "intelligence": 12,
      "wisdom": 10,
      "charisma": 14
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 1,
      "wisdom": 0,
      "charisma": 2
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "chaotic neutral"
  },
  "b2220950-678c-4241-8e21-30860dfd665b": {
    "name": "Roper",
    "type": "monstrosity",
    "subtype": "",
    "ac": 20,
    "hp": 93,
    "dice": "11d10",
    "attributes": {
      "strength": 18,
      "dexterity": 8,
      "constitution": 17,
      "intelligence": 7,
      "wisdom": 16,
      "charisma": 6
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 3,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "neutral evil"
  },
  "7b105b67-b07c-49b1-bb82-99c84b2106a3": {
    "name": "Fire Giant",
    "type": "giant",
    "subtype": "",
    "ac": 18,
    "hp": 162,
    "dice": "13d12",
    "attributes": {
      "strength": 25,
      "dexterity": 9,
      "constitution": 23,
      "intelligence": 10,
      "wisdom": 14,
      "charisma": 13
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 0,
      "constitution": 6,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 1
    },
    "cr": 9,
    "size": "Huge",
    "alignment": "lawful evil"
  },
  "55d0dd94-01a4-4a29-8ff8-97eab952cb20": {
    "name": "Blink Dog",
    "type": "fey",
    "subtype": "",
    "ac": 13,
    "hp": 22,
    "dice": "4d8",
    "attributes": {
      "strength": 12,
      "dexterity": 17,
      "constitution": 12,
      "intelligence": 10,
      "wisdom": 13,
      "charisma": 11
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 3,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "lawful good"
  },
  "71409c35-b23d-423a-a58f-52187ff170a1": {
    "name": "Vulture",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 5,
    "dice": "1d8",
    "attributes": {
      "strength": 7,
      "dexterity": 10,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 4
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "4ff39dca-c4ec-45bf-8826-5335539fd298": {
    "name": "Weretiger",
    "type": "humanoid",
    "subtype": "human",
    "ac": 12,
    "hp": 120,
    "dice": "16d8",
    "attributes": {
      "strength": 17,
      "dexterity": 15,
      "constitution": 16,
      "intelligence": 10,
      "wisdom": 13,
      "charisma": 11
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 4,
    "size": "Medium",
    "alignment": "neutral"
  },
  "3ec9775a-7a96-4841-83cf-532f944cacbf": {
    "name": "Centaur",
    "type": "monstrosity",
    "subtype": "",
    "ac": 12,
    "hp": 45,
    "dice": "6d10",
    "attributes": {
      "strength": 18,
      "dexterity": 14,
      "constitution": 14,
      "intelligence": 9,
      "wisdom": 13,
      "charisma": 11
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "neutral good"
  },
  "4a6af690-0dd3-4c58-b5d4-06ddef151371": {
    "name": "Giant Shark",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 126,
    "dice": "11d12",
    "attributes": {
      "strength": 23,
      "dexterity": 11,
      "constitution": 21,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "d1e9fb74-144a-4182-949d-61aa754dd443": {
    "name": "Swarm of Insects",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 12,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 3,
      "dexterity": 13,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 7,
      "charisma": 1
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "5a9c40a6-9765-495d-a9b0-8059fef88eef": {
    "name": "Warhorse Skeleton",
    "type": "undead",
    "subtype": "",
    "ac": 13,
    "hp": 22,
    "dice": "3d10",
    "attributes": {
      "strength": 18,
      "dexterity": 12,
      "constitution": 15,
      "intelligence": 2,
      "wisdom": 8,
      "charisma": 5
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "5755e432-ff07-42a3-acc5-bbaeac34609f": {
    "name": "Giant Weasel",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 9,
    "dice": "2d8",
    "attributes": {
      "strength": 11,
      "dexterity": 16,
      "constitution": 10,
      "intelligence": 4,
      "wisdom": 12,
      "charisma": 5
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "c3e12eea-53f7-4aef-832a-25098168c230": {
    "name": "Giant Constrictor Snake",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 60,
    "dice": "8d12",
    "attributes": {
      "strength": 19,
      "dexterity": 14,
      "constitution": 12,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "d79e5af2-c298-4c6b-957d-a888d14b6826": {
    "name": "Ghoul",
    "type": "undead",
    "subtype": "",
    "ac": 12,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 13,
      "dexterity": 15,
      "constitution": 10,
      "intelligence": 7,
      "wisdom": 10,
      "charisma": 6
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "b25b4c0b-3915-4854-9deb-3cab1cd574c6": {
    "name": "Xorn",
    "type": "elemental",
    "subtype": "",
    "ac": 19,
    "hp": 73,
    "dice": "7d8",
    "attributes": {
      "strength": 17,
      "dexterity": 10,
      "constitution": 22,
      "intelligence": 11,
      "wisdom": 10,
      "charisma": 11
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 6,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Medium",
    "alignment": "neutral"
  },
  "f32d32b0-227c-41e4-bfe1-6bb473422078": {
    "name": "Saber-Toothed Tiger",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 52,
    "dice": "7d10",
    "attributes": {
      "strength": 18,
      "dexterity": 14,
      "constitution": 15,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 8
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "ddaf9285-bab4-46c0-95f9-9b70cae83e37": {
    "name": "Efreeti",
    "type": "elemental",
    "subtype": "",
    "ac": 17,
    "hp": 200,
    "dice": "16d10",
    "attributes": {
      "strength": 22,
      "dexterity": 12,
      "constitution": 24,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 16
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 1,
      "constitution": 7,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 11,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "4c86cf1c-2550-485e-8411-be94391d4e3b": {
    "name": "Ancient White Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 20,
    "hp": 333,
    "dice": "18d20",
    "attributes": {
      "strength": 26,
      "dexterity": 10,
      "constitution": 26,
      "intelligence": 10,
      "wisdom": 13,
      "charisma": 14
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 0,
      "constitution": 8,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 20,
    "size": "Gargantuan",
    "alignment": "chaotic evil"
  },
  "c445e06d-bab3-48e1-8df8-28134efab940": {
    "name": "Invisible Stalker",
    "type": "elemental",
    "subtype": "",
    "ac": 14,
    "hp": 104,
    "dice": "16d8",
    "attributes": {
      "strength": 16,
      "dexterity": 19,
      "constitution": 14,
      "intelligence": 10,
      "wisdom": 15,
      "charisma": 11
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 4,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 6,
    "size": "Medium",
    "alignment": "neutral"
  },
  "f66c418d-d46f-4be8-9235-eb0dd65f7160": {
    "name": "Quasit",
    "type": "fiend",
    "subtype": "demon",
    "ac": 13,
    "hp": 7,
    "dice": "3d4",
    "attributes": {
      "strength": 5,
      "dexterity": 17,
      "constitution": 10,
      "intelligence": 7,
      "wisdom": 10,
      "charisma": 10
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Tiny",
    "alignment": "chaotic evil"
  },
  "22be6048-9a40-4223-b09a-74c1463f9d47": {
    "name": "Noble",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 15,
    "hp": 9,
    "dice": "2d8",
    "attributes": {
      "strength": 11,
      "dexterity": 12,
      "constitution": 11,
      "intelligence": 12,
      "wisdom": 14,
      "charisma": 16
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 1,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "0425f02c-4c2f-44e1-af7d-7813c6ed80b0": {
    "name": "Ape",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 19,
    "dice": "3d8",
    "attributes": {
      "strength": 16,
      "dexterity": 14,
      "constitution": 14,
      "intelligence": 6,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "acdf7f0f-377e-4b0d-8cf0-c828946320cb": {
    "name": "Thug",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 11,
    "hp": 32,
    "dice": "5d8",
    "attributes": {
      "strength": 15,
      "dexterity": 11,
      "constitution": 14,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 11
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "any non-good alignment"
  },
  "896be100-d3f9-49c5-adec-0a452b038604": {
    "name": "Medusa",
    "type": "monstrosity",
    "subtype": "",
    "ac": 15,
    "hp": 127,
    "dice": "17d8",
    "attributes": {
      "strength": 10,
      "dexterity": 15,
      "constitution": 16,
      "intelligence": 12,
      "wisdom": 13,
      "charisma": 15
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 1,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 6,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "4e7907bc-63bd-41e0-87fc-39fcc6fcf29f": {
    "name": "Adult Black Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 19,
    "hp": 195,
    "dice": "17d12",
    "attributes": {
      "strength": 23,
      "dexterity": 14,
      "constitution": 21,
      "intelligence": 14,
      "wisdom": 13,
      "charisma": 17
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 2,
      "constitution": 5,
      "intelligence": 2,
      "wisdom": 1,
      "charisma": 3
    },
    "cr": 14,
    "size": "Huge",
    "alignment": "chaotic evil"
  },
  "aba98ab8-a4f6-40fb-9590-40a76ce299b0": {
    "name": "Poisonous Snake",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 2,
    "dice": "1d4",
    "attributes": {
      "strength": 2,
      "dexterity": 16,
      "constitution": 11,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "ec847494-5196-4ef7-b08d-3c18bf713e7c": {
    "name": "Veteran",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 17,
    "hp": 58,
    "dice": "9d8",
    "attributes": {
      "strength": 16,
      "dexterity": 13,
      "constitution": 14,
      "intelligence": 10,
      "wisdom": 11,
      "charisma": 10
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "56c73da8-b5fc-4523-8bab-d629b9113e6d": {
    "name": "Ochre Jelly",
    "type": "ooze",
    "subtype": "",
    "ac": 8,
    "hp": 45,
    "dice": "6d10",
    "attributes": {
      "strength": 15,
      "dexterity": 6,
      "constitution": 14,
      "intelligence": 2,
      "wisdom": 6,
      "charisma": 1
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "b10f8a99-b684-47eb-8f67-e51e8e7dca09": {
    "name": "Mimic",
    "type": "monstrosity",
    "subtype": "shapechanger",
    "ac": 12,
    "hp": 58,
    "dice": "9d8",
    "attributes": {
      "strength": 17,
      "dexterity": 12,
      "constitution": 15,
      "intelligence": 5,
      "wisdom": 13,
      "charisma": 8
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "neutral"
  },
  "21396fe1-5407-4144-a0bd-0ba41f4ddc15": {
    "name": "Kraken",
    "type": "monstrosity",
    "subtype": "titan",
    "ac": 18,
    "hp": 472,
    "dice": "27d20",
    "attributes": {
      "strength": 30,
      "dexterity": 11,
      "constitution": 25,
      "intelligence": 22,
      "wisdom": 18,
      "charisma": 20
    },
    "modifiers": {
      "strength": 10,
      "dexterity": 0,
      "constitution": 7,
      "intelligence": 6,
      "wisdom": 4,
      "charisma": 5
    },
    "cr": 23,
    "size": "Gargantuan",
    "alignment": "chaotic evil"
  },
  "d4272c01-df10-4b65-915a-91f63fa912e7": {
    "name": "Ancient Silver Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 22,
    "hp": 487,
    "dice": "25d20",
    "attributes": {
      "strength": 30,
      "dexterity": 10,
      "constitution": 29,
      "intelligence": 18,
      "wisdom": 15,
      "charisma": 23
    },
    "modifiers": {
      "strength": 10,
      "dexterity": 0,
      "constitution": 9,
      "intelligence": 4,
      "wisdom": 2,
      "charisma": 6
    },
    "cr": 23,
    "size": "Gargantuan",
    "alignment": "lawful good"
  },
  "02f22c96-d14d-4d87-8200-2e0a23392091": {
    "name": "Tarrasque",
    "type": "monstrosity",
    "subtype": "titan",
    "ac": 25,
    "hp": 676,
    "dice": "33d20",
    "attributes": {
      "strength": 30,
      "dexterity": 11,
      "constitution": 30,
      "intelligence": 3,
      "wisdom": 11,
      "charisma": 11
    },
    "modifiers": {
      "strength": 10,
      "dexterity": 0,
      "constitution": 10,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 30,
    "size": "Gargantuan",
    "alignment": "unaligned"
  },
  "607dc635-9fc7-4576-af29-8e0ea3f60442": {
    "name": "Adult Brass Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 172,
    "dice": "15d12",
    "attributes": {
      "strength": 23,
      "dexterity": 10,
      "constitution": 21,
      "intelligence": 14,
      "wisdom": 13,
      "charisma": 17
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 2,
      "wisdom": 1,
      "charisma": 3
    },
    "cr": 13,
    "size": "Huge",
    "alignment": "chaotic good"
  },
  "9460c423-2045-43e8-ba3a-72a8e9531ac7": {
    "name": "Ogre Zombie",
    "type": "undead",
    "subtype": "",
    "ac": 8,
    "hp": 85,
    "dice": "9d10",
    "attributes": {
      "strength": 19,
      "dexterity": 6,
      "constitution": 18,
      "intelligence": 3,
      "wisdom": 6,
      "charisma": 5
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "neutral evil"
  },
  "f3c72747-df80-4685-8e30-0296fc409970": {
    "name": "Cultist",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 12,
    "hp": 9,
    "dice": "2d8",
    "attributes": {
      "strength": 11,
      "dexterity": 12,
      "constitution": 10,
      "intelligence": 10,
      "wisdom": 11,
      "charisma": 10
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "any non-good alignment"
  },
  "90342601-1b6e-4a5b-88df-ad95f7cef961": {
    "name": "Ancient Green Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 21,
    "hp": 385,
    "dice": "22d20",
    "attributes": {
      "strength": 27,
      "dexterity": 12,
      "constitution": 25,
      "intelligence": 20,
      "wisdom": 17,
      "charisma": 19
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 1,
      "constitution": 7,
      "intelligence": 5,
      "wisdom": 3,
      "charisma": 4
    },
    "cr": 22,
    "size": "Gargantuan",
    "alignment": "lawful evil"
  },
  "e07f7728-d3cf-4fd5-9e9e-d267e97049fa": {
    "name": "Drow",
    "type": "humanoid",
    "subtype": "elf",
    "ac": 15,
    "hp": 13,
    "dice": "3d8",
    "attributes": {
      "strength": 10,
      "dexterity": 14,
      "constitution": 10,
      "intelligence": 11,
      "wisdom": 11,
      "charisma": 12
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "3095b95b-80b9-42c0-b70f-76fbd78bdad6": {
    "name": "Knight",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 18,
    "hp": 52,
    "dice": "8d8",
    "attributes": {
      "strength": 16,
      "dexterity": 11,
      "constitution": 14,
      "intelligence": 11,
      "wisdom": 11,
      "charisma": 15
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 2
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "464d33e9-edea-4f1a-9d6b-be8112763de7": {
    "name": "Wight",
    "type": "undead",
    "subtype": "",
    "ac": 14,
    "hp": 45,
    "dice": "6d8",
    "attributes": {
      "strength": 15,
      "dexterity": 14,
      "constitution": 16,
      "intelligence": 10,
      "wisdom": 13,
      "charisma": 15
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "2bf4ada2-000c-4355-85a2-0e6b33484fe3": {
    "name": "Djinni",
    "type": "elemental",
    "subtype": "",
    "ac": 17,
    "hp": 161,
    "dice": "14d10",
    "attributes": {
      "strength": 21,
      "dexterity": 15,
      "constitution": 22,
      "intelligence": 15,
      "wisdom": 16,
      "charisma": 20
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 2,
      "constitution": 6,
      "intelligence": 2,
      "wisdom": 3,
      "charisma": 5
    },
    "cr": 11,
    "size": "Large",
    "alignment": "chaotic good"
  },
  "764986b9-596f-408f-a125-96af732b0759": {
    "name": "Dire Wolf",
    "type": "beast",
    "subtype": "",
    "ac": 14,
    "hp": 37,
    "dice": "5d10",
    "attributes": {
      "strength": 17,
      "dexterity": 15,
      "constitution": 15,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "unaligned"
  },
  "4fe93d66-2c38-4f31-8db3-184dcc22c8a7": {
    "name": "Crab",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 2,
    "dice": "1d4",
    "attributes": {
      "strength": 2,
      "dexterity": 11,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 8,
      "charisma": 2
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "efc618bc-5983-49d6-a186-cb3e06cb50cb": {
    "name": "Cloud Giant",
    "type": "giant",
    "subtype": "",
    "ac": 14,
    "hp": 200,
    "dice": "16d12",
    "attributes": {
      "strength": 27,
      "dexterity": 10,
      "constitution": 22,
      "intelligence": 12,
      "wisdom": 16,
      "charisma": 16
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 0,
      "constitution": 6,
      "intelligence": 1,
      "wisdom": 3,
      "charisma": 3
    },
    "cr": 9,
    "size": "Huge",
    "alignment": "neutral good (50%) or neutral evil (50%)"
  },
  "7980a1ab-ca7f-465f-91b2-f2f2d050dab3": {
    "name": "Green Hag",
    "type": "fey",
    "subtype": "",
    "ac": 17,
    "hp": 82,
    "dice": "11d8",
    "attributes": {
      "strength": 18,
      "dexterity": 12,
      "constitution": 16,
      "intelligence": 13,
      "wisdom": 14,
      "charisma": 14
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 1,
      "constitution": 3,
      "intelligence": 1,
      "wisdom": 2,
      "charisma": 2
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "3fa96fcb-fac4-4108-8314-358a41315363": {
    "name": "Giant Poisonous Snake",
    "type": "beast",
    "subtype": "",
    "ac": 14,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 10,
      "dexterity": 18,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 4,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "ecf177b5-2794-4e4b-9e0f-b7a27044b2c1": {
    "name": "Sea Horse",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 1,
      "dexterity": 12,
      "constitution": 8,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 2
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "8f2b1fad-5605-4cd0-b417-302637d3542b": {
    "name": "Erinyes",
    "type": "fiend",
    "subtype": "devil",
    "ac": 18,
    "hp": 153,
    "dice": "18d8",
    "attributes": {
      "strength": 18,
      "dexterity": 16,
      "constitution": 18,
      "intelligence": 14,
      "wisdom": 14,
      "charisma": 18
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 3,
      "constitution": 4,
      "intelligence": 2,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 12,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "6c85960d-94b8-4fd2-940a-0b4e786986f9": {
    "name": "Stone Giant",
    "type": "giant",
    "subtype": "",
    "ac": 17,
    "hp": 126,
    "dice": "11d12",
    "attributes": {
      "strength": 23,
      "dexterity": 15,
      "constitution": 20,
      "intelligence": 10,
      "wisdom": 12,
      "charisma": 9
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 2,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 7,
    "size": "Huge",
    "alignment": "neutral"
  },
  "c0a7fee0-80e2-4462-b3cb-2a1944d64a5a": {
    "name": "Rust Monster",
    "type": "monstrosity",
    "subtype": "",
    "ac": 14,
    "hp": 27,
    "dice": "5d8",
    "attributes": {
      "strength": 13,
      "dexterity": 12,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 13,
      "charisma": 6
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "9700b157-08be-4dd9-a5c8-97e02fe03a22": {
    "name": "Magmin",
    "type": "elemental",
    "subtype": "",
    "ac": 14,
    "hp": 9,
    "dice": "2d6",
    "attributes": {
      "strength": 7,
      "dexterity": 15,
      "constitution": 12,
      "intelligence": 8,
      "wisdom": 11,
      "charisma": 10
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Small",
    "alignment": "chaotic neutral"
  },
  "64aa7517-0048-4cbe-8303-1903fe8b3c33": {
    "name": "Hobgoblin",
    "type": "humanoid",
    "subtype": "goblinoid",
    "ac": 18,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 13,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 9
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "1f29ba22-c9ac-412d-a56a-ea12417f6bb0": {
    "name": "Gibbering Mouther",
    "type": "aberration",
    "subtype": "",
    "ac": 9,
    "hp": 67,
    "dice": "9d8",
    "attributes": {
      "strength": 10,
      "dexterity": 8,
      "constitution": 16,
      "intelligence": 3,
      "wisdom": 10,
      "charisma": 6
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "neutral"
  },
  "10237748-ba2b-49c0-8952-aabe83ff5b68": {
    "name": "Giant Wasp",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 13,
    "dice": "3d8",
    "attributes": {
      "strength": 10,
      "dexterity": 14,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "a0aebdca-0f24-4daf-8df4-30c328b21230": {
    "name": "Killer Whale",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 90,
    "dice": "12d12",
    "attributes": {
      "strength": 19,
      "dexterity": 10,
      "constitution": 13,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 3,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "ec335eb6-6df5-419a-84b4-ef925414c2f6": {
    "name": "Chimera",
    "type": "monstrosity",
    "subtype": "",
    "ac": 14,
    "hp": 114,
    "dice": "12d10",
    "attributes": {
      "strength": 19,
      "dexterity": 11,
      "constitution": 19,
      "intelligence": 3,
      "wisdom": 14,
      "charisma": 10
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 6,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "ceba3a97-4200-4b47-9722-1489435eb44d": {
    "name": "Manticore",
    "type": "monstrosity",
    "subtype": "",
    "ac": 14,
    "hp": 68,
    "dice": "8d10",
    "attributes": {
      "strength": 17,
      "dexterity": 16,
      "constitution": 17,
      "intelligence": 7,
      "wisdom": 12,
      "charisma": 8
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 3,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 3,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "330fbb37-36d0-4dc7-89f0-3f320a6b39db": {
    "name": "Spirit Naga",
    "type": "monstrosity",
    "subtype": "",
    "ac": 15,
    "hp": 75,
    "dice": "10d10",
    "attributes": {
      "strength": 18,
      "dexterity": 17,
      "constitution": 14,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 16
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 3,
      "constitution": 2,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 8,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "9f8adb58-ce00-456c-bed8-fc6b6c446a9c": {
    "name": "Weasel",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 3,
      "dexterity": 16,
      "constitution": 8,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "e03a9b98-708c-4a01-9018-173aa7eb39da": {
    "name": "Oni",
    "type": "giant",
    "subtype": "",
    "ac": 16,
    "hp": 110,
    "dice": "13d10",
    "attributes": {
      "strength": 19,
      "dexterity": 11,
      "constitution": 16,
      "intelligence": 14,
      "wisdom": 12,
      "charisma": 15
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 2,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 7,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "1d35073a-f259-4a5e-951f-afe398e135f7": {
    "name": "Duergar",
    "type": "humanoid",
    "subtype": "dwarf",
    "ac": 16,
    "hp": 26,
    "dice": "4d8",
    "attributes": {
      "strength": 14,
      "dexterity": 11,
      "constitution": 14,
      "intelligence": 11,
      "wisdom": 10,
      "charisma": 9
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "19f655db-b1c1-4ebe-9923-e4a78f80e4b3": {
    "name": "Stirge",
    "type": "beast",
    "subtype": "",
    "ac": 14,
    "hp": 2,
    "dice": "1d4",
    "attributes": {
      "strength": 4,
      "dexterity": 16,
      "constitution": 11,
      "intelligence": 2,
      "wisdom": 8,
      "charisma": 6
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "7612d6b0-ec14-4615-affe-dcbf9b194689": {
    "name": "Giant Owl",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 19,
    "dice": "3d10",
    "attributes": {
      "strength": 13,
      "dexterity": 15,
      "constitution": 12,
      "intelligence": 8,
      "wisdom": 13,
      "charisma": 10
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Large",
    "alignment": "neutral"
  },
  "91f79c62-1160-4489-8afd-c373f0821f48": {
    "name": "Red Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 75,
    "dice": "10d8",
    "attributes": {
      "strength": 19,
      "dexterity": 10,
      "constitution": 17,
      "intelligence": 12,
      "wisdom": 11,
      "charisma": 15
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 1,
      "wisdom": 0,
      "charisma": 2
    },
    "cr": 4,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "db0e4a3d-127a-4122-b382-bbfee29f69ae": {
    "name": "Bearded Devil",
    "type": "fiend",
    "subtype": "devil",
    "ac": 13,
    "hp": 52,
    "dice": "8d8",
    "attributes": {
      "strength": 16,
      "dexterity": 15,
      "constitution": 15,
      "intelligence": 9,
      "wisdom": 11,
      "charisma": 11
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "f45b26e4-a0d4-4ba7-a0bf-7360af415643": {
    "name": "Rat",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 2,
      "dexterity": 11,
      "constitution": 9,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 4
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "a56aa5b9-01e2-4599-bd6d-5bdb047c21a2": {
    "name": "Adult White Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 200,
    "dice": "16d12",
    "attributes": {
      "strength": 22,
      "dexterity": 10,
      "constitution": 22,
      "intelligence": 8,
      "wisdom": 12,
      "charisma": 12
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 6,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 1
    },
    "cr": 13,
    "size": "Huge",
    "alignment": "chaotic evil"
  },
  "f923ec0b-b719-4c5c-aa81-8068e1c4d6ae": {
    "name": "Sahuagin",
    "type": "humanoid",
    "subtype": "sahuagin",
    "ac": 12,
    "hp": 22,
    "dice": "4d8",
    "attributes": {
      "strength": 13,
      "dexterity": 11,
      "constitution": 12,
      "intelligence": 12,
      "wisdom": 13,
      "charisma": 9
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 1,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "05f4c60a-4add-4ce6-9b0f-687d824b6ae0": {
    "name": "Young Green Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 136,
    "dice": "16d10",
    "attributes": {
      "strength": 19,
      "dexterity": 12,
      "constitution": 17,
      "intelligence": 16,
      "wisdom": 13,
      "charisma": 15
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 1,
      "constitution": 3,
      "intelligence": 3,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 8,
    "size": "Large",
    "alignment": "lawful evil"
  },
  "43e31dd3-82a7-4a25-b32f-3b75a39ddc27": {
    "name": "Vrock",
    "type": "fiend",
    "subtype": "demon",
    "ac": 15,
    "hp": 104,
    "dice": "11d10",
    "attributes": {
      "strength": 17,
      "dexterity": 15,
      "constitution": 18,
      "intelligence": 8,
      "wisdom": 13,
      "charisma": 8
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 6,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "bc6da6b9-09ab-443c-a012-e887eb78592e": {
    "name": "Young Bronze Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 142,
    "dice": "15d10",
    "attributes": {
      "strength": 21,
      "dexterity": 10,
      "constitution": 19,
      "intelligence": 14,
      "wisdom": 13,
      "charisma": 17
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 2,
      "wisdom": 1,
      "charisma": 3
    },
    "cr": 8,
    "size": "Large",
    "alignment": "lawful good"
  },
  "7b356b3c-ded9-4c5c-a7f3-0383b4868104": {
    "name": "Sea Hag",
    "type": "fey",
    "subtype": "",
    "ac": 14,
    "hp": 52,
    "dice": "7d8",
    "attributes": {
      "strength": 16,
      "dexterity": 13,
      "constitution": 16,
      "intelligence": 12,
      "wisdom": 12,
      "charisma": 13
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 3,
      "intelligence": 1,
      "wisdom": 1,
      "charisma": 1
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "d478c997-a40f-4b81-9a18-2614c51c72ca": {
    "name": "Bat",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 1,
    "dice": "1d4",
    "attributes": {
      "strength": 2,
      "dexterity": 15,
      "constitution": 8,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 4
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Tiny",
    "alignment": "unaligned"
  },
  "115d8918-bb87-45e7-8e86-277d341fd973": {
    "name": "Adult Bronze Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 19,
    "hp": 212,
    "dice": "17d12",
    "attributes": {
      "strength": 25,
      "dexterity": 10,
      "constitution": 23,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 19
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 0,
      "constitution": 6,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 15,
    "size": "Huge",
    "alignment": "lawful good"
  },
  "65794523-04d9-4851-9632-2cda2493aaab": {
    "name": "Kobold",
    "type": "humanoid",
    "subtype": "kobold",
    "ac": 12,
    "hp": 5,
    "dice": "2d6",
    "attributes": {
      "strength": 7,
      "dexterity": 15,
      "constitution": 9,
      "intelligence": 8,
      "wisdom": 7,
      "charisma": 8
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Small",
    "alignment": "lawful evil"
  },
  "98551b09-bed4-4873-a2b6-ae8c0e5a7dfa": {
    "name": "Storm Giant",
    "type": "giant",
    "subtype": "",
    "ac": 16,
    "hp": 230,
    "dice": "20d12",
    "attributes": {
      "strength": 29,
      "dexterity": 14,
      "constitution": 20,
      "intelligence": 16,
      "wisdom": 18,
      "charisma": 18
    },
    "modifiers": {
      "strength": 9,
      "dexterity": 2,
      "constitution": 5,
      "intelligence": 3,
      "wisdom": 4,
      "charisma": 4
    },
    "cr": 13,
    "size": "Huge",
    "alignment": "chaotic good"
  },
  "8ca7d51b-0fbb-40b4-bc7b-7055d7bb56fc": {
    "name": "Mastiff",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 5,
    "dice": "1d8",
    "attributes": {
      "strength": 13,
      "dexterity": 14,
      "constitution": 12,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "140b35fc-dc32-4d75-9688-93c71c872f65": {
    "name": "Young Black Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 127,
    "dice": "15d10",
    "attributes": {
      "strength": 19,
      "dexterity": 14,
      "constitution": 17,
      "intelligence": 12,
      "wisdom": 11,
      "charisma": 15
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 1,
      "wisdom": 0,
      "charisma": 2
    },
    "cr": 7,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "23c54a86-f182-4f57-a9a9-eb25702763bc": {
    "name": "Giant Bat",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 22,
    "dice": "4d10",
    "attributes": {
      "strength": 15,
      "dexterity": 16,
      "constitution": 11,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 6
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Large",
    "alignment": "unaligned"
  },
  "3ffac7e5-aaaf-406c-bf6a-c806bc22d08b": {
    "name": "Ghast",
    "type": "undead",
    "subtype": "",
    "ac": 13,
    "hp": 36,
    "dice": "8d8",
    "attributes": {
      "strength": 16,
      "dexterity": 17,
      "constitution": 10,
      "intelligence": 11,
      "wisdom": 10,
      "charisma": 8
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "fde0bbfe-b6e6-4665-9713-ff3735608030": {
    "name": "Half-Red Dragon Veteran",
    "type": "humanoid",
    "subtype": "human",
    "ac": 18,
    "hp": 65,
    "dice": "10d8",
    "attributes": {
      "strength": 16,
      "dexterity": 13,
      "constitution": 14,
      "intelligence": 10,
      "wisdom": 11,
      "charisma": 10
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "d84ada3d-816c-47d3-8db8-17b441736e99": {
    "name": "Giant Elk",
    "type": "beast",
    "subtype": "",
    "ac": 15,
    "hp": 42,
    "dice": "5d12",
    "attributes": {
      "strength": 19,
      "dexterity": 16,
      "constitution": 14,
      "intelligence": 7,
      "wisdom": 14,
      "charisma": 10
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 3,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 2,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "64eb2bc1-0580-44d9-a205-f5e10b13477c": {
    "name": "Lemure",
    "type": "fiend",
    "subtype": "devil",
    "ac": 7,
    "hp": 13,
    "dice": "3d8",
    "attributes": {
      "strength": 10,
      "dexterity": 5,
      "constitution": 11,
      "intelligence": 1,
      "wisdom": 11,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "5551bf13-1b19-4667-a903-55a59e6f04a6": {
    "name": "Awakened Tree",
    "type": "plant",
    "subtype": "",
    "ac": 13,
    "hp": 59,
    "dice": "7d12",
    "attributes": {
      "strength": 19,
      "dexterity": 6,
      "constitution": 15,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 7
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "304c1a57-b2c8-47a4-b2e7-712eeca83916": {
    "name": "Chain Devil",
    "type": "fiend",
    "subtype": "devil",
    "ac": 16,
    "hp": 85,
    "dice": "10d8",
    "attributes": {
      "strength": 18,
      "dexterity": 15,
      "constitution": 18,
      "intelligence": 11,
      "wisdom": 12,
      "charisma": 14
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 11,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "f19afb52-63f9-4168-8b18-ea76b931b0a3": {
    "name": "Merrow",
    "type": "monstrosity",
    "subtype": "",
    "ac": 13,
    "hp": 45,
    "dice": "6d10",
    "attributes": {
      "strength": 18,
      "dexterity": 10,
      "constitution": 15,
      "intelligence": 8,
      "wisdom": 10,
      "charisma": 9
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "f39d8805-9500-4e86-9417-1a3a7563583b": {
    "name": "Eagle",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 3,
    "dice": "1d6",
    "attributes": {
      "strength": 6,
      "dexterity": 15,
      "constitution": 10,
      "intelligence": 2,
      "wisdom": 14,
      "charisma": 7
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 0,
    "size": "Small",
    "alignment": "unaligned"
  },
  "4290ecce-b3b8-4ec6-bb84-daf76b6cdc97": {
    "name": "Mummy",
    "type": "undead",
    "subtype": "",
    "ac": 11,
    "hp": 58,
    "dice": "9d8",
    "attributes": {
      "strength": 16,
      "dexterity": 8,
      "constitution": 15,
      "intelligence": 6,
      "wisdom": 10,
      "charisma": 12
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "8a1b0977-8133-48f5-aefd-22eb2c1133a2": {
    "name": "Lich",
    "type": "undead",
    "subtype": "",
    "ac": 17,
    "hp": 135,
    "dice": "18d8",
    "attributes": {
      "strength": 11,
      "dexterity": 16,
      "constitution": 16,
      "intelligence": 20,
      "wisdom": 14,
      "charisma": 16
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 3,
      "intelligence": 5,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 21,
    "size": "Medium",
    "alignment": "any evil alignment"
  },
  "ee18d93f-7a30-461e-9995-c9a447381019": {
    "name": "Brown Bear",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 34,
    "dice": "4d10",
    "attributes": {
      "strength": 19,
      "dexterity": 10,
      "constitution": 16,
      "intelligence": 2,
      "wisdom": 13,
      "charisma": 7
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "unaligned"
  },
  "4aa7d2fd-b8a5-4ca9-9e9c-637c0d91d850": {
    "name": "Ancient Gold Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 22,
    "hp": 546,
    "dice": "28d20",
    "attributes": {
      "strength": 30,
      "dexterity": 14,
      "constitution": 29,
      "intelligence": 18,
      "wisdom": 17,
      "charisma": 28
    },
    "modifiers": {
      "strength": 10,
      "dexterity": 2,
      "constitution": 9,
      "intelligence": 4,
      "wisdom": 3,
      "charisma": 9
    },
    "cr": 24,
    "size": "Gargantuan",
    "alignment": "lawful good"
  },
  "c6e6c1d9-03de-4159-bd38-fac82edc4c7c": {
    "name": "Swarm of Poisonous Snakes",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 14,
    "hp": 36,
    "dice": "8d8",
    "attributes": {
      "strength": 8,
      "dexterity": 18,
      "constitution": 11,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 4,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "ee49dc2f-937e-4825-9778-ec1bff6302d8": {
    "name": "Hell Hound",
    "type": "fiend",
    "subtype": "",
    "ac": 15,
    "hp": 45,
    "dice": "7d8",
    "attributes": {
      "strength": 17,
      "dexterity": 12,
      "constitution": 14,
      "intelligence": 6,
      "wisdom": 13,
      "charisma": 6
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "9033d347-11d1-45af-862b-ada12c7d174c": {
    "name": "Azer",
    "type": "elemental",
    "subtype": "",
    "ac": 17,
    "hp": 39,
    "dice": "6d8",
    "attributes": {
      "strength": 17,
      "dexterity": 12,
      "constitution": 15,
      "intelligence": 12,
      "wisdom": 13,
      "charisma": 10
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 1,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "lawful neutral"
  },
  "9e1f7f32-6c10-435a-8a34-ccb4edd712f7": {
    "name": "Werewolf",
    "type": "humanoid",
    "subtype": "human",
    "ac": 11,
    "hp": 58,
    "dice": "9d8",
    "attributes": {
      "strength": 15,
      "dexterity": 13,
      "constitution": 14,
      "intelligence": 10,
      "wisdom": 11,
      "charisma": 10
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 3,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "3d395c7f-312c-4c44-a971-db79996d8bcc": {
    "name": "Gnoll",
    "type": "humanoid",
    "subtype": "gnoll",
    "ac": 15,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 14,
      "dexterity": 12,
      "constitution": 11,
      "intelligence": 6,
      "wisdom": 10,
      "charisma": 7
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "0431109b-2fa1-4c35-ba8a-8befaa56e32c": {
    "name": "Lion",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 26,
    "dice": "4d10",
    "attributes": {
      "strength": 17,
      "dexterity": 15,
      "constitution": 13,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 8
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 1,
    "size": "Large",
    "alignment": "unaligned"
  },
  "97a7e5a3-2b3e-4b89-9343-7e105fa7e7f1": {
    "name": "Skeleton",
    "type": "undead",
    "subtype": "",
    "ac": 13,
    "hp": 13,
    "dice": "2d8",
    "attributes": {
      "strength": 10,
      "dexterity": 14,
      "constitution": 15,
      "intelligence": 6,
      "wisdom": 8,
      "charisma": 5
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "29845781-d6a9-43d7-bafd-32a62abf7dec": {
    "name": "Boar",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 13,
      "dexterity": 11,
      "constitution": 12,
      "intelligence": 2,
      "wisdom": 9,
      "charisma": 5
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "71723840-5cd5-4cbe-bf83-c48dd08f7e9e": {
    "name": "Troll",
    "type": "giant",
    "subtype": "",
    "ac": 15,
    "hp": 84,
    "dice": "8d10",
    "attributes": {
      "strength": 18,
      "dexterity": 13,
      "constitution": 20,
      "intelligence": 7,
      "wisdom": 9,
      "charisma": 7
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 1,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "5704b467-d8b1-46b1-bd9b-1367af1510d8": {
    "name": "Ettercap",
    "type": "monstrosity",
    "subtype": "",
    "ac": 13,
    "hp": 44,
    "dice": "8d8",
    "attributes": {
      "strength": 14,
      "dexterity": 15,
      "constitution": 13,
      "intelligence": 7,
      "wisdom": 12,
      "charisma": 8
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "neutral evil"
  },
  "423574be-7bf4-408c-b881-78cf51885dc0": {
    "name": "Wolf",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 12,
      "dexterity": 15,
      "constitution": 12,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 6
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "a7af551d-153b-4ef1-8975-d2a3c65b9925": {
    "name": "Giant Badger",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 13,
    "dice": "2d8",
    "attributes": {
      "strength": 13,
      "dexterity": 10,
      "constitution": 15,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 5
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 0,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "a2812aaa-853c-4823-a41a-47d959d2cc47": {
    "name": "Owlbear",
    "type": "monstrosity",
    "subtype": "",
    "ac": 13,
    "hp": 59,
    "dice": "7d10",
    "attributes": {
      "strength": 20,
      "dexterity": 12,
      "constitution": 17,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 1,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 3,
    "size": "Large",
    "alignment": "unaligned"
  },
  "2ec32883-449f-4e5f-a9de-a0feee281833": {
    "name": "Giant Wolf Spider",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 12,
      "dexterity": 16,
      "constitution": 13,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 4
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 3,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "ddcda042-4854-484d-93e5-c0fe47bbdc91": {
    "name": "Baboon",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 3,
    "dice": "1d6",
    "attributes": {
      "strength": 8,
      "dexterity": 14,
      "constitution": 11,
      "intelligence": 4,
      "wisdom": 12,
      "charisma": 6
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Small",
    "alignment": "unaligned"
  },
  "8bb1eaf7-f621-406a-b851-0fcce2a1cbda": {
    "name": "Shrieker",
    "type": "plant",
    "subtype": "",
    "ac": 5,
    "hp": 13,
    "dice": "3d8",
    "attributes": {
      "strength": 1,
      "dexterity": 1,
      "constitution": 10,
      "intelligence": 1,
      "wisdom": 3,
      "charisma": 1
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "a9909961-69d4-4516-acba-219e122fc69f": {
    "name": "Wyvern",
    "type": "dragon",
    "subtype": "",
    "ac": 13,
    "hp": 110,
    "dice": "13d10",
    "attributes": {
      "strength": 19,
      "dexterity": 10,
      "constitution": 16,
      "intelligence": 5,
      "wisdom": 12,
      "charisma": 6
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 6,
    "size": "Large",
    "alignment": "unaligned"
  },
  "24823b59-a80f-4adb-8062-8ac9a1478f14": {
    "name": "Octopus",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 3,
    "dice": "1d6",
    "attributes": {
      "strength": 4,
      "dexterity": 15,
      "constitution": 11,
      "intelligence": 3,
      "wisdom": 10,
      "charisma": 4
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Small",
    "alignment": "unaligned"
  },
  "aad9e645-2c3f-44ff-9a03-2d7959e8bf0e": {
    "name": "Riding Horse",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 13,
    "dice": "2d10",
    "attributes": {
      "strength": 16,
      "dexterity": 10,
      "constitution": 12,
      "intelligence": 2,
      "wisdom": 11,
      "charisma": 7
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Large",
    "alignment": "unaligned"
  },
  "23049229-4b72-41dc-918b-9a60cfa0c478": {
    "name": "Lamia",
    "type": "monstrosity",
    "subtype": "",
    "ac": 13,
    "hp": 97,
    "dice": "13d10",
    "attributes": {
      "strength": 16,
      "dexterity": 13,
      "constitution": 15,
      "intelligence": 14,
      "wisdom": 15,
      "charisma": 16
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 2,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 4,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "d2c91b21-7ac0-46c9-9a9c-cbcda4211fb4": {
    "name": "Shambling Mound",
    "type": "plant",
    "subtype": "",
    "ac": 15,
    "hp": 136,
    "dice": "16d10",
    "attributes": {
      "strength": 18,
      "dexterity": 8,
      "constitution": 16,
      "intelligence": 5,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Large",
    "alignment": "unaligned"
  },
  "3782ea23-0867-4f98-90d5-fb9833462468": {
    "name": "Wererat",
    "type": "humanoid",
    "subtype": "human",
    "ac": 12,
    "hp": 33,
    "dice": "6d8",
    "attributes": {
      "strength": 10,
      "dexterity": 15,
      "constitution": 12,
      "intelligence": 11,
      "wisdom": 10,
      "charisma": 8
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "lawful evil"
  },
  "cc46585c-738d-4318-ab74-18c606fc0afa": {
    "name": "Adult Blue Dracolich",
    "type": "undead",
    "subtype": "",
    "ac": 19,
    "hp": 225,
    "dice": "18d12",
    "attributes": {
      "strength": 25,
      "dexterity": 10,
      "constitution": 23,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 19
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 0,
      "constitution": 6,
      "intelligence": 3,
      "wisdom": 2,
      "charisma": 4
    },
    "cr": 17,
    "size": "Huge",
    "alignment": "lawful evil"
  },
  "370fd026-7aa6-4c66-ac2b-db709884c99e": {
    "name": "Specter",
    "type": "undead",
    "subtype": "",
    "ac": 12,
    "hp": 22,
    "dice": "5d8",
    "attributes": {
      "strength": 1,
      "dexterity": 14,
      "constitution": 11,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 11
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "69d10c72-3a8d-4196-a59d-5b94b1ea309f": {
    "name": "Giant Crab",
    "type": "beast",
    "subtype": "",
    "ac": 15,
    "hp": 13,
    "dice": "3d8",
    "attributes": {
      "strength": 13,
      "dexterity": 15,
      "constitution": 11,
      "intelligence": 1,
      "wisdom": 9,
      "charisma": 3
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "d6d9df92-364a-4159-bf70-5a5380dd36ab": {
    "name": "Black Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 17,
    "hp": 33,
    "dice": "6d8",
    "attributes": {
      "strength": 15,
      "dexterity": 14,
      "constitution": 13,
      "intelligence": 10,
      "wisdom": 11,
      "charisma": 13
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "35efd694-e226-475e-9b96-c08ad2567ccb": {
    "name": "Harpy",
    "type": "monstrosity",
    "subtype": "",
    "ac": 11,
    "hp": 38,
    "dice": "7d8",
    "attributes": {
      "strength": 12,
      "dexterity": 13,
      "constitution": 12,
      "intelligence": 7,
      "wisdom": 10,
      "charisma": 13
    },
    "modifiers": {
      "strength": 1,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "78bbaffa-caa2-4e33-b2ab-eb823d4cc556": {
    "name": "Pony",
    "type": "beast",
    "subtype": "",
    "ac": 10,
    "hp": 11,
    "dice": "2d8",
    "attributes": {
      "strength": 15,
      "dexterity": 10,
      "constitution": 13,
      "intelligence": 2,
      "wisdom": 11,
      "charisma": 7
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "79c5c694-67d3-4a57-873d-f066eeadf3e6": {
    "name": "Polar Bear",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 42,
    "dice": "5d10",
    "attributes": {
      "strength": 20,
      "dexterity": 10,
      "constitution": 16,
      "intelligence": 2,
      "wisdom": 13,
      "charisma": 7
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "94665ad2-cc0f-41c0-8be3-25ea3e27abc7": {
    "name": "Berserker",
    "type": "humanoid",
    "subtype": "any race",
    "ac": 13,
    "hp": 67,
    "dice": "9d8",
    "attributes": {
      "strength": 16,
      "dexterity": 12,
      "constitution": 17,
      "intelligence": 9,
      "wisdom": 11,
      "charisma": 9
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 2,
    "size": "Medium",
    "alignment": "any chaotic alignment"
  },
  "5a239547-1604-45d8-92dd-78241722496e": {
    "name": "Solar",
    "type": "celestial",
    "subtype": "",
    "ac": 21,
    "hp": 243,
    "dice": "18d10",
    "attributes": {
      "strength": 26,
      "dexterity": 22,
      "constitution": 26,
      "intelligence": 25,
      "wisdom": 25,
      "charisma": 30
    },
    "modifiers": {
      "strength": 8,
      "dexterity": 6,
      "constitution": 8,
      "intelligence": 7,
      "wisdom": 7,
      "charisma": 10
    },
    "cr": 21,
    "size": "Large",
    "alignment": "lawful good"
  },
  "5a606f75-134a-4159-a765-f1d586da16b2": {
    "name": "Dretch",
    "type": "fiend",
    "subtype": "demon",
    "ac": 11,
    "hp": 18,
    "dice": "4d6",
    "attributes": {
      "strength": 11,
      "dexterity": 11,
      "constitution": 12,
      "intelligence": 5,
      "wisdom": 8,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Small",
    "alignment": "chaotic evil"
  },
  "31eafd9b-f0a4-4ea7-be79-42833e6ac5b1": {
    "name": "Copper Dragon Wyrmling",
    "type": "dragon",
    "subtype": "",
    "ac": 16,
    "hp": 22,
    "dice": "4d8",
    "attributes": {
      "strength": 15,
      "dexterity": 12,
      "constitution": 13,
      "intelligence": 14,
      "wisdom": 11,
      "charisma": 13
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 2,
      "wisdom": 0,
      "charisma": 1
    },
    "cr": 1,
    "size": "Medium",
    "alignment": "chaotic good"
  },
  "151dc77e-6dbb-458d-939e-1f44cb2cce48": {
    "name": "Shield Guardian",
    "type": "construct",
    "subtype": "",
    "ac": 17,
    "hp": 142,
    "dice": "15d10",
    "attributes": {
      "strength": 18,
      "dexterity": 8,
      "constitution": 18,
      "intelligence": 7,
      "wisdom": 10,
      "charisma": 3
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 7,
    "size": "Large",
    "alignment": "unaligned"
  },
  "d7b8759e-51eb-401c-9398-d2844acea633": {
    "name": "Flesh Golem",
    "type": "construct",
    "subtype": "",
    "ac": 9,
    "hp": 93,
    "dice": "11d8",
    "attributes": {
      "strength": 19,
      "dexterity": 9,
      "constitution": 18,
      "intelligence": 6,
      "wisdom": 10,
      "charisma": 5
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 0,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Medium",
    "alignment": "neutral"
  },
  "e11b41d0-e02f-4425-a5b6-db1c7b256003": {
    "name": "Deep Gnome (Svirfneblin)",
    "type": "humanoid",
    "subtype": "gnome",
    "ac": 15,
    "hp": 16,
    "dice": "3d6",
    "attributes": {
      "strength": 15,
      "dexterity": 14,
      "constitution": 14,
      "intelligence": 12,
      "wisdom": 10,
      "charisma": 9
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 2,
      "constitution": 2,
      "intelligence": 1,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Small",
    "alignment": "neutral good"
  },
  "628cbde2-6220-424b-b1b5-cb61bafb4611": {
    "name": "Couatl",
    "type": "celestial",
    "subtype": "",
    "ac": 19,
    "hp": 97,
    "dice": "13d8",
    "attributes": {
      "strength": 16,
      "dexterity": 20,
      "constitution": 17,
      "intelligence": 18,
      "wisdom": 20,
      "charisma": 18
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 5,
      "constitution": 3,
      "intelligence": 4,
      "wisdom": 5,
      "charisma": 4
    },
    "cr": 4,
    "size": "Medium",
    "alignment": "lawful good"
  },
  "eeaa805e-ee0e-4956-ac12-c2e360ccc256": {
    "name": "Young Silver Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 168,
    "dice": "16d10",
    "attributes": {
      "strength": 23,
      "dexterity": 10,
      "constitution": 21,
      "intelligence": 14,
      "wisdom": 11,
      "charisma": 19
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 2,
      "wisdom": 0,
      "charisma": 4
    },
    "cr": 9,
    "size": "Large",
    "alignment": "lawful good"
  },
  "378e3f62-5797-4d39-9cac-c0ecb6f03fa8": {
    "name": "Iron Golem",
    "type": "construct",
    "subtype": "",
    "ac": 20,
    "hp": 210,
    "dice": "20d10",
    "attributes": {
      "strength": 24,
      "dexterity": 9,
      "constitution": 20,
      "intelligence": 3,
      "wisdom": 11,
      "charisma": 1
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 16,
    "size": "Large",
    "alignment": "unaligned"
  },
  "f5a94da7-7398-449d-b093-690e46bed340": {
    "name": "Mammoth",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 126,
    "dice": "11d12",
    "attributes": {
      "strength": 24,
      "dexterity": 9,
      "constitution": 21,
      "intelligence": 3,
      "wisdom": 11,
      "charisma": 6
    },
    "modifiers": {
      "strength": 7,
      "dexterity": 0,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 6,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "2ffd0f6c-7803-4dc1-be13-c14adb9ec067": {
    "name": "Reef Shark",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 22,
    "dice": "4d8",
    "attributes": {
      "strength": 14,
      "dexterity": 13,
      "constitution": 13,
      "intelligence": 1,
      "wisdom": 10,
      "charisma": 4
    },
    "modifiers": {
      "strength": 2,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "e3552184-ab7d-4bf2-a65a-59976196b1ef": {
    "name": "Hezrou",
    "type": "fiend",
    "subtype": "demon",
    "ac": 16,
    "hp": 136,
    "dice": "13d10",
    "attributes": {
      "strength": 19,
      "dexterity": 17,
      "constitution": 20,
      "intelligence": 5,
      "wisdom": 12,
      "charisma": 13
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 3,
      "constitution": 5,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 1
    },
    "cr": 8,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "a22962fd-e505-42b5-b378-bb2a6979402d": {
    "name": "Triceratops",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 95,
    "dice": "10d12",
    "attributes": {
      "strength": 22,
      "dexterity": 9,
      "constitution": 17,
      "intelligence": 2,
      "wisdom": 11,
      "charisma": 5
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 0,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 5,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "75385e02-9157-4e6f-8aa4-d81be55e8d5b": {
    "name": "Griffon",
    "type": "monstrosity",
    "subtype": "",
    "ac": 12,
    "hp": 59,
    "dice": "7d10",
    "attributes": {
      "strength": 18,
      "dexterity": 15,
      "constitution": 16,
      "intelligence": 2,
      "wisdom": 13,
      "charisma": 8
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 2,
    "size": "Large",
    "alignment": "unaligned"
  },
  "cbcc9fe3-9bdd-4551-a1a2-efdf2f8a2c66": {
    "name": "Ghost",
    "type": "undead",
    "subtype": "",
    "ac": 11,
    "hp": 45,
    "dice": "10d8",
    "attributes": {
      "strength": 7,
      "dexterity": 13,
      "constitution": 10,
      "intelligence": 10,
      "wisdom": 12,
      "charisma": 17
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 3
    },
    "cr": 4,
    "size": "Medium",
    "alignment": "any alignment"
  },
  "67740c69-54b1-4160-bb3f-a6c2827a9def": {
    "name": "Swarm of Ravens",
    "type": "swarm of Tiny beasts",
    "subtype": "",
    "ac": 12,
    "hp": 24,
    "dice": "7d8",
    "attributes": {
      "strength": 6,
      "dexterity": 14,
      "constitution": 8,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 6
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.25,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "80783cdc-2726-47bd-a908-4ed6c6f1d1f2": {
    "name": "Winter Wolf",
    "type": "monstrosity",
    "subtype": "",
    "ac": 13,
    "hp": 75,
    "dice": "10d10",
    "attributes": {
      "strength": 18,
      "dexterity": 13,
      "constitution": 14,
      "intelligence": 7,
      "wisdom": 12,
      "charisma": 8
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 1,
      "constitution": 2,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 3,
    "size": "Large",
    "alignment": "neutral evil"
  },
  "48e3e6ff-23f6-46bf-bb19-1b9be63825fa": {
    "name": "Hyena",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 5,
    "dice": "1d8",
    "attributes": {
      "strength": 11,
      "dexterity": 13,
      "constitution": 12,
      "intelligence": 2,
      "wisdom": 12,
      "charisma": 5
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 1,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "fed6d5e7-938d-4295-a784-87e2e1edd401": {
    "name": "Glabrezu",
    "type": "fiend",
    "subtype": "demon",
    "ac": 17,
    "hp": 157,
    "dice": "15d10",
    "attributes": {
      "strength": 20,
      "dexterity": 15,
      "constitution": 21,
      "intelligence": 19,
      "wisdom": 17,
      "charisma": 16
    },
    "modifiers": {
      "strength": 5,
      "dexterity": 2,
      "constitution": 5,
      "intelligence": 4,
      "wisdom": 3,
      "charisma": 3
    },
    "cr": 9,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "a02ccb2d-342d-4f26-83eb-4d019a795a61": {
    "name": "Nightmare",
    "type": "fiend",
    "subtype": "",
    "ac": 13,
    "hp": 68,
    "dice": "8d10",
    "attributes": {
      "strength": 18,
      "dexterity": 15,
      "constitution": 16,
      "intelligence": 10,
      "wisdom": 13,
      "charisma": 15
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 2
    },
    "cr": 3,
    "size": "Large",
    "alignment": "neutral evil"
  },
  "31dfa241-dfb8-4344-870a-a6a8296d59a5": {
    "name": "Orc",
    "type": "humanoid",
    "subtype": "orc",
    "ac": 13,
    "hp": 15,
    "dice": "2d8",
    "attributes": {
      "strength": 16,
      "dexterity": 12,
      "constitution": 16,
      "intelligence": 7,
      "wisdom": 11,
      "charisma": 10
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 1,
      "constitution": 3,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Medium",
    "alignment": "chaotic evil"
  },
  "70c4ca3c-cf2b-4e73-a9f8-bb10bc639552": {
    "name": "Giant Ape",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 157,
    "dice": "15d12",
    "attributes": {
      "strength": 23,
      "dexterity": 14,
      "constitution": 18,
      "intelligence": 7,
      "wisdom": 12,
      "charisma": 7
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 2,
      "constitution": 4,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 7,
    "size": "Huge",
    "alignment": "unaligned"
  },
  "d771bcff-5199-48c9-9b73-f379ec2de706": {
    "name": "Giant Fire Beetle",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 4,
    "dice": "1d6",
    "attributes": {
      "strength": 8,
      "dexterity": 10,
      "constitution": 12,
      "intelligence": 1,
      "wisdom": 7,
      "charisma": 3
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0,
    "size": "Small",
    "alignment": "unaligned"
  },
  "4aa7b0e0-e649-4e16-8e32-d47375782797": {
    "name": "Giant Rat",
    "type": "beast",
    "subtype": "",
    "ac": 12,
    "hp": 7,
    "dice": "2d6",
    "attributes": {
      "strength": 7,
      "dexterity": 15,
      "constitution": 11,
      "intelligence": 2,
      "wisdom": 10,
      "charisma": 4
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 2,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 0,
      "charisma": 0
    },
    "cr": 0.125,
    "size": "Small",
    "alignment": "unaligned"
  },
  "9ffec790-96db-4634-9d88-e50111fb5cf6": {
    "name": "Deer",
    "type": "beast",
    "subtype": "",
    "ac": 13,
    "hp": 4,
    "dice": "1d8",
    "attributes": {
      "strength": 11,
      "dexterity": 16,
      "constitution": 11,
      "intelligence": 2,
      "wisdom": 14,
      "charisma": 5
    },
    "modifiers": {
      "strength": 0,
      "dexterity": 3,
      "constitution": 0,
      "intelligence": 0,
      "wisdom": 2,
      "charisma": 0
    },
    "cr": 0,
    "size": "Medium",
    "alignment": "unaligned"
  },
  "b7bd331b-347f-4755-8e33-0fbca21eb634": {
    "name": "Drider",
    "type": "monstrosity",
    "subtype": "",
    "ac": 19,
    "hp": 123,
    "dice": "13d10",
    "attributes": {
      "strength": 16,
      "dexterity": 16,
      "constitution": 18,
      "intelligence": 13,
      "wisdom": 14,
      "charisma": 12
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 3,
      "constitution": 4,
      "intelligence": 1,
      "wisdom": 2,
      "charisma": 1
    },
    "cr": 6,
    "size": "Large",
    "alignment": "chaotic evil"
  },
  "7282a008-3483-439b-8865-72d237886142": {
    "name": "Young Gold Dragon",
    "type": "dragon",
    "subtype": "",
    "ac": 18,
    "hp": 178,
    "dice": "17d10",
    "attributes": {
      "strength": 23,
      "dexterity": 14,
      "constitution": 21,
      "intelligence": 16,
      "wisdom": 13,
      "charisma": 20
    },
    "modifiers": {
      "strength": 6,
      "dexterity": 2,
      "constitution": 5,
      "intelligence": 3,
      "wisdom": 1,
      "charisma": 5
    },
    "cr": 10,
    "size": "Large",
    "alignment": "lawful good"
  },
  "28060d99-904e-4013-bdbe-1d26ff52090a": {
    "name": "Gynosphinx",
    "type": "monstrosity",
    "subtype": "",
    "ac": 17,
    "hp": 136,
    "dice": "16d10",
    "attributes": {
      "strength": 18,
      "dexterity": 15,
      "constitution": 16,
      "intelligence": 18,
      "wisdom": 18,
      "charisma": 18
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 2,
      "constitution": 3,
      "intelligence": 4,
      "wisdom": 4,
      "charisma": 4
    },
    "cr": 11,
    "size": "Large",
    "alignment": "lawful neutral"
  },
  "efa37d07-2438-4c00-a58d-21070057e6a8": {
    "name": "Giant Goat",
    "type": "beast",
    "subtype": "",
    "ac": 11,
    "hp": 19,
    "dice": "3d10",
    "attributes": {
      "strength": 17,
      "dexterity": 11,
      "constitution": 12,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 6
    },
    "modifiers": {
      "strength": 3,
      "dexterity": 0,
      "constitution": 1,
      "intelligence": 0,
      "wisdom": 1,
      "charisma": 0
    },
    "cr": 0.5,
    "size": "Large",
    "alignment": "unaligned"
  },
  "2fc21869-1acd-41c5-bce2-24fd05f80308": {
    "name": "Bone Devil",
    "type": "fiend",
    "subtype": "devil",
    "ac": 19,
    "hp": 142,
    "dice": "15d10",
    "attributes": {
      "strength": 18,
      "dexterity": 16,
      "constitution": 18,
      "intelligence": 13,
      "wisdom": 14,
      "charisma": 16
    },
    "modifiers": {
      "strength": 4,
      "dexterity": 3,
      "constitution": 4,
      "intelligence": 1,
      "wisdom": 2,
      "charisma": 3
    },
    "cr": 12,
    "size": "Large",
    "alignment": "lawful evil"
  }
});

export default monsters;
