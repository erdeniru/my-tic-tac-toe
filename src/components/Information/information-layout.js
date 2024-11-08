import PropTypes from 'prop-types';
import { PlayerLayout } from '../Player/player-layout';
import { STATUS, PLAYER } from '../../constants';
import { MESSAGE_TURN, MESSAGE_CONGRATULATION, MESSAGE_DRAW } from '../../constants';
import styles from './information.module.css';

export const InformationLayout = ({ status, player }) => {
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
            <PlayerLayout player={player} />
        </div>
    );
};

InformationLayout.propTypes = {
    status: PropTypes.oneOf([STATUS.TURN, STATUS.WIN, STATUS.DRAW]),
    player: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NONE]),
};
