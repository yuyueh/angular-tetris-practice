import { Shape } from './shape';
import { PieceRotation } from "./piece.enum";
import { ImmutableObject } from '../util/common.util';

export class Piece extends ImmutableObject {

    get positions(): [number, number] {
        return [this.x, this.y];
    }
    
    get shape(): Shape {
        return this.shapes[this.rotation];
    }

    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly shapes: Shape[],
        public readonly rotation: PieceRotation = PieceRotation.Deg0,
    ) {
        super();
    }

    moveDown(): Piece {
        return this.set('x', 3);
    }

    rotate(): Piece {
        return this._isLast() ?
            this.set('rotation', PieceRotation.Deg0)
            :
            this.set('rotation', this.rotation + 1);
    }

    private _isLast() {
        return this.rotation >= this.shapes.length - 1;
    }
}