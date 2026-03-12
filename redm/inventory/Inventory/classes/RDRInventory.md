[@nativewrappers/fivem](../../../../README.md) / [redm/inventory/Inventory](../README.md) / RDRInventory

# Class: RDRInventory

Defined in: lib/redm/inventory/Inventory.d.ts:15

## Constructors

### Constructor

```ts
new RDRInventory(): RDRInventory;
```

#### Returns

`RDRInventory`

## Methods

### AddItem()

```ts
AddItem(
   inventoryId, 
   itemHash, 
   amount, 
   slotHash, 
   inventoryGuid, 
   addReason?): 
  | null
  | RDRInventoryGUID;
```

Defined in: lib/redm/inventory/Inventory.d.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `inventoryId` | [`InventoryIndex`](../../InventoryTypes/enumerations/InventoryIndex.md) |
| `itemHash` | `number` |
| `amount` | `number` |
| `slotHash` | `number` |
| `inventoryGuid` | [`RDRInventoryGUID`](../../InventoryGUID/classes/RDRInventoryGUID.md) |
| `addReason?` | [`ItemAddReason`](../../InventoryTypes/enumerations/ItemAddReason.md) |

#### Returns

  \| `null`
  \| [`RDRInventoryGUID`](../../InventoryGUID/classes/RDRInventoryGUID.md)

***

### AddItemToPlayer()

```ts
AddItemToPlayer(
   itemName, 
   amount, 
   slotHash): (boolean | FailReason)[];
```

Defined in: lib/redm/inventory/Inventory.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemName` | [`Model`](../../../Model/classes/Model.md) |
| `amount` | `number` |
| `slotHash` | `number` |

#### Returns

(`boolean` \| `FailReason`)[]

***

### EquipItemWithGUID()

```ts
EquipItemWithGUID(
   inventoryId, 
   itemGUID, 
   equipped?): boolean;
```

Defined in: lib/redm/inventory/Inventory.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `inventoryId` | [`InventoryIndex`](../../InventoryTypes/enumerations/InventoryIndex.md) |
| `itemGUID` | [`RDRInventoryGUID`](../../InventoryGUID/classes/RDRInventoryGUID.md) |
| `equipped?` | `boolean` |

#### Returns

`boolean`

***

### GetGuidFromItemId()

```ts
GetGuidFromItemId(
   inventoryId, 
   itemData, 
   category, 
   slotId): 
  | null
  | RDRInventoryGUID;
```

Defined in: lib/redm/inventory/Inventory.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `inventoryId` | [`InventoryIndex`](../../InventoryTypes/enumerations/InventoryIndex.md) |
| `itemData` | \| `null` \| [`RDRInventoryGUID`](../../InventoryGUID/classes/RDRInventoryGUID.md) |
| `category` | `number` |
| `slotId` | `number` |

#### Returns

  \| `null`
  \| [`RDRInventoryGUID`](../../InventoryGUID/classes/RDRInventoryGUID.md)
