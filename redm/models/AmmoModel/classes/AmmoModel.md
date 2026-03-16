[@nativewrappers/fivem](../../../../README.md) / [redm/models/AmmoModel](../README.md) / AmmoModel

# Class: AmmoModel

Defined in: lib/redm/models/AmmoModel.d.ts:2

Class to create and manage entity models.

## Extends

- [`Model`](../../../Model/classes/Model.md)

## Constructors

### Constructor

```ts
new AmmoModel(hash): AmmoModel;
```

Defined in: lib/redm/Model.d.ts:20

Creates a model object based on the hash key or model string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | `string` \| `number` | A number or string of the model's hash. Example: "mp_m_freemode_01" |

#### Returns

`AmmoModel`

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`constructor`](../../../Model/classes/Model.md#constructor)

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="hash"></a> `hash` | `protected` | `number` | Hash of this model. | [`Model`](../../../Model/classes/Model.md).[`hash`](../../../Model/classes/Model.md#hash) | lib/redm/Model.d.ts:9 |
| <a id="requestcount"></a> `requestCount` | `protected` | `number` | - | [`Model`](../../../Model/classes/Model.md).[`requestCount`](../../../Model/classes/Model.md#requestcount) | lib/redm/Model.d.ts:10 |

## Accessors

### Dimensions

#### Get Signature

```ts
get Dimensions(): Dimensions;
```

Defined in: lib/redm/Model.d.ts:88

Gets the model dimensions.

##### Returns

[`Dimensions`](../../../interfaces/Dimensions/interfaces/Dimensions.md)

This model min & max dimensions.

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`Dimensions`](../../../Model/classes/Model.md#dimensions)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`Hash`](../../../Model/classes/Model.md#hash-1)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsBoat`](../../../Model/classes/Model.md#isboat)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsCollisionLoaded`](../../../Model/classes/Model.md#iscollisionloaded)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsInCdImage`](../../../Model/classes/Model.md#isincdimage)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsLoaded`](../../../Model/classes/Model.md#isloaded)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsPed`](../../../Model/classes/Model.md#isped)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsProp`](../../../Model/classes/Model.md#isprop)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsTrain`](../../../Model/classes/Model.md#istrain)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsValid`](../../../Model/classes/Model.md#isvalid)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsVehicle`](../../../Model/classes/Model.md#isvehicle)

***

### IsWeapon

#### Get Signature

```ts
get IsWeapon(): boolean;
```

Defined in: lib/redm/Model.d.ts:82

##### Returns

`boolean`

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`IsWeapon`](../../../Model/classes/Model.md#isweapon)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`RequestCount`](../../../Model/classes/Model.md#requestcount-1)

## Methods

### \[dispose\]()

```ts
dispose: void;
```

Defined in: lib/redm/Model.d.ts:21

#### Returns

`void`

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`[dispose]`](../../../Model/classes/Model.md#dispose)

***

### markAsNoLongerNeeded()

```ts
markAsNoLongerNeeded(): void;
```

Defined in: lib/redm/Model.d.ts:101

Sets the model as no longer needed allowing the game engine to free memory.

#### Returns

`void`

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`markAsNoLongerNeeded`](../../../Model/classes/Model.md#markasnolongerneeded)

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

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`request`](../../../Model/classes/Model.md#request)

***

### requestModel()

```ts
requestModel(): void;
```

Defined in: lib/redm/Model.d.ts:89

#### Returns

`void`

#### Inherited from

[`Model`](../../../Model/classes/Model.md).[`requestModel`](../../../Model/classes/Model.md#requestmodel)
