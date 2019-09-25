import store from "../Redux/store";
import {
  drawCard,
  setCurrentMana,
  setHealthOfHero,
  setTapped,
  summonMinion
} from "../Redux/actions";

const heroPowerHandler = (playerId, playerClass) => {
  const state = store.getState();
  const { players } = state;
  let result = {
    success: true,
    message: null
  };
  const currentMana = players[playerId].currentMana;
  const newMana = currentMana - 2;
  const level = Math.floor(players[playerId].exp) + 1;
  if (state.currentTurn !== playerId) {
    result = {
      success: false,
      message: "NOT YOUR TURN"
    };
    return result;
  }
  if (players[playerId].tapped) {
    result = {
      success: false,
      message: "ALREADY USED HERO POWER THIS TURN"
    };
    return result;
  }
  if (currentMana < 2) {
    result = {
      success: false,
      message: "INSUFFICIENT MANA"
    };
    return result;
  }
  switch (playerClass) {
    case "Warlock": {
      switch (level) {
        case 1: {
          const newHealth = players[playerId].health - 2;
          store.dispatch(setHealthOfHero(playerId, newHealth));
          store.dispatch(drawCard(playerId, 1));
          break;
        }
        case 2: {
          const newHealth = players[playerId].health - 1;
          store.dispatch(setHealthOfHero(playerId, newHealth));
          store.dispatch(drawCard(playerId, 1));
          break;
        }
        case 3: {
          store.dispatch(drawCard(playerId, 1));
          break;
        }
        default: {
        }
      }
      break;
    }
    case "Paladin": {
      const SilverHandMinionId = 0;
      let counter = 0;
      for (let i = 0; i < players[playerId].field.length; i++) {
        if (!players[playerId].field[i]) {
          store.dispatch(summonMinion(playerId, SilverHandMinionId, i));
          counter++;
        }
        if (counter === level) {
          break;
        }
      }
      break;
    }
    case "Hunter": {
      switch (level) {
        case 1: {
          const newHealth = players[state.enemyId].health - 2;
          store.dispatch(setHealthOfHero(state.enemyId, newHealth));
          break;
        }
        case 2: {
          const newHealth = players[state.enemyId].health - 3;
          store.dispatch(setHealthOfHero(state.enemyId, newHealth));
          break;
        }
        case 3: {
          const newHealth = players[state.enemyId].health - 4;
          store.dispatch(setHealthOfHero(state.enemyId, newHealth));
          break;
        }
        default: {
        }
      }
    }
    default: {
      break;
    }
  }
  store.dispatch(setTapped(playerId, true));
  store.dispatch(setCurrentMana(playerId, newMana));
  return result;
};

export default heroPowerHandler;
