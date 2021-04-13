import { ImmutableObject } from './../util/common.util';

export type KeyboardButtons =
    | 'up'
    | 'down'
    | 'left'
    | 'right'
    | 'select'
    | 'start'
    | 'a'
    | 'b';

export class Keyboard extends ImmutableObject {
    constructor(
        public readonly up: boolean,
        public readonly down: boolean,
        public readonly left: boolean,
        public readonly right: boolean
    ) {
        super();
    }
}
