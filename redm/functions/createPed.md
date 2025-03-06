[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / createPed

# Function: createPed()

```ts
function createPed(
   model, 
   spawnPos, 
   heading, 
   isNetwork?, 
   bScriptHostPed?, 
   p7?, 
p8?): Promise<null | Ped>
```

Defined in: redm/world/createPed.d.ts:7

Creates a ped at the specified {@param spawnPos}, you don't need to request the model before this.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](../classes/Model.md) |
| `spawnPos` | `Vector3` |
| `heading` | `number` |
| `isNetwork`? | `boolean` |
| `bScriptHostPed`? | `boolean` |
| `p7`? | `boolean` |
| `p8`? | `boolean` |

## Returns

`Promise`\<`null` \| [`Ped`](../classes/Ped.md)\>
