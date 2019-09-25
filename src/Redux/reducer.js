import cards from "../Data/Cards";
import * as _ from "lodash";
import summoned from "../Data/Summoned";
import {
  SET_TURN,
  PLACE_CARD,
  SET_HEALTH_OF_MINION,
  REMOVE_MINION_FROM_FIELD,
  SET_HEALTH_OF_HERO,
  SET_CHARGE_OF_MINION,
  SET_TOTAL_MANA,
  SET_CURRENT_MANA,
  DRAW_CARD,
  SET_TAPPED,
  SUMMON_MINION,
  SET_PLAYERS,
  APPEND_LOG
} from "./types";

const initialState = {
  playerId: 0,
  enemyId: 1,
  currentTurn: 0,
  log: [],
  players: [
    {
      id: 0,
      deck: [...cards, ...cards],
      hand: null,
      field: [null, null, null, null, null, null, null],
      currentMana: 0,
      totalMana: 0,
      health: 30,
      class: "Paladin",
      tapped: false,
      exp: 0
    },
    {
      id: 1,
      hand: null,
      deck: [...cards, ...cards],
      field: [null, null, null, null, null, null, null],
      currentMana: 0,
      totalMana: 0,
      health: 30,
      class: "Paladin",
      tapped: false,
      exp: 0
    }
  ]
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TURN: {
      return { ...state, currentTurn: action.payload };
    }
    case SET_TOTAL_MANA: {
      const { players } = state;
      const temp = [...players];
      const { playerId, newTotalMana } = action.payload;
      temp[playerId].totalMana = newTotalMana;
      return { ...state, players: [...temp] };
    }
    case SET_CURRENT_MANA: {
      const { players } = state;
      const temp = [...players];
      const { playerId, newCurrentMana } = action.payload;
      temp[playerId].currentMana = newCurrentMana;
      return { ...state, players: [...temp] };
    }
    case PLACE_CARD: {
      const { players } = state;
      const { playerId, cardId, positionId, handId } = action.payload;
      const temp = [
        {
          ...players[0],
          field: [...players[0].field],
          hand: [...players[0].hand]
        },
        {
          ...players[1],
          field: [...players[1].field],
          hand: [...players[1].hand]
        }
      ];
      temp[playerId].field[positionId] = {
        ...cards[cardId],
        health: cards[cardId].initialHealth,
        attack: cards[cardId].initialAttack,
        charge: false
      };
      temp[playerId].hand.splice(handId, 1);
      temp[playerId].currentMana =
        temp[playerId].currentMana - cards[cardId].cost;
      return { ...state, players: [...temp] };
    }
    case SET_HEALTH_OF_MINION: {
      const { players } = state;
      const { playerId, fieldId, newHealth } = action.payload;

      const temp = [
        {
          ...players[0],
          field: [...players[0].field],
          hand: [...players[0].hand]
        },
        {
          ...players[1],
          field: [...players[1].field],
          hand: [...players[1].hand]
        }
      ];
      temp[playerId].field[fieldId] = {
        ...temp[playerId].field[fieldId],
        health: newHealth
      };
      return { ...state, players: [...temp] };
    }
    case REMOVE_MINION_FROM_FIELD: {
      const { players } = state;
      const { playerId, fieldId } = action.payload;
      const temp = [
        {
          ...players[0],
          field: [...players[0].field],
          hand: [...players[0].hand]
        },
        {
          ...players[1],
          field: [...players[1].field],
          hand: [...players[1].hand]
        }
      ];
      temp[playerId].field[fieldId] = null;
      return { ...state, players: [...temp] };
    }
    case SET_HEALTH_OF_HERO: {
      const { players } = state;
      const temp = [{ ...players[0] }, { ...players[1] }];
      const { playerId, newHealth } = action.payload;
      temp[playerId].health = newHealth;
      return { ...state, players: [...temp] };
    }
    case SET_CHARGE_OF_MINION: {
      const { players } = state;
      const { playerId, fieldId, charge } = action.payload;
      const temp = [
        {
          ...players[0],
          field: [...players[0].field],
          hand: [...players[0].hand]
        },
        {
          ...players[1],
          field: [...players[1].field],
          hand: [...players[1].hand]
        }
      ];
      temp[playerId].field[fieldId] = {
        ...temp[playerId].field[fieldId],
        charge: charge
      };
      return { ...state, players: [...temp] };
    }
    case DRAW_CARD: {
      const { players } = state;
      const { playerId, quantity } = action.payload;
      const temp = [
        {
          ...players[0],
          deck: [...players[0].deck],
          hand: [...players[0].hand]
        },
        {
          ...players[1],
          deck: [...players[1].deck],
          hand: [...players[1].hand]
        }
      ];

      for (let i = 0; i < quantity; i++) {
        if (temp[playerId].deck.length > i) {
          const card = temp[playerId].deck.pop();
          temp[playerId].hand = [...temp[playerId].hand, card];
        }
      }
      return { ...state, players: [...temp] };
    }
    case SET_TAPPED: {
      const { players } = state;
      const { playerId, value } = action.payload;
      const temp = [
        {
          ...players[0],
          deck: [...players[0].deck],
          hand: [...players[0].hand]
        },
        {
          ...players[1],
          deck: [...players[1].deck],
          hand: [...players[1].hand]
        }
      ];
      temp[playerId].tapped = value;
      return { ...state, players: [...temp] };
    }
    case SUMMON_MINION: {
      const { players } = state;
      const { playerId, cardId, fieldId } = action.payload;

      const temp = _.cloneDeep(players);

      temp[playerId].field[fieldId] = {
        ...summoned[cardId],
        health: summoned[cardId].initialHealth,
        attack: summoned[cardId].initialAttack,
        effects: summoned[cardId].initialEffects,
        charge: false
      };
      return { ...state, players: temp };
    }
    case SET_PLAYERS: {
      const { players } = action.payload;
      return { ...state, players: players };
    }
    case APPEND_LOG: {
      const log =  _.cloneDeep(state.log);
      log.push(action.payload.event);
      return {...state, log}
    }
    default:
      return state;
  }
}

export default reducer;
