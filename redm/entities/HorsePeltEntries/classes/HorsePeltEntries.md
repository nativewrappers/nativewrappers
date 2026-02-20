[@nativewrappers/fivem](../../../../README.md) / [redm/entities/HorsePeltEntries](../README.md) / HorsePeltEntries

# Class: HorsePeltEntries

Defined in: lib/redm/entities/HorsePeltEntries.d.ts:10

## Extends

- [`BufferedClass`](../../../BufferedClass/classes/BufferedClass.md)

## Constructors

### Constructor

```ts
new HorsePeltEntries(horse): HorsePeltEntries;
```

Defined in: lib/redm/entities/HorsePeltEntries.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `horse` | [`Ped`](../../Ped/classes/Ped.md) |

#### Returns

`HorsePeltEntries`

#### Overrides

[`BufferedClass`](../../../BufferedClass/classes/BufferedClass.md).[`constructor`](../../../BufferedClass/classes/BufferedClass.md#constructor)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="buffer"></a> `buffer` | `ArrayBuffer` | [`BufferedClass`](../../../BufferedClass/classes/BufferedClass.md).[`buffer`](../../../BufferedClass/classes/BufferedClass.md#buffer) | lib/redm/BufferedClass.d.ts:3 |
| <a id="view"></a> `view` | `DataView` | [`BufferedClass`](../../../BufferedClass/classes/BufferedClass.md).[`view`](../../../BufferedClass/classes/BufferedClass.md#view) | lib/redm/BufferedClass.d.ts:4 |

## Methods

### GetAllPelts()

```ts
GetAllPelts(): Generator<HorsePeltEntry, void, unknown>;
```

Defined in: lib/redm/entities/HorsePeltEntries.d.ts:12

#### Returns

`Generator`\<`HorsePeltEntry`, `void`, `unknown`\>

***

### getPeltEntry()

```ts
getPeltEntry(index): HorsePeltEntry;
```

Defined in: lib/redm/entities/HorsePeltEntries.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`HorsePeltEntry`
