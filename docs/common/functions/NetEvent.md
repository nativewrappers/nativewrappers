[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NetEvent

# Function: NetEvent()

```ts
function NetEvent(eventName, remoteOnly): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:69](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/common/decors/Events.ts#L69)

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `eventName` | `string` | `undefined` |
| `remoteOnly` | `boolean` | `false` |

## Returns

`Function`

### Parameters

| Parameter | Type |
| ------ | ------ |
| `originalMethod` | `any` |
| `context` | `ClassMethodDecoratorContext`\<(`this`, ...`args`) => `any`\> |

### Returns

`void`
