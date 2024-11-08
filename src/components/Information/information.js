import { useEffect, useState } from 'react';
import { store } from '../../store/store';
import { InformationLayout } from './information-layout';

export const Information = () => {
    const [, setState] = useState(store.getState());

    useEffect(() => store.subscribe(() => setState(store.getState()), []));

    return <InformationLayout />;
};
