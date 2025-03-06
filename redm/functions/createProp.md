[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / createProp

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
p8?): Promise<null | Prop>
```

Defined in: redm/world/createProp.d.ts:7

Creates a ped at the specified {@param spawnPos}, you don't need to request the model before this.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](../classes/Model.md) |
| `spawnPos` | `Vector3` |
| `heading` | `number` |
| `isNetwork`? | `boolean` |
| `bScriptHostProp`? | `boolean` |
| `dynamic`? | `boolean` |
| `p7`? | `boolean` |
| `p8`? | `boolean` |

## Returns

`Promise`\<`null` \| `Prop`\>
