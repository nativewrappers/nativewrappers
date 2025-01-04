[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / PedAttribute

# Class: PedAttribute

## Constructors

### new PedAttribute()

```ts
new PedAttribute(ped, attribute): PedAttribute
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |
| `attribute` | [`ePedAttribute`](../enumerations/ePedAttribute.md) |

#### Returns

[`PedAttribute`](PedAttribute.md)

#### Defined in

[src/redm/Attribute.ts:65](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L65)

## Accessors

### BaseRank

```ts
get BaseRank(): number
```

```ts
set BaseRank(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/redm/Attribute.ts:114](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L114)

***

### BonusRank

```ts
get BonusRank(): number
```

```ts
set BonusRank(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/redm/Attribute.ts:122](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L122)

***

### MaxRank

```ts
get MaxRank(): number
```

#### Returns

`number`

#### Defined in

[src/redm/Attribute.ts:126](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L126)

***

### Overpowered

```ts
get Overpowered(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/Attribute.ts:135](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L135)

***

### Points

```ts
get Points(): number
```

Gets the amount of attribute points the ped has

```ts
set Points(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/redm/Attribute.ts:98](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L98)

***

### Rank

```ts
get Rank(): number
```

#### Returns

`number`

#### Defined in

[src/redm/Attribute.ts:106](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L106)

## Methods

### addPoints()

```ts
addPoints(amount): void
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the amount of points to add to the attribute |

#### Returns

`void`

#### Defined in

[src/redm/Attribute.ts:74](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L74)

***

### disableOverpower()

```ts
disableOverpower(): void
```

Disables the overpower state on this attribute, see [enableOverpower](PedAttribute.md#enableoverpower) on how to enable

#### Returns

`void`

#### Defined in

[src/redm/Attribute.ts:81](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L81)

***

### enableOverpower()

```ts
enableOverpower(amount, makeSound): void
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `amount` | `number` | `undefined` | the amount to overpower this attribute by |
| `makeSound` | `boolean` | `false` | if activating the overpower should play sound |

#### Returns

`void`

#### Defined in

[src/redm/Attribute.ts:90](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L90)
