import { CAPTION_RESTART } from '../../constants';
import { handlerReset } from '../../handlers';
import stylesGame from '../../game.module.css';
import styles from './control.module.css';

export const ControlLayout = () => {
    return (
        <button
            className={`${stylesGame.btn} ${styles.restart}`}
            onClick={() => handlerReset()}
        >
            {CAPTION_RESTART}
        </button>
    );
};
