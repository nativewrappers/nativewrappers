[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NetEvent

# Function: NetEvent()

```ts
function NetEvent(eventName, remoteOnly): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:69](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/common/decors/Events.ts#L69)

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
