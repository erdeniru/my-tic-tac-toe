import { PLAYER, STATUS } from '../constants';
import { createEmptyBoard } from '../utils';

export const initialState = {
    currentPlayer: PLAYER.CROSS,
    status: STATUS.TURN,
    board: createEmptyBoard(),
};
