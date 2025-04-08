import { BufferedClass } from "redm/BufferedClass";

enum InventoryStructs {
  Unk1,
  Unk2,
  InventoryCategory,
  Unk3,
  ItemHash,
  Unk4,
  Unk5,
  Unk6,
  Unk7,
  Unk8,
  CatalogueType,
  Quantity,
  Unk9,
}

export class RDRInventoryGUID extends BufferedClass {
  constructor() {
    super(0x68);
  }

  get Unk1() {
    return this.view.getUint32(8 * InventoryStructs.Unk1);
  }

  get Unk2() {
    return this.view.getUint32(8 * InventoryStructs.Unk2);
  }

  get ItemCategory() {
    return this.view.getUint32(8 * InventoryStructs.InventoryCategory);
  }

  get Unk3() {
    return this.view.getUint32(8 * InventoryStructs.Unk3);
  }

  get ItemHash() {
    return this.view.getUint32(8 * InventoryStructs.ItemHash);
  }

  get Unk4() {
    return this.view.getUint32(8 * InventoryStructs.Unk4);
  }

  get Unk5() {
    return this.view.getUint32(8 * InventoryStructs.Unk5);
  }

  get Unk6() {
    return this.view.getUint32(8 * InventoryStructs.Unk6);
  }

  get Unk7() {
    return this.view.getUint32(8 * InventoryStructs.Unk7);
  }

  get Unk8() {
    return this.view.getUint32(8 * InventoryStructs.Unk8);
  }

  get CatalogueType() {
    return this.view.getUint32(8 * InventoryStructs.CatalogueType);
  }

  get Quantity() {
    return this.view.getUint32(8 * InventoryStructs.Quantity);
  }

  get Unk9() {
    return this.view.getUint32(8 * InventoryStructs.Unk9);
  }
}
