[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / CoreAttribute

# Class: CoreAttribute

## Constructors

### new CoreAttribute()

```ts
new CoreAttribute(ped, attribute): CoreAttribute
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |
| `attribute` | [`eAttributeCore`](../enumerations/eAttributeCore.md) |

#### Returns

[`CoreAttribute`](CoreAttribute.md)

#### Defined in

[src/redm/Attribute.ts:12](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L12)

## Accessors

### CoreValue

```ts
get CoreValue(): number
```

Returns how full the core is

```ts
set CoreValue(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/redm/Attribute.ts:52](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L52)

***

### Overpowered

```ts
get Overpowered(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/Attribute.ts:28](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L28)

***

### OverpoweredTimeLeft

```ts
get OverpoweredTimeLeft(): number
```

#### Returns

`number`

the amount of overpower time left in seconds

#### Defined in

[src/redm/Attribute.ts:39](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L39)

## Methods

### enableOverpower()

```ts
enableOverpower(amount, makeSound): void
```

This doesn't seem to actually do anything

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `amount` | `number` | `undefined` |  |
| `makeSound` | `boolean` | `false` |  |

#### Returns

`void`

#### Todo

maybe remove unless theres a valid use case

#### Defined in

[src/redm/Attribute.ts:23](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/Attribute.ts#L23)
