import { GameState } from 'src/app/core/model/game-state.enum';
import { TetrisSelectors } from 'src/app/store/tetris/tetris.selector';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { interval, EMPTY } from 'rxjs';
import {
    switchMap,
    catchError,
    filter,
    tap,
    map,
    withLatestFrom,
    finalize,
} from 'rxjs/operators';
import { AppState } from '../app.state';
import { TetrisActions } from './tetris.actions';

@Injectable()
export class TetrisEffects {
    startGame$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TetrisActions.start.type),
            switchMap(() => interval(1000)),
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

    constructor(private actions$: Actions, private store: Store<AppState>) {}
}
