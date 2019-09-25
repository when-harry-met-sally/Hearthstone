import store from "../Redux/store";
import { placeCard, setPlayers, appendLog } from "../Redux/actions";
import CombatHandler from "./combatHandler";
import * as _ from "lodash";
import combatHandler from "./combatHandler";
const playCardHandler = (
  originIdentity,
  originPlayerId,
  originHandFieldId,
  destinationIdentity,
  destinationPlayerId,
  destinationHandFieldId,
  simulation
) => {
  let state = store.getState();
  let result = {
    success: true,
    message: "success"
  };
  if (simulation) {
    state = _.cloneDeep(simulation);
  } else {
    state = _.cloneDeep(state);
  }
  const { players } = state;
  if (state.currentTurn !== originPlayerId) {
    result = {
      success: false,
      message: "NOT YOUR TURN"
    };
    return result;
  }

  if (!destinationIdentity) {
    result = {
      success: false,
      message: "NO TARGET"
    };
    return result;
  }

  if (
    players[originPlayerId].currentMana <
    players[originPlayerId].hand[originHandFieldId].cost
  ) {
    result = {
      success: false,
      message: "INSUFFICIENT MANA"
    };
    return result;
  }

  if (players[originPlayerId].hand[originHandFieldId].type === "Spell") {
    if (simulation) {
      return combatHandler(
        originIdentity,
        originPlayerId,
        originHandFieldId,
        destinationIdentity,
        destinationPlayerId,
        destinationHandFieldId,
        state
      );
    }
    if (!simulation) {
      return combatHandler(
        originIdentity,
        originPlayerId,
        originHandFieldId,
        destinationIdentity,
        destinationPlayerId,
        destinationHandFieldId,
        false
      );
    }
  }

  if (
    players[originPlayerId].hand[originHandFieldId].type === "Minion" &&
    isNaN(destinationHandFieldId)
  ) {
    result = {
      success: false,
      message: "MINIONS CAN ONLY BE PLAYED ON FIELD"
    };
    return result;
  }

  if (originPlayerId !== destinationPlayerId) {
    result = {
      success: false,
      message: "CANNOT PLAY MINION ON ENEMYS FIELD"
    };
    return result;
  }

  if (players[originPlayerId].field[destinationHandFieldId]) {
    result = {
      success: false,
      message: "POSITION IS ALREADY FILLED"
    };
    return result;
  }

  //sucess
  const cardName = players[originPlayerId].hand[originHandFieldId].name;
  players[originPlayerId].currentMana =
    players[originPlayerId].currentMana -
    players[originPlayerId].hand[originHandFieldId].cost;
  players[originPlayerId].field[destinationHandFieldId] = {
    ...players[originPlayerId].hand[originHandFieldId],
    attack: players[originPlayerId].hand[originHandFieldId].initialAttack,
    health: players[originPlayerId].hand[originHandFieldId].initialHealth,
    effects: players[originPlayerId].hand[originHandFieldId].initialEffects
  };

  players[originPlayerId].hand.splice(originHandFieldId, 1);
  result.success = true;
  result.players = players;
  if (simulation) {
    result.simulation = state;
    
    return result;
  }
  if (!simulation) {
    const action = {
      playerId: originPlayerId,
      event: "Player " + eval(originPlayerId + 1) + " played " + cardName
    };
    store.dispatch(appendLog(action));
    store.dispatch(setPlayers(players));
    return result;
  }
};

export default playCardHandler;
