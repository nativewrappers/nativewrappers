[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / LiteEvent

# Class: LiteEvent

Defined in: [src/fivem/utils/LiteEvent.ts:4](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/utils/LiteEvent.ts#L4)

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

Defined in: [src/fivem/utils/LiteEvent.ts:20](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/utils/LiteEvent.ts#L20)

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

Defined in: [src/fivem/utils/LiteEvent.ts:26](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/utils/LiteEvent.ts#L26)

#### Returns

[`LiteEvent`](LiteEvent.md)

***

### off()

#### Call Signature

```ts
off(handler): void
```

Defined in: [src/fivem/utils/LiteEvent.ts:6](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/utils/LiteEvent.ts#L6)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

##### Returns

`void`

#### Call Signature

```ts
off(handler): void
```

Defined in: [src/fivem/utils/LiteEvent.ts:16](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/utils/LiteEvent.ts#L16)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

##### Returns

`void`

***

### on()

#### Call Signature

```ts
on(handler): void
```

Defined in: [src/fivem/utils/LiteEvent.ts:5](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/utils/LiteEvent.ts#L5)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

##### Returns

`void`

#### Call Signature

```ts
on(handler): void
```

Defined in: [src/fivem/utils/LiteEvent.ts:12](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/utils/LiteEvent.ts#L12)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

##### Returns

`void`
