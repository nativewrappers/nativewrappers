[@nativewrappers/fivem](../../../../README.md) / [fivem/models/VehicleWindowCollection](../README.md) / VehicleWindowCollection

# Class: VehicleWindowCollection

Defined in: lib/fivem/models/VehicleWindowCollection.d.ts:4

## Constructors

### Constructor

```ts
new VehicleWindowCollection(owner): VehicleWindowCollection;
```

Defined in: lib/fivem/models/VehicleWindowCollection.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) |

#### Returns

`VehicleWindowCollection`

## Accessors

### AreAllWindowsIntact

#### Get Signature

```ts
get AreAllWindowsIntact(): boolean;
```

Defined in: lib/fivem/models/VehicleWindowCollection.d.ts:10

##### Returns

`boolean`

## Methods

### getAllWindows()

```ts
getAllWindows(): (null | VehicleWindow)[];
```

Defined in: lib/fivem/models/VehicleWindowCollection.d.ts:9

#### Returns

(`null` \| [`VehicleWindow`](../../VehicleWindow/classes/VehicleWindow.md))[]

***

### getWindow()

```ts
getWindow(index): VehicleWindow;
```

Defined in: lib/fivem/models/VehicleWindowCollection.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleWindowIndex`](../../../enums/Vehicle/enumerations/VehicleWindowIndex.md) |

#### Returns

[`VehicleWindow`](../../VehicleWindow/classes/VehicleWindow.md)

***

### hasWindow()

```ts
hasWindow(window): boolean;
```

Defined in: lib/fivem/models/VehicleWindowCollection.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `window` | [`VehicleWindowIndex`](../../../enums/Vehicle/enumerations/VehicleWindowIndex.md) |

#### Returns

`boolean`

***

### rollDownAllWindows()

```ts
rollDownAllWindows(): void;
```

Defined in: lib/fivem/models/VehicleWindowCollection.d.ts:11

#### Returns

`void`

***

### rollUpAllWindows()

```ts
rollUpAllWindows(): void;
```

Defined in: lib/fivem/models/VehicleWindowCollection.d.ts:12

#### Returns

`void`
