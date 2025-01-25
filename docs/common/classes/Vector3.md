[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Vector3

# Class: Vector3

Defined in: [src/common/utils/Vector.ts:737](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L737)

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

Defined in: [src/common/utils/Vector.ts:777](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L777)

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

| Property | Modifier | Type | Default value | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="size"></a> `size` | `public` | `number` | `undefined` | The size of the vector (number of components). | - | `Vector.size` | [src/common/utils/Vector.ts:553](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L553) |
| <a id="type"></a> `type` | `public` | `ClassTypes` | `ClassTypes.Vector3` | - | `Vector.type` | - | [src/common/utils/Vector.ts:740](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L740) |
| <a id="w"></a> `w?` | `public` | `number` | `undefined` | The w-component of the vector (optional). | - | `Vector.w` | [src/common/utils/Vector.ts:557](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L557) |
| <a id="x-1"></a> `x` | `public` | `number` | `0` | The x-component of the vector. | - | `Vec3.x` `Vector.x` | [src/common/utils/Vector.ts:554](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L554) |
| <a id="y-1"></a> `y` | `public` | `number` | `x` | The y-component of the vector (optional, defaults to x). | - | `Vec3.y` `Vector.y` | [src/common/utils/Vector.ts:555](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L555) |
| <a id="z-1"></a> `z` | `public` | `number` | `undefined` | - | `Vec3.z` `Vector.z` | - | [src/common/utils/Vector.ts:741](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L741) |
| <a id="backward"></a> `Backward` | `readonly` | [`Vector3`](Vector3.md) | `Vector3.BackwardRH` | - | - | - | [src/common/utils/Vector.ts:769](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L769) |
| <a id="backwardlh"></a> `BackwardLH` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:767](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L767) |
| <a id="backwardrh"></a> `BackwardRH` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:765](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L765) |
| <a id="down"></a> `Down` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:755](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L755) |
| <a id="forwardlh"></a> `ForwardLH` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:763](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L763) |
| <a id="forwardrh"></a> `ForwardRH` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:761](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L761) |
| <a id="left"></a> `Left` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:757](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L757) |
| <a id="one"></a> `One` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:751](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L751) |
| <a id="right"></a> `Right` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:759](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L759) |
| <a id="unitx"></a> `UnitX` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:745](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L745) |
| <a id="unity"></a> `UnitY` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:747](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L747) |
| <a id="unitz"></a> `UnitZ` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:749](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L749) |
| <a id="up"></a> `Up` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:753](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L753) |
| <a id="zero"></a> `Zero` | `readonly` | [`Vector3`](Vector3.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:743](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L743) |

## Accessors

### Length

#### Get Signature

```ts
get Length(): number
```

Defined in: [src/common/utils/Vector.ts:705](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L705)

Calculates the length (magnitude) of a vector.

##### Returns

`number`

The magnitude of the vector.

#### Inherited from

```ts
Vector.Length
```

## Methods

### \[iterator\]()

```ts
iterator: Iterator<number>
```

Defined in: [src/common/utils/Vector.ts:560](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L560)

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

Defined in: [src/common/utils/Vector.ts:617](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L617)

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

Defined in: [src/common/utils/Vector.ts:659](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L659)

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

Defined in: [src/common/utils/Vector.ts:624](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L624)

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
addY(y): Vector3
```

Defined in: [src/common/utils/Vector.ts:631](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L631)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.addY

#### Inherited from

```ts
Vector.addY
```

***

### addZ()

```ts
addZ(z): Vector3
```

Defined in: [src/common/utils/Vector.ts:785](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L785)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `z` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.addZ

***

### clone()

```ts
clone(): Vector3
```

Defined in: [src/common/utils/Vector.ts:575](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L575)

#### Returns

[`Vector3`](Vector3.md)

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

Defined in: [src/common/utils/Vector.ts:792](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L792)

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

Defined in: [src/common/utils/Vector.ts:596](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L596)

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

Defined in: [src/common/utils/Vector.ts:585](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L585)

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

Defined in: [src/common/utils/Vector.ts:652](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L652)

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

Defined in: [src/common/utils/Vector.ts:680](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L680)

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

Defined in: [src/common/utils/Vector.ts:610](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L610)

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

Defined in: [src/common/utils/Vector.ts:645](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L645)

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

Defined in: [src/common/utils/Vector.ts:673](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L673)

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

Defined in: [src/common/utils/Vector.ts:603](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L603)

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

Defined in: [src/common/utils/Vector.ts:695](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L695)

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

Defined in: [src/common/utils/Vector.ts:638](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L638)

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

Defined in: [src/common/utils/Vector.ts:666](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L666)

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

Defined in: [src/common/utils/Vector.ts:687](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L687)

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

Defined in: [src/common/utils/Vector.ts:568](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L568)

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

Defined in: [src/common/utils/Vector.ts:799](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L799)

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

Defined in: [src/common/utils/Vector.ts:209](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L209)

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

Defined in: [src/common/utils/Vector.ts:360](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L360)

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
w): InferVector<U>
```

Defined in: [src/common/utils/Vector.ts:274](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L274)

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

`InferVector`\<`U`\>

A new vector with the w-component incremented.

#### Inherited from

```ts
Vector.addW
```

***

### addX()

```ts
static addX<T, U>(
   this, 
   obj, 
x): InferVector<U>
```

Defined in: [src/common/utils/Vector.ts:223](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L223)

Adds a scalar value to the x-component of a vector.

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
| `x` | `number` | The value to add to the x-component. |

#### Returns

`InferVector`\<`U`\>

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
y): InferVector<U>
```

Defined in: [src/common/utils/Vector.ts:240](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L240)

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

`InferVector`\<`U`\>

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
z): InferVector<U>
```

Defined in: [src/common/utils/Vector.ts:257](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L257)

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

`InferVector`\<`U`\>

A new vector with the z-component incremented.

#### Inherited from

```ts
Vector.addZ
```

***

### clone()

```ts
static clone<T, U>(this, obj): InferVector<U>
```

Defined in: [src/common/utils/Vector.ts:171](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L171)

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

`InferVector`\<`U`\>

A new vector instance that is a copy of the provided vector.

#### Inherited from

```ts
Vector.clone
```

***

### create()

Creates a new vector based on the provided parameters.

#### Param

The x-component of the vector.

#### Param

The y-component of the vector (optional, defaults to the value of x).

#### Param

The z-component of the vector (optional, defaults to the value of y).

#### Param

The w-component of the vector (optional, defaults to the value of z).

#### Call Signature

```ts
protected static create(x, y?): Vector2
```

Defined in: [src/common/utils/Vector.ts:96](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L96)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y`? | `number` |

##### Returns

[`Vector2`](Vector2.md)

##### Inherited from

```ts
Vector.create
```

#### Call Signature

```ts
protected static create(
   x, 
   y?, 
   z?): Vector3
```

Defined in: [src/common/utils/Vector.ts:97](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L97)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y`? | `number` |
| `z`? | `number` |

##### Returns

[`Vector3`](Vector3.md)

##### Inherited from

```ts
Vector.create
```

#### Call Signature

```ts
protected static create(
   x, 
   y?, 
   z?, 
   w?): Vector4
```

Defined in: [src/common/utils/Vector.ts:98](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L98)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y`? | `number` |
| `z`? | `number` |
| `w`? | `number` |

##### Returns

[`Vector4`](Vector4.md)

##### Inherited from

```ts
Vector.create
```

#### Call Signature

```ts
protected static create<T, U>(this, obj): InferVector<U>
```

Defined in: [src/common/utils/Vector.ts:109](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L109)

Creates a new vector based on the provided vector-like object.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The object representing the vector. |

##### Returns

`InferVector`\<`U`\>

A new vector instance.

A new vector instance.

##### Param

The x-component of the vector.

##### Param

The y-component of the vector (optional, defaults to the value of x).

##### Param

The z-component of the vector (optional, defaults to the value of y).

##### Param

The w-component of the vector (optional, defaults to the value of z).

##### Inherited from

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

Defined in: [src/common/utils/Vector.ts:441](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L441)

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

Defined in: [src/common/utils/Vector.ts:319](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L319)

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

Defined in: [src/common/utils/Vector.ts:402](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L402)

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

Defined in: [src/common/utils/Vector.ts:416](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L416)

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

Defined in: [src/common/utils/Vector.ts:486](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L486)

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

Defined in: [src/common/utils/Vector.ts:516](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L516)

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

Defined in: [src/common/utils/Vector.ts:153](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L153)

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

Defined in: [src/common/utils/Vector.ts:498](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L498)

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

Defined in: [src/common/utils/Vector.ts:528](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L528)

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

Defined in: [src/common/utils/Vector.ts:305](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L305)

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

Defined in: [src/common/utils/Vector.ts:388](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L388)

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

Defined in: [src/common/utils/Vector.ts:474](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L474)

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

Defined in: [src/common/utils/Vector.ts:291](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L291)

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

Defined in: [src/common/utils/Vector.ts:374](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/common/utils/Vector.ts#L374)

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
