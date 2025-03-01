[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Event

# Function: Event()

```ts
function Event(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:50](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/decors/Events.ts#L50)

Registers the Event call for [eventName](Event.md#eventname) to this method.

This has internal pretty-printing to make errors easier to track, if
you want to disable this you will need to call [DisablePrettyPrint](DisablePrettyPrint.md), or if you're
using esbuild you can add `REMOVE_EVENT_LOG` to your drop label [https://esbuild.github.io/api/#drop-labels](https://esbuild.github.io/api/#drop-labels)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | the event to bind to |

## Returns

`Function`

### Parameters

| Parameter | Type |
| ------ | ------ |
| `originalMethod` | `any` |
| `context` | `ClassMethodDecoratorContext` |

### Returns

`void`
