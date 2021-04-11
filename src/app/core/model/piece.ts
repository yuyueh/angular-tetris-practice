import { Shape, Shapes } from './shape';
import { PieceRotation } from "./piece.enum";
import { ImmutableObject, notEmpty } from '../util/common.util';

type Positions = [number, number];

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
        public readonly shapes: Shapes,
        public readonly rotation: PieceRotation = PieceRotation.Deg0,
    ) {
        super();
    }

    moveDown(): Piece {
        return this.set('y', this.y + 1);
    }

    moveLeft(): Piece {
        return this.set('x', this.x - 1);
    }

    moveRight(): Piece {
        return this.set('x', this.x + 1);
    }

    rotate(): Piece {
        return this._isLast() ?
            this.set('rotation', PieceRotation.Deg0)
            :
            this.set('rotation', this.rotation + 1);
    }

    get positionOnGrid(): Positions[] {
        return this.shape.map<(Positions | undefined)[]>((row, positionY) => 
                row.map((filled, positionX) => (filled ? [ this.x + positionX, this.y + positionY ] : undefined))
            )
            .reduce((o, p) => ([...o, ...p]), [])
            .filter(notEmpty);
    }

    private _isLast() {
        return this.rotation >= this.shapes.length - 1;
    }
}