import store from "../Redux/store";
import playCardHandler from "../gameplayHandlers/playCardHandler";
import combatHandler from "../gameplayHandlers/combatHandler";
import heroPowerHandler from "../gameplayHandlers/heroPowerHandler";
import * as _ from "lodash";

const Artificial = artificialId => {
  console.log("running artificial intelligence...");
  const state = store.getState();
  let simulation = _.cloneDeep(state);

  let actions = [];
  let simulations = { actions: [], outcomes: [] };
  runPlaySimulation(simulation, artificialId, simulation.playerId, actions, 0);

  let courseOfActionId = findOptimalSimulation(simulations);
  let courseOfAction = simulations.actions[courseOfActionId];


  if (courseOfAction) {
    courseOfAction.forEach(step => {
      playCardHandler(...step, false);
    });
    simulation = simulations.outcomes[courseOfActionId];
  }

  actions = [];
  simulations = { actions: [], outcomes: [] };
  runAttackSimulation(
    simulation,
    artificialId,
    simulation.playerId,
    actions,
    0
  );
  courseOfActionId = findOptimalSimulation(simulations);
  courseOfAction = simulations.actions[courseOfActionId];

  if (courseOfAction) {
    courseOfAction.forEach(step => {
      combatHandler(...step, false);
    });
  }

  heroPowerHandler(artificialId, state.players[artificialId].class);

  function runPlaySimulation(simulation, artificialId, humanId, actions, i) {
    i++;
    for (
      let cardIndex = 0;
      cardIndex < simulation.players[artificialId].hand.length;
      cardIndex++
    ) {
      for (
        let fieldIndex = 0;
        fieldIndex < 14;
        fieldIndex++
      ) {
        if (i === 1) {
          actions = [];
        }
        const destinationPlayerId = fieldIndex < 7 ? artificialId: humanId;
        const destinationHandFieldId = fieldIndex < 7 ? fieldIndex: fieldIndex % 6;
        const args = [
          "hand",
          artificialId,
          cardIndex,
          "field",
          destinationPlayerId,
          destinationHandFieldId
        ];
        const result = playCardHandler(...args, simulation);

        if (result.success) {
          actions.push(args);
          const outcome = runPlaySimulation(
            result.simulation,
            artificialId,
            humanId,
            actions,
            i
          );
          if (outcome && i !== 1) {
            return outcome;
          }
        }
      }
    }
    if (actions.length !== 0) {
      simulations.actions.push(actions);
      simulations.outcomes.push(simulation);
    }
    return { simulation: simulation, steps: actions };
  }

  function runAttackSimulation(simulation, artificialId, humanId, actions, i) {
    i++;
    const defenders = [...simulation.players[humanId].field];
    const attackers = [...simulation.players[artificialId].field];
    for (
      let attackIndex = 0;
      attackIndex < simulation.players[artificialId].field.length;
      attackIndex++
    ) {
      if (attackers[attackIndex]) {
        for (let defendIndex = 0; defendIndex <= 7; defendIndex++) {
          if (defenders[defendIndex] || defendIndex === 7) {
            if (i === 1) {
              actions = [];
            }
            const fieldOrHero = defendIndex === 7 ? "hero" : "field";
            const args = [
              "field",
              artificialId,
              attackIndex,
              fieldOrHero,
              humanId,
              defendIndex
            ];
            const result = combatHandler(...args, simulation);

            if (result.success) {
              actions.push(args);
              const outcome = runAttackSimulation(
                result.simulation,
                artificialId,
                humanId,
                actions,
                i
              );
              if (outcome && i !== 1) {
                return outcome;
              }
            }
          }
        }
      }
    }
    if (actions.length !== 0) {
      simulations.actions.push(actions);
      simulations.outcomes.push(simulation);
    }
    return { simulation: simulation, steps: actions };
  }
  function findOptimalSimulation(sims) {
    const totals = [];
    let bestCaseId = 0;
    sims.outcomes.forEach((outcome, i) => {
      const stats = calculateBoardState(outcome);
      totals.push(stats[1] - stats[0]);
    });
    totals.forEach((total, i) => {
      if (total > totals[bestCaseId]) {
        bestCaseId = i;
      }
    });
    return bestCaseId;
  }

  function calculateBoardState(sim) {
    let playerTotals = [0, 0];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 7; j++) {
        if (sim.players[i].field[j]) {
          playerTotals[i] +=
            sim.players[i].field[j].attack + sim.players[i].field[j].health;
        }
      }
    }
    return playerTotals;
  }
};

export default Artificial;
