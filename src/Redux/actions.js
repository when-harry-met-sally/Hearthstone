import {
  SET_HAND,
  SET_CHARGE_OF_MINION,
  SET_HEALTH_OF_HERO,
  SET_TURN,
  SET_TOTAL_MANA,
  PLACE_CARD,
  SET_HEALTH_OF_MINION,
  REMOVE_MINION_FROM_FIELD,
  SET_CURRENT_MANA,
  DRAW_CARD,
  SET_TAPPED,
  SUMMON_MINION,
  SET_PLAYERS,
  APPEND_LOG
} from "./types";

export const setHand = hand => ({
  type: SET_HAND,
  payload: hand
});

export const setTurn = playerId => ({
  type: SET_TURN,
  payload: playerId
});

export const setTotalMana = (playerId, newTotalMana) => ({
  type: SET_TOTAL_MANA,
  payload: {
    playerId,
    newTotalMana
  }
});

export const setCurrentMana = (playerId, newCurrentMana) => ({
  type: SET_CURRENT_MANA,
  payload: {
    playerId,
    newCurrentMana
  }
});

export const placeCard = (playerId, cardId, positionId, handId) => ({
  type: PLACE_CARD,
  payload: {
    playerId,
    cardId,
    positionId,
    handId
  }
});

export const setHealthOfMinion = (playerId, fieldId, newHealth) => ({
  type: SET_HEALTH_OF_MINION,
  payload: {
    playerId,
    fieldId,
    newHealth
  }
});

export const removeMinionFromField = (playerId, fieldId) => ({
  type: REMOVE_MINION_FROM_FIELD,
  payload: {
    playerId,
    fieldId
  }
});

export const setHealthOfHero = (playerId, newHealth) => ({
  type: SET_HEALTH_OF_HERO,
  payload: {
    playerId,
    newHealth
  }
});

export const setChargeOfMinion = (playerId, fieldId, charge) => ({
  type: SET_CHARGE_OF_MINION,
  payload: {
    playerId,
    fieldId,
    charge
  }
});

export const drawCard = (playerId, quantity) => ({
  type: DRAW_CARD,
  payload: {
    playerId,
    quantity
  }
});

export const setTapped = (playerId, value) => ({
  type: SET_TAPPED,
  payload: {
    playerId,
    value
  }
});

export const summonMinion = (playerId, cardId, fieldId) => ({
  type: SUMMON_MINION,
  payload: {
    playerId,
    cardId,
    fieldId
  }
});

export const setPlayers = players => ({
  type: SET_PLAYERS,
  payload: {
    players
  }
});

export const appendLog = event => ({
  type: APPEND_LOG,
  payload: {
    event
  }
})
