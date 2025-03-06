[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Model

# Class: Model

Defined in: redm/Model.d.ts:5

Class to create and manage entity models.

## Implements

- `Disposable`

## Constructors

### new Model()

```ts
new Model(hash): Model
```

Defined in: redm/Model.d.ts:16

Creates a model object based on the hash key or model string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | `string` \| `number` | A number or string of the model's hash. Example: "mp_m_freemode_01" |

#### Returns

[`Model`](Model.md)

## Accessors

### Dimensions

#### Get Signature

```ts
get Dimensions(): Dimensions
```

Defined in: redm/Model.d.ts:83

Gets the model dimensions.

##### Returns

`Dimensions`

This model min & max dimensions.

***

### Hash

#### Get Signature

```ts
get Hash(): number
```

Defined in: redm/Model.d.ts:23

Gets the hash of the model.

##### Returns

`number`

The hash key.

***

### IsBoat

#### Get Signature

```ts
get IsBoat(): boolean
```

Defined in: redm/Model.d.ts:53

Gets if the model is a boat or not.

##### Returns

`boolean`

Whether this model is a boat.

***

### IsCollisionLoaded

#### Get Signature

```ts
get IsCollisionLoaded(): boolean
```

Defined in: redm/Model.d.ts:47

Gets if the model collision is loaded or not.

##### Returns

`boolean`

Whether this model collision is loaded.

***

### IsInCdImage

#### Get Signature

```ts
get IsInCdImage(): boolean
```

Defined in: redm/Model.d.ts:35

Gets if the model is in cd image or not.

##### Returns

`boolean`

Whether this model is in cd image.

***

### IsLoaded

#### Get Signature

```ts
get IsLoaded(): boolean
```

Defined in: redm/Model.d.ts:41

Gets if the model is loaded or not.

##### Returns

`boolean`

Whether this model is loaded.

***

### IsPed

#### Get Signature

```ts
get IsPed(): boolean
```

Defined in: redm/Model.d.ts:59

Gets if the model is a Ped or not.

##### Returns

`boolean`

Whether this model is a Ped.

***

### IsProp

#### Get Signature

```ts
get IsProp(): boolean
```

Defined in: redm/Model.d.ts:65

Gets if the model is a prop or not.

##### Returns

`boolean`

Whether this model is a prop.

***

### IsTrain

#### Get Signature

```ts
get IsTrain(): boolean
```

Defined in: redm/Model.d.ts:71

Gets if the model is a train or not.

##### Returns

`boolean`

Whether this model is a train.

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean
```

Defined in: redm/Model.d.ts:29

Gets if the model is valid or not.

##### Returns

`boolean`

Whether this model is valid.

***

### IsVehicle

#### Get Signature

```ts
get IsVehicle(): boolean
```

Defined in: redm/Model.d.ts:77

Gets if the model is a Vehicle or not.

##### Returns

`boolean`

Whether this model is a Vehicle.

## Methods

### \[dispose\]()

```ts
dispose: void
```

Defined in: redm/Model.d.ts:17

#### Returns

`void`

#### Implementation of

```ts
Disposable.[dispose]
```

***

### markAsNoLongerNeeded()

```ts
markAsNoLongerNeeded(): void
```

Defined in: redm/Model.d.ts:95

Sets the model as no longer needed allowing the game engine to free memory.

#### Returns

`void`

***

### request()

```ts
request(timeoutMs?): Promise<boolean>
```

Defined in: redm/Model.d.ts:91

Request and load the model with a specified timeout. Default timeout is 1000 (recommended).
This function will not automatically set the model as no longer needed when
done.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeoutMs`? | `number` | Maximum allowed time for model to load. |

#### Returns

`Promise`\<`boolean`\>
