[@nativewrappers/fivem](../../README.md) / [common](../README.md) / SetTick

# Function: SetTick()

```ts
function SetTick(): (originalMethod, context) => void
```

Defined in: [src/common/decors/Events.ts:252](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/decors/Events.ts#L252)

Gets called per server/client tick, this is asyncronous though, if you await
in it, it will not be called until whatever was being awaited resolves.

## Returns

`Function`

### Parameters

| Parameter | Type |
| ------ | ------ |
| `originalMethod` | `any` |
| `context` | `ClassMethodDecoratorContext` |

### Returns

`void`
