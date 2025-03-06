[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleWheelCollection

# Class: VehicleWheelCollection

Defined in: fivem/models/VehicleWheelCollection.d.ts:4

## Constructors

### new VehicleWheelCollection()

```ts
new VehicleWheelCollection(owner): VehicleWheelCollection
```

Defined in: fivem/models/VehicleWheelCollection.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleWheelCollection`](VehicleWheelCollection.md)

## Methods

### burstAllWheels()

```ts
burstAllWheels(): void
```

Defined in: fivem/models/VehicleWheelCollection.d.ts:10

#### Returns

`void`

***

### fixAllWheels()

```ts
fixAllWheels(): void
```

Defined in: fivem/models/VehicleWheelCollection.d.ts:11

#### Returns

`void`

***

### getAllWheels()

```ts
getAllWheels(): (undefined | null | VehicleWheel)[]
```

Defined in: fivem/models/VehicleWheelCollection.d.ts:9

#### Returns

(`undefined` \| `null` \| [`VehicleWheel`](VehicleWheel.md))[]

***

### getWheel()

```ts
getWheel(index): undefined | VehicleWheel
```

Defined in: fivem/models/VehicleWheelCollection.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md) |

#### Returns

`undefined` \| [`VehicleWheel`](VehicleWheel.md)

***

### hasWheel()

```ts
hasWheel(wheel): boolean
```

Defined in: fivem/models/VehicleWheelCollection.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `wheel` | [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md) |

#### Returns

`boolean`
