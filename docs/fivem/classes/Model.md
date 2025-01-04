[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Model

# Class: Model

Class to create and manage entity models.

## Implements

- `Disposable`

## Constructors

### new Model()

```ts
new Model(hash): Model
```

Creates a model object based on the hash key or model string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | `string` \| `number` | A number or string of the model's hash. Example: "mp_m_freemode_01" |

#### Returns

[`Model`](Model.md)

#### Defined in

[src/fivem/Model.ts:21](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L21)

## Accessors

### Dimensions

```ts
get Dimensions(): Dimensions
```

Gets the model dimensions.

#### Returns

`Dimensions`

This model min & max dimensions.

#### Defined in

[src/fivem/Model.ts:203](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L203)

***

### Hash

```ts
get Hash(): number
```

Gets the hash of the model.

#### Returns

`number`

The hash key.

#### Defined in

[src/fivem/Model.ts:40](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L40)

***

### IsBicycle

```ts
get IsBicycle(): boolean
```

Gets if the model is a bicycle or not.

#### Returns

`boolean`

Whether this model is a bicycle.

#### Defined in

[src/fivem/Model.ts:85](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L85)

***

### IsBike

```ts
get IsBike(): boolean
```

Gets if the model is a motorbike or not.

#### Returns

`boolean`

Whether this model is a motorbike.

#### Defined in

[src/fivem/Model.ts:94](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L94)

***

### IsBoat

```ts
get IsBoat(): boolean
```

Gets if the model is a boat or not.

#### Returns

`boolean`

Whether this model is a boat.

#### Defined in

[src/fivem/Model.ts:103](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L103)

***

### IsCar

```ts
get IsCar(): boolean
```

Gets if the model is a car or not.

#### Returns

`boolean`

Whether this model is a car.

#### Defined in

[src/fivem/Model.ts:112](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L112)

***

### IsCargobob

```ts
get IsCargobob(): boolean
```

Gets if the model is a cargobob or not.

#### Returns

`boolean`

Whether this model is a cargobob.

#### Defined in

[src/fivem/Model.ts:121](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L121)

***

### IsCollisionLoaded

```ts
get IsCollisionLoaded(): boolean
```

Gets if the model collision is loaded or not.

#### Returns

`boolean`

Whether this model collision is loaded.

#### Defined in

[src/fivem/Model.ts:76](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L76)

***

### IsHelicopter

```ts
get IsHelicopter(): boolean
```

Gets if the model is a helicopter or not.

#### Returns

`boolean`

Whether this model is a helicopter.

#### Defined in

[src/fivem/Model.ts:135](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L135)

***

### IsInCdImage

```ts
get IsInCdImage(): boolean
```

Gets if the model is in cd image or not.

#### Returns

`boolean`

Whether this model is in cd image.

#### Defined in

[src/fivem/Model.ts:58](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L58)

***

### IsLoaded

```ts
get IsLoaded(): boolean
```

Gets if the model is loaded or not.

#### Returns

`boolean`

Whether this model is loaded.

#### Defined in

[src/fivem/Model.ts:67](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L67)

***

### IsPed

```ts
get IsPed(): boolean
```

Gets if the model is a Ped or not.

#### Returns

`boolean`

Whether this model is a Ped.

#### Defined in

[src/fivem/Model.ts:144](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L144)

***

### IsPlane

```ts
get IsPlane(): boolean
```

Gets if the model is a plane or not.

#### Returns

`boolean`

Whether this model is a plane.

#### Defined in

[src/fivem/Model.ts:153](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L153)

***

### IsProp

```ts
get IsProp(): boolean
```

Gets if the model is a prop or not.

#### Returns

`boolean`

Whether this model is a prop.

#### Defined in

[src/fivem/Model.ts:162](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L162)

***

### IsQuadbike

```ts
get IsQuadbike(): boolean
```

Gets if the model is a quadbike or not.

#### Returns

`boolean`

Whether this model is a quadbike.

#### Defined in

[src/fivem/Model.ts:176](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L176)

***

### IsTrain

```ts
get IsTrain(): boolean
```

Gets if the model is a train or not.

#### Returns

`boolean`

Whether this model is a train.

#### Defined in

[src/fivem/Model.ts:185](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L185)

***

### IsValid

```ts
get IsValid(): boolean
```

Gets if the model is valid or not.

#### Returns

`boolean`

Whether this model is valid.

#### Defined in

[src/fivem/Model.ts:49](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L49)

***

### IsVehicle

```ts
get IsVehicle(): boolean
```

Gets if the model is a Vehicle or not.

#### Returns

`boolean`

Whether this model is a Vehicle.

#### Defined in

[src/fivem/Model.ts:194](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L194)

## Methods

### \[dispose\]()

```ts
dispose: void
```

#### Returns

`void`

#### Implementation of

`Disposable.[dispose]`

#### Defined in

[src/fivem/Model.ts:29](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L29)

***

### markAsNoLongerNeeded()

```ts
markAsNoLongerNeeded(): void
```

Sets the model as no longer needed allowing the game engine to free memory.

#### Returns

`void`

#### Defined in

[src/fivem/Model.ts:238](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L238)

***

### request()

```ts
request(timeoutMs): Promise<boolean>
```

Request and load the model with a specified timeout. Default timeout is 1000 (recommended).
This function will not automatically set the model as no longer needed when
done.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `timeoutMs` | `number` | `1000` | Maximum allowed time for model to load. |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/fivem/Model.ts:217](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Model.ts#L217)
