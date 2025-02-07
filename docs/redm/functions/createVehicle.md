[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / createVehicle

# Function: createVehicle()

```ts
function createVehicle(
   model, 
   spawnPos, 
   heading, 
   isNetwork, 
   bScriptHostVeh, 
   bDontAutoCreateDraftAnimals, 
p8): Promise<Vehicle | null>
```

Defined in: [src/redm/world/createVehicle.ts:8](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/redm/world/createVehicle.ts#L8)

Creates a vehicle at the specified {@param spawnPos}, you don't need to request the model before this.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `model` | `Model` | `undefined` |
| `spawnPos` | [`Vector3`](../../fivem/classes/Vector3.md) | `undefined` |
| `heading` | `number` | `undefined` |
| `isNetwork` | `boolean` | `false` |
| `bScriptHostVeh` | `boolean` | `true` |
| `bDontAutoCreateDraftAnimals` | `boolean` | `true` |
| `p8` | `boolean` | `true` |

## Returns

`Promise`\<[`Vehicle`](../classes/Vehicle.md) \| `null`\>
