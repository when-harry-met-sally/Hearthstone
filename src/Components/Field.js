import React from "react";
import Minion from "./Minion";

function Field({ field, playerId, currentTurn, yourAsset, currentMana }) {
  const content = field.map((card, i) => {
    if (!card) {
      return (
        <div
          key={i}
          data-id={i}
          data-playerid={playerId}
          data-identity="field"
          className="field-position"
        />
      );
    } else {
      return (
        <div
          key={i}
          data-id={i}
          data-playerid={playerId}
          data-identity="field"
          className="field-position"
        >
          {" "}
          <Minion
            id={i}
            playerId={playerId}
            cardData={card}
            currentTurn={currentTurn}
            currentMana={currentMana}
            yourAsset={yourAsset}
          />
        </div>
      );
    }
  });
  return <div className="field-grid">{content}</div>;
}

export default Field;
