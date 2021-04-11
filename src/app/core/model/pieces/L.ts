import { Piece } from '../piece';
import { PieceRotation } from '../piece.enum';
import { Shapes } from '../shape';



const SHAPES_L_Deg0 = [
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 0, 0]
];

const SHAPES_L_Deg90 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 0, 0, 0]
];

const SHAPES_L_Deg180 = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0]
];

const SHAPES_L_Deg270 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [1, 1, 1, 0]
];

const SHAPES_L: Shapes = [
  SHAPES_L_Deg0,
SHAPES_L_Deg90,
SHAPES_L_Deg180,
SHAPES_L_Deg270,
];

export class PieceL extends Piece {
  constructor(x: number, y: number) {
    super(x, y, SHAPES_L);
  }
}
