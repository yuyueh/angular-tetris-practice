import { Tile } from './../model/tile';

export namespace MatrixUtil {
    const GAME_WIDTH = 10;
    const GAME_HEIGHT = 20;

    export function getStartBoard() {
        return new Array(GAME_HEIGHT).fill(new Array(GAME_WIDTH).fill(new Tile(0)))
    }
}