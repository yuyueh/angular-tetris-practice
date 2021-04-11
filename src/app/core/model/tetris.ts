import { ArrayUtil, ImmutableObject } from './../util/common.util';
import { Tile } from './tile';
import { Piece } from "./piece";
import { GameState } from './game-state.enum';
import { DeepReadonlyArray } from './types';

export class Tetris extends ImmutableObject {
    constructor(
        public readonly matrix: DeepReadonlyArray<Tile[]>,
        public readonly current: Piece,
        public readonly next: Piece,
        public readonly sound: boolean,
        public readonly gameState: GameState,
    ) {
        super();
    }

    clearCurrentPiece(): Tetris {
        const matrix = this.current.positionOnGrid.reduce((o, [x, y]) => {
            if (x < 0 || y < 0) {
                return o;
            } else {
                return ArrayUtil.setNested(o, y, x, new Tile(0));
            }
        }, this.clone().matrix);
    
        return this.set('matrix', matrix);
    }

    drawCurrentPiece(): Tetris {
        const matrix = this.current.positionOnGrid.reduce((o, [x, y]) => {
            if (x < 0 || y < 0) {
                return o;
            } else {
                // console.log(ArrayUtil.setNested(o, y, x, new Tile(1)));
                return ArrayUtil.setNested(o, y, x, new Tile(1));
            }
        }, this.clone().matrix);

        return this.set('matrix', matrix);
    }
}