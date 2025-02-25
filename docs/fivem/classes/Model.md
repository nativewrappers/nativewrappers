[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Model

# Class: Model

Defined in: [src/fivem/Model.ts:9](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L9)

Class to create and manage entity models.

## Implements

- `Disposable`

## Constructors

### new Model()

```ts
new Model(hash): Model
```

Defined in: [src/fivem/Model.ts:21](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L21)

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

Defined in: [src/fivem/Model.ts:203](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L203)

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

Defined in: [src/fivem/Model.ts:40](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L40)

Gets the hash of the model.

##### Returns

`number`

The hash key.

***

### IsBicycle

#### Get Signature

```ts
get IsBicycle(): boolean
```

Defined in: [src/fivem/Model.ts:85](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L85)

Gets if the model is a bicycle or not.

##### Returns

`boolean`

Whether this model is a bicycle.

***

### IsBike

#### Get Signature

```ts
get IsBike(): boolean
```

Defined in: [src/fivem/Model.ts:94](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L94)

Gets if the model is a motorbike or not.

##### Returns

`boolean`

Whether this model is a motorbike.

***

### IsBoat

#### Get Signature

```ts
get IsBoat(): boolean
```

Defined in: [src/fivem/Model.ts:103](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L103)

Gets if the model is a boat or not.

##### Returns

`boolean`

Whether this model is a boat.

***

### IsCar

#### Get Signature

```ts
get IsCar(): boolean
```

Defined in: [src/fivem/Model.ts:112](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L112)

Gets if the model is a car or not.

##### Returns

`boolean`

Whether this model is a car.

***

### IsCargobob

#### Get Signature

```ts
get IsCargobob(): boolean
```

Defined in: [src/fivem/Model.ts:121](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L121)

Gets if the model is a cargobob or not.

##### Returns

`boolean`

Whether this model is a cargobob.

***

### IsCollisionLoaded

#### Get Signature

```ts
get IsCollisionLoaded(): boolean
```

Defined in: [src/fivem/Model.ts:76](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L76)

Gets if the model collision is loaded or not.

##### Returns

`boolean`

Whether this model collision is loaded.

***

### IsHelicopter

#### Get Signature

```ts
get IsHelicopter(): boolean
```

Defined in: [src/fivem/Model.ts:135](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L135)

Gets if the model is a helicopter or not.

##### Returns

`boolean`

Whether this model is a helicopter.

***

### IsInCdImage

#### Get Signature

```ts
get IsInCdImage(): boolean
```

Defined in: [src/fivem/Model.ts:58](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L58)

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

Defined in: [src/fivem/Model.ts:67](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L67)

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

Defined in: [src/fivem/Model.ts:144](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L144)

Gets if the model is a Ped or not.

##### Returns

`boolean`

Whether this model is a Ped.

***

### IsPlane

#### Get Signature

```ts
get IsPlane(): boolean
```

Defined in: [src/fivem/Model.ts:153](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L153)

Gets if the model is a plane or not.

##### Returns

`boolean`

Whether this model is a plane.

***

### IsProp

#### Get Signature

```ts
get IsProp(): boolean
```

Defined in: [src/fivem/Model.ts:162](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L162)

Gets if the model is a prop or not.

##### Returns

`boolean`

Whether this model is a prop.

***

### IsQuadbike

#### Get Signature

```ts
get IsQuadbike(): boolean
```

Defined in: [src/fivem/Model.ts:176](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L176)

Gets if the model is a quadbike or not.

##### Returns

`boolean`

Whether this model is a quadbike.

***

### IsTrain

#### Get Signature

```ts
get IsTrain(): boolean
```

Defined in: [src/fivem/Model.ts:185](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L185)

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

Defined in: [src/fivem/Model.ts:49](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L49)

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

Defined in: [src/fivem/Model.ts:194](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L194)

Gets if the model is a Vehicle or not.

##### Returns

`boolean`

Whether this model is a Vehicle.

## Methods

### \[dispose\]()

```ts
dispose: void
```

Defined in: [src/fivem/Model.ts:29](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L29)

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

Defined in: [src/fivem/Model.ts:238](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L238)

Sets the model as no longer needed allowing the game engine to free memory.

#### Returns

`void`

***

### request()

```ts
request(timeoutMs): Promise<boolean>
```

Defined in: [src/fivem/Model.ts:217](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Model.ts#L217)

Request and load the model with a specified timeout. Default timeout is 1000 (recommended).
This function will not automatically set the model as no longer needed when
done.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `timeoutMs` | `number` | `1000` | Maximum allowed time for model to load. |

#### Returns

`Promise`\<`boolean`\>
