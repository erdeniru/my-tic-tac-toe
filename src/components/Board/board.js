import { useSelector, useDispatch } from 'react-redux';
import { selectBoard, selectStatus, selectWinPattern } from '../../store/selectors';
import { setBoardCellAction } from '../../store/action-creators';
import { STATUS, PLAYER } from '../../constants';
import styles from './board.module.css';

export const Board = () => {
    const status = useSelector(selectStatus);
    const board = useSelector(selectBoard);
    const winPattern = useSelector(selectWinPattern);

    const dispatch = useDispatch();

    const isGameOver = status === STATUS.WIN || status === STATUS.DRAW;

    const onCellClick = (indexCell) => {
        dispatch(setBoardCellAction(indexCell));
    };

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
                        ? { onClick: () => onCellClick(index) }
                        : {})}
                ></div>
            ))}
        </div>
    );
};
