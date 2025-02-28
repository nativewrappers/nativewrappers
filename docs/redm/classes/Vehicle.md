[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Vehicle

# Class: Vehicle

Defined in: [src/redm/entities/Vehicle.ts:5](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Vehicle.ts#L5)

## Extends

- `BaseEntity`

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

Defined in: [src/redm/entities/Vehicle.ts:6](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Vehicle.ts#L6)

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

### Exists

#### Get Signature

```ts
get Exists(): boolean
```

Defined in: [src/redm/entities/BaseEntity.ts:34](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L34)

##### Returns

`boolean`

Returns true if the entity handle is not 0 and exists in the game engine

#### Inherited from

```ts
BaseEntity.Exists
```

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/redm/entities/BaseEntity.ts:38](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L38)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.Handle
```

***

### Heading

#### Get Signature

```ts
get Heading(): number
```

Defined in: [src/redm/entities/BaseEntity.ts:50](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L50)

##### Returns

`number`

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: [src/redm/entities/BaseEntity.ts:54](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L54)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Heading
```

***

### Health

#### Get Signature

```ts
get Health(): number
```

Defined in: [src/redm/entities/BaseEntity.ts:46](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L46)

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/redm/entities/BaseEntity.ts:42](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L42)

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

Defined in: [src/redm/entities/BaseEntity.ts:58](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L58)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Set Signature

```ts
set Position(pos): void
```

Defined in: [src/redm/entities/BaseEntity.ts:62](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L62)

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

### isSeatFree()

```ts
isSeatFree(seatIndex): boolean
```

Defined in: [src/redm/entities/Vehicle.ts:15](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Vehicle.ts#L15)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seatIndex` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | the seat index to check |

#### Returns

`boolean`

true of the specified seat is free on the mount

***

### replaceHandle()

```ts
replaceHandle(newHandle): void
```

Defined in: [src/redm/entities/BaseEntity.ts:27](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L27)

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
