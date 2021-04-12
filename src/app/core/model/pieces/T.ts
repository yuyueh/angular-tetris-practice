import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';

const SHAPES_T_Deg0 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 0],
];

const SHAPES_T_Deg90 = [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
];

const SHAPES_T_Deg180 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
];

const SHAPES_T_Deg270 = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
];

const SHAPES_T: Shapes = [
    SHAPES_T_Deg0,
    SHAPES_T_Deg90,
    SHAPES_T_Deg180,
    SHAPES_T_Deg270,
];

export class PieceT extends Piece {
    constructor(x: number, y: number) {
        super(x, y, SHAPES_T);
    }
}
