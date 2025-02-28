[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Vector4

# Class: Vector4

Defined in: [src/common/utils/Vector.ts:834](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L834)

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

Defined in: [src/common/utils/Vector.ts:851](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L851)

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
| <a id="size"></a> `[size]` | `readonly` | `number` | `4` | `Vector.[size]` | - | [src/common/utils/Vector.ts:838](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L838) |
| <a id="type"></a> `type` | `readonly` | `Vector4` | `ClassTypes.Vector4` | `Vector.type` | - | [src/common/utils/Vector.ts:837](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L837) |
| <a id="w-1"></a> `w` | `public` | `number` | `0` | `Vector.w` | - | [src/common/utils/Vector.ts:840](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L840) |
| <a id="x-1"></a> `x` | `public` | `number` | `0` | - | `Vector.x` | [src/common/utils/Vector.ts:514](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L514) |
| <a id="y-1"></a> `y` | `public` | `number` | `0` | - | `Vector.y` | [src/common/utils/Vector.ts:515](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L515) |
| <a id="z-1"></a> `z` | `public` | `number` | `0` | `Vector.z` | - | [src/common/utils/Vector.ts:839](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L839) |
| <a id="zero"></a> `Zero` | `readonly` | [`Vector4`](Vector4.md) | `undefined` | - | - | [src/common/utils/Vector.ts:842](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L842) |

## Accessors

### Length

#### Get Signature

```ts
get Length(): number
```

Defined in: [src/common/utils/Vector.ts:690](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L690)

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

Defined in: [src/common/utils/Vector.ts:549](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L549)

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

Defined in: [src/common/utils/Vector.ts:541](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L541)

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

Defined in: [src/common/utils/Vector.ts:602](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L602)

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

Defined in: [src/common/utils/Vector.ts:644](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L644)

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

Defined in: [src/common/utils/Vector.ts:881](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L881)

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

Defined in: [src/common/utils/Vector.ts:609](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L609)

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

Defined in: [src/common/utils/Vector.ts:616](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L616)

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

Defined in: [src/common/utils/Vector.ts:874](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L874)

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

Defined in: [src/common/utils/Vector.ts:560](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L560)

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

Defined in: [src/common/utils/Vector.ts:888](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L888)

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

Defined in: [src/common/utils/Vector.ts:581](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L581)

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

Defined in: [src/common/utils/Vector.ts:570](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L570)

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

Defined in: [src/common/utils/Vector.ts:637](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L637)

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

Defined in: [src/common/utils/Vector.ts:665](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L665)

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

Defined in: [src/common/utils/Vector.ts:595](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L595)

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

Defined in: [src/common/utils/Vector.ts:630](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L630)

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

Defined in: [src/common/utils/Vector.ts:658](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L658)

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

Defined in: [src/common/utils/Vector.ts:588](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L588)

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

Defined in: [src/common/utils/Vector.ts:680](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L680)

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

Defined in: [src/common/utils/Vector.ts:623](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L623)

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

Defined in: [src/common/utils/Vector.ts:651](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L651)

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

Defined in: [src/common/utils/Vector.ts:698](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L698)

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

Defined in: [src/common/utils/Vector.ts:672](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L672)

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

Defined in: [src/common/utils/Vector.ts:553](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L553)

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

Defined in: [src/common/utils/Vector.ts:895](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L895)

#### Returns

[`Vector2`](Vector2.md)

the x and y values as Vec2

***

### toVec3()

```ts
toVec3(): Vector3
```

Defined in: [src/common/utils/Vector.ts:902](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L902)

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

Defined in: [src/common/utils/Vector.ts:188](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L188)

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

Defined in: [src/common/utils/Vector.ts:328](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L328)

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

Defined in: [src/common/utils/Vector.ts:245](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L245)

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

Defined in: [src/common/utils/Vector.ts:202](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L202)

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

Defined in: [src/common/utils/Vector.ts:212](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L212)

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

Defined in: [src/common/utils/Vector.ts:226](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L226)

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

Defined in: [src/common/utils/Vector.ts:130](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L130)

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

Defined in: [src/common/utils/Vector.ts:865](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L865)

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

Defined in: [src/common/utils/Vector.ts:409](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L409)

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

Defined in: [src/common/utils/Vector.ts:287](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L287)

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

Defined in: [src/common/utils/Vector.ts:370](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L370)

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

Defined in: [src/common/utils/Vector.ts:384](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L384)

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

Defined in: [src/common/utils/Vector.ts:454](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L454)

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

Defined in: [src/common/utils/Vector.ts:484](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L484)

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

Defined in: [src/common/utils/Vector.ts:142](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L142)

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

Defined in: [src/common/utils/Vector.ts:466](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L466)

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

Defined in: [src/common/utils/Vector.ts:496](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L496)

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

Defined in: [src/common/utils/Vector.ts:273](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L273)

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

Defined in: [src/common/utils/Vector.ts:356](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L356)

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

Defined in: [src/common/utils/Vector.ts:442](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L442)

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

Defined in: [src/common/utils/Vector.ts:259](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L259)

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

Defined in: [src/common/utils/Vector.ts:342](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/utils/Vector.ts#L342)

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
