import { Keyboard } from './../../core/model/keyboard';
import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export namespace KeyboardSelectors {
    export const selectKeyboard = createSelector(
        (state: AppState) => state.keyboard,
        (k: Keyboard) => k
    );

    export const selectButtonAClicked = createSelector(
        selectKeyboard,
        (state: Keyboard) => state.a
    );

    export const selectButtonBClicked = createSelector(
        selectKeyboard,
        (state: Keyboard) => state.b
    );

    export const selectSelectClicked = createSelector(
        selectKeyboard,
        (state: Keyboard) => state.select
    );

    export const selectStartClicked = createSelector(
        selectKeyboard,
        (state: Keyboard) => state.start
    );

    export const selectArrowClicked = createSelector(
        selectKeyboard,
        (state: Keyboard) => state.down || state.up || state.left || state.right
    );
}
