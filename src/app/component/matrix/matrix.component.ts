import { AppState } from './../../store/app.state';
import { TetrisSelectors } from './../../store/tetris/tetris.selector';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { KeyboardSelectors } from 'src/app/store/keyboard/keyboard.selector';

@Component({
    selector: 'app-matrix',
    templateUrl: './matrix.component.html',
    styleUrls: ['./matrix.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatrixComponent implements OnInit {
    matrix$ = this._store.pipe(select(TetrisSelectors.selectMatrix));
    keyboard$ = this._store.pipe(select(KeyboardSelectors.selectKeyboard));

    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {}

    trackByFn(index: number, _: any) {
        return index;
    }
}
