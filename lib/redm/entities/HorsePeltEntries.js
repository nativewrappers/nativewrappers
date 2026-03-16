var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { BufferedClass, GetBufferAsHex } from "../BufferedClass";
class HorsePeltEntry {
  static {
    __name(this, "HorsePeltEntry");
  }
  #view;
  #offset;
  constructor(view, index) {
    this.#view = view;
    this.#offset = index + 1 + index * 4;
  }
  /*
   * This will be the itemHash if the pelt when using `SetPeltForHorseByInventoryItem`.
   */
  get ItemHash() {
    return this.#view.getInt32(this.#offset * 8, true);
  }
  /*
   * The albedo hash provided to `SetPeltForHorseByInventoryItem`
   */
  get AlbedoHash() {
    return this.#view.getInt32((this.#offset + 1) * 8, true);
  }
  /*
   * The Normal hash provided to `SetPeltForHorseByInventoryItem`
   */
  get NormalHash() {
    return this.#view.getInt32((this.#offset + 2) * 8, true);
  }
}
class HorsePeltEntries extends BufferedClass {
  static {
    __name(this, "HorsePeltEntries");
  }
  constructor(horse) {
    super(120);
    this.view.setInt8(0, 3);
    Citizen.invokeNative("0x6F43C351A5D51E2F", horse.Handle, this.view, Citizen.resultAsInteger());
  }
  *GetAllPelts() {
    for (let i = 0; i < 3; i++) {
      const entry = this.getPeltEntry(i);
      if (entry.ItemHash === 0) {
        continue;
      }
      yield entry;
    }
  }
  getPeltEntry(index) {
    return new HorsePeltEntry(this.view, index);
  }
}
export {
  HorsePeltEntries
};
