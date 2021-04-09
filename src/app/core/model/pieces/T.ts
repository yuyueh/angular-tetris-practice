import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';

const SHAPES_T: Shapes = [];

SHAPES_T[PieceRotation.Deg0] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 1, 0]
];

SHAPES_T[PieceRotation.Deg90] = [
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 0]
];

SHAPES_T[PieceRotation.Deg180] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0]
];

SHAPES_T[PieceRotation.Deg270] = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0]
];

export class PieceT extends Piece {
  constructor(x: number, y: number) {
    super(x, y, SHAPES_T);
  }
}