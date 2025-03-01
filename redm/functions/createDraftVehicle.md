[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / createDraftVehicle

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
p9?): Promise<null | Vehicle>
```

Defined in: redm/world/createDraftVehicle.d.ts:7

Creates a vehicle at the specified {@param spawnPos}, you don't need to request the model before this.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | `Model` |
| `spawnPos` | `Vector3` |
| `heading` | `number` |
| `isNetwork`? | `boolean` |
| `bScriptHostVeh`? | `boolean` |
| `bDontAutoCreateDraftAnimals`? | `boolean` |
| `draftAnimalPopGroup`? | `number` |
| `p9`? | `boolean` |

## Returns

`Promise`\<`null` \| [`Vehicle`](../classes/Vehicle.md)\>
