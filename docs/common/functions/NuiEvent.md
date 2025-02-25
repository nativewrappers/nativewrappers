[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NuiEvent

# Function: NuiEvent()

```ts
function NuiEvent(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:111](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/common/decors/Events.ts#L111)

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
