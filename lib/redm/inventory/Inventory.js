var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { RDRInventoryGUID } from "./InventoryGUID";
import { InventoryIndex, ItemAddReason } from "./InventoryTypes";
const CHARACTER_HASH = GetHashKey("CHARACTER");
const WARDROBE_HASH = GetHashKey("WARDROBE");
const PLAYER_INVENTORY_ID = InventoryIndex.SinglePlayer;
class RDRInventory {
  static {
    __name(this, "RDRInventory");
  }
  GetGuidFromItemId(inventoryId, itemData, category, slotId) {
    const outInventoryGuid = new RDRInventoryGUID();
    const success = Citizen.invokeNative(
      "0x886DFD3E185C8A89",
      inventoryId,
      itemData?.buffer ?? 0,
      category,
      slotId,
      outInventoryGuid.buffer
    );
    return success ? outInventoryGuid : null;
  }
  AddItem(inventoryId, itemHash, amount, slotHash, inventoryGuid, addReason = ItemAddReason.Default) {
    const itemData = new RDRInventoryGUID();
    const wasAdded = Citizen.invokeNative(
      "0xCB5D11F9508A928D",
      inventoryId,
      itemData.buffer,
      inventoryGuid.buffer,
      itemHash,
      slotHash,
      amount,
      addReason
    );
    return wasAdded ? itemData : null;
  }
  EquipItemWithGUID(inventoryId, itemGUID, equipped = true) {
    return Citizen.invokeNative("0x734311E2852760D0", inventoryId, itemGUID, equipped);
  }
  AddItemToPlayer(itemName, amount, slotHash) {
    const isValid = Citizen.invokeNative("0x6D5D51B188333FD1", itemName.Hash, 0);
    if (!isValid) {
      return [false, 1 /* ItemWasntValid */];
    }
    const characterGuid = this.GetGuidFromItemId(PLAYER_INVENTORY_ID, null, CHARACTER_HASH, 2703302912);
    if (!characterGuid) {
      return [false, 2 /* NoCharacterGuid */];
    }
    const wardrobeGuid = this.GetGuidFromItemId(PLAYER_INVENTORY_ID, characterGuid, WARDROBE_HASH, 1034665895);
    if (!wardrobeGuid) {
      return [false, 3 /* NoWardrobeGuid */];
    }
    const itemGuid = this.AddItem(PLAYER_INVENTORY_ID, itemName.Hash, amount, slotHash, wardrobeGuid);
    if (!itemGuid) {
      return [false, 4 /* ItemDidntExist */];
    }
    const equipped = this.EquipItemWithGUID(PLAYER_INVENTORY_ID, itemGuid, true);
    if (!equipped) {
      return [false, 5 /* FailedToEquip */];
    }
    return [true, 0 /* Success */];
  }
}
export {
  CHARACTER_HASH,
  PLAYER_INVENTORY_ID,
  RDRInventory,
  WARDROBE_HASH
};
