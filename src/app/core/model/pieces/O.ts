import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';

const SHAPES_O: Shapes = [];

SHAPES_O[PieceRotation.Deg0] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 0, 0]
];

export class PieceO extends Piece {
  constructor(x: number, y: number) {
    super(x, y, SHAPES_O);
  }
}
