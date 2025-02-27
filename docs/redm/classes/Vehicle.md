[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Vehicle

# Class: Vehicle

Defined in: [src/redm/entities/Vehicle.ts:3](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/entities/Vehicle.ts#L3)

## Extends

- `BaseEntity`

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

Defined in: [src/redm/entities/Vehicle.ts:4](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/entities/Vehicle.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Vehicle`](Vehicle.md)

#### Overrides

```ts
BaseEntity.constructor
```

## Accessors

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/redm/entities/BaseEntity.ts:31](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/entities/BaseEntity.ts#L31)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.Handle
```

***

### Health

#### Get Signature

```ts
get Health(): number
```

Defined in: [src/redm/entities/BaseEntity.ts:39](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/entities/BaseEntity.ts#L39)

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/redm/entities/BaseEntity.ts:35](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/entities/BaseEntity.ts#L35)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Health
```

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: [src/redm/entities/BaseEntity.ts:43](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/entities/BaseEntity.ts#L43)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Set Signature

```ts
set Position(pos): void
```

Defined in: [src/redm/entities/BaseEntity.ts:47](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/entities/BaseEntity.ts#L47)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Vector3`](../../fivem/classes/Vector3.md) |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Position
```

## Methods

### replaceHandle()

```ts
replaceHandle(newHandle): void
```

Defined in: [src/redm/entities/BaseEntity.ts:27](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/entities/BaseEntity.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newHandle` | `number` |

#### Returns

`void`

#### Inherited from

```ts
BaseEntity.replaceHandle
```
