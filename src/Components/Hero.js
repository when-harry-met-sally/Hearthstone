import React from "react";
import WarlockHero from '../Data/Images/WarlockHero.png'
import WarlockHeroPower from '../Data/Images/WarlockHeroPower.png';
import PaladinHero from '../Data/Images/PaladinHero.png';
import PaladinHeroPower from '../Data/Images/PaladinHeroPower.png';
import HunterHero from '../Data/Images/HunterHero.png';
import HunterHeroPower from '../Data/Images/HunterHeroPower.png';

function Hero({ health, playerId, players }) {
  const playerClass = players[playerId].class;
  let hero;
  let power;
  const exp = players[playerId].exp
  switch (playerClass) {
    case 'Warlock': {
      hero = WarlockHero
      power = WarlockHeroPower
      break;
    }
    case 'Paladin': {
      hero = PaladinHero
      power = PaladinHeroPower
      break;
    }
    case 'Hunter': {
      hero = HunterHero
      power = HunterHeroPower
      break;
    }
    default: {
      break
    }
  }
  return (
    <div className="hero-grid center">
      <div>{health}</div>
      <span>
        <img
          data-identity="hero"
          data-id={null}
          data-playerid={playerId}
          alt=""
          className="portrait heros"
          src={hero}
        />
      </span>
      <span>
        <img
          data-identity="hero-power"
          data-playerid={playerId}
          data-id={null}
          className="portrait"
          src={power}
          alt=""
        />
      </span>
      <span className='bold'>Level {Math.floor(exp) + 1}</span>
    </div>
  );
}

export default Hero;
