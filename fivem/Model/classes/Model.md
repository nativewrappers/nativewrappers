[@nativewrappers/fivem](../../../README.md) / [fivem/Model](../README.md) / Model

# Class: Model

Defined in: lib/fivem/Model.d.ts:5

Class to create and manage entity models.

## Implements

- `Disposable`

## Constructors

### Constructor

```ts
new Model(hash): Model;
```

Defined in: lib/fivem/Model.d.ts:16

Creates a model object based on the hash key or model string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | `string` \| `number` | A number or string of the model's hash. Example: "mp_m_freemode_01" |

#### Returns

`Model`

## Accessors

### Dimensions

#### Get Signature

```ts
get Dimensions(): Dimensions;
```

Defined in: lib/fivem/Model.d.ts:125

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

Defined in: lib/fivem/Model.d.ts:23

Gets the hash of the model.

##### Returns

`number`

The hash key.

***

### IsBicycle

#### Get Signature

```ts
get IsBicycle(): boolean;
```

Defined in: lib/fivem/Model.d.ts:53

Gets if the model is a bicycle or not.

##### Returns

`boolean`

Whether this model is a bicycle.

***

### IsBike

#### Get Signature

```ts
get IsBike(): boolean;
```

Defined in: lib/fivem/Model.d.ts:59

Gets if the model is a motorbike or not.

##### Returns

`boolean`

Whether this model is a motorbike.

***

### IsBoat

#### Get Signature

```ts
get IsBoat(): boolean;
```

Defined in: lib/fivem/Model.d.ts:65

Gets if the model is a boat or not.

##### Returns

`boolean`

Whether this model is a boat.

***

### IsCar

#### Get Signature

```ts
get IsCar(): boolean;
```

Defined in: lib/fivem/Model.d.ts:71

Gets if the model is a car or not.

##### Returns

`boolean`

Whether this model is a car.

***

### IsCargobob

#### Get Signature

```ts
get IsCargobob(): boolean;
```

Defined in: lib/fivem/Model.d.ts:77

Gets if the model is a cargobob or not.

##### Returns

`boolean`

Whether this model is a cargobob.

***

### IsCollisionLoaded

#### Get Signature

```ts
get IsCollisionLoaded(): boolean;
```

Defined in: lib/fivem/Model.d.ts:47

Gets if the model collision is loaded or not.

##### Returns

`boolean`

Whether this model collision is loaded.

***

### IsHelicopter

#### Get Signature

```ts
get IsHelicopter(): boolean;
```

Defined in: lib/fivem/Model.d.ts:83

Gets if the model is a helicopter or not.

##### Returns

`boolean`

Whether this model is a helicopter.

***

### IsInCdImage

#### Get Signature

```ts
get IsInCdImage(): boolean;
```

Defined in: lib/fivem/Model.d.ts:35

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

Defined in: lib/fivem/Model.d.ts:41

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

Defined in: lib/fivem/Model.d.ts:89

Gets if the model is a Ped or not.

##### Returns

`boolean`

Whether this model is a Ped.

***

### IsPlane

#### Get Signature

```ts
get IsPlane(): boolean;
```

Defined in: lib/fivem/Model.d.ts:95

Gets if the model is a plane or not.

##### Returns

`boolean`

Whether this model is a plane.

***

### IsProp

#### Get Signature

```ts
get IsProp(): boolean;
```

Defined in: lib/fivem/Model.d.ts:101

Gets if the model is a prop or not.

##### Returns

`boolean`

Whether this model is a prop.

***

### IsQuadbike

#### Get Signature

```ts
get IsQuadbike(): boolean;
```

Defined in: lib/fivem/Model.d.ts:107

Gets if the model is a quadbike or not.

##### Returns

`boolean`

Whether this model is a quadbike.

***

### IsTrain

#### Get Signature

```ts
get IsTrain(): boolean;
```

Defined in: lib/fivem/Model.d.ts:113

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

Defined in: lib/fivem/Model.d.ts:29

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

Defined in: lib/fivem/Model.d.ts:119

Gets if the model is a Vehicle or not.

##### Returns

`boolean`

Whether this model is a Vehicle.

## Methods

### \[dispose\]()

```ts
dispose: void;
```

Defined in: lib/fivem/Model.d.ts:17

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

Defined in: lib/fivem/Model.d.ts:137

Sets the model as no longer needed allowing the game engine to free memory.

#### Returns

`void`

***

### request()

```ts
request(timeoutMs?): Promise<boolean>;
```

Defined in: lib/fivem/Model.d.ts:133

Request and load the model with a specified timeout. Default timeout is 1000 (recommended).
This function will not automatically set the model as no longer needed when
done.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeoutMs?` | `number` | Maximum allowed time for model to load. |

#### Returns

`Promise`\<`boolean`\>
