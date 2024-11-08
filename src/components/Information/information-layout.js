import { store } from '../../store/store';
import { STATUS } from '../../constants';
import { MESSAGE_TURN, MESSAGE_CONGRATULATION, MESSAGE_DRAW } from '../../constants';
import { PlayerLayout } from '../Player/player-layout';
import styles from './information.module.css';

export const InformationLayout = () => {
    const { currentPlayer, status } = store.getState();

    let message = '';
    let classInformation = '';

    if (status === STATUS.TURN) {
        message = MESSAGE_TURN;
        classInformation = styles.content__message;
    } else if (status === STATUS.WIN) {
        message = MESSAGE_CONGRATULATION;
        classInformation = styles.content__congratulation;
    } else if (status === STATUS.DRAW) {
        message = MESSAGE_DRAW;
        classInformation = styles.content__draw;
    }

    return (
        <div className={styles.content}>
            <div className={classInformation}>{message}</div>
            <PlayerLayout player={currentPlayer} />
        </div>
    );
};
