import { KeyboardButtons } from './../../core/model/keyboard';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {
    @Output() onMouseDown = new EventEmitter<KeyboardButtons>();

    constructor() {}

    onClick(b: KeyboardButtons) {
        this.onMouseDown.emit(b);
    }
}
