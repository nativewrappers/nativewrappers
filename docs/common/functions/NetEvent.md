[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NetEvent

# Function: NetEvent()

```ts
function NetEvent(eventName, remoteOnly): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:59](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/common/decors/Events.ts#L59)

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
