[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Attributes

# Class: Attributes

Defined in: [src/redm/Attribute.ts:146](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/redm/Attribute.ts#L146)

## Constructors

### new Attributes()

```ts
new Attributes(ped): Attributes
```

Defined in: [src/redm/Attribute.ts:149](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/redm/Attribute.ts#L149)

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

Defined in: [src/redm/Attribute.ts:176](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/redm/Attribute.ts#L176)

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

Defined in: [src/redm/Attribute.ts:184](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/redm/Attribute.ts#L184)

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

Defined in: [src/redm/Attribute.ts:168](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/redm/Attribute.ts#L168)

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

Defined in: [src/redm/Attribute.ts:159](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/redm/Attribute.ts#L159)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attribute` | [`eAttributeCore`](../enumerations/eAttributeCore.md) |

#### Returns

[`CoreAttribute`](CoreAttribute.md)
