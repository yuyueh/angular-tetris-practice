import { TileValue } from './../../core/model/tile';
import { createAction, props } from '@ngrx/store';

export namespace TetrisActions {
    export const start = createAction('[Tetris] Start');
    export const restart = createAction('[Tetris] Restart');
    export const pause = createAction('[Tetris] Pause');
    export const resume = createAction('[Tetris] Resume');
    export const reset = createAction('[Tetris] Reset');
    export const moveLeft = createAction('[Tetris] MoveLeft');
    export const moveRight = createAction('[Tetris] MoveRight');
    export const moveDown = createAction('[Tetris] MoveDown');
    export const auto = createAction('[Tetris] Auto');
    export const rotate = createAction('[Tetris] Rotate');
    export const setSound = createAction(
        '[Tetris] SetSound',
        props<{ open: boolean }>()
    );
    export const refreshRow = createAction(
        '[Tetris] RefreshRow',
        props<{ row: number; filled: TileValue }>()
    );
    export const fall = createAction('[Tetris] Fall');
}
