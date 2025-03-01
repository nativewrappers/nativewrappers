[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Attributes

# Class: Attributes

Defined in: redm/Attribute.d.ts:57

## Constructors

### new Attributes()

```ts
new Attributes(ped): Attributes
```

Defined in: redm/Attribute.d.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

[`Attributes`](Attributes.md)

## Accessors

### CoreIcon

#### Set Signature

```ts
set CoreIcon(status): void
```

Defined in: redm/Attribute.d.ts:63

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`eHudStatusEffect`](../enumerations/eHudStatusEffect.md) |

##### Returns

`void`

***

### PeriodicIcon

#### Set Signature

```ts
set PeriodicIcon(status): void
```

Defined in: redm/Attribute.d.ts:64

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`eHudStatusEffect`](../enumerations/eHudStatusEffect.md) |

##### Returns

`void`

## Methods

### get()

```ts
get(attribute): PedAttribute
```

Defined in: redm/Attribute.d.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attribute` | [`ePedAttribute`](../enumerations/ePedAttribute.md) |

#### Returns

[`PedAttribute`](PedAttribute.md)

***

### getCore()

```ts
getCore(attribute): CoreAttribute
```

Defined in: redm/Attribute.d.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attribute` | [`eAttributeCore`](../enumerations/eAttributeCore.md) |

#### Returns

[`CoreAttribute`](CoreAttribute.md)
