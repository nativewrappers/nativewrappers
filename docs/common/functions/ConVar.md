[@nativewrappers/fivem](../../README.md) / [common](../README.md) / ConVar

# Function: ConVar()

```ts
function ConVar<T>(
   name, 
   is_floating_point?, 
   deserialize?): (_initialValue, context, ...args) => void
```

Defined in: [src/common/decors/Events.ts:134](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/decors/Events.ts#L134)

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
