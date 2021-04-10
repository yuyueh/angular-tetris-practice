import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, HostListener, OnInit } from '@angular/core';
import { TetrisActions } from 'src/app/store/tetris/tetris.actions';

const KeyUp = 'document:keyup';
const KeyDown = 'document:keydown';

@Component({
  selector: 'app-tetris-platform',
  templateUrl: './tetris-platform.component.html',
  styleUrls: ['./tetris-platform.component.scss']
})
export class TetrisPlatformComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  @HostListener(`${KeyDown}.arrowDown`)
  keyDownDown() {
    this.store.dispatch(TetrisActions.moveDown());
  }

}
