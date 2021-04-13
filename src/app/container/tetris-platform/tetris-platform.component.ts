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
    private _tetris$ = this.store.pipe(select(TetrisSelectors.selectTetris));

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.store.dispatch(TetrisActions.start());

        this._tetris$
            .pipe(filter((t) => t.gameState === GameState.Over))
            .subscribe((t) => {
                this.store.dispatch(TetrisActions.reset());
            });
    }

    @HostListener(`${KeyDown}.arrowUp`)
    keyDownUp() {
        this.store.dispatch(KeyboardActions.set());
        this.store.dispatch(TetrisActions.rotate());
    }

    @HostListener(`${KeyDown}.arrowDown`)
    keyDownDown() {
        this.store.dispatch(TetrisActions.moveDown());
    }

    @HostListener(`${KeyDown}.arrowLeft`)
    keyDownLeft() {
        this.store.dispatch(TetrisActions.moveLeft());
    }

    @HostListener(`${KeyDown}.arrowRight`)
    keyDownRight() {
        this.store.dispatch(TetrisActions.moveRight());
    }

    @HostListener(`${KeyDown}.space`)
    keyDownSpace() {
        this.store.dispatch(TetrisActions.fall());
    }

    @HostListener(`${KeyDown}.esc`)
    keyDownEsc() {
        this.store.dispatch(TetrisActions.restart());
    }

    @HostListener(`${KeyDown}.enter`)
    keyDownEnter() {
        this._tetris$.pipe(first(), pluck('isLock')).subscribe((lock) => {
            lock
                ? this.store.dispatch(TetrisActions.resume())
                : this.store.dispatch(TetrisActions.pause());
        });
    }
}
