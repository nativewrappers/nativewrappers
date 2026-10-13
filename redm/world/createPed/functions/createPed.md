[@nativewrappers/fivem](../../../../README.md) / [redm/world/createPed](../README.md) / createPed

# Function: createPed()

```ts
function createPed(
   model, 
   spawnPos, 
   heading, 
   isNetwork?, 
   bScriptHostPed?, 
   p7?, 
p8?): Promise<null | Ped>;
```

Defined in: lib/redm/world/createPed.d.ts:7

Creates a ped at the specified spawnPos, you don't need to request the model before this.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](../../../Model/classes/Model.md) |
| `spawnPos` | `Vector3` |
| `heading` | `number` |
| `isNetwork?` | `boolean` |
| `bScriptHostPed?` | `boolean` |
| `p7?` | `boolean` |
| `p8?` | `boolean` |

## Returns

`Promise`\<`null` \| [`Ped`](../../../entities/Ped/classes/Ped.md)\>
