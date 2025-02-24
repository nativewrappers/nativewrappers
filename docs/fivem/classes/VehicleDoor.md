[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleDoor

# Class: VehicleDoor

Defined in: [src/fivem/models/VehicleDoor.ts:4](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L4)

## Constructors

### new VehicleDoor()

```ts
new VehicleDoor(owner, index): VehicleDoor
```

Defined in: [src/fivem/models/VehicleDoor.ts:8](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L8)

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

Defined in: [src/fivem/models/VehicleDoor.ts:21](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L21)

##### Returns

`number`

#### Set Signature

```ts
set AngleRatio(value): void
```

Defined in: [src/fivem/models/VehicleDoor.ts:25](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L25)

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

Defined in: [src/fivem/models/VehicleDoor.ts:29](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L29)

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

Defined in: [src/fivem/models/VehicleDoor.ts:13](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L13)

##### Returns

[`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md)

#### Set Signature

```ts
set Index(index): void
```

Defined in: [src/fivem/models/VehicleDoor.ts:17](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L17)

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

Defined in: [src/fivem/models/VehicleDoor.ts:41](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L41)

##### Returns

`boolean`

***

### IsFullyOpen

#### Get Signature

```ts
get IsFullyOpen(): boolean
```

Defined in: [src/fivem/models/VehicleDoor.ts:37](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L37)

##### Returns

`boolean`

***

### IsOpen

#### Get Signature

```ts
get IsOpen(): boolean
```

Defined in: [src/fivem/models/VehicleDoor.ts:33](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L33)

##### Returns

`boolean`

***

### Vehicle

#### Get Signature

```ts
get Vehicle(): Vehicle
```

Defined in: [src/fivem/models/VehicleDoor.ts:45](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L45)

##### Returns

[`Vehicle`](Vehicle.md)

## Methods

### break()

```ts
break(stayInTheWorld): void
```

Defined in: [src/fivem/models/VehicleDoor.ts:57](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L57)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `stayInTheWorld` | `boolean` | `true` |

#### Returns

`void`

***

### close()

```ts
close(instantly): void
```

Defined in: [src/fivem/models/VehicleDoor.ts:53](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L53)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `instantly` | `boolean` | `false` |

#### Returns

`void`

***

### open()

```ts
open(loose, instantly): void
```

Defined in: [src/fivem/models/VehicleDoor.ts:49](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/models/VehicleDoor.ts#L49)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `loose` | `boolean` | `false` |
| `instantly` | `boolean` | `false` |

#### Returns

`void`
