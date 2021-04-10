import { PieceI } from '../model/pieces/I';
import { Piece } from "../model/piece";
import { PieceJ } from '../model/pieces/J';
import { PieceL } from '../model/pieces/L';
import { PieceO } from '../model/pieces/O';
import { PieceS } from '../model/pieces/S';
import { PieceT } from '../model/pieces/T';
import { PieceZ } from '../model/pieces/Z';

type Positions = [number, number];

function notEmpty<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
} 

export namespace PieceUtil {
    const SPAWN_POSITION_X = 4;
    const SPAWN_POSITION_Y = -4;
    const available = [
        PieceI,
        PieceJ,
        PieceL,
        PieceO,
        PieceS,
        PieceT,
        PieceZ
    ];

    export function getRandomPiece(): Piece {
        const random = Math.floor(Math.random() * (available.length));
        return new available[random](SPAWN_POSITION_X, SPAWN_POSITION_Y);
    }

    export function getPositionOnGrid(p: Piece): Positions[] {
        return p.shape
            .map<(Positions | undefined)[]>((row, positionY) => 
                row.map((filled, positionX) => (filled ? [ p.x + positionX, p.y + positionY ] : undefined))
            )
            .reduce((o, p) => ([...o, ...p]), [])
            .filter(notEmpty);
    }
}