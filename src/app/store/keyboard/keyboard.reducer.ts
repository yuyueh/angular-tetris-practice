import { Action, createReducer, on } from '@ngrx/store';
import { KeyboardActions } from './keyboard.actions';
import { Keyboard } from 'src/app/core/model/keyboard';

export const FEATURE_KEY = 'keyboard';

export const initialState: Keyboard = new Keyboard();

const keyDownUpReducer = on(KeyboardActions.keyDownUp, (state: Keyboard) => {
    return state.set('up', true);
});

const keyDownDownReducer = on(
    KeyboardActions.keyDownDown,
    (state: Keyboard) => {
        return state.set('up', true);
    }
);

const keyDownLeftReducer = on(
    KeyboardActions.keyDownLeft,
    (state: Keyboard) => {
        return state.set('up', true);
    }
);

const keyDownRightReducer = on(
    KeyboardActions.keyDownRight,
    (state: Keyboard) => {
        return state.set('up', true);
    }
);

const keyDownAReducer = on(KeyboardActions.keyDownA, (state: Keyboard) => {
    return state.set('up', true);
});

const keyDownBReducer = on(KeyboardActions.keyDownB, (state: Keyboard) => {
    return state.set('up', true);
});

const keyDownSelectReducer = on(
    KeyboardActions.keyDownSelect,
    (state: Keyboard) => {
        return state.set('up', true);
    }
);

const keyDownStartReducer = on(
    KeyboardActions.keyDownStart,
    (state: Keyboard) => {
        return state.set('up', true);
    }
);

const keyUpUpReducer = on(KeyboardActions.keyUpUp, (state: Keyboard) => {
    return state.set('up', true);
});

const keyUpDownReducer = on(KeyboardActions.keyUpDown, (state: Keyboard) => {
    return state.set('up', true);
});

const keyUpLeftReducer = on(KeyboardActions.keyUpLeft, (state: Keyboard) => {
    return state.set('up', true);
});

const keyUpRightReducer = on(KeyboardActions.keyUpRight, (state: Keyboard) => {
    return state.set('up', true);
});

const keyUpAReducer = on(KeyboardActions.keyUpA, (state: Keyboard) => {
    return state.set('up', true);
});

const keyUpBReducer = on(KeyboardActions.keyUpB, (state: Keyboard) => {
    return state.set('up', true);
});

const keyUpSelectReducer = on(
    KeyboardActions.keyUpSelect,
    (state: Keyboard) => {
        return state.set('up', true);
    }
);

const keyUpStartReducer = on(KeyboardActions.keyUpStart, (state: Keyboard) => {
    return state.set('up', true);
});

const _keyboardReducer = createReducer(
    initialState,
    keyDownUpReducer,
    keyDownDownReducer,
    keyDownLeftReducer,
    keyDownRightReducer,
    keyDownAReducer,
    keyDownBReducer,
    keyDownSelectReducer,
    keyDownStartReducer,
    keyUpUpReducer,
    keyUpDownReducer,
    keyUpLeftReducer,
    keyUpRightReducer,
    keyUpAReducer,
    keyUpBReducer,
    keyUpSelectReducer,
    keyUpStartReducer
);

export function keyboardReducer(state: Keyboard | undefined, action: Action) {
    return _keyboardReducer(state, action);
}
