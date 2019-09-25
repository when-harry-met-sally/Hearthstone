const onMouseUpHandler = (board, dragging, players) => {
  if (dragging) {
    const { originIdentity } = dragging;
    switch (originIdentity) {
      case "hand": {
        const card =
          players[dragging.originPlayerId].hand[dragging.originHandFieldId];
        if (
          card.type === "Minion" ||
          (card.type === "Spell" && card.effects[0].scope !== "Targeted")
        ) {
          const { destination, dragOriginal } = dragging;
          dragOriginal.style.visibility = null;
          if (destination) {
            destination.style.backgroundColor = null;
          }
          break;
        }
      }
      case "field": {
        if (dragging.destination) {
          dragging.destination.style.backgroundColor = null;
        }
        break;
      }
      default: {
      }
    }
    if (board.getElementById("drag-object")) {
      board.getElementById("board").removeChild(dragging.dragObject);
    }
    return dragging;
  } else {
    return null;
  }
};

export default onMouseUpHandler;
