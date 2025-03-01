[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NetEvent

# Function: NetEvent()

```ts
function NetEvent(eventName, remoteOnly): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:91](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/decors/Events.ts#L91)

Registers the Net Event call for [eventName](NetEvent.md#eventname) to this method

This has internal pretty-printing to make errors easier to track, if
you want to disable this you will need to call [DisablePrettyPrint](DisablePrettyPrint.md), or if you're
using esbuild you can add `REMOVE_EVENT_LOG` to your drop label [https://esbuild.github.io/api/#drop-labels](https://esbuild.github.io/api/#drop-labels)

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `eventName` | `string` | `undefined` | the event to bind this net event to |
| `remoteOnly` | `boolean` | `true` | if the event should only accept remote calls, if set to true it will ignore any local call via `emit`, defaults to true |

## Returns

`Function`

### Parameters

| Parameter | Type |
| ------ | ------ |
| `originalMethod` | `any` |
| `context` | `ClassMethodDecoratorContext` |

### Returns

`void`
