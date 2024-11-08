import { initialState } from './initial-state';
import { SET_BOARD_CELL, RESTART_GAME } from './actions';
import { checkFullBoard, findIndexWinPattern } from '../utils';
import { PLAYER, STATUS, WIN_PATTERNS } from '../constants';

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_BOARD_CELL:
            const indexCell = payload;

            const updatedBoard = [...state.board];
            updatedBoard[indexCell] = state.currentPlayer;

            const indexWinPattern = findIndexWinPattern(
                state.currentPlayer,
                updatedBoard,
            );

            if (indexWinPattern > -1) {
                return {
                    ...state,
                    board: updatedBoard,
                    status: STATUS.WIN,
                    winPattern: WIN_PATTERNS[indexWinPattern],
                };
            }

            if (checkFullBoard(updatedBoard)) {
                return {
                    ...state,
                    board: updatedBoard,
                    status: STATUS.DRAW,
                    currentPlayer: PLAYER.NONE,
                };
            }

            return {
                ...state,
                board: updatedBoard,
                status: STATUS.TURN,
                currentPlayer:
                    state.currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
            };

        case RESTART_GAME:
            return initialState;

        default:
            return state;
    }
};
