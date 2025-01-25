[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NuiEvent

# Function: NuiEvent()

```ts
function NuiEvent(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:89](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/common/decors/Events.ts#L89)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

## Returns

`Function`

### Parameters

| Parameter | Type |
| ------ | ------ |
| `originalMethod` | `any` |
| `context` | `ClassMethodDecoratorContext`\<(`this`, ...`args`) => `any`\> |

### Returns

`void`
