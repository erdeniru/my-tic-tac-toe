import { GAME_NAME } from './constants';
import { Board, Control, Information } from './components';
import { GameLayout } from './game-layout';

export const Game = () => {
    return (
        <GameLayout title={GAME_NAME}>
            <Information />
            <Board />
            <Control />
        </GameLayout>
    );
};
