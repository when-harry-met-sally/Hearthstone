import React from "react";
import PaladinHero from "../Data/Images/PaladinHero.png";
import WarlockHero from "../Data/Images/WarlockHero.png";
import HunterHero from "../Data/Images/HunterHero.png";
import PaladinHeroPower from "../Data/Images/PaladinHeroPower.png";
import WarlockHeroPower from "../Data/Images/WarlockHeroPower.png";
import HunterHeroPower from "../Data/Images/HunterHeroPower.png";

function CharacterCreation({ handleOnClick }) {
  return (
    <div className="character-grid">
      <div className="center">
        <img
          src={PaladinHero}
          alt=""
          onClick={() => handleOnClick("Paladin")}
        />
      </div>
      <div className="center">
        <img
          src={WarlockHero}
          alt=""
          onClick={() => handleOnClick("Warlock")}
        />
      </div>
      <div className="center">
        <img src={HunterHero} alt="" onClick={() => handleOnClick("Hunter")} />
      </div>
      <div className="center">
        <img src={PaladinHeroPower} alt="" />
      </div>
      <div className="center">
        <img src={WarlockHeroPower} alt="" />
      </div>
      <div className="center">
        <img src={HunterHeroPower} alt="" />
      </div>
      <div className='center'>
        <div className='bold'>Level One</div>
        <div>Summon a one-one recruits</div>
        <div className='bold'>Level Two</div>
        <div>Summon two one-one recruits</div>
        <div className='bold'>Level Three</div>
        <div>Summon three one-one recruits</div>
      </div>
      <div className='center'>
        <div className='bold'>Level One</div>
        <div>For two health, draw a card</div>
        <div className='bold'>Level Two</div>
        <div>For one health, draw a card</div>
        <div className='bold'>Level Three</div>
        <div>Draw a card</div>
      </div>
      <div className='center'>
        <div className='bold'>Level One</div>
        <div>Deal two damage to the enemy hero</div>
        <div className='bold'>Level Two</div>
        <div>Deal three damage to the enemy hero</div>
        <div className='bold'>Level Three</div>
        <div>Deal four damage to the enemy hero</div>
      </div>
    </div>
  );
}

export default CharacterCreation;
