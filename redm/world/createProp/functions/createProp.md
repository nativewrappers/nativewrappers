[@nativewrappers/fivem](../../../../README.md) / [redm/world/createProp](../README.md) / createProp

# Function: createProp()

```ts
function createProp(
   model, 
   spawnPos, 
   heading, 
   isNetwork?, 
   bScriptHostProp?, 
   dynamic?, 
   p7?, 
p8?): Promise<null | Prop>;
```

Defined in: lib/redm/world/createProp.d.ts:7

Creates a ped at the specified spawnPos, you don't need to request the model before this.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](../../../Model/classes/Model.md) |
| `spawnPos` | `Vector3` |
| `heading` | `number` |
| `isNetwork?` | `boolean` |
| `bScriptHostProp?` | `boolean` |
| `dynamic?` | `boolean` |
| `p7?` | `boolean` |
| `p8?` | `boolean` |

## Returns

`Promise`\<`null` \| [`Prop`](../../../entities/Prop/classes/Prop.md)\>
