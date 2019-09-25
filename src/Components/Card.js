import React from "react";
import cardback from '../Data/Images/cardback.png';

function Card({ cardData, playerId, id, currentMana, currentTurn, yourAsset }) {
  const img = yourAsset ? cardData.img : cardback;
    const usable =
      cardData.cost <= currentMana && playerId === currentTurn && yourAsset
        ? "usable responsive-img minion"
        : "responsive-img minion";

  return (
    <img
      data-identity={'hand'}
      data-playerid={playerId}
      data-id={id}
      alt=""
      src={img}
      className={usable}
    />
  );
}

export default Card;
