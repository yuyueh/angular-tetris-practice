import { Action, createReducer, on } from '@ngrx/store';
import { KeyboardActions } from './keyboard.actions';
import { Keyboard } from 'src/app/core/model/keyboard';

export const FEATURE_KEY = 'keyboard';

export const initialState: Keyboard = new Keyboard(false, false, false, false);

const setReducer = on(KeyboardActions.set, (state: Keyboard) => {
    return state.set('up', true);
});

const _keyboardReducer = createReducer(initialState, setReducer);

export function keyboardReducer(state: Keyboard | undefined, action: Action) {
    return _keyboardReducer(state, action);
}
