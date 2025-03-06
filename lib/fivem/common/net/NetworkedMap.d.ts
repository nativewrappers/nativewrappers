type ChangeListener<V> = (value: V) => void;
/**
 * not ready to be used just thoughts right now
 */
export declare class NetworkedMap<K, V> extends Map<K, V> {
    #private;
    constructor(syncName: string, initialValue?: [K, V][]);
    get SyncName(): string;
    private onPlayerDropped;
    resync(source: number): void;
    addSubscriber(source: number): void;
    removeSubscriber(sub: number): boolean;
    hasSubscriber(sub: number): boolean;
    subscriberCount(): number;
    private handleSync;
    listenForChange(key: K, fn: ChangeListener<V>): void;
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
