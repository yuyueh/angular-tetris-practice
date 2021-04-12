import { DeepReadonlyArray } from '../model/types';

export class ImmutableObject {
    public set<K extends keyof this, V extends this[K]>(
        key: K,
        value: V
    ): this {
        return Object.assign(Object.create(this.constructor.prototype), {
            ...this,
            [key]: value,
        });
    }
}

export function notEmpty<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
}

export namespace ArrayUtil {
    export function set<T>(
        a: DeepReadonlyArray<T>,
        i: number,
        v: T
    ): DeepReadonlyArray<T> {
        return [
            ...a.slice(0, i),
            v,
            ...a.slice(i + 1, a.length),
        ] as DeepReadonlyArray<T>;
    }

    export function setNested<T>(
        a: DeepReadonlyArray<T[]>,
        x: number,
        y: number,
        v: T
    ): DeepReadonlyArray<T[]> {
        return [...a.slice(0, x), set(a[x], y, v), ...a.slice(x + 1, a.length)];
    }
}
