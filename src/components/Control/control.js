import { handlerReset } from '../../handlers';
import { ControlLayout } from './control-layout';

export const Control = (state) => {
    const controlState = { ...state, handlerReset };

    return <ControlLayout {...controlState}></ControlLayout>;
};
