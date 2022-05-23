import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';

const SHAPES_Z_Deg0 = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
];

const SHAPES_Z_Deg90 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
];

const SHAPES_Z: Shapes = [SHAPES_Z_Deg0, SHAPES_Z_Deg90];

export class PieceZ extends Piece {
    constructor(x: number, y: number) {
        super(x, y, SHAPES_Z);
    }
}
