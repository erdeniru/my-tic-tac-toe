import PropTypes from 'prop-types';
import { PLAYER } from '../../constants';
import styles from './player.module.css';

export const PlayerLayout = ({ player = PLAYER.NONE }) => {
    let classPlayer = '';

    // prettier-ignore
    switch (player) {
        case PLAYER.CROSS: classPlayer = ' ' + styles.bg_x; break;
        case PLAYER.NOUGHT: classPlayer = ' ' + styles.bg_o; break;
        default:
    }

    return <div className={styles.bg + classPlayer}></div>;
};

PlayerLayout.propTypes = {
    player: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NONE]),
};
