[@nativewrappers/fivem](../../README.md) / [common](../README.md) / ConVar

# Function: ConVar()

```ts
function ConVar<T>(
   name, 
   is_floating_point?, 
   deserialize?): (_initialValue, context, ..._args) => void
```

Defined in: [src/common/decors/Events.ts:182](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/decors/Events.ts#L182)

Gets the specified `ConVar`s value, this will bind to the param.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | the convar name |
| `is_floating_point`? | `boolean` | if the convar is floating point, this should be explicitly set to true if your convar will be a float |
| `deserialize`? | `DeserializeFn`\<`T`\> | - |

## Returns

`Function`

### Parameters

| Parameter | Type |
| ------ | ------ |
| `_initialValue` | `any` |
| `context` | `ClassFieldDecoratorContext` |
| ...`_args` | `any`[] |

### Returns

`void`
