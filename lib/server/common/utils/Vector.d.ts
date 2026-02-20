import type { MsgpackBuffer } from "../types";
import { ClassTypes } from "./ClassTypes";
declare const size: unique symbol;
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
type VectorN<L extends number, T = number> = L extends 2 ? [T, T] : L extends 3 ? [T, T, T] : L extends 4 ? [T, T, T, T] : never;
/**
 * An array that can be converted to a vector.
 */
type VectorArray<T> = T extends Vec4 ? VectorN<4> : T extends Vec3 ? VectorN<3> : T extends Vec2 ? VectorN<2> : number[];
/**
 * The constructor type of the Vector class.
 */
type VectorType = typeof Vector;
/**
 * Represents an object or class that can be treated as a vector.
 */
type VectorLike = Vec | Vector;
/**
 * Utility type to get the vector type of an object based on its component.
 */
type InferVector<T> = T extends Vec4 | VectorN<4> ? Vector4 : T extends Vec3 | VectorN<3> ? Vector3 : T extends Vec2 | VectorN<2> ? Vector2 : any;
type VectorKey = "x" | "y" | "z" | "w";
type VectorSwizzle = Vec2Swizzle | Vec3Swizzle | Vec4Swizzle;
type Vec2Swizzle = `${VectorKey}${VectorKey}`;
type Vec3Swizzle = `${VectorKey}${VectorKey}${VectorKey}`;
type Vec4Swizzle = `${VectorKey}${VectorKey}${VectorKey}${VectorKey}`;
/**
 * A base vector class inherited by all vector classes.
 */
declare abstract class Vector {
    protected static create<T>(this: T, x: number | Vec, y?: number, z?: number, w?: number): Vector4 | Vector3 | Vector2;
    /**
     * Creates a deep copy of the provided vector.
     * @param obj The vector to clone.
     * @returns A new vector instance that is a copy of the provided vector.
     */
    static clone<T extends VectorType, U extends VectorLike>(this: T, obj: U): Vector4 | Vector3 | Vector2;
    /**
     * Creates a vector from binary data in a MsgpackBuffer.
     * @param msgpackBuffer The buffer containing binary data.
     * @returns A new vector instance.
     */
    static fromBuffer<T extends VectorType>(this: T, { buffer, type }: MsgpackBuffer): InstanceType<T>;
    /**
     * Performs an operation between a vector and either another vector or scalar value.
     * @param a - The first vector.
     * @param b - The second vector or scalar value.
     * @param operator - The function defining the operation to perform.
     * @returns A new vector resulting from the operation.
     */
    private static operate;
    /**
     * Adds two vectors or a scalar value to a vector.
     * @param a - The first vector or scalar value.
     * @param b - The second vector or scalar value.
     * @returns A new vector with incremented components.
     */
    static add<T extends VectorType, U extends VectorLike>(this: T, a: U, b: VectorLike | number): U;
    /**
     * Adds a scalar value to the x-component of a vector.
     * @param obj - The vector.
     * @param x - The value to add to the x-component.
     * @returns A new vector with the x-component incremented.
     */
    static addX<U extends VectorLike>(obj: U, x: number): U;
    /**
     * Adds a scalar value to the y-component of a vector.
     * @param obj - The vector.
     * @param y - The value to add to the y-component.
     * @returns A new vector with the y-component incremented.
     */
    static addY<T extends VectorType, U extends VectorLike>(this: T, obj: U, y: number): U;
    /**
     * Adds a scalar value to the z-component of a vector.
     * @param obj - The vector.
     * @param z - The value to add to the z-component.
     * @returns A new vector with the z-component incremented.
     */
    static addZ<T extends VectorType, U extends Vec3 | Vec4>(this: T, obj: U, z: number): U;
    /**
     * Adds a scalar value to the w-component of a vector.
     * @param obj - The vector.
     * @param w - The value to add to the w-component.
     * @returns A new vector with the w-component incremented.
     */
    static addW<T extends VectorType, U extends Vec4>(this: T, obj: U, w: number): U;
    /**
     * Subtracts one vector from another or subtracts a scalar value from a vector.
     * @param a - The vector.
     * @param b - The second vector or scalar value.
     * @returns A new vector with subtracted components.
     */
    static subtract<T extends VectorType, U extends VectorLike>(this: T, a: U, b: VectorLike | number): U;
    /**
     * Multiplies two vectors by their components, or multiplies a vector by a scalar value.
     * @param a - The vector.
     * @param b - The second vector or scalar value.
     * @returns A new vector with multiplied components.
     */
    static multiply<T extends VectorType, U extends VectorLike>(this: T, a: U, b: VectorLike | number): U;
    /**
     * Divides two vectors by their components, or divides a vector by a scalar value.
     * @param a - The vector.
     * @param b - The second vector or scalar vector.
     * @returns A new vector with divided components.
     */
    static divide<T extends VectorType, U extends VectorLike>(this: T, a: U, b: VectorLike | number): U;
    /**
     * Performs an operation between a vector and either another vector or scalar value converting the vector into absolute values.
     * @param a - The first vector.
     * @param b - The second vector or scalar value.
     * @param operator - The function defining the operation to perform.
     * @returns A new vector resulting from the operation.
     */
    private static operateAbsolute;
    /**
     * Adds two vectors or a scalar value to a vector.
     * @param a - The first vector or scalar value.
     * @param b - The second vector or scalar value.
     * @returns A new vector with incremented components.
     */
    static addAbsolute<T extends VectorType, U extends VectorLike>(this: T, a: U, b: VectorLike | number): U;
    /**
     * Subtracts one vector from another or subtracts a scalar value from a vector.
     * @param a - The vector.
     * @param b - The second vector or scalar value.
     * @returns A new vector with subtracted components.
     */
    static subtractAbsolute<T extends VectorType, U extends VectorLike>(this: T, a: U, b: VectorLike | number): U;
    /**
     * Multiplies two vectors by their components, or multiplies a vector by a scalar value.
     * @param a - The vector.
     * @param b - The second vector or scalar value.
     * @returns A new vector with multiplied components.
     */
    static multiplyAbsolute<T extends VectorType, U extends VectorLike>(this: T, a: U, b: VectorLike | number): U;
    /**
     * Divides two vectors by their components, or divides a vector by a scalar value
     * @param a - The vector.
     * @param b - The second vector or scalar vector.
     * @returns A new vector with divided components.
     */
    static divideAbsolute<T extends VectorType, U extends VectorLike>(this: T, a: U, b: VectorLike | number): U;
    /**
     * Calculates the dot product of two vectors.
     * @param a - The first vector.
     * @param b - The second vector.
     * @returns A scalar value representing the degree of alignment between the input vectors.
     */
    static dotProduct<T extends VectorType, U extends VectorLike>(this: T, a: U, b: U): number;
    /**
     * Calculates the cross product of two vectors in three-dimensional space.
     * @param a - The first vector.
     * @param b - The second vector.
     * @returns A new vector perpendicular to both input vectors.
     */
    static crossProduct<T extends VectorType, U extends Vec3 | Vec4>(this: T, a: U, b: U): U;
    /**
     * Normalizes a vector, producing a new vector with the same direction but with a magnitude of 1.
     * @param vector - The vector to be normalized.
     * @returns The new normalized vector.
     */
    static normalize<T extends VectorType, U extends VectorLike>(this: T, a: U): U;
    /**
     * Creates a vector from an array of numbers.
     * @param primitive An array of numbers (usually returned by a native).
     */
    static fromArray<T extends VectorType, U extends VectorArray<T> | number[]>(this: T, primitive: U): InstanceType<T>;
    /**
     * Creates a vector from an array or object containing vector components.
     * @param primitive The object to use as a vector.
     */
    static fromObject<T extends VectorType, U extends InferVector<T> | VectorArray<T>>(this: T, primitive: U | MsgpackBuffer): InstanceType<T>;
    /**
     * Creates an array of vectors from an array of number arrays
     * @param primitives A multi-dimensional array of number arrays
     */
    static fromArrays<T extends VectorType, U extends VectorArray<T>[]>(this: T, primitives: U): InstanceType<T>[];
    /**
     * Calculates the length (magnitude) of a vector.
     * @param obj - The vector for which to calculate the length.
     * @returns The magnitude of the vector.
     */
    static Length<T extends VectorType, U extends VectorLike>(this: T, obj: U): number;
    type: unknown;
    [size]: number;
    x: number;
    y: number;
    z: number | undefined;
    w: number | undefined;
    /**
     * Constructs a new vector.
     * @param x The x-component of the vector.
     * @param y The y-component of the vector (optional, defaults to x).
     * @param z The z-component of the vector (optional).
     * @param w The w-component of the vector (optional).
     */
    constructor(x: number, y?: number, z?: number, w?: number);
    [Symbol.iterator](): Iterator<number>;
    get size(): number;
    toString(): string;
    /**
     * @see Vector.clone
     */
    clone<T extends this>(): T;
    /**
     * The product of the Euclidean magnitudes of this and another Vector.
     *
     * @param v Vector to find Euclidean magnitude between.
     * @returns Euclidean magnitude with another vector.
     */
    distanceSquared(v: VectorLike): number;
    /**
     * The distance between two Vectors.
     *
     * @param v Vector to find distance between.
     * @returns Distance between this and another vector.
     */
    distance(v: VectorLike): number;
    /**
     * @see Vector.normalize
     */
    normalize(): this;
    /**
     * @see Vector.dotProduct
     */
    dotProduct(v: this): number;
    /**
     * @see Vector.add
     */
    add(v: VectorLike | number): this;
    /**
     * @see Vector.addX
     */
    addX(x: number): this;
    /**
     * @see Vector.addY
     */
    addY(y: number): this;
    /**
     * @see Vector.subtract
     */
    subtract(v: VectorLike): this;
    /**
     * @see Vector.multiply
     */
    multiply(v: VectorLike | number): this;
    /**
     * @see Vector.divide
     */
    divide(v: VectorLike | number): this;
    /**
     * @see Vector.addAbsolute
     */
    addAbsolute(v: VectorLike): this;
    /**
     * @see Vector.subtractAbsolute
     */
    subtractAbsolute(v: VectorLike): this;
    /**
     * @see Vector.multiply
     */
    multiplyAbsolute(v: VectorLike | number): this;
    /**
     * @see Vector.divide
     */
    divideAbsolute(v: VectorLike | number): this;
    /**
     * Converts the vector to an array of its components.
     */
    toArray<T extends this>(): VectorArray<T>;
    /**
     * Replaces the components of the vector with the components of another vector object.
     * @param v - The object whose components will replace the current vector's components.
     */
    replace<T extends VectorLike>(v: T): void;
    /**
     * Calculates the length (magnitude) of a vector.
     * @returns The magnitude of the vector.
     */
    get Length(): number;
    swizzle<T extends VectorSwizzle>(components: T): T extends Vec2Swizzle ? Vector2 : T extends Vec3Swizzle ? Vector3 : Vector4;
}
/**
 * Represents a 2-dimensional vector.
 */
export declare class Vector2 extends Vector {
    readonly type = ClassTypes.Vector2;
    readonly [size]: number;
    static readonly Zero: Vector2;
    /**
     * Constructs a new 2D vector.
     * @param x The x-component of the vector.
     * @param y The y-component of the vector (optional, defaults to x).
     */
    constructor(x: number, y?: number);
    /**
     * Creates a new vector based on the provided parameters.
     * @param x The x-component of the vector.
     * @param y The y-component of the vector (optional, defaults to the value of x).
     * @returns A new vector instance.
     */
    protected static create(x: number | Vec, y?: number): Vector2;
}
/**
 * Represents a 3-dimensional vector.
 */
export declare class Vector3 extends Vector implements Vec3 {
    readonly type = ClassTypes.Vector3;
    readonly [size]: number;
    z: number;
    static readonly Zero: Vector3;
    static readonly UnitX: Vector3;
    static readonly UnitY: Vector3;
    static readonly UnitZ: Vector3;
    static readonly One: Vector3;
    static readonly Up: Vector3;
    static readonly Down: Vector3;
    static readonly Left: Vector3;
    static readonly Right: Vector3;
    static readonly ForwardRH: Vector3;
    static readonly ForwardLH: Vector3;
    static readonly BackwardRH: Vector3;
    static readonly BackwardLH: Vector3;
    static readonly Backward: Vector3;
    /**
     * Constructs a new 3D vector.
     * @param x The x-component of the vector.
     * @param y The y-component of the vector (optional, defaults to x).
     * @param z The z-component of the vector (optional, defaults to y).
     */
    constructor(x: number, y?: number, z?: number);
    /**
     * Creates a new vector based on the provided parameters.
     * @param x The x-component of the vector.
     * @param y The y-component of the vector (optional, defaults to the value of x).
     * @param z The z-component of the vector (optional, defaults to the value of y).
     * @returns A new vector instance.
     */
    protected static create(x: number | Vec, y?: number, z?: number): Vector3;
    /**
     * @see Vector.addZ
     */
    addZ(z: number): this;
    /**
     * @see Vector.crossProduct
     */
    crossProduct(v: Vec3 | Vec4): Vec3 | Vec4;
    /**
     * @returns the x and y values as Vec2
     */
    toVec2(): Vector2;
}
/**
 * Represents a 4-dimensional vector.
 */
export declare class Vector4 extends Vector {
    readonly type = ClassTypes.Vector4;
    readonly [size]: number;
    z: number;
    w: number;
    static readonly Zero: Vector4;
    /**
     * Constructs a new 4D vector.
     * @param x The x-component of the vector.
     * @param y The y-component of the vector (optional, defaults to x).
     * @param z The z-component of the vector (optional, defaults to y).
     * @param w The w-component of the vector (optional, defaults to z).
     */
    constructor(x: number, y?: number, z?: number, w?: number);
    /**
     * Creates a new vector based on the provided parameters.
     * @param x The x-component of the vector.
     * @param y The y-component of the vector (optional, defaults to the value of x).
     * @param z The z-component of the vector (optional, defaults to the value of y).
     * @param w The w-component of the vector (optional, defaults to the value of z).
     * @returns A new vector instance.
     */
    protected static create(x: number | Vec, y?: number, z?: number, w?: number): Vector4;
    /**
     * @see Vector.addZ
     */
    addZ(z: number): this;
    /**
     * @see Vector.addW
     */
    addW(w: number): this;
    /**
     * @see Vector.crossProduct
     */
    crossProduct(v: Vec3 | Vec4): Vec3 | Vec4;
    /**
     * @returns the x and y values as Vec2
     */
    toVec2(): Vector2;
    /**
     * @returns the x and y values as Vec3
     */
    toVec3(): Vector3;
}
export {};
