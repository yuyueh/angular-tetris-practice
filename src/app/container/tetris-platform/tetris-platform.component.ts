import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { TetrisActions } from 'src/app/store/tetris/tetris.actions';

const KeyUp = 'document:keyup';
const KeyDown = 'document:keydown';

@Component({
  selector: 'app-tetris-platform',
  templateUrl: './tetris-platform.component.html',
  styleUrls: ['./tetris-platform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TetrisPlatformComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  @HostListener(`${KeyDown}.arrowUp`)
  keyDownUp() {
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

}
