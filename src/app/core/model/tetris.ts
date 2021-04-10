import { ImmutableObject } from './../util/common.util';
import { Tile } from './tile';
import { Piece } from "./piece";
import { GameState } from './game-state.enum';

export class Tetris extends ImmutableObject {
    constructor(
        public readonly matrix: Tile[][],
        public readonly current: Piece,
        public readonly next: Piece,
        public readonly sound: boolean,
        public readonly gameState: GameState,
    ) {
        super();
    }
}