import { TetrisEffects } from './tetris/tetris.effects';
import { NgModule } from '@angular/core';
import * as fromTetris from './tetris/tetris.reducer';
import * as fromKeyboard from './keyboard/keyboard.reducer';
import { StoreModule as NgxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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
        EffectsModule.forFeature([TetrisEffects]),
    ],
})
export class StoreModule {}
