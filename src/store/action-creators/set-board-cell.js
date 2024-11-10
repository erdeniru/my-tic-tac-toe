import { SET_BOARD_CELL } from '../actions';

export const setBoardCellAction = (indexCell) => ({
    type: SET_BOARD_CELL,
    payload: indexCell,
});
