export type TileValue = 0 | 1;

export class Tile {
    constructor(
        private _value: TileValue,
        public readonly isSolid: boolean = false,
    ) {}

    get isFilled(): boolean {
        return this._value === 1
    }
}