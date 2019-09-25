import React from "react";

function Mana({ currentMana, totalMana }) {
  let crystals = Array(totalMana).fill();
  let crystalsElement = crystals.map((x, i) => {
    if (i < currentMana) {
        return <div key={i} className="filled-mana-crystal" />
    } else {
        return <div key={i} className="empty-mana-crystal" />
    }
  });
  return (
    <div className="center">
      <div>
        ({currentMana} / {totalMana})
      </div>
      {crystalsElement}
    </div>
  );
}

export default Mana;
