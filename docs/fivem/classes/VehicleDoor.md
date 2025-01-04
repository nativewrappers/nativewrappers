[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleDoor

# Class: VehicleDoor

## Constructors

### new VehicleDoor()

```ts
new VehicleDoor(owner, index): VehicleDoor
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

#### Returns

[`VehicleDoor`](VehicleDoor.md)

#### Defined in

[src/fivem/models/VehicleDoor.ts:8](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L8)

## Accessors

### AngleRatio

```ts
get AngleRatio(): number
```

```ts
set AngleRatio(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/VehicleDoor.ts:21](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L21)

***

### CanBeBroken

```ts
set CanBeBroken(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/VehicleDoor.ts:29](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L29)

***

### Index

```ts
get Index(): VehicleDoorIndex
```

```ts
set Index(index): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

#### Returns

[`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md)

#### Defined in

[src/fivem/models/VehicleDoor.ts:13](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L13)

***

### IsBroken

```ts
get IsBroken(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/VehicleDoor.ts:41](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L41)

***

### IsFullyOpen

```ts
get IsFullyOpen(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/VehicleDoor.ts:37](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L37)

***

### IsOpen

```ts
get IsOpen(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/VehicleDoor.ts:33](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L33)

***

### Vehicle

```ts
get Vehicle(): Vehicle
```

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[src/fivem/models/VehicleDoor.ts:45](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L45)

## Methods

### break()

```ts
break(stayInTheWorld): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `stayInTheWorld` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/fivem/models/VehicleDoor.ts:57](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L57)

***

### close()

```ts
close(instantly): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `instantly` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/fivem/models/VehicleDoor.ts:53](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L53)

***

### open()

```ts
open(loose, instantly): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `loose` | `boolean` | `false` |
| `instantly` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/fivem/models/VehicleDoor.ts:49](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleDoor.ts#L49)
