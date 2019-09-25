import store from "../Redux/store";
import * as _ from "lodash";
import deadHandler from "./deadHandler";
import { setPlayers, appendLog } from "../Redux/actions";

const combatHandler = (
  originIdentity,
  originPlayerId,
  originHandFieldId,
  destinationIdentity,
  destinationPlayerId,
  destinationHandFieldId,
  simulation
) => {
  let state = _.cloneDeep(store.getState());
  if (simulation) {
    state = _.cloneDeep(simulation);
  }
  const playerId = state.currentTurn;
  const enemyId = state.currentTurn === 0 ? 1 : 0;
  const { players } = state;
  let result = {
    success: true,
    message: null
  };

  if (state.currentTurn !== originPlayerId) {
    result = {
      success: false,
      message: "NOT YOUR TURN"
    };
    return result;
  }

  //SPELL
  if (originIdentity === "hand") {
    const spell = players[originPlayerId].hand[originHandFieldId];
    spell.effects.forEach(effect => {
      switch (effect.scope) {
        case "AOE": {
          effect.targets.forEach(target => {
            switch (target) {
              case "Enemy Hero": {
                damage(enemyId, "hero", null, effect.damage);
                break;
              }
              case "Enemy Minions": {
                players[enemyId].field.forEach((minion, i) => {
                  if (minion) {
                    damage(enemyId, "field", i, effect.damage);
                  }
                });
                break;
              }
              default: {
              }
            }
          });
        }
        case "Targeted": {
          switch (spell.effects[0].targets[0]) {
            case "Minions": {
              if (destinationIdentity !== "field") {
                result = {
                  success: false,
                  message: "NOT A VALID TARGET"
                };

                break;
              }
              if (!players[destinationPlayerId].field[destinationHandFieldId]) {
                result = {
                  success: false,
                  message: "TARGET DOESNT EXIST"
                };
                break;
              }
              switch (spell.name) {
                case "Mortal Coil": {
                  damage(
                    destinationPlayerId,
                    "field",
                    destinationHandFieldId,
                    1
                  );
                  const postDeadState = deadHandler(state);
                  const casualties = postDeadState[1];
                  if (
                    casualties.filter(
                      casualty =>
                        casualty.playerId === destinationPlayerId &&
                        casualty.fieldId === destinationHandFieldId
                    ).length === 1
                  ) {
                    drawCard(originPlayerId, 1);
                  }
                }
              }
            }
            default: {
            }
          }
        }
        default: {
        }
      }
    });
    if (!result.success) {
      return result;
    }
    const spellName = players[originPlayerId].hand[originHandFieldId].name;
    players[originPlayerId].currentMana =
      players[originPlayerId].currentMana - spell.cost;
    players[originPlayerId].hand.splice(originHandFieldId, 1);
    result.success = true;
    result.message = "successful attack";
    result.players = players;
    const postDeadState = deadHandler(state);
    state = postDeadState[0];

    if (simulation) {
      result.simulation = state;
    }
    if (!simulation) {
      const action = {
        playerId: originPlayerId,
        event: "Player " + eval(originPlayerId + 1) + "  cast " + spellName
      };
      store.dispatch(appendLog(action));
      store.dispatch(setPlayers(state.players));
    }
    return result;
  }

  if (originPlayerId === destinationPlayerId) {
    result = {
      success: false,
      message: "CANNOT ATTACK YOURSELF"
    };
    return result;
  }

  if (originIdentity === "field") {
    if (!players[originPlayerId].field[originHandFieldId]) {
      result = {
        success: false,
        message: "NO TARGET FOUND"
      };
      return result;
    }

    if (!players[originPlayerId].field[originHandFieldId].charge) {
      result = {
        success: false,
        message: "MINION IS NOT READY TO ATTACK"
      };
      return result;
    }
  }

  if (originIdentity === "field" && destinationIdentity === "field") {
    if (!players[destinationPlayerId].field[destinationHandFieldId]) {
      result = {
        success: false,
        message: "NO TARGET FOUND"
      };
      return result;
    }
    if (!result.success) {
      return result;
    }
    console.log("MINION ATTACK");
    //field vs field attack success
    const attackingMinion = players[originPlayerId].field[originHandFieldId];
    const attackerName = attackingMinion.name;
    const defendingMinion =
      players[destinationPlayerId].field[destinationHandFieldId];
      const defendingName = defendingMinion.name;
    damage(
      destinationPlayerId,
      "field",
      destinationHandFieldId,
      attackingMinion.attack
    );
    damage(originPlayerId, "field", originHandFieldId, defendingMinion.attack);

    attackingMinion.charge = false;
    players[originPlayerId].exp += 0.25; //LEVELING UP
    result.success = true;
    result.message = "successful attack";
    result.players = players;
    const postDeadState = deadHandler(state);
    state = postDeadState[0];

    if (simulation) {
      result.simulation = state;
    }
    if (!simulation) {
      const action = {
        playerId: originPlayerId,
        event: "Player " + eval(originPlayerId + 1) + "  attacked " + defendingName + " with " + attackerName
      };
      store.dispatch(appendLog(action));
      store.dispatch(setPlayers(state.players));
    }
    return result;
  }
  //field vs field attack success

  if (originIdentity === "field" && destinationIdentity === "hero") {
    const attackingMinion = players[originPlayerId].field[originHandFieldId];
    damage(destinationPlayerId, "hero", null, attackingMinion.attack);
    attackingMinion.charge = false;
    result.success = true;
    result.message = "successful attack";
    result.players = players;
    const postDeadState = deadHandler(state);
    state = postDeadState[0];

    if (simulation) {
      result.simulation = state;
    }
    if (!simulation) {
      const action = {
        playerId: originPlayerId,
        event: "Player " + eval(originPlayerId + 1) + "  attacked Player " + eval(destinationPlayerId + 1) + " with " +  attackingMinion.name
      };
      store.dispatch(appendLog(action));
      store.dispatch(setPlayers(state.players));
    }
    return result;
  }

  function damage(playerId, originType, fieldId, damage) {
    switch (originType) {
      case "hero": {
        players[playerId].health = players[playerId].health - damage;
        break;
      }
      case "field": {
        const minion = players[playerId].field[fieldId];
        if (
          minion.effects.filter(effect => effect.name === "Divine Shield")
            .length !== 0
        ) {
          minion.effects = minion.effects.filter(
            effect => effect.name !== "Divine Shield"
          );
          return;
        }
        players[playerId].field[fieldId].health =
          players[playerId].field[fieldId].health - damage;
        break;
      }
      default: {
      }
    }
  }

  function drawCard(id, quantity) {
    const player = players[id];
    if (player.hand.length < 8) {
      for (let i = 0; i < quantity; i++) {
        if (player.deck.length > 0) {
          player.hand.push(player.deck.pop());
        }
      }
    }
  }
};
export default combatHandler;
