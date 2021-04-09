import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';

const SHAPES_J: Shapes = [];

SHAPES_J[PieceRotation.Deg0] = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
];

SHAPES_J[PieceRotation.Deg90] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 0, 1, 0]
];

SHAPES_J[PieceRotation.Deg180] = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0]
];

SHAPES_J[PieceRotation.Deg270] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 1, 0]
];

export class PieceJ extends Piece {
  constructor(x: number, y: number) {
    super(x, y, SHAPES_J);
  }
}
