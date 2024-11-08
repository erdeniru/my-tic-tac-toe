import { store } from '../store/store';
import { SET_BOARD_CELL } from '../store/actions';

export const handlerBoardCell = (indexCell) => {
    store.dispatch({ type: SET_BOARD_CELL, payload: indexCell });
};
