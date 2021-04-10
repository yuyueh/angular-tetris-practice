export class ImmutableObject {
    public set<K extends keyof this, V extends this[K]>(key: K, value: V): this {
        return Object.assign(Object.create(this.constructor.prototype), { ...this, [key]: value });
    }
}