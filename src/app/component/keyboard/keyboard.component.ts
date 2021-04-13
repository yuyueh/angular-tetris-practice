import { KeyboardButtons } from './../../core/model/keyboard';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardComponent {
    @Output() onMouseDown = new EventEmitter<KeyboardButtons>();

    constructor() {}

    onClick(b: KeyboardButtons) {
        this.onMouseDown.emit(b);
    }
}
