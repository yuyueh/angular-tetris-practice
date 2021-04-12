import { AppState } from './../../store/app.state';
import { select, Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { TetrisActions } from 'src/app/store/tetris/tetris.actions';
import { TetrisSelectors } from 'src/app/store/tetris/tetris.selector';
import { filter } from 'rxjs/operators';

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
    this.store
      .pipe(
        select(TetrisSelectors.selectTetris),
        filter(t => t.isGameOver)
      ).subscribe(() => {
        this.store.dispatch(TetrisActions.reset());
      });
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
  
  @HostListener(`${KeyDown}.space`)
  keyDownSpace() {
    this.store.dispatch(TetrisActions.fall());
  }

}
