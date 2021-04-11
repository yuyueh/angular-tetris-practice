import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';



const SHAPES_I_Deg0 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1]
];

const SHAPES_I_Deg90 = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0]
];

const SHAPES_I: Shapes = [SHAPES_I_Deg0,
  SHAPES_I_Deg90];

export class PieceI extends Piece {
  constructor(x: number, y: number) {
    super(x, y, SHAPES_I);
  }
}
