[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / CoreAttribute

# Class: CoreAttribute

Defined in: [src/redm/Attribute.ts:9](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/Attribute.ts#L9)

## Constructors

### new CoreAttribute()

```ts
new CoreAttribute(ped, attribute): CoreAttribute
```

Defined in: [src/redm/Attribute.ts:12](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/Attribute.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |
| `attribute` | [`eAttributeCore`](../enumerations/eAttributeCore.md) |

#### Returns

[`CoreAttribute`](CoreAttribute.md)

## Accessors

### CoreValue

#### Get Signature

```ts
get CoreValue(): number
```

Defined in: [src/redm/Attribute.ts:52](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/Attribute.ts#L52)

Returns how full the core is

##### Returns

`number`

#### Set Signature

```ts
set CoreValue(amount): void
```

Defined in: [src/redm/Attribute.ts:56](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/Attribute.ts#L56)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### Overpowered

#### Get Signature

```ts
get Overpowered(): boolean
```

Defined in: [src/redm/Attribute.ts:28](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/Attribute.ts#L28)

##### Returns

`boolean`

***

### OverpoweredTimeLeft

#### Get Signature

```ts
get OverpoweredTimeLeft(): number
```

Defined in: [src/redm/Attribute.ts:39](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/Attribute.ts#L39)

##### Returns

`number`

the amount of overpower time left in seconds

## Methods

### enableOverpower()

```ts
enableOverpower(amount, makeSound): void
```

Defined in: [src/redm/Attribute.ts:23](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/redm/Attribute.ts#L23)

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
