import { Tile, TileValue } from './../model/tile';

export const GAME_WIDTH = 10;
export const GAME_HEIGHT = 20;

export namespace MatrixUtil {
    export function getDefaultRow(filled: TileValue = 0) {
        return new Array(GAME_WIDTH).fill(new Tile(filled));
    }

    export function getStartBoard() {
        return new Array(GAME_HEIGHT).fill(getDefaultRow());
    }
}
