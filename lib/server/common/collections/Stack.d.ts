declare class Stack<T> {
    private items;
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    is_empty(): boolean;
    size(): number;
    clear(): void;
}
