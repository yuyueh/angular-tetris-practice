import { Keyboard } from './../core/model/keyboard';
import { Tetris } from 'src/app/core/model/tetris';

export interface AppState {
    tetris: Tetris;
    keyboard: Keyboard;
}
