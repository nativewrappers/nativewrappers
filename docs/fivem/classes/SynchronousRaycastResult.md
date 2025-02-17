[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / SynchronousRaycastResult

# Class: SynchronousRaycastResult

Defined in: [src/fivem/Raycast.ts:116](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L116)

## Extends

- `RaycastResult`

## Constructors

### new SynchronousRaycastResult()

```ts
new SynchronousRaycastResult(handle): SynchronousRaycastResult
```

Defined in: [src/fivem/Raycast.ts:117](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L117)

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

Defined in: [src/fivem/Raycast.ts:35](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L35)

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

Defined in: [src/fivem/Raycast.ts:42](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L42)

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

Defined in: [src/fivem/Raycast.ts:72](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L72)

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

Defined in: [src/fivem/Raycast.ts:14](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L14)

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

Defined in: [src/fivem/Raycast.ts:21](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L21)

Get the position of the entity that was hit.

##### Returns

[`Vector3`](Vector3.md)

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

Defined in: [src/fivem/Raycast.ts:49](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L49)

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

Defined in: [src/fivem/Raycast.ts:56](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L56)

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

Defined in: [src/fivem/Raycast.ts:28](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L28)

Return the vector perpendicular to the tangent plane.

##### Returns

[`Vector3`](Vector3.md)

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

Defined in: [src/fivem/Raycast.ts:63](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L63)

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

Defined in: [src/fivem/Raycast.ts:76](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/Raycast.ts#L76)

#### Returns

`void`

#### Inherited from

```ts
RaycastResult.applyShapeTestResults
```
