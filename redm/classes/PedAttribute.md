[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / PedAttribute

# Class: PedAttribute

Defined in: redm/Attribute.d.ts:25

## Constructors

### new PedAttribute()

```ts
new PedAttribute(ped, attribute): PedAttribute
```

Defined in: redm/Attribute.d.ts:28

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

Defined in: redm/Attribute.d.ts:51

##### Returns

`number`

#### Set Signature

```ts
set BaseRank(amount): void
```

Defined in: redm/Attribute.d.ts:50

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

Defined in: redm/Attribute.d.ts:53

##### Returns

`number`

#### Set Signature

```ts
set BonusRank(amount): void
```

Defined in: redm/Attribute.d.ts:52

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

Defined in: redm/Attribute.d.ts:54

##### Returns

`number`

***

### Overpowered

#### Get Signature

```ts
get Overpowered(): boolean
```

Defined in: redm/Attribute.d.ts:55

##### Returns

`boolean`

***

### Points

#### Get Signature

```ts
get Points(): number
```

Defined in: redm/Attribute.d.ts:47

Gets the amount of attribute points the ped has

##### Returns

`number`

#### Set Signature

```ts
set Points(amount): void
```

Defined in: redm/Attribute.d.ts:48

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

Defined in: redm/Attribute.d.ts:49

##### Returns

`number`

## Methods

### addPoints()

```ts
addPoints(amount): void
```

Defined in: redm/Attribute.d.ts:33

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

Defined in: redm/Attribute.d.ts:37

Disables the overpower state on this attribute, see [enableOverpower](PedAttribute.md#enableoverpower) on how to enable

#### Returns

`void`

***

### enableOverpower()

```ts
enableOverpower(amount, makeSound?): void
```

Defined in: redm/Attribute.d.ts:43

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the amount to overpower this attribute by |
| `makeSound`? | `boolean` | if activating the overpower should play sound |

#### Returns

`void`
