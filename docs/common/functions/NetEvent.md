[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NetEvent

# Function: NetEvent()

```ts
function NetEvent(eventName, remoteOnly): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:69](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/common/decors/Events.ts#L69)

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
