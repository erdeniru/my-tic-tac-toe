import { store } from '../store/store';
import { RESTART_GAME } from '../store/actions';

export const handlerReset = () => {
    store.dispatch({ type: RESTART_GAME });
};
