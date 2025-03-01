[@nativewrappers/fivem](../../README.md) / [common](../README.md) / ConVar

# Function: ConVar()

```ts
function ConVar<T>(
   name, 
   is_floating_point?, 
   deserialize?): (_initialValue, context, ...args) => void
```

Defined in: [src/common/decors/Events.ts:156](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/common/decors/Events.ts#L156)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `is_floating_point`? | `boolean` |
| `deserialize`? | `DeserializeFn`\<`T`\> |

## Returns

`Function`

### Parameters

| Parameter | Type |
| ------ | ------ |
| `_initialValue` | `any` |
| `context` | `ClassFieldDecoratorContext` |
| ...`args` | `any`[] |

### Returns

`void`
