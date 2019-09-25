import store from '../Redux/store';
import { setTurn } from "../Redux/actions";
import startTurnHandler from './startTurnHandler';
const endTurnHandler = () => {
    const state = store.getState();
    const currentTurn = state.currentTurn;
    let newTurn;
    if (currentTurn === 0){
        newTurn = 1;
    } else {
        newTurn = 0;
    }
    store.dispatch(setTurn(newTurn));
    startTurnHandler(newTurn);
}

export default endTurnHandler;