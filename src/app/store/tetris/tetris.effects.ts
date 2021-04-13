import { GameState } from 'src/app/core/model/game-state.enum';
import { TetrisSelectors } from 'src/app/store/tetris/tetris.selector';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { interval, EMPTY, from, of } from 'rxjs';
import {
    switchMap,
    catchError,
    filter,
    tap,
    map,
    withLatestFrom,
    finalize,
    delay,
    concatMap,
    mergeMap,
} from 'rxjs/operators';
import { AppState } from '../app.state';
import { TetrisActions } from './tetris.actions';
import { GAME_HEIGHT } from 'src/app/core/util/matrix.util';
import { ArrayUtil } from 'src/app/core/util/common.util';

const SPEED = 1000;
const ANIMATION_TIME = 25;
const FORWARD_SIDE = new Array(GAME_HEIGHT).fill(undefined).map((_, i) => i);
const THOURGH_AROUND = [...FORWARD_SIDE, ...FORWARD_SIDE.reverse()];

@Injectable()
export class TetrisEffects {
    startGame$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TetrisActions.start.type),
            switchMap(() => interval(SPEED)),
            withLatestFrom(
                this.store.pipe(select(TetrisSelectors.selectTetris))
            ),
            filter(([_, tetris]) => tetris.gameState === GameState.Started),
            map(() => ({
                type: TetrisActions.moveDown.type,
            })),
            catchError(() => EMPTY)
        )
    );

    restartGame$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TetrisActions.restart.type),
            switchMap(() => from(THOURGH_AROUND)),
            concatMap((item) => of(item).pipe(delay(ANIMATION_TIME))),
            mergeMap((row, i) => {
                const index = i % (GAME_HEIGHT * 2);
                const isLast = index === GAME_HEIGHT * 2 - 1;
                const isForwardSide = GAME_HEIGHT > index;
                const actions = [
                    TetrisActions.refreshRow({
                        row,
                        filled: isForwardSide ? 1 : 0,
                    }),
                ];

                return isLast ? [...actions, TetrisActions.start()] : actions;
            }),
            catchError(() => EMPTY)
        )
    );

    constructor(private actions$: Actions, private store: Store<AppState>) {}
}
