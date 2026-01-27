[@nativewrappers/fivem](../../../../README.md) / [fivem/models/VehicleDoorCollection](../README.md) / VehicleDoorCollection

# Class: VehicleDoorCollection

Defined in: lib/fivem/models/VehicleDoorCollection.d.ts:4

## Constructors

### Constructor

```ts
new VehicleDoorCollection(owner): VehicleDoorCollection;
```

Defined in: lib/fivem/models/VehicleDoorCollection.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) |

#### Returns

`VehicleDoorCollection`

## Methods

### breakAllDoors()

```ts
breakAllDoors(stayInTheWorld?): void;
```

Defined in: lib/fivem/models/VehicleDoorCollection.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stayInTheWorld?` | `boolean` |

#### Returns

`void`

***

### closeAllDoors()

```ts
closeAllDoors(instantly?): void;
```

Defined in: lib/fivem/models/VehicleDoorCollection.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instantly?` | `boolean` |

#### Returns

`void`

***

### getAllDoors()

```ts
getAllDoors(): (
  | undefined
  | null
  | VehicleDoor)[];
```

Defined in: lib/fivem/models/VehicleDoorCollection.d.ts:9

#### Returns

(
  \| `undefined`
  \| `null`
  \| [`VehicleDoor`](../../VehicleDoor/classes/VehicleDoor.md))[]

***

### getDoors()

```ts
getDoors(index): undefined | VehicleDoor;
```

Defined in: lib/fivem/models/VehicleDoorCollection.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleDoorIndex`](../../../enums/Vehicle/enumerations/VehicleDoorIndex.md) |

#### Returns

`undefined` \| [`VehicleDoor`](../../VehicleDoor/classes/VehicleDoor.md)

***

### hasDoor()

```ts
hasDoor(index): boolean;
```

Defined in: lib/fivem/models/VehicleDoorCollection.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleDoorIndex`](../../../enums/Vehicle/enumerations/VehicleDoorIndex.md) |

#### Returns

`boolean`

***

### openAllDoors()

```ts
openAllDoors(loose?, instantly?): void;
```

Defined in: lib/fivem/models/VehicleDoorCollection.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `loose?` | `boolean` |
| `instantly?` | `boolean` |

#### Returns

`void`
