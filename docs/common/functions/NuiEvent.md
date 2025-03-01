[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NuiEvent

# Function: NuiEvent()

```ts
function NuiEvent(eventName): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:135](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/decors/Events.ts#L135)

Registers the NUI Event call for {eventName} to this method, the function signature
should be (data: unknown, cb: (data?: any) => void) => void
You shoud always execute `cb` with 'ok' if you don't want to send data back to
the UI, otherwise you'll cause a network error for the `fetch` request

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | the event this will listen for |

## Returns

`Function`

### Parameters

| Parameter | Type |
| ------ | ------ |
| `originalMethod` | `any` |
| `context` | `ClassMethodDecoratorContext` |

### Returns

`void`
