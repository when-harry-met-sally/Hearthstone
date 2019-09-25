import withinFieldHandler from "./withinFieldHandler";

const onMouseMoveHandler = (e, board, dragging, players) => {
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
          let { dragOriginal, dragObject, xDiff, yDiff } = dragging;
          if (!board.getElementById("drag-object")) {
            dragOriginal.style.visibility = "hidden";
            board.getElementById("board").appendChild(dragObject);
          }
          dragObject.style.left = e.pageX - xDiff + "px";
          dragObject.style.top = e.pageY - yDiff + "px";
          dragging = colorizeFields(board, dragging, e, "lightblue");
          return dragging;
        }
      }
      case "field": {
        dragging.dragObject.style.left = e.pageX - 25 + "px";
        dragging.dragObject.style.top = e.pageY - 25 + "px";
        dragging = colorizeFields(board, dragging, e, "rgb(250, 157, 157)");
        return dragging;
      }
      default: {
      }
    }
  }

  return dragging;
};

const colorizeFields = (board, dragging, e, color) => {
  const location = withinFieldHandler(e, board);
  if (location && !dragging.destination) {
    dragging.destination = location;
    dragging.destination.style.backgroundColor = color;
    dragging.destinationIdentity = dragging.destination.dataset.identity;
    dragging.destinationPlayerId = parseInt(
      dragging.destination.dataset.playerid
    );
    dragging.destinationHandFieldId = parseInt(dragging.destination.dataset.id);
  } else if (!location && dragging.destination) {
    dragging.destination.style.backgroundColor = null;
    dragging.destination = null;
    dragging.destinationIdentity = null;
  } else if (location !== dragging.destination) {
    dragging.destination.style.backgroundColor = null;
    dragging.destination = location;
    dragging.destination.style.backgroundColor = color;
  }
  return dragging;
};

export default onMouseMoveHandler;
