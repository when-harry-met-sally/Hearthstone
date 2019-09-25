
import * as _ from "lodash";
const deadHandler = (state) => {
  state = _.cloneDeep(state);
  const { players } = state;
  let casualties = [];
  players.forEach(player => {
    player.field.forEach((minion, id) => {
      if (minion) {
        if (minion.health <= 0) {
          player.field.splice(id, 1, null);
          casualties.push({playerId: player.id, fieldId: id})
        }
      }
    });
  });
  return [state, casualties];
};

export default deadHandler;
