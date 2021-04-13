import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MatrixComponent } from './component/matrix/matrix.component';
import { TileComponent } from './component/tile/tile.component';
import { TetrisPlatformComponent } from './container/tetris-platform/tetris-platform.component';
import { StoreModule } from './store/store.module';
import { StoreModule as NgxStoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        AppComponent,
        MatrixComponent,
        TileComponent,
        TetrisPlatformComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        NgxStoreModule.forRoot({}),
        EffectsModule.forRoot(),
        StoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
