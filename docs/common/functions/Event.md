[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Event

# Function: Event()

```ts
function Event(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:37](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/common/decors/Events.ts#L37)

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
