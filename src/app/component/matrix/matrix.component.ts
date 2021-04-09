import { AppState } from './../../store/app.state';
import { TetrisSelectors } from './../../store/tetris/tetris.selector';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TetrisActions } from 'src/app/store/tetris/tetris.actions';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {
  current$ = this.store.pipe(select(TetrisSelectors.selectCurrent));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(TetrisActions.start());
    this.store.dispatch(TetrisActions.setSound({open: false}));

  }

}
