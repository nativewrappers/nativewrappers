[@nativewrappers/fivem](../../README.md) / [server](../README.md) / StateBagChangeHandler

# Interface: StateBagChangeHandler()\<T\>

Defined in: [src/server/cfx/StateBagChangeHandler.ts:1](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/server/cfx/StateBagChangeHandler.ts#L1)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

```ts
interface StateBagChangeHandler(
   bagName, 
   key, 
   value, 
   reserved, 
   replicated): void
```

Defined in: [src/server/cfx/StateBagChangeHandler.ts:2](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/server/cfx/StateBagChangeHandler.ts#L2)

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
