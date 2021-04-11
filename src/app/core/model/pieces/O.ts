import { Piece } from '../piece';
import { Shapes } from '../shape';

const SHAPES_O_Deg0 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 0, 0]
];

const SHAPES_O: Shapes = [SHAPES_O_Deg0];

export class PieceO extends Piece {
  constructor(x: number, y: number) {
    super(x, y, SHAPES_O);
  }
}
