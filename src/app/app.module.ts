import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MatrixComponent } from './component/matrix/matrix.component';
import { TileComponent } from './component/tile/tile.component';
import { TetrisPlatformComponent } from './container/tetris-platform/tetris-platform.component';
import { tetrisReducer } from './store/tetris/tetris.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    TileComponent,
    TetrisPlatformComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({ tetris: tetrisReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
