[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Vector3

# Class: Vector3

Defined in: [src/common/utils/Vector.ts:718](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L718)

Represents a 3-dimensional vector.

## Extends

- `Vector`

## Implements

- `Vec3`

## Constructors

### new Vector3()

```ts
new Vector3(
   x, 
   y, 
   z): Vector3
```

Defined in: [src/common/utils/Vector.ts:758](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L758)

Constructs a new 3D vector.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `undefined` | The x-component of the vector. |
| `y` | `number` | `x` | The y-component of the vector (optional, defaults to x). |
| `z` | `number` | `y` | The z-component of the vector (optional, defaults to y). |

#### Returns

[`Vector3`](Vector3.md)

#### Overrides

```ts
Vector.constructor
```

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="size"></a> `[size]` | `readonly` | `number` | `2` | - | `Vector.[size]` | [src/common/utils/Vector.ts:487](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L487) |
| <a id="type"></a> `type` | `readonly` | `Vector3` | `ClassTypes.Vector3` | `Vector.type` | - | [src/common/utils/Vector.ts:721](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L721) |
| <a id="w"></a> `w` | `public` | `undefined` \| `number` | `undefined` | - | `Vector.w` | [src/common/utils/Vector.ts:491](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L491) |
| <a id="x-1"></a> `x` | `public` | `number` | `0` | - | `Vec3.x` `Vector.x` | [src/common/utils/Vector.ts:488](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L488) |
| <a id="y-1"></a> `y` | `public` | `number` | `0` | - | `Vec3.y` `Vector.y` | [src/common/utils/Vector.ts:489](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L489) |
| <a id="z-1"></a> `z` | `public` | `number` | `0` | `Vec3.z` `Vector.z` | - | [src/common/utils/Vector.ts:722](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L722) |
| <a id="backward"></a> `Backward` | `readonly` | [`Vector3`](Vector3.md) | `Vector3.BackwardRH` | - | - | [src/common/utils/Vector.ts:750](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L750) |
| <a id="backwardlh"></a> `BackwardLH` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:748](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L748) |
| <a id="backwardrh"></a> `BackwardRH` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:746](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L746) |
| <a id="down"></a> `Down` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:736](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L736) |
| <a id="forwardlh"></a> `ForwardLH` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:744](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L744) |
| <a id="forwardrh"></a> `ForwardRH` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:742](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L742) |
| <a id="left"></a> `Left` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:738](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L738) |
| <a id="one"></a> `One` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:732](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L732) |
| <a id="right"></a> `Right` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:740](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L740) |
| <a id="unitx"></a> `UnitX` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:726](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L726) |
| <a id="unity"></a> `UnitY` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:728](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L728) |
| <a id="unitz"></a> `UnitZ` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:730](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L730) |
| <a id="up"></a> `Up` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:734](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L734) |
| <a id="zero"></a> `Zero` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | [src/common/utils/Vector.ts:724](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L724) |

## Accessors

### Length

#### Get Signature

```ts
get Length(): number
```

Defined in: [src/common/utils/Vector.ts:674](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L674)

Calculates the length (magnitude) of a vector.

##### Returns

`number`

The magnitude of the vector.

#### Inherited from

```ts
Vector.Length
```

***

### size

#### Get Signature

```ts
get size(): number
```

Defined in: [src/common/utils/Vector.ts:533](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L533)

##### Returns

`number`

#### Inherited from

```ts
Vector.size
```

## Methods

### \[iterator\]()

```ts
iterator: Iterator<number>
```

Defined in: [src/common/utils/Vector.ts:525](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L525)

#### Returns

`Iterator`\<`number`\>

#### Inherited from

```ts
Vector.[iterator]
```

***

### add()

```ts
add(v): Vector3
```

Defined in: [src/common/utils/Vector.ts:586](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L586)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.add

#### Inherited from

```ts
Vector.add
```

***

### addAbsolute()

```ts
addAbsolute(v): Vector3
```

Defined in: [src/common/utils/Vector.ts:628](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L628)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.addAbsolute

#### Inherited from

```ts
Vector.addAbsolute
```

***

### addX()

```ts
addX(x): Vector3
```

Defined in: [src/common/utils/Vector.ts:593](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L593)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.addX

#### Inherited from

```ts
Vector.addX
```

***

### addY()

```ts
addY(y): Vector
```

Defined in: [src/common/utils/Vector.ts:600](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L600)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`Vector`

#### See

Vector.addY

#### Inherited from

```ts
Vector.addY
```

***

### addZ()

```ts
addZ(z): Vector
```

Defined in: [src/common/utils/Vector.ts:778](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L778)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `z` | `number` |

#### Returns

`Vector`

#### See

Vector.addZ

***

### clone()

```ts
clone<T>(): T
```

Defined in: [src/common/utils/Vector.ts:544](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L544)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Vector3`](Vector3.md) |

#### Returns

`T`

#### See

Vector.clone

#### Inherited from

```ts
Vector.clone
```

***

### crossProduct()

```ts
crossProduct(v): Vec3 | Vec4
```

Defined in: [src/common/utils/Vector.ts:785](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L785)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vec3` \| `Vec4` |

#### Returns

`Vec3` \| `Vec4`

#### See

Vector.crossProduct

***

### distance()

```ts
distance(v): number
```

Defined in: [src/common/utils/Vector.ts:565](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L565)

The distance between two Vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `VectorLike` | Vector to find distance between. |

#### Returns

`number`

Distance between this and another vector.

#### Inherited from

```ts
Vector.distance
```

***

### distanceSquared()

```ts
distanceSquared(v): number
```

Defined in: [src/common/utils/Vector.ts:554](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L554)

The product of the Euclidean magnitudes of this and another Vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `VectorLike` | Vector to find Euclidean magnitude between. |

#### Returns

`number`

Euclidean magnitude with another vector.

#### Inherited from

```ts
Vector.distanceSquared
```

***

### divide()

```ts
divide(v): Vector3
```

Defined in: [src/common/utils/Vector.ts:621](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L621)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.divide

#### Inherited from

```ts
Vector.divide
```

***

### divideAbsolute()

```ts
divideAbsolute(v): Vector3
```

Defined in: [src/common/utils/Vector.ts:649](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L649)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.divide

#### Inherited from

```ts
Vector.divideAbsolute
```

***

### dotProduct()

```ts
dotProduct(v): number
```

Defined in: [src/common/utils/Vector.ts:579](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L579)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `this` |

#### Returns

`number`

#### See

Vector.dotProduct

#### Inherited from

```ts
Vector.dotProduct
```

***

### multiply()

```ts
multiply(v): Vector3
```

Defined in: [src/common/utils/Vector.ts:614](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L614)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.multiply

#### Inherited from

```ts
Vector.multiply
```

***

### multiplyAbsolute()

```ts
multiplyAbsolute(v): Vector3
```

Defined in: [src/common/utils/Vector.ts:642](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L642)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.multiply

#### Inherited from

```ts
Vector.multiplyAbsolute
```

***

### normalize()

```ts
normalize(): Vector3
```

Defined in: [src/common/utils/Vector.ts:572](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L572)

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.normalize

#### Inherited from

```ts
Vector.normalize
```

***

### replace()

```ts
replace<T>(v): void
```

Defined in: [src/common/utils/Vector.ts:664](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L664)

Replaces the components of the vector with the components of another vector object.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `T` | The object whose components will replace the current vector's components. |

#### Returns

`void`

#### Inherited from

```ts
Vector.replace
```

***

### subtract()

```ts
subtract(v): Vector3
```

Defined in: [src/common/utils/Vector.ts:607](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L607)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.subtract

#### Inherited from

```ts
Vector.subtract
```

***

### subtractAbsolute()

```ts
subtractAbsolute(v): Vector3
```

Defined in: [src/common/utils/Vector.ts:635](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L635)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.subtractAbsolute

#### Inherited from

```ts
Vector.subtractAbsolute
```

***

### toArray()

```ts
toArray<T>(): VectorArray<T>
```

Defined in: [src/common/utils/Vector.ts:656](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L656)

Converts the vector to an array of its components.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Vector3`](Vector3.md) |

#### Returns

`VectorArray`\<`T`\>

#### Inherited from

```ts
Vector.toArray
```

***

### toString()

```ts
toString(): string
```

Defined in: [src/common/utils/Vector.ts:537](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L537)

#### Returns

`string`

#### Inherited from

```ts
Vector.toString
```

***

### toVec2()

```ts
toVec2(): Vector2
```

Defined in: [src/common/utils/Vector.ts:792](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L792)

#### Returns

[`Vector2`](Vector2.md)

the x and y values as Vec2

***

### add()

```ts
static add<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:167](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L167)

Adds two vectors or a scalar value to a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The first vector or scalar value. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with incremented components.

#### Inherited from

```ts
Vector.add
```

***

### addAbsolute()

```ts
static addAbsolute<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:302](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L302)

Adds two vectors or a scalar value to a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The first vector or scalar value. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with incremented components.

#### Inherited from

```ts
Vector.addAbsolute
```

***

### addW()

```ts
static addW<T, U>(
   this, 
   obj, 
   w): Vector
```

Defined in: [src/common/utils/Vector.ts:219](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L219)

Adds a scalar value to the w-component of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec4` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `w` | `number` | The value to add to the w-component. |

#### Returns

`Vector`

A new vector with the w-component incremented.

#### Inherited from

```ts
Vector.addW
```

***

### addX()

```ts
static addX<U>(obj, x): U
```

Defined in: [src/common/utils/Vector.ts:181](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L181)

Adds a scalar value to the x-component of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `U` | The vector. |
| `x` | `number` | The value to add to the x-component. |

#### Returns

`U`

A new vector with the x-component incremented.

#### Inherited from

```ts
Vector.addX
```

***

### addY()

```ts
static addY<T, U>(
   this, 
   obj, 
   y): Vector
```

Defined in: [src/common/utils/Vector.ts:191](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L191)

Adds a scalar value to the y-component of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `y` | `number` | The value to add to the y-component. |

#### Returns

`Vector`

A new vector with the y-component incremented.

#### Inherited from

```ts
Vector.addY
```

***

### addZ()

```ts
static addZ<T, U>(
   this, 
   obj, 
   z): Vector
```

Defined in: [src/common/utils/Vector.ts:205](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L205)

Adds a scalar value to the z-component of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec3` \| `Vec4` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `z` | `number` | The value to add to the z-component. |

#### Returns

`Vector`

A new vector with the z-component incremented.

#### Inherited from

```ts
Vector.addZ
```

***

### clone()

```ts
static clone<T, U>(this, obj): InstanceType<T>
```

Defined in: [src/common/utils/Vector.ts:129](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L129)

Creates a deep copy of the provided vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector to clone. |

#### Returns

`InstanceType`\<`T`\>

A new vector instance that is a copy of the provided vector.

#### Inherited from

```ts
Vector.clone
```

***

### create()

```ts
protected static create(
   x, 
   y, 
   z): Vector3
```

Defined in: [src/common/utils/Vector.ts:769](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L769)

Creates a new vector based on the provided parameters.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` \| `Vec` | `undefined` | The x-component of the vector. |
| `y` | `number` | `...` | The y-component of the vector (optional, defaults to the value of x). |
| `z` | `number` | `y` | The z-component of the vector (optional, defaults to the value of y). |

#### Returns

[`Vector3`](Vector3.md)

A new vector instance.

#### Overrides

```ts
Vector.create
```

***

### crossProduct()

```ts
static crossProduct<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:383](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L383)

Calculates the cross product of two vectors in three-dimensional space.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec3` \| `Vec4` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The first vector. |
| `b` | `U` | The second vector. |

#### Returns

`U`

A new vector perpendicular to both input vectors.

#### Inherited from

```ts
Vector.crossProduct
```

***

### divide()

```ts
static divide<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:261](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L261)

Divides two vectors by their components, or divides a vector by a scalar value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar vector. |

#### Returns

`U`

A new vector with divided components.

#### Inherited from

```ts
Vector.divide
```

***

### divideAbsolute()

```ts
static divideAbsolute<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:344](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L344)

Divides two vectors by their components, or divides a vector by a scalar value

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar vector. |

#### Returns

`U`

A new vector with divided components.

#### Inherited from

```ts
Vector.divideAbsolute
```

***

### dotProduct()

```ts
static dotProduct<T, U>(
   this, 
   a, 
   b): number
```

Defined in: [src/common/utils/Vector.ts:358](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L358)

Calculates the dot product of two vectors.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The first vector. |
| `b` | `U` | The second vector. |

#### Returns

`number`

A scalar value representing the degree of alignment between the input vectors.

#### Inherited from

```ts
Vector.dotProduct
```

***

### fromArray()

```ts
static fromArray<T, U>(this, primitive): InstanceType<T>
```

Defined in: [src/common/utils/Vector.ts:428](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L428)

Creates a vector from an array of numbers.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `number`[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `primitive` | `U` | An array of numbers (usually returned by a native). |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

```ts
Vector.fromArray
```

***

### fromArrays()

```ts
static fromArrays<T, U>(this, primitives): InstanceType<T>[]
```

Defined in: [src/common/utils/Vector.ts:458](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L458)

Creates an array of vectors from an array of number arrays

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorArray`\<`T`\>[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `primitives` | `U` | A multi-dimensional array of number arrays |

#### Returns

`InstanceType`\<`T`\>[]

#### Inherited from

```ts
Vector.fromArrays
```

***

### fromBuffer()

```ts
static fromBuffer<T>(this, __namedParameters): InstanceType<T>
```

Defined in: [src/common/utils/Vector.ts:109](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L109)

Creates a vector from binary data in a MsgpackBuffer.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `__namedParameters` | `MsgpackBuffer` |

#### Returns

`InstanceType`\<`T`\>

A new vector instance.

#### Inherited from

```ts
Vector.fromBuffer
```

***

### fromObject()

```ts
static fromObject<T, U>(this, primitive): InstanceType<T>
```

Defined in: [src/common/utils/Vector.ts:440](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L440)

Creates a vector from an array or object containing vector components.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `any` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `primitive` | `MsgpackBuffer` \| `U` | The object to use as a vector. |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

```ts
Vector.fromObject
```

***

### Length()

```ts
static Length<T, U>(this, obj): number
```

Defined in: [src/common/utils/Vector.ts:470](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L470)

Calculates the length (magnitude) of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector for which to calculate the length. |

#### Returns

`number`

The magnitude of the vector.

#### Inherited from

```ts
Vector.Length
```

***

### multiply()

```ts
static multiply<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:247](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L247)

Multiplies two vectors by their components, or multiplies a vector by a scalar value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with multiplied components.

#### Inherited from

```ts
Vector.multiply
```

***

### multiplyAbsolute()

```ts
static multiplyAbsolute<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:330](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L330)

Multiplies two vectors by their components, or multiplies a vector by a scalar value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with multiplied components.

#### Inherited from

```ts
Vector.multiplyAbsolute
```

***

### normalize()

```ts
static normalize<T, U>(this, a): U
```

Defined in: [src/common/utils/Vector.ts:416](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L416)

Normalizes a vector, producing a new vector with the same direction but with a magnitude of 1.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `a` | `U` |

#### Returns

`U`

The new normalized vector.

#### Inherited from

```ts
Vector.normalize
```

***

### subtract()

```ts
static subtract<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:233](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L233)

Subtracts one vector from another or subtracts a scalar value from a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with subtracted components.

#### Inherited from

```ts
Vector.subtract
```

***

### subtractAbsolute()

```ts
static subtractAbsolute<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:316](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Vector.ts#L316)

Subtracts one vector from another or subtracts a scalar value from a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with subtracted components.

#### Inherited from

```ts
Vector.subtractAbsolute
```
