[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NuiEvent

# Function: NuiEvent()

```ts
function NuiEvent(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:89](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/decors/Events.ts#L89)

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
