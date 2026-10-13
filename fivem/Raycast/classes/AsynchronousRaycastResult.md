[@nativewrappers/fivem](../../../README.md) / [fivem/Raycast](../README.md) / AsynchronousRaycastResult

# Class: AsynchronousRaycastResult

Defined in: lib/fivem/Raycast.d.ts:66

## Extends

- `RaycastResult`

## Constructors

### Constructor

```ts
new AsynchronousRaycastResult(handle): AsynchronousRaycastResult;
```

Defined in: lib/fivem/Raycast.d.ts:61

Create a RaycastResult object that gets the results from a StartShapeTestRay()

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | The handle returned from StartShapeTestRay() |

#### Returns

`AsynchronousRaycastResult`

#### Inherited from

```ts
RaycastResult.constructor
```

## Accessors

### DidHit

#### Get Signature

```ts
get DidHit(): boolean;
```

Defined in: lib/fivem/Raycast.d.ts:25

Whether we hit anything.

##### Returns

`boolean`

#### Inherited from

```ts
RaycastResult.DidHit
```

***

### DidHitEntity

#### Get Signature

```ts
get DidHitEntity(): boolean;
```

Defined in: lib/fivem/Raycast.d.ts:29

Whether the entity hit exists.

##### Returns

`boolean`

#### Inherited from

```ts
RaycastResult.DidHitEntity
```

***

### HasResolved

#### Get Signature

```ts
get HasResolved(): boolean;
```

Defined in: lib/fivem/Raycast.d.ts:47

NOTE: These will not be updated unless polled by `resolve` or the shape
test is synchronous

##### Returns

`boolean`

if the raycast has been marked as ready by the engine

#### Inherited from

```ts
RaycastResult.HasResolved
```

***

### HitEntity

#### Get Signature

```ts
get HitEntity(): 
  | null
  | Vehicle
  | Ped
  | Prop;
```

Defined in: lib/fivem/Raycast.d.ts:13

Return the entity that was hit.

##### Returns

  \| `null`
  \| [`Vehicle`](../../models/Vehicle/classes/Vehicle.md)
  \| [`Ped`](../../models/Ped/classes/Ped.md)
  \| [`Prop`](../../models/Prop/classes/Prop.md)

#### Inherited from

```ts
RaycastResult.HitEntity
```

***

### HitPosition

#### Get Signature

```ts
get HitPosition(): Vector3;
```

Defined in: lib/fivem/Raycast.d.ts:17

Get the position of the entity that was hit.

##### Returns

`Vector3`

#### Inherited from

```ts
RaycastResult.HitPosition
```

***

### Material

#### Get Signature

```ts
get Material(): MaterialHash;
```

Defined in: lib/fivem/Raycast.d.ts:33

Material type that was hit.

##### Returns

[`MaterialHash`](../../hashes/MaterialHash/enumerations/MaterialHash.md)

#### Inherited from

```ts
RaycastResult.Material
```

***

### Result

#### Get Signature

```ts
get Result(): number;
```

Defined in: lib/fivem/Raycast.d.ts:37

Raycast result's handle.

##### Returns

`number`

#### Inherited from

```ts
RaycastResult.Result
```

***

### SurfaceNormal

#### Get Signature

```ts
get SurfaceNormal(): Vector3;
```

Defined in: lib/fivem/Raycast.d.ts:21

Return the vector perpendicular to the tangent plane.

##### Returns

`Vector3`

#### Inherited from

```ts
RaycastResult.SurfaceNormal
```

***

### WasDiscarded

#### Get Signature

```ts
get WasDiscarded(): boolean;
```

Defined in: lib/fivem/Raycast.d.ts:41

##### Returns

`boolean`

if the shape test handle was already discarded

#### Inherited from

```ts
RaycastResult.WasDiscarded
```

## Methods

### applyShapeTestResults()

```ts
protected applyShapeTestResults(): void;
```

Defined in: lib/fivem/Raycast.d.ts:48

#### Returns

`void`

#### Inherited from

```ts
RaycastResult.applyShapeTestResults
```

***

### resolve()

```ts
resolve(timeoutInMs?): Promise<void>;
```

Defined in: lib/fivem/Raycast.d.ts:71

waits until the shape test handle is valid and then sets the expected
values on the RaycastResult

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeoutInMs?` | `number` |

#### Returns

`Promise`\<`void`\>
