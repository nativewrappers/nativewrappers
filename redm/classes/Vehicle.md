[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Vehicle

# Class: Vehicle

Defined in: redm/entities/Vehicle.d.ts:3

## Extends

- `BaseEntity`

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

Defined in: redm/entities/Vehicle.d.ts:4

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

Defined in: redm/entities/BaseEntity.d.ts:37

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

Defined in: redm/entities/BaseEntity.d.ts:41

##### Returns

`number`

The entitys current handle.

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

Defined in: redm/entities/BaseEntity.d.ts:53

##### Returns

`number`

the heading of the current BaseEntity

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: redm/entities/BaseEntity.d.ts:57

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `heading` | `number` | sets the entitys heading to the specified heading, this can be in the range of 0..360 |

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

Defined in: redm/entities/BaseEntity.d.ts:49

##### Returns

`number`

the amount of health the current BaseEntity has

#### Set Signature

```ts
set Health(amount): void
```

Defined in: redm/entities/BaseEntity.d.ts:45

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the health to set the health to, setting to `0` will kill the entity, if using on a [Ped](Ped.md) you should check the MaxHealth before setting. |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Health
```

***

### IsNetworked

#### Get Signature

```ts
get IsNetworked(): boolean
```

Defined in: redm/entities/BaseEntity.d.ts:33

##### Returns

`boolean`

`true` if the current entity is networked, false otherwise

#### Inherited from

```ts
BaseEntity.IsNetworked
```

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number
```

Defined in: redm/entities/BaseEntity.d.ts:29

##### Returns

`number`

the network for the specified entity, this doesn't check if the entity is networked, you should use [BaseEntity.IsNetworked](Entity.md#isnetworked)

#### Inherited from

```ts
BaseEntity.NetworkId
```

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: redm/entities/BaseEntity.d.ts:61

##### Returns

`Vector3`

the position of the current Entity

#### Set Signature

```ts
set Position(pos): void
```

Defined in: redm/entities/BaseEntity.d.ts:66

You should (almost) always try to load the collisions before setting the entitys position if going a long distance.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | `Vector3` | sets the position for the current ped |

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

Defined in: redm/entities/Vehicle.d.ts:10

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

Defined in: redm/entities/BaseEntity.d.ts:25

Replaces the current handle for the entity used on, this hsould be used sparringly, mainly
in situations where you're going to reuse an entity over and over and don't want to make a
new entity every time.

 **WARNING**: This does no checks, if you provide it an invalid entity it will use it

```ts
const REUSABLE_ENTITY = new Entity(entityHandle);

onNet("entityHandler", (entNetId: number) => {
 // if no net entity we should ignore
 if (!NetworkDoesEntityExistWithNetworkId(entNetId)) return;

 // Reuse our entity so we don't have to initialize a new one
 REUSABLE_ENTITY.replaceHandle(NetworkGetEntityFromNetworkId(entNetId));
 // Do something with REUSABLE_ENTITY entity
})
```

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
