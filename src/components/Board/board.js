import { useState } from 'react';
import { STATUS, WIN_PATERN_INITIAL } from '../../constants';
import { handlerBoardCell } from '../../handlers';
import { BoardLayout } from './board-layout';

export const Board = (state) => {
    const { status } = state;

    const [winPatern, setWinPatern] = useState(WIN_PATERN_INITIAL);

    const boardState = { ...state, winPatern, setWinPatern, handler: handlerBoardCell };

    if (winPatern !== WIN_PATERN_INITIAL && status !== STATUS.WIN) {
        setWinPatern(WIN_PATERN_INITIAL);
    }

    return <BoardLayout {...boardState} />;
};
