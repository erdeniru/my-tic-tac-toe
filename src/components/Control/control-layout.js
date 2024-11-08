import stylesGame from '../../game.module.css';
import { CAPTION_RESTART } from '../../constants';
import styles from './control.module.css';

export const ControlLayout = (state) => {
    const { handlerReset } = state;

    return (
        <button
            className={`${stylesGame.btn} ${styles.restart}`}
            onClick={() => handlerReset(state)}
        >
            {CAPTION_RESTART}
        </button>
    );
};
