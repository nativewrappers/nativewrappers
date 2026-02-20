var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class BitSet {
  static {
    __name(this, "BitSet");
  }
  value;
  constructor(default_value) {
    this.value = default_value ?? 0;
  }
  /**
   * Sets the bit at {@param position} to `1`
   */
  set(position) {
    this.value |= 1 << position;
  }
  /**
   * Sets the bit at {@param position} to `0`
   */
  clear(position) {
    this.value &= ~(1 << position);
  }
  /**
   * Toggles the bit at {@param position}
   */
  toggle(position) {
    this.value ^= 1 << position;
  }
  /**
   * @returns `true` if the bit at {@param position} is set.
   */
  test(position) {
    return this.value & position;
  }
  /**
   * @returns `true` if no bits in the bitset are set, false otherwise.
   */
  isEmpty() {
    return this.value === 0;
  }
}
export {
  BitSet
};
