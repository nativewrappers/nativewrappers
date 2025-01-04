[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Event

# Function: Event()

```ts
function Event(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:37](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/common/decors/Events.ts#L37)

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
