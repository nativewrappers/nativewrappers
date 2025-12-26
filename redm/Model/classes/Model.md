[@nativewrappers/fivem](../../../README.md) / [redm/Model](../README.md) / Model

# Class: Model

Defined in: lib/redm/Model.d.ts:5

Class to create and manage entity models.

## Extended by

- [`AmmoModel`](../../models/AmmoModel/classes/AmmoModel.md)
- [`WeaponModel`](../../models/WeaponModel/classes/WeaponModel.md)

## Implements

- `Disposable`

## Constructors

### Constructor

```ts
new Model(hash): Model;
```

Defined in: lib/redm/Model.d.ts:20

Creates a model object based on the hash key or model string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | `string` \| `number` | A number or string of the model's hash. Example: "mp_m_freemode_01" |

#### Returns

`Model`

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="hash"></a> `hash` | `protected` | `number` | Hash of this model. | lib/redm/Model.d.ts:9 |
| <a id="requestcount"></a> `requestCount` | `protected` | `number` | - | lib/redm/Model.d.ts:10 |

## Accessors

### Dimensions

#### Get Signature

```ts
get Dimensions(): Dimensions;
```

Defined in: lib/redm/Model.d.ts:88

Gets the model dimensions.

##### Returns

[`Dimensions`](../../interfaces/Dimensions/interfaces/Dimensions.md)

This model min & max dimensions.

***

### Hash

#### Get Signature

```ts
get Hash(): number;
```

Defined in: lib/redm/Model.d.ts:27

Gets the hash of the model.

##### Returns

`number`

The hash key.

***

### IsBoat

#### Get Signature

```ts
get IsBoat(): boolean;
```

Defined in: lib/redm/Model.d.ts:57

Gets if the model is a boat or not.

##### Returns

`boolean`

Whether this model is a boat.

***

### IsCollisionLoaded

#### Get Signature

```ts
get IsCollisionLoaded(): boolean;
```

Defined in: lib/redm/Model.d.ts:51

Gets if the model collision is loaded or not.

##### Returns

`boolean`

Whether this model collision is loaded.

***

### IsInCdImage

#### Get Signature

```ts
get IsInCdImage(): boolean;
```

Defined in: lib/redm/Model.d.ts:39

Gets if the model is in cd image or not.

##### Returns

`boolean`

Whether this model is in cd image.

***

### IsLoaded

#### Get Signature

```ts
get IsLoaded(): boolean;
```

Defined in: lib/redm/Model.d.ts:45

Gets if the model is loaded or not.

##### Returns

`boolean`

Whether this model is loaded.

***

### IsPed

#### Get Signature

```ts
get IsPed(): boolean;
```

Defined in: lib/redm/Model.d.ts:63

Gets if the model is a Ped or not.

##### Returns

`boolean`

Whether this model is a Ped.

***

### IsProp

#### Get Signature

```ts
get IsProp(): boolean;
```

Defined in: lib/redm/Model.d.ts:69

Gets if the model is a prop or not.

##### Returns

`boolean`

Whether this model is a prop.

***

### IsTrain

#### Get Signature

```ts
get IsTrain(): boolean;
```

Defined in: lib/redm/Model.d.ts:75

Gets if the model is a train or not.

##### Returns

`boolean`

Whether this model is a train.

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean;
```

Defined in: lib/redm/Model.d.ts:33

Gets if the model is valid or not.

##### Returns

`boolean`

Whether this model is valid.

***

### IsVehicle

#### Get Signature

```ts
get IsVehicle(): boolean;
```

Defined in: lib/redm/Model.d.ts:81

Gets if the model is a Vehicle or not.

##### Returns

`boolean`

Whether this model is a Vehicle.

***

### IsWeapon

#### Get Signature

```ts
get IsWeapon(): boolean;
```

Defined in: lib/redm/Model.d.ts:82

##### Returns

`boolean`

***

### RequestCount

#### Get Signature

```ts
get RequestCount(): number;
```

Defined in: lib/redm/Model.d.ts:14

Returns the amount of times this model has been requested from the client, useful for finding situations where the client fails to release the ref

##### Returns

`number`

## Methods

### \[dispose\]()

```ts
dispose: void;
```

Defined in: lib/redm/Model.d.ts:21

#### Returns

`void`

#### Implementation of

```ts
Disposable.[dispose]
```

***

### markAsNoLongerNeeded()

```ts
markAsNoLongerNeeded(): void;
```

Defined in: lib/redm/Model.d.ts:101

Sets the model as no longer needed allowing the game engine to free memory.

#### Returns

`void`

***

### request()

```ts
request(timeoutMs?): Promise<boolean>;
```

Defined in: lib/redm/Model.d.ts:97

Request and load the model with a specified timeout. Default timeout is 1000 (recommended).
This function will not automatically set the model as no longer needed when
done.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeoutMs?` | `number` | Maximum allowed time for model to load. |

#### Returns

`Promise`\<`boolean`\>

***

### requestModel()

```ts
requestModel(): void;
```

Defined in: lib/redm/Model.d.ts:89

#### Returns

`void`
