import { useState } from 'react';
import { Board, Control, InformationLayout } from './components';
import { GAME_NAME, PLAYER, STATUS } from './constants';
import { createEmptyBoard } from './utils';
import { GameLayout } from './game-layout';

export const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
    const [status, setStatus] = useState(STATUS.TURN);
    const [field, setField] = useState(createEmptyBoard());

    const appState = {
        player: currentPlayer,
        setPlayer: setCurrentPlayer,
        status,
        setStatus,
        board: field,
        setBoard: setField,
    };

    return (
        <GameLayout title={GAME_NAME}>
            <InformationLayout {...appState} />
            <Board {...appState} />
            <Control {...appState} />
        </GameLayout>
    );
};
