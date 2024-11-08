import { PLAYER, STATUS, WIN_PATTERN_INITIAL } from '../constants';
import { createEmptyBoard } from '../utils';

export const initialState = {
    currentPlayer: PLAYER.CROSS,
    status: STATUS.TURN,
    board: createEmptyBoard(),
    winPattern: WIN_PATTERN_INITIAL,
};
