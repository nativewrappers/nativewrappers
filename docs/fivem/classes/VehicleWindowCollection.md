[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / VehicleWindowCollection

# Class: VehicleWindowCollection

## Constructors

### new VehicleWindowCollection()

```ts
new VehicleWindowCollection(owner): VehicleWindowCollection
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

#### Defined in

[src/fivem/models/VehicleWindowCollection.ts:10](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWindowCollection.ts#L10)

## Accessors

### AreAllWindowsIntact

```ts
get AreAllWindowsIntact(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/VehicleWindowCollection.ts:37](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWindowCollection.ts#L37)

## Methods

### getAllWindows()

```ts
getAllWindows(): (null | VehicleWindow)[]
```

#### Returns

(`null` \| [`VehicleWindow`](VehicleWindow.md))[]

#### Defined in

[src/fivem/models/VehicleWindowCollection.ts:24](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWindowCollection.ts#L24)

***

### getWindow()

```ts
getWindow(index): VehicleWindow
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

[`VehicleWindow`](VehicleWindow.md)

#### Defined in

[src/fivem/models/VehicleWindowCollection.ts:14](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWindowCollection.ts#L14)

***

### hasWindow()

```ts
hasWindow(window): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `window` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/VehicleWindowCollection.ts:53](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWindowCollection.ts#L53)

***

### rollDownAllWindows()

```ts
rollDownAllWindows(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/VehicleWindowCollection.ts:41](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWindowCollection.ts#L41)

***

### rollUpAllWindows()

```ts
rollUpAllWindows(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/VehicleWindowCollection.ts:47](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/VehicleWindowCollection.ts#L47)
