import { Tile } from './../../core/model/tile';
import { AppState } from './../../store/app.state';
import { TetrisSelectors } from './../../store/tetris/tetris.selector';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TetrisActions } from 'src/app/store/tetris/tetris.actions';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatrixComponent implements OnInit {
  matrix$ = this.store.pipe(select(TetrisSelectors.selectMatrix));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(TetrisActions.start());
    this.store.dispatch(TetrisActions.setSound({open: false}));

  }

  trackByFn(index: number, _: any) {
    return index;
  }

}
