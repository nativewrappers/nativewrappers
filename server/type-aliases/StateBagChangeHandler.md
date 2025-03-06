[@nativewrappers/fivem](../../README.md) / [server](../README.md) / StateBagChangeHandler

# Type Alias: StateBagChangeHandler()\<T\>

```ts
type StateBagChangeHandler<T> = (bagName, key, value, reserved, replicated) => void;
```

Defined in: server/cfx/StateBagChangeHandler.d.ts:1

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `bagName` | `string` |
| `key` | `string` |
| `value` | `T` |
| `reserved` | `number` |
| `replicated` | `boolean` |

## Returns

`void`
