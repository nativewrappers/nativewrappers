export declare class CircularBuffer<T> {
    private buffer;
    private tail;
    private count;
    private max_size;
    constructor(max_size: number);
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    [Symbol.iterator](): Iterator<T>;
    for_each(callback: (item: T, index: number) => void): void;
    average(this: CircularBuffer<number>): number;
    is_empty(): boolean;
    is_full(): boolean;
    size(): number;
    capacity(): number;
    clear(): void;
}
