[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Vehicle

# Class: Vehicle

Defined in: [src/redm/entities/Vehicle.ts:3](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Vehicle.ts#L3)

## Extends

- `BaseEntity`

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

Defined in: [src/redm/entities/Vehicle.ts:4](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Vehicle.ts#L4)

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

Defined in: [src/redm/entities/BaseEntity.ts:29](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/BaseEntity.ts#L29)

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

Defined in: [src/redm/entities/BaseEntity.ts:37](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/BaseEntity.ts#L37)

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/redm/entities/BaseEntity.ts:33](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/BaseEntity.ts#L33)

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

## Methods

### replaceHandle()

```ts
replaceHandle(newHandle): void
```

Defined in: [src/redm/entities/BaseEntity.ts:25](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/BaseEntity.ts#L25)

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
