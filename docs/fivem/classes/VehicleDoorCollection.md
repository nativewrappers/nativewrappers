[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleDoorCollection

# Class: VehicleDoorCollection

Defined in: [src/fivem/models/VehicleDoorCollection.ts:5](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/models/VehicleDoorCollection.ts#L5)

## Constructors

### new VehicleDoorCollection()

```ts
new VehicleDoorCollection(owner): VehicleDoorCollection
```

Defined in: [src/fivem/models/VehicleDoorCollection.ts:12](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/models/VehicleDoorCollection.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleDoorCollection`](VehicleDoorCollection.md)

## Methods

### breakAllDoors()

```ts
breakAllDoors(stayInTheWorld?): void
```

Defined in: [src/fivem/models/VehicleDoorCollection.ts:48](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/models/VehicleDoorCollection.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stayInTheWorld`? | `boolean` |

#### Returns

`void`

***

### closeAllDoors()

```ts
closeAllDoors(instantly?): void
```

Defined in: [src/fivem/models/VehicleDoorCollection.ts:42](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/models/VehicleDoorCollection.ts#L42)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instantly`? | `boolean` |

#### Returns

`void`

***

### getAllDoors()

```ts
getAllDoors(): (undefined | null | VehicleDoor)[]
```

Defined in: [src/fivem/models/VehicleDoorCollection.ts:23](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/models/VehicleDoorCollection.ts#L23)

#### Returns

(`undefined` \| `null` \| [`VehicleDoor`](VehicleDoor.md))[]

***

### getDoors()

```ts
getDoors(index): undefined | VehicleDoor
```

Defined in: [src/fivem/models/VehicleDoorCollection.ts:16](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/models/VehicleDoorCollection.ts#L16)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

#### Returns

`undefined` \| [`VehicleDoor`](VehicleDoor.md)

***

### hasDoor()

```ts
hasDoor(index): boolean
```

Defined in: [src/fivem/models/VehicleDoorCollection.ts:54](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/models/VehicleDoorCollection.ts#L54)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

#### Returns

`boolean`

***

### openAllDoors()

```ts
openAllDoors(loose?, instantly?): void
```

Defined in: [src/fivem/models/VehicleDoorCollection.ts:36](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/models/VehicleDoorCollection.ts#L36)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `loose`? | `boolean` |
| `instantly`? | `boolean` |

#### Returns

`void`
