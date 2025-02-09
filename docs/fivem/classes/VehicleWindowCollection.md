[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleWindowCollection

# Class: VehicleWindowCollection

Defined in: [src/fivem/models/VehicleWindowCollection.ts:5](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/models/VehicleWindowCollection.ts#L5)

## Constructors

### new VehicleWindowCollection()

```ts
new VehicleWindowCollection(owner): VehicleWindowCollection
```

Defined in: [src/fivem/models/VehicleWindowCollection.ts:10](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/models/VehicleWindowCollection.ts#L10)

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

Defined in: [src/fivem/models/VehicleWindowCollection.ts:37](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/models/VehicleWindowCollection.ts#L37)

##### Returns

`boolean`

## Methods

### getAllWindows()

```ts
getAllWindows(): (null | VehicleWindow)[]
```

Defined in: [src/fivem/models/VehicleWindowCollection.ts:24](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/models/VehicleWindowCollection.ts#L24)

#### Returns

(`null` \| [`VehicleWindow`](VehicleWindow.md))[]

***

### getWindow()

```ts
getWindow(index): VehicleWindow
```

Defined in: [src/fivem/models/VehicleWindowCollection.ts:14](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/models/VehicleWindowCollection.ts#L14)

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

Defined in: [src/fivem/models/VehicleWindowCollection.ts:53](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/models/VehicleWindowCollection.ts#L53)

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

Defined in: [src/fivem/models/VehicleWindowCollection.ts:41](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/models/VehicleWindowCollection.ts#L41)

#### Returns

`void`

***

### rollUpAllWindows()

```ts
rollUpAllWindows(): void
```

Defined in: [src/fivem/models/VehicleWindowCollection.ts:47](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/models/VehicleWindowCollection.ts#L47)

#### Returns

`void`
