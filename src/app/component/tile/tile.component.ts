import { Tile } from './../../core/model/tile';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
} from '@angular/core';
import { DeepReadonlyObject } from 'src/app/core/model/types';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent implements OnChanges {
    @Input() tile!: Readonly<Tile>;

    constructor(private elm: ElementRef, private render: Renderer2) {}

    ngOnChanges(): void {
        if (this.tile.isFilled) {
            this.render.addClass(this.elm.nativeElement, 'filled');
        } else {
            this.render.removeClass(this.elm.nativeElement, 'filled');
        }
    }
}
