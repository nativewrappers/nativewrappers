[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Vector2

# Class: Vector2

Defined in: lib/common/utils/Vector.d.ts:315

Represents a 2-dimensional vector.

## Extends

- `Vector`

## Constructors

### new Vector2()

```ts
new Vector2(x, y?): Vector2
```

Defined in: lib/common/utils/Vector.d.ts:324

Constructs a new 2D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | The x-component of the vector. |
| `y`? | `number` | The y-component of the vector (optional, defaults to x). |

#### Returns

[`Vector2`](Vector2.md)

#### Overrides

```ts
Vector.constructor
```

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="size"></a> `[size]` | `readonly` | `number` | `undefined` | `Vector.[size]` | - | lib/common/utils/Vector.d.ts:317 |
| <a id="type"></a> `type` | `readonly` | `Vector2` | `ClassTypes.Vector2` | `Vector.type` | - | lib/common/utils/Vector.d.ts:316 |
| <a id="w"></a> `w` | `public` | `undefined` \| `number` | `undefined` | - | `Vector.w` | lib/common/utils/Vector.d.ts:218 |
| <a id="x-1"></a> `x` | `public` | `number` | `undefined` | - | `Vector.x` | lib/common/utils/Vector.d.ts:215 |
| <a id="y-1"></a> `y` | `public` | `number` | `undefined` | - | `Vector.y` | lib/common/utils/Vector.d.ts:216 |
| <a id="z"></a> `z` | `public` | `undefined` \| `number` | `undefined` | - | `Vector.z` | lib/common/utils/Vector.d.ts:217 |
| <a id="zero"></a> `Zero` | `readonly` | [`Vector2`](Vector2.md) | `undefined` | - | - | lib/common/utils/Vector.d.ts:318 |

## Accessors

### Length

#### Get Signature

```ts
get Length(): number
```

Defined in: lib/common/utils/Vector.d.ts:309

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

Defined in: lib/common/utils/Vector.d.ts:228

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

Defined in: lib/common/utils/Vector.d.ts:227

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

Defined in: lib/common/utils/Vector.d.ts:259

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

Defined in: lib/common/utils/Vector.d.ts:283

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

### addX()

```ts
addX(x): this
```

Defined in: lib/common/utils/Vector.d.ts:263

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

#### Returns

`this`

#### See

Vector.addX

#### Inherited from

```ts
Vector.addX
```

***

### addY()

```ts
addY(y): this
```

Defined in: lib/common/utils/Vector.d.ts:267

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`this`

#### See

Vector.addY

#### Inherited from

```ts
Vector.addY
```

***

### clone()

```ts
clone<T>(): T
```

Defined in: lib/common/utils/Vector.d.ts:233

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Vector2`](Vector2.md) |

#### Returns

`T`

#### See

Vector.clone

#### Inherited from

```ts
Vector.clone
```

***

### distance()

```ts
distance(v): number
```

Defined in: lib/common/utils/Vector.d.ts:247

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

Defined in: lib/common/utils/Vector.d.ts:240

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

Defined in: lib/common/utils/Vector.d.ts:279

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

Defined in: lib/common/utils/Vector.d.ts:295

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

Defined in: lib/common/utils/Vector.d.ts:255

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

Defined in: lib/common/utils/Vector.d.ts:275

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

Defined in: lib/common/utils/Vector.d.ts:291

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

Defined in: lib/common/utils/Vector.d.ts:251

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

Defined in: lib/common/utils/Vector.d.ts:304

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

Defined in: lib/common/utils/Vector.d.ts:271

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

Defined in: lib/common/utils/Vector.d.ts:287

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

### swizzle()

```ts
swizzle<T>(components): T extends 
  | "xx"
  | "xy"
  | "xz"
  | "xw"
  | "yx"
  | "yy"
  | "yz"
  | "yw"
  | "zx"
  | "zy"
  | "zz"
  | "zw"
  | "wx"
  | "wy"
  | "wz"
  | "ww" ? Vector2 : T extends 
  | "xxx"
  | "xxy"
  | "xxz"
  | "xxw"
  | "xyx"
  | "xyy"
  | "xyz"
  | "xyw"
  | "xzx"
  | "xzy"
  | "xzz"
  | "xzw"
  | "xwx"
  | "xwy"
  | "xwz"
  | "xww"
  | "yxx"
  | "yxy"
  | "yxz"
  | "yxw"
  | "yyx"
  | "yyy"
  | "yyz"
  | "yyw"
  | "yzx"
  | "yzy"
  | "yzz"
  | "yzw"
  | "ywx"
  | "ywy"
  | "ywz"
  | "yww"
  | "zxx"
  | "zxy"
  | "zxz"
  | "zxw"
  | "zyx"
  | "zyy"
  | "zyz"
  | "zyw"
  | "zzx"
  | "zzy"
  | "zzz"
  | "zzw"
  | "zwx"
  | "zwy"
  | "zwz"
  | "zww"
  | "wxx"
  | "wxy"
  | "wxz"
  | "wxw"
  | "wyx"
  | "wyy"
  | "wyz"
  | "wyw"
  | "wzx"
  | "wzy"
  | "wzz"
  | "wzw"
  | "wwx"
  | "wwy"
  | "wwz"
  | "www" ? Vector3 : Vector4
```

Defined in: lib/common/utils/Vector.d.ts:310

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `VectorSwizzle` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `components` | `T` |

#### Returns

`T` *extends* 
  \| `"xx"`
  \| `"xy"`
  \| `"xz"`
  \| `"xw"`
  \| `"yx"`
  \| `"yy"`
  \| `"yz"`
  \| `"yw"`
  \| `"zx"`
  \| `"zy"`
  \| `"zz"`
  \| `"zw"`
  \| `"wx"`
  \| `"wy"`
  \| `"wz"`
  \| `"ww"` ? [`Vector2`](Vector2.md) : `T` *extends* 
  \| `"xxx"`
  \| `"xxy"`
  \| `"xxz"`
  \| `"xxw"`
  \| `"xyx"`
  \| `"xyy"`
  \| `"xyz"`
  \| `"xyw"`
  \| `"xzx"`
  \| `"xzy"`
  \| `"xzz"`
  \| `"xzw"`
  \| `"xwx"`
  \| `"xwy"`
  \| `"xwz"`
  \| `"xww"`
  \| `"yxx"`
  \| `"yxy"`
  \| `"yxz"`
  \| `"yxw"`
  \| `"yyx"`
  \| `"yyy"`
  \| `"yyz"`
  \| `"yyw"`
  \| `"yzx"`
  \| `"yzy"`
  \| `"yzz"`
  \| `"yzw"`
  \| `"ywx"`
  \| `"ywy"`
  \| `"ywz"`
  \| `"yww"`
  \| `"zxx"`
  \| `"zxy"`
  \| `"zxz"`
  \| `"zxw"`
  \| `"zyx"`
  \| `"zyy"`
  \| `"zyz"`
  \| `"zyw"`
  \| `"zzx"`
  \| `"zzy"`
  \| `"zzz"`
  \| `"zzw"`
  \| `"zwx"`
  \| `"zwy"`
  \| `"zwz"`
  \| `"zww"`
  \| `"wxx"`
  \| `"wxy"`
  \| `"wxz"`
  \| `"wxw"`
  \| `"wyx"`
  \| `"wyy"`
  \| `"wyz"`
  \| `"wyw"`
  \| `"wzx"`
  \| `"wzy"`
  \| `"wzz"`
  \| `"wzw"`
  \| `"wwx"`
  \| `"wwy"`
  \| `"wwz"`
  \| `"www"` ? [`Vector3`](Vector3.md) : [`Vector4`](Vector4.md)

#### Inherited from

```ts
Vector.swizzle
```

***

### toArray()

```ts
toArray<T>(): VectorArray<T>
```

Defined in: lib/common/utils/Vector.d.ts:299

Converts the vector to an array of its components.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Vector2`](Vector2.md) |

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

Defined in: lib/common/utils/Vector.d.ts:229

#### Returns

`string`

#### Inherited from

```ts
Vector.toString
```

***

### add()

```ts
static add<T, U>(
   this, 
   a, 
   b): U
```

Defined in: lib/common/utils/Vector.d.ts:86

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

Defined in: lib/common/utils/Vector.d.ts:150

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

Defined in: lib/common/utils/Vector.d.ts:114

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

Defined in: lib/common/utils/Vector.d.ts:93

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

Defined in: lib/common/utils/Vector.d.ts:100

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

Defined in: lib/common/utils/Vector.d.ts:107

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

`U`

A new vector with the z-component incremented.

#### Inherited from

```ts
Vector.addZ
```

***

### clone()

```ts
static clone<T, U>(this, obj): Vector3 | Vector4 | Vector2
```

Defined in: lib/common/utils/Vector.d.ts:65

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

[`Vector3`](Vector3.md) \| [`Vector4`](Vector4.md) \| [`Vector2`](Vector2.md)

A new vector instance that is a copy of the provided vector.

#### Inherited from

```ts
Vector.clone
```

***

### create()

```ts
protected static create(x, y?): Vector2
```

Defined in: lib/common/utils/Vector.d.ts:331

Creates a new vector based on the provided parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` \| `Vec` | The x-component of the vector. |
| `y`? | `number` | The y-component of the vector (optional, defaults to the value of x). |

#### Returns

[`Vector2`](Vector2.md)

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

Defined in: lib/common/utils/Vector.d.ts:185

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

Defined in: lib/common/utils/Vector.d.ts:135

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

Defined in: lib/common/utils/Vector.d.ts:171

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

Defined in: lib/common/utils/Vector.d.ts:178

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

Defined in: lib/common/utils/Vector.d.ts:196

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

Defined in: lib/common/utils/Vector.d.ts:206

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

Defined in: lib/common/utils/Vector.d.ts:71

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

Defined in: lib/common/utils/Vector.d.ts:201

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

Defined in: lib/common/utils/Vector.d.ts:212

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

Defined in: lib/common/utils/Vector.d.ts:128

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

Defined in: lib/common/utils/Vector.d.ts:164

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

Defined in: lib/common/utils/Vector.d.ts:191

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

Defined in: lib/common/utils/Vector.d.ts:121

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

Defined in: lib/common/utils/Vector.d.ts:157

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
