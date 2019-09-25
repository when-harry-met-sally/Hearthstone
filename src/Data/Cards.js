import ArgentSquire from "./Images/ArgentSquire.png";
import DireWolfAlpha from "./Images/DireWolfAlpha.png";
import FlameImp from "./Images/FlameImp.png";
import Wisp from "./Images/Wisp.png";
import Consecration from './Images/Consecration.png'
import MortalCoil from './Images/MortalCoil.png'
const cards = [
  {
    id: 0,
    name: "Argent Squire",
    img: ArgentSquire,
    cost: 1,
    initialHealth: 1,
    initialAttack: 1,
    type: 'Minion',
    initialEffects: [
      {name: 'Divine Shield'}
    ]
  },
  {
    id: 1,
    name: "Dire Wolf Alpha",
    img: DireWolfAlpha,
    cost: 2,
    initialHealth: 2,
    initialAttack: 2,
    type: 'Minion',
    initialEffects: [
     
    ]
  },
  {
    id: 2,
    name: "Flame Imp",
    img: FlameImp,
    cost: 1,
    initialHealth: 2,
    initialAttack: 3,
    type: 'Minion',
    initialEffects: [
     
    ]
  },
  {
    id: 3,
    name: "Wisp",
    img: Wisp,
    cost: 0,
    initialHealth: 1,
    initialAttack: 1,
    type: 'Minion',
    initialEffects: [
     
    ]
  },
  {
    id: 4,
    name: "Consecration",
    img: Consecration,
    cost: 4,
    type: 'Spell',
    effects: [{
      scope: 'AOE',
      type: 'Damage',
      damage: 2,
      targets: ['Enemy Minions', 'Enemy Hero'],
    }]
    
  },
  {
    id: 5,
    name: "Mortal Coil",
    img: MortalCoil,
    cost: 1,
    type: 'Spell',
    effects: [{
      scope: 'Targeted',
      type: 'Damage',
      damage: 1,
      targets: ['Minions'],
    }]
    
  },
];

export default cards;
