[@nativewrappers/fivem](../../../../README.md) / [redm/world/createDraftVehicle](../README.md) / createDraftVehicle

# Function: createDraftVehicle()

```ts
function createDraftVehicle(
   model, 
   spawnPos, 
   heading, 
   isNetwork?, 
   bScriptHostVeh?, 
   bDontAutoCreateDraftAnimals?, 
   draftAnimalPopGroup?, 
p9?): Promise<null | Vehicle>;
```

Defined in: lib/redm/world/createDraftVehicle.d.ts:7

Creates a vehicle at the specified spawnPos, you don't need to request the model before this.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](../../../Model/classes/Model.md) |
| `spawnPos` | `Vector3` |
| `heading` | `number` |
| `isNetwork?` | `boolean` |
| `bScriptHostVeh?` | `boolean` |
| `bDontAutoCreateDraftAnimals?` | `boolean` |
| `draftAnimalPopGroup?` | `number` |
| `p9?` | `boolean` |

## Returns

`Promise`\<`null` \| [`Vehicle`](../../../entities/Vehicle/classes/Vehicle.md)\>
