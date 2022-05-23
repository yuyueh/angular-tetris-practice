import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';

const SHAPES_J_Deg0 = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
];

const SHAPES_J_Deg90 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 0],
];

const SHAPES_J_Deg180 = [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
];

const SHAPES_J_Deg270 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
];

const SHAPES_J: Shapes = [
    SHAPES_J_Deg0,
    SHAPES_J_Deg90,
    SHAPES_J_Deg180,
    SHAPES_J_Deg270,
];

export class PieceJ extends Piece {
    constructor(x: number, y: number) {
        super(x, y, SHAPES_J);
    }
}
