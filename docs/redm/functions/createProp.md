[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / createProp

# Function: createProp()

```ts
function createProp(
   model, 
   spawnPos, 
   heading, 
   isNetwork, 
   bScriptHostProp, 
   dynamic, 
   p7, 
p8): Promise<Prop | null>
```

Defined in: [src/redm/world/createProp.ts:8](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/redm/world/createProp.ts#L8)

Creates a ped at the specified {@param spawnPos}, you don't need to request the model before this.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `model` | `Model` | `undefined` |
| `spawnPos` | [`Vector3`](../../fivem/classes/Vector3.md) | `undefined` |
| `heading` | `number` | `undefined` |
| `isNetwork` | `boolean` | `false` |
| `bScriptHostProp` | `boolean` | `true` |
| `dynamic` | `boolean` | `true` |
| `p7` | `boolean` | `true` |
| `p8` | `boolean` | `true` |

## Returns

`Promise`\<`Prop` \| `null`\>
