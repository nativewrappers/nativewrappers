import type { Model } from "redm/Model";
import { RDRInventoryGUID } from "./InventoryGUID";
import { AddReason, InventoryIndex } from "./InventoryTypes";

enum FailReason {
  Success,
  ItemWasntValid,
  NoCharacterGuid,
  NoWardrobeGuid,
  ItemDidntExist,
  FailedToEquip,
}

export const CHARACTER_HASH = GetHashKey("CHARACTER");
export const WARDROBE_HASH = GetHashKey("WARDROBE");

// TODO: Check if there's any reason to make this configurable, adds an annoying amount of boiler plate
export const PLAYER_INVENTORY_ID = InventoryIndex.SinglePlayer;

export class RDRInventory {
  GetGuidFromItemId(
    inventoryId: InventoryIndex,
    itemData: RDRInventoryGUID | null,
    category: number,
    slotId: number,
  ): RDRInventoryGUID | null {
    const outInventoryGuid = new RDRInventoryGUID();
    const success = Citizen.invokeNative<boolean>(
      "0x886DFD3E185C8A89",
      inventoryId,
      itemData?.buffer ?? 0,
      category,
      slotId,
      outInventoryGuid.buffer,
    );
    return success ? outInventoryGuid : null;
  }

  AddItem(
    inventoryId: InventoryIndex,
    itemHash: number,
    amount: number,
    slotHash: number,
    inventoryGuid: RDRInventoryGUID,
    addReason: AddReason = AddReason.Default,
  ): RDRInventoryGUID | null {
    const itemData = new RDRInventoryGUID();
    const wasAdded = Citizen.invokeNative<boolean>(
      "0xCB5D11F9508A928D",
      inventoryId,
      itemData.buffer,
      inventoryGuid.buffer,
      itemHash,
      slotHash,
      amount,
      addReason,
    );

    return wasAdded ? itemData : null;
  }

  EquipItemWithGUID(inventoryId: InventoryIndex, itemGUID: RDRInventoryGUID, equipped = true) {
    return Citizen.invokeNative<boolean>("0x734311E2852760D0", inventoryId, itemGUID, equipped);
  }

  AddItemToPlayer(itemName: Model, amount: number, slotHash: number) {
    const isValid = Citizen.invokeNative<boolean>("0x6D5D51B188333FD1", itemName.Hash, 0);
    if (!isValid) {
      return [false, FailReason.ItemWasntValid];
    }

    const characterGuid = this.GetGuidFromItemId(PLAYER_INVENTORY_ID, null, CHARACTER_HASH, 0xa1212100);
    if (!characterGuid) {
      return [false, FailReason.NoCharacterGuid];
    }

    const wardrobeGuid = this.GetGuidFromItemId(PLAYER_INVENTORY_ID, characterGuid, WARDROBE_HASH, 0x3dabbfa7);
    if (!wardrobeGuid) {
      return [false, FailReason.NoWardrobeGuid];
    }

    const itemGuid = this.AddItem(PLAYER_INVENTORY_ID, itemName.Hash, amount, slotHash, wardrobeGuid);
    if (!itemGuid) {
      return [false, FailReason.ItemDidntExist];
    }

    const equipped = this.EquipItemWithGUID(PLAYER_INVENTORY_ID, itemGuid, true);
    if (!equipped) {
      return [false, FailReason.FailedToEquip];
    }

    return [true, FailReason.Success];
  }
}
