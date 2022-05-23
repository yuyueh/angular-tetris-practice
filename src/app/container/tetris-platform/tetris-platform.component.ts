import { KeyboardButtons } from './../../core/model/keyboard';
import { GameState } from 'src/app/core/model/game-state.enum';
import { AppState } from './../../store/app.state';
import { select, Store } from '@ngrx/store';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    OnInit,
} from '@angular/core';
import { TetrisActions } from 'src/app/store/tetris/tetris.actions';
import { TetrisSelectors } from 'src/app/store/tetris/tetris.selector';
import { filter, first, pluck, tap } from 'rxjs/operators';
import { KeyboardActions } from 'src/app/store/keyboard/keyboard.actions';

const KeyUp = 'document:keyup';
const KeyDown = 'document:keydown';

@Component({
    selector: 'app-tetris-platform',
    templateUrl: './tetris-platform.component.html',
    styleUrls: ['./tetris-platform.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TetrisPlatformComponent implements OnInit {
    private _tetris$ = this._store.pipe(select(TetrisSelectors.selectTetris));

    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store.dispatch(TetrisActions.start());

        this._tetris$
            .pipe(filter((t) => t.gameState === GameState.Over))
            .subscribe((t) => {
                this._store.dispatch(TetrisActions.reset());
            });
    }

    @HostListener(`${KeyDown}.b`)
    keyDownB() {
        this._store.dispatch(KeyboardActions.keyDownB());
        this._store.dispatch(TetrisActions.rotate());
    }

    @HostListener(`${KeyDown}.arrowUp`)
    keyDownUp() {
        this._store.dispatch(KeyboardActions.keyDownUp());
        this._store.dispatch(TetrisActions.rotate());
    }

    @HostListener(`${KeyDown}.arrowDown`)
    keyDownDown() {
        this._store.dispatch(KeyboardActions.keyDownDown());
        this._store.dispatch(TetrisActions.moveDown());
    }

    @HostListener(`${KeyDown}.arrowLeft`)
    keyDownLeft() {
        this._store.dispatch(KeyboardActions.keyDownLeft());
        this._store.dispatch(TetrisActions.moveLeft());
    }

    @HostListener(`${KeyDown}.arrowRight`)
    keyDownRight() {
        this._store.dispatch(KeyboardActions.keyDownRight());
        this._store.dispatch(TetrisActions.moveRight());
    }

    @HostListener(`${KeyDown}.a`)
    @HostListener(`${KeyDown}.space`)
    keyDownSpace() {
        this._store.dispatch(KeyboardActions.keyDownA());
        this._store.dispatch(TetrisActions.fall());
    }

    @HostListener(`${KeyDown}.r`)
    keyDownRestart() {
        this._store.dispatch(KeyboardActions.keyDownStart());
        this._store.dispatch(TetrisActions.restart());
    }

    @HostListener(`${KeyDown}.p`)
    keyDownPause() {
        this._store.dispatch(KeyboardActions.keyDownSelect());
        this._tetris$.pipe(first(), pluck('isLock')).subscribe((lock) => {
            lock
                ? this._store.dispatch(TetrisActions.resume())
                : this._store.dispatch(TetrisActions.pause());
        });
    }

    keyUpA() {
        this._store.dispatch(KeyboardActions.keyUpA());
    }

    @HostListener(`${KeyUp}.b`)
    keyUpB() {
        this._store.dispatch(KeyboardActions.keyUpB());
    }

    @HostListener(`${KeyUp}.arrowUp`)
    keyUpUp() {
        this._store.dispatch(KeyboardActions.keyUpUp());
    }

    @HostListener(`${KeyUp}.arrowDown`)
    keyUpDown() {
        this._store.dispatch(KeyboardActions.keyUpDown());
    }

    @HostListener(`${KeyUp}.arrowLeft`)
    keyUpLeft() {
        this._store.dispatch(KeyboardActions.keyUpLeft());
    }

    @HostListener(`${KeyUp}.arrowRight`)
    keyUpRight() {
        this._store.dispatch(KeyboardActions.keyUpRight());
    }

    @HostListener(`${KeyUp}.a`)
    @HostListener(`${KeyUp}.space`)
    keyUpSpace() {
        this._store.dispatch(KeyboardActions.keyUpA());
    }

    @HostListener(`${KeyUp}.r`)
    keyUpRestart() {
        this._store.dispatch(KeyboardActions.keyUpStart());
    }

    @HostListener(`${KeyUp}.p`)
    keyUpPause() {
        this._store.dispatch(KeyboardActions.keyUpSelect());
    }

    onMouseDown(b: KeyboardButtons) {
        console.log(b);
    }
}
