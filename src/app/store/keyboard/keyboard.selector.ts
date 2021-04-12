import { Keyboard } from './../../core/model/keyboard';
import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export namespace KeyboardSelectors {
    export const selectKeyboard = createSelector(
        (state: AppState) => state.keyboard,
        (k: Keyboard) => k
    );
}
