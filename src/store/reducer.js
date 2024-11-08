import { initialState } from './initial-state';
import {
    SET_CURRENT_PLAYER,
    SET_STATUS_GAME,
    SET_BOARD_CELL,
    RESTART_GAME,
} from './actions';

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENT_PLAYER:
            const player = payload;

            return {
                ...state,
                currentPlayer: player,
            };

        case SET_STATUS_GAME:
            const status = payload;

            return {
                ...state,
                status,
            };

        case SET_BOARD_CELL:
            const indexCell = payload;

            const updatedBoard = [...state.board];
            updatedBoard[indexCell] = state.currentPlayer;

            return {
                ...state,
                board: updatedBoard,
            };

        case RESTART_GAME:
            return initialState;

        default:
            return state;
    }
};
