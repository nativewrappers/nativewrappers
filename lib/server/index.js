var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

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

// src/server/cfx/index.ts
var cfx_default = { Entity, Player };

// src/server/entities/BaseEntity.ts
var BaseEntity = class _BaseEntity {
  constructor(handle) {
    this.handle = handle;
  }
  static {
    __name(this, "BaseEntity");
  }
  type = 3 /* Entity */;
  // Replaces the current handle for the entity used on, this hsould be used sparringly, mainly
  // in situations where you're going to reuse an entity over and over and don't want to make a
  // new entity every time.
  //
  // **WARNING**: This does no checks, if you provide it an invalid entity it will use it
  //
  // ```ts
  // const REUSABLE_ENTITY = new Entity(entityHandle);
  //
  // onNet("entityHandler", (entNetId: number) => {
  //  // if no net entity we should ignore
  //  const entId = NetworkGetEntityFromNetworkId(entNetId);
  //  if (entId === 0) return;
  //
  //  // Reuse our entity so we don't have to initialize a new one
  //  REUSABLE_ENTITY.replaceHandle(entId);
  //  // Do something with REUSABLE_ENTITY entity
  // })
  // ```
  replaceHandle(newHandle) {
    this.handle = newHandle;
  }
  static fromNetworkId(networkId) {
    const ent = NetworkGetEntityFromNetworkId(networkId);
    if (ent === 0) return null;
    return new _BaseEntity(ent);
  }
  static fromStateBagName(stateBagName) {
    const ent = GetEntityFromStateBagName(stateBagName);
    if (ent === 0) return null;
    return new _BaseEntity(ent);
  }
  get State() {
    return cfx_default.Entity(this.handle).state;
  }
  get Handle() {
    return this.handle;
  }
  get Owner() {
    return NetworkGetEntityOwner(this.handle);
  }
  get FirstOwner() {
    return NetworkGetFirstEntityOwner(this.handle);
  }
  get Exists() {
    return this.handle !== 0 && DoesEntityExist(this.handle);
  }
  /**
   * @returns the entity that the calling entity is attached to, or null if
   * there is none
   */
  get AttachedTo() {
    const ent = GetEntityAttachedTo(this.handle);
    if (ent === 0) return null;
    return new _BaseEntity(ent);
  }
  get Position() {
    return Vector3.fromArray(GetEntityCoords(this.handle));
  }
  get Heading() {
    return GetEntityHeading(this.handle);
  }
  get PositionAndHeading() {
    return Vector4.fromArray([...GetEntityCoords(this.handle), GetEntityHeading(this.handle)]);
  }
  get Health() {
    return GetEntityHealth(this.handle);
  }
  get MaxHealth() {
    return GetEntityMaxHealth(this.handle);
  }
  get Model() {
    return GetEntityModel(this.handle);
  }
  get PopulationType() {
    return GetEntityPopulationType(this.handle);
  }
  get Rotation() {
    return Vector3.fromArray(GetEntityRotation(this.handle));
  }
  get RotationVelocity() {
    return Vector3.fromArray(GetEntityRotationVelocity(this.handle));
  }
  get RoutingBucket() {
    return GetEntityRoutingBucket(this.handle);
  }
  /**
   * @returns The script that made the entity
   */
  get Script() {
    return GetEntityScript(this.handle);
  }
  get Speed() {
    return GetEntitySpeed(this.handle);
  }
  get Type() {
    return GetEntityType(this.handle);
  }
  /**
   * @returns the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)
   */
  get Velocity() {
    return Vector3.fromArray(GetEntityVelocity(this.handle));
  }
  get IsVisible() {
    return IsEntityVisible(this.handle);
  }
  get NetworkId() {
    return NetworkGetNetworkIdFromEntity(this.handle);
  }
  get IsNoLongerNeeded() {
    return HasEntityBeenMarkedAsNoLongerNeeded(this.handle);
  }
  get OrphanMode() {
    return GetEntityOrphanMode(this.Handle);
  }
  set OrphanMode(orphanMode) {
    SetEntityOrphanMode(this.Handle, orphanMode);
  }
  delete() {
    if (this.Exists) {
      DeleteEntity(this.handle);
    }
  }
};

// src/server/entities/Vehicle.ts
var Vehicle = class _Vehicle extends BaseEntity {
  static {
    __name(this, "Vehicle");
  }
  type = 2 /* Vehicle */;
  constructor(handle) {
    super(handle);
  }
  /**
   * Get an interable list of vehicles currently on the server
   * @returns Iterable list of Vehicles.
   */
  static *AllVehicles() {
    for (const veh of GetAllVehicles()) {
      yield new _Vehicle(veh);
    }
  }
  static fromNetworkId(networkId) {
    const ent = NetworkGetEntityFromNetworkId(networkId);
    if (ent === 0) return null;
    return new _Vehicle(ent);
  }
  static fromStateBagName(stateBageName) {
    const ent = GetEntityFromStateBagName(stateBageName);
    if (ent === 0) return null;
    return new _Vehicle(ent);
  }
  get IsEngineRunning() {
    return GetIsVehicleEngineRunning(this.handle);
  }
  get IsPrimaryColourCustom() {
    return GetIsVehiclePrimaryColourCustom(this.handle);
  }
  get IsSecondaryColourCustom() {
    return GetIsVehicleSecondaryColourCustom(this.handle);
  }
  get BodyHealth() {
    return GetVehicleBodyHealth(this.handle);
  }
  get VehicleColours() {
    return GetVehicleColours(this.handle);
  }
  get CustomPrimaryColour() {
    return Color.fromArray(GetVehicleCustomPrimaryColour(this.handle));
  }
  get CustomSecondaryColour() {
    return Color.fromArray(GetVehicleCustomSecondaryColour(this.handle));
  }
  get DashboardColour() {
    return GetVehicleDashboardColour(this.handle);
  }
  get DirtLevel() {
    return GetVehicleDirtLevel(this.handle);
  }
  get LockStatus() {
    return GetVehicleDoorLockStatus(this.handle);
  }
  getDoorStatus(doorIndex) {
    return GetVehicleDoorStatus(this.handle, doorIndex);
  }
  get DoorsLockedForPlayer() {
    return GetVehicleDoorsLockedForPlayer(this.handle);
  }
  get EngineHealth() {
    return GetVehicleEngineHealth(this.handle);
  }
  get ExtraColours() {
    return GetVehicleExtraColours(this.handle);
  }
  get FlightNozzlePosition() {
    return GetVehicleFlightNozzlePosition(this.handle);
  }
  get Handbrake() {
    return GetVehicleHandbrake(this.handle);
  }
  get HeadlightsColour() {
    return GetVehicleHeadlightsColour(this.handle);
  }
  get HomingLockonState() {
    return GetVehicleHomingLockonState(this.handle);
  }
  get InteriorColour() {
    return GetVehicleInteriorColour(this.handle);
  }
  get LightsState() {
    const [_, lightsOn, highbeansOn] = GetVehicleLightsState(this.handle);
    return [lightsOn, highbeansOn];
  }
  get Livery() {
    return GetVehicleLivery(this.handle);
  }
  get LockOnTarget() {
    return new _Vehicle(GetVehicleLockOnTarget(this.handle));
  }
  get Plate() {
    return GetVehicleNumberPlateText(this.handle);
  }
  get PlateTrimmed() {
    return this.Plate.trim();
  }
  get PlateIndex() {
    return GetVehicleNumberPlateTextIndex(this.handle);
  }
  get PetrolTankHealth() {
    return GetVehiclePetrolTankHealth(this.handle);
  }
  get RadioStation() {
    return GetVehicleRadioStationIndex(this.handle);
  }
  get RoofLivery() {
    return GetVehicleRoofLivery(this.handle);
  }
  get SteeringAngle() {
    return GetVehicleSteeringAngle(this.handle);
  }
  get VehicleType() {
    return GetVehicleType(this.handle);
  }
  get TyreSmokeColour() {
    return Color.fromArray(GetVehicleTyreSmokeColor(this.handle));
  }
  get WheelType() {
    return GetVehicleWheelType(this.handle);
  }
  get WindowTint() {
    return GetVehicleWindowTint(this.handle);
  }
  get HasBeenOwnedByPlayer() {
    return HasVehicleBeenOwnedByPlayer(this.handle);
  }
  get IsEngineStarting() {
    return IsVehicleEngineStarting(this.handle);
  }
  get IsSirenOn() {
    return IsVehicleSirenOn(this.handle);
  }
  get MaxHealth() {
    return GetEntityMaxHealth(this.handle);
  }
  get ScriptTaskCommand() {
    return GetPedScriptTaskCommand(this.handle);
  }
  get ScriptTaskStage() {
    return GetPedScriptTaskStage(this.handle);
  }
  get MainRotorHealth() {
    return GetHeliMainRotorHealth(this.handle);
  }
  get TailRotorHealth() {
    return GetHeliTailRotorHealth(this.handle);
  }
  /**
   * This might supposed to be TrainEngineHealth?
   */
  get TrainCarriageEngine() {
    return GetTrainCarriageEngine(this.handle);
  }
  get TrainCarriageIndex() {
    return GetTrainCarriageIndex(this.handle);
  }
  isTyreBurst(wheelId, completely) {
    return IsVehicleTyreBurst(this.handle, wheelId, completely);
  }
  isExtraTurnedOn(extraId) {
    return IsVehicleExtraTurnedOn(this.handle, extraId);
  }
  getPedInSeat(seatIndex) {
    return GetPedInVehicleSeat(this.handle, seatIndex);
  }
  getLastPedInSeat(seatIndex) {
    return GetLastPedInVehicleSeat(this.handle, seatIndex);
  }
};

// src/server/entities/Ped.ts
var Ped = class _Ped extends BaseEntity {
  static {
    __name(this, "Ped");
  }
  type = 0 /* Ped */;
  constructor(handle) {
    super(handle);
  }
  /**
   * Get an interable list of peds currently on the server
   * @returns Iterable list of Peds.
   */
  static *AllPeds() {
    for (const pedId of GetAllPeds()) {
      yield new _Ped(pedId);
    }
  }
  static fromNetworkId(netId) {
    const ent = NetworkGetEntityFromNetworkId(netId);
    if (ent === 0) return null;
    return new _Ped(ent);
  }
  static fromStateBagName(stateBagName) {
    const handle = GetEntityFromStateBagName(stateBagName);
    if (handle === 0) return null;
    return new _Ped(handle);
  }
  static fromSource(source2) {
    return new _Ped(GetPlayerPed(source2));
  }
  get Armour() {
    return GetPedArmour(this.handle);
  }
  get CauseOfDeath() {
    return GetPedCauseOfDeath(this.handle);
  }
  get DesiredHeading() {
    return GetPedDesiredHeading(this.handle);
  }
  get MaxHealth() {
    return GetPedMaxHealth(this.handle);
  }
  get TaskCommand() {
    return GetPedScriptTaskCommand(this.handle);
  }
  get TaskStage() {
    return GetPedScriptTaskStage(this.handle);
  }
  get LastSourceOfDamage() {
    return GetPedSourceOfDamage(this.handle);
  }
  get DeathCause() {
    return GetPedCauseOfDeath(this.handle);
  }
  get Weapon() {
    return GetSelectedPedWeapon(this.handle);
  }
  /**
   * @returns the current vehicle the ped is in, or null if it doesn't exist
   */
  get CurrentVehicle() {
    const vehicle = GetVehiclePedIsIn(this.handle, false);
    if (vehicle === 0) return null;
    return new Vehicle(vehicle);
  }
  get LastVehicle() {
    const vehicle = GetVehiclePedIsIn(this.handle, false);
    if (vehicle === 0) return null;
    return new Vehicle(GetVehiclePedIsIn(this.handle, true));
  }
  get IsPlayer() {
    return IsPedAPlayer(this.handle);
  }
  getSpecificTaskType(index) {
    return GetPedSpecificTaskType(this.handle, index);
  }
};

// src/server/entities/Player.ts
var Player2 = class _Player {
  constructor(source2) {
    this.source = source2;
  }
  static {
    __name(this, "Player");
  }
  type = 4 /* Player */;
  /**
   * Get an interable list of players currently on the server
   * @returns Iterable list of Players.
   */
  static *AllPlayers() {
    const num = GetNumPlayerIndices();
    for (let i = 0; i < num; i++) {
      yield new _Player(Number.parseInt(GetPlayerFromIndex(i)));
    }
  }
  get Exists() {
    return this.source !== 0;
  }
  get Source() {
    return this.source;
  }
  get State() {
    return cfx_default.Player(this.source).state;
  }
  /**
   * Returns the player source casted as a string
   */
  get Src() {
    return this.source;
  }
  get Ped() {
    return new Ped(GetPlayerPed(this.Src));
  }
  get Tokens() {
    return getPlayerTokens(this.source);
  }
  get Identifiers() {
    return getPlayerIdentifiers(this.source);
  }
  get Endpoint() {
    return GetPlayerEndpoint(this.Src);
  }
  get CamerRotation() {
    return Vector3.fromArray(GetPlayerCameraRotation(this.Src));
  }
  /**
   * Returns the time since the last player UDP message
   */
  get LastMessage() {
    return GetPlayerLastMsg(this.Src);
  }
  get MaxArmour() {
    return GetPlayerMaxArmour(this.Src);
  }
  get MaxHealth() {
    return GetPlayerMaxHealth(this.Src);
  }
  get MeleeModifier() {
    return GetPlayerMeleeWeaponDamageModifier(this.Src);
  }
  /**
   * @returns the players name
   */
  get Name() {
    return GetPlayerName(this.Src);
  }
  /**
   * @returns the players name with any color code unicode, etc removed, this can lead to there being no name at all
   */
  filteredName() {
    return cleanPlayerName(this.Name);
  }
  /**
   * @returns the players round trip ping
   */
  get Ping() {
    return GetPlayerPing(this.Src);
  }
  /**
   * @returns the current routhing bucket the player is in, default is 0
   */
  get RoutingBucket() {
    return GetPlayerRoutingBucket(this.Src);
  }
  get Team() {
    return GetPlayerTeam(this.Src);
  }
  get WantedPosition() {
    return Vector3.fromArray(GetPlayerWantedCentrePosition(this.Src));
  }
  get WantedLevel() {
    return GetPlayerWantedLevel(this.Src);
  }
  get IsEvadingWanted() {
    return IsPlayerEvadingWantedLevel(this.Src);
  }
  get WeaponDamageModifier() {
    return GetPlayerWeaponDamageModifier(this.Src);
  }
  get WeaponDefenseModifier() {
    return GetPlayerWeaponDefenseModifier(this.Src);
  }
  get WeaponDefenseModifier2() {
    return GetPlayerWeaponDefenseModifier_2(this.Src);
  }
  get AirDragMultiplier() {
    return GetAirDragMultiplierForPlayersVehicle(this.Src);
  }
  get IsUsingSuperJump() {
    return IsPlayerUsingSuperJump(this.Src);
  }
  get IsMuted() {
    return MumbleIsPlayerMuted(this.source);
  }
  set IsMuted(isMuted) {
    MumbleSetPlayerMuted(this.source, isMuted);
  }
  isAceAllowed(object) {
    return IsPlayerAceAllowed(this.Src, object);
  }
  timeInPersuit(lastPursuit = false) {
    return GetPlayerTimeInPursuit(this.Src, lastPursuit);
  }
  drop(reason = "No reason specified") {
    DropPlayer(this.Src, reason);
  }
  emit(eventName, ...args) {
    TriggerClientEvent(eventName, this.source, ...args);
  }
};

// src/server/Game.ts
var Game = class {
  static {
    __name(this, "Game");
  }
  // A map containing generated hashes.
  static hashCache = /* @__PURE__ */ new Map();
  /**
   * Calculate the Jenkins One At A Time (joaat) has from the given string.
   *
   * @param input The input string to calculate the hash
   */
  static generateHash(input) {
    if (typeof input === "undefined") {
      return 0;
    }
    const _hash = this.hashCache.get(input);
    if (_hash) return _hash;
    const hash = GetHashKey(input);
    this.hashCache.set(input, hash);
    return hash;
  }
  /**
   * Gets how many milliseconds the game has been open this session
   */
  static get GameTime() {
    return GetGameTimer();
  }
  static get GameBuild() {
    return GetGameBuildNumber();
  }
  static get GameName() {
    return GetGameName();
  }
  static registerCommand(name, handler, restricted = false) {
    RegisterCommand(
      name,
      (source2, args) => {
        const player = new Player2(Number.parseInt(source2));
        handler(player, args);
      },
      restricted
    );
  }
  static get RegisteredCommands() {
    return GetRegisteredCommands();
  }
  /**
   * Get an iterable list of players currently on the server.
   * @returns Iterable list of Player objects.
   */
  static *PlayerList() {
    for (const id of getPlayers()) {
      yield new Player2(id);
    }
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
    $SERVER: if (GlobalData.IS_SERVER) {
      on("playerDropped", () => {
        const src = source;
        for (const [_k, map] of this.#syncedCalls) {
          map.removeSubscriber(src);
        }
      });
      return;
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
    $SERVER: {
      if (!GlobalData.NetworkTick && GlobalData.IS_SERVER) {
        GlobalData.NetworkTick = setTick(() => {
          for (const networkedThis of GlobalData.NetworkedTicks) {
            networkedThis.networkTick();
          }
        });
      }
    }
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
            $SERVER: {
              curMap.#queuedChanges.push([0 /* SubValueChanged */, key, p, newValue]);
            }
          }
          return success;
        }
      };
      v = new Proxy(v, objectChangeHandler);
    }
    super.set(key, v);
    this.#pushChangeForListener(key, v);
    $SERVER: {
      this.#queuedChanges.push([1 /* Add */, key, v]);
    }
    return this;
  }
  /*
   * Resets the map to its default state
   */
  clear() {
    this.#queuedChanges = [];
    this.#queuedChanges.push([3 /* Reset */]);
    super.clear();
  }
  delete(key) {
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
    SetConvar(variable, value);
  }
  setReplicated(variable, value) {
    SetConvarReplicated(variable, value);
  }
  setServerInfo(variable, value) {
    SetConvarServerInfo(variable, value);
  }
};

// src/common/Command.ts
var commands = [];
$SERVER: {
  on("playerJoining", () => emitNet("chat:addSuggestions", source, commands));
}
function registerCommand(name, commandHandler, restricted) {
  if (Array.isArray(name)) {
    for (const command of name) {
      registerCommand(command, commandHandler, restricted);
    }
    return;
  }
  RegisterCommand(name, commandHandler, !!restricted);
  $SERVER: {
    const ace = `command.${name}`;
    if (typeof restricted === "string") {
      if (IsPrincipalAceAllowed(restricted, ace)) return;
      return ExecuteCommand(`add_ace ${restricted} ${ace} allow`);
    }
    if (Array.isArray(restricted)) {
      for (const principal of restricted) {
        if (!IsPrincipalAceAllowed(principal, ace)) ExecuteCommand(`add_ace ${restricted} ${ace} allow`);
      }
    }
  }
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
        $SERVER: {
          commands.push(this);
          emitNet("chat:addSuggestions", -1, this);
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
          $SERVER: {
            value = arg === "me" ? source2 : +arg;
            if (!value || !DoesPlayerExist(value.toString())) value = void 0;
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
    return SaveResourceFile(this.name, fileName, data, length);
  }
  scheduleTick() {
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

// src/server/enum/eEntityType.ts
var eEntityType = /* @__PURE__ */ ((eEntityType2) => {
  eEntityType2[eEntityType2["Ped"] = 1] = "Ped";
  eEntityType2[eEntityType2["Automobile"] = 2] = "Automobile";
  eEntityType2[eEntityType2["Prop"] = 3] = "Prop";
  return eEntityType2;
})(eEntityType || {});

// src/server/enum/PopulationType.ts
var PopulationType = /* @__PURE__ */ ((PopulationType2) => {
  PopulationType2[PopulationType2["Unknown"] = 0] = "Unknown";
  PopulationType2[PopulationType2["RandomPermanent"] = 1] = "RandomPermanent";
  PopulationType2[PopulationType2["RandomParked"] = 2] = "RandomParked";
  PopulationType2[PopulationType2["Randompatrol"] = 3] = "Randompatrol";
  PopulationType2[PopulationType2["RandomScenario"] = 4] = "RandomScenario";
  PopulationType2[PopulationType2["RandomAmbient"] = 5] = "RandomAmbient";
  PopulationType2[PopulationType2["Permanent"] = 6] = "Permanent";
  PopulationType2[PopulationType2["Mission"] = 7] = "Mission";
  PopulationType2[PopulationType2["Replay"] = 8] = "Replay";
  PopulationType2[PopulationType2["Cache"] = 9] = "Cache";
  PopulationType2[PopulationType2["Tool"] = 10] = "Tool";
  return PopulationType2;
})(PopulationType || {});

// src/server/enum/VehicleLockStatus.ts
var VehicleLockStatus = /* @__PURE__ */ ((VehicleLockStatus2) => {
  VehicleLockStatus2[VehicleLockStatus2["None"] = 0] = "None";
  VehicleLockStatus2[VehicleLockStatus2["Locked"] = 2] = "Locked";
  VehicleLockStatus2[VehicleLockStatus2["LockedForPlayer"] = 3] = "LockedForPlayer";
  VehicleLockStatus2[VehicleLockStatus2["StickPlayerInside"] = 4] = "StickPlayerInside";
  VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenInto"] = 7] = "CanBeBrokenInto";
  VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenIntoPersist"] = 8] = "CanBeBrokenIntoPersist";
  VehicleLockStatus2[VehicleLockStatus2["CannotBeTriedToEnter"] = 10] = "CannotBeTriedToEnter";
  return VehicleLockStatus2;
})(VehicleLockStatus || {});

// src/server/enum/VehicleType.ts
var VehicleType = /* @__PURE__ */ ((VehicleType2) => {
  VehicleType2["Automobile"] = "automobile";
  VehicleType2["Bike"] = "bike";
  VehicleType2["Boat"] = "boat";
  VehicleType2["Heli"] = "heli";
  VehicleType2["Plane"] = "plane";
  VehicleType2["Submarine"] = "submarine";
  VehicleType2["Trailer"] = "trailer";
  VehicleType2["Train"] = "train";
  return VehicleType2;
})(VehicleType || {});

// src/server/enum/OrphanMode.ts
var OrphanMode = /* @__PURE__ */ ((OrphanMode2) => {
  OrphanMode2[OrphanMode2["DeleteWhenNotRelevant"] = 0] = "DeleteWhenNotRelevant";
  OrphanMode2[OrphanMode2["DeleteOnOwnerDisconnect"] = 1] = "DeleteOnOwnerDisconnect";
  OrphanMode2[OrphanMode2["KeepEntity"] = 2] = "KeepEntity";
  return OrphanMode2;
})(OrphanMode || {});

// src/server/entities/Entity.ts
var Entity2 = class _Entity extends BaseEntity {
  static {
    __name(this, "Entity");
  }
  constructor(handle) {
    super(handle);
  }
  static fromNetworkId(netId) {
    return new _Entity(NetworkGetEntityFromNetworkId(netId));
  }
  static fromHandle(handle) {
    return new _Entity(handle);
  }
};

// src/server/entities/Prop.ts
var Prop = class _Prop extends BaseEntity {
  static {
    __name(this, "Prop");
  }
  type = 1 /* Prop */;
  constructor(handle) {
    super(handle);
  }
  /**
   * Get an interable list of props currently on the server
   * @returns Iterable list of Props.
   */
  static *AllProps() {
    for (const prop of GetAllObjects()) {
      yield new _Prop(prop);
    }
  }
  static fromNetworkId(networkId) {
    const ent = NetworkGetEntityFromNetworkId(networkId);
    if (ent === 0) return null;
    return new _Prop(ent);
  }
  static fromStateBagName(stateBagName) {
    const ent = GetEntityFromStateBagName(stateBagName);
    if (ent === 0) return null;
    return new _Prop(ent);
  }
  static fromHandle(handle) {
    return new _Prop(handle);
  }
};
export {
  Color,
  Command,
  ConVar,
  ConVarType,
  Convar,
  Delay,
  DisablePrettyPrint,
  Entity2 as Entity,
  Event,
  Exports,
  Game,
  Kvp,
  Maths,
  NetEvent,
  NetworkedMap,
  NuiEvent,
  OrphanMode,
  Ped,
  Player2 as Player,
  PointF,
  PopulationType,
  Prop,
  Quaternion,
  Resource,
  SetTick,
  Vector2,
  Vector3,
  Vector4,
  Vehicle,
  VehicleLockStatus,
  VehicleType,
  cleanPlayerName,
  eEntityType,
  enumValues,
  getStringFromUInt8Array,
  getUInt32FromUint8Array
};
