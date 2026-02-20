/**
 * A basic bitset wrapper to make some bitset code reusable
 */
export declare class BitSet<T extends number> {
    private value;
    constructor(default_value?: T);
    /**
     * Sets the bit at {@param position} to `1`
     */
    set(position: number): void;
    /**
     * Sets the bit at {@param position} to `0`
     */
    clear(position: number): void;
    /**
     * Toggles the bit at {@param position}
     */
    toggle(position: number): void;
    /**
     * @returns `true` if the bit at {@param position} is set.
     */
    test(position: number): number;
    /**
     * @returns `true` if no bits in the bitset are set, false otherwise.
     */
    isEmpty(): boolean;
}
