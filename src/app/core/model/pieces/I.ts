import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';

const SHAPES_I: Shapes = [];

SHAPES_I[PieceRotation.Deg0] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1]
];

SHAPES_I[PieceRotation.Deg90] = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0]
];

export class PieceI extends Piece {
  constructor(x: number, y: number) {
    super(x, y, SHAPES_I);
  }
}
