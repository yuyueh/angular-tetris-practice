import { Tetris } from 'src/app/core/model/tetris';
import { AppState } from './../app.state';
import { createSelector, select } from '@ngrx/store';

export namespace TetrisSelectors {
    // export const selectTetris = createSelector((state: AppState) => state.tetris);

    export const selectTetris = createSelector(
        (state: AppState) => state.tetris,
        (tetris:Tetris) => tetris
    );
    
    export const selectCurrent = createSelector(
        selectTetris,
        (state: Tetris) => state.current
    );

    export const selectMatrix = createSelector(
        selectTetris,
        (state: Tetris) => state.matrix
    );
}