import { createAction, props } from '@ngrx/store';

export namespace KeyboardActions {
    export const keyDownUp = createAction('[Keyboard] KeyDown Up');
    export const keyDownDown = createAction('[Keyboard] KeyDown Down');
    export const keyDownLeft = createAction('[Keyboard] KeyDown Left');
    export const keyDownRight = createAction('[Keyboard] KeyDown Right');
    export const keyDownA = createAction('[Keyboard] KeyDown A');
    export const keyDownB = createAction('[Keyboard] KeyDown B');
    export const keyDownSelect = createAction('[Keyboard] KeyDown Select');
    export const keyDownStart = createAction('[Keyboard] KeyDown Start');
    export const keyUpUp = createAction('[Keyboard] KeyUp Up');
    export const keyUpDown = createAction('[Keyboard] KeyUp Down');
    export const keyUpLeft = createAction('[Keyboard] KeyUp Left');
    export const keyUpRight = createAction('[Keyboard] KeyUp Right');
    export const keyUpA = createAction('[Keyboard] KeyUp A');
    export const keyUpB = createAction('[Keyboard] KeyUp B');
    export const keyUpSelect = createAction('[Keyboard] KeyUp Select');
    export const keyUpStart = createAction('[Keyboard] KeyUp Start');
}
