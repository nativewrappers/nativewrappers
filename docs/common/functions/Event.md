[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Event

# Function: Event()

```ts
function Event(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:37](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/common/decors/Events.ts#L37)

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
