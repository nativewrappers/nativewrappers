[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Attributes

# Class: Attributes

## Constructors

### new Attributes()

```ts
new Attributes(ped): Attributes
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

[`Attributes`](Attributes.md)

#### Defined in

[src/redm/Attribute.ts:149](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L149)

## Accessors

### CoreIcon

```ts
set CoreIcon(status): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`eHudStatusEffect`](../enumerations/eHudStatusEffect.md) |

#### Defined in

[src/redm/Attribute.ts:176](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L176)

***

### PeriodicIcon

```ts
set PeriodicIcon(status): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`eHudStatusEffect`](../enumerations/eHudStatusEffect.md) |

#### Defined in

[src/redm/Attribute.ts:184](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L184)

## Methods

### get()

```ts
get(attribute): PedAttribute
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attribute` | [`ePedAttribute`](../enumerations/ePedAttribute.md) |

#### Returns

[`PedAttribute`](PedAttribute.md)

#### Defined in

[src/redm/Attribute.ts:168](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L168)

***

### getCore()

```ts
getCore(attribute): CoreAttribute
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attribute` | [`eAttributeCore`](../enumerations/eAttributeCore.md) |

#### Returns

[`CoreAttribute`](CoreAttribute.md)

#### Defined in

[src/redm/Attribute.ts:159](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L159)
