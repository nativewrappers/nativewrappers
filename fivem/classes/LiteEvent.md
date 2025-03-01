[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / LiteEvent

# Class: LiteEvent

Defined in: fivem/utils/LiteEvent.d.ts:1

## Implements

- [`LiteEvent`](LiteEvent.md)

## Constructors

### new LiteEvent()

```ts
new LiteEvent(): LiteEvent
```

#### Returns

[`LiteEvent`](LiteEvent.md)

## Methods

### emit()

```ts
emit(...args): void
```

Defined in: fivem/utils/LiteEvent.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `unknown`[] |

#### Returns

`void`

***

### expose()

```ts
expose(): LiteEvent
```

Defined in: fivem/utils/LiteEvent.d.ts:8

#### Returns

[`LiteEvent`](LiteEvent.md)

***

### off()

```ts
off(handler): void
```

Defined in: fivem/utils/LiteEvent.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

#### Returns

`void`

***

### on()

```ts
on(handler): void
```

Defined in: fivem/utils/LiteEvent.d.ts:2

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

#### Returns

`void`
