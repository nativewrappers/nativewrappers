// Adapted from https://raw.githubusercontent.com/you21979/typescript-vector/master/vector3.ts

import type { MsgpackBuffer } from "@common/types";
import { ClassTypes } from "./ClassTypes";

const EXT_VECTOR2 = 20;
const EXT_VECTOR3 = 21;
const EXT_VECTOR4 = 22;
const size = Symbol("size");

/**
 * Represents a 2-dimensional vector.
 */
export interface Vec2 {
  x: number;
  y: number;
}

/**
 * Represents a 3-dimensional vector.
 */
export interface Vec3 extends Vec2 {
  z: number;
}

/**
 * Represents a 4-dimensional vector.
 */
export interface Vec4 extends Vec3 {
  w: number;
}

/**
 * An object with vector components.
 */
export interface Vec extends Vec2 {
  z?: number;
  w?: number;
}

/**
 * Represents a vector of variable dimensions.
 */
type VectorN<L extends number, T = number> = L extends 2
  ? [T, T]
  : L extends 3
    ? [T, T, T]
    : L extends 4
      ? [T, T, T, T]
      : never;

/**
 * An array that can be converted to a vector.
 */
type VectorArray<T> = T extends Vec4
  ? VectorN<4>
  : T extends Vec3
    ? VectorN<3>
    : T extends Vec2
      ? VectorN<2>
      : number[];

/**
 * The constructor type of the Vector class.
 */
type VectorType = typeof Vector;

/**
 * Represents an object or class that can be treated as a vector.
 */
type VectorLike = Vec | Vector;

/**
 * Represents the keys of a vector object.
 */
type VectorKeys = keyof Vec;

/**
 * Utility type to get the vector type of an object based on its component.
 */
type InferVector<T> = T extends Vec4 | VectorN<4>
  ? Vector4
  : T extends Vec3 | VectorN<3>
    ? Vector3
    : T extends Vec2 | VectorN<2>
      ? Vector2
      : any;

type VectorKey = "x" | "y" | "z" | "w";
type VectorSwizzle = Vec2Swizzle | Vec3Swizzle | Vec4Swizzle;
type Vec2Swizzle = `${VectorKey}${VectorKey}`;
type Vec3Swizzle = `${VectorKey}${VectorKey}${VectorKey}`;
type Vec4Swizzle = `${VectorKey}${VectorKey}${VectorKey}${VectorKey}`;

/**
 * A base vector class inherited by all vector classes.
 */
abstract class Vector {
  protected static create<T>(
    this: T,
    x: number | Vec,
    y: number = x as number,
    z?: number,
    w?: number,
  ) {
    if (typeof x === "object") ({ x, y, z, w } = x);

    const size =
      (this instanceof Vector && this.size) ||
      [x, y, z, w].filter((arg) => arg !== undefined).length;

    switch (size) {
      case 1:
      case 2:
        return new Vector2(x, y);
      case 3:
        return new Vector3(x, y, z);
      case 4:
        return new Vector4(x, y, z, w);
      default:
        throw new Error(`Cannot instantiate Vector with size of ${size}.`);
    }
  }

  /**
   * Creates a deep copy of the provided vector.
   * @param obj The vector to clone.
   * @returns A new vector instance that is a copy of the provided vector.
   */
  public static clone<T extends VectorType, U extends VectorLike>(
    this: T,
    obj: U,
  ) {
    return this.create(obj);
  }

  /**
   * Creates a vector from binary data in a MsgpackBuffer.
   * @param msgpackBuffer The buffer containing binary data.
   * @returns A new vector instance.
   */
  public static fromBuffer<T extends VectorType>(
    this: T,
    { buffer, type }: MsgpackBuffer,
  ) {
    if (type !== EXT_VECTOR2 && type !== EXT_VECTOR3 && type !== EXT_VECTOR4)
      throw new Error("Buffer type is not a valid Vector.");

    const arr = new Array(buffer.length / 4);

    for (let i = 0; i < arr.length; i++)
      arr[i] = Number(buffer.readFloatLE(i * 4).toPrecision(7));

    return this.fromArray(arr);
  }

  /**
   * Performs an operation between a vector and either another vector or scalar value.
   * @param a - The first vector.
   * @param b - The second vector or scalar value.
   * @param operator - The function defining the operation to perform.
   * @returns A new vector resulting from the operation.
   */
  private static operate<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
    operator: (x: number, y: number) => number,
  ): U {
    let { x, y, z, w } = a;
    const isNumber = typeof b === "number";

    x = operator(x, isNumber ? b : (b.x ?? 0));
    y = operator(y, isNumber ? b : (b.y ?? 0));

    if (z !== undefined) z = operator(z, isNumber ? b : (b.z ?? 0));
    if (w !== undefined) w = operator(w, isNumber ? b : (b.w ?? 0));

    return this.create(x, y, z, w) as unknown as U;
  }

  /**
   * Adds two vectors or a scalar value to a vector.
   * @param a - The first vector or scalar value.
   * @param b - The second vector or scalar value.
   * @returns A new vector with incremented components.
   */
  public static add<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
  ) {
    return this.operate(a, b, (x, y) => x + y);
  }

  /**
   * Adds a scalar value to the x-component of a vector.
   * @param obj - The vector.
   * @param x - The value to add to the x-component.
   * @returns A new vector with the x-component incremented.
   */
  public static addX<U extends VectorLike>(obj: U, x: number) {
    return this.create(obj.x + x, obj.y, obj.z, obj.w) as unknown as U;
  }

  /**
   * Adds a scalar value to the y-component of a vector.
   * @param obj - The vector.
   * @param y - The value to add to the y-component.
   * @returns A new vector with the y-component incremented.
   */
  public static addY<T extends VectorType, U extends VectorLike>(
    this: T,
    obj: U,
    y: number,
  ) {
    return this.create(obj.x, obj.y + y, obj.z, obj.w) as unknown as U;
  }

  /**
   * Adds a scalar value to the z-component of a vector.
   * @param obj - The vector.
   * @param z - The value to add to the z-component.
   * @returns A new vector with the z-component incremented.
   */
  public static addZ<T extends VectorType, U extends Vec3 | Vec4>(
    this: T,
    obj: U,
    z: number,
  ) {
    return this.create(
      obj.x,
      obj.y,
      obj.z + z,
      (obj as Vec4).w,
    ) as unknown as U;
  }

  /**
   * Adds a scalar value to the w-component of a vector.
   * @param obj - The vector.
   * @param w - The value to add to the w-component.
   * @returns A new vector with the w-component incremented.
   */
  public static addW<T extends VectorType, U extends Vec4>(
    this: T,
    obj: U,
    w: number,
  ) {
    return this.create(obj.x, obj.y, obj.z, obj.w + w) as unknown as U;
  }

  /**
   * Subtracts one vector from another or subtracts a scalar value from a vector.
   * @param a - The vector.
   * @param b - The second vector or scalar value.
   * @returns A new vector with subtracted components.
   */
  public static subtract<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
  ): U {
    return this.operate(a, b, (x, y) => x - y) as U;
  }

  /**
   * Multiplies two vectors by their components, or multiplies a vector by a scalar value.
   * @param a - The vector.
   * @param b - The second vector or scalar value.
   * @returns A new vector with multiplied components.
   */
  public static multiply<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
  ): U {
    return this.operate(a, b, (x, y) => x * y) as U;
  }

  /**
   * Divides two vectors by their components, or divides a vector by a scalar value.
   * @param a - The vector.
   * @param b - The second vector or scalar vector.
   * @returns A new vector with divided components.
   */
  public static divide<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
  ): U {
    return this.operate(a, b, (x, y) => x / y);
  }

  /**
   * Performs an operation between a vector and either another vector or scalar value converting the vector into absolute values.
   * @param a - The first vector.
   * @param b - The second vector or scalar value.
   * @param operator - The function defining the operation to perform.
   * @returns A new vector resulting from the operation.
   */
  private static operateAbsolute<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
    operator: (x: number, y: number) => number,
  ): U {
    let { x, y, z, w } = a;
    const isNumber = typeof b === "number";

    x = operator(Math.abs(x), isNumber ? b : Math.abs(b.x ?? 0));
    y = operator(Math.abs(y), isNumber ? b : Math.abs(b.y ?? 0));

    if (z !== undefined)
      z = operator(Math.abs(z), isNumber ? b : Math.abs(b.z ?? 0));
    if (w !== undefined)
      w = operator(Math.abs(w), isNumber ? b : Math.abs(b.w ?? 0));

    return this.create(x, y, z, w) as unknown as U;
  }

  /**
   * Adds two vectors or a scalar value to a vector.
   * @param a - The first vector or scalar value.
   * @param b - The second vector or scalar value.
   * @returns A new vector with incremented components.
   */
  public static addAbsolute<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
  ): U {
    return this.operateAbsolute(a, b, (x, y) => x + y) as U;
  }

  /**
   * Subtracts one vector from another or subtracts a scalar value from a vector.
   * @param a - The vector.
   * @param b - The second vector or scalar value.
   * @returns A new vector with subtracted components.
   */
  public static subtractAbsolute<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
  ): U {
    return this.operateAbsolute(a, b, (x, y) => x - y) as U;
  }

  /**
   * Multiplies two vectors by their components, or multiplies a vector by a scalar value.
   * @param a - The vector.
   * @param b - The second vector or scalar value.
   * @returns A new vector with multiplied components.
   */
  public static multiplyAbsolute<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
  ): U {
    return this.operateAbsolute(a, b, (x, y) => x * y) as U;
  }

  /**
   * Divides two vectors by their components, or divides a vector by a scalar value
   * @param a - The vector.
   * @param b - The second vector or scalar vector.
   * @returns A new vector with divided components.
   */
  public static divideAbsolute<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: VectorLike | number,
  ): U {
    return this.operateAbsolute(a, b, (x, y) => x / y);
  }

  /**
   * Calculates the dot product of two vectors.
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns A scalar value representing the degree of alignment between the input vectors.
   */
  public static dotProduct<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
    b: U,
  ): number {
    let result = 0;

    for (const key of ["x", "y", "z", "w"] as (keyof U)[]) {
      const x = a[key] as number | undefined;
      const y = b[key] as number | undefined;

      if (!!x && !!y) result += x * y;
      else if (x || y)
        throw new Error("Vectors must have the same dimensions.");
    }

    return result;
  }

  /**
   * Calculates the cross product of two vectors in three-dimensional space.
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns A new vector perpendicular to both input vectors.
   */
  public static crossProduct<T extends VectorType, U extends Vec3 | Vec4>(
    this: T,
    a: U,
    b: U,
  ) {
    const { x: ax, y: ay, z: az, w: aw } = a as Vec;
    const { x: bx, y: by, z: bz } = b;

    if (
      ax === undefined ||
      ay === undefined ||
      az === undefined ||
      bx === undefined ||
      by === undefined ||
      bz === undefined
    )
      throw new Error(
        "Vector.crossProduct requires two three-dimensional vectors.",
      );

    return this.create(
      ay * bz - az * by,
      az * bx - ax * bz,
      ax * by - ay * bx,
      aw,
    ) as unknown as U;
  }

  /**
   * Normalizes a vector, producing a new vector with the same direction but with a magnitude of 1.
   * @param vector - The vector to be normalized.
   * @returns The new normalized vector.
   */
  public static normalize<T extends VectorType, U extends VectorLike>(
    this: T,
    a: U,
  ): U {
    const length = a instanceof Vector ? a.Length : this.Length(a);
    return this.divide(a, length) as U;
  }

  /**
   * Creates a vector from an array of numbers.
   * @param primitive An array of numbers (usually returned by a native).
   */
  static fromArray<T extends VectorType, U extends VectorArray<T> | number[]>(
    this: T,
    primitive: U,
  ) {
    const [x, y, z, w] = primitive;
    return this.create(x, y, z, w) as InstanceType<T>;
  }

  /**
   * Creates a vector from an array or object containing vector components.
   * @param primitive The object to use as a vector.
   */
  static fromObject<
    T extends VectorType,
    U extends InferVector<T> | VectorArray<T>,
  >(this: T, primitive: U | MsgpackBuffer): InstanceType<T> {
    if (Array.isArray(primitive))
      return this.fromArray(primitive as VectorArray<T>);

    if ("buffer" in primitive) return this.fromBuffer(primitive);

    const { x, y, z, w } = primitive;

    return this.create(x, y, z, w) as InstanceType<T>;
  }

  /**
   * Creates an array of vectors from an array of number arrays
   * @param primitives A multi-dimensional array of number arrays
   */
  public static fromArrays<T extends VectorType, U extends VectorArray<T>[]>(
    this: T,
    primitives: U,
  ) {
    return primitives.map(this.fromArray) as InstanceType<T>[];
  }

  /**
   * Calculates the length (magnitude) of a vector.
   * @param obj - The vector for which to calculate the length.
   * @returns The magnitude of the vector.
   */
  public static Length<T extends VectorType, U extends VectorLike>(
    this: T,
    obj: U,
  ): number {
    let sum = 0;

    for (const key of ["x", "y", "z", "w"] as (keyof U)[]) {
      if (key in obj) {
        const value = obj[key] as number;
        sum += value * value;
      }
    }

    return Math.sqrt(sum);
  }

  public type: unknown;
  public [size]: number = 2;
  public x: number = 0;
  public y: number = 0;
  public z: number | undefined;
  public w: number | undefined;

  /**
   * Constructs a new vector.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to x).
   * @param z The z-component of the vector (optional).
   * @param w The w-component of the vector (optional).
   */
  constructor(x: number, y = x, z?: number, w?: number) {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number") {
        throw new TypeError(
          `${
            this.constructor.name
          } argument at index ${i} must be a number, but got ${typeof arguments[i]}`,
        );
      }
    }

    this.x = x;
    this.y = y;
  }

  *[Symbol.iterator](): Iterator<number> {
    yield this.x;
    yield this.y;

    if (this.z !== undefined) yield this.z;
    if (this.w !== undefined) yield this.w;
  }

  get size() {
    return this[size];
  }

  public toString() {
    return `vector${this.size}(${this.toArray().join(", ")})`;
  }

  /**
   * @see Vector.clone
   */
  public clone<T extends this>() {
    return Vector.clone(this) as T;
  }

  /**
   * The product of the Euclidean magnitudes of this and another Vector.
   *
   * @param v Vector to find Euclidean magnitude between.
   * @returns Euclidean magnitude with another vector.
   */
  public distanceSquared(v: VectorLike): number {
    const w = this.subtract(v);
    return Vector.dotProduct(w, w);
  }

  /**
   * The distance between two Vectors.
   *
   * @param v Vector to find distance between.
   * @returns Distance between this and another vector.
   */
  public distance(v: VectorLike): number {
    return Math.sqrt(this.distanceSquared(v));
  }

  /**
   * @see Vector.normalize
   */
  public normalize() {
    return Vector.normalize(this);
  }

  /**
   * @see Vector.dotProduct
   */
  public dotProduct(v: this): number {
    return Vector.dotProduct(this, v);
  }

  /**
   * @see Vector.add
   */
  public add(v: VectorLike | number) {
    return Vector.add(this, v);
  }

  /**
   * @see Vector.addX
   */
  public addX(x: number) {
    return Vector.addX(this, x);
  }

  /**
   * @see Vector.addY
   */
  public addY(y: number) {
    return Vector.addY(this, y);
  }

  /**
   * @see Vector.subtract
   */
  public subtract(v: VectorLike) {
    return Vector.subtract(this, v);
  }

  /**
   * @see Vector.multiply
   */
  public multiply(v: VectorLike | number) {
    return Vector.multiply(this, v);
  }

  /**
   * @see Vector.divide
   */
  public divide(v: VectorLike | number) {
    return Vector.divide(this, v);
  }

  /**
   * @see Vector.addAbsolute
   */
  public addAbsolute(v: VectorLike) {
    return Vector.addAbsolute(this, v);
  }

  /**
   * @see Vector.subtractAbsolute
   */
  public subtractAbsolute(v: VectorLike) {
    return Vector.subtractAbsolute(this, v);
  }

  /**
   * @see Vector.multiply
   */
  public multiplyAbsolute(v: VectorLike | number) {
    return Vector.multiplyAbsolute(this, v);
  }

  /**
   * @see Vector.divide
   */
  public divideAbsolute(v: VectorLike | number) {
    return Vector.divideAbsolute(this, v);
  }

  /**
   * Converts the vector to an array of its components.
   */
  public toArray<T extends this>() {
    return [...this] as VectorArray<T>;
  }

  /**
   * Replaces the components of the vector with the components of another vector object.
   * @param v - The object whose components will replace the current vector's components.
   */
  public replace<T extends VectorLike>(v: T): void {
    for (const key of ["x", "y", "z", "w"] as VectorKeys[]) {
      if (key in this && key in v) this[key] = v[key] as number;
    }
  }

  /**
   * Calculates the length (magnitude) of a vector.
   * @returns The magnitude of the vector.
   */
  public get Length(): number {
    let sum = 0;

    for (let value of this) sum += value * value;

    return Math.sqrt(sum);
  }

  public swizzle<T extends VectorSwizzle>(
    components: T,
  ): T extends Vec2Swizzle
    ? Vector2
    : T extends Vec3Swizzle
      ? Vector3
      : Vector4 {
    if (!/^[xyzw]+$/.test(components))
      throw new Error(`Invalid key in swizzle components (${components}).`);

    const arr = components.split("").map((char) => (this as any)[char] ?? 0);

    //@ts-ignore
    return Vector.create(...arr);
  }
}

/**
 * Represents a 2-dimensional vector.
 */
export class Vector2 extends Vector {
  // DO NOT USE, ONLY EXPOSED BECAUSE TS IS TRASH, THIS TYPE IS NOT GUARANTEED
  // TO EXIST, CHANGING IT WILL BREAK STUFF
  readonly type = ClassTypes.Vector2;
  readonly [size]: number = 2;

  public static readonly Zero: Vector2 = new Vector2(0, 0);

  /**
   * Constructs a new 2D vector.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to x).
   */
  constructor(x: number, y = x) {
    super(x, y);
  }

  /**
   * Creates a new vector based on the provided parameters.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to the value of x).
   * @returns A new vector instance.
   */
  protected static create(x: number | Vec, y = x as number) {
    if (typeof x === "object") ({ x, y } = x);

    return new this(x, y);
  }
}

/**
 * Represents a 3-dimensional vector.
 */
export class Vector3 extends Vector implements Vec3 {
  // DO NOT USE, ONLY EXPOSED BECAUSE TS IS TRASH, THIS TYPE IS NOT GUARANTEED
  // TO EXIST, CHANGING IT WILL BREAK STUFF
  readonly type = ClassTypes.Vector3;
  readonly [size]: number = 3;
  public z: number = 0;

  public static readonly Zero: Vector3 = new Vector3(0, 0, 0);

  public static readonly UnitX = new Vector3(1.0, 0.0, 0.0);

  public static readonly UnitY = new Vector3(0.0, 1.0, 0.0);

  public static readonly UnitZ = new Vector3(0.0, 0.0, 1.0);

  public static readonly One = new Vector3(1.0, 1.0, 1.0);

  public static readonly Up = new Vector3(0.0, 0.0, 1.0);

  public static readonly Down = new Vector3(0.0, 0.0, -1.0);

  public static readonly Left = new Vector3(-1.0, 0.0, 0.0);

  public static readonly Right = new Vector3(1.0, 0.0, 0.0);

  public static readonly ForwardRH = new Vector3(0.0, 1.0, 0.0);

  public static readonly ForwardLH = new Vector3(0.0, -1.0, 0.0);

  public static readonly BackwardRH = new Vector3(0.0, -1.0, 0.0);

  public static readonly BackwardLH = new Vector3(0.0, 1.0, 0.0);

  public static readonly Backward = Vector3.BackwardRH;

  /**
   * Constructs a new 3D vector.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to x).
   * @param z The z-component of the vector (optional, defaults to y).
   */
  constructor(x: number, y = x, z = y) {
    super(x, y, z);
    this.z = z;
  }

  /**
   * Creates a new vector based on the provided parameters.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to the value of x).
   * @param z The z-component of the vector (optional, defaults to the value of y).
   * @returns A new vector instance.
   */
  protected static create(x: number | Vec, y = x as number, z = y) {
    if (typeof x === "object") ({ x, y, z = y } = x);

    return new this(x, y, z);
  }

  /**
   * @see Vector.addZ
   */
  public addZ(z: number) {
    return Vector.addZ(this, z);
  }

  /**
   * @see Vector.crossProduct
   */
  public crossProduct(v: Vec3 | Vec4) {
    return Vector.crossProduct(this, v);
  }

  /**
   * @returns the x and y values as Vec2
   */
  public toVec2() {
    return new Vector2(this.x, this.y);
  }
}
/**
 * Represents a 4-dimensional vector.
 */
export class Vector4 extends Vector {
  // DO NOT USE, ONLY EXPOSED BECAUSE TS IS TRASH, THIS TYPE IS NOT GUARANTEED
  // TO EXIST, CHANGING IT WILL BREAK STUFF
  readonly type = ClassTypes.Vector4;
  readonly [size]: number = 4;
  public z: number = 0;
  public w: number = 0;

  public static readonly Zero: Vector4 = new Vector4(0, 0, 0, 0);

  /**
   * Constructs a new 4D vector.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to x).
   * @param z The z-component of the vector (optional, defaults to y).
   * @param w The w-component of the vector (optional, defaults to z).
   */
  constructor(x: number, y = x, z = y, w = z) {
    super(x, y, z, w);
    this.z = z;
    this.w = w;
  }

  /**
   * Creates a new vector based on the provided parameters.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to the value of x).
   * @param z The z-component of the vector (optional, defaults to the value of y).
   * @param w The w-component of the vector (optional, defaults to the value of z).
   * @returns A new vector instance.
   */
  protected static create(x: number | Vec, y = x as number, z = y, w = z) {
    if (typeof x === "object") ({ x, y, z = y, w = z } = x);

    return new this(x, y, z, w);
  }

  /**
   * @see Vector.addZ
   */
  public addZ(z: number) {
    return Vector.addZ(this, z);
  }

  /**
   * @see Vector.addW
   */
  public addW(w: number) {
    return Vector.addW(this, w);
  }

  /**
   * @see Vector.crossProduct
   */
  public crossProduct(v: Vec3 | Vec4) {
    return Vector.crossProduct(this, v);
  }

  /**
   * @returns the x and y values as Vec2
   */
  public toVec2() {
    return new Vector2(this.x, this.y);
  }

  /**
   * @returns the x and y values as Vec3
   */
  public toVec3() {
    return new Vector3(this.x, this.y, this.z);
  }
}
