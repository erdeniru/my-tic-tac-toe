import { useDispatch } from 'react-redux';
import { restartGameAction } from './../../store/action-creators';
import { CAPTION_RESTART } from '../../constants';
import stylesGame from '../../game.module.css';
import styles from './control.module.css';

export const Control = () => {
    const dispatch = useDispatch();

    const onReset = () => {
        dispatch(restartGameAction());
    };

    return (
        <button className={`${stylesGame.btn} ${styles.restart}`} onClick={onReset}>
            {CAPTION_RESTART}
        </button>
    );
};
