import { NgModule } from '@angular/core';
import * as fromTetris from './tetris/tetris.reducer';
import * as fromKeyboard from './keyboard/keyboard.reducer';
import { StoreModule as NgxStoreModule } from '@ngrx/store';

@NgModule({
    imports: [
        NgxStoreModule.forFeature(
            fromTetris.FEATURE_KEY,
            fromTetris.tetrisReducer
        ),
        NgxStoreModule.forFeature(
            fromKeyboard.FEATURE_KEY,
            fromKeyboard.keyboardReducer
        ),
    ],
})
export class StoreModule {}
