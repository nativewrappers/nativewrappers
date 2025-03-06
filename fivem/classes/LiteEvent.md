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

Defined in: fivem/utils/LiteEvent.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `unknown`[] |

#### Returns

`void`

#### Implementation of

```ts
LiteEvent.emit
```

***

### expose()

```ts
expose(): LiteEvent
```

Defined in: fivem/utils/LiteEvent.d.ts:6

#### Returns

[`LiteEvent`](LiteEvent.md)

#### Implementation of

```ts
LiteEvent.expose
```

***

### off()

```ts
off(handler): void
```

Defined in: fivem/utils/LiteEvent.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

#### Returns

`void`

#### Implementation of

```ts
LiteEvent.off
```

***

### on()

```ts
on(handler): void
```

Defined in: fivem/utils/LiteEvent.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

#### Returns

`void`

#### Implementation of

```ts
LiteEvent.on
```
