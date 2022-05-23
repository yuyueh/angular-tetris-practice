import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisPlatformComponent } from './tetris-platform.component';

describe('TetrisPlatformComponent', () => {
    let component: TetrisPlatformComponent;
    let fixture: ComponentFixture<TetrisPlatformComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TetrisPlatformComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TetrisPlatformComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
