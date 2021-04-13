import { AppState } from './../../store/app.state';
import { KeyboardButtons } from './../../core/model/keyboard';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { KeyboardSelectors } from 'src/app/store/keyboard/keyboard.selector';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardComponent {
    arrowClicked$ = this._store.pipe(
        select(KeyboardSelectors.selectArrowClicked)
    );

    buttonAClicked$ = this._store.pipe(
        select(KeyboardSelectors.selectButtonAClicked)
    );

    buttonBClicked$ = this._store.pipe(
        select(KeyboardSelectors.selectButtonBClicked)
    );

    selectClicked$ = this._store.pipe(
        select(KeyboardSelectors.selectSelectClicked)
    );

    startClicked$ = this._store.pipe(
        select(KeyboardSelectors.selectStartClicked)
    );

    @Output() onMouseDown = new EventEmitter<KeyboardButtons>();

    constructor(private _store: Store<AppState>) {}

    onClick(b: KeyboardButtons) {
        this.onMouseDown.emit(b);
    }
}
