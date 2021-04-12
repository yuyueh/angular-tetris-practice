import { Shape, Shapes } from './shape';
import { PieceRotation } from "./piece.enum";
import { ImmutableObject, notEmpty } from '../util/common.util';

type Positions = [number, number];

function removeNegativePosition(p: Positions): boolean {
    return p[0] > -1 && p[1] > -1;
}

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

    moveDown(step: number = 1): Piece {
        return this.set('y', this.y + step);
    }

    moveLeft(step: number = 1): Piece {
        return this.set('x', this.x - step);
    }

    moveRight(step: number = 1): Piece {
        return this.set('x', this.x + step);
    }

    rotate(): Piece {
        return this._isLast() ?
            this.set('rotation', PieceRotation.Deg0)
            :
            this.set('rotation', this.rotation + 1);
    }

    get positionOnGrid(): Positions[] {
        return this.shape.map<(Positions | undefined)[]>((row, positionY) => 
                row.map((filled, positionX) => (filled ? [ this.y + positionY, this.x + positionX ] : undefined))
            )
            .reduce((o, p) => ([...o, ...p]), [])
            .filter(notEmpty);
    }

    get positionOnGridWithoutOutside(): Positions[] {
        return this.positionOnGrid
            .filter(removeNegativePosition);
    }

    get extraLengthOnTheRight(): number {
        return Math.max(...this.positionOnGrid.map(([_, x]) => x)) - 10 + 1;
    }

    private _isLast() {
        return this.rotation >= this.shapes.length - 1;
    }
}