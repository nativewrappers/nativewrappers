[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Vector4

# Class: Vector4

Defined in: [src/common/utils/Vector.ts:812](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L812)

Represents a 4-dimensional vector.

## Extends

- `Vector`

## Constructors

### new Vector4()

```ts
new Vector4(
   x, 
   y, 
   z, 
   w): Vector4
```

Defined in: [src/common/utils/Vector.ts:829](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L829)

Constructs a new 4D vector.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `undefined` | The x-component of the vector. |
| `y` | `number` | `x` | The y-component of the vector (optional, defaults to x). |
| `z` | `number` | `y` | The z-component of the vector (optional, defaults to y). |
| `w` | `number` | `z` | The w-component of the vector (optional, defaults to z). |

#### Returns

[`Vector4`](Vector4.md)

#### Overrides

```ts
Vector.constructor
```

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="size"></a> `[size]` | `readonly` | `number` | `4` | `Vector.[size]` | - | [src/common/utils/Vector.ts:816](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L816) |
| <a id="type"></a> `type` | `readonly` | `Vector4` | `ClassTypes.Vector4` | `Vector.type` | - | [src/common/utils/Vector.ts:815](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L815) |
| <a id="w-1"></a> `w` | `public` | `number` | `0` | `Vector.w` | - | [src/common/utils/Vector.ts:818](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L818) |
| <a id="x-1"></a> `x` | `public` | `number` | `0` | - | `Vector.x` | [src/common/utils/Vector.ts:508](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L508) |
| <a id="y-1"></a> `y` | `public` | `number` | `0` | - | `Vector.y` | [src/common/utils/Vector.ts:509](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L509) |
| <a id="z-1"></a> `z` | `public` | `number` | `0` | `Vector.z` | - | [src/common/utils/Vector.ts:817](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L817) |
| <a id="zero"></a> `Zero` | `readonly` | [`Vector4`](Vector4.md) | `undefined` | - | - | [src/common/utils/Vector.ts:820](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L820) |

## Accessors

### Length

#### Get Signature

```ts
get Length(): number
```

Defined in: [src/common/utils/Vector.ts:684](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L684)

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

Defined in: [src/common/utils/Vector.ts:543](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L543)

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

Defined in: [src/common/utils/Vector.ts:535](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L535)

#### Returns

`Iterator`\<`number`\>

#### Inherited from

```ts
Vector.[iterator]
```

***

### add()

```ts
add(v): Vector4
```

Defined in: [src/common/utils/Vector.ts:596](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L596)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.add

#### Inherited from

```ts
Vector.add
```

***

### addAbsolute()

```ts
addAbsolute(v): Vector4
```

Defined in: [src/common/utils/Vector.ts:638](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L638)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addAbsolute

#### Inherited from

```ts
Vector.addAbsolute
```

***

### addW()

```ts
addW(w): Vector4
```

Defined in: [src/common/utils/Vector.ts:859](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L859)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `w` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addW

***

### addX()

```ts
addX(x): Vector4
```

Defined in: [src/common/utils/Vector.ts:603](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L603)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addX

#### Inherited from

```ts
Vector.addX
```

***

### addY()

```ts
addY(y): Vector4
```

Defined in: [src/common/utils/Vector.ts:610](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L610)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addY

#### Inherited from

```ts
Vector.addY
```

***

### addZ()

```ts
addZ(z): Vector4
```

Defined in: [src/common/utils/Vector.ts:852](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L852)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `z` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addZ

***

### clone()

```ts
clone<T>(): T
```

Defined in: [src/common/utils/Vector.ts:554](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L554)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Vector4`](Vector4.md) |

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

Defined in: [src/common/utils/Vector.ts:866](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L866)

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

Defined in: [src/common/utils/Vector.ts:575](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L575)

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

Defined in: [src/common/utils/Vector.ts:564](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L564)

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
divide(v): Vector4
```

Defined in: [src/common/utils/Vector.ts:631](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L631)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.divide

#### Inherited from

```ts
Vector.divide
```

***

### divideAbsolute()

```ts
divideAbsolute(v): Vector4
```

Defined in: [src/common/utils/Vector.ts:659](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L659)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

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

Defined in: [src/common/utils/Vector.ts:589](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L589)

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
multiply(v): Vector4
```

Defined in: [src/common/utils/Vector.ts:624](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L624)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.multiply

#### Inherited from

```ts
Vector.multiply
```

***

### multiplyAbsolute()

```ts
multiplyAbsolute(v): Vector4
```

Defined in: [src/common/utils/Vector.ts:652](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L652)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.multiply

#### Inherited from

```ts
Vector.multiplyAbsolute
```

***

### normalize()

```ts
normalize(): Vector4
```

Defined in: [src/common/utils/Vector.ts:582](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L582)

#### Returns

[`Vector4`](Vector4.md)

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

Defined in: [src/common/utils/Vector.ts:674](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L674)

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
subtract(v): Vector4
```

Defined in: [src/common/utils/Vector.ts:617](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L617)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.subtract

#### Inherited from

```ts
Vector.subtract
```

***

### subtractAbsolute()

```ts
subtractAbsolute(v): Vector4
```

Defined in: [src/common/utils/Vector.ts:645](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L645)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

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

Defined in: [src/common/utils/Vector.ts:666](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L666)

Converts the vector to an array of its components.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Vector4`](Vector4.md) |

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

Defined in: [src/common/utils/Vector.ts:547](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L547)

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

Defined in: [src/common/utils/Vector.ts:873](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L873)

#### Returns

[`Vector2`](Vector2.md)

the x and y values as Vec2

***

### toVec3()

```ts
toVec3(): Vector3
```

Defined in: [src/common/utils/Vector.ts:880](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L880)

#### Returns

[`Vector3`](Vector3.md)

the x and y values as Vec3

***

### add()

```ts
static add<T, U>(
   this, 
   a, 
   b): U
```

Defined in: [src/common/utils/Vector.ts:182](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L182)

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

Defined in: [src/common/utils/Vector.ts:322](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L322)

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
   w): U
```

Defined in: [src/common/utils/Vector.ts:239](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L239)

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

`U`

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

Defined in: [src/common/utils/Vector.ts:196](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L196)

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
   y): U
```

Defined in: [src/common/utils/Vector.ts:206](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L206)

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

`U`

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
   z): U
```

Defined in: [src/common/utils/Vector.ts:220](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L220)

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

`U`

A new vector with the z-component incremented.

#### Inherited from

```ts
Vector.addZ
```

***

### clone()

```ts
static clone<T, U>(this, obj): Vector4 | Vector3 | Vector2
```

Defined in: [src/common/utils/Vector.ts:124](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L124)

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

[`Vector4`](Vector4.md) \| [`Vector3`](Vector3.md) \| [`Vector2`](Vector2.md)

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
   z, 
   w): Vector4
```

Defined in: [src/common/utils/Vector.ts:843](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L843)

Creates a new vector based on the provided parameters.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` \| `Vec` | `undefined` | The x-component of the vector. |
| `y` | `number` | `...` | The y-component of the vector (optional, defaults to the value of x). |
| `z` | `number` | `y` | The z-component of the vector (optional, defaults to the value of y). |
| `w` | `number` | `z` | The w-component of the vector (optional, defaults to the value of z). |

#### Returns

[`Vector4`](Vector4.md)

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

Defined in: [src/common/utils/Vector.ts:403](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L403)

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

Defined in: [src/common/utils/Vector.ts:281](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L281)

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

Defined in: [src/common/utils/Vector.ts:364](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L364)

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

Defined in: [src/common/utils/Vector.ts:378](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L378)

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

Defined in: [src/common/utils/Vector.ts:448](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L448)

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

Defined in: [src/common/utils/Vector.ts:478](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L478)

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

Defined in: [src/common/utils/Vector.ts:136](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L136)

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

Defined in: [src/common/utils/Vector.ts:460](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L460)

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

Defined in: [src/common/utils/Vector.ts:490](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L490)

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

Defined in: [src/common/utils/Vector.ts:267](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L267)

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

Defined in: [src/common/utils/Vector.ts:350](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L350)

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

Defined in: [src/common/utils/Vector.ts:436](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L436)

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

Defined in: [src/common/utils/Vector.ts:253](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L253)

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

Defined in: [src/common/utils/Vector.ts:336](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/Vector.ts#L336)

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
