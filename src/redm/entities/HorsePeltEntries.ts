import { BufferedClass, GetBufferAsHex } from "redm/BufferedClass";
import type { Ped } from "./Ped";

class HorsePeltEntry {
  #view: DataView;
  #offset: number;
  constructor(view: DataView, index: number) {
    this.#view = view;
    // offset by 1 byte, as the amount of pelt skins we have will be the first byte
    // offset indexs by 4 to account for padding
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

/*
 * NOTE: The ped pelts won't be added if the player is joining, even though the pelt will
 * be on its back, you should manually sync the pelts if you want them to be added back.
 */
export class HorsePeltEntries extends BufferedClass {
  constructor(horse: Ped) {
    // 128 bytes, 8 bytes for the amount + 24 per element + 40 * 3 of padding
    super(0x78);

    // the native takes in the first 8 bytes of the struct to tell how many pelts we want to search for, we just set it to 3 (max)
    this.view.setInt8(0, 3);

    // _GET_CARRIED_PELT_SKINS
    Citizen.invokeNative<number>("0x6F43C351A5D51E2F", horse.Handle, this.view, Citizen.resultAsInteger());
  }

  *GetAllPelts() {
    for (let i = 0; i < 3; i++) {
      const entry = this.getPeltEntry(i);
      // if the entry doesn't exist the ItemHash will be 0, so we ignore these
      if (entry.ItemHash === 0) {
        continue;
      }
      yield entry;
    }
  }

  getPeltEntry(index: number) {
    return new HorsePeltEntry(this.view, index);
  }
}
