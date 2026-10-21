[@nativewrappers/fivem](../../../../README.md) / [fivem/models/VehicleDoor](../README.md) / VehicleDoor

# Class: VehicleDoor

Defined in: lib/fivem/models/VehicleDoor.d.ts:3

## Constructors

### Constructor

```ts
new VehicleDoor(owner, index): VehicleDoor;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) |
| `index` | [`VehicleDoorIndex`](../../../enums/Vehicle/enumerations/VehicleDoorIndex.md) |

#### Returns

`VehicleDoor`

## Accessors

### AngleRatio

#### Get Signature

```ts
get AngleRatio(): number;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:9

##### Returns

`number`

#### Set Signature

```ts
set AngleRatio(value): void;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:10

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### CanBeBroken

#### Set Signature

```ts
set CanBeBroken(value): void;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:11

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### Index

#### Get Signature

```ts
get Index(): VehicleDoorIndex;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:7

##### Returns

[`VehicleDoorIndex`](../../../enums/Vehicle/enumerations/VehicleDoorIndex.md)

#### Set Signature

```ts
set Index(index): void;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:8

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleDoorIndex`](../../../enums/Vehicle/enumerations/VehicleDoorIndex.md) |

##### Returns

`void`

***

### IsBroken

#### Get Signature

```ts
get IsBroken(): boolean;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:14

##### Returns

`boolean`

***

### IsFullyOpen

#### Get Signature

```ts
get IsFullyOpen(): boolean;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:13

##### Returns

`boolean`

***

### IsOpen

#### Get Signature

```ts
get IsOpen(): boolean;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:12

##### Returns

`boolean`

***

### Vehicle

#### Get Signature

```ts
get Vehicle(): Vehicle;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:15

##### Returns

[`Vehicle`](../../Vehicle/classes/Vehicle.md)

## Methods

### break()

```ts
break(stayInTheWorld?): void;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stayInTheWorld?` | `boolean` |

#### Returns

`void`

***

### close()

```ts
close(instantly?): void;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instantly?` | `boolean` |

#### Returns

`void`

***

### open()

```ts
open(loose?, instantly?): void;
```

Defined in: lib/fivem/models/VehicleDoor.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `loose?` | `boolean` |
| `instantly?` | `boolean` |

#### Returns

`void`
