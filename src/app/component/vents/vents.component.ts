import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vents',
    templateUrl: './vents.component.html',
    styleUrls: ['./vents.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VentsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
