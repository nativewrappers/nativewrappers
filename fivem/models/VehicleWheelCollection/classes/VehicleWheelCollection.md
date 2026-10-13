[@nativewrappers/fivem](../../../../README.md) / [fivem/models/VehicleWheelCollection](../README.md) / VehicleWheelCollection

# Class: VehicleWheelCollection

Defined in: lib/fivem/models/VehicleWheelCollection.d.ts:4

## Constructors

### Constructor

```ts
new VehicleWheelCollection(owner): VehicleWheelCollection;
```

Defined in: lib/fivem/models/VehicleWheelCollection.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) |

#### Returns

`VehicleWheelCollection`

## Methods

### burstAllWheels()

```ts
burstAllWheels(): void;
```

Defined in: lib/fivem/models/VehicleWheelCollection.d.ts:10

#### Returns

`void`

***

### fixAllWheels()

```ts
fixAllWheels(): void;
```

Defined in: lib/fivem/models/VehicleWheelCollection.d.ts:11

#### Returns

`void`

***

### getAllWheels()

```ts
getAllWheels(): (
  | undefined
  | null
  | VehicleWheel)[];
```

Defined in: lib/fivem/models/VehicleWheelCollection.d.ts:9

#### Returns

(
  \| `undefined`
  \| `null`
  \| [`VehicleWheel`](../../VehicleWheel/classes/VehicleWheel.md))[]

***

### getWheel()

```ts
getWheel(index): 
  | undefined
  | VehicleWheel;
```

Defined in: lib/fivem/models/VehicleWheelCollection.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleWheelIndex`](../../../enums/Vehicle/enumerations/VehicleWheelIndex.md) |

#### Returns

  \| `undefined`
  \| [`VehicleWheel`](../../VehicleWheel/classes/VehicleWheel.md)

***

### hasWheel()

```ts
hasWheel(wheel): boolean;
```

Defined in: lib/fivem/models/VehicleWheelCollection.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `wheel` | [`VehicleWheelIndex`](../../../enums/Vehicle/enumerations/VehicleWheelIndex.md) |

#### Returns

`boolean`
