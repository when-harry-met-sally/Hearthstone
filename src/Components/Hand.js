import React from "react";
import Card from './Card';
function Hand({ hand, playerId, currentMana, currentTurn, yourAsset }) {
  const content = hand.map((card, i) => {
    return (
      <Card
        key={i}
        id={i}
        playerId={playerId}
        cardData={card}
        currentMana={currentMana}
        currentTurn={currentTurn}
        yourAsset={yourAsset}
      />
    );
  });

  return <div className="hand-grid">{content}</div>;
}

export default Hand;
