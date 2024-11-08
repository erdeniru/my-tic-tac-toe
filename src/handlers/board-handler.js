import PropTypes from 'prop-types';
import { checkFullBoard, findIndexWinPatern } from '../utils';
import { PLAYER, STATUS, WIN_PATTERNS } from '../constants';

export const handlerBoardCell = (state, indexCell) => {
    const { player, setPlayer, setStatus, board, setBoard, setWinPatern } = state;

    const updatedBoard = [...board];
    updatedBoard[indexCell] = player;
    setBoard(updatedBoard);

    const indexWinPatern = findIndexWinPatern(player, updatedBoard);

    if (indexWinPatern > -1) {
        setStatus(STATUS.WIN);
        setWinPatern(WIN_PATTERNS[indexWinPatern]);
    } else if (checkFullBoard(updatedBoard)) {
        setStatus(STATUS.DRAW);
        setPlayer(PLAYER.NONE);
    } else {
        setStatus(STATUS.TURN);
        setPlayer((prevPlayer) =>
            prevPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
        );
    }
};

handlerBoardCell.propTypes = {
    player: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NONE]),
    board: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NONE])),
};
