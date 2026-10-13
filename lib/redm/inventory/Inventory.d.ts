import type { Model } from "../Model";
import { RDRInventoryGUID } from "./InventoryGUID";
import { InventoryIndex, ItemAddReason } from "./InventoryTypes";
declare enum FailReason {
    Success = 0,
    ItemWasntValid = 1,
    NoCharacterGuid = 2,
    NoWardrobeGuid = 3,
    ItemDidntExist = 4,
    FailedToEquip = 5
}
export declare const CHARACTER_HASH: number;
export declare const WARDROBE_HASH: number;
export declare const PLAYER_INVENTORY_ID = InventoryIndex.SinglePlayer;
export declare class RDRInventory {
    GetGuidFromItemId(inventoryId: InventoryIndex, itemData: RDRInventoryGUID | null, category: number, slotId: number): RDRInventoryGUID | null;
    AddItem(inventoryId: InventoryIndex, itemHash: number, amount: number, slotHash: number, inventoryGuid: RDRInventoryGUID, addReason?: ItemAddReason): RDRInventoryGUID | null;
    EquipItemWithGUID(inventoryId: InventoryIndex, itemGUID: RDRInventoryGUID, equipped?: boolean): boolean;
    AddItemToPlayer(itemName: Model, amount: number, slotHash: number): (boolean | FailReason)[];
}
export {};
