import { Shape } from './shape';
import { PieceRotation } from "./piece.enum";

export class Piece {
    
    get shape(): Shape {
        return this.shapes[this.rotation];
    }

    constructor(
        public x: number,
        public y: number,
        public shapes: Shape[],
        public rotation: PieceRotation = PieceRotation.Deg0,
    ) {}

    rotate() {
        if (this._isLast()) {
            this.rotation = PieceRotation.Deg0;
        } else {
            this.rotation++;
        }
    }

    private _isLast() {
        return this.rotation >= this.shapes.length - 1;
    }
}