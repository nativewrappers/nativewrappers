[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / SynchronousRaycastResult

# Class: SynchronousRaycastResult

Defined in: fivem/Raycast.d.ts:61

## Extends

- `RaycastResult`

## Constructors

### new SynchronousRaycastResult()

```ts
new SynchronousRaycastResult(handle): SynchronousRaycastResult
```

Defined in: fivem/Raycast.d.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`SynchronousRaycastResult`](SynchronousRaycastResult.md)

#### Overrides

```ts
RaycastResult.constructor
```

## Accessors

### DidHit

#### Get Signature

```ts
get DidHit(): boolean
```

Defined in: fivem/Raycast.d.ts:23

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
get DidHitEntity(): boolean
```

Defined in: fivem/Raycast.d.ts:27

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
get HasResolved(): boolean
```

Defined in: fivem/Raycast.d.ts:45

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
get HitEntity(): null | Ped | Vehicle | Prop
```

Defined in: fivem/Raycast.d.ts:11

Return the entity that was hit.

##### Returns

`null` \| [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

#### Inherited from

```ts
RaycastResult.HitEntity
```

***

### HitPosition

#### Get Signature

```ts
get HitPosition(): Vector3
```

Defined in: fivem/Raycast.d.ts:15

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
get Material(): MaterialHash
```

Defined in: fivem/Raycast.d.ts:31

Material type that was hit.

##### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Inherited from

```ts
RaycastResult.Material
```

***

### Result

#### Get Signature

```ts
get Result(): number
```

Defined in: fivem/Raycast.d.ts:35

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
get SurfaceNormal(): Vector3
```

Defined in: fivem/Raycast.d.ts:19

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
get WasDiscarded(): boolean
```

Defined in: fivem/Raycast.d.ts:39

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
protected applyShapeTestResults(): void
```

Defined in: fivem/Raycast.d.ts:46

#### Returns

`void`

#### Inherited from

```ts
RaycastResult.applyShapeTestResults
```
