[@nativewrappers/fivem](../../../README.md) / [redm/Attribute](../README.md) / CoreAttribute

# Class: CoreAttribute

Defined in: lib/redm/Attribute.d.ts:3

## Constructors

### Constructor

```ts
new CoreAttribute(ped, attribute): CoreAttribute;
```

Defined in: lib/redm/Attribute.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](../../entities/Ped/classes/Ped.md) |
| `attribute` | [`eAttributeCore`](../../enums/Attributes/enumerations/eAttributeCore.md) |

#### Returns

`CoreAttribute`

## Accessors

### CoreValue

#### Get Signature

```ts
get CoreValue(): number;
```

Defined in: lib/redm/Attribute.d.ts:22

Returns how full the core is

##### Returns

`number`

#### Set Signature

```ts
set CoreValue(amount): void;
```

Defined in: lib/redm/Attribute.d.ts:23

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
get Overpowered(): boolean;
```

Defined in: lib/redm/Attribute.d.ts:14

##### Returns

`boolean`

***

### OverpoweredTimeLeft

#### Get Signature

```ts
get OverpoweredTimeLeft(): number;
```

Defined in: lib/redm/Attribute.d.ts:18

##### Returns

`number`

the amount of overpower time left in seconds

## Methods

### enableOverpower()

```ts
enableOverpower(amount, makeSound?): void;
```

Defined in: lib/redm/Attribute.d.ts:13

This doesn't seem to actually do anything

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` |  |
| `makeSound?` | `boolean` |  |

#### Returns

`void`

#### Todo

maybe remove unless theres a valid use case
