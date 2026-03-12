[@nativewrappers/fivem](../../../../README.md) / [fivem/utils/LiteEvent](../README.md) / LiteEvent

# Class: LiteEvent

Defined in: lib/fivem/utils/LiteEvent.d.ts:1

## Implements

- `LiteEvent`

## Constructors

### Constructor

```ts
new LiteEvent(): LiteEvent;
```

#### Returns

`LiteEvent`

## Methods

### emit()

```ts
emit(...args): void;
```

Defined in: lib/fivem/utils/LiteEvent.d.ts:5

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
expose(): LiteEvent;
```

Defined in: lib/fivem/utils/LiteEvent.d.ts:6

#### Returns

`LiteEvent`

#### Implementation of

```ts
LiteEvent.expose
```

***

### off()

```ts
off(handler): void;
```

Defined in: lib/fivem/utils/LiteEvent.d.ts:4

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
on(handler): void;
```

Defined in: lib/fivem/utils/LiteEvent.d.ts:3

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
