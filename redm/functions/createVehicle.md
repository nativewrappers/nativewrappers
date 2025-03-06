[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / createVehicle

# Function: createVehicle()

```ts
function createVehicle(
   model, 
   spawnPos, 
   heading, 
   isNetwork?, 
   bScriptHostVeh?, 
   bDontAutoCreateDraftAnimals?, 
p8?): Promise<null | Vehicle>
```

Defined in: redm/world/createVehicle.d.ts:7

Creates a vehicle at the specified {@param spawnPos}, you don't need to request the model before this.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](../classes/Model.md) |
| `spawnPos` | `Vector3` |
| `heading` | `number` |
| `isNetwork`? | `boolean` |
| `bScriptHostVeh`? | `boolean` |
| `bDontAutoCreateDraftAnimals`? | `boolean` |
| `p8`? | `boolean` |

## Returns

`Promise`\<`null` \| [`Vehicle`](../classes/Vehicle.md)\>
