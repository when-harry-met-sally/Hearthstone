const onMouseDownHandler = (e, board, dragging, players) => {
  e.preventDefault();
  if (e.target.dataset.identity) {
    dragging = {
      originIdentity: e.target.dataset.identity,
      originPlayerId: parseInt(e.target.dataset.playerid),
      originHandFieldId: parseInt(e.target.dataset.id),
      destination: null,
      destinationIdentity: null,
      destinationPlayerId: null,
      destinationHandFieldId: null,
    };
    const {originIdentity, originPlayerId} = dragging;
    switch (originIdentity) {
    
      case "hand": {
        const card = players[dragging.originPlayerId].hand[dragging.originHandFieldId];
        if (card.type === 'Minion' || (card.type === 'Spell' && card.effects[0].scope !== 'Targeted')){
        dragging.dragOriginal = e.target;
        dragging.dragObject = e.target.cloneNode(false);
        dragging.xDiff = e.pageX - e.target.offsetLeft;
        dragging.yDiff = e.pageY - e.target.offsetTop;
        const {dragOriginal, dragObject} = dragging;
        dragObject.id = "drag-object";
        dragObject.style.width = dragOriginal.clientWidth + "px";
        dragObject.style.height = dragOriginal.clientHeight + "px";
        return dragging
        }
      }
      case "field": {
        const dragObject = board.createElement("div");
        dragObject.classList.add("dot");
        dragObject.style.left = e.pageX - 25 + "px";
        dragObject.style.top = e.pageY - 25 + "px";
        dragging.dragObject = dragObject;
        dragObject.id = "drag-object";
        board.getElementById("board").appendChild(dragObject);
        return dragging;
      }
      case "hero-power": {
        dragging = {
            originIdentity: originIdentity,
            originPlayerId: originPlayerId,
            playerClass: players[originPlayerId].class,
        }
        return dragging    
      }
      default: {
          return null;
      }
    }
  }
  return dragging;
};

export default onMouseDownHandler;
