import { NgModule } from '@angular/core';
import * as fromTetris from './tetris/tetris.reducer';
import { StoreModule as NgxStoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    NgxStoreModule.forFeature(fromTetris.FEATURE_KEY, fromTetris.tetrisReducer)
  ]
})
export class StoreModule { }
