import React from "react";
import { connect } from "react-redux";
import endTurnHandler from "../gameplayHandlers/endTurnHandler";

function TurnButton({ playerId, currentTurn }) {
  const handleClick = () => {
    if (playerId === currentTurn) {
      endTurnHandler(currentTurn);
    }
  };
  return <input type="button" value="End Turn" onClick={handleClick} />;
}
const mapStateToProps = ({ currentTurn }) => ({
  currentTurn
});

export default connect(
  mapStateToProps,
  null
)(TurnButton);
