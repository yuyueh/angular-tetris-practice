import { GameState } from 'src/app/core/model/game-state.enum';
import { TetrisSelectors } from 'src/app/store/tetris/tetris.selector';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionCreator, select, Store } from '@ngrx/store';
import { interval, EMPTY, from, of, merge } from 'rxjs';
import {
    switchMap,
    catchError,
    filter,
    tap,
    map,
    withLatestFrom,
    delay,
    concatMap,
    mergeMap,
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

    movePiece$ = this._soundEffectFactory(
        TetrisActions.moveDown,
        TetrisActions.moveLeft,
        TetrisActions.moveRight,
        TetrisActions.pause,
        TetrisActions.resume
    )(() => this._soundService.move());

    fallPiece$ = this._soundEffectFactory(TetrisActions.fall)(() =>
        this._soundService.fall()
    );

    rotatePiece$ = this._soundEffectFactory(TetrisActions.rotate)(() =>
        this._soundService.rotate()
    );

    gameOver$ = this._soundEffectFactory(TetrisActions.reset)(() =>
        this._soundService.gameOver()
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

    private _soundEffectFactory(...actions: ActionCreator[]) {
        return (cb: () => void) => {
            return createEffect(
                () =>
                    merge(
                        ...actions.map((action) =>
                            this._actions$.pipe(ofType(action))
                        )
                    ).pipe(
                        withLatestFrom(
                            this._store.pipe(
                                select(TetrisSelectors.selectTetris)
                            )
                        ),
                        filter(([_, tetris]) => tetris.sound),
                        tap(cb)
                    ),
                { dispatch: false }
            );
        };
    }
}
