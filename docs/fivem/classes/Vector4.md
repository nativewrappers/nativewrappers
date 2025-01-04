[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Vector4

# Class: Vector4

Defined in: lib/common/utils/Vector.d.ts:356

Represents a 4-dimensional vector.

## Extends

- `Vector`

## Constructors

### new Vector4()

```ts
new Vector4(
   x, 
   y?, 
   z?, 
   w?): Vector4
```

Defined in: lib/common/utils/Vector.d.ts:368

Constructs a new 4D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | The x-component of the vector. |
| `y`? | `number` | The y-component of the vector (optional, defaults to x). |
| `z`? | `number` | The z-component of the vector (optional, defaults to y). |
| `w`? | `number` | The w-component of the vector (optional, defaults to z). |

#### Returns

[`Vector4`](Vector4.md)

#### Overrides

```ts
Vector.constructor
```

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="size"></a> `size` | `public` | `number` | - | `Vector.size` | lib/common/utils/Vector.d.ts:53 |
| <a id="type"></a> `type` | `public` | `ClassTypes` | `Vector.type` | - | lib/common/utils/Vector.d.ts:357 |
| <a id="w-1"></a> `w` | `public` | `number` | `Vector.w` | - | lib/common/utils/Vector.d.ts:359 |
| <a id="x-1"></a> `x` | `public` | `number` | - | `Vector.x` | lib/common/utils/Vector.d.ts:54 |
| <a id="y-1"></a> `y` | `public` | `number` | - | `Vector.y` | lib/common/utils/Vector.d.ts:55 |
| <a id="z-1"></a> `z` | `public` | `number` | `Vector.z` | - | lib/common/utils/Vector.d.ts:358 |
| <a id="zero"></a> `Zero` | `readonly` | [`Vector4`](Vector4.md) | - | - | lib/common/utils/Vector.d.ts:360 |

## Accessors

### Length

#### Get Signature

```ts
get Length(): number
```

Defined in: lib/common/utils/Vector.d.ts:311

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

Defined in: lib/common/utils/Vector.d.ts:230

#### Returns

`Iterator`\<`number`\>

#### Inherited from

```ts
Vector.[iterator]
```

***

### add()

```ts
add(v): this
```

Defined in: lib/common/utils/Vector.d.ts:261

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### See

Vector.add

#### Inherited from

```ts
Vector.add
```

***

### addAbsolute()

```ts
addAbsolute(v): this
```

Defined in: lib/common/utils/Vector.d.ts:285

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

`this`

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

Defined in: lib/common/utils/Vector.d.ts:376

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

Defined in: lib/common/utils/Vector.d.ts:265

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

Defined in: lib/common/utils/Vector.d.ts:269

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

Defined in: lib/common/utils/Vector.d.ts:372

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
clone(): Vector4
```

Defined in: lib/common/utils/Vector.d.ts:235

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.clone

#### Inherited from

```ts
Vector.clone
```

***

### crossProduct()

```ts
crossProduct(v): Vec4 | Vec3
```

Defined in: lib/common/utils/Vector.d.ts:380

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vec4` \| `Vec3` |

#### Returns

`Vec4` \| `Vec3`

#### See

Vector.crossProduct

***

### distance()

```ts
distance(v): number
```

Defined in: lib/common/utils/Vector.d.ts:249

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

Defined in: lib/common/utils/Vector.d.ts:242

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
divide(v): this
```

Defined in: lib/common/utils/Vector.d.ts:281

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### See

Vector.divide

#### Inherited from

```ts
Vector.divide
```

***

### divideAbsolute()

```ts
divideAbsolute(v): this
```

Defined in: lib/common/utils/Vector.d.ts:297

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

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

Defined in: lib/common/utils/Vector.d.ts:257

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
multiply(v): this
```

Defined in: lib/common/utils/Vector.d.ts:277

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### See

Vector.multiply

#### Inherited from

```ts
Vector.multiply
```

***

### multiplyAbsolute()

```ts
multiplyAbsolute(v): this
```

Defined in: lib/common/utils/Vector.d.ts:293

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### See

Vector.multiply

#### Inherited from

```ts
Vector.multiplyAbsolute
```

***

### normalize()

```ts
normalize(): this
```

Defined in: lib/common/utils/Vector.d.ts:253

#### Returns

`this`

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

Defined in: lib/common/utils/Vector.d.ts:306

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
subtract(v): this
```

Defined in: lib/common/utils/Vector.d.ts:273

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

`this`

#### See

Vector.subtract

#### Inherited from

```ts
Vector.subtract
```

***

### subtractAbsolute()

```ts
subtractAbsolute(v): this
```

Defined in: lib/common/utils/Vector.d.ts:289

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

`this`

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

Defined in: lib/common/utils/Vector.d.ts:301

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

Defined in: lib/common/utils/Vector.d.ts:231

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

Defined in: lib/common/utils/Vector.d.ts:384

#### Returns

[`Vector2`](Vector2.md)

the x and y values as Vec2

***

### toVec3()

```ts
toVec3(): Vector3
```

Defined in: lib/common/utils/Vector.d.ts:388

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

Defined in: lib/common/utils/Vector.d.ts:94

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

Defined in: lib/common/utils/Vector.d.ts:158

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

Defined in: lib/common/utils/Vector.d.ts:122

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

Defined in: lib/common/utils/Vector.d.ts:101

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

Defined in: lib/common/utils/Vector.d.ts:108

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

Defined in: lib/common/utils/Vector.d.ts:115

Adds a scalar value to the z-component of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec4` \| `Vec3` |

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

Defined in: lib/common/utils/Vector.d.ts:79

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

#### Call Signature

```ts
protected static create(x, y?): Vector2
```

Defined in: lib/common/utils/Vector.d.ts:59

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

Defined in: lib/common/utils/Vector.d.ts:60

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

Defined in: lib/common/utils/Vector.d.ts:61

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

Defined in: lib/common/utils/Vector.d.ts:67

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

Defined in: lib/common/utils/Vector.d.ts:193

Calculates the cross product of two vectors in three-dimensional space.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec4` \| `Vec3` |

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

Defined in: lib/common/utils/Vector.d.ts:143

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

Defined in: lib/common/utils/Vector.d.ts:179

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

Defined in: lib/common/utils/Vector.d.ts:186

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

Defined in: lib/common/utils/Vector.d.ts:204

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

Defined in: lib/common/utils/Vector.d.ts:214

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

Defined in: lib/common/utils/Vector.d.ts:73

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

Defined in: lib/common/utils/Vector.d.ts:209

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
| `primitive` | `U` \| `MsgpackBuffer` | The object to use as a vector. |

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

Defined in: lib/common/utils/Vector.d.ts:220

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

Defined in: lib/common/utils/Vector.d.ts:136

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

Defined in: lib/common/utils/Vector.d.ts:172

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

Defined in: lib/common/utils/Vector.d.ts:199

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

Defined in: lib/common/utils/Vector.d.ts:129

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

Defined in: lib/common/utils/Vector.d.ts:165

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
