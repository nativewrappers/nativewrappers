var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "./ClassTypes";
const EXT_VECTOR2 = 20;
const EXT_VECTOR3 = 21;
const EXT_VECTOR4 = 22;
const size = Symbol("size");
class Vector {
  static {
    __name(this, "Vector");
  }
  static create(x, y = x, z, w) {
    if (typeof x === "object") ({ x, y, z, w } = x);
    const size2 = this instanceof Vector && this.size || [x, y, z, w].filter((arg) => arg !== void 0).length;
    switch (size2) {
      case 1:
      case 2:
        return new Vector2(x, y);
      case 3:
        return new Vector3(x, y, z);
      case 4:
        return new Vector4(x, y, z, w);
      default:
        throw new Error(`Cannot instantiate Vector with size of ${size2}.`);
    }
  }
  /**
   * Creates a deep copy of the provided vector.
   * @param obj The vector to clone.
   * @returns A new vector instance that is a copy of the provided vector.
   */
  static clone(obj) {
    return this.create(obj);
  }
  /**
   * Creates a vector from binary data in a MsgpackBuffer.
   * @param msgpackBuffer The buffer containing binary data.
   * @returns A new vector instance.
   */
  static fromBuffer({ buffer, type }) {
    if (type !== EXT_VECTOR2 && type !== EXT_VECTOR3 && type !== EXT_VECTOR4)
      throw new Error("Buffer type is not a valid Vector.");
    const arr = new Array(buffer.length / 4);
    for (let i = 0; i < arr.length; i++) arr[i] = Number(buffer.readFloatLE(i * 4).toPrecision(7));
    return this.fromArray(arr);
  }
  /**
   * Performs an operation between a vector and either another vector or scalar value.
   * @param a - The first vector.
   * @param b - The second vector or scalar value.
   * @param operator - The function defining the operation to perform.
   * @returns A new vector resulting from the operation.
   */
  static operate(a, b, operator) {
    let { x, y, z, w } = a;
    const isNumber = typeof b === "number";
    x = operator(x, isNumber ? b : b.x ?? 0);
    y = operator(y, isNumber ? b : b.y ?? 0);
    if (z !== void 0) z = operator(z, isNumber ? b : b.z ?? 0);
    if (w !== void 0) w = operator(w, isNumber ? b : b.w ?? 0);
    return this.create(x, y, z, w);
  }
  /**
   * Adds two vectors or a scalar value to a vector.
   * @param a - The first vector or scalar value.
   * @param b - The second vector or scalar value.
   * @returns A new vector with incremented components.
   */
  static add(a, b) {
    return this.operate(a, b, (x, y) => x + y);
  }
  /**
   * Adds a scalar value to the x-component of a vector.
   * @param obj - The vector.
   * @param x - The value to add to the x-component.
   * @returns A new vector with the x-component incremented.
   */
  static addX(obj, x) {
    return this.create(obj.x + x, obj.y, obj.z, obj.w);
  }
  /**
   * Adds a scalar value to the y-component of a vector.
   * @param obj - The vector.
   * @param y - The value to add to the y-component.
   * @returns A new vector with the y-component incremented.
   */
  static addY(obj, y) {
    return this.create(obj.x, obj.y + y, obj.z, obj.w);
  }
  /**
   * Adds a scalar value to the z-component of a vector.
   * @param obj - The vector.
   * @param z - The value to add to the z-component.
   * @returns A new vector with the z-component incremented.
   */
  static addZ(obj, z) {
    return this.create(obj.x, obj.y, obj.z + z, obj.w);
  }
  /**
   * Adds a scalar value to the w-component of a vector.
   * @param obj - The vector.
   * @param w - The value to add to the w-component.
   * @returns A new vector with the w-component incremented.
   */
  static addW(obj, w) {
    return this.create(obj.x, obj.y, obj.z, obj.w + w);
  }
  /**
   * Subtracts one vector from another or subtracts a scalar value from a vector.
   * @param a - The vector.
   * @param b - The second vector or scalar value.
   * @returns A new vector with subtracted components.
   */
  static subtract(a, b) {
    return this.operate(a, b, (x, y) => x - y);
  }
  /**
   * Multiplies two vectors by their components, or multiplies a vector by a scalar value.
   * @param a - The vector.
   * @param b - The second vector or scalar value.
   * @returns A new vector with multiplied components.
   */
  static multiply(a, b) {
    return this.operate(a, b, (x, y) => x * y);
  }
  /**
   * Divides two vectors by their components, or divides a vector by a scalar value.
   * @param a - The vector.
   * @param b - The second vector or scalar vector.
   * @returns A new vector with divided components.
   */
  static divide(a, b) {
    return this.operate(a, b, (x, y) => x / y);
  }
  /**
   * Performs an operation between a vector and either another vector or scalar value converting the vector into absolute values.
   * @param a - The first vector.
   * @param b - The second vector or scalar value.
   * @param operator - The function defining the operation to perform.
   * @returns A new vector resulting from the operation.
   */
  static operateAbsolute(a, b, operator) {
    let { x, y, z, w } = a;
    const isNumber = typeof b === "number";
    x = operator(Math.abs(x), isNumber ? b : Math.abs(b.x ?? 0));
    y = operator(Math.abs(y), isNumber ? b : Math.abs(b.y ?? 0));
    if (z !== void 0) z = operator(Math.abs(z), isNumber ? b : Math.abs(b.z ?? 0));
    if (w !== void 0) w = operator(Math.abs(w), isNumber ? b : Math.abs(b.w ?? 0));
    return this.create(x, y, z, w);
  }
  /**
   * Adds two vectors or a scalar value to a vector.
   * @param a - The first vector or scalar value.
   * @param b - The second vector or scalar value.
   * @returns A new vector with incremented components.
   */
  static addAbsolute(a, b) {
    return this.operateAbsolute(a, b, (x, y) => x + y);
  }
  /**
   * Subtracts one vector from another or subtracts a scalar value from a vector.
   * @param a - The vector.
   * @param b - The second vector or scalar value.
   * @returns A new vector with subtracted components.
   */
  static subtractAbsolute(a, b) {
    return this.operateAbsolute(a, b, (x, y) => x - y);
  }
  /**
   * Multiplies two vectors by their components, or multiplies a vector by a scalar value.
   * @param a - The vector.
   * @param b - The second vector or scalar value.
   * @returns A new vector with multiplied components.
   */
  static multiplyAbsolute(a, b) {
    return this.operateAbsolute(a, b, (x, y) => x * y);
  }
  /**
   * Divides two vectors by their components, or divides a vector by a scalar value
   * @param a - The vector.
   * @param b - The second vector or scalar vector.
   * @returns A new vector with divided components.
   */
  static divideAbsolute(a, b) {
    return this.operateAbsolute(a, b, (x, y) => x / y);
  }
  /**
   * Calculates the dot product of two vectors.
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns A scalar value representing the degree of alignment between the input vectors.
   */
  static dotProduct(a, b) {
    let result = 0;
    for (const key of ["x", "y", "z", "w"]) {
      const x = a[key];
      const y = b[key];
      if (!!x && !!y) result += x * y;
      else if (x || y) throw new Error("Vectors must have the same dimensions.");
    }
    return result;
  }
  /**
   * Calculates the cross product of two vectors in three-dimensional space.
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns A new vector perpendicular to both input vectors.
   */
  static crossProduct(a, b) {
    const { x: ax, y: ay, z: az, w: aw } = a;
    const { x: bx, y: by, z: bz } = b;
    if (ax === void 0 || ay === void 0 || az === void 0 || bx === void 0 || by === void 0 || bz === void 0)
      throw new Error("Vector.crossProduct requires two three-dimensional vectors.");
    return this.create(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx, aw);
  }
  /**
   * Normalizes a vector, producing a new vector with the same direction but with a magnitude of 1.
   * @param vector - The vector to be normalized.
   * @returns The new normalized vector.
   */
  static normalize(a) {
    const length = a instanceof Vector ? a.Length : this.Length(a);
    return this.divide(a, length);
  }
  /**
   * Creates a vector from an array of numbers.
   * @param primitive An array of numbers (usually returned by a native).
   */
  static fromArray(primitive) {
    const [x, y, z, w] = primitive;
    return this.create(x, y, z, w);
  }
  /**
   * Creates a vector from an array or object containing vector components.
   * @param primitive The object to use as a vector.
   */
  static fromObject(primitive) {
    if (Array.isArray(primitive)) return this.fromArray(primitive);
    if ("buffer" in primitive) return this.fromBuffer(primitive);
    const { x, y, z, w } = primitive;
    return this.create(x, y, z, w);
  }
  /**
   * Creates an array of vectors from an array of number arrays
   * @param primitives A multi-dimensional array of number arrays
   */
  static fromArrays(primitives) {
    return primitives.map(this.fromArray);
  }
  /**
   * Calculates the length (magnitude) of a vector.
   * @param obj - The vector for which to calculate the length.
   * @returns The magnitude of the vector.
   */
  static Length(obj) {
    let sum = 0;
    for (const key of ["x", "y", "z", "w"]) {
      if (key in obj) {
        const value = obj[key];
        sum += value * value;
      }
    }
    return Math.sqrt(sum);
  }
  type;
  [size] = 2;
  x = 0;
  y = 0;
  z;
  w;
  /**
   * Constructs a new vector.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to x).
   * @param z The z-component of the vector (optional).
   * @param w The w-component of the vector (optional).
   */
  constructor(x, y = x, z, w) {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number") {
        throw new TypeError(
          `${this.constructor.name} argument at index ${i} must be a number, but got ${typeof arguments[i]}`
        );
      }
    }
    this.x = x;
    this.y = y;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    if (this.z !== void 0) yield this.z;
    if (this.w !== void 0) yield this.w;
  }
  get size() {
    return this[size];
  }
  toString() {
    return `vector${this.size}(${this.toArray().join(", ")})`;
  }
  /**
   * @see Vector.clone
   */
  clone() {
    return Vector.clone(this);
  }
  /**
   * The product of the Euclidean magnitudes of this and another Vector.
   *
   * @param v Vector to find Euclidean magnitude between.
   * @returns Euclidean magnitude with another vector.
   */
  distanceSquared(v) {
    const w = this.subtract(v);
    return Vector.dotProduct(w, w);
  }
  /**
   * The distance between two Vectors.
   *
   * @param v Vector to find distance between.
   * @returns Distance between this and another vector.
   */
  distance(v) {
    return Math.sqrt(this.distanceSquared(v));
  }
  /**
   * @see Vector.normalize
   */
  normalize() {
    return Vector.normalize(this);
  }
  /**
   * @see Vector.dotProduct
   */
  dotProduct(v) {
    return Vector.dotProduct(this, v);
  }
  /**
   * @see Vector.add
   */
  add(v) {
    return Vector.add(this, v);
  }
  /**
   * @see Vector.addX
   */
  addX(x) {
    return Vector.addX(this, x);
  }
  /**
   * @see Vector.addY
   */
  addY(y) {
    return Vector.addY(this, y);
  }
  /**
   * @see Vector.subtract
   */
  subtract(v) {
    return Vector.subtract(this, v);
  }
  /**
   * @see Vector.multiply
   */
  multiply(v) {
    return Vector.multiply(this, v);
  }
  /**
   * @see Vector.divide
   */
  divide(v) {
    return Vector.divide(this, v);
  }
  /**
   * @see Vector.addAbsolute
   */
  addAbsolute(v) {
    return Vector.addAbsolute(this, v);
  }
  /**
   * @see Vector.subtractAbsolute
   */
  subtractAbsolute(v) {
    return Vector.subtractAbsolute(this, v);
  }
  /**
   * @see Vector.multiply
   */
  multiplyAbsolute(v) {
    return Vector.multiplyAbsolute(this, v);
  }
  /**
   * @see Vector.divide
   */
  divideAbsolute(v) {
    return Vector.divideAbsolute(this, v);
  }
  /**
   * Converts the vector to an array of its components.
   */
  toArray() {
    return [...this];
  }
  /**
   * Replaces the components of the vector with the components of another vector object.
   * @param v - The object whose components will replace the current vector's components.
   */
  replace(v) {
    for (const key of ["x", "y", "z", "w"]) {
      if (key in this && key in v) this[key] = v[key];
    }
  }
  /**
   * Calculates the length (magnitude) of a vector.
   * @returns The magnitude of the vector.
   */
  get Length() {
    let sum = 0;
    for (const value of this) sum += value * value;
    return Math.sqrt(sum);
  }
  swizzle(components) {
    if (!/^[xyzw]+$/.test(components)) throw new Error(`Invalid key in swizzle components (${components}).`);
    const arr = components.split("").map((char) => this[char] ?? 0);
    return Vector.create(...arr);
  }
}
class Vector2 extends Vector {
  static {
    __name(this, "Vector2");
  }
  // DO NOT USE, ONLY EXPOSED BECAUSE TS IS TRASH, THIS TYPE IS NOT GUARANTEED
  // TO EXIST, CHANGING IT WILL BREAK STUFF
  type = ClassTypes.Vector2;
  [size] = 2;
  static Zero = new Vector2(0, 0);
  /**
   * Constructs a new 2D vector.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to x).
   */
  constructor(x, y = x) {
    super(x, y);
  }
  /**
   * Creates a new vector based on the provided parameters.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to the value of x).
   * @returns A new vector instance.
   */
  static create(x, y = x) {
    if (typeof x === "object") ({ x, y } = x);
    return new this(x, y);
  }
}
class Vector3 extends Vector {
  static {
    __name(this, "Vector3");
  }
  // DO NOT USE, ONLY EXPOSED BECAUSE TS IS TRASH, THIS TYPE IS NOT GUARANTEED
  // TO EXIST, CHANGING IT WILL BREAK STUFF
  type = ClassTypes.Vector3;
  [size] = 3;
  z = 0;
  static Zero = new Vector3(0, 0, 0);
  static UnitX = new Vector3(1, 0, 0);
  static UnitY = new Vector3(0, 1, 0);
  static UnitZ = new Vector3(0, 0, 1);
  static One = new Vector3(1, 1, 1);
  static Up = new Vector3(0, 0, 1);
  static Down = new Vector3(0, 0, -1);
  static Left = new Vector3(-1, 0, 0);
  static Right = new Vector3(1, 0, 0);
  static ForwardRH = new Vector3(0, 1, 0);
  static ForwardLH = new Vector3(0, -1, 0);
  static BackwardRH = new Vector3(0, -1, 0);
  static BackwardLH = new Vector3(0, 1, 0);
  static Backward = Vector3.BackwardRH;
  /**
   * Constructs a new 3D vector.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to x).
   * @param z The z-component of the vector (optional, defaults to y).
   */
  constructor(x, y = x, z = y) {
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
  static create(x, y = x, z = y) {
    if (typeof x === "object") ({ x, y, z = y } = x);
    return new this(x, y, z);
  }
  /**
   * @see Vector.addZ
   */
  addZ(z) {
    return Vector.addZ(this, z);
  }
  /**
   * @see Vector.crossProduct
   */
  crossProduct(v) {
    return Vector.crossProduct(this, v);
  }
  /**
   * @returns the x and y values as Vec2
   */
  toVec2() {
    return new Vector2(this.x, this.y);
  }
}
class Vector4 extends Vector {
  static {
    __name(this, "Vector4");
  }
  // DO NOT USE, ONLY EXPOSED BECAUSE TS IS TRASH, THIS TYPE IS NOT GUARANTEED
  // TO EXIST, CHANGING IT WILL BREAK STUFF
  type = ClassTypes.Vector4;
  [size] = 4;
  z = 0;
  w = 0;
  static Zero = new Vector4(0, 0, 0, 0);
  /**
   * Constructs a new 4D vector.
   * @param x The x-component of the vector.
   * @param y The y-component of the vector (optional, defaults to x).
   * @param z The z-component of the vector (optional, defaults to y).
   * @param w The w-component of the vector (optional, defaults to z).
   */
  constructor(x, y = x, z = y, w = z) {
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
  static create(x, y = x, z = y, w = z) {
    if (typeof x === "object") ({ x, y, z = y, w = z } = x);
    return new this(x, y, z, w);
  }
  /**
   * @see Vector.addZ
   */
  addZ(z) {
    return Vector.addZ(this, z);
  }
  /**
   * @see Vector.addW
   */
  addW(w) {
    return Vector.addW(this, w);
  }
  /**
   * @see Vector.crossProduct
   */
  crossProduct(v) {
    return Vector.crossProduct(this, v);
  }
  /**
   * @returns the x and y values as Vec2
   */
  toVec2() {
    return new Vector2(this.x, this.y);
  }
  /**
   * @returns the x and y values as Vec3
   */
  toVec3() {
    return new Vector3(this.x, this.y, this.z);
  }
}
export {
  Vector2,
  Vector3,
  Vector4
};
