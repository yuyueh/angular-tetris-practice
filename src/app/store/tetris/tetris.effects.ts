import { GameState } from 'src/app/core/model/game-state.enum';
import { TetrisSelectors } from 'src/app/store/tetris/tetris.selector';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { interval, EMPTY, from, of, merge } from 'rxjs';
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
    skip,
} from 'rxjs/operators';
import { AppState } from '../app.state';
import { TetrisActions } from './tetris.actions';
import { GAME_HEIGHT } from 'src/app/core/util/matrix.util';
import { SoundService } from 'src/app/core/service/sound.service';

const SPEED = 1000;
const ANIMATION_TIME = 25;
const FORWARD_SIDE = new Array(GAME_HEIGHT).fill(undefined).map((_, i) => i);
const THOURGH_AROUND = [...FORWARD_SIDE, ...FORWARD_SIDE.reverse()];

@Injectable()
export class TetrisEffects {
    startGame$ = createEffect(() =>
        this._actions$.pipe(
            // tap(console.log),
            ofType(TetrisActions.start),
            tap(() => this._soundService.start()),
            switchMap(() => interval(SPEED)),
            withLatestFrom(
                this._store.pipe(select(TetrisSelectors.selectTetris))
            ),
            filter(([_, tetris]) => tetris.gameState === GameState.Started),
            map(() => ({
                type: TetrisActions.auto.type,
            })),
            catchError(() => EMPTY)
        )
    );

    movePiece$ = createEffect(
        () =>
            merge(
                this._actions$.pipe(ofType(TetrisActions.moveDown)),
                this._actions$.pipe(ofType(TetrisActions.moveLeft)),
                this._actions$.pipe(ofType(TetrisActions.moveRight)),
                this._actions$.pipe(ofType(TetrisActions.pause)),
                this._actions$.pipe(ofType(TetrisActions.resume))
            ).pipe(tap(() => this._soundService.move())),
        { dispatch: false }
    );

    fallPiece$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(TetrisActions.fall),
                tap(() => this._soundService.fall())
            ),
        { dispatch: false }
    );

    rotatePiece$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(TetrisActions.rotate),
                tap(() => this._soundService.rotate())
            ),
        { dispatch: false }
    );

    gameOver$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(TetrisActions.reset),
                tap(() => this._soundService.gameOver())
            ),
        { dispatch: false }
    );

    restartGame$ = createEffect(() =>
        this._actions$.pipe(
            ofType(TetrisActions.restart),
            tap(() => this._soundService.clear()),
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

    constructor(
        private _actions$: Actions,
        private _store: Store<AppState>,
        private _soundService: SoundService
    ) {}
}
