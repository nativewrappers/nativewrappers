[@nativewrappers/fivem](../../README.md) / [server](../README.md) / StateBagChangeHandler

# Interface: StateBagChangeHandler()\<T\>

Defined in: [src/server/cfx/StateBagChangeHandler.ts:1](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/server/cfx/StateBagChangeHandler.ts#L1)

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

Defined in: [src/server/cfx/StateBagChangeHandler.ts:2](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/server/cfx/StateBagChangeHandler.ts#L2)

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
