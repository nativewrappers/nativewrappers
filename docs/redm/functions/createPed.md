[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / createPed

# Function: createPed()

```ts
function createPed(
   model, 
   spawnPos, 
   heading, 
   isNetwork, 
   bScriptHostPed, 
   p7, 
p8): Promise<Ped | null>
```

Defined in: [src/redm/world/createPed.ts:8](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/redm/world/createPed.ts#L8)

Creates a ped at the specified {@param spawnPos}, you don't need to request the model before this.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `model` | `Model` | `undefined` |
| `spawnPos` | [`Vector3`](../../fivem/classes/Vector3.md) | `undefined` |
| `heading` | `number` | `undefined` |
| `isNetwork` | `boolean` | `false` |
| `bScriptHostPed` | `boolean` | `true` |
| `p7` | `boolean` | `true` |
| `p8` | `boolean` | `true` |

## Returns

`Promise`\<[`Ped`](../classes/Ped.md) \| `null`\>
