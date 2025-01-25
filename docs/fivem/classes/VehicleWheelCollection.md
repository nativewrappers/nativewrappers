[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleWheelCollection

# Class: VehicleWheelCollection

Defined in: [src/fivem/models/VehicleWheelCollection.ts:5](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/models/VehicleWheelCollection.ts#L5)

## Constructors

### new VehicleWheelCollection()

```ts
new VehicleWheelCollection(owner): VehicleWheelCollection
```

Defined in: [src/fivem/models/VehicleWheelCollection.ts:12](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/models/VehicleWheelCollection.ts#L12)

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

Defined in: [src/fivem/models/VehicleWheelCollection.ts:36](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/models/VehicleWheelCollection.ts#L36)

#### Returns

`void`

***

### fixAllWheels()

```ts
fixAllWheels(): void
```

Defined in: [src/fivem/models/VehicleWheelCollection.ts:42](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/models/VehicleWheelCollection.ts#L42)

#### Returns

`void`

***

### getAllWheels()

```ts
getAllWheels(): (undefined | null | VehicleWheel)[]
```

Defined in: [src/fivem/models/VehicleWheelCollection.ts:23](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/models/VehicleWheelCollection.ts#L23)

#### Returns

(`undefined` \| `null` \| [`VehicleWheel`](VehicleWheel.md))[]

***

### getWheel()

```ts
getWheel(index): undefined | VehicleWheel
```

Defined in: [src/fivem/models/VehicleWheelCollection.ts:16](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/models/VehicleWheelCollection.ts#L16)

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

Defined in: [src/fivem/models/VehicleWheelCollection.ts:48](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/models/VehicleWheelCollection.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `wheel` | [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md) |

#### Returns

`boolean`
