import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';

const SHAPES_S: Shapes = [];

SHAPES_S[PieceRotation.Deg0] = [
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0]
];

SHAPES_S[PieceRotation.Deg90] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [1, 1, 0, 0]
];

export class PieceS extends Piece {
  constructor(x: number, y: number) {
    super(x, y, SHAPES_S);
  }
}
