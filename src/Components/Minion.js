import React from "react";

function Minion({
  cardData,
  playerId,
  id,
  currentMana,
  currentTurn,
  yourAsset
}) {
  const usable =
    playerId === currentTurn && yourAsset && cardData.charge
      ? "usable responsive-img minion"
      : "responsive-img minion";

  const healthStyle =
    cardData.health < cardData.initialHealth ? "damaged" : null;

  const effects = cardData.effects.map((effect, i) => {
    return (
    <div key={i}>{effect.name}</div>
    )
  })

  return (
    <div className='position' data-identity={"field"} data-playerid={playerId} data-id={id}>
      <img
        alt=""
        data-identity={"field"}
        data-playerid={playerId}
        data-id={id}
        className={usable}
        src={cardData.img}
      />
      <div className="center stats">
        <div className={healthStyle}>Health: {cardData.health}</div>
        <div>Attack: {cardData.attack}</div>
        <div className='bold'>{effects}</div>
      </div>
    </div>
  );
}

export default Minion;
