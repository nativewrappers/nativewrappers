declare enum MapChangeType {
    SubValueChanged = 0,
    Add = 1,
    Remove = 2,
    Reset = 3,
    Init = 4,
    Resync = 5
}
type MapChanges<K, V> = [MapChangeType, K?, V?] | [MapChangeType.SubValueChanged, K, string, any];
type ChangeListener<V> = (value: V | undefined) => void;
/**
 * not ready to be used just thoughts right now
 */
export declare class NetworkedMap<K, V> extends Map<K, V> {
    #private;
    constructor(syncName: string);
    initialize(initialValue: [K, V][]): void;
    get SyncName(): string;
    private onPlayerDropped;
    resync(source: number): void;
    addSubscriber(source: number): void;
    removeSubscriber(sub: number): boolean;
    hasSubscriber(sub: number): boolean;
    subscriberCount(): number;
    protected handleSync(data: MapChanges<K, V>[]): void;
    listenForChange(key: K, fn: ChangeListener<V | undefined>): void;
    set(key: K, value: V): this;
    clear(): void;
    delete(key: K): boolean;
    networkTick(): void;
    [Symbol.dispose](): void;
    /**
     * Unregisters from the tick handler and removes the event listener
     */
    dispose(): void;
    get [Symbol.toStringTag](): string;
}
export {};
