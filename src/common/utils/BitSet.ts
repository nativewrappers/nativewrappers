/**
 * A basic bitset wrapper to make some bitset code reusable
 */
export class BitSet<T extends number> {
  private value: number | T;

  constructor(default_value?: T) {
    this.value = default_value ?? 0;
  }

  /**
   * Sets the bit at {@param position} to `1`
   */
  set(position: number) {
    this.value |= 1 << position;
  }

  /**
   * Sets the bit at {@param position} to `0`
   */
  clear(position: number) {
    this.value &= ~(1 << position);
  }

  /**
   * Toggles the bit at {@param position}
   */
  toggle(position: number) {
    this.value ^= 1 << position;
  }

  /**
   * @returns `true` if the bit at {@param position} is set.
   */
  test(position: number) {
    return this.value & position;
  }

  /**
   * @returns `true` if no bits in the bitset are set, false otherwise.
   */
  isEmpty() {
    return this.value === 0;
  }
}
