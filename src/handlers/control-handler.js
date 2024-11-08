import { createEmptyBoard } from '../utils';
import { PLAYER, STATUS } from '../constants';

export const handlerReset = ({ setPlayer, setStatus, setBoard, setWinPatern }) => {
    setPlayer(PLAYER.CROSS);
    setStatus(STATUS.TURN);
    setBoard(createEmptyBoard());
};
