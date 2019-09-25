import store from "../Redux/store";
import {
  setTotalMana,
  setCurrentMana,
  setChargeOfMinion,
  drawCard,
  setTapped
} from "../Redux/actions";
import Artificial from "../AI/Artificial";
import endTurnHandler from "./endTurnHandler";
const startTurnHandler = currentTurn => {
  const state = store.getState();
  const { players } = state;
  const newTotalMana = players[currentTurn].totalMana + 1;
  if (newTotalMana <= 10) {
    store.dispatch(setTotalMana(currentTurn, newTotalMana));
    store.dispatch(setCurrentMana(currentTurn, newTotalMana));
  } else {
    store.dispatch(setCurrentMana(currentTurn, 10));
  }
  store.dispatch(setTapped(currentTurn, false));
  if (players[currentTurn].hand.length < 7) {
    store.dispatch(drawCard(currentTurn, 1));
  }
  players[currentTurn].field.forEach((minion, fieldId) => {
    if (minion) {
      store.dispatch(setChargeOfMinion(currentTurn, fieldId, true));
    }
  });
  if (state.enemyId === currentTurn) {
    Artificial(state.enemyId, state.playerId);
    setTimeout(endTurnHandler, 4000);
  }
};

export default startTurnHandler;
