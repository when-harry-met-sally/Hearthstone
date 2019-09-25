import * as _ from "lodash";
import store from "../Redux/store";
import { setPlayers } from "../Redux/actions";
const gameStartHandler = () => {
  const state = _.cloneDeep(store.getState());
  for (let i = 0; i < 2; i++){
      let deck = shuffle(state.players[i].deck);
      state.players[i].hand = deck.slice(0,5);
      deck = deck.slice(6, deck.length-1);
  }
  store.dispatch(setPlayers(state.players))
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
};

export default gameStartHandler;
