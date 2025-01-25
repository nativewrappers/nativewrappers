[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NetEvent

# Function: NetEvent()

```ts
function NetEvent(eventName, remoteOnly): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:59](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/common/decors/Events.ts#L59)

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
