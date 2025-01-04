[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / PedAttribute

# Class: PedAttribute

Defined in: [src/redm/Attribute.ts:62](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L62)

## Constructors

### new PedAttribute()

```ts
new PedAttribute(ped, attribute): PedAttribute
```

Defined in: [src/redm/Attribute.ts:65](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L65)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |
| `attribute` | [`ePedAttribute`](../enumerations/ePedAttribute.md) |

#### Returns

[`PedAttribute`](PedAttribute.md)

## Accessors

### BaseRank

#### Get Signature

```ts
get BaseRank(): number
```

Defined in: [src/redm/Attribute.ts:114](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L114)

##### Returns

`number`

#### Set Signature

```ts
set BaseRank(amount): void
```

Defined in: [src/redm/Attribute.ts:110](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L110)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### BonusRank

#### Get Signature

```ts
get BonusRank(): number
```

Defined in: [src/redm/Attribute.ts:122](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L122)

##### Returns

`number`

#### Set Signature

```ts
set BonusRank(amount): void
```

Defined in: [src/redm/Attribute.ts:118](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L118)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### MaxRank

#### Get Signature

```ts
get MaxRank(): number
```

Defined in: [src/redm/Attribute.ts:126](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L126)

##### Returns

`number`

***

### Overpowered

#### Get Signature

```ts
get Overpowered(): boolean
```

Defined in: [src/redm/Attribute.ts:135](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L135)

##### Returns

`boolean`

***

### Points

#### Get Signature

```ts
get Points(): number
```

Defined in: [src/redm/Attribute.ts:98](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L98)

Gets the amount of attribute points the ped has

##### Returns

`number`

#### Set Signature

```ts
set Points(amount): void
```

Defined in: [src/redm/Attribute.ts:102](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L102)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### Rank

#### Get Signature

```ts
get Rank(): number
```

Defined in: [src/redm/Attribute.ts:106](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L106)

##### Returns

`number`

## Methods

### addPoints()

```ts
addPoints(amount): void
```

Defined in: [src/redm/Attribute.ts:74](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L74)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the amount of points to add to the attribute |

#### Returns

`void`

***

### disableOverpower()

```ts
disableOverpower(): void
```

Defined in: [src/redm/Attribute.ts:81](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L81)

Disables the overpower state on this attribute, see [enableOverpower](PedAttribute.md#enableoverpower) on how to enable

#### Returns

`void`

***

### enableOverpower()

```ts
enableOverpower(amount, makeSound): void
```

Defined in: [src/redm/Attribute.ts:90](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/redm/Attribute.ts#L90)

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `amount` | `number` | `undefined` | the amount to overpower this attribute by |
| `makeSound` | `boolean` | `false` | if activating the overpower should play sound |

#### Returns

`void`
