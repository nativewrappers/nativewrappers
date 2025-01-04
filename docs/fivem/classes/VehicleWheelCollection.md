[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleWheelCollection

# Class: VehicleWheelCollection

## Constructors

### new VehicleWheelCollection()

```ts
new VehicleWheelCollection(owner): VehicleWheelCollection
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleWheelCollection`](VehicleWheelCollection.md)

#### Defined in

[src/fivem/models/VehicleWheelCollection.ts:12](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWheelCollection.ts#L12)

## Methods

### burstAllWheels()

```ts
burstAllWheels(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/VehicleWheelCollection.ts:36](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWheelCollection.ts#L36)

***

### fixAllWheels()

```ts
fixAllWheels(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/VehicleWheelCollection.ts:42](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWheelCollection.ts#L42)

***

### getAllWheels()

```ts
getAllWheels(): (undefined | null | VehicleWheel)[]
```

#### Returns

(`undefined` \| `null` \| [`VehicleWheel`](VehicleWheel.md))[]

#### Defined in

[src/fivem/models/VehicleWheelCollection.ts:23](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWheelCollection.ts#L23)

***

### getWheel()

```ts
getWheel(index): undefined | VehicleWheel
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md) |

#### Returns

`undefined` \| [`VehicleWheel`](VehicleWheel.md)

#### Defined in

[src/fivem/models/VehicleWheelCollection.ts:16](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWheelCollection.ts#L16)

***

### hasWheel()

```ts
hasWheel(wheel): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `wheel` | [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/VehicleWheelCollection.ts:48](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWheelCollection.ts#L48)
