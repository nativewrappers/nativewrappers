[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Event

# Function: Event()

```ts
function Event(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:37](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/common/decors/Events.ts#L37)

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
