import { ImmutableObject } from './../util/common.util';

export type KeyboardButtons = keyof Keyboard;

export class Keyboard extends ImmutableObject {
    public readonly up: boolean = false;
    public readonly down: boolean = false;
    public readonly left: boolean = false;
    public readonly right: boolean = false;
    public readonly select: boolean = false;
    public readonly start: boolean = false;
    public readonly a: boolean = false;
    public readonly b: boolean = false;

    constructor() {
        super();
    }
}
