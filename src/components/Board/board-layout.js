import PropTypes from 'prop-types';
import { STATUS, PLAYER } from '../../constants';
import styles from './board.module.css';

export const BoardLayout = (state) => {
    const { status, board, winPatern, handler } = state;

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
                        (winPatern.indexOf(index) > -1 ? ' ' + styles.bg__cell_win : '') +
                        (value !== PLAYER.NONE ? ' ' + styles.cell_noHover : '') +
                        ''
                    }
                    {...(value === PLAYER.NONE
                        ? { onClick: () => handler(state, index) }
                        : {})}
                ></div>
            ))}
        </div>
    );
};

BoardLayout.propTypes = {
    status: PropTypes.oneOf([STATUS.TURN, STATUS.WIN, STATUS.DRAW]),
    board: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NONE])),
    winPatern: PropTypes.arrayOf(PropTypes.number),
};
