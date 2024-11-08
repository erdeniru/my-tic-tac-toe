import { store } from '../../store/store';
import { STATUS, PLAYER } from '../../constants';
import { handlerBoardCell } from '../../handlers';
import styles from './board.module.css';

export const BoardLayout = () => {
    const { status, board, winPattern } = store.getState();

    const isGameOver = status === STATUS.WIN || status === STATUS.DRAW;

    return (
        <div
            className={
                styles.content + (isGameOver ? ' ' + styles.content_disabled : '') + ''
            }
        >
            {board.map((value, index) => (
                <div
                    key={index}
                    className={
                        // prettier-ignore
                        styles.cell + ' ' + styles.bg__cell +
                        (value === PLAYER.NOUGHT ? ' ' + styles.bg__cell_o : '') +
                        (value === PLAYER.CROSS ? ' ' + styles.bg__cell_x : '') +
                        (winPattern.indexOf(index) > -1 ? ' ' + styles.bg__cell_win : '') +
                        (value !== PLAYER.NONE ? ' ' + styles.cell_noHover : '') +
                        ''
                    }
                    {...(value === PLAYER.NONE
                        ? { onClick: () => handlerBoardCell(index) }
                        : {})}
                ></div>
            ))}
        </div>
    );
};
