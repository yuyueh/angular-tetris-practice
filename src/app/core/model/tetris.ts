import { Tile } from './tile';
import { Piece } from "./piece";
import { GameState } from './game-state.enum';

export interface Tetris {
    matrix: Tile[][];
    current: Piece;
    next: Piece;
    sound: boolean;
    gameState: GameState;
}