import { MatrixUtil } from 'src/app/core/util/matrix.util';
import { PieceUtil } from 'src/app/core/util/piece.util';
import { ArrayUtil, ImmutableObject, notEmpty } from './../util/common.util';
import { Tile } from './tile';
import { Piece } from "./piece";
import { GameState } from './game-state.enum';
import { DeepReadonlyArray } from './types';
import { GAME_HEIGHT, GAME_WIDTH } from '../util/matrix.util';

export class Tetris extends ImmutableObject {
    public readonly isLock: boolean = false;
    public readonly isGameOver: boolean = false;

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
        const matrix = this.current.positionOnGridWithoutOutside.reduce((o, [y, x]) => {
            return ArrayUtil.setNested(o, y, x, new Tile(0));
        }, this.matrix);
    
        return this.set('matrix', matrix);
    }

    drawCurrentPiece(): Tetris {
        const matrix = this.current.positionOnGridWithoutOutside.reduce((o, [y, x]) => {
            return ArrayUtil.setNested(o, y, x, new Tile(1));
        }, this.matrix);

        return this.set('matrix', matrix);
    }

    isCollidedWithLeft(): boolean {
        return this.current.x < 0;
    }

    isCollidedWithRight(): boolean {
        return this.current.positionOnGrid.some(([_, x]) => x >= GAME_WIDTH);
    }

    isCollidedWithBottom(): boolean {
        return this.current.positionOnGrid.some(([y, _]) => y >= GAME_HEIGHT);
    }

    isCollidedWithSolid(): boolean {
        return this.current.positionOnGridWithoutOutside.some(([y, x]) => this.matrix[y][x].isFilled);
    }

    nextPiece(): Tetris {
        const matrix = this.current.positionOnGridWithoutOutside.reduce((o, [y, x]) => {
            return ArrayUtil.setNested(o, y, x, new Tile(1, true));
        }, this.matrix);

        return this.set('isGameOver', this._isGameOver())
                    .set('matrix', this._dropLine(matrix))
                    .set('current', this.next)
                    .set('next', PieceUtil.getRandomPiece());
    }

    private _isGameOver(): boolean {
        return this.current.positionOnGrid.every(([y, _]) => y < 0);
    }

    private _dropLine(matrix: DeepReadonlyArray<Tile[]>): DeepReadonlyArray<Tile[]> {
        const aliveRow = (matrix as Tile[][])
            .map((row) => 
                row.every(col => col.isSolid) ? null : row
            ).filter(notEmpty);

        return new Array(20).fill(undefined).map((_, i) => {
            return (GAME_HEIGHT - i > aliveRow.length) ? MatrixUtil.getDefaultRow() : aliveRow[i - GAME_HEIGHT + aliveRow.length];
        }) as DeepReadonlyArray<Tile[]>;
    }
}