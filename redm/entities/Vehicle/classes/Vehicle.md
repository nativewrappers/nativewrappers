[@nativewrappers/fivem](../../../../README.md) / [redm/entities/Vehicle](../README.md) / Vehicle

# Class: Vehicle

Defined in: lib/redm/entities/Vehicle.d.ts:4

## Extends

- `unknown`

## Constructors

### Constructor

```ts
new Vehicle(handle): Vehicle;
```

Defined in: lib/redm/entities/Vehicle.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`Vehicle`

#### Overrides

```ts
CommonVehicle.constructor
```

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | lib/redm/entities/Vehicle.d.ts:5 |

## Methods

### isSeatFree()

```ts
isSeatFree(seatIndex): boolean;
```

Defined in: lib/redm/entities/Vehicle.d.ts:23

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seatIndex` | [`VehicleSeat`](../../../enums/VehicleSeat/enumerations/VehicleSeat.md) | the seat index to check |

#### Returns

`boolean`

true of the specified seat is free on the mount

***

### fromHandle()

```ts
static fromHandle(handle): null | Vehicle;
```

Defined in: lib/redm/entities/Vehicle.d.ts:11

Gets the entity from the handle given, if the entity doesn't exist it will return
null.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| `Vehicle`

***

### fromNetworkId()

```ts
static fromNetworkId(netId): null | Vehicle;
```

Defined in: lib/redm/entities/Vehicle.d.ts:16

Gets the ped from the current network id, this doesn't check that
the entity is actually a ped

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `netId` | `number` |

#### Returns

`null` \| `Vehicle`

***

### fromStateBagName()

```ts
static fromStateBagName(bagName): null | Vehicle;
```

Defined in: lib/redm/entities/Vehicle.d.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bagName` | `string` |

#### Returns

`null` \| `Vehicle`
