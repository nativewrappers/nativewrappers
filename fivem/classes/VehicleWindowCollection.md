[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleWindowCollection

# Class: VehicleWindowCollection

Defined in: fivem/models/VehicleWindowCollection.d.ts:4

## Constructors

### new VehicleWindowCollection()

```ts
new VehicleWindowCollection(owner): VehicleWindowCollection
```

Defined in: fivem/models/VehicleWindowCollection.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

## Accessors

### AreAllWindowsIntact

#### Get Signature

```ts
get AreAllWindowsIntact(): boolean
```

Defined in: fivem/models/VehicleWindowCollection.d.ts:10

##### Returns

`boolean`

## Methods

### getAllWindows()

```ts
getAllWindows(): (null | VehicleWindow)[]
```

Defined in: fivem/models/VehicleWindowCollection.d.ts:9

#### Returns

(`null` \| [`VehicleWindow`](VehicleWindow.md))[]

***

### getWindow()

```ts
getWindow(index): VehicleWindow
```

Defined in: fivem/models/VehicleWindowCollection.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

[`VehicleWindow`](VehicleWindow.md)

***

### hasWindow()

```ts
hasWindow(window): boolean
```

Defined in: fivem/models/VehicleWindowCollection.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `window` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

`boolean`

***

### rollDownAllWindows()

```ts
rollDownAllWindows(): void
```

Defined in: fivem/models/VehicleWindowCollection.d.ts:11

#### Returns

`void`

***

### rollUpAllWindows()

```ts
rollUpAllWindows(): void
```

Defined in: fivem/models/VehicleWindowCollection.d.ts:12

#### Returns

`void`
