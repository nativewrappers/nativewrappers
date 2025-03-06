var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/redm/utils/Native.ts
var _N = /* @__PURE__ */ __name((hash, ...args) => {
  return Citizen.invokeNative(hash, ...args);
}, "_N");

// src/common/utils/Vector.ts
var EXT_VECTOR2 = 20;
var EXT_VECTOR3 = 21;
var EXT_VECTOR4 = 22;
var size = Symbol("size");
var Vector = class _Vector {
  static {
    __name(this, "Vector");
  }
  static create(x, y = x, z, w) {
    if (typeof x === "object") ({ x, y, z, w } = x);
    const size2 = this instanceof _Vector && this.size || [x, y, z, w].filter((arg) => arg !== void 0).length;
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
    const length = a instanceof _Vector ? a.Length : this.Length(a);
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
    return _Vector.clone(this);
  }
  /**
   * The product of the Euclidean magnitudes of this and another Vector.
   *
   * @param v Vector to find Euclidean magnitude between.
   * @returns Euclidean magnitude with another vector.
   */
  distanceSquared(v) {
    const w = this.subtract(v);
    return _Vector.dotProduct(w, w);
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
    return _Vector.normalize(this);
  }
  /**
   * @see Vector.dotProduct
   */
  dotProduct(v) {
    return _Vector.dotProduct(this, v);
  }
  /**
   * @see Vector.add
   */
  add(v) {
    return _Vector.add(this, v);
  }
  /**
   * @see Vector.addX
   */
  addX(x) {
    return _Vector.addX(this, x);
  }
  /**
   * @see Vector.addY
   */
  addY(y) {
    return _Vector.addY(this, y);
  }
  /**
   * @see Vector.subtract
   */
  subtract(v) {
    return _Vector.subtract(this, v);
  }
  /**
   * @see Vector.multiply
   */
  multiply(v) {
    return _Vector.multiply(this, v);
  }
  /**
   * @see Vector.divide
   */
  divide(v) {
    return _Vector.divide(this, v);
  }
  /**
   * @see Vector.addAbsolute
   */
  addAbsolute(v) {
    return _Vector.addAbsolute(this, v);
  }
  /**
   * @see Vector.subtractAbsolute
   */
  subtractAbsolute(v) {
    return _Vector.subtractAbsolute(this, v);
  }
  /**
   * @see Vector.multiply
   */
  multiplyAbsolute(v) {
    return _Vector.multiplyAbsolute(this, v);
  }
  /**
   * @see Vector.divide
   */
  divideAbsolute(v) {
    return _Vector.divideAbsolute(this, v);
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
    return _Vector.create(...arr);
  }
};
var Vector2 = class _Vector2 extends Vector {
  static {
    __name(this, "Vector2");
  }
  // DO NOT USE, ONLY EXPOSED BECAUSE TS IS TRASH, THIS TYPE IS NOT GUARANTEED
  // TO EXIST, CHANGING IT WILL BREAK STUFF
  type = 5 /* Vector2 */;
  [size] = 2;
  static Zero = new _Vector2(0, 0);
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
};
var Vector3 = class _Vector3 extends Vector {
  static {
    __name(this, "Vector3");
  }
  // DO NOT USE, ONLY EXPOSED BECAUSE TS IS TRASH, THIS TYPE IS NOT GUARANTEED
  // TO EXIST, CHANGING IT WILL BREAK STUFF
  type = 6 /* Vector3 */;
  [size] = 3;
  z = 0;
  static Zero = new _Vector3(0, 0, 0);
  static UnitX = new _Vector3(1, 0, 0);
  static UnitY = new _Vector3(0, 1, 0);
  static UnitZ = new _Vector3(0, 0, 1);
  static One = new _Vector3(1, 1, 1);
  static Up = new _Vector3(0, 0, 1);
  static Down = new _Vector3(0, 0, -1);
  static Left = new _Vector3(-1, 0, 0);
  static Right = new _Vector3(1, 0, 0);
  static ForwardRH = new _Vector3(0, 1, 0);
  static ForwardLH = new _Vector3(0, -1, 0);
  static BackwardRH = new _Vector3(0, -1, 0);
  static BackwardLH = new _Vector3(0, 1, 0);
  static Backward = _Vector3.BackwardRH;
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
};
var Vector4 = class _Vector4 extends Vector {
  static {
    __name(this, "Vector4");
  }
  // DO NOT USE, ONLY EXPOSED BECAUSE TS IS TRASH, THIS TYPE IS NOT GUARANTEED
  // TO EXIST, CHANGING IT WILL BREAK STUFF
  type = 7 /* Vector4 */;
  [size] = 4;
  z = 0;
  w = 0;
  static Zero = new _Vector4(0, 0, 0, 0);
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
};

// src/common/utils/PointF.ts
var PointF = class _PointF {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static {
    __name(this, "PointF");
  }
  static empty() {
    return new _PointF(0, 0, 0);
  }
};

// src/common/utils/Maths.ts
var Maths = class {
  static {
    __name(this, "Maths");
  }
  static clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

// src/common/utils/Quaternion.ts
var Quaternion = class {
  static {
    __name(this, "Quaternion");
  }
  x;
  y;
  z;
  w;
  constructor(valueXOrVector, yOrW, z, w) {
    if (valueXOrVector instanceof Vector3) {
      this.x = valueXOrVector.x;
      this.y = valueXOrVector.y;
      this.z = valueXOrVector.z;
      this.w = yOrW ?? 0;
    } else if (yOrW === void 0) {
      this.x = valueXOrVector;
      this.y = valueXOrVector;
      this.z = valueXOrVector;
      this.w = valueXOrVector;
    } else {
      this.x = valueXOrVector;
      this.y = yOrW;
      this.z = z ?? 0;
      this.w = w ?? 0;
    }
  }
};

// src/common/utils/Color.ts
var Color = class _Color {
  static {
    __name(this, "Color");
  }
  static Transparent = new _Color(0, 0, 0, 0);
  static Black = new _Color(0, 0, 0);
  static White = new _Color(255, 255, 255);
  static WhiteSmoke = new _Color(245, 245, 245);
  static fromArgb(a, r, g, b) {
    return new _Color(r, g, b, a);
  }
  static fromRgb(r, g, b) {
    return new _Color(r, g, b);
  }
  static fromArray(primitive) {
    return new _Color(primitive[0], primitive[1], primitive[2], 255);
  }
  a;
  r;
  g;
  b;
  constructor(r, g, b, a = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
};

// src/common/utils/cleanPlayerName.ts
var cleanPlayerName = /* @__PURE__ */ __name((original) => {
  let displayName = original.substring(0, 75).replace(
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
    /[\u0000-\u001F\u007F-\u009F\u200B-\u200D\uFEFF\u200E\uA9C1-\uA9C5\u239B-\u23AD]/g,
    ""
  ).replace(
    /~(HUD_\S+|HC_\S+|[a-z]|[a1]_\d+|bold|italic|ws|wanted_star|nrt|EX_R\*|BLIP_\S+|ACCEPT|CANCEL|PAD_\S+|INPUT_\S+|INPUTGROUP_\S+)~/gi,
    ""
  ).replace(/\^\d/gi, "").replace(/\p{Mark}{2,}/gu, "").replace(/\s+/g, " ").trim();
  if (!displayName.length) displayName = "empty name";
  return displayName;
}, "cleanPlayerName");

// src/common/utils/enumValues.ts
function* enumValues(enumObj) {
  let isStringEnum = true;
  for (const property in enumObj) {
    if (typeof enumObj[property] === "number") {
      isStringEnum = false;
      break;
    }
  }
  for (const property in enumObj) {
    if (isStringEnum || typeof enumObj[property] === "number") {
      yield enumObj[property];
    }
  }
}
__name(enumValues, "enumValues");

// src/common/utils/getStringFromUInt8Array.ts
var getStringFromUInt8Array = /* @__PURE__ */ __name((buffer, start, end) => String.fromCharCode(...buffer.slice(start, end)).replace(/\u0000/g, ""), "getStringFromUInt8Array");

// src/common/utils/getUInt32FromUint8Array.ts
var getUInt32FromUint8Array = /* @__PURE__ */ __name((buffer, start, end) => new Uint32Array(buffer.slice(start, end).buffer)[0], "getUInt32FromUint8Array");

// src/common/utils/index.ts
var Delay = /* @__PURE__ */ __name((milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)), "Delay");

// src/redm/entities/BaseEntity.ts
var BaseEntity = class {
  static {
    __name(this, "BaseEntity");
  }
  handle;
  constructor(entHandle) {
    this.handle = entHandle;
  }
  /**
    * Replaces the current handle for the entity used on, this hsould be used sparringly, mainly
    * in situations where you're going to reuse an entity over and over and don't want to make a
    * new entity every time.
    *
    *  **WARNING**: This does no checks, if you provide it an invalid entity it will use it
    *
    * ```ts
    * const REUSABLE_ENTITY = new Entity(entityHandle);
    *
    * onNet("entityHandler", (entNetId: number) => {
    *  // if no net entity we should ignore
    *  if (!NetworkDoesEntityExistWithNetworkId(entNetId)) return;
    *
    *  // Reuse our entity so we don't have to initialize a new one
    *  REUSABLE_ENTITY.replaceHandle(NetworkGetEntityFromNetworkId(entNetId));
    *  // Do something with REUSABLE_ENTITY entity
    * })
    ```
    */
  replaceHandle(newHandle) {
    this.handle = newHandle;
  }
  /**
   * @returns the network for the specified entity, this doesn't check if the entity is networked, you should use {@link BaseEntity.IsNetworked}
   */
  get NetworkId() {
    return NetworkGetNetworkIdFromEntity(this.Handle);
  }
  /**
   * @returns `true` if the current entity is networked, false otherwise
   */
  get IsNetworked() {
    return NetworkGetEntityIsNetworked(this.Handle);
  }
  /**
   * @returns Returns true if the entity handle is not 0 and exists in the game engine
   */
  get Exists() {
    return this.handle !== 0 && DoesEntityExist(this.Handle);
  }
  /**
   * @returns The entitys current handle.
   */
  get Handle() {
    return this.handle;
  }
  /**
   * @param amount the health to set the health to, setting to `0` will kill the entity, if using on a {@link Ped} you should check the MaxHealth before setting.
   */
  set Health(amount) {
    SetEntityHealth(this.Handle, amount, 0);
  }
  /**
   * @returns the amount of health the current {@link BaseEntity} has
   */
  get Health() {
    return GetEntityHealth(this.Handle);
  }
  /**
   * @returns the heading of the current {@link BaseEntity}
   */
  get Heading() {
    return GetEntityHeading(this.Handle);
  }
  /**
   * @param heading sets the entitys heading to the specified heading, this can be in the range of 0..360
   */
  set Heading(heading) {
    SetEntityHeading(this.Handle, heading);
  }
  /**
   * @returns the position of the current Entity
   */
  get Position() {
    return Vector3.fromArray(GetEntityCoords(this.handle, true, true));
  }
  /**
   * You should (almost) always try to load the collisions before setting the entitys position if going a long distance.
   * @param pos sets the position for the current ped
   */
  set Position(pos) {
    SetEntityCoords(this.handle, pos.x, pos.y, pos.z, false, false, false, false);
  }
};

// src/redm/entities/Entity.ts
var Entity = class extends BaseEntity {
  static {
    __name(this, "Entity");
  }
  // NOTE: There is nothing stopping you from using creating an invalid entity, you should do your own due-diligence
  constructor(handle) {
    super(handle);
  }
  addTrackingTrails() {
    _N("0x1AD922AB5038DEF3", this.Handle);
  }
  get EntityType() {
    return GetEntityType(this.Handle);
  }
  /**
   * @param direction - the direction to apply the force towards
   * @param offset - the offset to apply the force to
   * @param forceType - the force type to apply
   * @param boneIndex - the boneIndex to apply the force to, or 0
   * @param isDirectional - whether the direction is relational?
   * @param ignoreUpVec - ?
   * @param isForceRel - whether to multiply the force by the object mass & acceleration
   */
  applyForce(direction, offset, forceType = 0 /* MinForce */, boneIndex = 0, isDirectional = false, ignoreUpVec = true, isForceRel = true) {
    const d = direction;
    const o = offset;
    ApplyForceToEntity(
      this.Handle,
      forceType,
      d.x,
      d.y,
      d.z,
      o.x,
      o.y,
      o.z,
      boneIndex,
      isDirectional,
      ignoreUpVec,
      isForceRel,
      false,
      true
    );
  }
  /**
   * @param direction - the direction to apply the force towards
   * @param forceType - the force type to use
   * @param isDirectional - whether the direction is local?
   * @param isForceRel - whether to multiply the force by the object mass & acceleration
   */
  applyForceToCenter(direction, forceType = 0 /* MinForce */, isDirectional = false, isForceRel = true) {
    const d = direction;
    ApplyForceToEntityCenterOfMass(this.Handle, forceType, d.x, d.y, d.z, false, isDirectional, isForceRel, false);
  }
  /**
   * @param tgtEntity - the entity to attach to the {@Entity}
   * @param pos - the position offset
   * @param rot - the rotation to apply to the entity
   * @param boneIndex - the bone to attach the entity to, or 0 for the center of the entity
   * @param enableCollision - whether the entity should have collision enabled
   * @param useSoftPinning - when false the entity will not detach from the {@Entity}
   * @param vertexIndex -  ?
   * @param fixedRot - ?
   * @throws Error if tgtEntity and {@Entity} are the same entity
   */
  attachTo(tgtEntity, pos, rot, boneIndex = 0, enableCollision = true, useSoftPinning = false, vertexIndex = 0, fixedRot = true) {
    if (tgtEntity.Handle === this.Handle) {
      throw new Error("tgtEntity had the same handle as the current entity, attaching an entity to itself will crash");
    }
    const p = pos;
    const r = rot;
    AttachEntityToEntity(
      tgtEntity.Handle,
      this.Handle,
      boneIndex,
      p.x,
      p.y,
      p.z,
      r.x,
      r.y,
      r.z,
      false,
      useSoftPinning,
      enableCollision,
      this.EntityType === 1 /* Ped */,
      vertexIndex,
      fixedRot,
      false,
      false
    );
  }
};

// src/redm/Attribute.ts
var CoreAttribute = class {
  static {
    __name(this, "CoreAttribute");
  }
  handle;
  attribute;
  constructor(ped, attribute) {
    this.handle = ped.Handle;
    this.attribute = attribute;
  }
  /**
   * This doesn't seem to actually do anything
   * @todo maybe remove unless theres a valid use case
   * @param amount
   * @param makeSound
   */
  enableOverpower(amount, makeSound = false) {
    _N("0x4AF5A4C7B9157D14", this.handle, this.attribute, amount, makeSound);
  }
  get Overpowered() {
    return _N("0x200373A8DF081F22", this.attribute, Citizen.resultAsInteger());
  }
  /**
   * @returns the amount of overpower time left in seconds
   */
  get OverpoweredTimeLeft() {
    return _N("0xB429F58803D285B1", this.handle, this.attribute, Citizen.resultAsInteger());
  }
  /**
   * Returns how full the core is
   */
  get CoreValue() {
    return GetAttributeCoreValue(this.handle, this.attribute);
  }
  set CoreValue(amount) {
    _N("0xC6258F41D86676E0", this.handle, this.attribute, amount);
  }
};
var PedAttribute = class {
  static {
    __name(this, "PedAttribute");
  }
  handle;
  attribute;
  constructor(ped, attribute) {
    this.handle = ped.Handle;
    this.attribute = attribute;
  }
  /**
   *
   * @param amount the amount of points to add to the attribute
   */
  addPoints(amount) {
    AddAttributePoints(this.handle, this.attribute, amount);
  }
  /**
   * Disables the overpower state on this attribute, see {@link enableOverpower} on how to enable
   */
  disableOverpower() {
    DisableAttributeOverpower(this.handle, this.attribute);
  }
  /**
   *
   * @param amount the amount to overpower this attribute by
   * @param makeSound if activating the overpower should play sound
   */
  enableOverpower(amount, makeSound = false) {
    _N("0xF6A7C08DF2E28B28", this.handle, this.attribute, amount, makeSound);
  }
  /**
   * Gets the amount of attribute points the ped has
   */
  get Points() {
    return GetAttributePoints(this.handle, this.attribute);
  }
  set Points(amount) {
    SetAttributePoints(this.handle, this.attribute, amount);
  }
  get Rank() {
    return GetAttributeRank(this.handle, this.attribute);
  }
  set BaseRank(amount) {
    SetAttributeBaseRank(this.handle, this.attribute, amount);
  }
  get BaseRank() {
    return GetAttributeBaseRank(this.handle, this.attribute);
  }
  set BonusRank(amount) {
    SetAttributeBonusRank(this.handle, this.attribute, amount);
  }
  get BonusRank() {
    return GetAttributeBonusRank(this.handle, this.attribute);
  }
  get MaxRank() {
    return _N("0x704674A0535A471D", this.attribute, Citizen.resultAsInteger());
  }
  get Overpowered() {
    return _N("0x103C2F885ABEB00B", this.attribute, Citizen.resultAsInteger());
  }
};
var Attributes = class {
  static {
    __name(this, "Attributes");
  }
  pedAttributes = [];
  coreAttributes = [];
  constructor(ped) {
    for (let i = 0; i <= 21; i++) {
      this.pedAttributes[i] = new PedAttribute(ped, i);
    }
    for (let i = 0; i <= 2; i++) {
      this.coreAttributes[i] = new CoreAttribute(ped, i);
    }
  }
  getCore(attribute) {
    if (attribute > 2) throw new RangeError("The max enum for CoreAttribute is 2");
    if (attribute < 0) throw new RangeError("The minimum enum for CoreAttribute is 0");
    return this.coreAttributes[attribute];
  }
  get(attribute) {
    if (attribute > 22) throw new RangeError("The max enum for PedAttribute is 22");
    if (attribute < 0) throw new RangeError("The minimum enum for PedAttribute is 0");
    return this.pedAttributes[attribute];
  }
  set CoreIcon(status) {
    if (status > 15) throw new RangeError("The max enum for StatusEffect is 15");
    if (status < 0) throw new RangeError("The minimum enum for StatusEffect is 0");
    _N("0xA4D3A1C008F250DF", status);
  }
  set PeriodicIcon(status) {
    if (status > 15) throw new RangeError("The max enum for StatusEffect is 15!");
    if (status < 0) throw new RangeError("The minimum enum for StatusEffect is 0");
    _N("0xFB6E111908502871", status);
  }
};

// src/redm/entities/Vehicle.ts
var Vehicle = class extends BaseEntity {
  static {
    __name(this, "Vehicle");
  }
  constructor(handle) {
    super(handle);
  }
  /**
   *
   * @param seatIndex the seat index to check
   * @returns true of the specified seat is free on the mount
   */
  isSeatFree(seatIndex) {
    return _N("0xAAB0FE202E9FC9F0", this.Handle, seatIndex, Citizen.resultAsInteger());
  }
};

// src/redm/entities/Ped.ts
var Ped = class _Ped extends BaseEntity {
  static {
    __name(this, "Ped");
  }
  attributes;
  constructor(handle) {
    super(handle);
  }
  /**
   * Blocks scenarios inbetween the specified vectors
   * @todo Move to Game
   * @param vec1
   * @param vec2
   * @param blockingFlags you can find blocking flags [here](https://github.com/Halen84/RDR3-Native-Flags-And-Enums/blob/main/ADD_SCENARIO_BLOCKING_AREA/README.md)
   * @returns the scenarioId that can be used in {@link removeScenarioBlock} to unblock
   */
  static blockScenariosInArea(vec1, vec2, blockingFlags) {
    return AddScenarioBlockingArea(
      vec1.x,
      vec1.y,
      vec1.z,
      vec2.x,
      vec2.y,
      vec2.z,
      true,
      blockingFlags
    );
  }
  /**
   * Removes the blocking of scenarios in the specified area
   * @param scenarioId the number returned from {@link blockScenariosInArea}
   */
  static removeScenarioBlock(scenarioId) {
    RemoveScenarioBlockingArea(scenarioId, false);
  }
  /**
   * While this increases the peds max health, if used on a player it wont increase the max core value on the hud
   */
  set MaxHealth(amount) {
    SetPedMaxHealth(this.Handle, amount);
  }
  /**
   * @returns the maximum health of the ped
   */
  get MaxHealth() {
    return GetPedMaxHealth(this.Handle);
  }
  /**
   * @returns the {@link Attributes} for the current ped
   */
  get Attributes() {
    if (this.attributes) return this.attributes;
    return this.attributes = new Attributes(this);
  }
  get InVehicle() {
    return IsPedInAnyVehicle(this.Handle, true);
  }
  get IsInjured() {
    return IsPedInjured(this.Handle);
  }
  get IsFatallyInjured() {
    return IsPedFatallyInjured(this.Handle);
  }
  get IsPlayer() {
    return IsPedAPlayer(this.Handle);
  }
  get IsShooting() {
    return IsPedShooting(this.Handle);
  }
  get Accuracy() {
    return GetPedAccuracy(this.Handle);
  }
  set Accuracy(accuracy) {
    SetPedAccuracy(this.Handle, accuracy);
  }
  get CanBeKnockedOffVehicle() {
    return CanKnockPedOffVehicle(this.Handle);
  }
  get IsMale() {
    return IsPedMale(this.Handle);
  }
  get IsHuman() {
    return IsPedHuman(this.Handle);
  }
  get IsOnTopOfVehicle() {
    return IsPedOnVehicle(this.Handle, false);
  }
  get Vehicle() {
    const vehicle = GetVehiclePedIsIn(this.Handle, false);
    if (vehicle === 0) {
      return null;
    }
    return new Vehicle(vehicle);
  }
  /**
   * @returns the last mount that this ped was on, or null if it doesn't exist
   */
  get Mount() {
    const pedId = _N("0x4C8B59171957BCF7", this.Handle, Citizen.resultAsInteger());
    return pedId ? new _Ped(pedId) : null;
  }
  /**
   * returns the horse that this ped is leading
   */
  get LeadingHorse() {
    const pedId = _N("0x693126B5D0457D0D", this.Handle, Citizen.resultAsInteger());
    return pedId ? new _Ped(pedId) : null;
  }
  /**
   * returns the owner of the current animal
   */
  get Owner() {
    const pedId = _N("0xF103823FFE72BB49", this.Handle, Citizen.resultAsInteger());
    return pedId ? new _Ped(pedId) : null;
  }
  get TamingState() {
    return _N("0x454AD4DA6C41B5BD", this.Handle, Citizen.resultAsInteger());
  }
  get IsInteractingWithAnimal() {
    return _N("0x7FC84E85D98F063D", this.Handle, Citizen.resultAsInteger());
  }
  get IsSittingInAnyVehicle() {
    return IsPedSittingInAnyVehicle(this.Handle);
  }
  get IsPlantingBomb() {
    return IsPedPlantingBomb(this.Handle);
  }
  get IsInAnyBoat() {
    return IsPedInAnyBoat(this.Handle);
  }
  get IsInAnyHeli() {
    return IsPedInAnyHeli(this.Handle);
  }
  get IsInAnyPlane() {
    return IsPedInAnyPlane(this.Handle);
  }
  get IsInFlyingVehicle() {
    return IsPedInFlyingVehicle(this.Handle);
  }
  get IsFalling() {
    return IsPedFalling(this.Handle);
  }
  get IsSliding() {
    return _N("0xD6740E14E4CEFC0B", this.Handle, Citizen.resultAsInteger());
  }
  get IsJumping() {
    return IsPedJumping(this.Handle);
  }
  get IsClimbing() {
    return IsPedClimbing(this.Handle);
  }
  get IsClimbingLadder() {
    return _N("0x59643424B68D52B5", this.Handle, Citizen.resultAsInteger());
  }
  get IsVaulting() {
    return IsPedVaulting(this.Handle);
  }
  get IsDiving() {
    return IsPedDiving(this.Handle);
  }
  get IsOpeningADoor() {
    return IsPedOpeningADoor(this.Handle);
  }
  set SeeingRange(value) {
    SetPedSeeingRange(this.Handle, value);
  }
  set HearingRange(value) {
    SetPedHearingRange(this.Handle, value);
  }
  get IsStealthed() {
    return GetPedStealthMovement(this.Handle);
  }
  get IsJacking() {
    return IsPedJacking(this.Handle);
  }
  get IsStunned() {
    return IsPedBeingStunned(this.Handle, 0);
  }
  get IsBeingJacked() {
    return IsPedBeingJacked(this.Handle);
  }
  get IsInCombatRoll() {
    return _N("0xC48A9EB0D499B3E5", this.Handle, Citizen.resultAsInteger());
  }
  get CrouchMovement() {
    return _N("0xD5FE956C70FF370B", this.Handle, Citizen.resultAsInteger());
  }
  /**
   * returns true if {@link DamageCleanliness} was ever lower than {@link eDamageCleanliness.Good}
   */
  get IsDamaged() {
    return _N("0x6CFC373008A1EDAF", this.Handle, Citizen.resultAsInteger());
  }
  set IsDamaged(damaged) {
    _N("0xDACE03C65C6666DB", this.Handle, damaged);
  }
  get DamageCleanliness() {
    return _N("0x88EFFED5FE8B0B4A", this.Handle, Citizen.resultAsInteger());
  }
  set DamageCleanliness(cleanliness) {
    _N("0x7528720101A807A5", this.Handle, cleanliness);
  }
  set DefenseModifier(amount) {
    _N("0x9B6808EC46BE849B", this.Handle, amount);
  }
  set CanBeTargeted(toggle) {
    SetPedCanBeTargetted(this.Handle, toggle);
  }
  // TODO: Team class wrapper
  // TODO: Bone wrapper `GET_PED_LAST_DAMAGE_BONE`
  /**
   * returns the ped who jacked this ped
   */
  getJacker() {
    return new _Ped(GetPedsJacker(this.Handle));
  }
  setCrouchMovement(state, immediately = false) {
    _N("0x7DE9692C6F64CFE8", this.Handle, state, 0, immediately);
  }
  canBeTargetedByPlayer(player, toggle) {
    SetPedCanBeTargettedByPlayer(this.Handle, player.Handle, toggle);
  }
  clearLastBoneDamage() {
    ClearPedLastDamageBone(this.Handle);
  }
  set OwnsAnimal(animal) {
    _N("0x931B241409216C1F", this.Handle, animal.Handle, false);
  }
  isInteractionPossible(animal) {
    return _N("0xD543D3A8FDE4F185", this.Handle, animal.Handle, Citizen.resultAsInteger());
  }
  isOnVehicle(vehicle) {
    return IsPedOnSpecificVehicle(this.Handle, vehicle.Handle);
  }
  isSittingInVehicle(vehicle) {
    return IsPedSittingInVehicle(this.Handle, vehicle.Handle);
  }
  warpOutOfVehicle() {
    _N("0xE0B61ED8BB37712F", this.Handle);
  }
  /**
   * puts the ped onto the specified mount
   * @param targetPed the horse to put the ped on
   * @param seatIndex the seat index to put the ped on
   */
  setOntoMount(targetPed, seatIndex) {
    _N("0x028F76B6E78246EB", this.Handle, targetPed.Handle, seatIndex, true);
  }
  removeFromMount() {
    _N("0x5337B721C51883A9", this.Handle, true, true);
  }
  /**
   * Sets the ped into the specified vehicle
   * @param vehicle the vehicle to put the ped into
   * @param seatIndex the seat index to put the ped into
   */
  setIntoVehicle(vehicle, seatIndex) {
    SetPedIntoVehicle(this.Handle, vehicle.Handle, seatIndex);
  }
  /**
   * kills the ped and optionally sets the killer
   * @param killer the entity that killed the ped
   */
  killPed(killer) {
    SetEntityHealth(this.Handle, 0, killer ? killer.Handle : 0);
  }
  damage(amount, boneId = 0, killer) {
    ApplyDamageToPed(this.Handle, amount, 0, boneId, killer ? killer.Handle : 0);
  }
  /**
   * this returns a different type then the getter so we can't use set, maybe ts will fix soon (tm)
   * @param state how hard it will be to knock a ped off their vehicle
   */
  setCanBeKnockedOffVehicle(state) {
    SetPedCanBeKnockedOffVehicle(this.Handle, state);
  }
  /**
   * Removes the specified ped if its not a player entity
   */
  delete() {
    SetEntityAsMissionEntity(this.Handle, true, true);
    DeletePed(this.Handle);
  }
  /**
   * creates a clone of the ped
   * @param network if the ped should be a networked entity
   * @param bScriptHostPed whether to register the ped as pinned to the script host in the R* network model.
   * @param copyHeadBlend whether to copy the peds head blend
   * @returns the cloned ped
   */
  clone(network, bScriptHostPed, copyHeadBlend) {
    return new _Ped(ClonePed(this.Handle, network, bScriptHostPed, copyHeadBlend));
  }
  /**
   * clones the ped onto the target ped
   * @param targetPed the ped to clone onto
   */
  cloneTo(targetPed) {
    ClonePedToTarget(this.Handle, targetPed.Handle);
  }
  /**
   * @param amount - the amount of armour to add to the ped
   */
  addArmour(amount) {
    AddArmourToPed(this.Handle, amount);
  }
  applyDamage(damageAmount, boneId = 0, pedKiller = null) {
    ApplyDamageToPed(this.Handle, damageAmount, 0, boneId, pedKiller ? pedKiller.Handle : 0);
  }
  /**
   * @param damagePack - the damage decal to apply see [here](https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua) for more documentation
   * @param damage - the damage to apply
   * @param mult - the multiplier?
   */
  applyDamagePack(damagePack, damage, mult) {
    ApplyPedDamagePack(this.Handle, damagePack, damage, mult);
  }
  get CurrentVehicle() {
    const veh = GetVehiclePedIsIn(this.Handle, false);
    if (veh === 0) return null;
    return new Vehicle(veh);
  }
  // No documentation
  // applyBloodSpecific() {
  // 	ApplyPedBloodSpecific
  // }
};

// src/redm/GameConstants.ts
var GameConstants = class _GameConstants {
  static {
    __name(this, "GameConstants");
  }
  // the actual player object that will get initialized on the first call to the `get Player()`
  static player = null;
  // The player id of the local client
  static PlayerId = PlayerId();
  // The server id of the local client.
  static ServerId = GetPlayerServerId(_GameConstants.PlayerId);
  // The player class of the local object
  static get Player() {
    if (_GameConstants.player === null) {
      _GameConstants.player = new Player(_GameConstants.PlayerId);
    }
    return _GameConstants.player;
  }
};

// src/redm/entities/Player.ts
var handleUpgrade = /* @__PURE__ */ __name((name, amount) => {
  const b1 = new ArrayBuffer(8 * 24);
  const a2 = new DataView(b1);
  const b2 = new ArrayBuffer(8 * 12);
  const a3 = new DataView(b2);
  _N("0xCB5D11F9508A928D", 1, a2, a3, GetHashKey(name), 1084182731, amount, 752097756);
}, "handleUpgrade");
var Player = class _Player {
  static {
    __name(this, "Player");
  }
  handle;
  static fromPedHandle(handle) {
    return new _Player(NetworkGetPlayerIndexFromPed(handle));
  }
  /**
   * Gets the player from the specified {@param serverId}
   * @returns the player object, or null if the player didn't exist
   */
  static fromServerId(serverId) {
    if (serverId === GameConstants.ServerId) {
      return GameConstants.Player;
    }
    const player = GetPlayerFromServerId(serverId);
    if (player === -1) return null;
    return new _Player(player);
  }
  /**
   * @param handle the player handle
   */
  constructor(handle) {
    this.handle = handle;
  }
  get Handle() {
    return this.handle;
  }
  /**
   * Adds the amount of stamina player has on the hud
   * @param amount the amount of upgrade to give 6 is half the bar while 12 is the full bar
   */
  addStaminaUpgrade(amount) {
    handleUpgrade("UPGRADE_STAMINA_TANK_1", amount);
  }
  addHealthUpgrade(amount) {
    handleUpgrade("UPGRADE_HEALTH_TANK_1", amount);
  }
  addDeadeyeUpgrade(amount) {
    handleUpgrade("UPGRADE_DEADEYE_TANK_1", amount);
  }
};

// src/redm/enums/Attributes.ts
var ePedAttribute = /* @__PURE__ */ ((ePedAttribute2) => {
  ePedAttribute2[ePedAttribute2["Health"] = 0] = "Health";
  ePedAttribute2[ePedAttribute2["Stamina"] = 1] = "Stamina";
  ePedAttribute2[ePedAttribute2["SpecialAbility"] = 2] = "SpecialAbility";
  ePedAttribute2[ePedAttribute2["Courage"] = 3] = "Courage";
  ePedAttribute2[ePedAttribute2["Agility"] = 4] = "Agility";
  ePedAttribute2[ePedAttribute2["Speed"] = 5] = "Speed";
  ePedAttribute2[ePedAttribute2["Acceleration"] = 6] = "Acceleration";
  ePedAttribute2[ePedAttribute2["Bonding"] = 7] = "Bonding";
  ePedAttribute2[ePedAttribute2["Hunger"] = 8] = "Hunger";
  ePedAttribute2[ePedAttribute2["Fatigued"] = 9] = "Fatigued";
  ePedAttribute2[ePedAttribute2["Inebriated"] = 10] = "Inebriated";
  ePedAttribute2[ePedAttribute2["Poisoned"] = 11] = "Poisoned";
  ePedAttribute2[ePedAttribute2["BodyHeat"] = 12] = "BodyHeat";
  ePedAttribute2[ePedAttribute2["BodyWeight"] = 13] = "BodyWeight";
  ePedAttribute2[ePedAttribute2["Overfed"] = 14] = "Overfed";
  ePedAttribute2[ePedAttribute2["Sickness"] = 15] = "Sickness";
  ePedAttribute2[ePedAttribute2["Dirtiness"] = 16] = "Dirtiness";
  ePedAttribute2[ePedAttribute2["DirtinessHat"] = 17] = "DirtinessHat";
  ePedAttribute2[ePedAttribute2["Strength"] = 18] = "Strength";
  ePedAttribute2[ePedAttribute2["Grit"] = 19] = "Grit";
  ePedAttribute2[ePedAttribute2["Instinct"] = 20] = "Instinct";
  ePedAttribute2[ePedAttribute2["Unruliness"] = 21] = "Unruliness";
  ePedAttribute2[ePedAttribute2["DirtinessSkin"] = 22] = "DirtinessSkin";
  return ePedAttribute2;
})(ePedAttribute || {});
var eAttributeCore = /* @__PURE__ */ ((eAttributeCore2) => {
  eAttributeCore2[eAttributeCore2["Health"] = 0] = "Health";
  eAttributeCore2[eAttributeCore2["Stamina"] = 1] = "Stamina";
  eAttributeCore2[eAttributeCore2["Deadeye"] = 2] = "Deadeye";
  return eAttributeCore2;
})(eAttributeCore || {});
var eHudStatusEffect = /* @__PURE__ */ ((eHudStatusEffect2) => {
  eHudStatusEffect2[eHudStatusEffect2["None"] = 0] = "None";
  eHudStatusEffect2[eHudStatusEffect2["Cold"] = 1] = "Cold";
  eHudStatusEffect2[eHudStatusEffect2["Hot"] = 2] = "Hot";
  eHudStatusEffect2[eHudStatusEffect2["Overfed"] = 3] = "Overfed";
  eHudStatusEffect2[eHudStatusEffect2["Dirty"] = 4] = "Dirty";
  eHudStatusEffect2[eHudStatusEffect2["SnakeVenom"] = 5] = "SnakeVenom";
  eHudStatusEffect2[eHudStatusEffect2["ArrowWounded"] = 6] = "ArrowWounded";
  eHudStatusEffect2[eHudStatusEffect2["ArrowDrained"] = 7] = "ArrowDrained";
  eHudStatusEffect2[eHudStatusEffect2["ArrowDisoriented"] = 8] = "ArrowDisoriented";
  eHudStatusEffect2[eHudStatusEffect2["ArrowTracked"] = 9] = "ArrowTracked";
  eHudStatusEffect2[eHudStatusEffect2["ArrowConfusion"] = 10] = "ArrowConfusion";
  eHudStatusEffect2[eHudStatusEffect2["Underweight"] = 11] = "Underweight";
  eHudStatusEffect2[eHudStatusEffect2["Overweight"] = 12] = "Overweight";
  eHudStatusEffect2[eHudStatusEffect2["Sick1"] = 13] = "Sick1";
  eHudStatusEffect2[eHudStatusEffect2["Sick2"] = 14] = "Sick2";
  eHudStatusEffect2[eHudStatusEffect2["PredatorInvulnerable"] = 15] = "PredatorInvulnerable";
  return eHudStatusEffect2;
})(eHudStatusEffect || {});

// src/redm/enums/Ped.ts
var KnockOffVehicle = /* @__PURE__ */ ((KnockOffVehicle2) => {
  KnockOffVehicle2[KnockOffVehicle2["Default"] = 0] = "Default";
  KnockOffVehicle2[KnockOffVehicle2["Never"] = 1] = "Never";
  KnockOffVehicle2[KnockOffVehicle2["Easy"] = 2] = "Easy";
  KnockOffVehicle2[KnockOffVehicle2["Hard"] = 3] = "Hard";
  return KnockOffVehicle2;
})(KnockOffVehicle || {});
var TamingState = /* @__PURE__ */ ((TamingState2) => {
  TamingState2[TamingState2["Invalid"] = 0] = "Invalid";
  TamingState2[TamingState2["Inactive"] = 1] = "Inactive";
  TamingState2[TamingState2["TargetDetected"] = 2] = "TargetDetected";
  TamingState2[TamingState2["CalledOut"] = 3] = "CalledOut";
  TamingState2[TamingState2["Mountable"] = 4] = "Mountable";
  TamingState2[TamingState2["BeingPatted"] = 5] = "BeingPatted";
  TamingState2[TamingState2["BreakingActive"] = 6] = "BreakingActive";
  TamingState2[TamingState2["Spooked"] = 7] = "Spooked";
  TamingState2[TamingState2["Retreating"] = 8] = "Retreating";
  TamingState2[TamingState2["Fleeing"] = 9] = "Fleeing";
  return TamingState2;
})(TamingState || {});
var eDamageCleanliness = /* @__PURE__ */ ((eDamageCleanliness2) => {
  eDamageCleanliness2[eDamageCleanliness2["Poor"] = 0] = "Poor";
  eDamageCleanliness2[eDamageCleanliness2["Good"] = 1] = "Good";
  eDamageCleanliness2[eDamageCleanliness2["Perfect"] = 2] = "Perfect";
  return eDamageCleanliness2;
})(eDamageCleanliness || {});

// src/redm/enums/Relationship.ts
var Relationship = /* @__PURE__ */ ((Relationship2) => {
  Relationship2[Relationship2["Hate"] = 5] = "Hate";
  Relationship2[Relationship2["Dislike"] = 4] = "Dislike";
  Relationship2[Relationship2["Neutral"] = 3] = "Neutral";
  Relationship2[Relationship2["Like"] = 2] = "Like";
  Relationship2[Relationship2["Respect"] = 1] = "Respect";
  Relationship2[Relationship2["Companion"] = 0] = "Companion";
  Relationship2[Relationship2["Pedestrians"] = 255] = "Pedestrians";
  return Relationship2;
})(Relationship || {});

// src/redm/enums/VehicleSeat.ts
var VehicleSeat = /* @__PURE__ */ ((VehicleSeat2) => {
  VehicleSeat2[VehicleSeat2["AnyPassenger"] = -2] = "AnyPassenger";
  VehicleSeat2[VehicleSeat2["Driver"] = -1] = "Driver";
  VehicleSeat2[VehicleSeat2["FrontRight"] = 0] = "FrontRight";
  VehicleSeat2[VehicleSeat2["BackLeft"] = 1] = "BackLeft";
  VehicleSeat2[VehicleSeat2["BackRight"] = 2] = "BackRight";
  VehicleSeat2[VehicleSeat2["ExtraLeft1"] = 3] = "ExtraLeft1";
  VehicleSeat2[VehicleSeat2["ExtraRight1"] = 4] = "ExtraRight1";
  VehicleSeat2[VehicleSeat2["ExtraLeft2"] = 5] = "ExtraLeft2";
  VehicleSeat2[VehicleSeat2["ExtraRight2"] = 6] = "ExtraRight2";
  VehicleSeat2[VehicleSeat2["ExtraLeft3"] = 7] = "ExtraLeft3";
  VehicleSeat2[VehicleSeat2["ExtraRight3"] = 8] = "ExtraRight3";
  return VehicleSeat2;
})(VehicleSeat || {});

// src/redm/enums/Keys.ts
var KeyHash = /* @__PURE__ */ ((KeyHash2) => {
  KeyHash2[KeyHash2["AccurateAim"] = 1080745902] = "AccurateAim";
  KeyHash2[KeyHash2["Aim"] = 4165969743] = "Aim";
  KeyHash2[KeyHash2["AimInAir"] = 3640078424] = "AimInAir";
  KeyHash2[KeyHash2["Arrest"] = 2767257707] = "Arrest";
  KeyHash2[KeyHash2["Attack"] = 130948705] = "Attack";
  KeyHash2[KeyHash2["Attack2"] = 42190210] = "Attack2";
  KeyHash2[KeyHash2["BreakDoorLock"] = 1997605642] = "BreakDoorLock";
  KeyHash2[KeyHash2["BreakVehicleLock"] = 2546408232] = "BreakVehicleLock";
  KeyHash2[KeyHash2["BuyGeneric"] = 1912940132] = "BuyGeneric";
  KeyHash2[KeyHash2["CameraBack"] = 2763879589] = "CameraBack";
  KeyHash2[KeyHash2["CameraContextGallery"] = 3895685974] = "CameraContextGallery";
  KeyHash2[KeyHash2["CameraDof"] = 805566940] = "CameraDof";
  KeyHash2[KeyHash2["CameraExpressionNext"] = 3483829203] = "CameraExpressionNext";
  KeyHash2[KeyHash2["CameraExpressionPrev"] = 129385309] = "CameraExpressionPrev";
  KeyHash2[KeyHash2["CameraHandheldUse"] = 2003789289] = "CameraHandheldUse";
  KeyHash2[KeyHash2["CameraPoseNext"] = 4161862453] = "CameraPoseNext";
  KeyHash2[KeyHash2["CameraPosePrev"] = 2371611089] = "CameraPosePrev";
  KeyHash2[KeyHash2["CameraPutAway"] = 1606906090] = "CameraPutAway";
  KeyHash2[KeyHash2["CameraSelfie"] = 2891522794] = "CameraSelfie";
  KeyHash2[KeyHash2["CameraTakePhoto"] = 1157240002] = "CameraTakePhoto";
  KeyHash2[KeyHash2["CameraZoom"] = 1206668322] = "CameraZoom";
  KeyHash2[KeyHash2["CampBedInspect"] = 3330151355] = "CampBedInspect";
  KeyHash2[KeyHash2["CampSetupTent"] = 186376936] = "CampSetupTent";
  KeyHash2[KeyHash2["CarriableBreakFree"] = 693204415] = "CarriableBreakFree";
  KeyHash2[KeyHash2["CarriableSuicide"] = 1855403240] = "CarriableSuicide";
  KeyHash2[KeyHash2["CellphoneCameraDof"] = 1497216137] = "CellphoneCameraDof";
  KeyHash2[KeyHash2["CellphoneCameraExpression"] = 3621942503] = "CellphoneCameraExpression";
  KeyHash2[KeyHash2["CellphoneCameraFocusLock"] = 1522630750] = "CellphoneCameraFocusLock";
  KeyHash2[KeyHash2["CellphoneCameraGrid"] = 3784099194] = "CellphoneCameraGrid";
  KeyHash2[KeyHash2["CellphoneCameraSelfie"] = 1782844414] = "CellphoneCameraSelfie";
  KeyHash2[KeyHash2["CellphoneCancel"] = 3716362887] = "CellphoneCancel";
  KeyHash2[KeyHash2["CellphoneDown"] = 2182701058] = "CellphoneDown";
  KeyHash2[KeyHash2["CellphoneExtraOption"] = 3191160849] = "CellphoneExtraOption";
  KeyHash2[KeyHash2["CellphoneLeft"] = 985393552] = "CellphoneLeft";
  KeyHash2[KeyHash2["CellphoneOption"] = 3535965108] = "CellphoneOption";
  KeyHash2[KeyHash2["CellphoneRight"] = 3529440717] = "CellphoneRight";
  KeyHash2[KeyHash2["CellphoneScrollBackward"] = 1204621115] = "CellphoneScrollBackward";
  KeyHash2[KeyHash2["CellphoneScrollForward"] = 3410892696] = "CellphoneScrollForward";
  KeyHash2[KeyHash2["CellphoneSelect"] = 3693494296] = "CellphoneSelect";
  KeyHash2[KeyHash2["CellphoneUp"] = 3538828062] = "CellphoneUp";
  KeyHash2[KeyHash2["CharacterWheel"] = 2536475934] = "CharacterWheel";
  KeyHash2[KeyHash2["CinematicCam"] = 1644850270] = "CinematicCam";
  KeyHash2[KeyHash2["CinematicCamChangeShot"] = 2798023235] = "CinematicCamChangeShot";
  KeyHash2[KeyHash2["CinematicCamDownOnly"] = 598619298] = "CinematicCamDownOnly";
  KeyHash2[KeyHash2["CinematicCamHold"] = 3622286197] = "CinematicCamHold";
  KeyHash2[KeyHash2["CinematicCamLr"] = 1808336124] = "CinematicCamLr";
  KeyHash2[KeyHash2["CinematicCamUd"] = 2220313320] = "CinematicCamUd";
  KeyHash2[KeyHash2["CinematicCamUpOnly"] = 4023379639] = "CinematicCamUpOnly";
  KeyHash2[KeyHash2["CinematicSlowmo"] = 2056295390] = "CinematicSlowmo";
  KeyHash2[KeyHash2["ClaimGeneric"] = 3750750661] = "ClaimGeneric";
  KeyHash2[KeyHash2["Context"] = 3074148983] = "Context";
  KeyHash2[KeyHash2["ContextA"] = 1367437629] = "ContextA";
  KeyHash2[KeyHash2["ContextAction"] = 2994936e3] = "ContextAction";
  KeyHash2[KeyHash2["ContextB"] = 992265328] = "ContextB";
  KeyHash2[KeyHash2["ContextLt"] = 3241829732] = "ContextLt";
  KeyHash2[KeyHash2["ContextRt"] = 129547951] = "ContextRt";
  KeyHash2[KeyHash2["ContextSecondary"] = 4053525381] = "ContextSecondary";
  KeyHash2[KeyHash2["ContextX"] = 3820983707] = "ContextX";
  KeyHash2[KeyHash2["ContextY"] = 3575347279] = "ContextY";
  KeyHash2[KeyHash2["Count"] = 2397043504] = "Count";
  KeyHash2[KeyHash2["Cover"] = 3732491838] = "Cover";
  KeyHash2[KeyHash2["CoverTransition"] = 1963753488] = "CoverTransition";
  KeyHash2[KeyHash2["CraftingEat"] = 3113917613] = "CraftingEat";
  KeyHash2[KeyHash2["CreatorAccept"] = 752170046] = "CreatorAccept";
  KeyHash2[KeyHash2["CreatorDelete"] = 1062060271] = "CreatorDelete";
  KeyHash2[KeyHash2["CreatorDrop"] = 1094726869] = "CreatorDrop";
  KeyHash2[KeyHash2["CreatorFunction"] = 2959071781] = "CreatorFunction";
  KeyHash2[KeyHash2["CreatorGrab"] = 864685381] = "CreatorGrab";
  KeyHash2[KeyHash2["CreatorLookLr"] = 2930944455] = "CreatorLookLr";
  KeyHash2[KeyHash2["CreatorLookUd"] = 1441408243] = "CreatorLookUd";
  KeyHash2[KeyHash2["CreatorLower"] = 467545779] = "CreatorLower";
  KeyHash2[KeyHash2["CreatorLs"] = 866072368] = "CreatorLs";
  KeyHash2[KeyHash2["CreatorLt"] = 1147295926] = "CreatorLt";
  KeyHash2[KeyHash2["CreatorMenuAccept"] = 4221317681] = "CreatorMenuAccept";
  KeyHash2[KeyHash2["CreatorMenuCancel"] = 3141518432] = "CreatorMenuCancel";
  KeyHash2[KeyHash2["CreatorMenuDown"] = 2537621333] = "CreatorMenuDown";
  KeyHash2[KeyHash2["CreatorMenuExtraFunction"] = 3870880003] = "CreatorMenuExtraFunction";
  KeyHash2[KeyHash2["CreatorMenuFunction"] = 1510192115] = "CreatorMenuFunction";
  KeyHash2[KeyHash2["CreatorMenuLeft"] = 3966382250] = "CreatorMenuLeft";
  KeyHash2[KeyHash2["CreatorMenuRaise"] = 491981946] = "CreatorMenuRaise";
  KeyHash2[KeyHash2["CreatorMenuRight"] = 433599308] = "CreatorMenuRight";
  KeyHash2[KeyHash2["CreatorMenuSelect"] = 159704074] = "CreatorMenuSelect";
  KeyHash2[KeyHash2["CreatorMenuToggle"] = 2245149701] = "CreatorMenuToggle";
  KeyHash2[KeyHash2["CreatorMenuUp"] = 3167831115] = "CreatorMenuUp";
  KeyHash2[KeyHash2["CreatorMoveLr"] = 1500856028] = "CreatorMoveLr";
  KeyHash2[KeyHash2["CreatorMoveUd"] = 2185397878] = "CreatorMoveUd";
  KeyHash2[KeyHash2["CreatorPlace"] = 3612126381] = "CreatorPlace";
  KeyHash2[KeyHash2["CreatorRaise"] = 219134385] = "CreatorRaise";
  KeyHash2[KeyHash2["CreatorRotateLeft"] = 3558775850] = "CreatorRotateLeft";
  KeyHash2[KeyHash2["CreatorRotateRight"] = 2641717070] = "CreatorRotateRight";
  KeyHash2[KeyHash2["CreatorRs"] = 3637447829] = "CreatorRs";
  KeyHash2[KeyHash2["CreatorRt"] = 1010684785] = "CreatorRt";
  KeyHash2[KeyHash2["CreatorSearch"] = 4116210893] = "CreatorSearch";
  KeyHash2[KeyHash2["CreatorSwitchCam"] = 382533318] = "CreatorSwitchCam";
  KeyHash2[KeyHash2["CreatorZoomIn"] = 861769078] = "CreatorZoomIn";
  KeyHash2[KeyHash2["CreatorZoomOut"] = 614739859] = "CreatorZoomOut";
  KeyHash2[KeyHash2["CursorAccept"] = 2636835464] = "CursorAccept";
  KeyHash2[KeyHash2["CursorAcceptDoubleClick"] = 475373358] = "CursorAcceptDoubleClick";
  KeyHash2[KeyHash2["CursorAcceptHold"] = 3832869200] = "CursorAcceptHold";
  KeyHash2[KeyHash2["CursorBackwardClick"] = 2599651219] = "CursorBackwardClick";
  KeyHash2[KeyHash2["CursorBackwardDoubleClick"] = 2706088444] = "CursorBackwardDoubleClick";
  KeyHash2[KeyHash2["CursorBackwardHold"] = 27959201] = "CursorBackwardHold";
  KeyHash2[KeyHash2["CursorCancel"] = 659981625] = "CursorCancel";
  KeyHash2[KeyHash2["CursorCancelDoubleClick"] = 2629102798] = "CursorCancelDoubleClick";
  KeyHash2[KeyHash2["CursorCancelHold"] = 3623292726] = "CursorCancelHold";
  KeyHash2[KeyHash2["CursorForwardClick"] = 299612857] = "CursorForwardClick";
  KeyHash2[KeyHash2["CursorForwardDoubleClick"] = 2550519573] = "CursorForwardDoubleClick";
  KeyHash2[KeyHash2["CursorForwardHold"] = 1982908833] = "CursorForwardHold";
  KeyHash2[KeyHash2["CursorScrollClick"] = 1789437723] = "CursorScrollClick";
  KeyHash2[KeyHash2["CursorScrollDoubleClick"] = 3786861933] = "CursorScrollDoubleClick";
  KeyHash2[KeyHash2["CursorScrollDown"] = 2346611779] = "CursorScrollDown";
  KeyHash2[KeyHash2["CursorScrollHold"] = 1417993181] = "CursorScrollHold";
  KeyHash2[KeyHash2["CursorScrollUp"] = 1652558994] = "CursorScrollUp";
  KeyHash2[KeyHash2["CursorX"] = 3603229916] = "CursorX";
  KeyHash2[KeyHash2["CursorY"] = 3826452344] = "CursorY";
  KeyHash2[KeyHash2["CutFree"] = 3536602692] = "CutFree";
  KeyHash2[KeyHash2["DeprecatedAbove"] = 3251785618] = "DeprecatedAbove";
  KeyHash2[KeyHash2["Detonate"] = 1938056823] = "Detonate";
  KeyHash2[KeyHash2["DisableRadar"] = 1892407181] = "DisableRadar";
  KeyHash2[KeyHash2["Dive"] = 101002513] = "Dive";
  KeyHash2[KeyHash2["DocumentPageNext"] = 3380056759] = "DocumentPageNext";
  KeyHash2[KeyHash2["DocumentPagePrev"] = 538512052] = "DocumentPagePrev";
  KeyHash2[KeyHash2["DocumentScroll"] = 2893083409] = "DocumentScroll";
  KeyHash2[KeyHash2["DocumentScrollDownOnly"] = 3610197545] = "DocumentScrollDownOnly";
  KeyHash2[KeyHash2["DocumentScrollUpOnly"] = 1024203244] = "DocumentScrollUpOnly";
  KeyHash2[KeyHash2["Drop"] = 3532816515] = "Drop";
  KeyHash2[KeyHash2["DropAmmo"] = 1312975214] = "DropAmmo";
  KeyHash2[KeyHash2["DropWeapon"] = 2109526038] = "DropWeapon";
  KeyHash2[KeyHash2["Duck"] = 3674827653] = "Duck";
  KeyHash2[KeyHash2["DynamicScenario"] = 782960533] = "DynamicScenario";
  KeyHash2[KeyHash2["EmoteAction"] = 331623346] = "EmoteAction";
  KeyHash2[KeyHash2["EmoteComm"] = 1712871347] = "EmoteComm";
  KeyHash2[KeyHash2["EmoteDance"] = 4077981708] = "EmoteDance";
  KeyHash2[KeyHash2["EmoteGreet"] = 1924847018] = "EmoteGreet";
  KeyHash2[KeyHash2["EmoteGroupLink"] = 478307170] = "EmoteGroupLink";
  KeyHash2[KeyHash2["EmoteGroupLinkHorse"] = 1339147643] = "EmoteGroupLinkHorse";
  KeyHash2[KeyHash2["EmoteTaunt"] = 1192083856] = "EmoteTaunt";
  KeyHash2[KeyHash2["EmoteTwirlGunHold"] = 83591569] = "EmoteTwirlGunHold";
  KeyHash2[KeyHash2["EmoteTwirlGunVarA"] = 1771093471] = "EmoteTwirlGunVarA";
  KeyHash2[KeyHash2["EmoteTwirlGunVarB"] = 1389531235] = "EmoteTwirlGunVarB";
  KeyHash2[KeyHash2["EmoteTwirlGunVarC"] = 3156927250] = "EmoteTwirlGunVarC";
  KeyHash2[KeyHash2["EmoteTwirlGunVarD"] = 2926135183] = "EmoteTwirlGunVarD";
  KeyHash2[KeyHash2["EmotesFavorite"] = 2822055451] = "EmotesFavorite";
  KeyHash2[KeyHash2["EmotesManage"] = 2121659612] = "EmotesManage";
  KeyHash2[KeyHash2["EmotesSlotNavNext"] = 3417386887] = "EmotesSlotNavNext";
  KeyHash2[KeyHash2["Enter"] = 3472724512] = "Enter";
  KeyHash2[KeyHash2["EnterCheatCode"] = 2079742664] = "EnterCheatCode";
  KeyHash2[KeyHash2["ExpandRadar"] = 3473609182] = "ExpandRadar";
  KeyHash2[KeyHash2["FeedInteract"] = 2833511527] = "FeedInteract";
  KeyHash2[KeyHash2["FeedInteractGeneric"] = 3584624748] = "FeedInteractGeneric";
  KeyHash2[KeyHash2["FocusCam"] = 3878372340] = "FocusCam";
  KeyHash2[KeyHash2["FrontendAccept"] = 3350541322] = "FrontendAccept";
  KeyHash2[KeyHash2["FrontendAxisX"] = 4216773979] = "FrontendAxisX";
  KeyHash2[KeyHash2["FrontendAxisY"] = 152139984] = "FrontendAxisY";
  KeyHash2[KeyHash2["FrontendCancel"] = 359624985] = "FrontendCancel";
  KeyHash2[KeyHash2["FrontendDelete"] = 1257559155] = "FrontendDelete";
  KeyHash2[KeyHash2["FrontendDown"] = 97156178] = "FrontendDown";
  KeyHash2[KeyHash2["FrontendEndscreenAccept"] = 1043528942] = "FrontendEndscreenAccept";
  KeyHash2[KeyHash2["FrontendEndscreenExpand"] = 3348881055] = "FrontendEndscreenExpand";
  KeyHash2[KeyHash2["FrontendKeymappingCancel"] = 1049167194] = "FrontendKeymappingCancel";
  KeyHash2[KeyHash2["FrontendLb"] = 3901091606] = "FrontendLb";
  KeyHash2[KeyHash2["FrontendLeaderboard"] = 2665254245] = "FrontendLeaderboard";
  KeyHash2[KeyHash2["FrontendLeft"] = 2791226036] = "FrontendLeft";
  KeyHash2[KeyHash2["FrontendLs"] = 1137550768] = "FrontendLs";
  KeyHash2[KeyHash2["FrontendLt"] = 1360019509] = "FrontendLt";
  KeyHash2[KeyHash2["FrontendMapNavDown"] = 4165471981] = "FrontendMapNavDown";
  KeyHash2[KeyHash2["FrontendMapNavLeft"] = 3772209920] = "FrontendMapNavLeft";
  KeyHash2[KeyHash2["FrontendMapNavRight"] = 678583901] = "FrontendMapNavRight";
  KeyHash2[KeyHash2["FrontendMapNavUp"] = 307917029] = "FrontendMapNavUp";
  KeyHash2[KeyHash2["FrontendMapZoom"] = 1798674983] = "FrontendMapZoom";
  KeyHash2[KeyHash2["FrontendNavDown"] = 2014399155] = "FrontendNavDown";
  KeyHash2[KeyHash2["FrontendNavLeft"] = 2273251367] = "FrontendNavLeft";
  KeyHash2[KeyHash2["FrontendNavRight"] = 146634124] = "FrontendNavRight";
  KeyHash2[KeyHash2["FrontendNavUp"] = 2365579425] = "FrontendNavUp";
  KeyHash2[KeyHash2["FrontendPause"] = 3626896338] = "FrontendPause";
  KeyHash2[KeyHash2["FrontendPauseAlternate"] = 1250966545] = "FrontendPauseAlternate";
  KeyHash2[KeyHash2["FrontendPhotoMode"] = 1154297883] = "FrontendPhotoMode";
  KeyHash2[KeyHash2["FrontendRb"] = 398377320] = "FrontendRb";
  KeyHash2[KeyHash2["FrontendRdown"] = 1463068996] = "FrontendRdown";
  KeyHash2[KeyHash2["FrontendRight"] = 3736290067] = "FrontendRight";
  KeyHash2[KeyHash2["FrontendRightAxisX"] = 1025725594] = "FrontendRightAxisX";
  KeyHash2[KeyHash2["FrontendRightAxisY"] = 3946918111] = "FrontendRightAxisY";
  KeyHash2[KeyHash2["FrontendRleft"] = 959670863] = "FrontendRleft";
  KeyHash2[KeyHash2["FrontendRright"] = 1531509048] = "FrontendRright";
  KeyHash2[KeyHash2["FrontendRs"] = 2107936042] = "FrontendRs";
  KeyHash2[KeyHash2["FrontendRt"] = 1877832124] = "FrontendRt";
  KeyHash2[KeyHash2["FrontendRup"] = 3621677854] = "FrontendRup";
  KeyHash2[KeyHash2["FrontendScrollAxisX"] = 841268309] = "FrontendScrollAxisX";
  KeyHash2[KeyHash2["FrontendScrollAxisY"] = 560274134] = "FrontendScrollAxisY";
  KeyHash2[KeyHash2["FrontendSelect"] = 387518684] = "FrontendSelect";
  KeyHash2[KeyHash2["FrontendSocialClub"] = 105715352] = "FrontendSocialClub";
  KeyHash2[KeyHash2["FrontendSocialClubSecondary"] = 3183007475] = "FrontendSocialClubSecondary";
  KeyHash2[KeyHash2["FrontendStart"] = 3441418762] = "FrontendStart";
  KeyHash2[KeyHash2["FrontendTouchDoubleTapX"] = 375519920] = "FrontendTouchDoubleTapX";
  KeyHash2[KeyHash2["FrontendTouchDoubleTapY"] = 2531818431] = "FrontendTouchDoubleTapY";
  KeyHash2[KeyHash2["FrontendTouchDragX"] = 3969078414] = "FrontendTouchDragX";
  KeyHash2[KeyHash2["FrontendTouchDragY"] = 2596352235] = "FrontendTouchDragY";
  KeyHash2[KeyHash2["FrontendTouchHoldX"] = 267484957] = "FrontendTouchHoldX";
  KeyHash2[KeyHash2["FrontendTouchHoldY"] = 965661271] = "FrontendTouchHoldY";
  KeyHash2[KeyHash2["FrontendTouchSwipeDownX"] = 3820161365] = "FrontendTouchSwipeDownX";
  KeyHash2[KeyHash2["FrontendTouchSwipeDownY"] = 3187621354] = "FrontendTouchSwipeDownY";
  KeyHash2[KeyHash2["FrontendTouchSwipeLeftX"] = 625324254] = "FrontendTouchSwipeLeftX";
  KeyHash2[KeyHash2["FrontendTouchSwipeLeftY"] = 3560771278] = "FrontendTouchSwipeLeftY";
  KeyHash2[KeyHash2["FrontendTouchSwipeRightX"] = 3937829783] = "FrontendTouchSwipeRightX";
  KeyHash2[KeyHash2["FrontendTouchSwipeRightY"] = 1734048995] = "FrontendTouchSwipeRightY";
  KeyHash2[KeyHash2["FrontendTouchSwipeUpX"] = 192009273] = "FrontendTouchSwipeUpX";
  KeyHash2[KeyHash2["FrontendTouchSwipeUpY"] = 432697578] = "FrontendTouchSwipeUpY";
  KeyHash2[KeyHash2["FrontendTouchTapX"] = 3238926346] = "FrontendTouchTapX";
  KeyHash2[KeyHash2["FrontendTouchTapY"] = 3477812356] = "FrontendTouchTapY";
  KeyHash2[KeyHash2["FrontendTouchZoomFactor"] = 3891829816] = "FrontendTouchZoomFactor";
  KeyHash2[KeyHash2["FrontendTouchZoomX"] = 375790288] = "FrontendTouchZoomX";
  KeyHash2[KeyHash2["FrontendTouchZoomY"] = 624801919] = "FrontendTouchZoomY";
  KeyHash2[KeyHash2["FrontendUp"] = 1662638961] = "FrontendUp";
  KeyHash2[KeyHash2["FrontendX"] = 1840825903] = "FrontendX";
  KeyHash2[KeyHash2["FrontendY"] = 2080465600] = "FrontendY";
  KeyHash2[KeyHash2["GameMenuAccept"] = 1138488863] = "GameMenuAccept";
  KeyHash2[KeyHash2["GameMenuCancel"] = 814057702] = "GameMenuCancel";
  KeyHash2[KeyHash2["GameMenuDown"] = 1141111167] = "GameMenuDown";
  KeyHash2[KeyHash2["GameMenuExtraOption"] = 3583430576] = "GameMenuExtraOption";
  KeyHash2[KeyHash2["GameMenuLeft"] = 2910833755] = "GameMenuLeft";
  KeyHash2[KeyHash2["GameMenuLeftAxisX"] = 4096906618] = "GameMenuLeftAxisX";
  KeyHash2[KeyHash2["GameMenuLeftAxisY"] = 577679855] = "GameMenuLeftAxisY";
  KeyHash2[KeyHash2["GameMenuLs"] = 2834751078] = "GameMenuLs";
  KeyHash2[KeyHash2["GameMenuOption"] = 4225217510] = "GameMenuOption";
  KeyHash2[KeyHash2["GameMenuRight"] = 1710877787] = "GameMenuRight";
  KeyHash2[KeyHash2["GameMenuRightAxisX"] = 1183164979] = "GameMenuRightAxisX";
  KeyHash2[KeyHash2["GameMenuRightAxisY"] = 1623613108] = "GameMenuRightAxisY";
  KeyHash2[KeyHash2["GameMenuRightStickDown"] = 2914485875] = "GameMenuRightStickDown";
  KeyHash2[KeyHash2["GameMenuRightStickLeft"] = 1910737254] = "GameMenuRightStickLeft";
  KeyHash2[KeyHash2["GameMenuRightStickRight"] = 3788426827] = "GameMenuRightStickRight";
  KeyHash2[KeyHash2["GameMenuRightStickUp"] = 4028836355] = "GameMenuRightStickUp";
  KeyHash2[KeyHash2["GameMenuRs"] = 2313830309] = "GameMenuRs";
  KeyHash2[KeyHash2["GameMenuScrollBackward"] = 2644780612] = "GameMenuScrollBackward";
  KeyHash2[KeyHash2["GameMenuScrollForward"] = 2168814106] = "GameMenuScrollForward";
  KeyHash2[KeyHash2["GameMenuStickDown"] = 1669958966] = "GameMenuStickDown";
  KeyHash2[KeyHash2["GameMenuStickLeft"] = 113281492] = "GameMenuStickLeft";
  KeyHash2[KeyHash2["GameMenuStickRight"] = 1541138497] = "GameMenuStickRight";
  KeyHash2[KeyHash2["GameMenuStickUp"] = 2628350873] = "GameMenuStickUp";
  KeyHash2[KeyHash2["GameMenuTabLeft"] = 3419779694] = "GameMenuTabLeft";
  KeyHash2[KeyHash2["GameMenuTabLeftSecondary"] = 652860416] = "GameMenuTabLeftSecondary";
  KeyHash2[KeyHash2["GameMenuTabRight"] = 285921746] = "GameMenuTabRight";
  KeyHash2[KeyHash2["GameMenuTabRightSecondary"] = 2362035522] = "GameMenuTabRightSecondary";
  KeyHash2[KeyHash2["GameMenuUp"] = 2434576542] = "GameMenuUp";
  KeyHash2[KeyHash2["HitchAnimal"] = 2841515112] = "HitchAnimal";
  KeyHash2[KeyHash2["Hogtie"] = 3653567794] = "Hogtie";
  KeyHash2[KeyHash2["HorseAim"] = 1632043089] = "HorseAim";
  KeyHash2[KeyHash2["HorseAttack"] = 1623727326] = "HorseAttack";
  KeyHash2[KeyHash2["HorseAttack2"] = 3372489069] = "HorseAttack2";
  KeyHash2[KeyHash2["HorseCollect"] = 2103129879] = "HorseCollect";
  KeyHash2[KeyHash2["HorseCommandFlee"] = 1108782854] = "HorseCommandFlee";
  KeyHash2[KeyHash2["HorseCommandFollow"] = 1983794471] = "HorseCommandFollow";
  KeyHash2[KeyHash2["HorseCommandStay"] = 2925395437] = "HorseCommandStay";
  KeyHash2[KeyHash2["HorseCoverTransition"] = 697752853] = "HorseCoverTransition";
  KeyHash2[KeyHash2["HorseExit"] = 3420160680] = "HorseExit";
  KeyHash2[KeyHash2["HorseGunLr"] = 1033498310] = "HorseGunLr";
  KeyHash2[KeyHash2["HorseGunUd"] = 3220469497] = "HorseGunUd";
  KeyHash2[KeyHash2["HorseJump"] = 3839020573] = "HorseJump";
  KeyHash2[KeyHash2["HorseLookBehind"] = 2166883689] = "HorseLookBehind";
  KeyHash2[KeyHash2["HorseMelee"] = 440314811] = "HorseMelee";
  KeyHash2[KeyHash2["HorseMoveDownOnly"] = 1459101765] = "HorseMoveDownOnly";
  KeyHash2[KeyHash2["HorseMoveLeftOnly"] = 2262266870] = "HorseMoveLeftOnly";
  KeyHash2[KeyHash2["HorseMoveLr"] = 308778731] = "HorseMoveLr";
  KeyHash2[KeyHash2["HorseMoveRightOnly"] = 2120975890] = "HorseMoveRightOnly";
  KeyHash2[KeyHash2["HorseMoveUd"] = 1002303471] = "HorseMoveUd";
  KeyHash2[KeyHash2["HorseMoveUpOnly"] = 1771341755] = "HorseMoveUpOnly";
  KeyHash2[KeyHash2["HorseSpecial"] = 1879610457] = "HorseSpecial";
  KeyHash2[KeyHash2["HorseSprint"] = 1520437207] = "HorseSprint";
  KeyHash2[KeyHash2["HorseStop"] = 3781925549] = "HorseStop";
  KeyHash2[KeyHash2["HudSpecial"] = 1477198963] = "HudSpecial";
  KeyHash2[KeyHash2["IconStackLayoutDefault"] = 1308371794] = "IconStackLayoutDefault";
  KeyHash2[KeyHash2["IconStackLayoutWithInfoIcon"] = 547403334] = "IconStackLayoutWithInfoIcon";
  KeyHash2[KeyHash2["Ignite"] = 3344705456] = "Ignite";
  KeyHash2[KeyHash2["Inspect"] = 2786969136] = "Inspect";
  KeyHash2[KeyHash2["InspectLr"] = 394838659] = "InspectLr";
  KeyHash2[KeyHash2["InspectOpenSatchel"] = 2602346714] = "InspectOpenSatchel";
  KeyHash2[KeyHash2["InspectUd"] = 4185397655] = "InspectUd";
  KeyHash2[KeyHash2["InspectZoom"] = 1395223413] = "InspectZoom";
  KeyHash2[KeyHash2["InteractAnimal"] = 2712385875] = "InteractAnimal";
  KeyHash2[KeyHash2["InteractHitCarriable"] = 86159939] = "InteractHitCarriable";
  KeyHash2[KeyHash2["InteractHorseBrush"] = 1671663404] = "InteractHorseBrush";
  KeyHash2[KeyHash2["InteractHorseCare"] = 2965169622] = "InteractHorseCare";
  KeyHash2[KeyHash2["InteractHorseFeed"] = 223715568] = "InteractHorseFeed";
  KeyHash2[KeyHash2["InteractLeadAnimal"] = 399753205] = "InteractLeadAnimal";
  KeyHash2[KeyHash2["InteractLockon"] = 4170723072] = "InteractLockon";
  KeyHash2[KeyHash2["InteractLockonA"] = 3507108406] = "InteractLockonA";
  KeyHash2[KeyHash2["InteractLockonAnimal"] = 1410711112] = "InteractLockonAnimal";
  KeyHash2[KeyHash2["InteractLockonCallAnimal"] = 1912118204] = "InteractLockonCallAnimal";
  KeyHash2[KeyHash2["InteractLockonDetachHorse"] = 4123291675] = "InteractLockonDetachHorse";
  KeyHash2[KeyHash2["InteractLockonNeg"] = 648122183] = "InteractLockonNeg";
  KeyHash2[KeyHash2["InteractLockonPos"] = 4131002361] = "InteractLockonPos";
  KeyHash2[KeyHash2["InteractLockonRob"] = 2678435079] = "InteractLockonRob";
  KeyHash2[KeyHash2["InteractLockonStudyBinoculars"] = 3019081916] = "InteractLockonStudyBinoculars";
  KeyHash2[KeyHash2["InteractLockonTargetInfo"] = 824284304] = "InteractLockonTargetInfo";
  KeyHash2[KeyHash2["InteractLockonTrackAnimal"] = 3796319216] = "InteractLockonTrackAnimal";
  KeyHash2[KeyHash2["InteractLockonY"] = 162081675] = "InteractLockonY";
  KeyHash2[KeyHash2["InteractNeg"] = 1112265426] = "InteractNeg";
  KeyHash2[KeyHash2["InteractOption1"] = 1980406895] = "InteractOption1";
  KeyHash2[KeyHash2["InteractOption2"] = 2220112130] = "InteractOption2";
  KeyHash2[KeyHash2["InteractPos"] = 4139479928] = "InteractPos";
  KeyHash2[KeyHash2["InteractWildAnimal"] = 2314457824] = "InteractWildAnimal";
  KeyHash2[KeyHash2["InteractionMenu"] = 3427864153] = "InteractionMenu";
  KeyHash2[KeyHash2["InterrogateBeat"] = 1847463266] = "InterrogateBeat";
  KeyHash2[KeyHash2["InterrogateKill"] = 2175984401] = "InterrogateKill";
  KeyHash2[KeyHash2["InterrogateQuestion"] = 2712284557] = "InterrogateQuestion";
  KeyHash2[KeyHash2["InterrogateRelease"] = 1008922382] = "InterrogateRelease";
  KeyHash2[KeyHash2["IronSight"] = 2215788713] = "IronSight";
  KeyHash2[KeyHash2["Jump"] = 3654345152] = "Jump";
  KeyHash2[KeyHash2["LookBehind"] = 2572789488] = "LookBehind";
  KeyHash2[KeyHash2["LookDownOnly"] = 2396597782] = "LookDownOnly";
  KeyHash2[KeyHash2["LookLeftOnly"] = 150518893] = "LookLeftOnly";
  KeyHash2[KeyHash2["LookLr"] = 2844205919] = "LookLr";
  KeyHash2[KeyHash2["LookRightOnly"] = 2716537683] = "LookRightOnly";
  KeyHash2[KeyHash2["LookUd"] = 3523508616] = "LookUd";
  KeyHash2[KeyHash2["LookUpOnly"] = 3227852096] = "LookUpOnly";
  KeyHash2[KeyHash2["Loot"] = 1101824977] = "Loot";
  KeyHash2[KeyHash2["LootAliveComponent"] = 4286646744] = "LootAliveComponent";
  KeyHash2[KeyHash2["LootAmmo"] = 3258809246] = "LootAmmo";
  KeyHash2[KeyHash2["LootVehicle"] = 349924446] = "LootVehicle";
  KeyHash2[KeyHash2["Loot2"] = 966551065] = "Loot2";
  KeyHash2[KeyHash2["Loot3"] = 668058244] = "Loot3";
  KeyHash2[KeyHash2["Map"] = 3810290241] = "Map";
  KeyHash2[KeyHash2["MapPoi"] = 2616103443] = "MapPoi";
  KeyHash2[KeyHash2["MeleeAttack"] = 3002300392] = "MeleeAttack";
  KeyHash2[KeyHash2["MeleeBlock"] = 3052335031] = "MeleeBlock";
  KeyHash2[KeyHash2["MeleeGrapple"] = 578288361] = "MeleeGrapple";
  KeyHash2[KeyHash2["MeleeGrappleAttack"] = 2917856396] = "MeleeGrappleAttack";
  KeyHash2[KeyHash2["MeleeGrappleBreakout"] = 3502374655] = "MeleeGrappleBreakout";
  KeyHash2[KeyHash2["MeleeGrappleChoke"] = 25970639] = "MeleeGrappleChoke";
  KeyHash2[KeyHash2["MeleeGrappleMountSwitch"] = 1743595310] = "MeleeGrappleMountSwitch";
  KeyHash2[KeyHash2["MeleeGrappleReversal"] = 2445912087] = "MeleeGrappleReversal";
  KeyHash2[KeyHash2["MeleeGrappleStandSwitch"] = 3189720729] = "MeleeGrappleStandSwitch";
  KeyHash2[KeyHash2["MeleeHorseAttackPrimary"] = 2028806450] = "MeleeHorseAttackPrimary";
  KeyHash2[KeyHash2["MeleeHorseAttackSecondary"] = 371916472] = "MeleeHorseAttackSecondary";
  KeyHash2[KeyHash2["MeleeModifier"] = 511537781] = "MeleeModifier";
  KeyHash2[KeyHash2["MercyKill"] = 2506893838] = "MercyKill";
  KeyHash2[KeyHash2["MinigameActionDown"] = 4127309052] = "MinigameActionDown";
  KeyHash2[KeyHash2["MinigameActionLeft"] = 169802761] = "MinigameActionLeft";
  KeyHash2[KeyHash2["MinigameActionRight"] = 383189881] = "MinigameActionRight";
  KeyHash2[KeyHash2["MinigameActionUp"] = 4120984077] = "MinigameActionUp";
  KeyHash2[KeyHash2["MinigameActionX"] = 496139762] = "MinigameActionX";
  KeyHash2[KeyHash2["MinigameBartenderPour"] = 3401327712] = "MinigameBartenderPour";
  KeyHash2[KeyHash2["MinigameBartenderRaiseBottle"] = 4037169426] = "MinigameBartenderRaiseBottle";
  KeyHash2[KeyHash2["MinigameBartenderRaiseGlass"] = 2704564469] = "MinigameBartenderRaiseGlass";
  KeyHash2[KeyHash2["MinigameBartenderServe"] = 3691229251] = "MinigameBartenderServe";
  KeyHash2[KeyHash2["MinigameBlackjackBet"] = 1713211953] = "MinigameBlackjackBet";
  KeyHash2[KeyHash2["MinigameBlackjackBetAxisY"] = 1026465938] = "MinigameBlackjackBetAxisY";
  KeyHash2[KeyHash2["MinigameBlackjackDecline"] = 3447578523] = "MinigameBlackjackDecline";
  KeyHash2[KeyHash2["MinigameBlackjackDouble"] = 1950903460] = "MinigameBlackjackDouble";
  KeyHash2[KeyHash2["MinigameBlackjackHandView"] = 66185163] = "MinigameBlackjackHandView";
  KeyHash2[KeyHash2["MinigameBlackjackHit"] = 2819893011] = "MinigameBlackjackHit";
  KeyHash2[KeyHash2["MinigameBlackjackSplit"] = 1126895903] = "MinigameBlackjackSplit";
  KeyHash2[KeyHash2["MinigameBlackjackStand"] = 824575239] = "MinigameBlackjackStand";
  KeyHash2[KeyHash2["MinigameBlackjackTableView"] = 2917176373] = "MinigameBlackjackTableView";
  KeyHash2[KeyHash2["MinigameBuildingCameraNext"] = 380694264] = "MinigameBuildingCameraNext";
  KeyHash2[KeyHash2["MinigameBuildingCameraPrev"] = 1603777073] = "MinigameBuildingCameraPrev";
  KeyHash2[KeyHash2["MinigameBuildingHammer"] = 4203851469] = "MinigameBuildingHammer";
  KeyHash2[KeyHash2["MinigameChangeBetAxisY"] = 3183948782] = "MinigameChangeBetAxisY";
  KeyHash2[KeyHash2["MinigameClearBet"] = 1243727467] = "MinigameClearBet";
  KeyHash2[KeyHash2["MinigameCrackpotBoatShowControls"] = 1380726663] = "MinigameCrackpotBoatShowControls";
  KeyHash2[KeyHash2["MinigameCrapsAcceptDice"] = 1517387392] = "MinigameCrapsAcceptDice";
  KeyHash2[KeyHash2["MinigameCrapsSkip"] = 864590660] = "MinigameCrapsSkip";
  KeyHash2[KeyHash2["MinigameCrapsThrowDice"] = 1698663412] = "MinigameCrapsThrowDice";
  KeyHash2[KeyHash2["MinigameDanceNext"] = 1072537860] = "MinigameDanceNext";
  KeyHash2[KeyHash2["MinigameDancePrev"] = 3906459441] = "MinigameDancePrev";
  KeyHash2[KeyHash2["MinigameDecreaseBet"] = 3555456037] = "MinigameDecreaseBet";
  KeyHash2[KeyHash2["MinigameDominoesDrawTile"] = 1064813367] = "MinigameDominoesDrawTile";
  KeyHash2[KeyHash2["MinigameDominoesMoveDownOnly"] = 4255107181] = "MinigameDominoesMoveDownOnly";
  KeyHash2[KeyHash2["MinigameDominoesMoveLeftOnly"] = 4259154388] = "MinigameDominoesMoveLeftOnly";
  KeyHash2[KeyHash2["MinigameDominoesMoveRightOnly"] = 2102495177] = "MinigameDominoesMoveRightOnly";
  KeyHash2[KeyHash2["MinigameDominoesMoveUpOnly"] = 3333131443] = "MinigameDominoesMoveUpOnly";
  KeyHash2[KeyHash2["MinigameDominoesPlayAgain"] = 1729872669] = "MinigameDominoesPlayAgain";
  KeyHash2[KeyHash2["MinigameDominoesPlayTile"] = 2515909500] = "MinigameDominoesPlayTile";
  KeyHash2[KeyHash2["MinigameDominoesSkipDeal"] = 3320193751] = "MinigameDominoesSkipDeal";
  KeyHash2[KeyHash2["MinigameDominoesViewDominoes"] = 2298001073] = "MinigameDominoesViewDominoes";
  KeyHash2[KeyHash2["MinigameDominoesViewMoves"] = 1999884076] = "MinigameDominoesViewMoves";
  KeyHash2[KeyHash2["MinigameFffA"] = 242318790] = "MinigameFffA";
  KeyHash2[KeyHash2["MinigameFffB"] = 466098291] = "MinigameFffB";
  KeyHash2[KeyHash2["MinigameFffCycleSequenceLeft"] = 698569998] = "MinigameFffCycleSequenceLeft";
  KeyHash2[KeyHash2["MinigameFffCycleSequenceRight"] = 2069596525] = "MinigameFffCycleSequenceRight";
  KeyHash2[KeyHash2["MinigameFffFlourishContinue"] = 1875500648] = "MinigameFffFlourishContinue";
  KeyHash2[KeyHash2["MinigameFffFlourishEnd"] = 4151642917] = "MinigameFffFlourishEnd";
  KeyHash2[KeyHash2["MinigameFffPractice"] = 3392642946] = "MinigameFffPractice";
  KeyHash2[KeyHash2["MinigameFffSkipTurn"] = 812869659] = "MinigameFffSkipTurn";
  KeyHash2[KeyHash2["MinigameFffX"] = 1710271711] = "MinigameFffX";
  KeyHash2[KeyHash2["MinigameFffY"] = 1940736088] = "MinigameFffY";
  KeyHash2[KeyHash2["MinigameFffZoom"] = 1642384076] = "MinigameFffZoom";
  KeyHash2[KeyHash2["MinigameFishingHook"] = 2714570810] = "MinigameFishingHook";
  KeyHash2[KeyHash2["MinigameFishingKeepFish"] = 1388692298] = "MinigameFishingKeepFish";
  KeyHash2[KeyHash2["MinigameFishingLeanLeft"] = 223099578] = "MinigameFishingLeanLeft";
  KeyHash2[KeyHash2["MinigameFishingLeanRight"] = 84363931] = "MinigameFishingLeanRight";
  KeyHash2[KeyHash2["MinigameFishingLeftAxisX"] = 1773209123] = "MinigameFishingLeftAxisX";
  KeyHash2[KeyHash2["MinigameFishingLeftAxisY"] = 163530309] = "MinigameFishingLeftAxisY";
  KeyHash2[KeyHash2["MinigameFishingManualReelIn"] = 2734945378] = "MinigameFishingManualReelIn";
  KeyHash2[KeyHash2["MinigameFishingManualReelOutModifer"] = 867346636] = "MinigameFishingManualReelOutModifer";
  KeyHash2[KeyHash2["MinigameFishingQuickEquip"] = 636822989] = "MinigameFishingQuickEquip";
  KeyHash2[KeyHash2["MinigameFishingReelSpeedAxis"] = 1237793970] = "MinigameFishingReelSpeedAxis";
  KeyHash2[KeyHash2["MinigameFishingReelSpeedDown"] = 3618592416] = "MinigameFishingReelSpeedDown";
  KeyHash2[KeyHash2["MinigameFishingReelSpeedUp"] = 799610357] = "MinigameFishingReelSpeedUp";
  KeyHash2[KeyHash2["MinigameFishingReleaseFish"] = 4048540725] = "MinigameFishingReleaseFish";
  KeyHash2[KeyHash2["MinigameFishingResetCast"] = 3020594139] = "MinigameFishingResetCast";
  KeyHash2[KeyHash2["MinigameFishingRightAxisX"] = 1339352408] = "MinigameFishingRightAxisX";
  KeyHash2[KeyHash2["MinigameFishingRightAxisY"] = 2515726739] = "MinigameFishingRightAxisY";
  KeyHash2[KeyHash2["MinigameHelp"] = 2474959016] = "MinigameHelp";
  KeyHash2[KeyHash2["MinigameHelpNext"] = 2204142272] = "MinigameHelpNext";
  KeyHash2[KeyHash2["MinigameHelpPrev"] = 3321180502] = "MinigameHelpPrev";
  KeyHash2[KeyHash2["MinigameIncreaseBet"] = 3352005983] = "MinigameIncreaseBet";
  KeyHash2[KeyHash2["MinigameLeftTrigger"] = 2126722387] = "MinigameLeftTrigger";
  KeyHash2[KeyHash2["MinigameMilkingLeftAction"] = 4283116250] = "MinigameMilkingLeftAction";
  KeyHash2[KeyHash2["MinigameMilkingRightAction"] = 817790194] = "MinigameMilkingRightAction";
  KeyHash2[KeyHash2["MinigameNewGame"] = 1561823487] = "MinigameNewGame";
  KeyHash2[KeyHash2["MinigamePlaceBet"] = 1091242798] = "MinigamePlaceBet";
  KeyHash2[KeyHash2["MinigamePokerBet"] = 2844275561] = "MinigamePokerBet";
  KeyHash2[KeyHash2["MinigamePokerBoardCards"] = 58012824] = "MinigamePokerBoardCards";
  KeyHash2[KeyHash2["MinigamePokerCall"] = 3669618290] = "MinigamePokerCall";
  KeyHash2[KeyHash2["MinigamePokerCheatLr"] = 590411031] = "MinigamePokerCheatLr";
  KeyHash2[KeyHash2["MinigamePokerCheck"] = 543891591] = "MinigamePokerCheck";
  KeyHash2[KeyHash2["MinigamePokerCheckFold"] = 1923731959] = "MinigamePokerCheckFold";
  KeyHash2[KeyHash2["MinigamePokerCommunityCards"] = 3825383576] = "MinigamePokerCommunityCards";
  KeyHash2[KeyHash2["MinigamePokerFold"] = 1236577566] = "MinigamePokerFold";
  KeyHash2[KeyHash2["MinigamePokerHoleCards"] = 3266386234] = "MinigamePokerHoleCards";
  KeyHash2[KeyHash2["MinigamePokerShowPossibleHands"] = 2003155412] = "MinigamePokerShowPossibleHands";
  KeyHash2[KeyHash2["MinigamePokerSkip"] = 1684699026] = "MinigamePokerSkip";
  KeyHash2[KeyHash2["MinigamePokerSkipTutorial"] = 3043540176] = "MinigamePokerSkipTutorial";
  KeyHash2[KeyHash2["MinigamePokerYourCards"] = 4179866423] = "MinigamePokerYourCards";
  KeyHash2[KeyHash2["MinigameQuit"] = 3909700512] = "MinigameQuit";
  KeyHash2[KeyHash2["MinigameReplay"] = 2555528119] = "MinigameReplay";
  KeyHash2[KeyHash2["MinigameRightTrigger"] = 3195582229] = "MinigameRightTrigger";
  KeyHash2[KeyHash2["MoveDownOnly"] = 3531047651] = "MoveDownOnly";
  KeyHash2[KeyHash2["MoveLeft"] = 1885667965] = "MoveLeft";
  KeyHash2[KeyHash2["MoveRight"] = 1301263553] = "MoveRight";
  KeyHash2[KeyHash2["MoveRightOnly"] = 3034867124] = "MoveRightOnly";
  KeyHash2[KeyHash2["MoveBackwards"] = 4255658384] = "MoveBackwards";
  KeyHash2[KeyHash2["MoveForward"] = 2412778968] = "MoveForward";
  KeyHash2[KeyHash2["MpTextChatAll"] = 2535521518] = "MpTextChatAll";
  KeyHash2[KeyHash2["MpTextChatCrew"] = 2168650386] = "MpTextChatCrew";
  KeyHash2[KeyHash2["MpTextChatFriends"] = 1889053811] = "MpTextChatFriends";
  KeyHash2[KeyHash2["MpTextChatTeam"] = 2425925021] = "MpTextChatTeam";
  KeyHash2[KeyHash2["MultiplayerDeadDuel"] = 4168481912] = "MultiplayerDeadDuel";
  KeyHash2[KeyHash2["MultiplayerDeadFeud"] = 3030454374] = "MultiplayerDeadFeud";
  KeyHash2[KeyHash2["MultiplayerDeadInformLaw"] = 1746314126] = "MultiplayerDeadInformLaw";
  KeyHash2[KeyHash2["MultiplayerDeadLeaderFeud"] = 3424188768] = "MultiplayerDeadLeaderFeud";
  KeyHash2[KeyHash2["MultiplayerDeadParley"] = 1293024769] = "MultiplayerDeadParley";
  KeyHash2[KeyHash2["MultiplayerDeadPressCharges"] = 3842886163] = "MultiplayerDeadPressCharges";
  KeyHash2[KeyHash2["MultiplayerDeadRespawn"] = 412644179] = "MultiplayerDeadRespawn";
  KeyHash2[KeyHash2["MultiplayerDeadSwitchRespawn"] = 3035797690] = "MultiplayerDeadSwitchRespawn";
  KeyHash2[KeyHash2["MultiplayerInfo"] = 3895734258] = "MultiplayerInfo";
  KeyHash2[KeyHash2["MultiplayerInfoPlayers"] = 2624114228] = "MultiplayerInfoPlayers";
  KeyHash2[KeyHash2["MultiplayerLeaderboardScrollUd"] = 2836910667] = "MultiplayerLeaderboardScrollUd";
  KeyHash2[KeyHash2["MultiplayerPredatorAbility"] = 3318694322] = "MultiplayerPredatorAbility";
  KeyHash2[KeyHash2["MultiplayerRaceRespawn"] = 21798980] = "MultiplayerRaceRespawn";
  KeyHash2[KeyHash2["MultiplayerSpectateHideHud"] = 2109365577] = "MultiplayerSpectateHideHud";
  KeyHash2[KeyHash2["MultiplayerSpectatePlayerNext"] = 3120977554] = "MultiplayerSpectatePlayerNext";
  KeyHash2[KeyHash2["MultiplayerSpectatePlayerOptions"] = 1309101798] = "MultiplayerSpectatePlayerOptions";
  KeyHash2[KeyHash2["MultiplayerSpectatePlayerPrev"] = 1351794503] = "MultiplayerSpectatePlayerPrev";
  KeyHash2[KeyHash2["NavDirectionNext"] = 2150849757] = "NavDirectionNext";
  KeyHash2[KeyHash2["NavDirectionPrevious"] = 967525350] = "NavDirectionPrevious";
  KeyHash2[KeyHash2["NavStyleHorizontal"] = 4121151387] = "NavStyleHorizontal";
  KeyHash2[KeyHash2["NavStylePagePrimary"] = 2549677816] = "NavStylePagePrimary";
  KeyHash2[KeyHash2["NavStyleRadial"] = 1778093002] = "NavStyleRadial";
  KeyHash2[KeyHash2["NavStyleVertical"] = 531394687] = "NavStyleVertical";
  KeyHash2[KeyHash2["NextCamera"] = 2139949496] = "NextCamera";
  KeyHash2[KeyHash2["NextWeapon"] = 4245621804] = "NextWeapon";
  KeyHash2[KeyHash2["OpenCraftingMenu"] = 1934388793] = "OpenCraftingMenu";
  KeyHash2[KeyHash2["OpenEmoteWheel"] = 3803535267] = "OpenEmoteWheel";
  KeyHash2[KeyHash2["OpenEmoteWheelHorse"] = 2336204382] = "OpenEmoteWheelHorse";
  KeyHash2[KeyHash2["OpenJournal"] = 4085452174] = "OpenJournal";
  KeyHash2[KeyHash2["OpenSatchelHorseMenu"] = 1499911466] = "OpenSatchelHorseMenu";
  KeyHash2[KeyHash2["OpenSatchelMenu"] = 1287709438] = "OpenSatchelMenu";
  KeyHash2[KeyHash2["OpenWheelMenu"] = 2890650865] = "OpenWheelMenu";
  KeyHash2[KeyHash2["ParachuteBrakeLeft"] = 657184954] = "ParachuteBrakeLeft";
  KeyHash2[KeyHash2["ParachuteBrakeRight"] = 2492153511] = "ParachuteBrakeRight";
  KeyHash2[KeyHash2["ParachuteDeploy"] = 3958714456] = "ParachuteDeploy";
  KeyHash2[KeyHash2["ParachuteDetach"] = 4290769209] = "ParachuteDetach";
  KeyHash2[KeyHash2["ParachutePitchDownOnly"] = 2084193106] = "ParachutePitchDownOnly";
  KeyHash2[KeyHash2["ParachutePitchUd"] = 4031930920] = "ParachutePitchUd";
  KeyHash2[KeyHash2["ParachutePitchUpOnly"] = 146795113] = "ParachutePitchUpOnly";
  KeyHash2[KeyHash2["ParachutePrecisionLanding"] = 3329603773] = "ParachutePrecisionLanding";
  KeyHash2[KeyHash2["ParachuteSmoke"] = 628423344] = "ParachuteSmoke";
  KeyHash2[KeyHash2["ParachuteTurnLeftOnly"] = 3301913378] = "ParachuteTurnLeftOnly";
  KeyHash2[KeyHash2["ParachuteTurnLr"] = 2395545791] = "ParachuteTurnLr";
  KeyHash2[KeyHash2["ParachuteTurnRightOnly"] = 735814520] = "ParachuteTurnRightOnly";
  KeyHash2[KeyHash2["PcFreeLook"] = 2326399700] = "PcFreeLook";
  KeyHash2[KeyHash2["Phone"] = 1291350480] = "Phone";
  KeyHash2[KeyHash2["PhotoMode"] = 1007304946] = "PhotoMode";
  KeyHash2[KeyHash2["PhotoModeBack"] = 789834906] = "PhotoModeBack";
  KeyHash2[KeyHash2["PhotoModeChangeCamera"] = 2668016284] = "PhotoModeChangeCamera";
  KeyHash2[KeyHash2["PhotoModeContrast"] = 1212117119] = "PhotoModeContrast";
  KeyHash2[KeyHash2["PhotoModeContrastDownOnly"] = 813766176] = "PhotoModeContrastDownOnly";
  KeyHash2[KeyHash2["PhotoModeContrastUpOnly"] = 1563285271] = "PhotoModeContrastUpOnly";
  KeyHash2[KeyHash2["PhotoModeDof"] = 649703018] = "PhotoModeDof";
  KeyHash2[KeyHash2["PhotoModeDofDownOnly"] = 74488305] = "PhotoModeDofDownOnly";
  KeyHash2[KeyHash2["PhotoModeDofUpOnly"] = 2276489536] = "PhotoModeDofUpOnly";
  KeyHash2[KeyHash2["PhotoModeExposureDown"] = 2902959525] = "PhotoModeExposureDown";
  KeyHash2[KeyHash2["PhotoModeExposureLock"] = 2648739185] = "PhotoModeExposureLock";
  KeyHash2[KeyHash2["PhotoModeExposureUp"] = 3327009412] = "PhotoModeExposureUp";
  KeyHash2[KeyHash2["PhotoModeFilterIntensity"] = 4268610400] = "PhotoModeFilterIntensity";
  KeyHash2[KeyHash2["PhotoModeFilterIntensityDown"] = 3007443975] = "PhotoModeFilterIntensityDown";
  KeyHash2[KeyHash2["PhotoModeFilterIntensityUp"] = 579261547] = "PhotoModeFilterIntensityUp";
  KeyHash2[KeyHash2["PhotoModeFilterNext"] = 1772064008] = "PhotoModeFilterNext";
  KeyHash2[KeyHash2["PhotoModeFilterPrev"] = 1331955845] = "PhotoModeFilterPrev";
  KeyHash2[KeyHash2["PhotoModeFocalLength"] = 2288695886] = "PhotoModeFocalLength";
  KeyHash2[KeyHash2["PhotoModeFocalLengthDownOnly"] = 32242365] = "PhotoModeFocalLengthDownOnly";
  KeyHash2[KeyHash2["PhotoModeFocalLengthUpOnly"] = 4210808426] = "PhotoModeFocalLengthUpOnly";
  KeyHash2[KeyHash2["PhotoModeLenseNext"] = 2973292697] = "PhotoModeLenseNext";
  KeyHash2[KeyHash2["PhotoModeLensePrev"] = 111171576] = "PhotoModeLensePrev";
  KeyHash2[KeyHash2["PhotoModeMoveDownOnly"] = 1320993801] = "PhotoModeMoveDownOnly";
  KeyHash2[KeyHash2["PhotoModeMoveLeftOnly"] = 823350251] = "PhotoModeMoveLeftOnly";
  KeyHash2[KeyHash2["PhotoModeMoveLr"] = 1326671122] = "PhotoModeMoveLr";
  KeyHash2[KeyHash2["PhotoModeMoveRightOnly"] = 1398253557] = "PhotoModeMoveRightOnly";
  KeyHash2[KeyHash2["PhotoModeMoveUd"] = 3959427861] = "PhotoModeMoveUd";
  KeyHash2[KeyHash2["PhotoModeMoveUpOnly"] = 828200934] = "PhotoModeMoveUpOnly";
  KeyHash2[KeyHash2["PhotoModePc"] = 898989932] = "PhotoModePc";
  KeyHash2[KeyHash2["PhotoModeReset"] = 2718547287] = "PhotoModeReset";
  KeyHash2[KeyHash2["PhotoModeRotateLeft"] = 787094826] = "PhotoModeRotateLeft";
  KeyHash2[KeyHash2["PhotoModeRotateRight"] = 2531723348] = "PhotoModeRotateRight";
  KeyHash2[KeyHash2["PhotoModeSwitchMode"] = 2402476779] = "PhotoModeSwitchMode";
  KeyHash2[KeyHash2["PhotoModeTakePhoto"] = 2710612679] = "PhotoModeTakePhoto";
  KeyHash2[KeyHash2["PhotoModeToggleHud"] = 2140165621] = "PhotoModeToggleHud";
  KeyHash2[KeyHash2["PhotoModeViewPhotos"] = 3706285415] = "PhotoModeViewPhotos";
  KeyHash2[KeyHash2["PhotoModeZoomIn"] = 1535392713] = "PhotoModeZoomIn";
  KeyHash2[KeyHash2["PhotoModeZoomOut"] = 592761574] = "PhotoModeZoomOut";
  KeyHash2[KeyHash2["Pickup"] = 3862301326] = "Pickup";
  KeyHash2[KeyHash2["PickupCarriable"] = 3945448593] = "PickupCarriable";
  KeyHash2[KeyHash2["PickupCarriableFromParent"] = 2703240315] = "PickupCarriableFromParent";
  KeyHash2[KeyHash2["PickupCarriable2"] = 3196425135] = "PickupCarriable2";
  KeyHash2[KeyHash2["PlaceCarriableOntoParent"] = 2100455761] = "PlaceCarriableOntoParent";
  KeyHash2[KeyHash2["PlayerMenu"] = 2163379861] = "PlayerMenu";
  KeyHash2[KeyHash2["PrevWeapon"] = 3423630759] = "PrevWeapon";
  KeyHash2[KeyHash2["PromptPageNext"] = 2365131421] = "PromptPageNext";
  KeyHash2[KeyHash2["PushToTalk"] = 1271519931] = "PushToTalk";
  KeyHash2[KeyHash2["QuickEquipItem"] = 1618006066] = "QuickEquipItem";
  KeyHash2[KeyHash2["QuickSelectInspect"] = 4036519667] = "QuickSelectInspect";
  KeyHash2[KeyHash2["QuickSelectPutAwayRod"] = 624946185] = "QuickSelectPutAwayRod";
  KeyHash2[KeyHash2["QuickSelectSecondaryNavNext"] = 4047641845] = "QuickSelectSecondaryNavNext";
  KeyHash2[KeyHash2["QuickSelectSecondaryNavPrev"] = 3657035799] = "QuickSelectSecondaryNavPrev";
  KeyHash2[KeyHash2["QuickSelectSetForSwap"] = 3562979407] = "QuickSelectSetForSwap";
  KeyHash2[KeyHash2["QuickSelectToggleShortcutItem"] = 4195035597] = "QuickSelectToggleShortcutItem";
  KeyHash2[KeyHash2["QuickShortcutAbilitiesMenu"] = 2630328740] = "QuickShortcutAbilitiesMenu";
  KeyHash2[KeyHash2["QuickUseItem"] = 3248005013] = "QuickUseItem";
  KeyHash2[KeyHash2["Quit"] = 2391852987] = "Quit";
  KeyHash2[KeyHash2["RadialMenuNavLr"] = 956909788] = "RadialMenuNavLr";
  KeyHash2[KeyHash2["RadialMenuNavUd"] = 3126854559] = "RadialMenuNavUd";
  KeyHash2[KeyHash2["RadialMenuSlotNavNext"] = 3877603768] = "RadialMenuSlotNavNext";
  KeyHash2[KeyHash2["RadialMenuSlotNavNextAlternate"] = 2657784664] = "RadialMenuSlotNavNextAlternate";
  KeyHash2[KeyHash2["RadialMenuSlotNavPrev"] = 2480304703] = "RadialMenuSlotNavPrev";
  KeyHash2[KeyHash2["RadialMenuSlotNavPrevAlternate"] = 3543869630] = "RadialMenuSlotNavPrevAlternate";
  KeyHash2[KeyHash2["RadioWheelLr"] = 4193938376] = "RadioWheelLr";
  KeyHash2[KeyHash2["RadioWheelUd"] = 348596509] = "RadioWheelUd";
  KeyHash2[KeyHash2["RegularRadar"] = 1370126901] = "RegularRadar";
  KeyHash2[KeyHash2["Reload"] = 3809269511] = "Reload";
  KeyHash2[KeyHash2["ReplayActionReplayCancel"] = 2474077358] = "ReplayActionReplayCancel";
  KeyHash2[KeyHash2["ReplayActionReplayStart"] = 3650490631] = "ReplayActionReplayStart";
  KeyHash2[KeyHash2["ReplayAdvance"] = 842703952] = "ReplayAdvance";
  KeyHash2[KeyHash2["ReplayBack"] = 143424724] = "ReplayBack";
  KeyHash2[KeyHash2["ReplayCameradown"] = 2717818410] = "ReplayCameradown";
  KeyHash2[KeyHash2["ReplayCameraup"] = 1956577036] = "ReplayCameraup";
  KeyHash2[KeyHash2["ReplayClipDelete"] = 4134751810] = "ReplayClipDelete";
  KeyHash2[KeyHash2["ReplayCtrl"] = 3633006567] = "ReplayCtrl";
  KeyHash2[KeyHash2["ReplayCyclemarkerleft"] = 1545734489] = "ReplayCyclemarkerleft";
  KeyHash2[KeyHash2["ReplayCyclemarkerright"] = 3332040601] = "ReplayCyclemarkerright";
  KeyHash2[KeyHash2["ReplayEndpoint"] = 1324833725] = "ReplayEndpoint";
  KeyHash2[KeyHash2["ReplayFfwd"] = 1620715496] = "ReplayFfwd";
  KeyHash2[KeyHash2["ReplayFovdecrease"] = 730388225] = "ReplayFovdecrease";
  KeyHash2[KeyHash2["ReplayFovincrease"] = 1495638285] = "ReplayFovincrease";
  KeyHash2[KeyHash2["ReplayHidehud"] = 2118622331] = "ReplayHidehud";
  KeyHash2[KeyHash2["ReplayMarkerDelete"] = 3352479003] = "ReplayMarkerDelete";
  KeyHash2[KeyHash2["ReplayNewmarker"] = 4157004328] = "ReplayNewmarker";
  KeyHash2[KeyHash2["ReplayPause"] = 137443250] = "ReplayPause";
  KeyHash2[KeyHash2["ReplayPreview"] = 1487672149] = "ReplayPreview";
  KeyHash2[KeyHash2["ReplayPreviewAudio"] = 2030182936] = "ReplayPreviewAudio";
  KeyHash2[KeyHash2["ReplayRecord"] = 2912590972] = "ReplayRecord";
  KeyHash2[KeyHash2["ReplayRecordingStart"] = 4247310580] = "ReplayRecordingStart";
  KeyHash2[KeyHash2["ReplayRecordingStop"] = 3675711234] = "ReplayRecordingStop";
  KeyHash2[KeyHash2["ReplayRestart"] = 2176367773] = "ReplayRestart";
  KeyHash2[KeyHash2["ReplayRewind"] = 3241384497] = "ReplayRewind";
  KeyHash2[KeyHash2["ReplaySave"] = 3955623557] = "ReplaySave";
  KeyHash2[KeyHash2["ReplaySaveSnapshot"] = 4025257950] = "ReplaySaveSnapshot";
  KeyHash2[KeyHash2["ReplayScreenshot"] = 1451208500] = "ReplayScreenshot";
  KeyHash2[KeyHash2["ReplayShowhotkey"] = 3953304606] = "ReplayShowhotkey";
  KeyHash2[KeyHash2["ReplayStartStopRecording"] = 3701905294] = "ReplayStartStopRecording";
  KeyHash2[KeyHash2["ReplayStartStopRecordingSecondary"] = 2308024075] = "ReplayStartStopRecordingSecondary";
  KeyHash2[KeyHash2["ReplayStartpoint"] = 1571794127] = "ReplayStartpoint";
  KeyHash2[KeyHash2["ReplayTimelineDuplicateClip"] = 1095147571] = "ReplayTimelineDuplicateClip";
  KeyHash2[KeyHash2["ReplayTimelinePickupClip"] = 3527757712] = "ReplayTimelinePickupClip";
  KeyHash2[KeyHash2["ReplayTimelinePlaceClip"] = 1618112336] = "ReplayTimelinePlaceClip";
  KeyHash2[KeyHash2["ReplayTimelineSave"] = 1708592797] = "ReplayTimelineSave";
  KeyHash2[KeyHash2["ReplayToggleTimeline"] = 4167211273] = "ReplayToggleTimeline";
  KeyHash2[KeyHash2["ReplayToggletime"] = 3824914867] = "ReplayToggletime";
  KeyHash2[KeyHash2["ReplayToggletips"] = 3366051360] = "ReplayToggletips";
  KeyHash2[KeyHash2["ReplayTools"] = 1444557703] = "ReplayTools";
  KeyHash2[KeyHash2["RevealHud"] = 3481947850] = "RevealHud";
  KeyHash2[KeyHash2["Revive"] = 1139971484] = "Revive";
  KeyHash2[KeyHash2["SaddleTransfer"] = 1940454787] = "SaddleTransfer";
  KeyHash2[KeyHash2["SaveReplayClip"] = 1530591715] = "SaveReplayClip";
  KeyHash2[KeyHash2["ScriptLb"] = 3861168226] = "ScriptLb";
  KeyHash2[KeyHash2["ScriptLeftAxisX"] = 529461124] = "ScriptLeftAxisX";
  KeyHash2[KeyHash2["ScriptLeftAxisY"] = 1410914475] = "ScriptLeftAxisY";
  KeyHash2[KeyHash2["ScriptLs"] = 2866661749] = "ScriptLs";
  KeyHash2[KeyHash2["ScriptLt"] = 724650526] = "ScriptLt";
  KeyHash2[KeyHash2["ScriptPadDown"] = 2983875956] = "ScriptPadDown";
  KeyHash2[KeyHash2["ScriptPadLeft"] = 452468126] = "ScriptPadLeft";
  KeyHash2[KeyHash2["ScriptPadRight"] = 2192160600] = "ScriptPadRight";
  KeyHash2[KeyHash2["ScriptPadUp"] = 230775517] = "ScriptPadUp";
  KeyHash2[KeyHash2["ScriptRb"] = 2447975196] = "ScriptRb";
  KeyHash2[KeyHash2["ScriptRdown"] = 932393831] = "ScriptRdown";
  KeyHash2[KeyHash2["ScriptRightAxisX"] = 2797038057] = "ScriptRightAxisX";
  KeyHash2[KeyHash2["ScriptRightAxisY"] = 665185216] = "ScriptRightAxisY";
  KeyHash2[KeyHash2["ScriptRleft"] = 2765816920] = "ScriptRleft";
  KeyHash2[KeyHash2["ScriptRright"] = 581154816] = "ScriptRright";
  KeyHash2[KeyHash2["ScriptRs"] = 3494813666] = "ScriptRs";
  KeyHash2[KeyHash2["ScriptRt"] = 652856599] = "ScriptRt";
  KeyHash2[KeyHash2["ScriptRup"] = 1998417427] = "ScriptRup";
  KeyHash2[KeyHash2["ScriptSelect"] = 3362922761] = "ScriptSelect";
  KeyHash2[KeyHash2["ScriptedFlyLr"] = 4044430922] = "ScriptedFlyLr";
  KeyHash2[KeyHash2["ScriptedFlyUd"] = 2931077598] = "ScriptedFlyUd";
  KeyHash2[KeyHash2["ScriptedFlyZdown"] = 2623406860] = "ScriptedFlyZdown";
  KeyHash2[KeyHash2["ScriptedFlyZup"] = 1671143369] = "ScriptedFlyZup";
  KeyHash2[KeyHash2["SecondarySpecialAbilitySecondary"] = 2166311450] = "SecondarySpecialAbilitySecondary";
  KeyHash2[KeyHash2["SelectCharacterFranklin"] = 2391476427] = "SelectCharacterFranklin";
  KeyHash2[KeyHash2["SelectCharacterMichael"] = 3935459e3] = "SelectCharacterMichael";
  KeyHash2[KeyHash2["SelectCharacterMultiplayer"] = 3753030584] = "SelectCharacterMultiplayer";
  KeyHash2[KeyHash2["SelectCharacterTrevor"] = 2953625747] = "SelectCharacterTrevor";
  KeyHash2[KeyHash2["SelectItemWheel"] = 527275493] = "SelectItemWheel";
  KeyHash2[KeyHash2["SelectNextWeapon"] = 3498323679] = "SelectNextWeapon";
  KeyHash2[KeyHash2["SelectNextWheel"] = 2011525043] = "SelectNextWheel";
  KeyHash2[KeyHash2["SelectPrevWeapon"] = 4153242423] = "SelectPrevWeapon";
  KeyHash2[KeyHash2["SelectQuickselectDualwield"] = 484891115] = "SelectQuickselectDualwield";
  KeyHash2[KeyHash2["SelectQuickselectMeleeNoUnarmed"] = 2875386263] = "SelectQuickselectMeleeNoUnarmed";
  KeyHash2[KeyHash2["SelectQuickselectPrimaryLongarm"] = 1110987810] = "SelectQuickselectPrimaryLongarm";
  KeyHash2[KeyHash2["SelectQuickselectSecondaryLongarm"] = 2717770406] = "SelectQuickselectSecondaryLongarm";
  KeyHash2[KeyHash2["SelectQuickselectSidearmsLeft"] = 3874886372] = "SelectQuickselectSidearmsLeft";
  KeyHash2[KeyHash2["SelectQuickselectSidearmsRight"] = 1330236492] = "SelectQuickselectSidearmsRight";
  KeyHash2[KeyHash2["SelectQuickselectThrown"] = 2956628283] = "SelectQuickselectThrown";
  KeyHash2[KeyHash2["SelectQuickselectUnarmed"] = 2409602648] = "SelectQuickselectUnarmed";
  KeyHash2[KeyHash2["SelectRadarMode"] = 255439828] = "SelectRadarMode";
  KeyHash2[KeyHash2["SelectWeaponAutoRifle"] = 99527120] = "SelectWeaponAutoRifle";
  KeyHash2[KeyHash2["SelectWeaponHandgun"] = 407462115] = "SelectWeaponHandgun";
  KeyHash2[KeyHash2["SelectWeaponHeavy"] = 1024882115] = "SelectWeaponHeavy";
  KeyHash2[KeyHash2["SelectWeaponMelee"] = 278816850] = "SelectWeaponMelee";
  KeyHash2[KeyHash2["SelectWeaponShotgun"] = 1993599493] = "SelectWeaponShotgun";
  KeyHash2[KeyHash2["SelectWeaponSmg"] = 3471948616] = "SelectWeaponSmg";
  KeyHash2[KeyHash2["SelectWeaponSniper"] = 2529566687] = "SelectWeaponSniper";
  KeyHash2[KeyHash2["SelectWeaponSpecial"] = 3290353400] = "SelectWeaponSpecial";
  KeyHash2[KeyHash2["SelectWeaponUnarmed"] = 527362831] = "SelectWeaponUnarmed";
  KeyHash2[KeyHash2["ShopBounty"] = 3555522607] = "ShopBounty";
  KeyHash2[KeyHash2["ShopBuy"] = 3757576953] = "ShopBuy";
  KeyHash2[KeyHash2["ShopChangeCurrency"] = 2432309675] = "ShopChangeCurrency";
  KeyHash2[KeyHash2["ShopInspect"] = 1584545164] = "ShopInspect";
  KeyHash2[KeyHash2["ShopSell"] = 1829968318] = "ShopSell";
  KeyHash2[KeyHash2["ShopSpecial"] = 3927248498] = "ShopSpecial";
  KeyHash2[KeyHash2["SimpleRadar"] = 1609505645] = "SimpleRadar";
  KeyHash2[KeyHash2["SkipCutscene"] = 3452232937] = "SkipCutscene";
  KeyHash2[KeyHash2["SniperZoom"] = 2059168358] = "SniperZoom";
  KeyHash2[KeyHash2["SniperZoomIn"] = 3830876833] = "SniperZoomIn";
  KeyHash2[KeyHash2["SniperZoomInAlternate"] = 983078849] = "SniperZoomInAlternate";
  KeyHash2[KeyHash2["SniperZoomInOnly"] = 2780679484] = "SniperZoomInOnly";
  KeyHash2[KeyHash2["SniperZoomInSecondary"] = 1810481671] = "SniperZoomInSecondary";
  KeyHash2[KeyHash2["SniperZoomOut"] = 3826049950] = "SniperZoomOut";
  KeyHash2[KeyHash2["SniperZoomOutAlternate"] = 3162637449] = "SniperZoomOutAlternate";
  KeyHash2[KeyHash2["SniperZoomOutOnly"] = 1124438954] = "SniperZoomOutOnly";
  KeyHash2[KeyHash2["SniperZoomOutSecondary"] = 2323351603] = "SniperZoomOutSecondary";
  KeyHash2[KeyHash2["SpecialAbility"] = 3470863184] = "SpecialAbility";
  KeyHash2[KeyHash2["SpecialAbilityAction"] = 516589524] = "SpecialAbilityAction";
  KeyHash2[KeyHash2["SpecialAbilityPc"] = 1390807691] = "SpecialAbilityPc";
  KeyHash2[KeyHash2["SpecialAbilitySecondary"] = 1663574939] = "SpecialAbilitySecondary";
  KeyHash2[KeyHash2["Sprint"] = 2415687126] = "Sprint";
  KeyHash2[KeyHash2["StealGeneric"] = 1187312502] = "StealGeneric";
  KeyHash2[KeyHash2["StickyFeedAccept"] = 4108143719] = "StickyFeedAccept";
  KeyHash2[KeyHash2["StickyFeedCancel"] = 217814591] = "StickyFeedCancel";
  KeyHash2[KeyHash2["StickyFeedX"] = 3172832417] = "StickyFeedX";
  KeyHash2[KeyHash2["StickyFeedY"] = 3361450781] = "StickyFeedY";
  KeyHash2[KeyHash2["StopLeadingAnimal"] = 2031395805] = "StopLeadingAnimal";
  KeyHash2[KeyHash2["Surrender"] = 3683477944] = "Surrender";
  KeyHash2[KeyHash2["SwitchFiringMode"] = 4006698776] = "SwitchFiringMode";
  KeyHash2[KeyHash2["SwitchShoulder"] = 2189336296] = "SwitchShoulder";
  KeyHash2[KeyHash2["Sy"] = 3850483206] = "Sy";
  KeyHash2[KeyHash2["TakeGeneric"] = 1436730387] = "TakeGeneric";
  KeyHash2[KeyHash2["Talk"] = 2110430325] = "Talk";
  KeyHash2[KeyHash2["TextChatChannelAll"] = 3224549060] = "TextChatChannelAll";
  KeyHash2[KeyHash2["TextChatChannelTeam"] = 3995922755] = "TextChatChannelTeam";
  KeyHash2[KeyHash2["ThrowGrenade"] = 184129944] = "ThrowGrenade";
  KeyHash2[KeyHash2["TithingDecreaseAmount"] = 3472841747] = "TithingDecreaseAmount";
  KeyHash2[KeyHash2["TithingIncreaseAmount"] = 619936437] = "TithingIncreaseAmount";
  KeyHash2[KeyHash2["ToggleHolster"] = 2990079499] = "ToggleHolster";
  KeyHash2[KeyHash2["ToggleWeaponScope"] = 813099388] = "ToggleWeaponScope";
  KeyHash2[KeyHash2["TwirlPistol"] = 2475507825] = "TwirlPistol";
  KeyHash2[KeyHash2["VehAccelerate"] = 1537201378] = "VehAccelerate";
  KeyHash2[KeyHash2["VehAim"] = 3620404463] = "VehAim";
  KeyHash2[KeyHash2["VehAttack"] = 4096983096] = "VehAttack";
  KeyHash2[KeyHash2["VehAttack2"] = 4056105402] = "VehAttack2";
  KeyHash2[KeyHash2["VehBoatAccelerate"] = 3007440914] = "VehBoatAccelerate";
  KeyHash2[KeyHash2["VehBoatAim"] = 2465591326] = "VehBoatAim";
  KeyHash2[KeyHash2["VehBoatAttack"] = 1751579194] = "VehBoatAttack";
  KeyHash2[KeyHash2["VehBoatAttack2"] = 2271254249] = "VehBoatAttack2";
  KeyHash2[KeyHash2["VehBoatBrake"] = 1116561209] = "VehBoatBrake";
  KeyHash2[KeyHash2["VehBoatTurnLeftOnly"] = 1542290577] = "VehBoatTurnLeftOnly";
  KeyHash2[KeyHash2["VehBoatTurnLr"] = 3638545075] = "VehBoatTurnLr";
  KeyHash2[KeyHash2["VehBoatTurnRightOnly"] = 4185394683] = "VehBoatTurnRightOnly";
  KeyHash2[KeyHash2["VehBrake"] = 1847550875] = "VehBrake";
  KeyHash2[KeyHash2["VehCarAccelerate"] = 3119858864] = "VehCarAccelerate";
  KeyHash2[KeyHash2["VehCarAim"] = 1735899200] = "VehCarAim";
  KeyHash2[KeyHash2["VehCarAttack"] = 1433596806] = "VehCarAttack";
  KeyHash2[KeyHash2["VehCarAttack2"] = 1534474967] = "VehCarAttack2";
  KeyHash2[KeyHash2["VehCarBrake"] = 3515382591] = "VehCarBrake";
  KeyHash2[KeyHash2["VehCarTurnLeftOnly"] = 131163468] = "VehCarTurnLeftOnly";
  KeyHash2[KeyHash2["VehCarTurnLr"] = 1003720003] = "VehCarTurnLr";
  KeyHash2[KeyHash2["VehCarTurnRightOnly"] = 1849439817] = "VehCarTurnRightOnly";
  KeyHash2[KeyHash2["VehDraftAccelerate"] = 3919391493] = "VehDraftAccelerate";
  KeyHash2[KeyHash2["VehDraftAim"] = 3184886541] = "VehDraftAim";
  KeyHash2[KeyHash2["VehDraftAttack"] = 4094341528] = "VehDraftAttack";
  KeyHash2[KeyHash2["VehDraftAttack2"] = 2288980701] = "VehDraftAttack2";
  KeyHash2[KeyHash2["VehDraftBrake"] = 3595101325] = "VehDraftBrake";
  KeyHash2[KeyHash2["VehDraftMoveDownOnly"] = 625557171] = "VehDraftMoveDownOnly";
  KeyHash2[KeyHash2["VehDraftMoveUd"] = 593059050] = "VehDraftMoveUd";
  KeyHash2[KeyHash2["VehDraftMoveUpOnly"] = 698737950] = "VehDraftMoveUpOnly";
  KeyHash2[KeyHash2["VehDraftSwitchDrivers"] = 1891137604] = "VehDraftSwitchDrivers";
  KeyHash2[KeyHash2["VehDraftTurnLeftOnly"] = 428538980] = "VehDraftTurnLeftOnly";
  KeyHash2[KeyHash2["VehDraftTurnLr"] = 2816454282] = "VehDraftTurnLr";
  KeyHash2[KeyHash2["VehDraftTurnRightOnly"] = 1580670631] = "VehDraftTurnRightOnly";
  KeyHash2[KeyHash2["VehDriveLook"] = 2719055002] = "VehDriveLook";
  KeyHash2[KeyHash2["VehDriveLook2"] = 1437336805] = "VehDriveLook2";
  KeyHash2[KeyHash2["VehDropProjectile"] = 3323335142] = "VehDropProjectile";
  KeyHash2[KeyHash2["VehDuck"] = 1530302706] = "VehDuck";
  KeyHash2[KeyHash2["VehExit"] = 4277844404] = "VehExit";
  KeyHash2[KeyHash2["VehFlyAttack"] = 494000042] = "VehFlyAttack";
  KeyHash2[KeyHash2["VehFlyAttackCamera"] = 800734987] = "VehFlyAttackCamera";
  KeyHash2[KeyHash2["VehFlyAttack2"] = 1300436092] = "VehFlyAttack2";
  KeyHash2[KeyHash2["VehFlyDuck"] = 931795191] = "VehFlyDuck";
  KeyHash2[KeyHash2["VehFlyMouseControlOverride"] = 1821905061] = "VehFlyMouseControlOverride";
  KeyHash2[KeyHash2["VehFlyPitchDownOnly"] = 256784031] = "VehFlyPitchDownOnly";
  KeyHash2[KeyHash2["VehFlyPitchUd"] = 3867024983] = "VehFlyPitchUd";
  KeyHash2[KeyHash2["VehFlyPitchUpOnly"] = 1652603418] = "VehFlyPitchUpOnly";
  KeyHash2[KeyHash2["VehFlyRollLeftOnly"] = 1459113632] = "VehFlyRollLeftOnly";
  KeyHash2[KeyHash2["VehFlyRollLr"] = 1015723376] = "VehFlyRollLr";
  KeyHash2[KeyHash2["VehFlyRollRightOnly"] = 2271949665] = "VehFlyRollRightOnly";
  KeyHash2[KeyHash2["VehFlySelectNextWeapon"] = 619266713] = "VehFlySelectNextWeapon";
  KeyHash2[KeyHash2["VehFlySelectPrevWeapon"] = 3235411173] = "VehFlySelectPrevWeapon";
  KeyHash2[KeyHash2["VehFlySelectTargetLeft"] = 813679809] = "VehFlySelectTargetLeft";
  KeyHash2[KeyHash2["VehFlySelectTargetRight"] = 1391615126] = "VehFlySelectTargetRight";
  KeyHash2[KeyHash2["VehFlyThrottleDown"] = 139329429] = "VehFlyThrottleDown";
  KeyHash2[KeyHash2["VehFlyThrottleUp"] = 1915927219] = "VehFlyThrottleUp";
  KeyHash2[KeyHash2["VehFlyUndercarriage"] = 4262454552] = "VehFlyUndercarriage";
  KeyHash2[KeyHash2["VehFlyVerticalFlightMode"] = 3810754601] = "VehFlyVerticalFlightMode";
  KeyHash2[KeyHash2["VehFlyYawLeft"] = 827890385] = "VehFlyYawLeft";
  KeyHash2[KeyHash2["VehFlyYawRight"] = 3172220870] = "VehFlyYawRight";
  KeyHash2[KeyHash2["VehGrapplingHook"] = 3112544862] = "VehGrapplingHook";
  KeyHash2[KeyHash2["VehGunLr"] = 3069437182] = "VehGunLr";
  KeyHash2[KeyHash2["VehGunUd"] = 1210409198] = "VehGunUd";
  KeyHash2[KeyHash2["VehHandbrake"] = 1708280984] = "VehHandbrake";
  KeyHash2[KeyHash2["VehHandbrakeAlt"] = 3462828013] = "VehHandbrakeAlt";
  KeyHash2[KeyHash2["VehHandcartAccelerate"] = 4281739004] = "VehHandcartAccelerate";
  KeyHash2[KeyHash2["VehHandcartBrake"] = 762959882] = "VehHandcartBrake";
  KeyHash2[KeyHash2["VehHeadlight"] = 4046460518] = "VehHeadlight";
  KeyHash2[KeyHash2["VehHorn"] = 1671483992] = "VehHorn";
  KeyHash2[KeyHash2["VehJump"] = 2857810214] = "VehJump";
  KeyHash2[KeyHash2["VehLookBehind"] = 3404312599] = "VehLookBehind";
  KeyHash2[KeyHash2["VehMouseControlOverride"] = 969714645] = "VehMouseControlOverride";
  KeyHash2[KeyHash2["VehMoveDownOnly"] = 383204893] = "VehMoveDownOnly";
  KeyHash2[KeyHash2["VehMoveLeftOnly"] = 2650097414] = "VehMoveLeftOnly";
  KeyHash2[KeyHash2["VehMoveLr"] = 4058154284] = "VehMoveLr";
  KeyHash2[KeyHash2["VehMoveRightOnly"] = 2544434584] = "VehMoveRightOnly";
  KeyHash2[KeyHash2["VehMoveUd"] = 2323759116] = "VehMoveUd";
  KeyHash2[KeyHash2["VehMoveUpOnly"] = 3736960758] = "VehMoveUpOnly";
  KeyHash2[KeyHash2["VehNextRadio"] = 585168871] = "VehNextRadio";
  KeyHash2[KeyHash2["VehNextRadioTrack"] = 4160368092] = "VehNextRadioTrack";
  KeyHash2[KeyHash2["VehPassengerAim"] = 3995600080] = "VehPassengerAim";
  KeyHash2[KeyHash2["VehPassengerAttack"] = 665666611] = "VehPassengerAttack";
  KeyHash2[KeyHash2["VehPrevRadio"] = 2542128659] = "VehPrevRadio";
  KeyHash2[KeyHash2["VehPrevRadioTrack"] = 177521919] = "VehPrevRadioTrack";
  KeyHash2[KeyHash2["VehPushbikeFrontBrake"] = 1482593325] = "VehPushbikeFrontBrake";
  KeyHash2[KeyHash2["VehPushbikePedal"] = 4253901991] = "VehPushbikePedal";
  KeyHash2[KeyHash2["VehPushbikeRearBrake"] = 4174098357] = "VehPushbikeRearBrake";
  KeyHash2[KeyHash2["VehPushbikeSprint"] = 4030652753] = "VehPushbikeSprint";
  KeyHash2[KeyHash2["VehRadioWheel"] = 1226157066] = "VehRadioWheel";
  KeyHash2[KeyHash2["VehRoof"] = 1048377764] = "VehRoof";
  KeyHash2[KeyHash2["VehSelectNextWeapon"] = 2291819119] = "VehSelectNextWeapon";
  KeyHash2[KeyHash2["VehSelectPrevWeapon"] = 211270343] = "VehSelectPrevWeapon";
  KeyHash2[KeyHash2["VehShuffle"] = 3339204504] = "VehShuffle";
  KeyHash2[KeyHash2["VehSlowmoDownOnly"] = 1680728148] = "VehSlowmoDownOnly";
  KeyHash2[KeyHash2["VehSlowmoUd"] = 4059680038] = "VehSlowmoUd";
  KeyHash2[KeyHash2["VehSlowmoUpOnly"] = 731389775] = "VehSlowmoUpOnly";
  KeyHash2[KeyHash2["VehSpecial"] = 1228478939] = "VehSpecial";
  KeyHash2[KeyHash2["VehSpecialAbilityFranklin"] = 1589851512] = "VehSpecialAbilityFranklin";
  KeyHash2[KeyHash2["VehStuntUd"] = 1252087310] = "VehStuntUd";
  KeyHash2[KeyHash2["VehSubAscend"] = 3617136500] = "VehSubAscend";
  KeyHash2[KeyHash2["VehSubDescend"] = 2102517284] = "VehSubDescend";
  KeyHash2[KeyHash2["VehSubMouseControlOverride"] = 749679230] = "VehSubMouseControlOverride";
  KeyHash2[KeyHash2["VehSubPitchDownOnly"] = 3123520170] = "VehSubPitchDownOnly";
  KeyHash2[KeyHash2["VehSubPitchUd"] = 1184686705] = "VehSubPitchUd";
  KeyHash2[KeyHash2["VehSubPitchUpOnly"] = 4193191722] = "VehSubPitchUpOnly";
  KeyHash2[KeyHash2["VehSubThrottleDown"] = 4122136315] = "VehSubThrottleDown";
  KeyHash2[KeyHash2["VehSubThrottleUp"] = 3532407919] = "VehSubThrottleUp";
  KeyHash2[KeyHash2["VehSubTurnHardLeft"] = 1679904073] = "VehSubTurnHardLeft";
  KeyHash2[KeyHash2["VehSubTurnHardRight"] = 2756448131] = "VehSubTurnHardRight";
  KeyHash2[KeyHash2["VehSubTurnLeftOnly"] = 1156046995] = "VehSubTurnLeftOnly";
  KeyHash2[KeyHash2["VehSubTurnLr"] = 1652311577] = "VehSubTurnLr";
  KeyHash2[KeyHash2["VehSubTurnRightOnly"] = 3884603964] = "VehSubTurnRightOnly";
  KeyHash2[KeyHash2["VehTraversal"] = 1939694177] = "VehTraversal";
  KeyHash2[KeyHash2["WeaponInspectZoom"] = 3306247227] = "WeaponInspectZoom";
  KeyHash2[KeyHash2["WeaponSpecial"] = 1933115891] = "WeaponSpecial";
  KeyHash2[KeyHash2["WeaponSpecialTwo"] = 1354373751] = "WeaponSpecialTwo";
  KeyHash2[KeyHash2["Whistle"] = 613911080] = "Whistle";
  KeyHash2[KeyHash2["WhistleHorseback"] = 3890975109] = "WhistleHorseback";
  return KeyHash2;
})(KeyHash || {});

// src/redm/enums/RawKeys.ts
var RawKeys = /* @__PURE__ */ ((RawKeys2) => {
  RawKeys2[RawKeys2["LeftMouseBtn"] = 1] = "LeftMouseBtn";
  RawKeys2[RawKeys2["RightMouseBtn"] = 2] = "RightMouseBtn";
  RawKeys2[RawKeys2["CtrlBrkPrcs"] = 3] = "CtrlBrkPrcs";
  RawKeys2[RawKeys2["MidMouseBtn"] = 4] = "MidMouseBtn";
  RawKeys2[RawKeys2["ThumbForward"] = 5] = "ThumbForward";
  RawKeys2[RawKeys2["ThumbBack"] = 6] = "ThumbBack";
  RawKeys2[RawKeys2["BackSpace"] = 8] = "BackSpace";
  RawKeys2[RawKeys2["Tab"] = 9] = "Tab";
  RawKeys2[RawKeys2["Clear"] = 12] = "Clear";
  RawKeys2[RawKeys2["Enter"] = 13] = "Enter";
  RawKeys2[RawKeys2["Shift"] = 16] = "Shift";
  RawKeys2[RawKeys2["Control"] = 17] = "Control";
  RawKeys2[RawKeys2["Alt"] = 18] = "Alt";
  RawKeys2[RawKeys2["Pause"] = 19] = "Pause";
  RawKeys2[RawKeys2["CapsLock"] = 20] = "CapsLock";
  RawKeys2[RawKeys2["Kana"] = 21] = "Kana";
  RawKeys2[RawKeys2["Hangeul"] = 21] = "Hangeul";
  RawKeys2[RawKeys2["Hangul"] = 21] = "Hangul";
  RawKeys2[RawKeys2["Junju"] = 23] = "Junju";
  RawKeys2[RawKeys2["Final"] = 24] = "Final";
  RawKeys2[RawKeys2["Hanja"] = 25] = "Hanja";
  RawKeys2[RawKeys2["Kanji"] = 25] = "Kanji";
  RawKeys2[RawKeys2["Escape"] = 27] = "Escape";
  RawKeys2[RawKeys2["Convert"] = 28] = "Convert";
  RawKeys2[RawKeys2["NonConvert"] = 29] = "NonConvert";
  RawKeys2[RawKeys2["Accept"] = 30] = "Accept";
  RawKeys2[RawKeys2["ModeChange"] = 31] = "ModeChange";
  RawKeys2[RawKeys2["Space"] = 32] = "Space";
  RawKeys2[RawKeys2["PageUp"] = 33] = "PageUp";
  RawKeys2[RawKeys2["PageDown"] = 34] = "PageDown";
  RawKeys2[RawKeys2["End"] = 35] = "End";
  RawKeys2[RawKeys2["Home"] = 36] = "Home";
  RawKeys2[RawKeys2["LeftArrow"] = 37] = "LeftArrow";
  RawKeys2[RawKeys2["UpArrow"] = 38] = "UpArrow";
  RawKeys2[RawKeys2["RightArrow"] = 39] = "RightArrow";
  RawKeys2[RawKeys2["DownArrow"] = 40] = "DownArrow";
  RawKeys2[RawKeys2["Select"] = 41] = "Select";
  RawKeys2[RawKeys2["Print"] = 42] = "Print";
  RawKeys2[RawKeys2["Execute"] = 43] = "Execute";
  RawKeys2[RawKeys2["PrintScreen"] = 44] = "PrintScreen";
  RawKeys2[RawKeys2["Inser"] = 45] = "Inser";
  RawKeys2[RawKeys2["Delete"] = 46] = "Delete";
  RawKeys2[RawKeys2["Help"] = 47] = "Help";
  RawKeys2[RawKeys2["Num0"] = 48] = "Num0";
  RawKeys2[RawKeys2["Num1"] = 49] = "Num1";
  RawKeys2[RawKeys2["Num2"] = 50] = "Num2";
  RawKeys2[RawKeys2["Num3"] = 51] = "Num3";
  RawKeys2[RawKeys2["Num4"] = 52] = "Num4";
  RawKeys2[RawKeys2["Num5"] = 53] = "Num5";
  RawKeys2[RawKeys2["Num6"] = 54] = "Num6";
  RawKeys2[RawKeys2["Num7"] = 55] = "Num7";
  RawKeys2[RawKeys2["Num8"] = 56] = "Num8";
  RawKeys2[RawKeys2["Num9"] = 57] = "Num9";
  RawKeys2[RawKeys2["A"] = 65] = "A";
  RawKeys2[RawKeys2["B"] = 66] = "B";
  RawKeys2[RawKeys2["C"] = 67] = "C";
  RawKeys2[RawKeys2["D"] = 68] = "D";
  RawKeys2[RawKeys2["E"] = 69] = "E";
  RawKeys2[RawKeys2["F"] = 70] = "F";
  RawKeys2[RawKeys2["G"] = 71] = "G";
  RawKeys2[RawKeys2["H"] = 72] = "H";
  RawKeys2[RawKeys2["I"] = 73] = "I";
  RawKeys2[RawKeys2["J"] = 74] = "J";
  RawKeys2[RawKeys2["K"] = 75] = "K";
  RawKeys2[RawKeys2["L"] = 76] = "L";
  RawKeys2[RawKeys2["M"] = 77] = "M";
  RawKeys2[RawKeys2["N"] = 78] = "N";
  RawKeys2[RawKeys2["O"] = 79] = "O";
  RawKeys2[RawKeys2["P"] = 80] = "P";
  RawKeys2[RawKeys2["Q"] = 81] = "Q";
  RawKeys2[RawKeys2["R"] = 82] = "R";
  RawKeys2[RawKeys2["S"] = 83] = "S";
  RawKeys2[RawKeys2["T"] = 84] = "T";
  RawKeys2[RawKeys2["U"] = 85] = "U";
  RawKeys2[RawKeys2["V"] = 86] = "V";
  RawKeys2[RawKeys2["W"] = 87] = "W";
  RawKeys2[RawKeys2["X"] = 88] = "X";
  RawKeys2[RawKeys2["Y"] = 89] = "Y";
  RawKeys2[RawKeys2["Z"] = 90] = "Z";
  RawKeys2[RawKeys2["LeftWin"] = 91] = "LeftWin";
  RawKeys2[RawKeys2["RightWin"] = 92] = "RightWin";
  RawKeys2[RawKeys2["Apps"] = 93] = "Apps";
  RawKeys2[RawKeys2["Sleep"] = 95] = "Sleep";
  RawKeys2[RawKeys2["Numpad0"] = 96] = "Numpad0";
  RawKeys2[RawKeys2["Numpad1"] = 97] = "Numpad1";
  RawKeys2[RawKeys2["Numpad2"] = 98] = "Numpad2";
  RawKeys2[RawKeys2["Numpad3"] = 99] = "Numpad3";
  RawKeys2[RawKeys2["Numpad4"] = 100] = "Numpad4";
  RawKeys2[RawKeys2["Numpad5"] = 101] = "Numpad5";
  RawKeys2[RawKeys2["Numpad6"] = 102] = "Numpad6";
  RawKeys2[RawKeys2["Numpad7"] = 103] = "Numpad7";
  RawKeys2[RawKeys2["Numpad8"] = 104] = "Numpad8";
  RawKeys2[RawKeys2["Numpad9"] = 105] = "Numpad9";
  RawKeys2[RawKeys2["Multiply"] = 106] = "Multiply";
  RawKeys2[RawKeys2["Add"] = 107] = "Add";
  RawKeys2[RawKeys2["Separator"] = 108] = "Separator";
  RawKeys2[RawKeys2["Subtract"] = 109] = "Subtract";
  RawKeys2[RawKeys2["Decimal"] = 110] = "Decimal";
  RawKeys2[RawKeys2["Divide"] = 111] = "Divide";
  RawKeys2[RawKeys2["F1"] = 112] = "F1";
  RawKeys2[RawKeys2["F2"] = 113] = "F2";
  RawKeys2[RawKeys2["F3"] = 114] = "F3";
  RawKeys2[RawKeys2["F4"] = 115] = "F4";
  RawKeys2[RawKeys2["F5"] = 116] = "F5";
  RawKeys2[RawKeys2["F6"] = 117] = "F6";
  RawKeys2[RawKeys2["F7"] = 118] = "F7";
  RawKeys2[RawKeys2["F8"] = 119] = "F8";
  RawKeys2[RawKeys2["F9"] = 120] = "F9";
  RawKeys2[RawKeys2["F10"] = 121] = "F10";
  RawKeys2[RawKeys2["F11"] = 122] = "F11";
  RawKeys2[RawKeys2["F12"] = 123] = "F12";
  RawKeys2[RawKeys2["F13"] = 124] = "F13";
  RawKeys2[RawKeys2["F14"] = 125] = "F14";
  RawKeys2[RawKeys2["F15"] = 126] = "F15";
  RawKeys2[RawKeys2["F16"] = 127] = "F16";
  RawKeys2[RawKeys2["F17"] = 128] = "F17";
  RawKeys2[RawKeys2["F18"] = 129] = "F18";
  RawKeys2[RawKeys2["F19"] = 130] = "F19";
  RawKeys2[RawKeys2["F20"] = 131] = "F20";
  RawKeys2[RawKeys2["F21"] = 132] = "F21";
  RawKeys2[RawKeys2["F22"] = 133] = "F22";
  RawKeys2[RawKeys2["F23"] = 134] = "F23";
  RawKeys2[RawKeys2["F24"] = 135] = "F24";
  RawKeys2[RawKeys2["NavigationView"] = 136] = "NavigationView";
  RawKeys2[RawKeys2["NavigationMenu"] = 137] = "NavigationMenu";
  RawKeys2[RawKeys2["NavigationUp"] = 138] = "NavigationUp";
  RawKeys2[RawKeys2["NavigationDown"] = 139] = "NavigationDown";
  RawKeys2[RawKeys2["NavigationLeft"] = 140] = "NavigationLeft";
  RawKeys2[RawKeys2["NavigationRight"] = 141] = "NavigationRight";
  RawKeys2[RawKeys2["NavigationAccept"] = 142] = "NavigationAccept";
  RawKeys2[RawKeys2["NavigationCancel"] = 143] = "NavigationCancel";
  RawKeys2[RawKeys2["NumLock"] = 144] = "NumLock";
  RawKeys2[RawKeys2["ScrollLock"] = 145] = "ScrollLock";
  RawKeys2[RawKeys2["NumpadEqual"] = 146] = "NumpadEqual";
  RawKeys2[RawKeys2["FJ_Jisho"] = 146] = "FJ_Jisho";
  RawKeys2[RawKeys2["FJ_Masshou"] = 147] = "FJ_Masshou";
  RawKeys2[RawKeys2["FJ_Touroku"] = 148] = "FJ_Touroku";
  RawKeys2[RawKeys2["FJ_Loya"] = 149] = "FJ_Loya";
  RawKeys2[RawKeys2["FJ_Roya"] = 150] = "FJ_Roya";
  RawKeys2[RawKeys2["LeftShift"] = 160] = "LeftShift";
  RawKeys2[RawKeys2["RightShift"] = 161] = "RightShift";
  RawKeys2[RawKeys2["LeftCtrl"] = 162] = "LeftCtrl";
  RawKeys2[RawKeys2["RightCtrl"] = 163] = "RightCtrl";
  RawKeys2[RawKeys2["LeftMenu"] = 164] = "LeftMenu";
  RawKeys2[RawKeys2["RightMenu"] = 165] = "RightMenu";
  RawKeys2[RawKeys2["BrowserBack"] = 166] = "BrowserBack";
  RawKeys2[RawKeys2["BrowserForward"] = 167] = "BrowserForward";
  RawKeys2[RawKeys2["BrowserRefresh"] = 168] = "BrowserRefresh";
  RawKeys2[RawKeys2["BrowserStop"] = 169] = "BrowserStop";
  RawKeys2[RawKeys2["BrowserSearch"] = 170] = "BrowserSearch";
  RawKeys2[RawKeys2["BrowserFavorites"] = 171] = "BrowserFavorites";
  RawKeys2[RawKeys2["BrowserHome"] = 172] = "BrowserHome";
  RawKeys2[RawKeys2["VolumeMute"] = 173] = "VolumeMute";
  RawKeys2[RawKeys2["VolumeDown"] = 174] = "VolumeDown";
  RawKeys2[RawKeys2["VolumeUp"] = 175] = "VolumeUp";
  RawKeys2[RawKeys2["NextTrack"] = 176] = "NextTrack";
  RawKeys2[RawKeys2["PrevTrack"] = 177] = "PrevTrack";
  RawKeys2[RawKeys2["Stop"] = 178] = "Stop";
  RawKeys2[RawKeys2["PlayPause"] = 179] = "PlayPause";
  RawKeys2[RawKeys2["Mail"] = 180] = "Mail";
  RawKeys2[RawKeys2["MediaSelect"] = 181] = "MediaSelect";
  RawKeys2[RawKeys2["App1"] = 182] = "App1";
  RawKeys2[RawKeys2["App2"] = 183] = "App2";
  RawKeys2[RawKeys2["OEM1"] = 186] = "OEM1";
  RawKeys2[RawKeys2["Plus"] = 187] = "Plus";
  RawKeys2[RawKeys2["Comma"] = 188] = "Comma";
  RawKeys2[RawKeys2["Minus"] = 189] = "Minus";
  RawKeys2[RawKeys2["Period"] = 190] = "Period";
  RawKeys2[RawKeys2["OEM2"] = 191] = "OEM2";
  RawKeys2[RawKeys2["OEM3"] = 192] = "OEM3";
  RawKeys2[RawKeys2["Gamepad_A"] = 195] = "Gamepad_A";
  RawKeys2[RawKeys2["Gamepad_B"] = 196] = "Gamepad_B";
  RawKeys2[RawKeys2["Gamepad_X"] = 197] = "Gamepad_X";
  RawKeys2[RawKeys2["Gamepad_Y"] = 198] = "Gamepad_Y";
  RawKeys2[RawKeys2["GamepadRightBumper"] = 199] = "GamepadRightBumper";
  RawKeys2[RawKeys2["GamepadLeftBumper"] = 200] = "GamepadLeftBumper";
  RawKeys2[RawKeys2["GamepadLeftTrigger"] = 201] = "GamepadLeftTrigger";
  RawKeys2[RawKeys2["GamepadRightTrigger"] = 202] = "GamepadRightTrigger";
  RawKeys2[RawKeys2["GamepadDPadUp"] = 203] = "GamepadDPadUp";
  RawKeys2[RawKeys2["GamepadDPadDown"] = 204] = "GamepadDPadDown";
  RawKeys2[RawKeys2["GamepadDPadLeft"] = 205] = "GamepadDPadLeft";
  RawKeys2[RawKeys2["GamepadDPadRight"] = 206] = "GamepadDPadRight";
  RawKeys2[RawKeys2["GamepadMenu"] = 207] = "GamepadMenu";
  RawKeys2[RawKeys2["GamepadView"] = 208] = "GamepadView";
  RawKeys2[RawKeys2["GamepadLeftStickBtn"] = 209] = "GamepadLeftStickBtn";
  RawKeys2[RawKeys2["GamepadRightStickBtn"] = 210] = "GamepadRightStickBtn";
  RawKeys2[RawKeys2["GamepadLeftStickUp"] = 211] = "GamepadLeftStickUp";
  RawKeys2[RawKeys2["GamepadLeftStickDown"] = 212] = "GamepadLeftStickDown";
  RawKeys2[RawKeys2["GamepadLeftStickRight"] = 213] = "GamepadLeftStickRight";
  RawKeys2[RawKeys2["GamepadLeftStickLeft"] = 214] = "GamepadLeftStickLeft";
  RawKeys2[RawKeys2["GamepadRightStickUp"] = 215] = "GamepadRightStickUp";
  RawKeys2[RawKeys2["GamepadRightStickDown"] = 216] = "GamepadRightStickDown";
  RawKeys2[RawKeys2["GamepadRightStickRight"] = 217] = "GamepadRightStickRight";
  RawKeys2[RawKeys2["GamepadRightStickLeft"] = 218] = "GamepadRightStickLeft";
  RawKeys2[RawKeys2["OEM4"] = 219] = "OEM4";
  RawKeys2[RawKeys2["OEM5"] = 220] = "OEM5";
  RawKeys2[RawKeys2["OEM6"] = 221] = "OEM6";
  RawKeys2[RawKeys2["OEM7"] = 222] = "OEM7";
  RawKeys2[RawKeys2["OEM8"] = 223] = "OEM8";
  RawKeys2[RawKeys2["OEMAX"] = 225] = "OEMAX";
  RawKeys2[RawKeys2["OEM102"] = 226] = "OEM102";
  RawKeys2[RawKeys2["ICOHelp"] = 227] = "ICOHelp";
  RawKeys2[RawKeys2["ICO00"] = 228] = "ICO00";
  RawKeys2[RawKeys2["ProcessKey"] = 229] = "ProcessKey";
  RawKeys2[RawKeys2["OEMCLEAR"] = 230] = "OEMCLEAR";
  RawKeys2[RawKeys2["Packet"] = 231] = "Packet";
  RawKeys2[RawKeys2["OEMReset"] = 233] = "OEMReset";
  RawKeys2[RawKeys2["OEMJump"] = 234] = "OEMJump";
  RawKeys2[RawKeys2["OEMPA1"] = 235] = "OEMPA1";
  RawKeys2[RawKeys2["OEMPA2"] = 236] = "OEMPA2";
  RawKeys2[RawKeys2["OEMPA3"] = 237] = "OEMPA3";
  RawKeys2[RawKeys2["OEMWSCtrl"] = 238] = "OEMWSCtrl";
  RawKeys2[RawKeys2["OEMCusel"] = 239] = "OEMCusel";
  RawKeys2[RawKeys2["OEMAttn"] = 240] = "OEMAttn";
  RawKeys2[RawKeys2["OEMFinish"] = 241] = "OEMFinish";
  RawKeys2[RawKeys2["OEMCopy"] = 242] = "OEMCopy";
  RawKeys2[RawKeys2["OEMAuto"] = 243] = "OEMAuto";
  RawKeys2[RawKeys2["OEMEnlw"] = 244] = "OEMEnlw";
  RawKeys2[RawKeys2["OEMBackTab"] = 245] = "OEMBackTab";
  RawKeys2[RawKeys2["Attn"] = 246] = "Attn";
  RawKeys2[RawKeys2["CrSel"] = 247] = "CrSel";
  RawKeys2[RawKeys2["ExSel"] = 248] = "ExSel";
  RawKeys2[RawKeys2["EraseEOF"] = 249] = "EraseEOF";
  RawKeys2[RawKeys2["Play"] = 250] = "Play";
  RawKeys2[RawKeys2["Zoom"] = 251] = "Zoom";
  RawKeys2[RawKeys2["NoName"] = 252] = "NoName";
  RawKeys2[RawKeys2["PA1"] = 253] = "PA1";
  RawKeys2[RawKeys2["OEMClear"] = 254] = "OEMClear";
  return RawKeys2;
})(RawKeys || {});

// src/redm/Volume.ts
var Volume = class {
  static {
    __name(this, "Volume");
  }
  handle;
  constructor(coord, rot, scale, customName) {
    if (customName) {
      this.handle = CreateVolumeCylinderWithCustomName(
        coord.x,
        coord.y,
        coord.z,
        rot.x,
        rot.y,
        rot.z,
        scale.x,
        scale.y,
        scale.z,
        customName
      );
      return;
    }
    this.handle = CreateVolumeCylinder(coord.x, coord.y, coord.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z);
  }
  get Handle() {
    return this.handle;
  }
};

// src/redm/Controls.ts
var Controls = class {
  static {
    __name(this, "Controls");
  }
  static IsInputJustPressed(hash) {
    return IsControlJustPressed(0, hash);
  }
  static IsInputPressed(hash) {
    return IsControlPressed(0, hash);
  }
  static IsDisabledInputPressed(hash) {
    return IsDisabledControlPressed(0, hash);
  }
  static DisableControl(hash) {
    DisableControlAction(0, hash, false);
  }
};

// src/redm/RawControls.ts
var RawControls = class {
  static {
    __name(this, "RawControls");
  }
  static IsKeyDown(rawKey) {
    return IsRawKeyDown(rawKey);
  }
  static IsKeyPressed(rawKey) {
    return IsRawKeyPressed(rawKey);
  }
  static IsKeyReleased(rawKey) {
    return IsRawKeyReleased(rawKey);
  }
  static IsKeyUp(rawKey) {
    return IsRawKeyUp(rawKey);
  }
};

// src/redm/Game.ts
var Game = class {
  static {
    __name(this, "Game");
  }
  static get PlayerPed() {
    return new Ped(PlayerPedId());
  }
  static get Player() {
    return GameConstants.Player;
  }
};

// src/redm/world/createPed.ts
async function createPed(model, spawnPos, heading, isNetwork = false, bScriptHostPed = true, p7 = true, p8 = true) {
  if (!model.IsPed || !model.request(1e3)) {
    return null;
  }
  const pedHandle = CreatePed(
    model.Hash,
    spawnPos.x,
    spawnPos.y,
    spawnPos.z,
    heading,
    isNetwork,
    bScriptHostPed,
    p7,
    p8
  );
  if (pedHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Ped(pedHandle);
  }
  return null;
}
__name(createPed, "createPed");

// src/redm/entities/Prop.ts
var Prop = class extends BaseEntity {
  static {
    __name(this, "Prop");
  }
};

// src/redm/world/createProp.ts
async function createProp(model, spawnPos, heading, isNetwork = false, bScriptHostProp = true, dynamic = true, p7 = true, p8 = true) {
  if (!model.IsProp || !model.request(1e3)) {
    return null;
  }
  const propHandle = CreateObject(
    model.Hash,
    spawnPos.x,
    spawnPos.y,
    spawnPos.z,
    isNetwork,
    bScriptHostProp,
    dynamic,
    p7,
    p8
  );
  if (propHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Prop(propHandle);
  }
  return null;
}
__name(createProp, "createProp");

// src/redm/world/createVehicle.ts
async function createVehicle(model, spawnPos, heading, isNetwork = false, bScriptHostVeh = true, bDontAutoCreateDraftAnimals = true, p8 = true) {
  if (!model.IsPed || !model.request(1e3)) {
    return null;
  }
  const pedHandle = CreateVehicle(
    model.Hash,
    spawnPos.x,
    spawnPos.y,
    spawnPos.z,
    heading,
    isNetwork,
    bScriptHostVeh,
    bDontAutoCreateDraftAnimals,
    p8
  );
  if (pedHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Vehicle(pedHandle);
  }
  return null;
}
__name(createVehicle, "createVehicle");

// src/redm/world/createDraftVehicle.ts
async function createDraftVehicle(model, spawnPos, heading, isNetwork = false, bScriptHostVeh = true, bDontAutoCreateDraftAnimals = true, draftAnimalPopGroup = 0, p9 = true) {
  if (!model.IsPed || !model.request(1e3)) {
    return null;
  }
  const draftVehHandle = _N(
    "0x214651FB1DFEBA89",
    model.Hash,
    spawnPos.x,
    spawnPos.y,
    spawnPos.z,
    heading,
    isNetwork,
    bScriptHostVeh,
    bDontAutoCreateDraftAnimals,
    draftAnimalPopGroup,
    p9,
    Citizen.resultAsInteger()
  );
  if (draftVehHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Vehicle(draftVehHandle);
  }
  return null;
}
__name(createDraftVehicle, "createDraftVehicle");

// src/redm/RelationshipGroup.ts
var RelationshipGroup = class {
  static {
    __name(this, "RelationshipGroup");
  }
  /**
   * The hash of the relationship group
   */
  hash;
  /**
   * Create a relationship group. Optionally pass a group hash.
   *
   * @param name Name of the relationship group.
   */
  constructor(name) {
    const [, groupHash] = AddRelationshipGroup(name);
    this.hash = groupHash;
  }
  /**
   * Gets the hash of the relationship group.
   *
   * @returns The hash of this object.
   */
  get Hash() {
    return this.hash;
  }
  /**
   * Get the relationship between two relationship groups.
   *
   * @param targetGroup The other relationship group.
   * @returns The relationship
   */
  getRelationshipBetweenGroups(targetGroup) {
    return GetRelationshipBetweenGroups(this.Hash, targetGroup.Hash);
  }
  /**
   * Set the relationship group between this relationship group and another one.
   *
   * @param targetGroup The other relationship group.
   * @param relationship The desired relationship.
   * @param biDirectionally If target group should have same relationship towards this.
   */
  setRelationshipBetweenGroups(targetGroup, relationship, biDirectionally = false) {
    SetRelationshipBetweenGroups(Number(relationship), this.Hash, targetGroup.Hash);
    if (biDirectionally) {
      SetRelationshipBetweenGroups(Number(relationship), targetGroup.Hash, this.Hash);
    }
  }
  /**
   * Clear the relationship between this relationship group and another.
   *
   * @param targetGroup The other relationship group.
   * @param relationship The desired relationship to clear.
   * @param biDirectionally Whether the target group should also clear the relationship.
   */
  clearRelationshipBetweenGroups(targetGroup, relationship, biDirectionally = false) {
    ClearRelationshipBetweenGroups(Number(relationship), this.Hash, targetGroup.Hash);
    if (biDirectionally) {
      ClearRelationshipBetweenGroups(Number(relationship), targetGroup.Hash, this.Hash);
    }
  }
  /**
   * Remove this relationship group from the game. This will not delete this object.
   */
  remove() {
    RemoveRelationshipGroup(this.Hash);
  }
};

// src/redm/Model.ts
var Model = class {
  static {
    __name(this, "Model");
  }
  /**
   * Hash of this model.
   */
  hash;
  requestedModel = false;
  /**
   * Creates a model object based on the hash key or model string.
   *
   * @param hash A number or string of the model's hash. Example: "mp_m_freemode_01"
   */
  constructor(hash) {
    if (typeof hash === "string") {
      this.hash = GetHashKey(hash);
    } else {
      this.hash = hash;
    }
  }
  [Symbol.dispose]() {
    if (this.requestedModel) {
      this.markAsNoLongerNeeded();
    }
  }
  /**
   * Gets the hash of the model.
   *
   * @returns The hash key.
   */
  get Hash() {
    return this.hash;
  }
  /**
   * Gets if the model is valid or not.
   *
   * @returns Whether this model is valid.
   */
  get IsValid() {
    return IsModelValid(this.hash);
  }
  /**
   * Gets if the model is in cd image or not.
   *
   * @returns Whether this model is in cd image.
   */
  get IsInCdImage() {
    return IsModelInCdimage(this.hash);
  }
  /**
   * Gets if the model is loaded or not.
   *
   * @returns Whether this model is loaded.
   */
  get IsLoaded() {
    return HasModelLoaded(this.hash);
  }
  /**
   * Gets if the model collision is loaded or not.
   *
   * @returns Whether this model collision is loaded.
   */
  get IsCollisionLoaded() {
    return HasCollisionForModelLoaded(this.hash);
  }
  /**
   * Gets if the model is a boat or not.
   *
   * @returns Whether this model is a boat.
   */
  get IsBoat() {
    return IsThisModelABoat(this.hash);
  }
  /**
   * Gets if the model is a Ped or not.
   *
   * @returns Whether this model is a Ped.
   */
  get IsPed() {
    return IsModelAPed(this.hash);
  }
  /**
   * Gets if the model is a prop or not.
   *
   * @returns Whether this model is a prop.
   */
  get IsProp() {
    return this.IsValid && !this.IsPed && !this.IsVehicle && !IsWeaponValid(this.hash);
  }
  /**
   * Gets if the model is a train or not.
   *
   * @returns Whether this model is a train.
   */
  get IsTrain() {
    return IsThisModelATrain(this.hash);
  }
  /**
   * Gets if the model is a Vehicle or not.
   *
   * @returns Whether this model is a Vehicle.
   */
  get IsVehicle() {
    return IsModelAVehicle(this.hash);
  }
  /**
   * Gets the model dimensions.
   *
   * @returns This model min & max dimensions.
   */
  get Dimensions() {
    const [minArray, maxArray] = GetModelDimensions(this.hash);
    const min = Vector3.fromArray(minArray);
    const max = Vector3.fromArray(maxArray);
    return { min, max };
  }
  /**
   * Request and load the model with a specified timeout. Default timeout is 1000 (recommended).
   * This function will not automatically set the model as no longer needed when
   * done.
   *
   * @param timeoutMs Maximum allowed time for model to load.
   */
  async request(timeoutMs = 1e3) {
    if (!this.IsInCdImage && !this.IsValid && !IsWeaponValid(this.hash)) {
      return false;
    }
    if (this.IsLoaded) {
      return true;
    }
    RequestModel(this.hash, false);
    const timeout = GetGameTimer() + timeoutMs;
    while (!this.IsLoaded && GetGameTimer() < timeout) {
      await Delay(0);
    }
    this.requestedModel = true;
    return this.IsLoaded;
  }
  /**
   * Sets the model as no longer needed allowing the game engine to free memory.
   */
  markAsNoLongerNeeded() {
    SetModelAsNoLongerNeeded(this.hash);
  }
};

// src/common/GlobalData.ts
var GlobalData = class _GlobalData {
  static {
    __name(this, "GlobalData");
  }
  static CurrentResource = GetCurrentResourceName();
  static IS_SERVER = IsDuplicityVersion();
  static IS_CLIENT = !_GlobalData.IS_SERVER;
  static NetworkTick = null;
  static NetworkedTicks = [];
  static EnablePrettyPrint = true;
};

// src/common/net/NetworkedMap.ts
var NetworkedMapEventManager = class {
  static {
    __name(this, "NetworkedMapEventManager");
  }
  #syncedCalls = /* @__PURE__ */ new Map();
  constructor() {
    $CLIENT: {
      RegisterResourceAsEventHandler(`${GlobalData.CurrentResource}:syncChanges`);
      addRawEventListener(`${GlobalData.CurrentResource}:syncChanges`, (msgpack_data) => {
        const data = msgpack_unpack(msgpack_data);
        const syncName = data[0];
        const syncData = data[1];
        const map = this.#syncedCalls.get(syncName);
        if (!map) {
          throw new Error(`Tried to sync changes for a networked map but ${syncName} does't exist.`);
        }
        map.handleSync(syncData);
      });
    }
  }
  addNetworkedMap(map) {
    this.#syncedCalls.set(map.SyncName, map);
  }
  removeNetworkedMap(syncName) {
    this.#syncedCalls.delete(syncName);
  }
};
var netManager = new NetworkedMapEventManager();
var NetworkedMap = class extends Map {
  static {
    __name(this, "NetworkedMap");
  }
  #syncName;
  #queuedChanges = [];
  #changeListeners = /* @__PURE__ */ new Map();
  #subscribers = /* @__PURE__ */ new Set();
  constructor(syncName, initialValue) {
    super(initialValue);
    this.#syncName = syncName;
    GlobalData.NetworkedTicks.push(this);
    netManager.addNetworkedMap(this);
  }
  get SyncName() {
    return this.#syncName;
  }
  // handles removing the player from the map whenever they're dropped
  onPlayerDropped() {
    this.removeSubscriber(source);
  }
  /*
   * Resyncs the entire map to the client, useful for if there's a mismatch in the clients map (when multiple players change things, in cases like inventories)
   *
   * NOTE: This doesn't check that the player is already subscribed to the map, you should do your own due-diligence to only call this for players already subscribed
   */
  resync(source2) {
    const packed_data = msgpack_pack([this.#syncName, [[4 /* Init */, this.size === 0 ? [] : Array.from(this)]]]);
    TriggerClientEventInternal(
      `${GlobalData.CurrentResource}:syncChanges`,
      source2,
      packed_data,
      packed_data.length
    );
  }
  /*
   * Adds a new subscriber to the map
   */
  addSubscriber(source2) {
    this.#subscribers.add(source2);
    this.resync(source2);
  }
  removeSubscriber(sub) {
    return this.#subscribers.delete(sub);
  }
  hasSubscriber(sub) {
    return this.#subscribers.has(sub);
  }
  subscriberCount() {
    return this.#subscribers.size;
  }
  handleSync(data) {
    for (const [change_type, key, value, possibly_undefined_subvalue] of data) {
      switch (change_type) {
        case 1 /* Add */: {
          this.set(key, value);
          continue;
        }
        case 2 /* Remove */: {
          super.delete(key);
          continue;
        }
        case 3 /* Reset */: {
          super.clear();
          continue;
        }
        case 4 /* Init */: {
          super.clear();
          const key_value = key;
          for (const [k, v] of key_value) {
            this.set(k, v);
          }
          continue;
        }
        case 0 /* SubValueChanged */: {
          const data2 = this.get(key);
          data2[value] = possibly_undefined_subvalue;
          continue;
        }
      }
    }
  }
  /*
   * Listens for the change on the specified key, it will get the resulting
   * value on the change
   */
  listenForChange(key, fn) {
    const listener = this.#changeListeners.get(key);
    listener ? listener.push(fn) : this.#changeListeners.set(key, [fn]);
  }
  #triggerEventForSubscribers(data) {
    const packed_data = msgpack_pack([this.#syncName, data]);
    for (const sub of this.#subscribers) {
      TriggerClientEventInternal(
        `${GlobalData.CurrentResource}:syncChanges`,
        sub,
        packed_data,
        packed_data.length
      );
    }
  }
  #pushChangeForListener(key, value) {
    const listener = this.#changeListeners.get(key);
    if (!listener) return;
    for (const ln of listener) {
      ln(value);
    }
  }
  set(key, value) {
    let v = value;
    if (value instanceof Object) {
      const curMap = this;
      const objectChangeHandler = {
        get(target, prop, reciever) {
          return Reflect.get(target, prop, reciever);
        },
        set(target, p, newValue, receiver) {
          const success = Reflect.set(target, p, newValue, receiver);
          if (success) {
            curMap.#pushChangeForListener(key, target);
          }
          return success;
        }
      };
      v = new Proxy(v, objectChangeHandler);
    }
    super.set(key, v);
    this.#pushChangeForListener(key, v);
    return this;
  }
  /*
   * Resets the map to its default state
   */
  clear() {
    $CLIENT: if (GlobalData.IS_CLIENT) throw new Error(`Cannot call 'clear' on client`);
    this.#queuedChanges = [];
    this.#queuedChanges.push([3 /* Reset */]);
    super.clear();
  }
  delete(key) {
    $CLIENT: if (GlobalData.IS_CLIENT) throw new Error(`Cannot call 'delete' on client`);
    this.#queuedChanges.push([2 /* Remove */, key]);
    return super.delete(key);
  }
  networkTick() {
    if (this.#queuedChanges.length !== 0) {
      this.#triggerEventForSubscribers(this.#queuedChanges);
      this.#queuedChanges = [];
    }
  }
  [Symbol.dispose]() {
    this.#subscribers.clear();
    this.#changeListeners.clear();
    this.#queuedChanges = [];
    netManager.removeNetworkedMap(this.#syncName);
    GlobalData.NetworkedTicks.filter((v) => v !== this);
  }
  /**
   * Unregisters from the tick handler and removes the event listener
   */
  dispose() {
    this[Symbol.dispose]();
  }
  get [Symbol.toStringTag]() {
    return "NetworkedMap";
  }
};

// src/common/decors/Events.ts
var ConVarType = /* @__PURE__ */ ((ConVarType2) => {
  ConVarType2[ConVarType2["String"] = 0] = "String";
  ConVarType2[ConVarType2["Integer"] = 1] = "Integer";
  ConVarType2[ConVarType2["Float"] = 2] = "Float";
  ConVarType2[ConVarType2["Boolean"] = 3] = "Boolean";
  return ConVarType2;
})(ConVarType || {});
var DisablePrettyPrint = /* @__PURE__ */ __name(() => GlobalData.EnablePrettyPrint = false, "DisablePrettyPrint");
function Exports(exportName) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function() {
      exports(exportName, (...args) => {
        return originalMethod.call(this, ...args);
      });
    });
  }, "actualDecorator");
}
__name(Exports, "Exports");
function Event(eventName) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("Event does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function() {
      on(eventName, (...args) => {
        try {
          return originalMethod.call(this, ...args);
        } catch (e) {
          REMOVE_EVENT_LOG: {
            if (!GlobalData.EnablePrettyPrint) return;
            console.error("------- EVENT ERROR --------");
            console.error(`Call to ${eventName} errored`);
            console.error(`Data: ${JSON.stringify(args)}`);
            console.error(`Error: ${e}`);
            console.error("------- END EVENT ERROR --------");
          }
        }
      });
    });
  }, "actualDecorator");
}
__name(Event, "Event");
function NetEvent(eventName, remoteOnly = true) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("NetEvent does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function() {
      onNet(eventName, (...args) => {
        const src = source;
        try {
          $CLIENT: {
            if (GlobalData.IS_CLIENT && remoteOnly && source !== 65535) {
              return;
            }
          }
          return originalMethod.call(this, ...args);
        } catch (e) {
          REMOVE_NET_EVENT_LOG: {
            if (!GlobalData.EnablePrettyPrint) return;
            console.error("------- NET EVENT ERROR --------");
            console.error(`Call to ${eventName} errored`);
            console.error(`Caller: ${src}`);
            console.error(`Data: ${JSON.stringify(args)}`);
            console.error(`Error: ${e}`);
            console.error("------- END NET EVENT ERROR --------");
          }
        }
      });
    });
  }, "actualDecorator");
}
__name(NetEvent, "NetEvent");
function NuiEvent(eventName) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("NuiEvent does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function() {
      RegisterNuiCallback(eventName, (...args) => {
        return originalMethod.call(this, ...args);
      });
    });
  }, "actualDecorator");
}
__name(NuiEvent, "NuiEvent");
var get_convar_fn = /* @__PURE__ */ __name((con_var_type) => {
  switch (con_var_type) {
    case 0 /* String */:
      return GetConvar;
    case 1 /* Integer */:
      return GetConvarInt;
    case 2 /* Float */:
      return GetConvarFloat;
    case 3 /* Boolean */:
      return GetConvarBool;
    // needed so typescript wont complain about "unreachable code" for the error below
    default:
  }
  throw new Error("Got invalid ConVarType");
}, "get_convar_fn");
function ConVar(name, is_floating_point, deserialize) {
  return /* @__PURE__ */ __name(function actualDecorator(_initialValue, context, ..._args) {
    if (context.private) {
      throw new Error("ConVar does not work on private types, please mark the field as public");
    }
    context.addInitializer(function() {
      const t = this;
      const default_value = Reflect.get(t, context.name);
      const default_type = typeof default_value;
      let con_var_type = null;
      if (default_type === "number") {
        if (is_floating_point || !Number.isInteger(default_value)) {
          con_var_type = 2 /* Float */;
        } else {
          con_var_type = 1 /* Integer */;
        }
      } else if (default_type === "boolean") {
        con_var_type = 3 /* Boolean */;
      } else if (default_value === "string") {
        con_var_type = 0 /* String */;
      }
      if (!deserialize && con_var_type === null) {
        throw new Error("You should provide a deserialize function if you want to convert this to an object type");
      }
      if (con_var_type === null) {
        con_var_type = 0 /* String */;
      }
      const con_var_fn = get_convar_fn(con_var_type);
      const get_convar_value = /* @__PURE__ */ __name(() => {
        const data = con_var_fn(name, default_value);
        return deserialize ? deserialize(data) : data;
      }, "get_convar_value");
      Reflect.set(t, context.name, get_convar_value());
      AddConvarChangeListener(name, () => {
        Reflect.set(t, context.name, get_convar_value());
      });
    });
  }, "actualDecorator");
}
__name(ConVar, "ConVar");
function SetTick() {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("SetTick does not work on private types, please mark the field as public");
    }
    context.addInitializer(function() {
      setTick(async () => {
        await originalMethod.call(this);
      });
    });
  }, "actualDecorator");
}
__name(SetTick, "SetTick");

// src/common/Convar.ts
var Convar = class {
  static {
    __name(this, "Convar");
  }
  /**
   * @returns the current console buffer
   */
  buffer() {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    return GetConsoleBuffer();
  }
  get(variable, defaultVar) {
    return GetConvar(variable, defaultVar);
  }
  getInt(variable, defaultVar) {
    return GetConvarInt(variable, defaultVar);
  }
  getFloat(varName, defaultVar) {
    return GetConvarFloat(varName, defaultVar);
  }
  getBool(varName, defaultVar) {
    return GetConvarBool(varName, defaultVar);
  }
  set(variable, value) {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    SetConvar(variable, value);
  }
  setReplicated(variable, value) {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    SetConvarReplicated(variable, value);
  }
  setServerInfo(variable, value) {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    SetConvarServerInfo(variable, value);
  }
};

// src/common/Command.ts
function registerCommand(name, commandHandler, restricted) {
  if (Array.isArray(name)) {
    for (const command of name) {
      registerCommand(command, commandHandler, restricted);
    }
    return;
  }
  RegisterCommand(name, commandHandler, !!restricted);
}
__name(registerCommand, "registerCommand");
var Command = class {
  constructor(name, help, handler, params, restricted = true) {
    this.name = name;
    this.help = help;
    this.params = params;
    this.#handler = handler;
    this.name = `/${name}`;
    registerCommand(name, (source2, args, raw) => this.call(source2, args, raw), restricted);
    if (params) {
      for (const parameter of params) {
        if (parameter.type) {
          parameter.help = parameter.help ? `${parameter.help} (type: ${parameter.type})` : `(type: ${parameter.type})`;
        }
      }
      setTimeout(() => {
        $CLIENT: {
          emit("chat:addSuggestion", this);
        }
      }, 100);
    }
  }
  static {
    __name(this, "Command");
  }
  #handler;
  mapArguments(source2, args, raw) {
    const mapped = {
      source: source2,
      raw
    };
    if (!this.params) return mapped;
    const result = this.params.every((param, index) => {
      const arg = args[index];
      let value = arg;
      switch (param.type) {
        case "number":
          value = +arg;
          break;
        case "string":
          value = !Number(arg) ? arg : false;
          break;
        case "playerId":
          $CLIENT: {
            value = arg === "me" ? GetPlayerServerId(PlayerId()) : +arg;
            if (!value || GetPlayerFromServerId(value) === -1) value = void 0;
          }
          break;
        case "longString":
          value = raw.substring(raw.indexOf(arg));
          break;
      }
      if (value === void 0 && (!param.optional || param.optional && arg)) {
        return Citizen.trace(
          `^1command '${raw.split(" ")[0] || raw}' received an invalid ${param.type} for argument ${index + 1} (${param.name}), received '${arg}'^0`
        );
      }
      mapped[param.name] = value;
      return true;
    });
    return result ? mapped : null;
  }
  async call(source2, args, raw = args.join(" ")) {
    const parsed = this.mapArguments(source2, args, raw);
    if (!parsed) return;
    try {
      await this.#handler(parsed);
    } catch (err) {
      Citizen.trace(`^1command '${raw.split(" ")[0] || raw}' failed to execute!^0
${err.message}`);
    }
  }
};

// src/common/Kvp.ts
var Kvp = class {
  static {
    __name(this, "Kvp");
  }
  /**
   * Returns the value associated with a key as a number.
   */
  getNumber(key) {
    return GetResourceKvpInt(key);
  }
  /**
   * Returns the value associated with a key as a float.
   */
  getFloat(key) {
    return GetResourceKvpFloat(key);
  }
  /**
   * Returns the value associated with a key as a string.
   */
  getString(key) {
    return GetResourceKvpString(key);
  }
  /**
   * Returns the value associated with a key as a parsed JSON string.
   */
  getJson(key) {
    const str = GetResourceKvpString(key);
    return str ? JSON.parse(str) : null;
  }
  /**
   * Sets the value associated with a key as a number.
   * @param async set the value using an async operation.
   */
  setNumber(key, value, async = false) {
    return async ? SetResourceKvpIntNoSync(key, value) : SetResourceKvpInt(key, value);
  }
  /**
   * Sets the value associated with a key as a float.
   * @param async set the value using an async operation.
   */
  setFloat(key, value, async = false) {
    return async ? SetResourceKvpFloatNoSync(key, value) : SetResourceKvpFloat(key, value);
  }
  /**
   * Sets the value associated with a key as a string.
   * @param async set the value using an async operation.
   */
  setString(key, value, async = false) {
    return async ? SetResourceKvpNoSync(key, value) : SetResourceKvp(key, value);
  }
  /**
   * Sets the value associated with a key as a JSON string.
   * @param async set the value using an async operation.
   */
  setJson(key, value, async = false) {
    const str = JSON.stringify(value);
    return async ? SetResourceKvpNoSync(key, str) : SetResourceKvp(key, str);
  }
  /**
   * Sets the value associated with a key as a JSON string.
   * @param async set the value using an async operation.
   */
  set(key, value, async = false) {
    switch (typeof value) {
      case "function":
      case "symbol":
        throw new Error(`Failed to set Kvp for invalid type '${typeof value}'`);
      case "undefined":
        return this.delete(key, async);
      case "object":
        return this.setJson(key, value, async);
      case "boolean":
        value = value ? 1 : 0;
      case "number":
        return Number.isInteger(value) ? this.setNumber(key, value, async) : this.setFloat(key, value, async);
      default:
        value = String(value);
        return this.setString(key, value, async);
    }
  }
  /**
   * Deletes the specified value for key.
   * @param async remove the value using an async operation
   */
  delete(key, async = false) {
    return async ? DeleteResourceKvpNoSync(key) : DeleteResourceKvp(key);
  }
  /**
   * Commits pending asynchronous operations to disk, ensuring data consistency.
   *
   * Should be called after calling set methods using the async flag.
   */
  flush() {
    FlushResourceKvp();
  }
  getAllKeys(prefix) {
    const keys = [];
    const handle = StartFindKvp(prefix);
    if (handle === -1) return keys;
    let key;
    do {
      key = FindKvp(handle);
      if (key) keys.push(key);
    } while (key);
    EndFindKvp(handle);
    return keys;
  }
  /**
   * Returns an array of keys which match or contain the given keys.
   */
  getKeys(prefix) {
    return typeof prefix === "string" ? this.getAllKeys(prefix) : prefix.flatMap((key) => this.getAllKeys(key));
  }
  /**
   * Get all values from keys in an array as the specified type.
   */
  getValuesAsType(prefix, type) {
    const values = this.getKeys(prefix);
    return values.map((key) => {
      switch (type) {
        case "number":
          return this.getNumber(key);
        case "float":
          return this.getFloat(key);
        case "string":
          return this.getString(key);
        default:
          return this.getJson(key);
      }
    });
  }
};

// src/common/Resource.ts
var Resource = class {
  constructor(name) {
    this.name = name;
  }
  static {
    __name(this, "Resource");
  }
  getMetadata(metadataKey, index) {
    return GetResourceMetadata(this.name, metadataKey, index);
  }
  getPath() {
    return GetResourcePath(this.name);
  }
  loadFile(fileName) {
    return LoadResourceFile(this.name, fileName);
  }
  saveFile(fileName, data, length) {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    return SaveResourceFile(this.name, fileName, data, length);
  }
  scheduleTick() {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    return ScheduleResourceTick(this.name);
  }
  start() {
    StartResource(this.name);
  }
  stop() {
    StopResource(this.name);
  }
  static startResource(name) {
    StartResource(name);
  }
  static stopResource(name) {
    StopResource(name);
  }
  static resourceCount() {
    return GetNumResources();
  }
};
export {
  Attributes,
  Color,
  Command,
  ConVar,
  ConVarType,
  Controls,
  Convar,
  CoreAttribute,
  Delay,
  DisablePrettyPrint,
  Entity,
  Event,
  Exports,
  Game,
  GameConstants,
  KeyHash,
  KnockOffVehicle,
  Kvp,
  Maths,
  Model,
  NetEvent,
  NetworkedMap,
  NuiEvent,
  Ped,
  PedAttribute,
  Player,
  PointF,
  Quaternion,
  RawControls,
  RawKeys,
  Relationship,
  RelationshipGroup,
  Resource,
  SetTick,
  TamingState,
  Vector2,
  Vector3,
  Vector4,
  Vehicle,
  VehicleSeat,
  Volume,
  cleanPlayerName,
  createDraftVehicle,
  createPed,
  createProp,
  createVehicle,
  eAttributeCore,
  eDamageCleanliness,
  eHudStatusEffect,
  ePedAttribute,
  enumValues,
  getStringFromUInt8Array,
  getUInt32FromUint8Array
};
