[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NuiEvent

# Function: NuiEvent()

```ts
function NuiEvent(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:111](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/decors/Events.ts#L111)

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
