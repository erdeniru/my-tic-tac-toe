import { useEffect, useState } from 'react';
import { BoardLayout } from './board-layout';
import { store } from '../../store/store';

export const Board = () => {
    const [, setState] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setState(store.getState()));
        return () => {
            unsubscribe();
        };
    }, []);

    return <BoardLayout />;
};
