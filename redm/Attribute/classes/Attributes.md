[@nativewrappers/fivem](../../../README.md) / [redm/Attribute](../README.md) / Attributes

# Class: Attributes

Defined in: lib/redm/Attribute.d.ts:57

## Constructors

### Constructor

```ts
new Attributes(ped): Attributes;
```

Defined in: lib/redm/Attribute.d.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](../../entities/Ped/classes/Ped.md) |

#### Returns

`Attributes`

## Accessors

### CoreIcon

#### Set Signature

```ts
set CoreIcon(status): void;
```

Defined in: lib/redm/Attribute.d.ts:63

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`eHudStatusEffect`](../../enums/Attributes/enumerations/eHudStatusEffect.md) |

##### Returns

`void`

***

### PeriodicIcon

#### Set Signature

```ts
set PeriodicIcon(status): void;
```

Defined in: lib/redm/Attribute.d.ts:64

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`eHudStatusEffect`](../../enums/Attributes/enumerations/eHudStatusEffect.md) |

##### Returns

`void`

## Methods

### get()

```ts
get(attribute): PedAttribute;
```

Defined in: lib/redm/Attribute.d.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attribute` | [`ePedAttribute`](../../enums/Attributes/enumerations/ePedAttribute.md) |

#### Returns

[`PedAttribute`](PedAttribute.md)

***

### getCore()

```ts
getCore(attribute): CoreAttribute;
```

Defined in: lib/redm/Attribute.d.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attribute` | [`eAttributeCore`](../../enums/Attributes/enumerations/eAttributeCore.md) |

#### Returns

[`CoreAttribute`](CoreAttribute.md)
