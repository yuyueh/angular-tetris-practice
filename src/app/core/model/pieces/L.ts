import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';

const SHAPES_L: Shapes = [];

SHAPES_L[PieceRotation.Deg0] = [
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 0, 0]
];

SHAPES_L[PieceRotation.Deg90] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 0, 0, 0]
];

SHAPES_L[PieceRotation.Deg180] = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0]
];

SHAPES_L[PieceRotation.Deg270] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [1, 1, 1, 0]
];

export class PieceL extends Piece {
  constructor(x: number, y: number) {
    super(x, y, SHAPES_L);
  }
}
