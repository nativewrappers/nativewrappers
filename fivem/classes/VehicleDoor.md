[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleDoor

# Class: VehicleDoor

Defined in: fivem/models/VehicleDoor.d.ts:3

## Constructors

### new VehicleDoor()

```ts
new VehicleDoor(owner, index): VehicleDoor
```

Defined in: fivem/models/VehicleDoor.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

#### Returns

[`VehicleDoor`](VehicleDoor.md)

## Accessors

### AngleRatio

#### Get Signature

```ts
get AngleRatio(): number
```

Defined in: fivem/models/VehicleDoor.d.ts:9

##### Returns

`number`

#### Set Signature

```ts
set AngleRatio(value): void
```

Defined in: fivem/models/VehicleDoor.d.ts:10

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
set CanBeBroken(value): void
```

Defined in: fivem/models/VehicleDoor.d.ts:11

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
get Index(): VehicleDoorIndex
```

Defined in: fivem/models/VehicleDoor.d.ts:7

##### Returns

[`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md)

#### Set Signature

```ts
set Index(index): void
```

Defined in: fivem/models/VehicleDoor.d.ts:8

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

##### Returns

`void`

***

### IsBroken

#### Get Signature

```ts
get IsBroken(): boolean
```

Defined in: fivem/models/VehicleDoor.d.ts:14

##### Returns

`boolean`

***

### IsFullyOpen

#### Get Signature

```ts
get IsFullyOpen(): boolean
```

Defined in: fivem/models/VehicleDoor.d.ts:13

##### Returns

`boolean`

***

### IsOpen

#### Get Signature

```ts
get IsOpen(): boolean
```

Defined in: fivem/models/VehicleDoor.d.ts:12

##### Returns

`boolean`

***

### Vehicle

#### Get Signature

```ts
get Vehicle(): Vehicle
```

Defined in: fivem/models/VehicleDoor.d.ts:15

##### Returns

[`Vehicle`](Vehicle.md)

## Methods

### break()

```ts
break(stayInTheWorld?): void
```

Defined in: fivem/models/VehicleDoor.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stayInTheWorld`? | `boolean` |

#### Returns

`void`

***

### close()

```ts
close(instantly?): void
```

Defined in: fivem/models/VehicleDoor.d.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instantly`? | `boolean` |

#### Returns

`void`

***

### open()

```ts
open(loose?, instantly?): void
```

Defined in: fivem/models/VehicleDoor.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `loose`? | `boolean` |
| `instantly`? | `boolean` |

#### Returns

`void`
