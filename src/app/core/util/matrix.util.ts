import { Tile } from './../model/tile';

export const GAME_WIDTH = 10;
export const GAME_HEIGHT = 20;

export namespace MatrixUtil {

    export function getDefaultRow() {
        return new Array(GAME_WIDTH).fill(new Tile(0));
    }

    export function getStartBoard() {
        return new Array(GAME_HEIGHT).fill(getDefaultRow());
    }
}