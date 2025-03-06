var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/fivem/utils/Maths.ts
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

// src/fivem/utils/String.ts
var _String = class {
  static {
    __name(this, "_String");
  }
  static stringToArray(input) {
    let stringsNeeded = 1;
    if (input.length > 99) {
      stringsNeeded = Math.ceil(input.length / 99);
    }
    const outputString = new Array(stringsNeeded);
    for (let i = 0; i < stringsNeeded; i++) {
      outputString[i] = input.substring(i * 99, i * 99 + Maths.clamp(input.substring(i * 99).length, 0, 99));
    }
    return outputString;
  }
  static measureStringWidthNoConvert(input, font = 0 /* ChaletLondon */, scale = 0) {
    SetTextEntryForWidth("STRING");
    Text.addLongString(input);
    SetTextFont(font);
    SetTextScale(1, scale);
    return GetTextScreenWidth(false);
  }
  static measureString(str, font, scale, screenWidth = Screen.ScaledWidth) {
    return this.measureStringWidthNoConvert(str, font, scale) * screenWidth;
  }
};

// src/fivem/utils/LiteEvent.ts
var LiteEvent = class {
  static {
    __name(this, "LiteEvent");
  }
  handlers = [];
  on(handler) {
    this.handlers.push(handler);
  }
  off(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }
  emit(...args) {
    this.handlers.slice(0).forEach((h) => {
      h(...args);
    });
  }
  expose() {
    return this;
  }
};

// src/fivem/utils/PointF.ts
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

// src/fivem/utils/Crypto.ts
var Crypto = class {
  static {
    __name(this, "Crypto");
  }
  static uuidv4() {
    let uuid = "";
    for (let ii = 0; ii < 32; ii += 1) {
      switch (ii) {
        case 8:
        case 20:
          uuid += "-";
          uuid += (Math.random() * 16 | 0).toString(16);
          break;
        case 12:
          uuid += "-";
          uuid += "4";
          break;
        case 16:
          uuid += "-";
          uuid += (Math.random() * 4 | 8).toString(16);
          break;
        default:
          uuid += (Math.random() * 16 | 0).toString(16);
      }
    }
    return uuid;
  }
};

// src/fivem/utils/Point.ts
var Point = class _Point {
  static {
    __name(this, "Point");
  }
  static parse(arg) {
    let point = new _Point();
    if (arg) {
      if (typeof arg === "object") {
        if (Array.isArray(arg)) {
          if (arg.length === 2) {
            point = new _Point(arg[0], arg[1]);
          }
        } else if (arg.X && arg.Y) {
          point = new _Point(arg.X, arg.Y);
        }
      } else {
        if (arg.indexOf(",") !== -1) {
          const arr = arg.split(",");
          point = new _Point(Number.parseFloat(arr[0]), Number.parseFloat(arr[1]));
        }
      }
    }
    return point;
  }
  X;
  Y;
  constructor(x = 0, y = 0) {
    this.X = x;
    this.Y = y;
  }
};

// src/fivem/utils/Size.ts
var Size = class {
  static {
    __name(this, "Size");
  }
  width;
  height;
  constructor(w = 0, h = 0) {
    this.width = w;
    this.height = h;
  }
};

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

// src/common/utils/Maths.ts
var Maths2 = class {
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

// src/fivem/utils/Animations.ts
var LoadAnimDict = /* @__PURE__ */ __name(async (animDict, waitTime = 1e3) => {
  const start = GetGameTimer();
  if (!HasAnimDictLoaded(animDict)) {
    RequestAnimDict(animDict);
  }
  while (!HasAnimDictLoaded(animDict)) {
    if (GetGameTimer() - start >= waitTime) return false;
    await Wait(0);
  }
  return true;
}, "LoadAnimDict");
var LoadAnimDictArray = /* @__PURE__ */ __name(async (animDict, waitTime = 1e3) => {
  const start = GetGameTimer();
  for (const dict of animDict) {
    if (!HasAnimDictLoaded(dict)) {
      RequestAnimDict(dict);
    }
  }
  const animsLoaded = /* @__PURE__ */ new Set();
  while (animsLoaded.size !== animDict.length) {
    for (const dict of animDict) {
      if (!animsLoaded.has(dict) && HasAnimDictLoaded(dict)) {
        animsLoaded.add(dict);
      }
    }
    if (GetGameTimer() - start >= waitTime) return [false, animDict.filter((dict) => !animsLoaded.has(dict))];
    await Wait(0);
  }
  return [true, null];
}, "LoadAnimDictArray");
var RemoveAnimDictArray = /* @__PURE__ */ __name((animDict) => {
  for (const dict of animDict) {
    RemoveAnimDict(dict);
  }
}, "RemoveAnimDictArray");

// src/fivem/utils/index.ts
var Wait = /* @__PURE__ */ __name((milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)), "Wait");

// src/fivem/Audio.ts
var Audio = class _Audio {
  static {
    __name(this, "Audio");
  }
  static playSoundAt(position, sound, set, generateSoundId = true) {
    const SOUND_ID = generateSoundId ? GetSoundId() : -1;
    PlaySoundFromCoord(SOUND_ID, sound, position.x, position.y, position.z, set ?? "", false, 0, false);
    return SOUND_ID;
  }
  static playSoundFromEntity(entity, sound, set, generateSoundId = true) {
    const SOUND_ID = generateSoundId ? GetSoundId() : -1;
    PlaySoundFromEntity(SOUND_ID, sound, entity.Handle, set ?? "", false, 0);
    return SOUND_ID;
  }
  static playSoundFrontEnd(sound, set, generateSoundId = true) {
    const SOUND_ID = generateSoundId ? GetSoundId() : -1;
    PlaySoundFrontend(SOUND_ID, sound, set ?? "", false);
    return SOUND_ID;
  }
  static stopSound(soundId) {
    StopSound(soundId);
  }
  static releaseSound(soundId) {
    ReleaseSoundId(soundId);
  }
  static hasSoundFinished(soundId) {
    return HasSoundFinished(soundId);
  }
  static setAudioFlag(flag, toggle) {
    if (typeof flag === "string") {
      SetAudioFlag(flag, toggle);
    } else {
      SetAudioFlag(_Audio.audioFlags[Number(flag)], toggle);
    }
  }
  static playSound(soundFile, soundSet) {
    _Audio.releaseSound(_Audio.playSoundFrontEnd(soundFile, soundSet));
  }
  static playMusic(musicFile) {
    if (!_Audio.cachedMusicFile) {
      CancelMusicEvent(musicFile);
    }
    _Audio.cachedMusicFile = musicFile;
    TriggerMusicEvent(musicFile);
  }
  static stopMusic(musicFile) {
    if (!musicFile) {
      if (!_Audio.cachedMusicFile) {
        CancelMusicEvent(_Audio.cachedMusicFile);
        _Audio.cachedMusicFile = "";
      }
    } else {
      CancelMusicEvent(musicFile ?? "");
    }
  }
  static cachedMusicFile;
  static audioFlags = [
    "ActivateSwitchWheelAudio",
    "AllowCutsceneOverScreenFade",
    "AllowForceRadioAfterRetune",
    "AllowPainAndAmbientSpeechToPlayDuringCutscene",
    "AllowPlayerAIOnMission",
    "AllowPoliceScannerWhenPlayerHasNoControl",
    "AllowRadioDuringSwitch",
    "AllowRadioOverScreenFade",
    "AllowScoreAndRadio",
    "AllowScriptedSpeechInSlowMo",
    "AvoidMissionCompleteDelay",
    "DisableAbortConversationForDeathAndInjury",
    "DisableAbortConversationForRagdoll",
    "DisableBarks",
    "DisableFlightMusic",
    "DisableReplayScriptStreamRecording",
    "EnableHeadsetBeep",
    "ForceConversationInterrupt",
    "ForceSeamlessRadioSwitch",
    "ForceSniperAudio",
    "FrontendRadioDisabled",
    "HoldMissionCompleteWhenPrepared",
    "IsDirectorModeActive",
    "IsPlayerOnMissionForSpeech",
    "ListenerReverbDisabled",
    "LoadMPData",
    "MobileRadioInGame",
    "OnlyAllowScriptTriggerPoliceScanner",
    "PlayMenuMusic",
    "PoliceScannerDisabled",
    "ScriptedConvListenerMaySpeak",
    "SpeechDucksScore",
    "SuppressPlayerScubaBreathing",
    "WantedMusicDisabled",
    "WantedMusicOnMission"
  ];
};

// src/fivem/enums/Alignment.ts
var Alignment = /* @__PURE__ */ ((Alignment2) => {
  Alignment2[Alignment2["Left"] = 0] = "Left";
  Alignment2[Alignment2["Centered"] = 1] = "Centered";
  Alignment2[Alignment2["Right"] = 2] = "Right";
  return Alignment2;
})(Alignment || {});

// src/fivem/enums/AnimationFlags.ts
var AnimationFlags = /* @__PURE__ */ ((AnimationFlags2) => {
  AnimationFlags2[AnimationFlags2["None"] = 0] = "None";
  AnimationFlags2[AnimationFlags2["Looping"] = 1] = "Looping";
  AnimationFlags2[AnimationFlags2["HoldLastFrame"] = 2] = "HoldLastFrame";
  AnimationFlags2[AnimationFlags2["RepositionWhenFinished"] = 4] = "RepositionWhenFinished";
  AnimationFlags2[AnimationFlags2["NotInterruptible"] = 8] = "NotInterruptible";
  AnimationFlags2[AnimationFlags2["UpperBody"] = 16] = "UpperBody";
  AnimationFlags2[AnimationFlags2["Secondary"] = 32] = "Secondary";
  AnimationFlags2[AnimationFlags2["ReorientWhenFinished"] = 64] = "ReorientWhenFinished";
  AnimationFlags2[AnimationFlags2["AbortOnPedMovement"] = 128] = "AbortOnPedMovement";
  AnimationFlags2[AnimationFlags2["Additive"] = 256] = "Additive";
  AnimationFlags2[AnimationFlags2["TurnOffCollision"] = 512] = "TurnOffCollision";
  AnimationFlags2[AnimationFlags2["OverridePhysics"] = 1024] = "OverridePhysics";
  AnimationFlags2[AnimationFlags2["IgnorePhysics"] = 2048] = "IgnorePhysics";
  AnimationFlags2[AnimationFlags2["ExtractInitialOffset"] = 4096] = "ExtractInitialOffset";
  AnimationFlags2[AnimationFlags2["ExitAfterInterrupted"] = 8192] = "ExitAfterInterrupted";
  AnimationFlags2[AnimationFlags2["TagSyncIn"] = 16384] = "TagSyncIn";
  AnimationFlags2[AnimationFlags2["TagSyncOut"] = 32768] = "TagSyncOut";
  AnimationFlags2[AnimationFlags2["TagSyncContinous"] = 65536] = "TagSyncContinous";
  AnimationFlags2[AnimationFlags2["ForceStart"] = 131072] = "ForceStart";
  AnimationFlags2[AnimationFlags2["UseKinematicPhysics"] = 262144] = "UseKinematicPhysics";
  AnimationFlags2[AnimationFlags2["UseMoverExtrations"] = 524288] = "UseMoverExtrations";
  AnimationFlags2[AnimationFlags2["HideWeapon"] = 1048576] = "HideWeapon";
  AnimationFlags2[AnimationFlags2["EndsInDeadPose"] = 2097152] = "EndsInDeadPose";
  AnimationFlags2[AnimationFlags2["ActivateRagdoolOnCollision"] = 4194304] = "ActivateRagdoolOnCollision";
  AnimationFlags2[AnimationFlags2["DontExitOnDeath"] = 8388608] = "DontExitOnDeath";
  AnimationFlags2[AnimationFlags2["AbortOnWeaponDamage"] = 16777216] = "AbortOnWeaponDamage";
  AnimationFlags2[AnimationFlags2["DisableForcedPhysicsUpdate"] = 33554432] = "DisableForcedPhysicsUpdate";
  AnimationFlags2[AnimationFlags2["ProcessAttachmentsOnStart"] = 67108864] = "ProcessAttachmentsOnStart";
  AnimationFlags2[AnimationFlags2["ExpandPedCapsuleFromSkeleton"] = 134217728] = "ExpandPedCapsuleFromSkeleton";
  AnimationFlags2[AnimationFlags2["UseAlternativeFpAnim"] = 268435456] = "UseAlternativeFpAnim";
  AnimationFlags2[AnimationFlags2["BlendOutWrtLastFrame"] = 536870912] = "BlendOutWrtLastFrame";
  AnimationFlags2[AnimationFlags2["UseFullBlending"] = 1073741824] = "UseFullBlending";
  return AnimationFlags2;
})(AnimationFlags || {});

// src/fivem/enums/AudioFlag.ts
var AudioFlag = /* @__PURE__ */ ((AudioFlag2) => {
  AudioFlag2[AudioFlag2["ActivateSwitchWheelAudio"] = 0] = "ActivateSwitchWheelAudio";
  AudioFlag2[AudioFlag2["AllowCutsceneOverScreenFade"] = 1] = "AllowCutsceneOverScreenFade";
  AudioFlag2[AudioFlag2["AllowForceRadioAfterRetune"] = 2] = "AllowForceRadioAfterRetune";
  AudioFlag2[AudioFlag2["AllowPainAndAmbientSpeechToPlayDuringCutscene"] = 3] = "AllowPainAndAmbientSpeechToPlayDuringCutscene";
  AudioFlag2[AudioFlag2["AllowPlayerAIOnMission"] = 4] = "AllowPlayerAIOnMission";
  AudioFlag2[AudioFlag2["AllowPoliceScannerWhenPlayerHasNoControl"] = 5] = "AllowPoliceScannerWhenPlayerHasNoControl";
  AudioFlag2[AudioFlag2["AllowRadioDuringSwitch"] = 6] = "AllowRadioDuringSwitch";
  AudioFlag2[AudioFlag2["AllowRadioOverScreenFade"] = 7] = "AllowRadioOverScreenFade";
  AudioFlag2[AudioFlag2["AllowScoreAndRadio"] = 8] = "AllowScoreAndRadio";
  AudioFlag2[AudioFlag2["AllowScriptedSpeechInSlowMo"] = 9] = "AllowScriptedSpeechInSlowMo";
  AudioFlag2[AudioFlag2["AvoidMissionCompleteDelay"] = 10] = "AvoidMissionCompleteDelay";
  AudioFlag2[AudioFlag2["DisableAbortConversationForDeathAndInjury"] = 11] = "DisableAbortConversationForDeathAndInjury";
  AudioFlag2[AudioFlag2["DisableAbortConversationForRagdoll"] = 12] = "DisableAbortConversationForRagdoll";
  AudioFlag2[AudioFlag2["DisableBarks"] = 13] = "DisableBarks";
  AudioFlag2[AudioFlag2["DisableFlightMusic"] = 14] = "DisableFlightMusic";
  AudioFlag2[AudioFlag2["DisableReplayScriptStreamRecording"] = 15] = "DisableReplayScriptStreamRecording";
  AudioFlag2[AudioFlag2["EnableHeadsetBeep"] = 16] = "EnableHeadsetBeep";
  AudioFlag2[AudioFlag2["ForceConversationInterrupt"] = 17] = "ForceConversationInterrupt";
  AudioFlag2[AudioFlag2["ForceSeamlessRadioSwitch"] = 18] = "ForceSeamlessRadioSwitch";
  AudioFlag2[AudioFlag2["ForceSniperAudio"] = 19] = "ForceSniperAudio";
  AudioFlag2[AudioFlag2["FrontendRadioDisabled"] = 20] = "FrontendRadioDisabled";
  AudioFlag2[AudioFlag2["HoldMissionCompleteWhenPrepared"] = 21] = "HoldMissionCompleteWhenPrepared";
  AudioFlag2[AudioFlag2["IsDirectorModeActive"] = 22] = "IsDirectorModeActive";
  AudioFlag2[AudioFlag2["IsPlayerOnMissionForSpeech"] = 23] = "IsPlayerOnMissionForSpeech";
  AudioFlag2[AudioFlag2["ListenerReverbDisabled"] = 24] = "ListenerReverbDisabled";
  AudioFlag2[AudioFlag2["LoadMPData"] = 25] = "LoadMPData";
  AudioFlag2[AudioFlag2["MobileRadioInGame"] = 26] = "MobileRadioInGame";
  AudioFlag2[AudioFlag2["OnlyAllowScriptTriggerPoliceScanner"] = 27] = "OnlyAllowScriptTriggerPoliceScanner";
  AudioFlag2[AudioFlag2["PlayMenuMusic"] = 28] = "PlayMenuMusic";
  AudioFlag2[AudioFlag2["PoliceScannerDisabled"] = 29] = "PoliceScannerDisabled";
  AudioFlag2[AudioFlag2["ScriptedConvListenerMaySpeak"] = 30] = "ScriptedConvListenerMaySpeak";
  AudioFlag2[AudioFlag2["SpeechDucksScore"] = 31] = "SpeechDucksScore";
  AudioFlag2[AudioFlag2["SuppressPlayerScubaBreathing"] = 32] = "SuppressPlayerScubaBreathing";
  AudioFlag2[AudioFlag2["WantedMusicDisabled"] = 33] = "WantedMusicDisabled";
  AudioFlag2[AudioFlag2["WantedMusicOnMission"] = 34] = "WantedMusicOnMission";
  return AudioFlag2;
})(AudioFlag || {});

// src/fivem/enums/BadgeStyle.ts
var BadgeStyle = /* @__PURE__ */ ((BadgeStyle2) => {
  BadgeStyle2[BadgeStyle2["None"] = 0] = "None";
  BadgeStyle2[BadgeStyle2["Lock"] = 1] = "Lock";
  BadgeStyle2[BadgeStyle2["Star"] = 2] = "Star";
  BadgeStyle2[BadgeStyle2["Warning"] = 3] = "Warning";
  BadgeStyle2[BadgeStyle2["Crown"] = 4] = "Crown";
  BadgeStyle2[BadgeStyle2["MedalBronze"] = 5] = "MedalBronze";
  BadgeStyle2[BadgeStyle2["MedalGold"] = 6] = "MedalGold";
  BadgeStyle2[BadgeStyle2["MedalSilver"] = 7] = "MedalSilver";
  BadgeStyle2[BadgeStyle2["Cash"] = 8] = "Cash";
  BadgeStyle2[BadgeStyle2["Coke"] = 9] = "Coke";
  BadgeStyle2[BadgeStyle2["Heroin"] = 10] = "Heroin";
  BadgeStyle2[BadgeStyle2["Meth"] = 11] = "Meth";
  BadgeStyle2[BadgeStyle2["Weed"] = 12] = "Weed";
  BadgeStyle2[BadgeStyle2["Ammo"] = 13] = "Ammo";
  BadgeStyle2[BadgeStyle2["Armor"] = 14] = "Armor";
  BadgeStyle2[BadgeStyle2["Barber"] = 15] = "Barber";
  BadgeStyle2[BadgeStyle2["Clothing"] = 16] = "Clothing";
  BadgeStyle2[BadgeStyle2["Franklin"] = 17] = "Franklin";
  BadgeStyle2[BadgeStyle2["Bike"] = 18] = "Bike";
  BadgeStyle2[BadgeStyle2["Car"] = 19] = "Car";
  BadgeStyle2[BadgeStyle2["Gun"] = 20] = "Gun";
  BadgeStyle2[BadgeStyle2["HealthHeart"] = 21] = "HealthHeart";
  BadgeStyle2[BadgeStyle2["MakeupBrush"] = 22] = "MakeupBrush";
  BadgeStyle2[BadgeStyle2["Mask"] = 23] = "Mask";
  BadgeStyle2[BadgeStyle2["Michael"] = 24] = "Michael";
  BadgeStyle2[BadgeStyle2["Tattoo"] = 25] = "Tattoo";
  BadgeStyle2[BadgeStyle2["Tick"] = 26] = "Tick";
  BadgeStyle2[BadgeStyle2["Trevor"] = 27] = "Trevor";
  BadgeStyle2[BadgeStyle2["Female"] = 28] = "Female";
  BadgeStyle2[BadgeStyle2["Male"] = 29] = "Male";
  BadgeStyle2[BadgeStyle2["LockArena"] = 30] = "LockArena";
  BadgeStyle2[BadgeStyle2["Adversary"] = 31] = "Adversary";
  BadgeStyle2[BadgeStyle2["BaseJumping"] = 32] = "BaseJumping";
  BadgeStyle2[BadgeStyle2["Briefcase"] = 33] = "Briefcase";
  BadgeStyle2[BadgeStyle2["MissionStar"] = 34] = "MissionStar";
  BadgeStyle2[BadgeStyle2["Deathmatch"] = 35] = "Deathmatch";
  BadgeStyle2[BadgeStyle2["Castle"] = 36] = "Castle";
  BadgeStyle2[BadgeStyle2["Trophy"] = 37] = "Trophy";
  BadgeStyle2[BadgeStyle2["RaceFlag"] = 38] = "RaceFlag";
  BadgeStyle2[BadgeStyle2["RaceFlagPlane"] = 39] = "RaceFlagPlane";
  BadgeStyle2[BadgeStyle2["RaceFlagBicycle"] = 40] = "RaceFlagBicycle";
  BadgeStyle2[BadgeStyle2["RaceFlagPerson"] = 41] = "RaceFlagPerson";
  BadgeStyle2[BadgeStyle2["RaceFlagCar"] = 42] = "RaceFlagCar";
  BadgeStyle2[BadgeStyle2["RaceFlagBoatAnchor"] = 43] = "RaceFlagBoatAnchor";
  BadgeStyle2[BadgeStyle2["Rockstar"] = 44] = "Rockstar";
  BadgeStyle2[BadgeStyle2["Stunt"] = 45] = "Stunt";
  BadgeStyle2[BadgeStyle2["StuntPremium"] = 46] = "StuntPremium";
  BadgeStyle2[BadgeStyle2["RaceFlagStuntJump"] = 47] = "RaceFlagStuntJump";
  BadgeStyle2[BadgeStyle2["Shield"] = 48] = "Shield";
  BadgeStyle2[BadgeStyle2["TeamDeathmatch"] = 49] = "TeamDeathmatch";
  BadgeStyle2[BadgeStyle2["VehicleDeathmatch"] = 50] = "VehicleDeathmatch";
  BadgeStyle2[BadgeStyle2["MpAmmoPickup"] = 51] = "MpAmmoPickup";
  BadgeStyle2[BadgeStyle2["MpAmmo"] = 52] = "MpAmmo";
  BadgeStyle2[BadgeStyle2["MpCash"] = 53] = "MpCash";
  BadgeStyle2[BadgeStyle2["MpRp"] = 54] = "MpRp";
  BadgeStyle2[BadgeStyle2["MpSpectating"] = 55] = "MpSpectating";
  BadgeStyle2[BadgeStyle2["Sale"] = 56] = "Sale";
  BadgeStyle2[BadgeStyle2["GlobeWhite"] = 57] = "GlobeWhite";
  BadgeStyle2[BadgeStyle2["GlobeRed"] = 58] = "GlobeRed";
  BadgeStyle2[BadgeStyle2["GlobeBlue"] = 59] = "GlobeBlue";
  BadgeStyle2[BadgeStyle2["GlobeYellow"] = 60] = "GlobeYellow";
  BadgeStyle2[BadgeStyle2["GlobeGreen"] = 61] = "GlobeGreen";
  BadgeStyle2[BadgeStyle2["GlobeOrange"] = 62] = "GlobeOrange";
  BadgeStyle2[BadgeStyle2["InvArmWrestling"] = 63] = "InvArmWrestling";
  BadgeStyle2[BadgeStyle2["InvBasejump"] = 64] = "InvBasejump";
  BadgeStyle2[BadgeStyle2["InvMission"] = 65] = "InvMission";
  BadgeStyle2[BadgeStyle2["InvDarts"] = 66] = "InvDarts";
  BadgeStyle2[BadgeStyle2["InvDeathmatch"] = 67] = "InvDeathmatch";
  BadgeStyle2[BadgeStyle2["InvDrug"] = 68] = "InvDrug";
  BadgeStyle2[BadgeStyle2["InvCastle"] = 69] = "InvCastle";
  BadgeStyle2[BadgeStyle2["InvGolf"] = 70] = "InvGolf";
  BadgeStyle2[BadgeStyle2["InvBike"] = 71] = "InvBike";
  BadgeStyle2[BadgeStyle2["InvBoat"] = 72] = "InvBoat";
  BadgeStyle2[BadgeStyle2["InvAnchor"] = 73] = "InvAnchor";
  BadgeStyle2[BadgeStyle2["InvCar"] = 74] = "InvCar";
  BadgeStyle2[BadgeStyle2["InvDollar"] = 75] = "InvDollar";
  BadgeStyle2[BadgeStyle2["InvCoke"] = 76] = "InvCoke";
  BadgeStyle2[BadgeStyle2["InvKey"] = 77] = "InvKey";
  BadgeStyle2[BadgeStyle2["InvData"] = 78] = "InvData";
  BadgeStyle2[BadgeStyle2["InvHeli"] = 79] = "InvHeli";
  BadgeStyle2[BadgeStyle2["InvHeorin"] = 80] = "InvHeorin";
  BadgeStyle2[BadgeStyle2["InvKeycard"] = 81] = "InvKeycard";
  BadgeStyle2[BadgeStyle2["InvMeth"] = 82] = "InvMeth";
  BadgeStyle2[BadgeStyle2["InvBriefcase"] = 83] = "InvBriefcase";
  BadgeStyle2[BadgeStyle2["InvLink"] = 84] = "InvLink";
  BadgeStyle2[BadgeStyle2["InvPerson"] = 85] = "InvPerson";
  BadgeStyle2[BadgeStyle2["InvPlane"] = 86] = "InvPlane";
  BadgeStyle2[BadgeStyle2["InvPlane2"] = 87] = "InvPlane2";
  BadgeStyle2[BadgeStyle2["InvQuestionmark"] = 88] = "InvQuestionmark";
  BadgeStyle2[BadgeStyle2["InvRemote"] = 89] = "InvRemote";
  BadgeStyle2[BadgeStyle2["InvSafe"] = 90] = "InvSafe";
  BadgeStyle2[BadgeStyle2["InvSteerWheel"] = 91] = "InvSteerWheel";
  BadgeStyle2[BadgeStyle2["InvWeapon"] = 92] = "InvWeapon";
  BadgeStyle2[BadgeStyle2["InvWeed"] = 93] = "InvWeed";
  BadgeStyle2[BadgeStyle2["InvRaceFlagPlane"] = 94] = "InvRaceFlagPlane";
  BadgeStyle2[BadgeStyle2["InvRaceFlagBicycle"] = 95] = "InvRaceFlagBicycle";
  BadgeStyle2[BadgeStyle2["InvRaceFlagBoatAnchor"] = 96] = "InvRaceFlagBoatAnchor";
  BadgeStyle2[BadgeStyle2["InvRaceFlagPerson"] = 97] = "InvRaceFlagPerson";
  BadgeStyle2[BadgeStyle2["InvRaceFlagCar"] = 98] = "InvRaceFlagCar";
  BadgeStyle2[BadgeStyle2["InvRaceFlagHelmet"] = 99] = "InvRaceFlagHelmet";
  BadgeStyle2[BadgeStyle2["InvShootingRange"] = 100] = "InvShootingRange";
  BadgeStyle2[BadgeStyle2["InvSurvival"] = 101] = "InvSurvival";
  BadgeStyle2[BadgeStyle2["InvTeamDeathmatch"] = 102] = "InvTeamDeathmatch";
  BadgeStyle2[BadgeStyle2["InvTennis"] = 103] = "InvTennis";
  BadgeStyle2[BadgeStyle2["InvVehicleDeathmatch"] = 104] = "InvVehicleDeathmatch";
  BadgeStyle2[BadgeStyle2["AudioMute"] = 105] = "AudioMute";
  BadgeStyle2[BadgeStyle2["AudioInactive"] = 106] = "AudioInactive";
  BadgeStyle2[BadgeStyle2["AudioVol1"] = 107] = "AudioVol1";
  BadgeStyle2[BadgeStyle2["AudioVol2"] = 108] = "AudioVol2";
  BadgeStyle2[BadgeStyle2["AudioVol3"] = 109] = "AudioVol3";
  BadgeStyle2[BadgeStyle2["CountryUsa"] = 110] = "CountryUsa";
  BadgeStyle2[BadgeStyle2["CountryUk"] = 111] = "CountryUk";
  BadgeStyle2[BadgeStyle2["CountrySweden"] = 112] = "CountrySweden";
  BadgeStyle2[BadgeStyle2["CountryKorea"] = 113] = "CountryKorea";
  BadgeStyle2[BadgeStyle2["CountryJapan"] = 114] = "CountryJapan";
  BadgeStyle2[BadgeStyle2["CountryItaly"] = 115] = "CountryItaly";
  BadgeStyle2[BadgeStyle2["CountryGermany"] = 116] = "CountryGermany";
  BadgeStyle2[BadgeStyle2["CountryFrance"] = 117] = "CountryFrance";
  BadgeStyle2[BadgeStyle2["BrandAlbany"] = 118] = "BrandAlbany";
  BadgeStyle2[BadgeStyle2["BrandAnnis"] = 119] = "BrandAnnis";
  BadgeStyle2[BadgeStyle2["BrandBanshee"] = 120] = "BrandBanshee";
  BadgeStyle2[BadgeStyle2["BrandBenefactor"] = 121] = "BrandBenefactor";
  BadgeStyle2[BadgeStyle2["BrandBf"] = 122] = "BrandBf";
  BadgeStyle2[BadgeStyle2["BrandBollokan"] = 123] = "BrandBollokan";
  BadgeStyle2[BadgeStyle2["BrandBravado"] = 124] = "BrandBravado";
  BadgeStyle2[BadgeStyle2["BrandBrute"] = 125] = "BrandBrute";
  BadgeStyle2[BadgeStyle2["BrandBuckingham"] = 126] = "BrandBuckingham";
  BadgeStyle2[BadgeStyle2["BrandCanis"] = 127] = "BrandCanis";
  BadgeStyle2[BadgeStyle2["BrandChariot"] = 128] = "BrandChariot";
  BadgeStyle2[BadgeStyle2["BrandCheval"] = 129] = "BrandCheval";
  BadgeStyle2[BadgeStyle2["BrandClassique"] = 130] = "BrandClassique";
  BadgeStyle2[BadgeStyle2["BrandCoil"] = 131] = "BrandCoil";
  BadgeStyle2[BadgeStyle2["BrandDeclasse"] = 132] = "BrandDeclasse";
  BadgeStyle2[BadgeStyle2["BrandDewbauchee"] = 133] = "BrandDewbauchee";
  BadgeStyle2[BadgeStyle2["BrandDilettante"] = 134] = "BrandDilettante";
  BadgeStyle2[BadgeStyle2["BrandDinka"] = 135] = "BrandDinka";
  BadgeStyle2[BadgeStyle2["BrandDundreary"] = 136] = "BrandDundreary";
  BadgeStyle2[BadgeStyle2["BrandEmporer"] = 137] = "BrandEmporer";
  BadgeStyle2[BadgeStyle2["BrandEnus"] = 138] = "BrandEnus";
  BadgeStyle2[BadgeStyle2["BrandFathom"] = 139] = "BrandFathom";
  BadgeStyle2[BadgeStyle2["BrandGalivanter"] = 140] = "BrandGalivanter";
  BadgeStyle2[BadgeStyle2["BrandGrotti"] = 141] = "BrandGrotti";
  BadgeStyle2[BadgeStyle2["BrandGrotti2"] = 142] = "BrandGrotti2";
  BadgeStyle2[BadgeStyle2["BrandHijak"] = 143] = "BrandHijak";
  BadgeStyle2[BadgeStyle2["BrandHvy"] = 144] = "BrandHvy";
  BadgeStyle2[BadgeStyle2["BrandImponte"] = 145] = "BrandImponte";
  BadgeStyle2[BadgeStyle2["BrandInvetero"] = 146] = "BrandInvetero";
  BadgeStyle2[BadgeStyle2["BrandJacksheepe"] = 147] = "BrandJacksheepe";
  BadgeStyle2[BadgeStyle2["BrandLcc"] = 148] = "BrandLcc";
  BadgeStyle2[BadgeStyle2["BrandJobuilt"] = 149] = "BrandJobuilt";
  BadgeStyle2[BadgeStyle2["BrandKarin"] = 150] = "BrandKarin";
  BadgeStyle2[BadgeStyle2["BrandLampadati"] = 151] = "BrandLampadati";
  BadgeStyle2[BadgeStyle2["BrandMaibatsu"] = 152] = "BrandMaibatsu";
  BadgeStyle2[BadgeStyle2["BrandMammoth"] = 153] = "BrandMammoth";
  BadgeStyle2[BadgeStyle2["BrandMtl"] = 154] = "BrandMtl";
  BadgeStyle2[BadgeStyle2["BrandNagasaki"] = 155] = "BrandNagasaki";
  BadgeStyle2[BadgeStyle2["BrandObey"] = 156] = "BrandObey";
  BadgeStyle2[BadgeStyle2["BrandOcelot"] = 157] = "BrandOcelot";
  BadgeStyle2[BadgeStyle2["BrandOverflod"] = 158] = "BrandOverflod";
  BadgeStyle2[BadgeStyle2["BrandPed"] = 159] = "BrandPed";
  BadgeStyle2[BadgeStyle2["BrandPegassi"] = 160] = "BrandPegassi";
  BadgeStyle2[BadgeStyle2["BrandPfister"] = 161] = "BrandPfister";
  BadgeStyle2[BadgeStyle2["BrandPrincipe"] = 162] = "BrandPrincipe";
  BadgeStyle2[BadgeStyle2["BrandProgen"] = 163] = "BrandProgen";
  BadgeStyle2[BadgeStyle2["BrandProgen2"] = 164] = "BrandProgen2";
  BadgeStyle2[BadgeStyle2["BrandRune"] = 165] = "BrandRune";
  BadgeStyle2[BadgeStyle2["BrandSchyster"] = 166] = "BrandSchyster";
  BadgeStyle2[BadgeStyle2["BrandShitzu"] = 167] = "BrandShitzu";
  BadgeStyle2[BadgeStyle2["BrandSpeedophile"] = 168] = "BrandSpeedophile";
  BadgeStyle2[BadgeStyle2["BrandStanley"] = 169] = "BrandStanley";
  BadgeStyle2[BadgeStyle2["BrandTruffade"] = 170] = "BrandTruffade";
  BadgeStyle2[BadgeStyle2["BrandUbermacht"] = 171] = "BrandUbermacht";
  BadgeStyle2[BadgeStyle2["BrandVapid"] = 172] = "BrandVapid";
  BadgeStyle2[BadgeStyle2["BrandVulcar"] = 173] = "BrandVulcar";
  BadgeStyle2[BadgeStyle2["BrandWeeny"] = 174] = "BrandWeeny";
  BadgeStyle2[BadgeStyle2["BrandWestern"] = 175] = "BrandWestern";
  BadgeStyle2[BadgeStyle2["BrandWesternmotorcycle"] = 176] = "BrandWesternmotorcycle";
  BadgeStyle2[BadgeStyle2["BrandWillard"] = 177] = "BrandWillard";
  BadgeStyle2[BadgeStyle2["BrandZirconium"] = 178] = "BrandZirconium";
  BadgeStyle2[BadgeStyle2["Info"] = 179] = "Info";
  return BadgeStyle2;
})(BadgeStyle || {});

// src/fivem/enums/Blip.ts
var BlipColor = /* @__PURE__ */ ((BlipColor2) => {
  BlipColor2[BlipColor2["White"] = 0] = "White";
  BlipColor2[BlipColor2["Red"] = 1] = "Red";
  BlipColor2[BlipColor2["Green"] = 2] = "Green";
  BlipColor2[BlipColor2["Blue"] = 3] = "Blue";
  BlipColor2[BlipColor2["MichaelBlue"] = 42] = "MichaelBlue";
  BlipColor2[BlipColor2["FranklinGreen"] = 43] = "FranklinGreen";
  BlipColor2[BlipColor2["TrevorOrange"] = 44] = "TrevorOrange";
  BlipColor2[BlipColor2["Yellow"] = 66] = "Yellow";
  return BlipColor2;
})(BlipColor || {});
var BlipSprite = /* @__PURE__ */ ((BlipSprite2) => {
  BlipSprite2[BlipSprite2["Standard"] = 1] = "Standard";
  BlipSprite2[BlipSprite2["BigBlip"] = 2] = "BigBlip";
  BlipSprite2[BlipSprite2["PoliceOfficer"] = 3] = "PoliceOfficer";
  BlipSprite2[BlipSprite2["PoliceArea"] = 4] = "PoliceArea";
  BlipSprite2[BlipSprite2["Square"] = 5] = "Square";
  BlipSprite2[BlipSprite2["Player"] = 6] = "Player";
  BlipSprite2[BlipSprite2["North"] = 7] = "North";
  BlipSprite2[BlipSprite2["Waypoint"] = 8] = "Waypoint";
  BlipSprite2[BlipSprite2["BigCircle"] = 9] = "BigCircle";
  BlipSprite2[BlipSprite2["BigCircleOutline"] = 10] = "BigCircleOutline";
  BlipSprite2[BlipSprite2["ArrowUpOutlined"] = 11] = "ArrowUpOutlined";
  BlipSprite2[BlipSprite2["ArrowDownOutlined"] = 12] = "ArrowDownOutlined";
  BlipSprite2[BlipSprite2["ArrowUp"] = 13] = "ArrowUp";
  BlipSprite2[BlipSprite2["ArrowDown"] = 14] = "ArrowDown";
  BlipSprite2[BlipSprite2["PoliceHelicopterAnimated"] = 15] = "PoliceHelicopterAnimated";
  BlipSprite2[BlipSprite2["Jet"] = 16] = "Jet";
  BlipSprite2[BlipSprite2["Number1"] = 17] = "Number1";
  BlipSprite2[BlipSprite2["Number2"] = 18] = "Number2";
  BlipSprite2[BlipSprite2["Number3"] = 19] = "Number3";
  BlipSprite2[BlipSprite2["Number4"] = 20] = "Number4";
  BlipSprite2[BlipSprite2["Number5"] = 21] = "Number5";
  BlipSprite2[BlipSprite2["Number6"] = 22] = "Number6";
  BlipSprite2[BlipSprite2["Number7"] = 23] = "Number7";
  BlipSprite2[BlipSprite2["Number8"] = 24] = "Number8";
  BlipSprite2[BlipSprite2["Number9"] = 25] = "Number9";
  BlipSprite2[BlipSprite2["Number10"] = 26] = "Number10";
  BlipSprite2[BlipSprite2["GTAOCrew"] = 27] = "GTAOCrew";
  BlipSprite2[BlipSprite2["GTAOFriendly"] = 28] = "GTAOFriendly";
  BlipSprite2[BlipSprite2["Lift"] = 36] = "Lift";
  BlipSprite2[BlipSprite2["RaceFinish"] = 38] = "RaceFinish";
  BlipSprite2[BlipSprite2["Safehouse"] = 40] = "Safehouse";
  BlipSprite2[BlipSprite2["PoliceOfficer2"] = 41] = "PoliceOfficer2";
  BlipSprite2[BlipSprite2["PoliceCarDot"] = 42] = "PoliceCarDot";
  BlipSprite2[BlipSprite2["PoliceHelicopter"] = 43] = "PoliceHelicopter";
  BlipSprite2[BlipSprite2["ChatBubble"] = 47] = "ChatBubble";
  BlipSprite2[BlipSprite2["Garage2"] = 50] = "Garage2";
  BlipSprite2[BlipSprite2["Drugs"] = 51] = "Drugs";
  BlipSprite2[BlipSprite2["Store"] = 52] = "Store";
  BlipSprite2[BlipSprite2["PoliceCar"] = 56] = "PoliceCar";
  BlipSprite2[BlipSprite2["PolicePlayer"] = 58] = "PolicePlayer";
  BlipSprite2[BlipSprite2["PoliceStation"] = 60] = "PoliceStation";
  BlipSprite2[BlipSprite2["Hospital"] = 61] = "Hospital";
  BlipSprite2[BlipSprite2["Helicopter"] = 64] = "Helicopter";
  BlipSprite2[BlipSprite2["StrangersAndFreaks"] = 65] = "StrangersAndFreaks";
  BlipSprite2[BlipSprite2["ArmoredTruck"] = 66] = "ArmoredTruck";
  BlipSprite2[BlipSprite2["TowTruck"] = 68] = "TowTruck";
  BlipSprite2[BlipSprite2["Barber"] = 71] = "Barber";
  BlipSprite2[BlipSprite2["LosSantosCustoms"] = 72] = "LosSantosCustoms";
  BlipSprite2[BlipSprite2["Clothes"] = 73] = "Clothes";
  BlipSprite2[BlipSprite2["TattooParlor"] = 75] = "TattooParlor";
  BlipSprite2[BlipSprite2["Simeon"] = 76] = "Simeon";
  BlipSprite2[BlipSprite2["Lester"] = 77] = "Lester";
  BlipSprite2[BlipSprite2["Michael"] = 78] = "Michael";
  BlipSprite2[BlipSprite2["Trevor"] = 79] = "Trevor";
  BlipSprite2[BlipSprite2["Rampage"] = 84] = "Rampage";
  BlipSprite2[BlipSprite2["VinewoodTours"] = 85] = "VinewoodTours";
  BlipSprite2[BlipSprite2["Lamar"] = 86] = "Lamar";
  BlipSprite2[BlipSprite2["Franklin"] = 88] = "Franklin";
  BlipSprite2[BlipSprite2["Chinese"] = 89] = "Chinese";
  BlipSprite2[BlipSprite2["Airport"] = 90] = "Airport";
  BlipSprite2[BlipSprite2["Bar"] = 93] = "Bar";
  BlipSprite2[BlipSprite2["BaseJump"] = 94] = "BaseJump";
  BlipSprite2[BlipSprite2["CarWash"] = 100] = "CarWash";
  BlipSprite2[BlipSprite2["ComedyClub"] = 102] = "ComedyClub";
  BlipSprite2[BlipSprite2["Dart"] = 103] = "Dart";
  BlipSprite2[BlipSprite2["FIB"] = 106] = "FIB";
  BlipSprite2[BlipSprite2["DollarSign"] = 108] = "DollarSign";
  BlipSprite2[BlipSprite2["Golf"] = 109] = "Golf";
  BlipSprite2[BlipSprite2["AmmuNation"] = 110] = "AmmuNation";
  BlipSprite2[BlipSprite2["Exile"] = 112] = "Exile";
  BlipSprite2[BlipSprite2["ShootingRange"] = 119] = "ShootingRange";
  BlipSprite2[BlipSprite2["Solomon"] = 120] = "Solomon";
  BlipSprite2[BlipSprite2["StripClub"] = 121] = "StripClub";
  BlipSprite2[BlipSprite2["Tennis"] = 122] = "Tennis";
  BlipSprite2[BlipSprite2["Triathlon"] = 126] = "Triathlon";
  BlipSprite2[BlipSprite2["OffRoadRaceFinish"] = 127] = "OffRoadRaceFinish";
  BlipSprite2[BlipSprite2["Key"] = 134] = "Key";
  BlipSprite2[BlipSprite2["MovieTheater"] = 135] = "MovieTheater";
  BlipSprite2[BlipSprite2["Music"] = 136] = "Music";
  BlipSprite2[BlipSprite2["Marijuana"] = 140] = "Marijuana";
  BlipSprite2[BlipSprite2["Hunting"] = 141] = "Hunting";
  BlipSprite2[BlipSprite2["ArmsTraffickingGround"] = 147] = "ArmsTraffickingGround";
  BlipSprite2[BlipSprite2["Nigel"] = 149] = "Nigel";
  BlipSprite2[BlipSprite2["AssaultRifle"] = 150] = "AssaultRifle";
  BlipSprite2[BlipSprite2["Bat"] = 151] = "Bat";
  BlipSprite2[BlipSprite2["Grenade"] = 152] = "Grenade";
  BlipSprite2[BlipSprite2["Health"] = 153] = "Health";
  BlipSprite2[BlipSprite2["Knife"] = 154] = "Knife";
  BlipSprite2[BlipSprite2["Molotov"] = 155] = "Molotov";
  BlipSprite2[BlipSprite2["Pistol"] = 156] = "Pistol";
  BlipSprite2[BlipSprite2["RPG"] = 157] = "RPG";
  BlipSprite2[BlipSprite2["Shotgun"] = 158] = "Shotgun";
  BlipSprite2[BlipSprite2["SMG"] = 159] = "SMG";
  BlipSprite2[BlipSprite2["Sniper"] = 160] = "Sniper";
  BlipSprite2[BlipSprite2["SonicWave"] = 161] = "SonicWave";
  BlipSprite2[BlipSprite2["PointOfInterest"] = 162] = "PointOfInterest";
  BlipSprite2[BlipSprite2["GTAOPassive"] = 163] = "GTAOPassive";
  BlipSprite2[BlipSprite2["GTAOUsingMenu"] = 164] = "GTAOUsingMenu";
  BlipSprite2[BlipSprite2["Link"] = 171] = "Link";
  BlipSprite2[BlipSprite2["Minigun"] = 173] = "Minigun";
  BlipSprite2[BlipSprite2["GrenadeLauncher"] = 174] = "GrenadeLauncher";
  BlipSprite2[BlipSprite2["Armor"] = 175] = "Armor";
  BlipSprite2[BlipSprite2["Castle"] = 176] = "Castle";
  BlipSprite2[BlipSprite2["Camera"] = 184] = "Camera";
  BlipSprite2[BlipSprite2["Handcuffs"] = 188] = "Handcuffs";
  BlipSprite2[BlipSprite2["Yoga"] = 197] = "Yoga";
  BlipSprite2[BlipSprite2["Cab"] = 198] = "Cab";
  BlipSprite2[BlipSprite2["Number11"] = 199] = "Number11";
  BlipSprite2[BlipSprite2["Number12"] = 200] = "Number12";
  BlipSprite2[BlipSprite2["Number13"] = 201] = "Number13";
  BlipSprite2[BlipSprite2["Number14"] = 202] = "Number14";
  BlipSprite2[BlipSprite2["Number15"] = 203] = "Number15";
  BlipSprite2[BlipSprite2["Number16"] = 204] = "Number16";
  BlipSprite2[BlipSprite2["Shrink"] = 205] = "Shrink";
  BlipSprite2[BlipSprite2["Epsilon"] = 206] = "Epsilon";
  BlipSprite2[BlipSprite2["PersonalVehicleCar"] = 225] = "PersonalVehicleCar";
  BlipSprite2[BlipSprite2["PersonalVehicleBike"] = 226] = "PersonalVehicleBike";
  BlipSprite2[BlipSprite2["Custody"] = 237] = "Custody";
  BlipSprite2[BlipSprite2["ArmsTraffickingAir"] = 251] = "ArmsTraffickingAir";
  BlipSprite2[BlipSprite2["Fairground"] = 266] = "Fairground";
  BlipSprite2[BlipSprite2["PropertyManagement"] = 267] = "PropertyManagement";
  BlipSprite2[BlipSprite2["Altruist"] = 269] = "Altruist";
  BlipSprite2[BlipSprite2["Enemy"] = 270] = "Enemy";
  BlipSprite2[BlipSprite2["Chop"] = 273] = "Chop";
  BlipSprite2[BlipSprite2["Dead"] = 274] = "Dead";
  BlipSprite2[BlipSprite2["Hooker"] = 279] = "Hooker";
  BlipSprite2[BlipSprite2["Friend"] = 280] = "Friend";
  BlipSprite2[BlipSprite2["BountyHit"] = 303] = "BountyHit";
  BlipSprite2[BlipSprite2["GTAOMission"] = 304] = "GTAOMission";
  BlipSprite2[BlipSprite2["GTAOSurvival"] = 305] = "GTAOSurvival";
  BlipSprite2[BlipSprite2["CrateDrop"] = 306] = "CrateDrop";
  BlipSprite2[BlipSprite2["PlaneDrop"] = 307] = "PlaneDrop";
  BlipSprite2[BlipSprite2["Sub"] = 308] = "Sub";
  BlipSprite2[BlipSprite2["Race"] = 309] = "Race";
  BlipSprite2[BlipSprite2["Deathmatch"] = 310] = "Deathmatch";
  BlipSprite2[BlipSprite2["ArmWrestling"] = 311] = "ArmWrestling";
  BlipSprite2[BlipSprite2["AmmuNationShootingRange"] = 313] = "AmmuNationShootingRange";
  BlipSprite2[BlipSprite2["RaceAir"] = 314] = "RaceAir";
  BlipSprite2[BlipSprite2["RaceCar"] = 315] = "RaceCar";
  BlipSprite2[BlipSprite2["RaceSea"] = 316] = "RaceSea";
  BlipSprite2[BlipSprite2["GarbageTruck"] = 318] = "GarbageTruck";
  BlipSprite2[BlipSprite2["SafehouseForSale"] = 350] = "SafehouseForSale";
  BlipSprite2[BlipSprite2["Package"] = 351] = "Package";
  BlipSprite2[BlipSprite2["MartinMadrazo"] = 352] = "MartinMadrazo";
  BlipSprite2[BlipSprite2["EnemyHelicopter"] = 353] = "EnemyHelicopter";
  BlipSprite2[BlipSprite2["Boost"] = 354] = "Boost";
  BlipSprite2[BlipSprite2["Devin"] = 355] = "Devin";
  BlipSprite2[BlipSprite2["Marina"] = 356] = "Marina";
  BlipSprite2[BlipSprite2["Garage"] = 357] = "Garage";
  BlipSprite2[BlipSprite2["GolfFlag"] = 358] = "GolfFlag";
  BlipSprite2[BlipSprite2["Hangar"] = 359] = "Hangar";
  BlipSprite2[BlipSprite2["Helipad"] = 360] = "Helipad";
  BlipSprite2[BlipSprite2["JerryCan"] = 361] = "JerryCan";
  BlipSprite2[BlipSprite2["Masks"] = 362] = "Masks";
  BlipSprite2[BlipSprite2["HeistSetup"] = 363] = "HeistSetup";
  BlipSprite2[BlipSprite2["Incapacitated"] = 364] = "Incapacitated";
  BlipSprite2[BlipSprite2["PickupSpawn"] = 365] = "PickupSpawn";
  BlipSprite2[BlipSprite2["BoilerSuit"] = 366] = "BoilerSuit";
  BlipSprite2[BlipSprite2["Completed"] = 367] = "Completed";
  BlipSprite2[BlipSprite2["Rockets"] = 368] = "Rockets";
  BlipSprite2[BlipSprite2["GarageForSale"] = 369] = "GarageForSale";
  BlipSprite2[BlipSprite2["HelipadForSale"] = 370] = "HelipadForSale";
  BlipSprite2[BlipSprite2["MarinaForSale"] = 371] = "MarinaForSale";
  BlipSprite2[BlipSprite2["HangarForSale"] = 372] = "HangarForSale";
  BlipSprite2[BlipSprite2["Business"] = 374] = "Business";
  BlipSprite2[BlipSprite2["BusinessForSale"] = 375] = "BusinessForSale";
  BlipSprite2[BlipSprite2["RaceBike"] = 376] = "RaceBike";
  BlipSprite2[BlipSprite2["Parachute"] = 377] = "Parachute";
  BlipSprite2[BlipSprite2["TeamDeathmatch"] = 378] = "TeamDeathmatch";
  BlipSprite2[BlipSprite2["RaceFoot"] = 379] = "RaceFoot";
  BlipSprite2[BlipSprite2["VehicleDeathmatch"] = 380] = "VehicleDeathmatch";
  BlipSprite2[BlipSprite2["Barry"] = 381] = "Barry";
  BlipSprite2[BlipSprite2["Dom"] = 382] = "Dom";
  BlipSprite2[BlipSprite2["MaryAnn"] = 383] = "MaryAnn";
  BlipSprite2[BlipSprite2["Cletus"] = 384] = "Cletus";
  BlipSprite2[BlipSprite2["Josh"] = 385] = "Josh";
  BlipSprite2[BlipSprite2["Minute"] = 386] = "Minute";
  BlipSprite2[BlipSprite2["Omega"] = 387] = "Omega";
  BlipSprite2[BlipSprite2["Tonya"] = 388] = "Tonya";
  BlipSprite2[BlipSprite2["Paparazzo"] = 389] = "Paparazzo";
  BlipSprite2[BlipSprite2["Crosshair"] = 390] = "Crosshair";
  BlipSprite2[BlipSprite2["Creator"] = 398] = "Creator";
  BlipSprite2[BlipSprite2["CreatorDirection"] = 399] = "CreatorDirection";
  BlipSprite2[BlipSprite2["Abigail"] = 400] = "Abigail";
  BlipSprite2[BlipSprite2["Blimp"] = 401] = "Blimp";
  BlipSprite2[BlipSprite2["Repair"] = 402] = "Repair";
  BlipSprite2[BlipSprite2["Testosterone"] = 403] = "Testosterone";
  BlipSprite2[BlipSprite2["Dinghy"] = 404] = "Dinghy";
  BlipSprite2[BlipSprite2["Fanatic"] = 405] = "Fanatic";
  BlipSprite2[BlipSprite2["Information"] = 407] = "Information";
  BlipSprite2[BlipSprite2["CaptureBriefcase"] = 408] = "CaptureBriefcase";
  BlipSprite2[BlipSprite2["LastTeamStanding"] = 409] = "LastTeamStanding";
  BlipSprite2[BlipSprite2["Boat"] = 410] = "Boat";
  BlipSprite2[BlipSprite2["CaptureHouse"] = 411] = "CaptureHouse";
  BlipSprite2[BlipSprite2["JerryCan2"] = 415] = "JerryCan2";
  BlipSprite2[BlipSprite2["RP"] = 416] = "RP";
  BlipSprite2[BlipSprite2["GTAOPlayerSafehouse"] = 417] = "GTAOPlayerSafehouse";
  BlipSprite2[BlipSprite2["GTAOPlayerSafehouseDead"] = 418] = "GTAOPlayerSafehouseDead";
  BlipSprite2[BlipSprite2["CaptureAmericanFlag"] = 419] = "CaptureAmericanFlag";
  BlipSprite2[BlipSprite2["CaptureFlag"] = 420] = "CaptureFlag";
  BlipSprite2[BlipSprite2["Tank"] = 421] = "Tank";
  BlipSprite2[BlipSprite2["HelicopterAnimated"] = 422] = "HelicopterAnimated";
  BlipSprite2[BlipSprite2["Plane"] = 423] = "Plane";
  BlipSprite2[BlipSprite2["PlayerNoColor"] = 425] = "PlayerNoColor";
  BlipSprite2[BlipSprite2["GunCar"] = 426] = "GunCar";
  BlipSprite2[BlipSprite2["Speedboat"] = 427] = "Speedboat";
  BlipSprite2[BlipSprite2["Heist"] = 428] = "Heist";
  BlipSprite2[BlipSprite2["Stopwatch"] = 430] = "Stopwatch";
  BlipSprite2[BlipSprite2["DollarSignCircled"] = 431] = "DollarSignCircled";
  BlipSprite2[BlipSprite2["Crosshair2"] = 432] = "Crosshair2";
  BlipSprite2[BlipSprite2["DollarSignSquared"] = 434] = "DollarSignSquared";
  return BlipSprite2;
})(BlipSprite || {});

// src/fivem/enums/Bone.ts
var Bone = /* @__PURE__ */ ((Bone2) => {
  Bone2[Bone2["INVALID"] = -1] = "INVALID";
  Bone2[Bone2["SKEL_ROOT"] = 0] = "SKEL_ROOT";
  Bone2[Bone2["SKEL_Pelvis"] = 11816] = "SKEL_Pelvis";
  Bone2[Bone2["SKEL_L_Thigh"] = 58271] = "SKEL_L_Thigh";
  Bone2[Bone2["SKEL_L_Calf"] = 63931] = "SKEL_L_Calf";
  Bone2[Bone2["SKEL_L_Foot"] = 14201] = "SKEL_L_Foot";
  Bone2[Bone2["SKEL_L_Toe0"] = 2108] = "SKEL_L_Toe0";
  Bone2[Bone2["IK_L_Foot"] = 65245] = "IK_L_Foot";
  Bone2[Bone2["PH_L_Foot"] = 57717] = "PH_L_Foot";
  Bone2[Bone2["MH_L_Knee"] = 46078] = "MH_L_Knee";
  Bone2[Bone2["SKEL_R_Thigh"] = 51826] = "SKEL_R_Thigh";
  Bone2[Bone2["SKEL_R_Calf"] = 36864] = "SKEL_R_Calf";
  Bone2[Bone2["SKEL_R_Foot"] = 52301] = "SKEL_R_Foot";
  Bone2[Bone2["SKEL_R_Toe0"] = 20781] = "SKEL_R_Toe0";
  Bone2[Bone2["IK_R_Foot"] = 35502] = "IK_R_Foot";
  Bone2[Bone2["PH_R_Foot"] = 24806] = "PH_R_Foot";
  Bone2[Bone2["MH_R_Knee"] = 16335] = "MH_R_Knee";
  Bone2[Bone2["RB_L_ThighRoll"] = 23639] = "RB_L_ThighRoll";
  Bone2[Bone2["RB_R_ThighRoll"] = 6442] = "RB_R_ThighRoll";
  Bone2[Bone2["SKEL_Spine_Root"] = 57597] = "SKEL_Spine_Root";
  Bone2[Bone2["SKEL_Spine0"] = 23553] = "SKEL_Spine0";
  Bone2[Bone2["SKEL_Spine1"] = 24816] = "SKEL_Spine1";
  Bone2[Bone2["SKEL_Spine2"] = 24817] = "SKEL_Spine2";
  Bone2[Bone2["SKEL_Spine3"] = 24818] = "SKEL_Spine3";
  Bone2[Bone2["SKEL_L_Clavicle"] = 64729] = "SKEL_L_Clavicle";
  Bone2[Bone2["SKEL_L_UpperArm"] = 45509] = "SKEL_L_UpperArm";
  Bone2[Bone2["SKEL_L_Forearm"] = 61163] = "SKEL_L_Forearm";
  Bone2[Bone2["SKEL_L_Hand"] = 18905] = "SKEL_L_Hand";
  Bone2[Bone2["SKEL_L_Finger00"] = 26610] = "SKEL_L_Finger00";
  Bone2[Bone2["SKEL_L_Finger01"] = 4089] = "SKEL_L_Finger01";
  Bone2[Bone2["SKEL_L_Finger02"] = 4090] = "SKEL_L_Finger02";
  Bone2[Bone2["SKEL_L_Finger10"] = 26611] = "SKEL_L_Finger10";
  Bone2[Bone2["SKEL_L_Finger11"] = 4169] = "SKEL_L_Finger11";
  Bone2[Bone2["SKEL_L_Finger12"] = 4170] = "SKEL_L_Finger12";
  Bone2[Bone2["SKEL_L_Finger20"] = 26612] = "SKEL_L_Finger20";
  Bone2[Bone2["SKEL_L_Finger21"] = 4185] = "SKEL_L_Finger21";
  Bone2[Bone2["SKEL_L_Finger22"] = 4186] = "SKEL_L_Finger22";
  Bone2[Bone2["SKEL_L_Finger30"] = 26613] = "SKEL_L_Finger30";
  Bone2[Bone2["SKEL_L_Finger31"] = 4137] = "SKEL_L_Finger31";
  Bone2[Bone2["SKEL_L_Finger32"] = 4138] = "SKEL_L_Finger32";
  Bone2[Bone2["SKEL_L_Finger40"] = 26614] = "SKEL_L_Finger40";
  Bone2[Bone2["SKEL_L_Finger41"] = 4153] = "SKEL_L_Finger41";
  Bone2[Bone2["SKEL_L_Finger42"] = 4154] = "SKEL_L_Finger42";
  Bone2[Bone2["PH_L_Hand"] = 60309] = "PH_L_Hand";
  Bone2[Bone2["IK_L_Hand"] = 36029] = "IK_L_Hand";
  Bone2[Bone2["RB_L_ForeArmRoll"] = 61007] = "RB_L_ForeArmRoll";
  Bone2[Bone2["RB_L_ArmRoll"] = 5232] = "RB_L_ArmRoll";
  Bone2[Bone2["MH_L_Elbow"] = 22711] = "MH_L_Elbow";
  Bone2[Bone2["SKEL_R_Clavicle"] = 10706] = "SKEL_R_Clavicle";
  Bone2[Bone2["SKEL_R_UpperArm"] = 40269] = "SKEL_R_UpperArm";
  Bone2[Bone2["SKEL_R_Forearm"] = 28252] = "SKEL_R_Forearm";
  Bone2[Bone2["SKEL_R_Hand"] = 57005] = "SKEL_R_Hand";
  Bone2[Bone2["SKEL_R_Finger00"] = 58866] = "SKEL_R_Finger00";
  Bone2[Bone2["SKEL_R_Finger01"] = 64016] = "SKEL_R_Finger01";
  Bone2[Bone2["SKEL_R_Finger02"] = 64017] = "SKEL_R_Finger02";
  Bone2[Bone2["SKEL_R_Finger10"] = 58867] = "SKEL_R_Finger10";
  Bone2[Bone2["SKEL_R_Finger11"] = 64096] = "SKEL_R_Finger11";
  Bone2[Bone2["SKEL_R_Finger12"] = 64097] = "SKEL_R_Finger12";
  Bone2[Bone2["SKEL_R_Finger20"] = 58868] = "SKEL_R_Finger20";
  Bone2[Bone2["SKEL_R_Finger21"] = 64112] = "SKEL_R_Finger21";
  Bone2[Bone2["SKEL_R_Finger22"] = 64113] = "SKEL_R_Finger22";
  Bone2[Bone2["SKEL_R_Finger30"] = 58869] = "SKEL_R_Finger30";
  Bone2[Bone2["SKEL_R_Finger31"] = 64064] = "SKEL_R_Finger31";
  Bone2[Bone2["SKEL_R_Finger32"] = 64065] = "SKEL_R_Finger32";
  Bone2[Bone2["SKEL_R_Finger40"] = 58870] = "SKEL_R_Finger40";
  Bone2[Bone2["SKEL_R_Finger41"] = 64080] = "SKEL_R_Finger41";
  Bone2[Bone2["SKEL_R_Finger42"] = 64081] = "SKEL_R_Finger42";
  Bone2[Bone2["PH_R_Hand"] = 28422] = "PH_R_Hand";
  Bone2[Bone2["IK_R_Hand"] = 6286] = "IK_R_Hand";
  Bone2[Bone2["RB_R_ForeArmRoll"] = 43810] = "RB_R_ForeArmRoll";
  Bone2[Bone2["RB_R_ArmRoll"] = 37119] = "RB_R_ArmRoll";
  Bone2[Bone2["MH_R_Elbow"] = 2992] = "MH_R_Elbow";
  Bone2[Bone2["SKEL_Neck_1"] = 39317] = "SKEL_Neck_1";
  Bone2[Bone2["SKEL_Head"] = 31086] = "SKEL_Head";
  Bone2[Bone2["IK_Head"] = 12844] = "IK_Head";
  Bone2[Bone2["FACIAL_facialRoot"] = 65068] = "FACIAL_facialRoot";
  Bone2[Bone2["FB_L_Brow_Out_000"] = 58331] = "FB_L_Brow_Out_000";
  Bone2[Bone2["FB_L_Lid_Upper_000"] = 45750] = "FB_L_Lid_Upper_000";
  Bone2[Bone2["FB_L_Eye_000"] = 25260] = "FB_L_Eye_000";
  Bone2[Bone2["FB_L_CheekBone_000"] = 21550] = "FB_L_CheekBone_000";
  Bone2[Bone2["FB_L_Lip_Corner_000"] = 29868] = "FB_L_Lip_Corner_000";
  Bone2[Bone2["FB_R_Lid_Upper_000"] = 43536] = "FB_R_Lid_Upper_000";
  Bone2[Bone2["FB_R_Eye_000"] = 27474] = "FB_R_Eye_000";
  Bone2[Bone2["FB_R_CheekBone_000"] = 19336] = "FB_R_CheekBone_000";
  Bone2[Bone2["FB_R_Brow_Out_000"] = 1356] = "FB_R_Brow_Out_000";
  Bone2[Bone2["FB_R_Lip_Corner_000"] = 11174] = "FB_R_Lip_Corner_000";
  Bone2[Bone2["FB_Brow_Centre_000"] = 37193] = "FB_Brow_Centre_000";
  Bone2[Bone2["FB_UpperLipRoot_000"] = 20178] = "FB_UpperLipRoot_000";
  Bone2[Bone2["FB_UpperLip_000"] = 61839] = "FB_UpperLip_000";
  Bone2[Bone2["FB_L_Lip_Top_000"] = 20279] = "FB_L_Lip_Top_000";
  Bone2[Bone2["FB_R_Lip_Top_000"] = 17719] = "FB_R_Lip_Top_000";
  Bone2[Bone2["FB_Jaw_000"] = 46240] = "FB_Jaw_000";
  Bone2[Bone2["FB_LowerLipRoot_000"] = 17188] = "FB_LowerLipRoot_000";
  Bone2[Bone2["FB_LowerLip_000"] = 20623] = "FB_LowerLip_000";
  Bone2[Bone2["FB_L_Lip_Bot_000"] = 47419] = "FB_L_Lip_Bot_000";
  Bone2[Bone2["FB_R_Lip_Bot_000"] = 49979] = "FB_R_Lip_Bot_000";
  Bone2[Bone2["FB_Tongue_000"] = 47495] = "FB_Tongue_000";
  Bone2[Bone2["RB_Neck_1"] = 35731] = "RB_Neck_1";
  Bone2[Bone2["IK_Root"] = 56604] = "IK_Root";
  return Bone2;
})(Bone || {});

// src/fivem/enums/CameraShake.ts
var CameraShake = /* @__PURE__ */ ((CameraShake2) => {
  CameraShake2[CameraShake2["Hand"] = 0] = "Hand";
  CameraShake2[CameraShake2["SmallExplosion"] = 1] = "SmallExplosion";
  CameraShake2[CameraShake2["MediumExplosion"] = 2] = "MediumExplosion";
  CameraShake2[CameraShake2["LargeExplosion"] = 3] = "LargeExplosion";
  CameraShake2[CameraShake2["Jolt"] = 4] = "Jolt";
  CameraShake2[CameraShake2["Vibrate"] = 5] = "Vibrate";
  CameraShake2[CameraShake2["RoadVibration"] = 6] = "RoadVibration";
  CameraShake2[CameraShake2["Drunk"] = 7] = "Drunk";
  CameraShake2[CameraShake2["SkyDiving"] = 8] = "SkyDiving";
  CameraShake2[CameraShake2["FamilyDrugTrip"] = 9] = "FamilyDrugTrip";
  CameraShake2[CameraShake2["DeathFail"] = 10] = "DeathFail";
  return CameraShake2;
})(CameraShake || {});

// src/fivem/enums/CheckboxStyle.ts
var CheckboxStyle = /* @__PURE__ */ ((CheckboxStyle2) => {
  CheckboxStyle2[CheckboxStyle2["Tick"] = 0] = "Tick";
  CheckboxStyle2[CheckboxStyle2["Cross"] = 1] = "Cross";
  return CheckboxStyle2;
})(CheckboxStyle || {});

// src/fivem/enums/Checkpoint.ts
var CheckpointIcon = /* @__PURE__ */ ((CheckpointIcon2) => {
  CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow"] = 0] = "CylinderSingleArrow";
  CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow"] = 1] = "CylinderDoubleArrow";
  CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow"] = 2] = "CylinderTripleArrow";
  CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow"] = 3] = "CylinderCycleArrow";
  CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard"] = 4] = "CylinderCheckerboard";
  CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow2"] = 5] = "CylinderSingleArrow2";
  CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow2"] = 6] = "CylinderDoubleArrow2";
  CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow2"] = 7] = "CylinderTripleArrow2";
  CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow2"] = 8] = "CylinderCycleArrow2";
  CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard2"] = 9] = "CylinderCheckerboard2";
  CheckpointIcon2[CheckpointIcon2["RingSingleArrow"] = 10] = "RingSingleArrow";
  CheckpointIcon2[CheckpointIcon2["RingDoubleArrow"] = 11] = "RingDoubleArrow";
  CheckpointIcon2[CheckpointIcon2["RingTripleArrow"] = 12] = "RingTripleArrow";
  CheckpointIcon2[CheckpointIcon2["RingCycleArrow"] = 13] = "RingCycleArrow";
  CheckpointIcon2[CheckpointIcon2["RingCheckerboard"] = 14] = "RingCheckerboard";
  CheckpointIcon2[CheckpointIcon2["SingleArrow"] = 15] = "SingleArrow";
  CheckpointIcon2[CheckpointIcon2["DoubleArrow"] = 16] = "DoubleArrow";
  CheckpointIcon2[CheckpointIcon2["TripleArrow"] = 17] = "TripleArrow";
  CheckpointIcon2[CheckpointIcon2["CycleArrow"] = 18] = "CycleArrow";
  CheckpointIcon2[CheckpointIcon2["Checkerboard"] = 19] = "Checkerboard";
  CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow3"] = 20] = "CylinderSingleArrow3";
  CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow3"] = 21] = "CylinderDoubleArrow3";
  CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow3"] = 22] = "CylinderTripleArrow3";
  CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow3"] = 23] = "CylinderCycleArrow3";
  CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard3"] = 24] = "CylinderCheckerboard3";
  CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow4"] = 25] = "CylinderSingleArrow4";
  CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow4"] = 26] = "CylinderDoubleArrow4";
  CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow4"] = 27] = "CylinderTripleArrow4";
  CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow4"] = 28] = "CylinderCycleArrow4";
  CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard4"] = 29] = "CylinderCheckerboard4";
  CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow5"] = 30] = "CylinderSingleArrow5";
  CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow5"] = 31] = "CylinderDoubleArrow5";
  CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow5"] = 32] = "CylinderTripleArrow5";
  CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow5"] = 33] = "CylinderCycleArrow5";
  CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard5"] = 34] = "CylinderCheckerboard5";
  CheckpointIcon2[CheckpointIcon2["RingPlaneUp"] = 35] = "RingPlaneUp";
  CheckpointIcon2[CheckpointIcon2["RingPlaneLeft"] = 36] = "RingPlaneLeft";
  CheckpointIcon2[CheckpointIcon2["RingPlaneRight"] = 37] = "RingPlaneRight";
  CheckpointIcon2[CheckpointIcon2["RingPlaneDown"] = 38] = "RingPlaneDown";
  CheckpointIcon2[CheckpointIcon2["Empty"] = 39] = "Empty";
  CheckpointIcon2[CheckpointIcon2["Ring"] = 40] = "Ring";
  CheckpointIcon2[CheckpointIcon2["Empty2"] = 41] = "Empty2";
  CheckpointIcon2[CheckpointIcon2["Cyclinder"] = 45] = "Cyclinder";
  CheckpointIcon2[CheckpointIcon2["Cyclinder2"] = 46] = "Cyclinder2";
  CheckpointIcon2[CheckpointIcon2["Cyclinder3"] = 47] = "Cyclinder3";
  return CheckpointIcon2;
})(CheckpointIcon || {});
var CheckpointCustomIconStyle = /* @__PURE__ */ ((CheckpointCustomIconStyle2) => {
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Number"] = 0] = "Number";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["SingleArrow"] = 1] = "SingleArrow";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["DoubleArrow"] = 2] = "DoubleArrow";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["TripleArrow"] = 3] = "TripleArrow";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Ring"] = 4] = "Ring";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["CycleArrow"] = 5] = "CycleArrow";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Ring2"] = 6] = "Ring2";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["RingPointer"] = 7] = "RingPointer";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["SegmentedRing"] = 8] = "SegmentedRing";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Sphere"] = 9] = "Sphere";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Dollar"] = 10] = "Dollar";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["QuintupleLines"] = 11] = "QuintupleLines";
  CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["BeastIcon"] = 12] = "BeastIcon";
  return CheckpointCustomIconStyle2;
})(CheckpointCustomIconStyle || {});

// src/fivem/enums/CloudHat.ts
var CloudHat = /* @__PURE__ */ ((CloudHat2) => {
  CloudHat2[CloudHat2["Unknown"] = 1] = "Unknown";
  CloudHat2[CloudHat2["Altostratus"] = 2] = "Altostratus";
  CloudHat2[CloudHat2["Cirrus"] = 3] = "Cirrus";
  CloudHat2[CloudHat2["Cirrocumulus"] = 4] = "Cirrocumulus";
  CloudHat2[CloudHat2["Clear"] = 5] = "Clear";
  CloudHat2[CloudHat2["Cloudy"] = 6] = "Cloudy";
  CloudHat2[CloudHat2["Contrails"] = 7] = "Contrails";
  CloudHat2[CloudHat2["Horizon"] = 8] = "Horizon";
  CloudHat2[CloudHat2["HorizonBand1"] = 9] = "HorizonBand1";
  CloudHat2[CloudHat2["HorizonBand2"] = 10] = "HorizonBand2";
  CloudHat2[CloudHat2["HorizonBand3"] = 11] = "HorizonBand3";
  CloudHat2[CloudHat2["Horsey"] = 12] = "Horsey";
  CloudHat2[CloudHat2["Nimbus"] = 13] = "Nimbus";
  CloudHat2[CloudHat2["Puffs"] = 14] = "Puffs";
  CloudHat2[CloudHat2["Rain"] = 15] = "Rain";
  CloudHat2[CloudHat2["Snowy"] = 16] = "Snowy";
  CloudHat2[CloudHat2["Stormy"] = 17] = "Stormy";
  CloudHat2[CloudHat2["Stratoscumulus"] = 18] = "Stratoscumulus";
  CloudHat2[CloudHat2["Stripey"] = 19] = "Stripey";
  CloudHat2[CloudHat2["Shower"] = 20] = "Shower";
  CloudHat2[CloudHat2["Wispy"] = 21] = "Wispy";
  return CloudHat2;
})(CloudHat || {});

// src/fivem/enums/Control.ts
var Control = /* @__PURE__ */ ((Control2) => {
  Control2[Control2["NextCamera"] = 0] = "NextCamera";
  Control2[Control2["LookLeftRight"] = 1] = "LookLeftRight";
  Control2[Control2["LookUpDown"] = 2] = "LookUpDown";
  Control2[Control2["LookUpOnly"] = 3] = "LookUpOnly";
  Control2[Control2["LookDownOnly"] = 4] = "LookDownOnly";
  Control2[Control2["LookLeftOnly"] = 5] = "LookLeftOnly";
  Control2[Control2["LookRightOnly"] = 6] = "LookRightOnly";
  Control2[Control2["CinematicSlowMo"] = 7] = "CinematicSlowMo";
  Control2[Control2["FlyUpDown"] = 8] = "FlyUpDown";
  Control2[Control2["FlyLeftRight"] = 9] = "FlyLeftRight";
  Control2[Control2["ScriptedFlyZUp"] = 10] = "ScriptedFlyZUp";
  Control2[Control2["ScriptedFlyZDown"] = 11] = "ScriptedFlyZDown";
  Control2[Control2["WeaponWheelUpDown"] = 12] = "WeaponWheelUpDown";
  Control2[Control2["WeaponWheelLeftRight"] = 13] = "WeaponWheelLeftRight";
  Control2[Control2["WeaponWheelNext"] = 14] = "WeaponWheelNext";
  Control2[Control2["WeaponWheelPrev"] = 15] = "WeaponWheelPrev";
  Control2[Control2["SelectNextWeapon"] = 16] = "SelectNextWeapon";
  Control2[Control2["SelectPrevWeapon"] = 17] = "SelectPrevWeapon";
  Control2[Control2["SkipCutscene"] = 18] = "SkipCutscene";
  Control2[Control2["CharacterWheel"] = 19] = "CharacterWheel";
  Control2[Control2["MultiplayerInfo"] = 20] = "MultiplayerInfo";
  Control2[Control2["Sprint"] = 21] = "Sprint";
  Control2[Control2["Jump"] = 22] = "Jump";
  Control2[Control2["Enter"] = 23] = "Enter";
  Control2[Control2["Attack"] = 24] = "Attack";
  Control2[Control2["Aim"] = 25] = "Aim";
  Control2[Control2["LookBehind"] = 26] = "LookBehind";
  Control2[Control2["Phone"] = 27] = "Phone";
  Control2[Control2["SpecialAbility"] = 28] = "SpecialAbility";
  Control2[Control2["SpecialAbilitySecondary"] = 29] = "SpecialAbilitySecondary";
  Control2[Control2["MoveLeftRight"] = 30] = "MoveLeftRight";
  Control2[Control2["MoveUpDown"] = 31] = "MoveUpDown";
  Control2[Control2["MoveUpOnly"] = 32] = "MoveUpOnly";
  Control2[Control2["MoveDownOnly"] = 33] = "MoveDownOnly";
  Control2[Control2["MoveLeftOnly"] = 34] = "MoveLeftOnly";
  Control2[Control2["MoveRightOnly"] = 35] = "MoveRightOnly";
  Control2[Control2["Duck"] = 36] = "Duck";
  Control2[Control2["SelectWeapon"] = 37] = "SelectWeapon";
  Control2[Control2["Pickup"] = 38] = "Pickup";
  Control2[Control2["SniperZoom"] = 39] = "SniperZoom";
  Control2[Control2["SniperZoomInOnly"] = 40] = "SniperZoomInOnly";
  Control2[Control2["SniperZoomOutOnly"] = 41] = "SniperZoomOutOnly";
  Control2[Control2["SniperZoomInSecondary"] = 42] = "SniperZoomInSecondary";
  Control2[Control2["SniperZoomOutSecondary"] = 43] = "SniperZoomOutSecondary";
  Control2[Control2["Cover"] = 44] = "Cover";
  Control2[Control2["Reload"] = 45] = "Reload";
  Control2[Control2["Talk"] = 46] = "Talk";
  Control2[Control2["Detonate"] = 47] = "Detonate";
  Control2[Control2["HUDSpecial"] = 48] = "HUDSpecial";
  Control2[Control2["Arrest"] = 49] = "Arrest";
  Control2[Control2["AccurateAim"] = 50] = "AccurateAim";
  Control2[Control2["Context"] = 51] = "Context";
  Control2[Control2["ContextSecondary"] = 52] = "ContextSecondary";
  Control2[Control2["WeaponSpecial"] = 53] = "WeaponSpecial";
  Control2[Control2["WeaponSpecial2"] = 54] = "WeaponSpecial2";
  Control2[Control2["Dive"] = 55] = "Dive";
  Control2[Control2["DropWeapon"] = 56] = "DropWeapon";
  Control2[Control2["DropAmmo"] = 57] = "DropAmmo";
  Control2[Control2["ThrowGrenade"] = 58] = "ThrowGrenade";
  Control2[Control2["VehicleMoveLeftRight"] = 59] = "VehicleMoveLeftRight";
  Control2[Control2["VehicleMoveUpDown"] = 60] = "VehicleMoveUpDown";
  Control2[Control2["VehicleMoveUpOnly"] = 61] = "VehicleMoveUpOnly";
  Control2[Control2["VehicleMoveDownOnly"] = 62] = "VehicleMoveDownOnly";
  Control2[Control2["VehicleMoveLeftOnly"] = 63] = "VehicleMoveLeftOnly";
  Control2[Control2["VehicleMoveRightOnly"] = 64] = "VehicleMoveRightOnly";
  Control2[Control2["VehicleSpecial"] = 65] = "VehicleSpecial";
  Control2[Control2["VehicleGunLeftRight"] = 66] = "VehicleGunLeftRight";
  Control2[Control2["VehicleGunUpDown"] = 67] = "VehicleGunUpDown";
  Control2[Control2["VehicleAim"] = 68] = "VehicleAim";
  Control2[Control2["VehicleAttack"] = 69] = "VehicleAttack";
  Control2[Control2["VehicleAttack2"] = 70] = "VehicleAttack2";
  Control2[Control2["VehicleAccelerate"] = 71] = "VehicleAccelerate";
  Control2[Control2["VehicleBrake"] = 72] = "VehicleBrake";
  Control2[Control2["VehicleDuck"] = 73] = "VehicleDuck";
  Control2[Control2["VehicleHeadlight"] = 74] = "VehicleHeadlight";
  Control2[Control2["VehicleExit"] = 75] = "VehicleExit";
  Control2[Control2["VehicleHandbrake"] = 76] = "VehicleHandbrake";
  Control2[Control2["VehicleHotwireLeft"] = 77] = "VehicleHotwireLeft";
  Control2[Control2["VehicleHotwireRight"] = 78] = "VehicleHotwireRight";
  Control2[Control2["VehicleLookBehind"] = 79] = "VehicleLookBehind";
  Control2[Control2["VehicleCinCam"] = 80] = "VehicleCinCam";
  Control2[Control2["VehicleNextRadio"] = 81] = "VehicleNextRadio";
  Control2[Control2["VehiclePrevRadio"] = 82] = "VehiclePrevRadio";
  Control2[Control2["VehicleNextRadioTrack"] = 83] = "VehicleNextRadioTrack";
  Control2[Control2["VehiclePrevRadioTrack"] = 84] = "VehiclePrevRadioTrack";
  Control2[Control2["VehicleRadioWheel"] = 85] = "VehicleRadioWheel";
  Control2[Control2["VehicleHorn"] = 86] = "VehicleHorn";
  Control2[Control2["VehicleFlyThrottleUp"] = 87] = "VehicleFlyThrottleUp";
  Control2[Control2["VehicleFlyThrottleDown"] = 88] = "VehicleFlyThrottleDown";
  Control2[Control2["VehicleFlyYawLeft"] = 89] = "VehicleFlyYawLeft";
  Control2[Control2["VehicleFlyYawRight"] = 90] = "VehicleFlyYawRight";
  Control2[Control2["VehiclePassengerAim"] = 91] = "VehiclePassengerAim";
  Control2[Control2["VehiclePassengerAttack"] = 92] = "VehiclePassengerAttack";
  Control2[Control2["VehicleSpecialAbilityFranklin"] = 93] = "VehicleSpecialAbilityFranklin";
  Control2[Control2["VehicleStuntUpDown"] = 94] = "VehicleStuntUpDown";
  Control2[Control2["VehicleCinematicUpDown"] = 95] = "VehicleCinematicUpDown";
  Control2[Control2["VehicleCinematicUpOnly"] = 96] = "VehicleCinematicUpOnly";
  Control2[Control2["VehicleCinematicDownOnly"] = 97] = "VehicleCinematicDownOnly";
  Control2[Control2["VehicleCinematicLeftRight"] = 98] = "VehicleCinematicLeftRight";
  Control2[Control2["VehicleSelectNextWeapon"] = 99] = "VehicleSelectNextWeapon";
  Control2[Control2["VehicleSelectPrevWeapon"] = 100] = "VehicleSelectPrevWeapon";
  Control2[Control2["VehicleRoof"] = 101] = "VehicleRoof";
  Control2[Control2["VehicleJump"] = 102] = "VehicleJump";
  Control2[Control2["VehicleGrapplingHook"] = 103] = "VehicleGrapplingHook";
  Control2[Control2["VehicleShuffle"] = 104] = "VehicleShuffle";
  Control2[Control2["VehicleDropProjectile"] = 105] = "VehicleDropProjectile";
  Control2[Control2["VehicleMouseControlOverride"] = 106] = "VehicleMouseControlOverride";
  Control2[Control2["VehicleFlyRollLeftRight"] = 107] = "VehicleFlyRollLeftRight";
  Control2[Control2["VehicleFlyRollLeftOnly"] = 108] = "VehicleFlyRollLeftOnly";
  Control2[Control2["VehicleFlyRollRightOnly"] = 109] = "VehicleFlyRollRightOnly";
  Control2[Control2["VehicleFlyPitchUpDown"] = 110] = "VehicleFlyPitchUpDown";
  Control2[Control2["VehicleFlyPitchUpOnly"] = 111] = "VehicleFlyPitchUpOnly";
  Control2[Control2["VehicleFlyPitchDownOnly"] = 112] = "VehicleFlyPitchDownOnly";
  Control2[Control2["VehicleFlyUnderCarriage"] = 113] = "VehicleFlyUnderCarriage";
  Control2[Control2["VehicleFlyAttack"] = 114] = "VehicleFlyAttack";
  Control2[Control2["VehicleFlySelectNextWeapon"] = 115] = "VehicleFlySelectNextWeapon";
  Control2[Control2["VehicleFlySelectPrevWeapon"] = 116] = "VehicleFlySelectPrevWeapon";
  Control2[Control2["VehicleFlySelectTargetLeft"] = 117] = "VehicleFlySelectTargetLeft";
  Control2[Control2["VehicleFlySelectTargetRight"] = 118] = "VehicleFlySelectTargetRight";
  Control2[Control2["VehicleFlyVerticalFlightMode"] = 119] = "VehicleFlyVerticalFlightMode";
  Control2[Control2["VehicleFlyDuck"] = 120] = "VehicleFlyDuck";
  Control2[Control2["VehicleFlyAttackCamera"] = 121] = "VehicleFlyAttackCamera";
  Control2[Control2["VehicleFlyMouseControlOverride"] = 122] = "VehicleFlyMouseControlOverride";
  Control2[Control2["VehicleSubTurnLeftRight"] = 123] = "VehicleSubTurnLeftRight";
  Control2[Control2["VehicleSubTurnLeftOnly"] = 124] = "VehicleSubTurnLeftOnly";
  Control2[Control2["VehicleSubTurnRightOnly"] = 125] = "VehicleSubTurnRightOnly";
  Control2[Control2["VehicleSubPitchUpDown"] = 126] = "VehicleSubPitchUpDown";
  Control2[Control2["VehicleSubPitchUpOnly"] = 127] = "VehicleSubPitchUpOnly";
  Control2[Control2["VehicleSubPitchDownOnly"] = 128] = "VehicleSubPitchDownOnly";
  Control2[Control2["VehicleSubThrottleUp"] = 129] = "VehicleSubThrottleUp";
  Control2[Control2["VehicleSubThrottleDown"] = 130] = "VehicleSubThrottleDown";
  Control2[Control2["VehicleSubAscend"] = 131] = "VehicleSubAscend";
  Control2[Control2["VehicleSubDescend"] = 132] = "VehicleSubDescend";
  Control2[Control2["VehicleSubTurnHardLeft"] = 133] = "VehicleSubTurnHardLeft";
  Control2[Control2["VehicleSubTurnHardRight"] = 134] = "VehicleSubTurnHardRight";
  Control2[Control2["VehicleSubMouseControlOverride"] = 135] = "VehicleSubMouseControlOverride";
  Control2[Control2["VehiclePushbikePedal"] = 136] = "VehiclePushbikePedal";
  Control2[Control2["VehiclePushbikeSprint"] = 137] = "VehiclePushbikeSprint";
  Control2[Control2["VehiclePushbikeFrontBrake"] = 138] = "VehiclePushbikeFrontBrake";
  Control2[Control2["VehiclePushbikeRearBrake"] = 139] = "VehiclePushbikeRearBrake";
  Control2[Control2["MeleeAttackLight"] = 140] = "MeleeAttackLight";
  Control2[Control2["MeleeAttackHeavy"] = 141] = "MeleeAttackHeavy";
  Control2[Control2["MeleeAttackAlternate"] = 142] = "MeleeAttackAlternate";
  Control2[Control2["MeleeBlock"] = 143] = "MeleeBlock";
  Control2[Control2["ParachuteDeploy"] = 144] = "ParachuteDeploy";
  Control2[Control2["ParachuteDetach"] = 145] = "ParachuteDetach";
  Control2[Control2["ParachuteTurnLeftRight"] = 146] = "ParachuteTurnLeftRight";
  Control2[Control2["ParachuteTurnLeftOnly"] = 147] = "ParachuteTurnLeftOnly";
  Control2[Control2["ParachuteTurnRightOnly"] = 148] = "ParachuteTurnRightOnly";
  Control2[Control2["ParachutePitchUpDown"] = 149] = "ParachutePitchUpDown";
  Control2[Control2["ParachutePitchUpOnly"] = 150] = "ParachutePitchUpOnly";
  Control2[Control2["ParachutePitchDownOnly"] = 151] = "ParachutePitchDownOnly";
  Control2[Control2["ParachuteBrakeLeft"] = 152] = "ParachuteBrakeLeft";
  Control2[Control2["ParachuteBrakeRight"] = 153] = "ParachuteBrakeRight";
  Control2[Control2["ParachuteSmoke"] = 154] = "ParachuteSmoke";
  Control2[Control2["ParachutePrecisionLanding"] = 155] = "ParachutePrecisionLanding";
  Control2[Control2["Map"] = 156] = "Map";
  Control2[Control2["SelectWeaponUnarmed"] = 157] = "SelectWeaponUnarmed";
  Control2[Control2["SelectWeaponMelee"] = 158] = "SelectWeaponMelee";
  Control2[Control2["SelectWeaponHandgun"] = 159] = "SelectWeaponHandgun";
  Control2[Control2["SelectWeaponShotgun"] = 160] = "SelectWeaponShotgun";
  Control2[Control2["SelectWeaponSmg"] = 161] = "SelectWeaponSmg";
  Control2[Control2["SelectWeaponAutoRifle"] = 162] = "SelectWeaponAutoRifle";
  Control2[Control2["SelectWeaponSniper"] = 163] = "SelectWeaponSniper";
  Control2[Control2["SelectWeaponHeavy"] = 164] = "SelectWeaponHeavy";
  Control2[Control2["SelectWeaponSpecial"] = 165] = "SelectWeaponSpecial";
  Control2[Control2["SelectCharacterMichael"] = 166] = "SelectCharacterMichael";
  Control2[Control2["SelectCharacterFranklin"] = 167] = "SelectCharacterFranklin";
  Control2[Control2["SelectCharacterTrevor"] = 168] = "SelectCharacterTrevor";
  Control2[Control2["SelectCharacterMultiplayer"] = 169] = "SelectCharacterMultiplayer";
  Control2[Control2["SaveReplayClip"] = 170] = "SaveReplayClip";
  Control2[Control2["SpecialAbilityPC"] = 171] = "SpecialAbilityPC";
  Control2[Control2["PhoneUp"] = 172] = "PhoneUp";
  Control2[Control2["PhoneDown"] = 173] = "PhoneDown";
  Control2[Control2["PhoneLeft"] = 174] = "PhoneLeft";
  Control2[Control2["PhoneRight"] = 175] = "PhoneRight";
  Control2[Control2["PhoneSelect"] = 176] = "PhoneSelect";
  Control2[Control2["PhoneCancel"] = 177] = "PhoneCancel";
  Control2[Control2["PhoneOption"] = 178] = "PhoneOption";
  Control2[Control2["PhoneExtraOption"] = 179] = "PhoneExtraOption";
  Control2[Control2["PhoneScrollForward"] = 180] = "PhoneScrollForward";
  Control2[Control2["PhoneScrollBackward"] = 181] = "PhoneScrollBackward";
  Control2[Control2["PhoneCameraFocusLock"] = 182] = "PhoneCameraFocusLock";
  Control2[Control2["PhoneCameraGrid"] = 183] = "PhoneCameraGrid";
  Control2[Control2["PhoneCameraSelfie"] = 184] = "PhoneCameraSelfie";
  Control2[Control2["PhoneCameraDOF"] = 185] = "PhoneCameraDOF";
  Control2[Control2["PhoneCameraExpression"] = 186] = "PhoneCameraExpression";
  Control2[Control2["FrontendDown"] = 187] = "FrontendDown";
  Control2[Control2["FrontendUp"] = 188] = "FrontendUp";
  Control2[Control2["FrontendLeft"] = 189] = "FrontendLeft";
  Control2[Control2["FrontendRight"] = 190] = "FrontendRight";
  Control2[Control2["FrontendRdown"] = 191] = "FrontendRdown";
  Control2[Control2["FrontendRup"] = 192] = "FrontendRup";
  Control2[Control2["FrontendRleft"] = 193] = "FrontendRleft";
  Control2[Control2["FrontendRright"] = 194] = "FrontendRright";
  Control2[Control2["FrontendAxisX"] = 195] = "FrontendAxisX";
  Control2[Control2["FrontendAxisY"] = 196] = "FrontendAxisY";
  Control2[Control2["FrontendRightAxisX"] = 197] = "FrontendRightAxisX";
  Control2[Control2["FrontendRightAxisY"] = 198] = "FrontendRightAxisY";
  Control2[Control2["FrontendPause"] = 199] = "FrontendPause";
  Control2[Control2["FrontendPauseAlternate"] = 200] = "FrontendPauseAlternate";
  Control2[Control2["FrontendAccept"] = 201] = "FrontendAccept";
  Control2[Control2["FrontendCancel"] = 202] = "FrontendCancel";
  Control2[Control2["FrontendX"] = 203] = "FrontendX";
  Control2[Control2["FrontendY"] = 204] = "FrontendY";
  Control2[Control2["FrontendLb"] = 205] = "FrontendLb";
  Control2[Control2["FrontendRb"] = 206] = "FrontendRb";
  Control2[Control2["FrontendLt"] = 207] = "FrontendLt";
  Control2[Control2["FrontendRt"] = 208] = "FrontendRt";
  Control2[Control2["FrontendLs"] = 209] = "FrontendLs";
  Control2[Control2["FrontendRs"] = 210] = "FrontendRs";
  Control2[Control2["FrontendLeaderboard"] = 211] = "FrontendLeaderboard";
  Control2[Control2["FrontendSocialClub"] = 212] = "FrontendSocialClub";
  Control2[Control2["FrontendSocialClubSecondary"] = 213] = "FrontendSocialClubSecondary";
  Control2[Control2["FrontendDelete"] = 214] = "FrontendDelete";
  Control2[Control2["FrontendEndscreenAccept"] = 215] = "FrontendEndscreenAccept";
  Control2[Control2["FrontendEndscreenExpand"] = 216] = "FrontendEndscreenExpand";
  Control2[Control2["FrontendSelect"] = 217] = "FrontendSelect";
  Control2[Control2["ScriptLeftAxisX"] = 218] = "ScriptLeftAxisX";
  Control2[Control2["ScriptLeftAxisY"] = 219] = "ScriptLeftAxisY";
  Control2[Control2["ScriptRightAxisX"] = 220] = "ScriptRightAxisX";
  Control2[Control2["ScriptRightAxisY"] = 221] = "ScriptRightAxisY";
  Control2[Control2["ScriptRUp"] = 222] = "ScriptRUp";
  Control2[Control2["ScriptRDown"] = 223] = "ScriptRDown";
  Control2[Control2["ScriptRLeft"] = 224] = "ScriptRLeft";
  Control2[Control2["ScriptRRight"] = 225] = "ScriptRRight";
  Control2[Control2["ScriptLB"] = 226] = "ScriptLB";
  Control2[Control2["ScriptRB"] = 227] = "ScriptRB";
  Control2[Control2["ScriptLT"] = 228] = "ScriptLT";
  Control2[Control2["ScriptRT"] = 229] = "ScriptRT";
  Control2[Control2["ScriptLS"] = 230] = "ScriptLS";
  Control2[Control2["ScriptRS"] = 231] = "ScriptRS";
  Control2[Control2["ScriptPadUp"] = 232] = "ScriptPadUp";
  Control2[Control2["ScriptPadDown"] = 233] = "ScriptPadDown";
  Control2[Control2["ScriptPadLeft"] = 234] = "ScriptPadLeft";
  Control2[Control2["ScriptPadRight"] = 235] = "ScriptPadRight";
  Control2[Control2["ScriptSelect"] = 236] = "ScriptSelect";
  Control2[Control2["CursorAccept"] = 237] = "CursorAccept";
  Control2[Control2["CursorCancel"] = 238] = "CursorCancel";
  Control2[Control2["CursorX"] = 239] = "CursorX";
  Control2[Control2["CursorY"] = 240] = "CursorY";
  Control2[Control2["CursorScrollUp"] = 241] = "CursorScrollUp";
  Control2[Control2["CursorScrollDown"] = 242] = "CursorScrollDown";
  Control2[Control2["EnterCheatCode"] = 243] = "EnterCheatCode";
  Control2[Control2["InteractionMenu"] = 244] = "InteractionMenu";
  Control2[Control2["MpTextChatAll"] = 245] = "MpTextChatAll";
  Control2[Control2["MpTextChatTeam"] = 246] = "MpTextChatTeam";
  Control2[Control2["MpTextChatFriends"] = 247] = "MpTextChatFriends";
  Control2[Control2["MpTextChatCrew"] = 248] = "MpTextChatCrew";
  Control2[Control2["PushToTalk"] = 249] = "PushToTalk";
  Control2[Control2["CreatorLS"] = 250] = "CreatorLS";
  Control2[Control2["CreatorRS"] = 251] = "CreatorRS";
  Control2[Control2["CreatorLT"] = 252] = "CreatorLT";
  Control2[Control2["CreatorRT"] = 253] = "CreatorRT";
  Control2[Control2["CreatorMenuToggle"] = 254] = "CreatorMenuToggle";
  Control2[Control2["CreatorAccept"] = 255] = "CreatorAccept";
  Control2[Control2["CreatorDelete"] = 256] = "CreatorDelete";
  Control2[Control2["Attack2"] = 257] = "Attack2";
  Control2[Control2["RappelJump"] = 258] = "RappelJump";
  Control2[Control2["RappelLongJump"] = 259] = "RappelLongJump";
  Control2[Control2["RappelSmashWindow"] = 260] = "RappelSmashWindow";
  Control2[Control2["PrevWeapon"] = 261] = "PrevWeapon";
  Control2[Control2["NextWeapon"] = 262] = "NextWeapon";
  Control2[Control2["MeleeAttack1"] = 263] = "MeleeAttack1";
  Control2[Control2["MeleeAttack2"] = 264] = "MeleeAttack2";
  Control2[Control2["Whistle"] = 265] = "Whistle";
  Control2[Control2["MoveLeft"] = 266] = "MoveLeft";
  Control2[Control2["MoveRight"] = 267] = "MoveRight";
  Control2[Control2["MoveUp"] = 268] = "MoveUp";
  Control2[Control2["MoveDown"] = 269] = "MoveDown";
  Control2[Control2["LookLeft"] = 270] = "LookLeft";
  Control2[Control2["LookRight"] = 271] = "LookRight";
  Control2[Control2["LookUp"] = 272] = "LookUp";
  Control2[Control2["LookDown"] = 273] = "LookDown";
  Control2[Control2["SniperZoomIn"] = 274] = "SniperZoomIn";
  Control2[Control2["SniperZoomOut"] = 275] = "SniperZoomOut";
  Control2[Control2["SniperZoomInAlternate"] = 276] = "SniperZoomInAlternate";
  Control2[Control2["SniperZoomOutAlternate"] = 277] = "SniperZoomOutAlternate";
  Control2[Control2["VehicleMoveLeft"] = 278] = "VehicleMoveLeft";
  Control2[Control2["VehicleMoveRight"] = 279] = "VehicleMoveRight";
  Control2[Control2["VehicleMoveUp"] = 280] = "VehicleMoveUp";
  Control2[Control2["VehicleMoveDown"] = 281] = "VehicleMoveDown";
  Control2[Control2["VehicleGunLeft"] = 282] = "VehicleGunLeft";
  Control2[Control2["VehicleGunRight"] = 283] = "VehicleGunRight";
  Control2[Control2["VehicleGunUp"] = 284] = "VehicleGunUp";
  Control2[Control2["VehicleGunDown"] = 285] = "VehicleGunDown";
  Control2[Control2["VehicleLookLeft"] = 286] = "VehicleLookLeft";
  Control2[Control2["VehicleLookRight"] = 287] = "VehicleLookRight";
  Control2[Control2["ReplayStartStopRecording"] = 288] = "ReplayStartStopRecording";
  Control2[Control2["ReplayStartStopRecordingSecondary"] = 289] = "ReplayStartStopRecordingSecondary";
  Control2[Control2["ScaledLookLeftRight"] = 290] = "ScaledLookLeftRight";
  Control2[Control2["ScaledLookUpDown"] = 291] = "ScaledLookUpDown";
  Control2[Control2["ScaledLookUpOnly"] = 292] = "ScaledLookUpOnly";
  Control2[Control2["ScaledLookDownOnly"] = 293] = "ScaledLookDownOnly";
  Control2[Control2["ScaledLookLeftOnly"] = 294] = "ScaledLookLeftOnly";
  Control2[Control2["ScaledLookRightOnly"] = 295] = "ScaledLookRightOnly";
  Control2[Control2["ReplayMarkerDelete"] = 296] = "ReplayMarkerDelete";
  Control2[Control2["ReplayClipDelete"] = 297] = "ReplayClipDelete";
  Control2[Control2["ReplayPause"] = 298] = "ReplayPause";
  Control2[Control2["ReplayRewind"] = 299] = "ReplayRewind";
  Control2[Control2["ReplayFfwd"] = 300] = "ReplayFfwd";
  Control2[Control2["ReplayNewmarker"] = 301] = "ReplayNewmarker";
  Control2[Control2["ReplayRecord"] = 302] = "ReplayRecord";
  Control2[Control2["ReplayScreenshot"] = 303] = "ReplayScreenshot";
  Control2[Control2["ReplayHidehud"] = 304] = "ReplayHidehud";
  Control2[Control2["ReplayStartpoint"] = 305] = "ReplayStartpoint";
  Control2[Control2["ReplayEndpoint"] = 306] = "ReplayEndpoint";
  Control2[Control2["ReplayAdvance"] = 307] = "ReplayAdvance";
  Control2[Control2["ReplayBack"] = 308] = "ReplayBack";
  Control2[Control2["ReplayTools"] = 309] = "ReplayTools";
  Control2[Control2["ReplayRestart"] = 310] = "ReplayRestart";
  Control2[Control2["ReplayShowhotkey"] = 311] = "ReplayShowhotkey";
  Control2[Control2["ReplayCycleMarkerLeft"] = 312] = "ReplayCycleMarkerLeft";
  Control2[Control2["ReplayCycleMarkerRight"] = 313] = "ReplayCycleMarkerRight";
  Control2[Control2["ReplayFOVIncrease"] = 314] = "ReplayFOVIncrease";
  Control2[Control2["ReplayFOVDecrease"] = 315] = "ReplayFOVDecrease";
  Control2[Control2["ReplayCameraUp"] = 316] = "ReplayCameraUp";
  Control2[Control2["ReplayCameraDown"] = 317] = "ReplayCameraDown";
  Control2[Control2["ReplaySave"] = 318] = "ReplaySave";
  Control2[Control2["ReplayToggletime"] = 319] = "ReplayToggletime";
  Control2[Control2["ReplayToggletips"] = 320] = "ReplayToggletips";
  Control2[Control2["ReplayPreview"] = 321] = "ReplayPreview";
  Control2[Control2["ReplayToggleTimeline"] = 322] = "ReplayToggleTimeline";
  Control2[Control2["ReplayTimelinePickupClip"] = 323] = "ReplayTimelinePickupClip";
  Control2[Control2["ReplayTimelineDuplicateClip"] = 324] = "ReplayTimelineDuplicateClip";
  Control2[Control2["ReplayTimelinePlaceClip"] = 325] = "ReplayTimelinePlaceClip";
  Control2[Control2["ReplayCtrl"] = 326] = "ReplayCtrl";
  Control2[Control2["ReplayTimelineSave"] = 327] = "ReplayTimelineSave";
  Control2[Control2["ReplayPreviewAudio"] = 328] = "ReplayPreviewAudio";
  Control2[Control2["VehicleDriveLook"] = 329] = "VehicleDriveLook";
  Control2[Control2["VehicleDriveLook2"] = 330] = "VehicleDriveLook2";
  Control2[Control2["VehicleFlyAttack2"] = 331] = "VehicleFlyAttack2";
  Control2[Control2["RadioWheelUpDown"] = 332] = "RadioWheelUpDown";
  Control2[Control2["RadioWheelLeftRight"] = 333] = "RadioWheelLeftRight";
  Control2[Control2["VehicleSlowMoUpDown"] = 334] = "VehicleSlowMoUpDown";
  Control2[Control2["VehicleSlowMoUpOnly"] = 335] = "VehicleSlowMoUpOnly";
  Control2[Control2["VehicleSlowMoDownOnly"] = 336] = "VehicleSlowMoDownOnly";
  Control2[Control2["VehicleHydraulicsControlToggle"] = 337] = "VehicleHydraulicsControlToggle";
  Control2[Control2["VehicleHydraulicsControlLeft"] = 338] = "VehicleHydraulicsControlLeft";
  Control2[Control2["VehicleHydraulicsControlRight"] = 339] = "VehicleHydraulicsControlRight";
  Control2[Control2["VehicleHydraulicsControlUp"] = 340] = "VehicleHydraulicsControlUp";
  Control2[Control2["VehicleHydraulicsControlDown"] = 341] = "VehicleHydraulicsControlDown";
  Control2[Control2["VehicleHydraulicsControlUpDown"] = 342] = "VehicleHydraulicsControlUpDown";
  Control2[Control2["VehicleHydraulicsControlLeftRight"] = 343] = "VehicleHydraulicsControlLeftRight";
  Control2[Control2["SwitchVisor"] = 344] = "SwitchVisor";
  Control2[Control2["VehicleMeleeHold"] = 345] = "VehicleMeleeHold";
  Control2[Control2["VehicleMeleeLeft"] = 346] = "VehicleMeleeLeft";
  Control2[Control2["VehicleMeleeRight"] = 347] = "VehicleMeleeRight";
  Control2[Control2["MapPointOfInterest"] = 348] = "MapPointOfInterest";
  Control2[Control2["ReplaySnapmaticPhoto"] = 349] = "ReplaySnapmaticPhoto";
  Control2[Control2["VehicleCarJump"] = 350] = "VehicleCarJump";
  Control2[Control2["VehicleRocketBoost"] = 351] = "VehicleRocketBoost";
  Control2[Control2["VehicleFlyBoost"] = 352] = "VehicleFlyBoost";
  Control2[Control2["VehicleParachute"] = 353] = "VehicleParachute";
  Control2[Control2["VehicleBikeWings"] = 354] = "VehicleBikeWings";
  Control2[Control2["VehicleFlyBombBay"] = 355] = "VehicleFlyBombBay";
  Control2[Control2["VehicleFlyCounter"] = 356] = "VehicleFlyCounter";
  Control2[Control2["VehicleFlyTransform"] = 357] = "VehicleFlyTransform";
  return Control2;
})(Control || {});

// src/fivem/enums/CursorSprite.ts
var CursorSprite = /* @__PURE__ */ ((CursorSprite2) => {
  CursorSprite2[CursorSprite2["Normal"] = 1] = "Normal";
  CursorSprite2[CursorSprite2["LightArrow"] = 2] = "LightArrow";
  CursorSprite2[CursorSprite2["OpenHand"] = 3] = "OpenHand";
  CursorSprite2[CursorSprite2["GrabHand"] = 4] = "GrabHand";
  CursorSprite2[CursorSprite2["MiddleFinger"] = 5] = "MiddleFinger";
  CursorSprite2[CursorSprite2["LeftArrow"] = 6] = "LeftArrow";
  CursorSprite2[CursorSprite2["RightArrow"] = 7] = "RightArrow";
  CursorSprite2[CursorSprite2["UpArrow"] = 8] = "UpArrow";
  CursorSprite2[CursorSprite2["DownArrow"] = 9] = "DownArrow";
  CursorSprite2[CursorSprite2["HorizontalDoubleArrow"] = 10] = "HorizontalDoubleArrow";
  CursorSprite2[CursorSprite2["NormalWithPlus"] = 11] = "NormalWithPlus";
  CursorSprite2[CursorSprite2["NormalWithMinus"] = 12] = "NormalWithMinus";
  return CursorSprite2;
})(CursorSprite || {});

// src/fivem/enums/Driving.ts
var DrivingStyle = /* @__PURE__ */ ((DrivingStyle2) => {
  DrivingStyle2[DrivingStyle2["None"] = 0] = "None";
  DrivingStyle2[DrivingStyle2["Normal"] = 786603] = "Normal";
  DrivingStyle2[DrivingStyle2["IgnoreLights"] = 2883621] = "IgnoreLights";
  DrivingStyle2[DrivingStyle2["SometimesOvertakeTraffic"] = 5] = "SometimesOvertakeTraffic";
  DrivingStyle2[DrivingStyle2["Rushed"] = 1074528293] = "Rushed";
  DrivingStyle2[DrivingStyle2["AvoidTraffic"] = 786468] = "AvoidTraffic";
  DrivingStyle2[DrivingStyle2["AvoidTrafficExtremely"] = 6] = "AvoidTrafficExtremely";
  DrivingStyle2[DrivingStyle2["AvoidHighwaysWhenPossible"] = 536870912] = "AvoidHighwaysWhenPossible";
  DrivingStyle2[DrivingStyle2["IgnorePathing"] = 16777216] = "IgnorePathing";
  DrivingStyle2[DrivingStyle2["IgnoreRoads"] = 4194304] = "IgnoreRoads";
  DrivingStyle2[DrivingStyle2["ShortestPath"] = 262144] = "ShortestPath";
  DrivingStyle2[DrivingStyle2["Backwards"] = 1024] = "Backwards";
  return DrivingStyle2;
})(DrivingStyle || {});
var VehicleDrivingFlags = /* @__PURE__ */ ((VehicleDrivingFlags2) => {
  VehicleDrivingFlags2[VehicleDrivingFlags2["None"] = 0] = "None";
  VehicleDrivingFlags2[VehicleDrivingFlags2["FollowTraffic"] = 1] = "FollowTraffic";
  VehicleDrivingFlags2[VehicleDrivingFlags2["YieldToPeds"] = 2] = "YieldToPeds";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidVehicles"] = 4] = "AvoidVehicles";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidEmptyVehicles"] = 8] = "AvoidEmptyVehicles";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidPeds"] = 16] = "AvoidPeds";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidObjects"] = 32] = "AvoidObjects";
  VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtTrafficLights"] = 128] = "StopAtTrafficLights";
  VehicleDrivingFlags2[VehicleDrivingFlags2["UseBlinkers"] = 256] = "UseBlinkers";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AllowGoingWrongWay"] = 512] = "AllowGoingWrongWay";
  VehicleDrivingFlags2[VehicleDrivingFlags2["Reverse"] = 1024] = "Reverse";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AllowMedianCrossing"] = 262144] = "AllowMedianCrossing";
  VehicleDrivingFlags2[VehicleDrivingFlags2["DriveBySight"] = 4194304] = "DriveBySight";
  VehicleDrivingFlags2[VehicleDrivingFlags2["IgnorePathFinding"] = 16777216] = "IgnorePathFinding";
  VehicleDrivingFlags2[VehicleDrivingFlags2["TryToAvoidHighways"] = 536870912] = "TryToAvoidHighways";
  VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtDestination"] = 2147483648] = "StopAtDestination";
  return VehicleDrivingFlags2;
})(VehicleDrivingFlags || {});

// src/fivem/enums/ExplosionType.ts
var ExplosionType = /* @__PURE__ */ ((ExplosionType2) => {
  ExplosionType2[ExplosionType2["Grenade"] = 0] = "Grenade";
  ExplosionType2[ExplosionType2["GrenadeL"] = 1] = "GrenadeL";
  ExplosionType2[ExplosionType2["StickyBomb"] = 2] = "StickyBomb";
  ExplosionType2[ExplosionType2["Molotov1"] = 3] = "Molotov1";
  ExplosionType2[ExplosionType2["Rocket"] = 4] = "Rocket";
  ExplosionType2[ExplosionType2["TankShell"] = 5] = "TankShell";
  ExplosionType2[ExplosionType2["HiOctane"] = 6] = "HiOctane";
  ExplosionType2[ExplosionType2["Car"] = 7] = "Car";
  ExplosionType2[ExplosionType2["Plane"] = 8] = "Plane";
  ExplosionType2[ExplosionType2["PetrolPump"] = 9] = "PetrolPump";
  ExplosionType2[ExplosionType2["Bike"] = 10] = "Bike";
  ExplosionType2[ExplosionType2["Steam"] = 11] = "Steam";
  ExplosionType2[ExplosionType2["Flame"] = 12] = "Flame";
  ExplosionType2[ExplosionType2["WaterHydrant"] = 13] = "WaterHydrant";
  ExplosionType2[ExplosionType2["GasCanister"] = 14] = "GasCanister";
  ExplosionType2[ExplosionType2["Boat"] = 15] = "Boat";
  ExplosionType2[ExplosionType2["ShipDestroy"] = 16] = "ShipDestroy";
  ExplosionType2[ExplosionType2["Truck"] = 17] = "Truck";
  ExplosionType2[ExplosionType2["Bullet"] = 18] = "Bullet";
  ExplosionType2[ExplosionType2["SmokeGL"] = 19] = "SmokeGL";
  ExplosionType2[ExplosionType2["SmokeG"] = 20] = "SmokeG";
  ExplosionType2[ExplosionType2["BZGas"] = 21] = "BZGas";
  ExplosionType2[ExplosionType2["Flare"] = 22] = "Flare";
  ExplosionType2[ExplosionType2["GasCanister2"] = 23] = "GasCanister2";
  ExplosionType2[ExplosionType2["Extinguisher"] = 24] = "Extinguisher";
  ExplosionType2[ExplosionType2["ProgramAR"] = 25] = "ProgramAR";
  ExplosionType2[ExplosionType2["Train"] = 26] = "Train";
  ExplosionType2[ExplosionType2["Barrel"] = 27] = "Barrel";
  ExplosionType2[ExplosionType2["Propane"] = 28] = "Propane";
  ExplosionType2[ExplosionType2["Blimp"] = 29] = "Blimp";
  ExplosionType2[ExplosionType2["FlameExplode"] = 30] = "FlameExplode";
  ExplosionType2[ExplosionType2["Tanker"] = 31] = "Tanker";
  ExplosionType2[ExplosionType2["PlaneRocket"] = 32] = "PlaneRocket";
  ExplosionType2[ExplosionType2["VehicleBullet"] = 33] = "VehicleBullet";
  ExplosionType2[ExplosionType2["GasTank"] = 34] = "GasTank";
  ExplosionType2[ExplosionType2["FireWork"] = 35] = "FireWork";
  ExplosionType2[ExplosionType2["SnowBall"] = 36] = "SnowBall";
  ExplosionType2[ExplosionType2["ProxMine"] = 37] = "ProxMine";
  ExplosionType2[ExplosionType2["Valkyrie"] = 38] = "Valkyrie";
  return ExplosionType2;
})(ExplosionType || {});

// src/fivem/enums/FiringPattern.ts
var FiringPattern = /* @__PURE__ */ ((FiringPattern2) => {
  FiringPattern2[FiringPattern2["Default"] = 0] = "Default";
  FiringPattern2[FiringPattern2["FullAuto"] = 3337513804] = "FullAuto";
  FiringPattern2[FiringPattern2["BurstFire"] = 3607063905] = "BurstFire";
  FiringPattern2[FiringPattern2["BurstInCover"] = 40051185] = "BurstInCover";
  FiringPattern2[FiringPattern2["BurstFireDriveby"] = 3541198322] = "BurstFireDriveby";
  FiringPattern2[FiringPattern2["FromGround"] = 577037782] = "FromGround";
  FiringPattern2[FiringPattern2["DelayFireByOneSec"] = 2055493265] = "DelayFireByOneSec";
  FiringPattern2[FiringPattern2["SingleShot"] = 1566631136] = "SingleShot";
  FiringPattern2[FiringPattern2["BurstFirePistol"] = 2685983626] = "BurstFirePistol";
  FiringPattern2[FiringPattern2["BurstFireSMG"] = 3507334638] = "BurstFireSMG";
  FiringPattern2[FiringPattern2["BurstFireRifle"] = 2624893958] = "BurstFireRifle";
  FiringPattern2[FiringPattern2["BurstFireMG"] = 3044263348] = "BurstFireMG";
  FiringPattern2[FiringPattern2["BurstFirePumpShotGun"] = 12239771] = "BurstFirePumpShotGun";
  FiringPattern2[FiringPattern2["BurstFireHeli"] = 2437838959] = "BurstFireHeli";
  FiringPattern2[FiringPattern2["BurstFireMicro"] = 1122960381] = "BurstFireMicro";
  FiringPattern2[FiringPattern2["BurstFireBursts"] = 445831135] = "BurstFireBursts";
  FiringPattern2[FiringPattern2["BurstFireTank"] = 3804904049] = "BurstFireTank";
  return FiringPattern2;
})(FiringPattern || {});

// src/fivem/enums/Font.ts
var Font = /* @__PURE__ */ ((Font2) => {
  Font2[Font2["ChaletLondon"] = 0] = "ChaletLondon";
  Font2[Font2["HouseScript"] = 1] = "HouseScript";
  Font2[Font2["Monospace"] = 2] = "Monospace";
  Font2[Font2["ChaletComprimeCologne"] = 4] = "ChaletComprimeCologne";
  Font2[Font2["Pricedown"] = 7] = "Pricedown";
  return Font2;
})(Font || {});

// src/fivem/enums/ForceType.ts
var ForceType = /* @__PURE__ */ ((ForceType2) => {
  ForceType2[ForceType2["MinForce"] = 0] = "MinForce";
  ForceType2[ForceType2["MaxForceRot"] = 1] = "MaxForceRot";
  ForceType2[ForceType2["MinForce2"] = 2] = "MinForce2";
  ForceType2[ForceType2["MaxForceRot2"] = 3] = "MaxForceRot2";
  ForceType2[ForceType2["ForceNoRot"] = 4] = "ForceNoRot";
  ForceType2[ForceType2["ForceRotPlusForce"] = 5] = "ForceRotPlusForce";
  return ForceType2;
})(ForceType || {});

// src/fivem/enums/Gender.ts
var Gender = /* @__PURE__ */ ((Gender2) => {
  Gender2[Gender2["Male"] = 0] = "Male";
  Gender2[Gender2["Female"] = 1] = "Female";
  return Gender2;
})(Gender || {});

// src/fivem/enums/HelmetType.ts
var HelmetType = /* @__PURE__ */ ((HelmetType2) => {
  HelmetType2[HelmetType2["RegularMotorcycleHelmet"] = 4096] = "RegularMotorcycleHelmet";
  HelmetType2[HelmetType2["FiremanHelmet"] = 16384] = "FiremanHelmet";
  HelmetType2[HelmetType2["PilotHeadset"] = 32768] = "PilotHeadset";
  return HelmetType2;
})(HelmetType || {});

// src/fivem/enums/HudColor.ts
var HudColor = /* @__PURE__ */ ((HudColor2) => {
  HudColor2[HudColor2["NONE"] = -1] = "NONE";
  HudColor2[HudColor2["HUD_COLOUR_PURE_WHITE"] = 0] = "HUD_COLOUR_PURE_WHITE";
  HudColor2[HudColor2["HUD_COLOUR_WHITE"] = 1] = "HUD_COLOUR_WHITE";
  HudColor2[HudColor2["HUD_COLOUR_BLACK"] = 2] = "HUD_COLOUR_BLACK";
  HudColor2[HudColor2["HUD_COLOUR_GREY"] = 3] = "HUD_COLOUR_GREY";
  HudColor2[HudColor2["HUD_COLOUR_GREYLIGHT"] = 4] = "HUD_COLOUR_GREYLIGHT";
  HudColor2[HudColor2["HUD_COLOUR_GREYDARK"] = 5] = "HUD_COLOUR_GREYDARK";
  HudColor2[HudColor2["HUD_COLOUR_RED"] = 6] = "HUD_COLOUR_RED";
  HudColor2[HudColor2["HUD_COLOUR_REDLIGHT"] = 7] = "HUD_COLOUR_REDLIGHT";
  HudColor2[HudColor2["HUD_COLOUR_REDDARK"] = 8] = "HUD_COLOUR_REDDARK";
  HudColor2[HudColor2["HUD_COLOUR_BLUE"] = 9] = "HUD_COLOUR_BLUE";
  HudColor2[HudColor2["HUD_COLOUR_BLUELIGHT"] = 10] = "HUD_COLOUR_BLUELIGHT";
  HudColor2[HudColor2["HUD_COLOUR_BLUEDARK"] = 11] = "HUD_COLOUR_BLUEDARK";
  HudColor2[HudColor2["HUD_COLOUR_YELLOW"] = 12] = "HUD_COLOUR_YELLOW";
  HudColor2[HudColor2["HUD_COLOUR_YELLOWLIGHT"] = 13] = "HUD_COLOUR_YELLOWLIGHT";
  HudColor2[HudColor2["HUD_COLOUR_YELLOWDARK"] = 14] = "HUD_COLOUR_YELLOWDARK";
  HudColor2[HudColor2["HUD_COLOUR_ORANGE"] = 15] = "HUD_COLOUR_ORANGE";
  HudColor2[HudColor2["HUD_COLOUR_ORANGELIGHT"] = 16] = "HUD_COLOUR_ORANGELIGHT";
  HudColor2[HudColor2["HUD_COLOUR_ORANGEDARK"] = 17] = "HUD_COLOUR_ORANGEDARK";
  HudColor2[HudColor2["HUD_COLOUR_GREEN"] = 18] = "HUD_COLOUR_GREEN";
  HudColor2[HudColor2["HUD_COLOUR_GREENLIGHT"] = 19] = "HUD_COLOUR_GREENLIGHT";
  HudColor2[HudColor2["HUD_COLOUR_GREENDARK"] = 20] = "HUD_COLOUR_GREENDARK";
  HudColor2[HudColor2["HUD_COLOUR_PURPLE"] = 21] = "HUD_COLOUR_PURPLE";
  HudColor2[HudColor2["HUD_COLOUR_PURPLELIGHT"] = 22] = "HUD_COLOUR_PURPLELIGHT";
  HudColor2[HudColor2["HUD_COLOUR_PURPLEDARK"] = 23] = "HUD_COLOUR_PURPLEDARK";
  HudColor2[HudColor2["HUD_COLOUR_PINK"] = 24] = "HUD_COLOUR_PINK";
  HudColor2[HudColor2["HUD_COLOUR_RADAR_HEALTH"] = 25] = "HUD_COLOUR_RADAR_HEALTH";
  HudColor2[HudColor2["HUD_COLOUR_RADAR_ARMOUR"] = 26] = "HUD_COLOUR_RADAR_ARMOUR";
  HudColor2[HudColor2["HUD_COLOUR_RADAR_DAMAGE"] = 27] = "HUD_COLOUR_RADAR_DAMAGE";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER1"] = 28] = "HUD_COLOUR_NET_PLAYER1";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER2"] = 29] = "HUD_COLOUR_NET_PLAYER2";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER3"] = 30] = "HUD_COLOUR_NET_PLAYER3";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER4"] = 31] = "HUD_COLOUR_NET_PLAYER4";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER5"] = 32] = "HUD_COLOUR_NET_PLAYER5";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER6"] = 33] = "HUD_COLOUR_NET_PLAYER6";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER7"] = 34] = "HUD_COLOUR_NET_PLAYER7";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER8"] = 35] = "HUD_COLOUR_NET_PLAYER8";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER9"] = 36] = "HUD_COLOUR_NET_PLAYER9";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER10"] = 37] = "HUD_COLOUR_NET_PLAYER10";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER11"] = 38] = "HUD_COLOUR_NET_PLAYER11";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER12"] = 39] = "HUD_COLOUR_NET_PLAYER12";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER13"] = 40] = "HUD_COLOUR_NET_PLAYER13";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER14"] = 41] = "HUD_COLOUR_NET_PLAYER14";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER15"] = 42] = "HUD_COLOUR_NET_PLAYER15";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER16"] = 43] = "HUD_COLOUR_NET_PLAYER16";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER17"] = 44] = "HUD_COLOUR_NET_PLAYER17";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER18"] = 45] = "HUD_COLOUR_NET_PLAYER18";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER19"] = 46] = "HUD_COLOUR_NET_PLAYER19";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER20"] = 47] = "HUD_COLOUR_NET_PLAYER20";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER21"] = 48] = "HUD_COLOUR_NET_PLAYER21";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER22"] = 49] = "HUD_COLOUR_NET_PLAYER22";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER23"] = 50] = "HUD_COLOUR_NET_PLAYER23";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER24"] = 51] = "HUD_COLOUR_NET_PLAYER24";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER25"] = 52] = "HUD_COLOUR_NET_PLAYER25";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER26"] = 53] = "HUD_COLOUR_NET_PLAYER26";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER27"] = 54] = "HUD_COLOUR_NET_PLAYER27";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER28"] = 55] = "HUD_COLOUR_NET_PLAYER28";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER29"] = 56] = "HUD_COLOUR_NET_PLAYER29";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER30"] = 57] = "HUD_COLOUR_NET_PLAYER30";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER31"] = 58] = "HUD_COLOUR_NET_PLAYER31";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER32"] = 59] = "HUD_COLOUR_NET_PLAYER32";
  HudColor2[HudColor2["HUD_COLOUR_SIMPLEBLIP_DEFAULT"] = 60] = "HUD_COLOUR_SIMPLEBLIP_DEFAULT";
  HudColor2[HudColor2["HUD_COLOUR_MENU_BLUE"] = 61] = "HUD_COLOUR_MENU_BLUE";
  HudColor2[HudColor2["HUD_COLOUR_MENU_GREY_LIGHT"] = 62] = "HUD_COLOUR_MENU_GREY_LIGHT";
  HudColor2[HudColor2["HUD_COLOUR_MENU_BLUE_EXTRA_DARK"] = 63] = "HUD_COLOUR_MENU_BLUE_EXTRA_DARK";
  HudColor2[HudColor2["HUD_COLOUR_MENU_YELLOW"] = 64] = "HUD_COLOUR_MENU_YELLOW";
  HudColor2[HudColor2["HUD_COLOUR_MENU_YELLOW_DARK"] = 65] = "HUD_COLOUR_MENU_YELLOW_DARK";
  HudColor2[HudColor2["HUD_COLOUR_MENU_GREEN"] = 66] = "HUD_COLOUR_MENU_GREEN";
  HudColor2[HudColor2["HUD_COLOUR_MENU_GREY"] = 67] = "HUD_COLOUR_MENU_GREY";
  HudColor2[HudColor2["HUD_COLOUR_MENU_GREY_DARK"] = 68] = "HUD_COLOUR_MENU_GREY_DARK";
  HudColor2[HudColor2["HUD_COLOUR_MENU_HIGHLIGHT"] = 69] = "HUD_COLOUR_MENU_HIGHLIGHT";
  HudColor2[HudColor2["HUD_COLOUR_MENU_STANDARD"] = 70] = "HUD_COLOUR_MENU_STANDARD";
  HudColor2[HudColor2["HUD_COLOUR_MENU_DIMMED"] = 71] = "HUD_COLOUR_MENU_DIMMED";
  HudColor2[HudColor2["HUD_COLOUR_MENU_EXTRA_DIMMED"] = 72] = "HUD_COLOUR_MENU_EXTRA_DIMMED";
  HudColor2[HudColor2["HUD_COLOUR_BRIEF_TITLE"] = 73] = "HUD_COLOUR_BRIEF_TITLE";
  HudColor2[HudColor2["HUD_COLOUR_MID_GREY_MP"] = 74] = "HUD_COLOUR_MID_GREY_MP";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER1_DARK"] = 75] = "HUD_COLOUR_NET_PLAYER1_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER2_DARK"] = 76] = "HUD_COLOUR_NET_PLAYER2_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER3_DARK"] = 77] = "HUD_COLOUR_NET_PLAYER3_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER4_DARK"] = 78] = "HUD_COLOUR_NET_PLAYER4_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER5_DARK"] = 79] = "HUD_COLOUR_NET_PLAYER5_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER6_DARK"] = 80] = "HUD_COLOUR_NET_PLAYER6_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER7_DARK"] = 81] = "HUD_COLOUR_NET_PLAYER7_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER8_DARK"] = 82] = "HUD_COLOUR_NET_PLAYER8_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER9_DARK"] = 83] = "HUD_COLOUR_NET_PLAYER9_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER10_DARK"] = 84] = "HUD_COLOUR_NET_PLAYER10_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER11_DARK"] = 85] = "HUD_COLOUR_NET_PLAYER11_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER12_DARK"] = 86] = "HUD_COLOUR_NET_PLAYER12_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER13_DARK"] = 87] = "HUD_COLOUR_NET_PLAYER13_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER14_DARK"] = 88] = "HUD_COLOUR_NET_PLAYER14_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER15_DARK"] = 89] = "HUD_COLOUR_NET_PLAYER15_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER16_DARK"] = 90] = "HUD_COLOUR_NET_PLAYER16_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER17_DARK"] = 91] = "HUD_COLOUR_NET_PLAYER17_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER18_DARK"] = 92] = "HUD_COLOUR_NET_PLAYER18_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER19_DARK"] = 93] = "HUD_COLOUR_NET_PLAYER19_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER20_DARK"] = 94] = "HUD_COLOUR_NET_PLAYER20_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER21_DARK"] = 95] = "HUD_COLOUR_NET_PLAYER21_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER22_DARK"] = 96] = "HUD_COLOUR_NET_PLAYER22_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER23_DARK"] = 97] = "HUD_COLOUR_NET_PLAYER23_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER24_DARK"] = 98] = "HUD_COLOUR_NET_PLAYER24_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER25_DARK"] = 99] = "HUD_COLOUR_NET_PLAYER25_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER26_DARK"] = 100] = "HUD_COLOUR_NET_PLAYER26_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER27_DARK"] = 101] = "HUD_COLOUR_NET_PLAYER27_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER28_DARK"] = 102] = "HUD_COLOUR_NET_PLAYER28_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER29_DARK"] = 103] = "HUD_COLOUR_NET_PLAYER29_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER30_DARK"] = 104] = "HUD_COLOUR_NET_PLAYER30_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER31_DARK"] = 105] = "HUD_COLOUR_NET_PLAYER31_DARK";
  HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER32_DARK"] = 106] = "HUD_COLOUR_NET_PLAYER32_DARK";
  HudColor2[HudColor2["HUD_COLOUR_BRONZE"] = 107] = "HUD_COLOUR_BRONZE";
  HudColor2[HudColor2["HUD_COLOUR_SILVER"] = 108] = "HUD_COLOUR_SILVER";
  HudColor2[HudColor2["HUD_COLOUR_GOLD"] = 109] = "HUD_COLOUR_GOLD";
  HudColor2[HudColor2["HUD_COLOUR_PLATINUM"] = 110] = "HUD_COLOUR_PLATINUM";
  HudColor2[HudColor2["HUD_COLOUR_GANG1"] = 111] = "HUD_COLOUR_GANG1";
  HudColor2[HudColor2["HUD_COLOUR_GANG2"] = 112] = "HUD_COLOUR_GANG2";
  HudColor2[HudColor2["HUD_COLOUR_GANG3"] = 113] = "HUD_COLOUR_GANG3";
  HudColor2[HudColor2["HUD_COLOUR_GANG4"] = 114] = "HUD_COLOUR_GANG4";
  HudColor2[HudColor2["HUD_COLOUR_SAME_CREW"] = 115] = "HUD_COLOUR_SAME_CREW";
  HudColor2[HudColor2["HUD_COLOUR_FREEMODE"] = 116] = "HUD_COLOUR_FREEMODE";
  HudColor2[HudColor2["HUD_COLOUR_PAUSE_BG"] = 117] = "HUD_COLOUR_PAUSE_BG";
  HudColor2[HudColor2["HUD_COLOUR_FRIENDLY"] = 118] = "HUD_COLOUR_FRIENDLY";
  HudColor2[HudColor2["HUD_COLOUR_ENEMY"] = 119] = "HUD_COLOUR_ENEMY";
  HudColor2[HudColor2["HUD_COLOUR_LOCATION"] = 120] = "HUD_COLOUR_LOCATION";
  HudColor2[HudColor2["HUD_COLOUR_PICKUP"] = 121] = "HUD_COLOUR_PICKUP";
  HudColor2[HudColor2["HUD_COLOUR_PAUSE_SINGLEPLAYER"] = 122] = "HUD_COLOUR_PAUSE_SINGLEPLAYER";
  HudColor2[HudColor2["HUD_COLOUR_FREEMODE_DARK"] = 123] = "HUD_COLOUR_FREEMODE_DARK";
  HudColor2[HudColor2["HUD_COLOUR_INACTIVE_MISSION"] = 124] = "HUD_COLOUR_INACTIVE_MISSION";
  HudColor2[HudColor2["HUD_COLOUR_DAMAGE"] = 125] = "HUD_COLOUR_DAMAGE";
  HudColor2[HudColor2["HUD_COLOUR_PINKLIGHT"] = 126] = "HUD_COLOUR_PINKLIGHT";
  HudColor2[HudColor2["HUD_COLOUR_PM_MITEM_HIGHLIGHT"] = 127] = "HUD_COLOUR_PM_MITEM_HIGHLIGHT";
  HudColor2[HudColor2["HUD_COLOUR_SCRIPT_VARIABLE"] = 128] = "HUD_COLOUR_SCRIPT_VARIABLE";
  HudColor2[HudColor2["HUD_COLOUR_YOGA"] = 129] = "HUD_COLOUR_YOGA";
  HudColor2[HudColor2["HUD_COLOUR_TENNIS"] = 130] = "HUD_COLOUR_TENNIS";
  HudColor2[HudColor2["HUD_COLOUR_GOLF"] = 131] = "HUD_COLOUR_GOLF";
  HudColor2[HudColor2["HUD_COLOUR_SHOOTING_RANGE"] = 132] = "HUD_COLOUR_SHOOTING_RANGE";
  HudColor2[HudColor2["HUD_COLOUR_FLIGHT_SCHOOL"] = 133] = "HUD_COLOUR_FLIGHT_SCHOOL";
  HudColor2[HudColor2["HUD_COLOUR_NORTH_BLUE"] = 134] = "HUD_COLOUR_NORTH_BLUE";
  HudColor2[HudColor2["HUD_COLOUR_SOCIAL_CLUB"] = 135] = "HUD_COLOUR_SOCIAL_CLUB";
  HudColor2[HudColor2["HUD_COLOUR_PLATFORM_BLUE"] = 136] = "HUD_COLOUR_PLATFORM_BLUE";
  HudColor2[HudColor2["HUD_COLOUR_PLATFORM_GREEN"] = 137] = "HUD_COLOUR_PLATFORM_GREEN";
  HudColor2[HudColor2["HUD_COLOUR_PLATFORM_GREY"] = 138] = "HUD_COLOUR_PLATFORM_GREY";
  HudColor2[HudColor2["HUD_COLOUR_FACEBOOK_BLUE"] = 139] = "HUD_COLOUR_FACEBOOK_BLUE";
  HudColor2[HudColor2["HUD_COLOUR_INGAME_BG"] = 140] = "HUD_COLOUR_INGAME_BG";
  HudColor2[HudColor2["HUD_COLOUR_DARTS"] = 141] = "HUD_COLOUR_DARTS";
  HudColor2[HudColor2["HUD_COLOUR_WAYPOINT"] = 142] = "HUD_COLOUR_WAYPOINT";
  HudColor2[HudColor2["HUD_COLOUR_MICHAEL"] = 143] = "HUD_COLOUR_MICHAEL";
  HudColor2[HudColor2["HUD_COLOUR_FRANKLIN"] = 144] = "HUD_COLOUR_FRANKLIN";
  HudColor2[HudColor2["HUD_COLOUR_TREVOR"] = 145] = "HUD_COLOUR_TREVOR";
  HudColor2[HudColor2["HUD_COLOUR_GOLF_P1"] = 146] = "HUD_COLOUR_GOLF_P1";
  HudColor2[HudColor2["HUD_COLOUR_GOLF_P2"] = 147] = "HUD_COLOUR_GOLF_P2";
  HudColor2[HudColor2["HUD_COLOUR_GOLF_P3"] = 148] = "HUD_COLOUR_GOLF_P3";
  HudColor2[HudColor2["HUD_COLOUR_GOLF_P4"] = 149] = "HUD_COLOUR_GOLF_P4";
  HudColor2[HudColor2["HUD_COLOUR_WAYPOINTLIGHT"] = 150] = "HUD_COLOUR_WAYPOINTLIGHT";
  HudColor2[HudColor2["HUD_COLOUR_WAYPOINTDARK"] = 151] = "HUD_COLOUR_WAYPOINTDARK";
  HudColor2[HudColor2["HUD_COLOUR_PANEL_LIGHT"] = 152] = "HUD_COLOUR_PANEL_LIGHT";
  HudColor2[HudColor2["HUD_COLOUR_MICHAEL_DARK"] = 153] = "HUD_COLOUR_MICHAEL_DARK";
  HudColor2[HudColor2["HUD_COLOUR_FRANKLIN_DARK"] = 154] = "HUD_COLOUR_FRANKLIN_DARK";
  HudColor2[HudColor2["HUD_COLOUR_TREVOR_DARK"] = 155] = "HUD_COLOUR_TREVOR_DARK";
  HudColor2[HudColor2["HUD_COLOUR_OBJECTIVE_ROUTE"] = 156] = "HUD_COLOUR_OBJECTIVE_ROUTE";
  HudColor2[HudColor2["HUD_COLOUR_PAUSEMAP_TINT"] = 157] = "HUD_COLOUR_PAUSEMAP_TINT";
  HudColor2[HudColor2["HUD_COLOUR_PAUSE_DESELECT"] = 158] = "HUD_COLOUR_PAUSE_DESELECT";
  HudColor2[HudColor2["HUD_COLOUR_PM_WEAPONS_PURCHASABLE"] = 159] = "HUD_COLOUR_PM_WEAPONS_PURCHASABLE";
  HudColor2[HudColor2["HUD_COLOUR_PM_WEAPONS_LOCKED"] = 160] = "HUD_COLOUR_PM_WEAPONS_LOCKED";
  HudColor2[HudColor2["HUD_COLOUR_END_SCREEN_BG"] = 161] = "HUD_COLOUR_END_SCREEN_BG";
  HudColor2[HudColor2["HUD_COLOUR_CHOP"] = 162] = "HUD_COLOUR_CHOP";
  HudColor2[HudColor2["HUD_COLOUR_PAUSEMAP_TINT_HALF"] = 163] = "HUD_COLOUR_PAUSEMAP_TINT_HALF";
  HudColor2[HudColor2["HUD_COLOUR_NORTH_BLUE_OFFICIAL"] = 164] = "HUD_COLOUR_NORTH_BLUE_OFFICIAL";
  HudColor2[HudColor2["HUD_COLOUR_SCRIPT_VARIABLE_2"] = 165] = "HUD_COLOUR_SCRIPT_VARIABLE_2";
  HudColor2[HudColor2["HUD_COLOUR_H"] = 166] = "HUD_COLOUR_H";
  HudColor2[HudColor2["HUD_COLOUR_HDARK"] = 167] = "HUD_COLOUR_HDARK";
  HudColor2[HudColor2["HUD_COLOUR_T"] = 168] = "HUD_COLOUR_T";
  HudColor2[HudColor2["HUD_COLOUR_TDARK"] = 169] = "HUD_COLOUR_TDARK";
  HudColor2[HudColor2["HUD_COLOUR_HSHARD"] = 170] = "HUD_COLOUR_HSHARD";
  HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_MICHAEL"] = 171] = "HUD_COLOUR_CONTROLLER_MICHAEL";
  HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_FRANKLIN"] = 172] = "HUD_COLOUR_CONTROLLER_FRANKLIN";
  HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_TREVOR"] = 173] = "HUD_COLOUR_CONTROLLER_TREVOR";
  HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_CHOP"] = 174] = "HUD_COLOUR_CONTROLLER_CHOP";
  HudColor2[HudColor2["HUD_COLOUR_VIDEO_EDITOR_VIDEO"] = 175] = "HUD_COLOUR_VIDEO_EDITOR_VIDEO";
  HudColor2[HudColor2["HUD_COLOUR_VIDEO_EDITOR_AUDIO"] = 176] = "HUD_COLOUR_VIDEO_EDITOR_AUDIO";
  HudColor2[HudColor2["HUD_COLOUR_VIDEO_EDITOR_TEXT"] = 177] = "HUD_COLOUR_VIDEO_EDITOR_TEXT";
  HudColor2[HudColor2["HUD_COLOUR_HB_BLUE"] = 178] = "HUD_COLOUR_HB_BLUE";
  HudColor2[HudColor2["HUD_COLOUR_HB_YELLOW"] = 179] = "HUD_COLOUR_HB_YELLOW";
  return HudColor2;
})(HudColor || {});

// src/fivem/enums/HudComponent.ts
var HudComponent = /* @__PURE__ */ ((HudComponent2) => {
  HudComponent2[HudComponent2["WantedStars"] = 1] = "WantedStars";
  HudComponent2[HudComponent2["WeaponIcon"] = 2] = "WeaponIcon";
  HudComponent2[HudComponent2["Cash"] = 3] = "Cash";
  HudComponent2[HudComponent2["MpCash"] = 4] = "MpCash";
  HudComponent2[HudComponent2["MpMessage"] = 5] = "MpMessage";
  HudComponent2[HudComponent2["VehicleName"] = 6] = "VehicleName";
  HudComponent2[HudComponent2["AreaName"] = 7] = "AreaName";
  HudComponent2[HudComponent2["Unused"] = 8] = "Unused";
  HudComponent2[HudComponent2["StreetName"] = 9] = "StreetName";
  HudComponent2[HudComponent2["HelpText"] = 10] = "HelpText";
  HudComponent2[HudComponent2["FloatingHelpText1"] = 11] = "FloatingHelpText1";
  HudComponent2[HudComponent2["FloatingHelpText2"] = 12] = "FloatingHelpText2";
  HudComponent2[HudComponent2["CashChange"] = 13] = "CashChange";
  HudComponent2[HudComponent2["Reticle"] = 14] = "Reticle";
  HudComponent2[HudComponent2["SubtitleText"] = 15] = "SubtitleText";
  HudComponent2[HudComponent2["RadioStationsWheel"] = 16] = "RadioStationsWheel";
  HudComponent2[HudComponent2["Saving"] = 17] = "Saving";
  HudComponent2[HudComponent2["GamingStreamUnusde"] = 18] = "GamingStreamUnusde";
  HudComponent2[HudComponent2["WeaponWheel"] = 19] = "WeaponWheel";
  HudComponent2[HudComponent2["WeaponWheelStats"] = 20] = "WeaponWheelStats";
  HudComponent2[HudComponent2["DrugsPurse01"] = 21] = "DrugsPurse01";
  HudComponent2[HudComponent2["DrugsPurse02"] = 22] = "DrugsPurse02";
  HudComponent2[HudComponent2["DrugsPurse03"] = 23] = "DrugsPurse03";
  HudComponent2[HudComponent2["DrugsPurse04"] = 24] = "DrugsPurse04";
  HudComponent2[HudComponent2["MpTagCashFromBank"] = 25] = "MpTagCashFromBank";
  HudComponent2[HudComponent2["MpTagPackages"] = 26] = "MpTagPackages";
  HudComponent2[HudComponent2["MpTagCuffKeys"] = 27] = "MpTagCuffKeys";
  HudComponent2[HudComponent2["MpTagDownloadData"] = 28] = "MpTagDownloadData";
  HudComponent2[HudComponent2["MpTagIfPedFollowing"] = 29] = "MpTagIfPedFollowing";
  HudComponent2[HudComponent2["MpTagKeyCard"] = 30] = "MpTagKeyCard";
  HudComponent2[HudComponent2["MpTagRandomObject"] = 31] = "MpTagRandomObject";
  HudComponent2[HudComponent2["MpTagRemoteControl"] = 32] = "MpTagRemoteControl";
  HudComponent2[HudComponent2["MpTagCashFromSafe"] = 33] = "MpTagCashFromSafe";
  HudComponent2[HudComponent2["MpTagWeaponsPackage"] = 34] = "MpTagWeaponsPackage";
  HudComponent2[HudComponent2["MpTagKeys"] = 35] = "MpTagKeys";
  HudComponent2[HudComponent2["MpVehicle"] = 36] = "MpVehicle";
  HudComponent2[HudComponent2["MpVehicleHeli"] = 37] = "MpVehicleHeli";
  HudComponent2[HudComponent2["MpVehiclePlane"] = 38] = "MpVehiclePlane";
  HudComponent2[HudComponent2["PlayerSwitchAlert"] = 39] = "PlayerSwitchAlert";
  HudComponent2[HudComponent2["MpRankBar"] = 40] = "MpRankBar";
  HudComponent2[HudComponent2["DirectorMode"] = 41] = "DirectorMode";
  HudComponent2[HudComponent2["ReplayController"] = 42] = "ReplayController";
  HudComponent2[HudComponent2["ReplayMouse"] = 43] = "ReplayMouse";
  HudComponent2[HudComponent2["ReplayHeader"] = 44] = "ReplayHeader";
  HudComponent2[HudComponent2["ReplayOptions"] = 45] = "ReplayOptions";
  HudComponent2[HudComponent2["ReplayHelpText"] = 46] = "ReplayHelpText";
  HudComponent2[HudComponent2["ReplayMiscText"] = 47] = "ReplayMiscText";
  HudComponent2[HudComponent2["ReplayTopLine"] = 48] = "ReplayTopLine";
  HudComponent2[HudComponent2["ReplayBottomLine"] = 49] = "ReplayBottomLine";
  HudComponent2[HudComponent2["ReplayLeftBar"] = 50] = "ReplayLeftBar";
  HudComponent2[HudComponent2["ReplayTimer"] = 51] = "ReplayTimer";
  return HudComponent2;
})(HudComponent || {});

// src/fivem/enums/InputMode.ts
var InputMode = /* @__PURE__ */ ((InputMode2) => {
  InputMode2[InputMode2["MouseAndKeyboard"] = 0] = "MouseAndKeyboard";
  InputMode2[InputMode2["GamePad"] = 2] = "GamePad";
  return InputMode2;
})(InputMode || {});

// src/fivem/enums/RaycastEnums.ts
var IntersectFlags = /* @__PURE__ */ ((IntersectFlags2) => {
  IntersectFlags2[IntersectFlags2["None"] = 0] = "None";
  IntersectFlags2[IntersectFlags2["World"] = 1] = "World";
  IntersectFlags2[IntersectFlags2["Vehicles"] = 2] = "Vehicles";
  IntersectFlags2[IntersectFlags2["Ped"] = 4] = "Ped";
  IntersectFlags2[IntersectFlags2["Ragdoll"] = 8] = "Ragdoll";
  IntersectFlags2[IntersectFlags2["Object"] = 16] = "Object";
  IntersectFlags2[IntersectFlags2["Pickup"] = 32] = "Pickup";
  IntersectFlags2[IntersectFlags2["River"] = 128] = "River";
  IntersectFlags2[IntersectFlags2["Foliage"] = 256] = "Foliage";
  IntersectFlags2[IntersectFlags2["All"] = 511] = "All";
  return IntersectFlags2;
})(IntersectFlags || {});
var ShapeTestOptions = /* @__PURE__ */ ((ShapeTestOptions2) => {
  ShapeTestOptions2[ShapeTestOptions2["None"] = 0] = "None";
  ShapeTestOptions2[ShapeTestOptions2["IgnoreGlass"] = 1] = "IgnoreGlass";
  ShapeTestOptions2[ShapeTestOptions2["IgnoreSeeThrough"] = 2] = "IgnoreSeeThrough";
  ShapeTestOptions2[ShapeTestOptions2["IgnoreNoCollision"] = 4] = "IgnoreNoCollision";
  return ShapeTestOptions2;
})(ShapeTestOptions || {});
var SHAPE_TEST_DEFAULT = 1 /* IgnoreGlass */ | 2 /* IgnoreSeeThrough */ | 4 /* IgnoreNoCollision */;

// src/fivem/enums/InvertAxis.ts
var InvertAxisFlags = /* @__PURE__ */ ((InvertAxisFlags2) => {
  InvertAxisFlags2[InvertAxisFlags2["None"] = 0] = "None";
  InvertAxisFlags2[InvertAxisFlags2["X"] = 1] = "X";
  InvertAxisFlags2[InvertAxisFlags2["Y"] = 2] = "Y";
  InvertAxisFlags2[InvertAxisFlags2["Z"] = 4] = "Z";
  return InvertAxisFlags2;
})(InvertAxisFlags || {});

// src/fivem/enums/Language.ts
var Language = /* @__PURE__ */ ((Language2) => {
  Language2[Language2["American"] = 0] = "American";
  Language2[Language2["French"] = 1] = "French";
  Language2[Language2["German"] = 2] = "German";
  Language2[Language2["Italian"] = 3] = "Italian";
  Language2[Language2["Spanish"] = 4] = "Spanish";
  Language2[Language2["Portuguese"] = 5] = "Portuguese";
  Language2[Language2["Polish"] = 6] = "Polish";
  Language2[Language2["Russian"] = 7] = "Russian";
  Language2[Language2["Korean"] = 8] = "Korean";
  Language2[Language2["Chinese"] = 9] = "Chinese";
  Language2[Language2["Japanese"] = 10] = "Japanese";
  Language2[Language2["Mexican"] = 11] = "Mexican";
  return Language2;
})(Language || {});

// src/fivem/enums/LeaveVehicleFlags.ts
var LeaveVehicleFlags = /* @__PURE__ */ ((LeaveVehicleFlags2) => {
  LeaveVehicleFlags2[LeaveVehicleFlags2["None"] = 0] = "None";
  LeaveVehicleFlags2[LeaveVehicleFlags2["Normal"] = 1] = "Normal";
  LeaveVehicleFlags2[LeaveVehicleFlags2["WarpOut"] = 16] = "WarpOut";
  LeaveVehicleFlags2[LeaveVehicleFlags2["SlowerNone"] = 64] = "SlowerNone";
  LeaveVehicleFlags2[LeaveVehicleFlags2["LeaveDoorOpen"] = 256] = "LeaveDoorOpen";
  LeaveVehicleFlags2[LeaveVehicleFlags2["BailOut"] = 4096] = "BailOut";
  LeaveVehicleFlags2[LeaveVehicleFlags2["BailOut2"] = 4160] = "BailOut2";
  LeaveVehicleFlags2[LeaveVehicleFlags2["PassengerSeatNormal"] = 262144] = "PassengerSeatNormal";
  return LeaveVehicleFlags2;
})(LeaveVehicleFlags || {});

// src/fivem/enums/LoadingSpinnerType.ts
var LoadingSpinnerType = /* @__PURE__ */ ((LoadingSpinnerType2) => {
  LoadingSpinnerType2[LoadingSpinnerType2["Clockwise1"] = 1] = "Clockwise1";
  LoadingSpinnerType2[LoadingSpinnerType2["Clockwise2"] = 2] = "Clockwise2";
  LoadingSpinnerType2[LoadingSpinnerType2["Clockwise3"] = 3] = "Clockwise3";
  LoadingSpinnerType2[LoadingSpinnerType2["SocialClubSaving"] = 4] = "SocialClubSaving";
  LoadingSpinnerType2[LoadingSpinnerType2["RegularClockwise"] = 5] = "RegularClockwise";
  return LoadingSpinnerType2;
})(LoadingSpinnerType || {});

// src/fivem/enums/MarkerType.ts
var MarkerType = /* @__PURE__ */ ((MarkerType2) => {
  MarkerType2[MarkerType2["UpsideDownCone"] = 0] = "UpsideDownCone";
  MarkerType2[MarkerType2["VerticalCylinder"] = 1] = "VerticalCylinder";
  MarkerType2[MarkerType2["ThickChevronUp"] = 2] = "ThickChevronUp";
  MarkerType2[MarkerType2["ThinChevronUp"] = 3] = "ThinChevronUp";
  MarkerType2[MarkerType2["CheckeredFlagRect"] = 4] = "CheckeredFlagRect";
  MarkerType2[MarkerType2["CheckeredFlagCircle"] = 5] = "CheckeredFlagCircle";
  MarkerType2[MarkerType2["VerticleCircle"] = 6] = "VerticleCircle";
  MarkerType2[MarkerType2["PlaneModel"] = 7] = "PlaneModel";
  MarkerType2[MarkerType2["LostMCDark"] = 8] = "LostMCDark";
  MarkerType2[MarkerType2["LostMCLight"] = 9] = "LostMCLight";
  MarkerType2[MarkerType2["Number0"] = 10] = "Number0";
  MarkerType2[MarkerType2["Number1"] = 11] = "Number1";
  MarkerType2[MarkerType2["Number2"] = 12] = "Number2";
  MarkerType2[MarkerType2["Number3"] = 13] = "Number3";
  MarkerType2[MarkerType2["Number4"] = 14] = "Number4";
  MarkerType2[MarkerType2["Number5"] = 15] = "Number5";
  MarkerType2[MarkerType2["Number6"] = 16] = "Number6";
  MarkerType2[MarkerType2["Number7"] = 17] = "Number7";
  MarkerType2[MarkerType2["Number8"] = 18] = "Number8";
  MarkerType2[MarkerType2["Number9"] = 19] = "Number9";
  MarkerType2[MarkerType2["ChevronUpx1"] = 20] = "ChevronUpx1";
  MarkerType2[MarkerType2["ChevronUpx2"] = 21] = "ChevronUpx2";
  MarkerType2[MarkerType2["ChevronUpx3"] = 22] = "ChevronUpx3";
  MarkerType2[MarkerType2["HorizontalCircleFat"] = 23] = "HorizontalCircleFat";
  MarkerType2[MarkerType2["ReplayIcon"] = 24] = "ReplayIcon";
  MarkerType2[MarkerType2["HorizontalCircleSkinny"] = 25] = "HorizontalCircleSkinny";
  MarkerType2[MarkerType2["HorizontalCircleSkinnyArrow"] = 26] = "HorizontalCircleSkinnyArrow";
  MarkerType2[MarkerType2["HorizontalSplitArrowCircle"] = 27] = "HorizontalSplitArrowCircle";
  MarkerType2[MarkerType2["DebugSphere"] = 28] = "DebugSphere";
  MarkerType2[MarkerType2["DollarSign"] = 29] = "DollarSign";
  MarkerType2[MarkerType2["HorizontalBars"] = 30] = "HorizontalBars";
  MarkerType2[MarkerType2["WolfHead"] = 31] = "WolfHead";
  MarkerType2[MarkerType2["QuestionMark"] = 32] = "QuestionMark";
  MarkerType2[MarkerType2["PlaneSymbol"] = 33] = "PlaneSymbol";
  MarkerType2[MarkerType2["HelicopterSymbol"] = 34] = "HelicopterSymbol";
  MarkerType2[MarkerType2["BoatSymbol"] = 35] = "BoatSymbol";
  MarkerType2[MarkerType2["CarSymbol"] = 36] = "CarSymbol";
  MarkerType2[MarkerType2["MotorcycleSymbol"] = 37] = "MotorcycleSymbol";
  MarkerType2[MarkerType2["BikeSymbol"] = 38] = "BikeSymbol";
  MarkerType2[MarkerType2["TruckSymbol"] = 39] = "TruckSymbol";
  MarkerType2[MarkerType2["ParachuteSymbol"] = 40] = "ParachuteSymbol";
  MarkerType2[MarkerType2["SawbladeSymbol"] = 41] = "SawbladeSymbol";
  return MarkerType2;
})(MarkerType || {});

// src/fivem/enums/MenuAlignment.ts
var MenuAlignment = /* @__PURE__ */ ((MenuAlignment2) => {
  MenuAlignment2[MenuAlignment2["Left"] = 76] = "Left";
  MenuAlignment2[MenuAlignment2["Right"] = 82] = "Right";
  return MenuAlignment2;
})(MenuAlignment || {});

// src/fivem/enums/NotificationType.ts
var NotificationType = /* @__PURE__ */ ((NotificationType2) => {
  NotificationType2[NotificationType2["Default"] = 0] = "Default";
  NotificationType2[NotificationType2["Bubble"] = 1] = "Bubble";
  NotificationType2[NotificationType2["Mail"] = 2] = "Mail";
  NotificationType2[NotificationType2["FriendRequest"] = 3] = "FriendRequest";
  NotificationType2[NotificationType2["Default2"] = 4] = "Default2";
  NotificationType2[NotificationType2["Reply"] = 7] = "Reply";
  NotificationType2[NotificationType2["ReputationPoints"] = 8] = "ReputationPoints";
  NotificationType2[NotificationType2["Money"] = 9] = "Money";
  return NotificationType2;
})(NotificationType || {});

// src/fivem/enums/Parachute.ts
var ParachuteLandingType = /* @__PURE__ */ ((ParachuteLandingType2) => {
  ParachuteLandingType2[ParachuteLandingType2["None"] = -1] = "None";
  ParachuteLandingType2[ParachuteLandingType2["Stumbling"] = 1] = "Stumbling";
  ParachuteLandingType2[ParachuteLandingType2["Rolling"] = 2] = "Rolling";
  ParachuteLandingType2[ParachuteLandingType2["Ragdoll"] = 3] = "Ragdoll";
  return ParachuteLandingType2;
})(ParachuteLandingType || {});
var ParachuteState = /* @__PURE__ */ ((ParachuteState2) => {
  ParachuteState2[ParachuteState2["None"] = -1] = "None";
  ParachuteState2[ParachuteState2["FreeFalling"] = 0] = "FreeFalling";
  ParachuteState2[ParachuteState2["Deploying"] = 1] = "Deploying";
  ParachuteState2[ParachuteState2["Gliding"] = 2] = "Gliding";
  ParachuteState2[ParachuteState2["LandingOrFallingToDoom"] = 3] = "LandingOrFallingToDoom";
  return ParachuteState2;
})(ParachuteState || {});

// src/fivem/enums/RadioStation.ts
var RadioStation = /* @__PURE__ */ ((RadioStation2) => {
  RadioStation2["LosSantosRockRadio"] = "RADIO_01_CLASS_ROCK";
  RadioStation2["NonStopPopFM"] = "RADIO_02_POP";
  RadioStation2["RadioLosSantos"] = "RADIO_03_HIPHOP_NEW";
  RadioStation2["ChannelX"] = "RADIO_04_PUNK";
  RadioStation2["WestCoastTalkRadio"] = "RADIO_05_TALK_01";
  RadioStation2["RebelRadio"] = "RADIO_06_COUNTRY";
  RadioStation2["SoulwaxFM"] = "RADIO_07_DANCE_01";
  RadioStation2["EastLosFM"] = "RADIO_08_MEXICAN";
  RadioStation2["WestCoastClassics"] = "RADIO_09_HIPHOP_OLD";
  RadioStation2["BlaineCountyRadio"] = "RADIO_11_TALK_02";
  RadioStation2["TheBlueArk"] = "RADIO_12_REGGAE";
  RadioStation2["WorldWideFM"] = "RADIO_13_JAZZ";
  RadioStation2["FlyloFM"] = "RADIO_14_DANCE_02";
  RadioStation2["TheLowdown"] = "RADIO_15_MOTOWN";
  RadioStation2["RadioMirrorPark"] = "RADIO_16_SILVERLAKE";
  RadioStation2["Space"] = "RADIO_17_FUNK";
  RadioStation2["VinewoodBoulevardRadio"] = "RADIO_18_90S_ROCK";
  RadioStation2["SelfRadio"] = "RADIO_19_USER";
  RadioStation2["TheLab"] = "RADIO_20_THELAB";
  RadioStation2["BlondedLosSantos"] = "RADIO_21_DLC_XM17";
  RadioStation2["LosSantosUndergroundRadio"] = "RADIO_22_DLC_BATTLE_MIX1_RADIO";
  RadioStation2["RadioOff"] = "OFF";
  return RadioStation2;
})(RadioStation || {});

// src/fivem/enums/RagdollType.ts
var RagdollType = /* @__PURE__ */ ((RagdollType2) => {
  RagdollType2[RagdollType2["Normal"] = 0] = "Normal";
  RagdollType2[RagdollType2["StiffLegs"] = 1] = "StiffLegs";
  RagdollType2[RagdollType2["NarrowLegs"] = 2] = "NarrowLegs";
  RagdollType2[RagdollType2["WideLegs"] = 3] = "WideLegs";
  return RagdollType2;
})(RagdollType || {});

// src/fivem/enums/Relationship.ts
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

// src/fivem/enums/RopeType.ts
var RopeType = /* @__PURE__ */ ((RopeType2) => {
  RopeType2[RopeType2["ThickRope"] = 1] = "ThickRope";
  RopeType2[RopeType2["ThickRope2"] = 4] = "ThickRope2";
  RopeType2[RopeType2["ThinMetalWire"] = 5] = "ThinMetalWire";
  return RopeType2;
})(RopeType || {});

// src/fivem/enums/ScreenEffect.ts
var ScreenEffect = /* @__PURE__ */ ((ScreenEffect2) => {
  ScreenEffect2[ScreenEffect2["SwitchHudIn"] = 0] = "SwitchHudIn";
  ScreenEffect2[ScreenEffect2["SwitchHudOut"] = 1] = "SwitchHudOut";
  ScreenEffect2[ScreenEffect2["FocusIn"] = 2] = "FocusIn";
  ScreenEffect2[ScreenEffect2["FocusOut"] = 3] = "FocusOut";
  ScreenEffect2[ScreenEffect2["MinigameEndNeutral"] = 4] = "MinigameEndNeutral";
  ScreenEffect2[ScreenEffect2["MinigameEndTrevor"] = 5] = "MinigameEndTrevor";
  ScreenEffect2[ScreenEffect2["MinigameEndFranklin"] = 6] = "MinigameEndFranklin";
  ScreenEffect2[ScreenEffect2["MinigameEndMichael"] = 7] = "MinigameEndMichael";
  ScreenEffect2[ScreenEffect2["MinigameTransitionOut"] = 8] = "MinigameTransitionOut";
  ScreenEffect2[ScreenEffect2["MinigameTransitionIn"] = 9] = "MinigameTransitionIn";
  ScreenEffect2[ScreenEffect2["SwitchShortNeutralIn"] = 10] = "SwitchShortNeutralIn";
  ScreenEffect2[ScreenEffect2["SwitchShortFranklinIn"] = 11] = "SwitchShortFranklinIn";
  ScreenEffect2[ScreenEffect2["SwitchShortTrevorIn"] = 12] = "SwitchShortTrevorIn";
  ScreenEffect2[ScreenEffect2["SwitchShortMichaelIn"] = 13] = "SwitchShortMichaelIn";
  ScreenEffect2[ScreenEffect2["SwitchOpenMichaelIn"] = 14] = "SwitchOpenMichaelIn";
  ScreenEffect2[ScreenEffect2["SwitchOpenFranklinIn"] = 15] = "SwitchOpenFranklinIn";
  ScreenEffect2[ScreenEffect2["SwitchOpenTrevorIn"] = 16] = "SwitchOpenTrevorIn";
  ScreenEffect2[ScreenEffect2["SwitchHudMichaelOut"] = 17] = "SwitchHudMichaelOut";
  ScreenEffect2[ScreenEffect2["SwitchHudFranklinOut"] = 18] = "SwitchHudFranklinOut";
  ScreenEffect2[ScreenEffect2["SwitchHudTrevorOut"] = 19] = "SwitchHudTrevorOut";
  ScreenEffect2[ScreenEffect2["SwitchShortFranklinMid"] = 20] = "SwitchShortFranklinMid";
  ScreenEffect2[ScreenEffect2["SwitchShortMichaelMid"] = 21] = "SwitchShortMichaelMid";
  ScreenEffect2[ScreenEffect2["SwitchShortTrevorMid"] = 22] = "SwitchShortTrevorMid";
  ScreenEffect2[ScreenEffect2["DeathFailOut"] = 23] = "DeathFailOut";
  ScreenEffect2[ScreenEffect2["CamPushInNeutral"] = 24] = "CamPushInNeutral";
  ScreenEffect2[ScreenEffect2["CamPushInFranklin"] = 25] = "CamPushInFranklin";
  ScreenEffect2[ScreenEffect2["CamPushInMichael"] = 26] = "CamPushInMichael";
  ScreenEffect2[ScreenEffect2["CamPushInTrevor"] = 27] = "CamPushInTrevor";
  ScreenEffect2[ScreenEffect2["SwitchSceneFranklin"] = 28] = "SwitchSceneFranklin";
  ScreenEffect2[ScreenEffect2["SwitchSceneTrevor"] = 29] = "SwitchSceneTrevor";
  ScreenEffect2[ScreenEffect2["SwitchSceneMichael"] = 30] = "SwitchSceneMichael";
  ScreenEffect2[ScreenEffect2["SwitchSceneNeutral"] = 31] = "SwitchSceneNeutral";
  ScreenEffect2[ScreenEffect2["MpCelebWin"] = 32] = "MpCelebWin";
  ScreenEffect2[ScreenEffect2["MpCelebWinOut"] = 33] = "MpCelebWinOut";
  ScreenEffect2[ScreenEffect2["MpCelebLose"] = 34] = "MpCelebLose";
  ScreenEffect2[ScreenEffect2["MpCelebLoseOut"] = 35] = "MpCelebLoseOut";
  ScreenEffect2[ScreenEffect2["DeathFailNeutralIn"] = 36] = "DeathFailNeutralIn";
  ScreenEffect2[ScreenEffect2["DeathFailMpDark"] = 37] = "DeathFailMpDark";
  ScreenEffect2[ScreenEffect2["DeathFailMpIn"] = 38] = "DeathFailMpIn";
  ScreenEffect2[ScreenEffect2["MpCelebPreloadFade"] = 39] = "MpCelebPreloadFade";
  ScreenEffect2[ScreenEffect2["PeyoteEndOut"] = 40] = "PeyoteEndOut";
  ScreenEffect2[ScreenEffect2["PeyoteEndIn"] = 41] = "PeyoteEndIn";
  ScreenEffect2[ScreenEffect2["PeyoteIn"] = 42] = "PeyoteIn";
  ScreenEffect2[ScreenEffect2["PeyoteOut"] = 43] = "PeyoteOut";
  ScreenEffect2[ScreenEffect2["MpRaceCrash"] = 44] = "MpRaceCrash";
  ScreenEffect2[ScreenEffect2["SuccessFranklin"] = 45] = "SuccessFranklin";
  ScreenEffect2[ScreenEffect2["SuccessTrevor"] = 46] = "SuccessTrevor";
  ScreenEffect2[ScreenEffect2["SuccessMichael"] = 47] = "SuccessMichael";
  ScreenEffect2[ScreenEffect2["DrugsMichaelAliensFightIn"] = 48] = "DrugsMichaelAliensFightIn";
  ScreenEffect2[ScreenEffect2["DrugsMichaelAliensFight"] = 49] = "DrugsMichaelAliensFight";
  ScreenEffect2[ScreenEffect2["DrugsMichaelAliensFightOut"] = 50] = "DrugsMichaelAliensFightOut";
  ScreenEffect2[ScreenEffect2["DrugsTrevorClownsFightIn"] = 51] = "DrugsTrevorClownsFightIn";
  ScreenEffect2[ScreenEffect2["DrugsTrevorClownsFight"] = 52] = "DrugsTrevorClownsFight";
  ScreenEffect2[ScreenEffect2["DrugsTrevorClownsFightOut"] = 53] = "DrugsTrevorClownsFightOut";
  ScreenEffect2[ScreenEffect2["HeistCelebPass"] = 54] = "HeistCelebPass";
  ScreenEffect2[ScreenEffect2["HeistCelebPassBw"] = 55] = "HeistCelebPassBw";
  ScreenEffect2[ScreenEffect2["HeistCelebEnd"] = 56] = "HeistCelebEnd";
  ScreenEffect2[ScreenEffect2["HeistCelebToast"] = 57] = "HeistCelebToast";
  ScreenEffect2[ScreenEffect2["MenuMgHeistIn"] = 58] = "MenuMgHeistIn";
  ScreenEffect2[ScreenEffect2["MenuMgTournamentIn"] = 59] = "MenuMgTournamentIn";
  ScreenEffect2[ScreenEffect2["MenuMgSelectionIn"] = 60] = "MenuMgSelectionIn";
  ScreenEffect2[ScreenEffect2["ChopVision"] = 61] = "ChopVision";
  ScreenEffect2[ScreenEffect2["DmtFlightIntro"] = 62] = "DmtFlightIntro";
  ScreenEffect2[ScreenEffect2["DmtFlight"] = 63] = "DmtFlight";
  ScreenEffect2[ScreenEffect2["DrugsDrivingIn"] = 64] = "DrugsDrivingIn";
  ScreenEffect2[ScreenEffect2["DrugsDrivingOut"] = 65] = "DrugsDrivingOut";
  ScreenEffect2[ScreenEffect2["SwitchOpenNeutralFib5"] = 66] = "SwitchOpenNeutralFib5";
  ScreenEffect2[ScreenEffect2["HeistLocate"] = 67] = "HeistLocate";
  ScreenEffect2[ScreenEffect2["MpJobLoad"] = 68] = "MpJobLoad";
  ScreenEffect2[ScreenEffect2["RaceTurbo"] = 69] = "RaceTurbo";
  ScreenEffect2[ScreenEffect2["MpIntroLogo"] = 70] = "MpIntroLogo";
  ScreenEffect2[ScreenEffect2["HeistTripSkipFade"] = 71] = "HeistTripSkipFade";
  ScreenEffect2[ScreenEffect2["MenuMgHeistOut"] = 72] = "MenuMgHeistOut";
  ScreenEffect2[ScreenEffect2["MpCoronaSwitch"] = 73] = "MpCoronaSwitch";
  ScreenEffect2[ScreenEffect2["MenuMgSelectionTint"] = 74] = "MenuMgSelectionTint";
  ScreenEffect2[ScreenEffect2["SuccessNeutral"] = 75] = "SuccessNeutral";
  ScreenEffect2[ScreenEffect2["ExplosionJosh3"] = 76] = "ExplosionJosh3";
  ScreenEffect2[ScreenEffect2["SniperOverlay"] = 77] = "SniperOverlay";
  ScreenEffect2[ScreenEffect2["RampageOut"] = 78] = "RampageOut";
  ScreenEffect2[ScreenEffect2["Rampage"] = 79] = "Rampage";
  ScreenEffect2[ScreenEffect2["DontTazemeBro"] = 80] = "DontTazemeBro";
  return ScreenEffect2;
})(ScreenEffect || {});

// src/fivem/enums/SpeechModifier.ts
var SpeechModifier = /* @__PURE__ */ ((SpeechModifier2) => {
  SpeechModifier2[SpeechModifier2["Standard"] = 0] = "Standard";
  SpeechModifier2[SpeechModifier2["AllowRepeat"] = 1] = "AllowRepeat";
  SpeechModifier2[SpeechModifier2["Beat"] = 2] = "Beat";
  SpeechModifier2[SpeechModifier2["Force"] = 3] = "Force";
  SpeechModifier2[SpeechModifier2["ForceFrontend"] = 4] = "ForceFrontend";
  SpeechModifier2[SpeechModifier2["ForceNoRepeatFrontend"] = 5] = "ForceNoRepeatFrontend";
  SpeechModifier2[SpeechModifier2["ForceNormal"] = 6] = "ForceNormal";
  SpeechModifier2[SpeechModifier2["ForceNormalClear"] = 7] = "ForceNormalClear";
  SpeechModifier2[SpeechModifier2["ForceNormalCritical"] = 8] = "ForceNormalCritical";
  SpeechModifier2[SpeechModifier2["ForceShouted"] = 9] = "ForceShouted";
  SpeechModifier2[SpeechModifier2["ForceShoutedClear"] = 10] = "ForceShoutedClear";
  SpeechModifier2[SpeechModifier2["ForceShoutedCritical"] = 11] = "ForceShoutedCritical";
  SpeechModifier2[SpeechModifier2["ForcePreloadOnly"] = 12] = "ForcePreloadOnly";
  SpeechModifier2[SpeechModifier2["Megaphone"] = 13] = "Megaphone";
  SpeechModifier2[SpeechModifier2["Helicopter"] = 14] = "Helicopter";
  SpeechModifier2[SpeechModifier2["ForceMegaphone"] = 15] = "ForceMegaphone";
  SpeechModifier2[SpeechModifier2["ForceHelicopter"] = 16] = "ForceHelicopter";
  SpeechModifier2[SpeechModifier2["Interrupt"] = 17] = "Interrupt";
  SpeechModifier2[SpeechModifier2["InterruptShouted"] = 18] = "InterruptShouted";
  SpeechModifier2[SpeechModifier2["InterruptShoutedClear"] = 19] = "InterruptShoutedClear";
  SpeechModifier2[SpeechModifier2["InterruptShoutedCritical"] = 20] = "InterruptShoutedCritical";
  SpeechModifier2[SpeechModifier2["InterruptNoForce"] = 21] = "InterruptNoForce";
  SpeechModifier2[SpeechModifier2["InterruptFrontend"] = 22] = "InterruptFrontend";
  SpeechModifier2[SpeechModifier2["InterruptNoForceFrontend"] = 23] = "InterruptNoForceFrontend";
  SpeechModifier2[SpeechModifier2["AddBlip"] = 24] = "AddBlip";
  SpeechModifier2[SpeechModifier2["AddBlipAllowRepeat"] = 25] = "AddBlipAllowRepeat";
  SpeechModifier2[SpeechModifier2["AddBlipForce"] = 26] = "AddBlipForce";
  SpeechModifier2[SpeechModifier2["AddBlipShouted"] = 27] = "AddBlipShouted";
  SpeechModifier2[SpeechModifier2["AddBlipShoutedForce"] = 28] = "AddBlipShoutedForce";
  SpeechModifier2[SpeechModifier2["AddBlipInterrupt"] = 29] = "AddBlipInterrupt";
  SpeechModifier2[SpeechModifier2["AddBlipInterruptForce"] = 30] = "AddBlipInterruptForce";
  SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShouted"] = 31] = "ForcePreloadOnlyShouted";
  SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShoutedClear"] = 32] = "ForcePreloadOnlyShoutedClear";
  SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShoutedCritical"] = 33] = "ForcePreloadOnlyShoutedCritical";
  SpeechModifier2[SpeechModifier2["Shouted"] = 34] = "Shouted";
  SpeechModifier2[SpeechModifier2["ShoutedClear"] = 35] = "ShoutedClear";
  SpeechModifier2[SpeechModifier2["ShoutedCritical"] = 36] = "ShoutedCritical";
  return SpeechModifier2;
})(SpeechModifier || {});

// src/fivem/enums/Vehicle.ts
var CargobobHook = /* @__PURE__ */ ((CargobobHook2) => {
  CargobobHook2[CargobobHook2["Hook"] = 0] = "Hook";
  CargobobHook2[CargobobHook2["Magnet"] = 1] = "Magnet";
  return CargobobHook2;
})(CargobobHook || {});
var LicensePlateStyle = /* @__PURE__ */ ((LicensePlateStyle2) => {
  LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite1"] = 3] = "BlueOnWhite1";
  LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite2"] = 0] = "BlueOnWhite2";
  LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite3"] = 4] = "BlueOnWhite3";
  LicensePlateStyle2[LicensePlateStyle2["YellowOnBlack"] = 1] = "YellowOnBlack";
  LicensePlateStyle2[LicensePlateStyle2["YellowOnBlue"] = 2] = "YellowOnBlue";
  LicensePlateStyle2[LicensePlateStyle2["NorthYankton"] = 5] = "NorthYankton";
  return LicensePlateStyle2;
})(LicensePlateStyle || {});
var LicensePlateType = /* @__PURE__ */ ((LicensePlateType2) => {
  LicensePlateType2[LicensePlateType2["FrontAndRearPlates"] = 0] = "FrontAndRearPlates";
  LicensePlateType2[LicensePlateType2["FrontPlate"] = 1] = "FrontPlate";
  LicensePlateType2[LicensePlateType2["RearPlate"] = 2] = "RearPlate";
  LicensePlateType2[LicensePlateType2["None"] = 3] = "None";
  return LicensePlateType2;
})(LicensePlateType || {});
var VehicleClass = /* @__PURE__ */ ((VehicleClass2) => {
  VehicleClass2[VehicleClass2["Compacts"] = 0] = "Compacts";
  VehicleClass2[VehicleClass2["Sedans"] = 1] = "Sedans";
  VehicleClass2[VehicleClass2["SUVs"] = 2] = "SUVs";
  VehicleClass2[VehicleClass2["Coupes"] = 3] = "Coupes";
  VehicleClass2[VehicleClass2["Muscle"] = 4] = "Muscle";
  VehicleClass2[VehicleClass2["SportsClassics"] = 5] = "SportsClassics";
  VehicleClass2[VehicleClass2["Sports"] = 6] = "Sports";
  VehicleClass2[VehicleClass2["Super"] = 7] = "Super";
  VehicleClass2[VehicleClass2["Motorcycles"] = 8] = "Motorcycles";
  VehicleClass2[VehicleClass2["OffRoad"] = 9] = "OffRoad";
  VehicleClass2[VehicleClass2["Industrial"] = 10] = "Industrial";
  VehicleClass2[VehicleClass2["Utility"] = 11] = "Utility";
  VehicleClass2[VehicleClass2["Vans"] = 12] = "Vans";
  VehicleClass2[VehicleClass2["Cycles"] = 13] = "Cycles";
  VehicleClass2[VehicleClass2["Boats"] = 14] = "Boats";
  VehicleClass2[VehicleClass2["Helicopters"] = 15] = "Helicopters";
  VehicleClass2[VehicleClass2["Planes"] = 16] = "Planes";
  VehicleClass2[VehicleClass2["Service"] = 17] = "Service";
  VehicleClass2[VehicleClass2["Emergency"] = 18] = "Emergency";
  VehicleClass2[VehicleClass2["Military"] = 19] = "Military";
  VehicleClass2[VehicleClass2["Commercial"] = 20] = "Commercial";
  VehicleClass2[VehicleClass2["Trains"] = 21] = "Trains";
  return VehicleClass2;
})(VehicleClass || {});
var VehicleColor = /* @__PURE__ */ ((VehicleColor2) => {
  VehicleColor2[VehicleColor2["MetallicBlack"] = 0] = "MetallicBlack";
  VehicleColor2[VehicleColor2["MetallicGraphiteBlack"] = 1] = "MetallicGraphiteBlack";
  VehicleColor2[VehicleColor2["MetallicBlackSteel"] = 2] = "MetallicBlackSteel";
  VehicleColor2[VehicleColor2["MetallicDarkSilver"] = 3] = "MetallicDarkSilver";
  VehicleColor2[VehicleColor2["MetallicSilver"] = 4] = "MetallicSilver";
  VehicleColor2[VehicleColor2["MetallicBlueSilver"] = 5] = "MetallicBlueSilver";
  VehicleColor2[VehicleColor2["MetallicSteelGray"] = 6] = "MetallicSteelGray";
  VehicleColor2[VehicleColor2["MetallicShadowSilver"] = 7] = "MetallicShadowSilver";
  VehicleColor2[VehicleColor2["MetallicStoneSilver"] = 8] = "MetallicStoneSilver";
  VehicleColor2[VehicleColor2["MetallicMidnightSilver"] = 9] = "MetallicMidnightSilver";
  VehicleColor2[VehicleColor2["MetallicGunMetal"] = 10] = "MetallicGunMetal";
  VehicleColor2[VehicleColor2["MetallicAnthraciteGray"] = 11] = "MetallicAnthraciteGray";
  VehicleColor2[VehicleColor2["MatteBlack"] = 12] = "MatteBlack";
  VehicleColor2[VehicleColor2["MatteGray"] = 13] = "MatteGray";
  VehicleColor2[VehicleColor2["MatteLightGray"] = 14] = "MatteLightGray";
  VehicleColor2[VehicleColor2["UtilBlack"] = 15] = "UtilBlack";
  VehicleColor2[VehicleColor2["UtilBlackPoly"] = 16] = "UtilBlackPoly";
  VehicleColor2[VehicleColor2["UtilDarksilver"] = 17] = "UtilDarksilver";
  VehicleColor2[VehicleColor2["UtilSilver"] = 18] = "UtilSilver";
  VehicleColor2[VehicleColor2["UtilGunMetal"] = 19] = "UtilGunMetal";
  VehicleColor2[VehicleColor2["UtilShadowSilver"] = 20] = "UtilShadowSilver";
  VehicleColor2[VehicleColor2["WornBlack"] = 21] = "WornBlack";
  VehicleColor2[VehicleColor2["WornGraphite"] = 22] = "WornGraphite";
  VehicleColor2[VehicleColor2["WornSilverGray"] = 23] = "WornSilverGray";
  VehicleColor2[VehicleColor2["WornSilver"] = 24] = "WornSilver";
  VehicleColor2[VehicleColor2["WornBlueSilver"] = 25] = "WornBlueSilver";
  VehicleColor2[VehicleColor2["WornShadowSilver"] = 26] = "WornShadowSilver";
  VehicleColor2[VehicleColor2["MetallicRed"] = 27] = "MetallicRed";
  VehicleColor2[VehicleColor2["MetallicTorinoRed"] = 28] = "MetallicTorinoRed";
  VehicleColor2[VehicleColor2["MetallicFormulaRed"] = 29] = "MetallicFormulaRed";
  VehicleColor2[VehicleColor2["MetallicBlazeRed"] = 30] = "MetallicBlazeRed";
  VehicleColor2[VehicleColor2["MetallicGracefulRed"] = 31] = "MetallicGracefulRed";
  VehicleColor2[VehicleColor2["MetallicGarnetRed"] = 32] = "MetallicGarnetRed";
  VehicleColor2[VehicleColor2["MetallicDesertRed"] = 33] = "MetallicDesertRed";
  VehicleColor2[VehicleColor2["MetallicCabernetRed"] = 34] = "MetallicCabernetRed";
  VehicleColor2[VehicleColor2["MetallicCandyRed"] = 35] = "MetallicCandyRed";
  VehicleColor2[VehicleColor2["MetallicSunriseOrange"] = 36] = "MetallicSunriseOrange";
  VehicleColor2[VehicleColor2["MetallicClassicGold"] = 37] = "MetallicClassicGold";
  VehicleColor2[VehicleColor2["MetallicOrange"] = 38] = "MetallicOrange";
  VehicleColor2[VehicleColor2["MatteRed"] = 39] = "MatteRed";
  VehicleColor2[VehicleColor2["MatteDarkRed"] = 40] = "MatteDarkRed";
  VehicleColor2[VehicleColor2["MatteOrange"] = 41] = "MatteOrange";
  VehicleColor2[VehicleColor2["MatteYellow"] = 42] = "MatteYellow";
  VehicleColor2[VehicleColor2["UtilRed"] = 43] = "UtilRed";
  VehicleColor2[VehicleColor2["UtilBrightRed"] = 44] = "UtilBrightRed";
  VehicleColor2[VehicleColor2["UtilGarnetRed"] = 45] = "UtilGarnetRed";
  VehicleColor2[VehicleColor2["WornRed"] = 46] = "WornRed";
  VehicleColor2[VehicleColor2["WornGoldenRed"] = 47] = "WornGoldenRed";
  VehicleColor2[VehicleColor2["WornDarkRed"] = 48] = "WornDarkRed";
  VehicleColor2[VehicleColor2["MetallicDarkGreen"] = 49] = "MetallicDarkGreen";
  VehicleColor2[VehicleColor2["MetallicRacingGreen"] = 50] = "MetallicRacingGreen";
  VehicleColor2[VehicleColor2["MetallicSeaGreen"] = 51] = "MetallicSeaGreen";
  VehicleColor2[VehicleColor2["MetallicOliveGreen"] = 52] = "MetallicOliveGreen";
  VehicleColor2[VehicleColor2["MetallicGreen"] = 53] = "MetallicGreen";
  VehicleColor2[VehicleColor2["MetallicGasolineBlueGreen"] = 54] = "MetallicGasolineBlueGreen";
  VehicleColor2[VehicleColor2["MatteLimeGreen"] = 55] = "MatteLimeGreen";
  VehicleColor2[VehicleColor2["UtilDarkGreen"] = 56] = "UtilDarkGreen";
  VehicleColor2[VehicleColor2["UtilGreen"] = 57] = "UtilGreen";
  VehicleColor2[VehicleColor2["WornDarkGreen"] = 58] = "WornDarkGreen";
  VehicleColor2[VehicleColor2["WornGreen"] = 59] = "WornGreen";
  VehicleColor2[VehicleColor2["WornSeaWash"] = 60] = "WornSeaWash";
  VehicleColor2[VehicleColor2["MetallicMidnightBlue"] = 61] = "MetallicMidnightBlue";
  VehicleColor2[VehicleColor2["MetallicDarkBlue"] = 62] = "MetallicDarkBlue";
  VehicleColor2[VehicleColor2["MetallicSaxonyBlue"] = 63] = "MetallicSaxonyBlue";
  VehicleColor2[VehicleColor2["MetallicBlue"] = 64] = "MetallicBlue";
  VehicleColor2[VehicleColor2["MetallicMarinerBlue"] = 65] = "MetallicMarinerBlue";
  VehicleColor2[VehicleColor2["MetallicHarborBlue"] = 66] = "MetallicHarborBlue";
  VehicleColor2[VehicleColor2["MetallicDiamondBlue"] = 67] = "MetallicDiamondBlue";
  VehicleColor2[VehicleColor2["MetallicSurfBlue"] = 68] = "MetallicSurfBlue";
  VehicleColor2[VehicleColor2["MetallicNauticalBlue"] = 69] = "MetallicNauticalBlue";
  VehicleColor2[VehicleColor2["MetallicBrightBlue"] = 70] = "MetallicBrightBlue";
  VehicleColor2[VehicleColor2["MetallicPurpleBlue"] = 71] = "MetallicPurpleBlue";
  VehicleColor2[VehicleColor2["MetallicSpinnakerBlue"] = 72] = "MetallicSpinnakerBlue";
  VehicleColor2[VehicleColor2["MetallicUltraBlue"] = 73] = "MetallicUltraBlue";
  VehicleColor2[VehicleColor2["UtilDarkBlue"] = 75] = "UtilDarkBlue";
  VehicleColor2[VehicleColor2["UtilMidnightBlue"] = 76] = "UtilMidnightBlue";
  VehicleColor2[VehicleColor2["UtilBlue"] = 77] = "UtilBlue";
  VehicleColor2[VehicleColor2["UtilSeaFoamBlue"] = 78] = "UtilSeaFoamBlue";
  VehicleColor2[VehicleColor2["UtilLightningBlue"] = 79] = "UtilLightningBlue";
  VehicleColor2[VehicleColor2["UtilMauiBluePoly"] = 80] = "UtilMauiBluePoly";
  VehicleColor2[VehicleColor2["UtilBrightBlue"] = 81] = "UtilBrightBlue";
  VehicleColor2[VehicleColor2["MatteDarkBlue"] = 82] = "MatteDarkBlue";
  VehicleColor2[VehicleColor2["MatteBlue"] = 83] = "MatteBlue";
  VehicleColor2[VehicleColor2["MatteMidnightBlue"] = 84] = "MatteMidnightBlue";
  VehicleColor2[VehicleColor2["WornDarkBlue"] = 85] = "WornDarkBlue";
  VehicleColor2[VehicleColor2["WornBlue"] = 86] = "WornBlue";
  VehicleColor2[VehicleColor2["WornLightBlue"] = 87] = "WornLightBlue";
  VehicleColor2[VehicleColor2["MetallicTaxiYellow"] = 88] = "MetallicTaxiYellow";
  VehicleColor2[VehicleColor2["MetallicRaceYellow"] = 89] = "MetallicRaceYellow";
  VehicleColor2[VehicleColor2["MetallicBronze"] = 90] = "MetallicBronze";
  VehicleColor2[VehicleColor2["MetallicYellowBird"] = 91] = "MetallicYellowBird";
  VehicleColor2[VehicleColor2["MetallicLime"] = 92] = "MetallicLime";
  VehicleColor2[VehicleColor2["MetallicChampagne"] = 93] = "MetallicChampagne";
  VehicleColor2[VehicleColor2["MetallicPuebloBeige"] = 94] = "MetallicPuebloBeige";
  VehicleColor2[VehicleColor2["MetallicDarkIvory"] = 95] = "MetallicDarkIvory";
  VehicleColor2[VehicleColor2["MetallicChocoBrown"] = 96] = "MetallicChocoBrown";
  VehicleColor2[VehicleColor2["MetallicGoldenBrown"] = 97] = "MetallicGoldenBrown";
  VehicleColor2[VehicleColor2["MetallicLightBrown"] = 98] = "MetallicLightBrown";
  VehicleColor2[VehicleColor2["MetallicStrawBeige"] = 99] = "MetallicStrawBeige";
  VehicleColor2[VehicleColor2["MetallicMossBrown"] = 100] = "MetallicMossBrown";
  VehicleColor2[VehicleColor2["MetallicBistonBrown"] = 101] = "MetallicBistonBrown";
  VehicleColor2[VehicleColor2["MetallicBeechwood"] = 102] = "MetallicBeechwood";
  VehicleColor2[VehicleColor2["MetallicDarkBeechwood"] = 103] = "MetallicDarkBeechwood";
  VehicleColor2[VehicleColor2["MetallicChocoOrange"] = 104] = "MetallicChocoOrange";
  VehicleColor2[VehicleColor2["MetallicBeachSand"] = 105] = "MetallicBeachSand";
  VehicleColor2[VehicleColor2["MetallicSunBleechedSand"] = 106] = "MetallicSunBleechedSand";
  VehicleColor2[VehicleColor2["MetallicCream"] = 107] = "MetallicCream";
  VehicleColor2[VehicleColor2["UtilBrown"] = 108] = "UtilBrown";
  VehicleColor2[VehicleColor2["UtilMediumBrown"] = 109] = "UtilMediumBrown";
  VehicleColor2[VehicleColor2["UtilLightBrown"] = 110] = "UtilLightBrown";
  VehicleColor2[VehicleColor2["MetallicWhite"] = 111] = "MetallicWhite";
  VehicleColor2[VehicleColor2["MetallicFrostWhite"] = 112] = "MetallicFrostWhite";
  VehicleColor2[VehicleColor2["WornHoneyBeige"] = 113] = "WornHoneyBeige";
  VehicleColor2[VehicleColor2["WornBrown"] = 114] = "WornBrown";
  VehicleColor2[VehicleColor2["WornDarkBrown"] = 115] = "WornDarkBrown";
  VehicleColor2[VehicleColor2["WornStrawBeige"] = 116] = "WornStrawBeige";
  VehicleColor2[VehicleColor2["BrushedSteel"] = 117] = "BrushedSteel";
  VehicleColor2[VehicleColor2["BrushedBlackSteel"] = 118] = "BrushedBlackSteel";
  VehicleColor2[VehicleColor2["BrushedAluminium"] = 119] = "BrushedAluminium";
  VehicleColor2[VehicleColor2["Chrome"] = 120] = "Chrome";
  VehicleColor2[VehicleColor2["WornOffWhite"] = 121] = "WornOffWhite";
  VehicleColor2[VehicleColor2["UtilOffWhite"] = 122] = "UtilOffWhite";
  VehicleColor2[VehicleColor2["WornOrange"] = 123] = "WornOrange";
  VehicleColor2[VehicleColor2["WornLightOrange"] = 124] = "WornLightOrange";
  VehicleColor2[VehicleColor2["MetallicSecuricorGreen"] = 125] = "MetallicSecuricorGreen";
  VehicleColor2[VehicleColor2["WornTaxiYellow"] = 126] = "WornTaxiYellow";
  VehicleColor2[VehicleColor2["PoliceCarBlue"] = 127] = "PoliceCarBlue";
  VehicleColor2[VehicleColor2["MatteGreen"] = 128] = "MatteGreen";
  VehicleColor2[VehicleColor2["MatteBrown"] = 129] = "MatteBrown";
  VehicleColor2[VehicleColor2["MatteWhite"] = 131] = "MatteWhite";
  VehicleColor2[VehicleColor2["WornWhite"] = 132] = "WornWhite";
  VehicleColor2[VehicleColor2["WornOliveArmyGreen"] = 133] = "WornOliveArmyGreen";
  VehicleColor2[VehicleColor2["PureWhite"] = 134] = "PureWhite";
  VehicleColor2[VehicleColor2["HotPink"] = 135] = "HotPink";
  VehicleColor2[VehicleColor2["Salmonpink"] = 136] = "Salmonpink";
  VehicleColor2[VehicleColor2["MetallicVermillionPink"] = 137] = "MetallicVermillionPink";
  VehicleColor2[VehicleColor2["Orange"] = 138] = "Orange";
  VehicleColor2[VehicleColor2["Green"] = 139] = "Green";
  VehicleColor2[VehicleColor2["Blue"] = 140] = "Blue";
  VehicleColor2[VehicleColor2["MettalicBlackBlue"] = 141] = "MettalicBlackBlue";
  VehicleColor2[VehicleColor2["MetallicBlackPurple"] = 142] = "MetallicBlackPurple";
  VehicleColor2[VehicleColor2["MetallicBlackRed"] = 143] = "MetallicBlackRed";
  VehicleColor2[VehicleColor2["HunterGreen"] = 144] = "HunterGreen";
  VehicleColor2[VehicleColor2["MetallicPurple"] = 145] = "MetallicPurple";
  VehicleColor2[VehicleColor2["MetaillicVDarkBlue"] = 146] = "MetaillicVDarkBlue";
  VehicleColor2[VehicleColor2["ModshopBlack1"] = 147] = "ModshopBlack1";
  VehicleColor2[VehicleColor2["MattePurple"] = 148] = "MattePurple";
  VehicleColor2[VehicleColor2["MatteDarkPurple"] = 149] = "MatteDarkPurple";
  VehicleColor2[VehicleColor2["MetallicLavaRed"] = 150] = "MetallicLavaRed";
  VehicleColor2[VehicleColor2["MatteForestGreen"] = 151] = "MatteForestGreen";
  VehicleColor2[VehicleColor2["MatteOliveDrab"] = 152] = "MatteOliveDrab";
  VehicleColor2[VehicleColor2["MatteDesertBrown"] = 153] = "MatteDesertBrown";
  VehicleColor2[VehicleColor2["MatteDesertTan"] = 154] = "MatteDesertTan";
  VehicleColor2[VehicleColor2["MatteFoliageGreen"] = 155] = "MatteFoliageGreen";
  VehicleColor2[VehicleColor2["DefaultAlloyColor"] = 156] = "DefaultAlloyColor";
  VehicleColor2[VehicleColor2["EpsilonBlue"] = 157] = "EpsilonBlue";
  VehicleColor2[VehicleColor2["PureGold"] = 158] = "PureGold";
  VehicleColor2[VehicleColor2["BrushedGold"] = 159] = "BrushedGold";
  return VehicleColor2;
})(VehicleColor || {});
var VehicleLandingGearState = /* @__PURE__ */ ((VehicleLandingGearState2) => {
  VehicleLandingGearState2[VehicleLandingGearState2["Deployed"] = 0] = "Deployed";
  VehicleLandingGearState2[VehicleLandingGearState2["Closing"] = 1] = "Closing";
  VehicleLandingGearState2[VehicleLandingGearState2["Opening"] = 2] = "Opening";
  VehicleLandingGearState2[VehicleLandingGearState2["Retracted"] = 3] = "Retracted";
  return VehicleLandingGearState2;
})(VehicleLandingGearState || {});
var VehicleLockStatus = /* @__PURE__ */ ((VehicleLockStatus2) => {
  VehicleLockStatus2[VehicleLockStatus2["None"] = 0] = "None";
  VehicleLockStatus2[VehicleLockStatus2["Unlocked"] = 1] = "Unlocked";
  VehicleLockStatus2[VehicleLockStatus2["Locked"] = 2] = "Locked";
  VehicleLockStatus2[VehicleLockStatus2["LockedForPlayer"] = 3] = "LockedForPlayer";
  VehicleLockStatus2[VehicleLockStatus2["StickPlayerInside"] = 4] = "StickPlayerInside";
  VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenInto"] = 7] = "CanBeBrokenInto";
  VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenIntoPersist"] = 8] = "CanBeBrokenIntoPersist";
  VehicleLockStatus2[VehicleLockStatus2["CannotBeTriedToEnter"] = 10] = "CannotBeTriedToEnter";
  return VehicleLockStatus2;
})(VehicleLockStatus || {});
var VehicleNeonLight = /* @__PURE__ */ ((VehicleNeonLight2) => {
  VehicleNeonLight2[VehicleNeonLight2["Left"] = 0] = "Left";
  VehicleNeonLight2[VehicleNeonLight2["Right"] = 1] = "Right";
  VehicleNeonLight2[VehicleNeonLight2["Front"] = 2] = "Front";
  VehicleNeonLight2[VehicleNeonLight2["Back"] = 3] = "Back";
  return VehicleNeonLight2;
})(VehicleNeonLight || {});
var VehicleRoofState = /* @__PURE__ */ ((VehicleRoofState2) => {
  VehicleRoofState2[VehicleRoofState2["Closed"] = 0] = "Closed";
  VehicleRoofState2[VehicleRoofState2["Opening"] = 1] = "Opening";
  VehicleRoofState2[VehicleRoofState2["Opened"] = 2] = "Opened";
  VehicleRoofState2[VehicleRoofState2["Closing"] = 3] = "Closing";
  return VehicleRoofState2;
})(VehicleRoofState || {});
var VehicleSeat = /* @__PURE__ */ ((VehicleSeat2) => {
  VehicleSeat2[VehicleSeat2["None"] = -3] = "None";
  VehicleSeat2[VehicleSeat2["Any"] = -2] = "Any";
  VehicleSeat2[VehicleSeat2["Driver"] = -1] = "Driver";
  VehicleSeat2[VehicleSeat2["Passenger"] = 0] = "Passenger";
  VehicleSeat2[VehicleSeat2["LeftFront"] = -1] = "LeftFront";
  VehicleSeat2[VehicleSeat2["RightFront"] = 0] = "RightFront";
  VehicleSeat2[VehicleSeat2["LeftRear"] = 1] = "LeftRear";
  VehicleSeat2[VehicleSeat2["RightRear"] = 2] = "RightRear";
  VehicleSeat2[VehicleSeat2["ExtraSeat1"] = 3] = "ExtraSeat1";
  VehicleSeat2[VehicleSeat2["ExtraSeat2"] = 4] = "ExtraSeat2";
  VehicleSeat2[VehicleSeat2["ExtraSeat3"] = 5] = "ExtraSeat3";
  VehicleSeat2[VehicleSeat2["ExtraSeat4"] = 6] = "ExtraSeat4";
  VehicleSeat2[VehicleSeat2["ExtraSeat5"] = 7] = "ExtraSeat5";
  VehicleSeat2[VehicleSeat2["ExtraSeat6"] = 8] = "ExtraSeat6";
  VehicleSeat2[VehicleSeat2["ExtraSeat7"] = 9] = "ExtraSeat7";
  VehicleSeat2[VehicleSeat2["ExtraSeat8"] = 10] = "ExtraSeat8";
  VehicleSeat2[VehicleSeat2["ExtraSeat9"] = 11] = "ExtraSeat9";
  VehicleSeat2[VehicleSeat2["ExtraSeat10"] = 12] = "ExtraSeat10";
  VehicleSeat2[VehicleSeat2["ExtraSeat11"] = 13] = "ExtraSeat11";
  VehicleSeat2[VehicleSeat2["ExtraSeat12"] = 14] = "ExtraSeat12";
  return VehicleSeat2;
})(VehicleSeat || {});
var VehicleWindowTint = /* @__PURE__ */ ((VehicleWindowTint2) => {
  VehicleWindowTint2[VehicleWindowTint2["None"] = 0] = "None";
  VehicleWindowTint2[VehicleWindowTint2["PureBlack"] = 1] = "PureBlack";
  VehicleWindowTint2[VehicleWindowTint2["DarkSmoke"] = 2] = "DarkSmoke";
  VehicleWindowTint2[VehicleWindowTint2["LightSmoke"] = 3] = "LightSmoke";
  VehicleWindowTint2[VehicleWindowTint2["Stock"] = 4] = "Stock";
  VehicleWindowTint2[VehicleWindowTint2["Limo"] = 5] = "Limo";
  VehicleWindowTint2[VehicleWindowTint2["Green"] = 6] = "Green";
  return VehicleWindowTint2;
})(VehicleWindowTint || {});
var VehicleWindowIndex = /* @__PURE__ */ ((VehicleWindowIndex2) => {
  VehicleWindowIndex2[VehicleWindowIndex2["FrontRightWindow"] = 1] = "FrontRightWindow";
  VehicleWindowIndex2[VehicleWindowIndex2["FrontLeftWindow"] = 0] = "FrontLeftWindow";
  VehicleWindowIndex2[VehicleWindowIndex2["BackRightWindow"] = 3] = "BackRightWindow";
  VehicleWindowIndex2[VehicleWindowIndex2["BackLeftWindow"] = 2] = "BackLeftWindow";
  VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow1"] = 4] = "ExtraWindow1";
  VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow2"] = 5] = "ExtraWindow2";
  VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow3"] = 6] = "ExtraWindow3";
  VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow4"] = 7] = "ExtraWindow4";
  return VehicleWindowIndex2;
})(VehicleWindowIndex || {});
var VehicleModType = /* @__PURE__ */ ((VehicleModType2) => {
  VehicleModType2[VehicleModType2["Spoilers"] = 0] = "Spoilers";
  VehicleModType2[VehicleModType2["FrontBumper"] = 1] = "FrontBumper";
  VehicleModType2[VehicleModType2["RearBumper"] = 2] = "RearBumper";
  VehicleModType2[VehicleModType2["SideSkirt"] = 3] = "SideSkirt";
  VehicleModType2[VehicleModType2["Exhaust"] = 4] = "Exhaust";
  VehicleModType2[VehicleModType2["Frame"] = 5] = "Frame";
  VehicleModType2[VehicleModType2["Grille"] = 6] = "Grille";
  VehicleModType2[VehicleModType2["Hood"] = 7] = "Hood";
  VehicleModType2[VehicleModType2["Fender"] = 8] = "Fender";
  VehicleModType2[VehicleModType2["RightFender"] = 9] = "RightFender";
  VehicleModType2[VehicleModType2["Roof"] = 10] = "Roof";
  VehicleModType2[VehicleModType2["Engine"] = 11] = "Engine";
  VehicleModType2[VehicleModType2["Brakes"] = 12] = "Brakes";
  VehicleModType2[VehicleModType2["Transmission"] = 13] = "Transmission";
  VehicleModType2[VehicleModType2["Horns"] = 14] = "Horns";
  VehicleModType2[VehicleModType2["Suspension"] = 15] = "Suspension";
  VehicleModType2[VehicleModType2["Armor"] = 16] = "Armor";
  VehicleModType2[VehicleModType2["FrontWheel"] = 23] = "FrontWheel";
  VehicleModType2[VehicleModType2["RearWheel"] = 24] = "RearWheel";
  VehicleModType2[VehicleModType2["PlateHolder"] = 25] = "PlateHolder";
  VehicleModType2[VehicleModType2["VanityPlates"] = 26] = "VanityPlates";
  VehicleModType2[VehicleModType2["TrimDesign"] = 27] = "TrimDesign";
  VehicleModType2[VehicleModType2["Ornaments"] = 28] = "Ornaments";
  VehicleModType2[VehicleModType2["Dashboard"] = 29] = "Dashboard";
  VehicleModType2[VehicleModType2["DialDesign"] = 30] = "DialDesign";
  VehicleModType2[VehicleModType2["DoorSpeakers"] = 31] = "DoorSpeakers";
  VehicleModType2[VehicleModType2["Seats"] = 32] = "Seats";
  VehicleModType2[VehicleModType2["SteeringWheels"] = 33] = "SteeringWheels";
  VehicleModType2[VehicleModType2["ColumnShifterLevers"] = 34] = "ColumnShifterLevers";
  VehicleModType2[VehicleModType2["Plaques"] = 35] = "Plaques";
  VehicleModType2[VehicleModType2["Speakers"] = 36] = "Speakers";
  VehicleModType2[VehicleModType2["Trunk"] = 37] = "Trunk";
  VehicleModType2[VehicleModType2["Hydraulics"] = 38] = "Hydraulics";
  VehicleModType2[VehicleModType2["EngineBlock"] = 39] = "EngineBlock";
  VehicleModType2[VehicleModType2["AirFilter"] = 40] = "AirFilter";
  VehicleModType2[VehicleModType2["Struts"] = 41] = "Struts";
  VehicleModType2[VehicleModType2["ArchCover"] = 42] = "ArchCover";
  VehicleModType2[VehicleModType2["Aerials"] = 43] = "Aerials";
  VehicleModType2[VehicleModType2["Trim"] = 44] = "Trim";
  VehicleModType2[VehicleModType2["Tank"] = 45] = "Tank";
  VehicleModType2[VehicleModType2["Windows"] = 46] = "Windows";
  VehicleModType2[VehicleModType2["Livery"] = 48] = "Livery";
  return VehicleModType2;
})(VehicleModType || {});
var VehicleToggleModType = /* @__PURE__ */ ((VehicleToggleModType2) => {
  VehicleToggleModType2[VehicleToggleModType2["Turbo"] = 18] = "Turbo";
  VehicleToggleModType2[VehicleToggleModType2["TireSmoke"] = 20] = "TireSmoke";
  VehicleToggleModType2[VehicleToggleModType2["XenonHeadlights"] = 22] = "XenonHeadlights";
  return VehicleToggleModType2;
})(VehicleToggleModType || {});
var VehiclePaintType = /* @__PURE__ */ ((VehiclePaintType2) => {
  VehiclePaintType2[VehiclePaintType2["Normal"] = 0] = "Normal";
  VehiclePaintType2[VehiclePaintType2["Metallic"] = 1] = "Metallic";
  VehiclePaintType2[VehiclePaintType2["Pearl"] = 2] = "Pearl";
  VehiclePaintType2[VehiclePaintType2["Matte"] = 3] = "Matte";
  VehiclePaintType2[VehiclePaintType2["Metal"] = 4] = "Metal";
  VehiclePaintType2[VehiclePaintType2["Chrome"] = 5] = "Chrome";
  return VehiclePaintType2;
})(VehiclePaintType || {});
var VehicleDoorIndex = /* @__PURE__ */ ((VehicleDoorIndex2) => {
  VehicleDoorIndex2[VehicleDoorIndex2["FrontRightDoor"] = 1] = "FrontRightDoor";
  VehicleDoorIndex2[VehicleDoorIndex2["FrontLeftDoor"] = 0] = "FrontLeftDoor";
  VehicleDoorIndex2[VehicleDoorIndex2["BackRightDoor"] = 3] = "BackRightDoor";
  VehicleDoorIndex2[VehicleDoorIndex2["BackLeftDoor"] = 2] = "BackLeftDoor";
  VehicleDoorIndex2[VehicleDoorIndex2["Hood"] = 4] = "Hood";
  VehicleDoorIndex2[VehicleDoorIndex2["Trunk"] = 5] = "Trunk";
  return VehicleDoorIndex2;
})(VehicleDoorIndex || {});
var VehicleWheelType = /* @__PURE__ */ ((VehicleWheelType2) => {
  VehicleWheelType2[VehicleWheelType2["Sport"] = 0] = "Sport";
  VehicleWheelType2[VehicleWheelType2["Muscle"] = 1] = "Muscle";
  VehicleWheelType2[VehicleWheelType2["Lowrider"] = 2] = "Lowrider";
  VehicleWheelType2[VehicleWheelType2["SUV"] = 3] = "SUV";
  VehicleWheelType2[VehicleWheelType2["Offroad"] = 4] = "Offroad";
  VehicleWheelType2[VehicleWheelType2["Tuner"] = 5] = "Tuner";
  VehicleWheelType2[VehicleWheelType2["BikeWheels"] = 6] = "BikeWheels";
  VehicleWheelType2[VehicleWheelType2["HighEnd"] = 7] = "HighEnd";
  VehicleWheelType2[VehicleWheelType2["BennysOriginals"] = 8] = "BennysOriginals";
  VehicleWheelType2[VehicleWheelType2["BennysBespoke"] = 9] = "BennysBespoke";
  return VehicleWheelType2;
})(VehicleWheelType || {});
var VehicleWheelIndex = /* @__PURE__ */ ((VehicleWheelIndex2) => {
  VehicleWheelIndex2[VehicleWheelIndex2["FrontLeftWheel"] = 0] = "FrontLeftWheel";
  VehicleWheelIndex2[VehicleWheelIndex2["FrontRightWheel"] = 1] = "FrontRightWheel";
  VehicleWheelIndex2[VehicleWheelIndex2["MidLeftWheel"] = 2] = "MidLeftWheel";
  VehicleWheelIndex2[VehicleWheelIndex2["MidRightWheel"] = 3] = "MidRightWheel";
  VehicleWheelIndex2[VehicleWheelIndex2["RearLeftWheel"] = 4] = "RearLeftWheel";
  VehicleWheelIndex2[VehicleWheelIndex2["RearRightWheel"] = 5] = "RearRightWheel";
  VehicleWheelIndex2[VehicleWheelIndex2["TrailerMidLeftWheel"] = 45] = "TrailerMidLeftWheel";
  VehicleWheelIndex2[VehicleWheelIndex2["TrailerMidRightWheel"] = 47] = "TrailerMidRightWheel";
  return VehicleWheelIndex2;
})(VehicleWheelIndex || {});

// src/fivem/enums/Weather.ts
var Weather = /* @__PURE__ */ ((Weather2) => {
  Weather2[Weather2["Unknown"] = -1] = "Unknown";
  Weather2[Weather2["ExtraSunny"] = 0] = "ExtraSunny";
  Weather2[Weather2["Clear"] = 1] = "Clear";
  Weather2[Weather2["Clouds"] = 2] = "Clouds";
  Weather2[Weather2["Smog"] = 3] = "Smog";
  Weather2[Weather2["Foggy"] = 4] = "Foggy";
  Weather2[Weather2["Overcast"] = 5] = "Overcast";
  Weather2[Weather2["Raining"] = 6] = "Raining";
  Weather2[Weather2["ThunderStorm"] = 7] = "ThunderStorm";
  Weather2[Weather2["Clearing"] = 8] = "Clearing";
  Weather2[Weather2["Neutral"] = 9] = "Neutral";
  Weather2[Weather2["Snowing"] = 10] = "Snowing";
  Weather2[Weather2["Blizzard"] = 11] = "Blizzard";
  Weather2[Weather2["Snowlight"] = 12] = "Snowlight";
  Weather2[Weather2["Christmas"] = 13] = "Christmas";
  Weather2[Weather2["Halloween"] = 14] = "Halloween";
  return Weather2;
})(Weather || {});

// src/fivem/enums/ZoneID.ts
var ZoneID = /* @__PURE__ */ ((ZoneID2) => {
  ZoneID2[ZoneID2["AIRP"] = 0] = "AIRP";
  ZoneID2[ZoneID2["ALAMO"] = 1] = "ALAMO";
  ZoneID2[ZoneID2["ALTA"] = 2] = "ALTA";
  ZoneID2[ZoneID2["ARMYB"] = 3] = "ARMYB";
  ZoneID2[ZoneID2["BANHAMC"] = 4] = "BANHAMC";
  ZoneID2[ZoneID2["BANNING"] = 5] = "BANNING";
  ZoneID2[ZoneID2["BEACH"] = 6] = "BEACH";
  ZoneID2[ZoneID2["BHAMCA"] = 7] = "BHAMCA";
  ZoneID2[ZoneID2["BRADP"] = 8] = "BRADP";
  ZoneID2[ZoneID2["BRADT"] = 9] = "BRADT";
  ZoneID2[ZoneID2["BURTON"] = 10] = "BURTON";
  ZoneID2[ZoneID2["CALAFB"] = 11] = "CALAFB";
  ZoneID2[ZoneID2["CANNY"] = 12] = "CANNY";
  ZoneID2[ZoneID2["CCREAK"] = 13] = "CCREAK";
  ZoneID2[ZoneID2["CHAMH"] = 14] = "CHAMH";
  ZoneID2[ZoneID2["CHIL"] = 15] = "CHIL";
  ZoneID2[ZoneID2["CHU"] = 16] = "CHU";
  ZoneID2[ZoneID2["CMSW"] = 17] = "CMSW";
  ZoneID2[ZoneID2["CYPRE"] = 18] = "CYPRE";
  ZoneID2[ZoneID2["DAVIS"] = 19] = "DAVIS";
  ZoneID2[ZoneID2["DELBE"] = 20] = "DELBE";
  ZoneID2[ZoneID2["DELPE"] = 21] = "DELPE";
  ZoneID2[ZoneID2["DELSOL"] = 22] = "DELSOL";
  ZoneID2[ZoneID2["DESRT"] = 23] = "DESRT";
  ZoneID2[ZoneID2["DOWNT"] = 24] = "DOWNT";
  ZoneID2[ZoneID2["DTVINE"] = 25] = "DTVINE";
  ZoneID2[ZoneID2["EAST_V"] = 26] = "EAST_V";
  ZoneID2[ZoneID2["EBURO"] = 27] = "EBURO";
  ZoneID2[ZoneID2["ELGORL"] = 28] = "ELGORL";
  ZoneID2[ZoneID2["ELYSIAN"] = 29] = "ELYSIAN";
  ZoneID2[ZoneID2["GALFISH"] = 30] = "GALFISH";
  ZoneID2[ZoneID2["golf"] = 31] = "golf";
  ZoneID2[ZoneID2["GRAPES"] = 32] = "GRAPES";
  ZoneID2[ZoneID2["GREATC"] = 33] = "GREATC";
  ZoneID2[ZoneID2["HARMO"] = 34] = "HARMO";
  ZoneID2[ZoneID2["HAWICK"] = 35] = "HAWICK";
  ZoneID2[ZoneID2["HORS"] = 36] = "HORS";
  ZoneID2[ZoneID2["HUMLAB"] = 37] = "HUMLAB";
  ZoneID2[ZoneID2["JAIL"] = 38] = "JAIL";
  ZoneID2[ZoneID2["KOREAT"] = 39] = "KOREAT";
  ZoneID2[ZoneID2["LACT"] = 40] = "LACT";
  ZoneID2[ZoneID2["LAGO"] = 41] = "LAGO";
  ZoneID2[ZoneID2["LDAM"] = 42] = "LDAM";
  ZoneID2[ZoneID2["LEGSQU"] = 43] = "LEGSQU";
  ZoneID2[ZoneID2["LMESA"] = 44] = "LMESA";
  ZoneID2[ZoneID2["LOSPUER"] = 45] = "LOSPUER";
  ZoneID2[ZoneID2["MIRR"] = 46] = "MIRR";
  ZoneID2[ZoneID2["MORN"] = 47] = "MORN";
  ZoneID2[ZoneID2["MOVIE"] = 48] = "MOVIE";
  ZoneID2[ZoneID2["MTCHIL"] = 49] = "MTCHIL";
  ZoneID2[ZoneID2["MTGORDO"] = 50] = "MTGORDO";
  ZoneID2[ZoneID2["MTJOSE"] = 51] = "MTJOSE";
  ZoneID2[ZoneID2["MURRI"] = 52] = "MURRI";
  ZoneID2[ZoneID2["NCHU"] = 53] = "NCHU";
  ZoneID2[ZoneID2["NOOSE"] = 54] = "NOOSE";
  ZoneID2[ZoneID2["OCEANA"] = 55] = "OCEANA";
  ZoneID2[ZoneID2["PALCOV"] = 56] = "PALCOV";
  ZoneID2[ZoneID2["PALETO"] = 57] = "PALETO";
  ZoneID2[ZoneID2["PALFOR"] = 58] = "PALFOR";
  ZoneID2[ZoneID2["PALHIGH"] = 59] = "PALHIGH";
  ZoneID2[ZoneID2["PALMPOW"] = 60] = "PALMPOW";
  ZoneID2[ZoneID2["PBLUFF"] = 61] = "PBLUFF";
  ZoneID2[ZoneID2["PBOX"] = 62] = "PBOX";
  ZoneID2[ZoneID2["PROCOB"] = 63] = "PROCOB";
  ZoneID2[ZoneID2["RANCHO"] = 64] = "RANCHO";
  ZoneID2[ZoneID2["RGLEN"] = 65] = "RGLEN";
  ZoneID2[ZoneID2["RICHM"] = 66] = "RICHM";
  ZoneID2[ZoneID2["ROCKF"] = 67] = "ROCKF";
  ZoneID2[ZoneID2["RTRAK"] = 68] = "RTRAK";
  ZoneID2[ZoneID2["SanAnd"] = 69] = "SanAnd";
  ZoneID2[ZoneID2["SANCHIA"] = 70] = "SANCHIA";
  ZoneID2[ZoneID2["SANDY"] = 71] = "SANDY";
  ZoneID2[ZoneID2["SKID"] = 72] = "SKID";
  ZoneID2[ZoneID2["SLAB"] = 73] = "SLAB";
  ZoneID2[ZoneID2["STAD"] = 74] = "STAD";
  ZoneID2[ZoneID2["STRAW"] = 75] = "STRAW";
  ZoneID2[ZoneID2["TATAMO"] = 76] = "TATAMO";
  ZoneID2[ZoneID2["TERMINA"] = 77] = "TERMINA";
  ZoneID2[ZoneID2["TEXTI"] = 78] = "TEXTI";
  ZoneID2[ZoneID2["TONGVAH"] = 79] = "TONGVAH";
  ZoneID2[ZoneID2["TONGVAV"] = 80] = "TONGVAV";
  ZoneID2[ZoneID2["VCANA"] = 81] = "VCANA";
  ZoneID2[ZoneID2["VESP"] = 82] = "VESP";
  ZoneID2[ZoneID2["VINE"] = 83] = "VINE";
  ZoneID2[ZoneID2["WINDF"] = 84] = "WINDF";
  ZoneID2[ZoneID2["WVINE"] = 85] = "WVINE";
  ZoneID2[ZoneID2["ZANCUDO"] = 86] = "ZANCUDO";
  ZoneID2[ZoneID2["ZP_ORT"] = 87] = "ZP_ORT";
  ZoneID2[ZoneID2["ZQ_UAR"] = 88] = "ZQ_UAR";
  return ZoneID2;
})(ZoneID || {});

// src/fivem/enums/PickupType.ts
var PickupType = /* @__PURE__ */ ((PickupType2) => {
  PickupType2[PickupType2["CustomScript"] = 738282662] = "CustomScript";
  PickupType2[PickupType2["VehicleCustomScript"] = 2780351145] = "VehicleCustomScript";
  PickupType2[PickupType2["Parachute"] = 1735599485] = "Parachute";
  PickupType2[PickupType2["PortablePackage"] = 2158727964] = "PortablePackage";
  PickupType2[PickupType2["PortableCrateUnfixed"] = 1852930709] = "PortableCrateUnfixed";
  PickupType2[PickupType2["Health"] = 2406513688] = "Health";
  PickupType2[PickupType2["HealthSnack"] = 483577702] = "HealthSnack";
  PickupType2[PickupType2["Armour"] = 1274757841] = "Armour";
  PickupType2[PickupType2["MoneyCase"] = 3463437675] = "MoneyCase";
  PickupType2[PickupType2["MoneySecurityCase"] = 3732468094] = "MoneySecurityCase";
  PickupType2[PickupType2["MoneyVariable"] = 4263048111] = "MoneyVariable";
  PickupType2[PickupType2["MoneyMedBag"] = 341217064] = "MoneyMedBag";
  PickupType2[PickupType2["MoneyPurse"] = 513448440] = "MoneyPurse";
  PickupType2[PickupType2["MoneyDepBag"] = 545862290] = "MoneyDepBag";
  PickupType2[PickupType2["MoneyWallet"] = 1575005502] = "MoneyWallet";
  PickupType2[PickupType2["MoneyPaperBag"] = 1897726628] = "MoneyPaperBag";
  PickupType2[PickupType2["WeaponPistol"] = 4189041807] = "WeaponPistol";
  PickupType2[PickupType2["WeaponCombatPistol"] = 2305275123] = "WeaponCombatPistol";
  PickupType2[PickupType2["WeaponAPPistol"] = 996550793] = "WeaponAPPistol";
  PickupType2[PickupType2["WeaponSNSPistol"] = 3317114643] = "WeaponSNSPistol";
  PickupType2[PickupType2["WeaponHeavyPistol"] = 2633054488] = "WeaponHeavyPistol";
  PickupType2[PickupType2["WeaponMicroSMG"] = 496339155] = "WeaponMicroSMG";
  PickupType2[PickupType2["WeaponSMG"] = 978070226] = "WeaponSMG";
  PickupType2[PickupType2["WeaponMG"] = 2244651441] = "WeaponMG";
  PickupType2[PickupType2["WeaponCombatMG"] = 2995980820] = "WeaponCombatMG";
  PickupType2[PickupType2["WeaponAssaultRifle"] = 4080829360] = "WeaponAssaultRifle";
  PickupType2[PickupType2["WeaponCarbineRifle"] = 3748731225] = "WeaponCarbineRifle";
  PickupType2[PickupType2["WeaponAdvancedRifle"] = 2998219358] = "WeaponAdvancedRifle";
  PickupType2[PickupType2["WeaponSpecialCarbine"] = 157823901] = "WeaponSpecialCarbine";
  PickupType2[PickupType2["WeaponBullpupRifle"] = 2170382056] = "WeaponBullpupRifle";
  PickupType2[PickupType2["WeaponPumpShotgun"] = 2838846925] = "WeaponPumpShotgun";
  PickupType2[PickupType2["WeaponSawnoffShotgun"] = 2528383651] = "WeaponSawnoffShotgun";
  PickupType2[PickupType2["WeaponAssaultShotgun"] = 2459552091] = "WeaponAssaultShotgun";
  PickupType2[PickupType2["WeaponSniperRifle"] = 4264178988] = "WeaponSniperRifle";
  PickupType2[PickupType2["WeaponHeavySniper"] = 1765114797] = "WeaponHeavySniper";
  PickupType2[PickupType2["WeaponGrenadeLauncher"] = 779501861] = "WeaponGrenadeLauncher";
  PickupType2[PickupType2["WeaponRPG"] = 1295434569] = "WeaponRPG";
  PickupType2[PickupType2["WeaponMinigun"] = 792114228] = "WeaponMinigun";
  PickupType2[PickupType2["WeaponGrenade"] = 1577485217] = "WeaponGrenade";
  PickupType2[PickupType2["WeaponStickyBomb"] = 2081529176] = "WeaponStickyBomb";
  PickupType2[PickupType2["WeaponSmokeGrenade"] = 483787975] = "WeaponSmokeGrenade";
  PickupType2[PickupType2["WeaponMolotov"] = 768803961] = "WeaponMolotov";
  PickupType2[PickupType2["WeaponPetrolCan"] = 3332236287] = "WeaponPetrolCan";
  PickupType2[PickupType2["WeaponKnife"] = 663586612] = "WeaponKnife";
  PickupType2[PickupType2["WeaponNightstick"] = 1587637620] = "WeaponNightstick";
  PickupType2[PickupType2["WeaponBat"] = 2179883038] = "WeaponBat";
  PickupType2[PickupType2["WeaponCrowbar"] = 2267924616] = "WeaponCrowbar";
  PickupType2[PickupType2["WeaponGolfclub"] = 2297080999] = "WeaponGolfclub";
  PickupType2[PickupType2["WeaponBottle"] = 4199656437] = "WeaponBottle";
  PickupType2[PickupType2["VehicleWeaponPistol"] = 2773149623] = "VehicleWeaponPistol";
  PickupType2[PickupType2["VehicleWeaponCombatPistol"] = 3500855031] = "VehicleWeaponCombatPistol";
  PickupType2[PickupType2["VehicleWeaponAPPistol"] = 3431676165] = "VehicleWeaponAPPistol";
  PickupType2[PickupType2["VehicleWeaponMicroSMG"] = 3094015579] = "VehicleWeaponMicroSMG";
  PickupType2[PickupType2["VehicleWeaponSawnoffShotgun"] = 772217690] = "VehicleWeaponSawnoffShotgun";
  PickupType2[PickupType2["VehicleWeaponGrenade"] = 2803366040] = "VehicleWeaponGrenade";
  PickupType2[PickupType2["VehicleWeaponSmokeGrenade"] = 1705498857] = "VehicleWeaponSmokeGrenade";
  PickupType2[PickupType2["VehicleWeaponStickyBomb"] = 746606563] = "VehicleWeaponStickyBomb";
  PickupType2[PickupType2["VehicleWeaponMolotov"] = 2228647636] = "VehicleWeaponMolotov";
  PickupType2[PickupType2["VehicleHealth"] = 160266735] = "VehicleHealth";
  PickupType2[PickupType2["AmmoPistol"] = 544828034] = "AmmoPistol";
  PickupType2[PickupType2["AmmoSMG"] = 292537574] = "AmmoSMG";
  PickupType2[PickupType2["AmmoMG"] = 3730366643] = "AmmoMG";
  PickupType2[PickupType2["AmmoRifle"] = 3837603782] = "AmmoRifle";
  PickupType2[PickupType2["AmmoShotgun"] = 2012476125] = "AmmoShotgun";
  PickupType2[PickupType2["AmmoSniper"] = 3224170789] = "AmmoSniper";
  PickupType2[PickupType2["AmmoGrenadeLauncher"] = 2283450536] = "AmmoGrenadeLauncher";
  PickupType2[PickupType2["AmmoRPG"] = 2223210455] = "AmmoRPG";
  PickupType2[PickupType2["AmmoMinigun"] = 4065984953] = "AmmoMinigun";
  PickupType2[PickupType2["AmmoMissileMP"] = 4187887056] = "AmmoMissileMP";
  PickupType2[PickupType2["AmmoBulletMP"] = 1426343849] = "AmmoBulletMP";
  PickupType2[PickupType2["AmmoGrenadeLauncherMP"] = 2753668402] = "AmmoGrenadeLauncherMP";
  return PickupType2;
})(PickupType || {});

// src/fivem/enums/CameraTypes.ts
var CameraTypes = /* @__PURE__ */ ((CameraTypes2) => {
  CameraTypes2["Scripted"] = "DEFAULT_SCRIPTED_CAMERA";
  CameraTypes2["Animated"] = "DEFAULT_ANIMATED_CAMERA";
  CameraTypes2["Spline"] = "DEFAULT_SPLINE_CAMERA";
  CameraTypes2["ScriptedFly"] = "DEFAULT_SCRIPTED_FLY_CAMERA";
  CameraTypes2["TimedSpline"] = "TIMED_SPLINE_CAMERA";
  return CameraTypes2;
})(CameraTypes || {});

// src/fivem/Blip.ts
var Blip = class {
  static {
    __name(this, "Blip");
  }
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  get Handle() {
    return this.handle;
  }
  get Position() {
    return Vector3.fromArray(GetBlipInfoIdCoord(this.handle));
  }
  set Position(location) {
    SetBlipCoords(this.handle, location.x, location.y, location.z);
  }
  set Rotation(rotation) {
    SetBlipRotation(this.handle, rotation);
  }
  set Scale(scale) {
    SetBlipScale(this.handle, scale);
  }
  get Type() {
    return GetBlipInfoIdType(this.handle);
  }
  get Alpha() {
    return GetBlipAlpha(this.handle);
  }
  set Alpha(alpha) {
    SetBlipAlpha(this.handle, alpha);
  }
  set Priority(priority) {
    SetBlipPriority(this.handle, priority);
  }
  set NumberLabel(number) {
    ShowNumberOnBlip(this.handle, number);
  }
  get Color() {
    return GetBlipColour(this.handle);
  }
  set Color(color) {
    SetBlipColour(this.handle, color);
  }
  get Sprite() {
    return GetBlipSprite(this.handle);
  }
  set Sprite(sprite) {
    SetBlipSprite(this.handle, sprite);
  }
  set Display(display) {
    SetBlipDisplay(this.handle, display);
  }
  set Name(name) {
    BeginTextCommandSetBlipName("STRING");
    AddTextComponentSubstringPlayerName(name);
    EndTextCommandSetBlipName(this.handle);
  }
  setNameToPlayerName(player) {
    SetBlipNameToPlayerName(this.handle, player.Handle);
  }
  get Entity() {
    return new BaseEntity(GetBlipInfoIdEntityIndex(this.handle));
  }
  set ShowHeadingIndicator(show) {
    ShowHeadingIndicatorOnBlip(this.handle, show);
  }
  set ShowRoute(show) {
    SetBlipRoute(this.handle, show);
  }
  set IsFriendly(friendly) {
    SetBlipAsFriendly(this.handle, friendly);
  }
  set IsFriend(friend) {
    SetBlipFriend(this.handle, friend);
  }
  set IsCrew(crew) {
    SetBlipCrew(this.handle, crew);
  }
  get IsFlashing() {
    return IsBlipFlashing(this.handle);
  }
  set IsFlashing(flashing) {
    SetBlipFlashes(this.handle, flashing);
  }
  get IsOnMinimap() {
    return IsBlipOnMinimap(this.handle);
  }
  get IsShortRange() {
    return IsBlipShortRange(this.handle);
  }
  set IsShortRange(shortRange) {
    SetBlipAsShortRange(this.handle, shortRange);
  }
  removeNumberLabel() {
    HideNumberOnBlip(this.handle);
  }
  delete() {
    if (this.exists()) {
      RemoveBlip(this.handle);
    }
  }
  exists() {
    return DoesBlipExist(this.handle);
  }
};

// src/fivem/hashes/MaterialHash.ts
var MaterialHash = /* @__PURE__ */ ((MaterialHash2) => {
  MaterialHash2[MaterialHash2["None"] = 0] = "None";
  MaterialHash2[MaterialHash2["Unk"] = 2519482235] = "Unk";
  MaterialHash2[MaterialHash2["Concrete"] = 1187676648] = "Concrete";
  MaterialHash2[MaterialHash2["ConcretePothole"] = 359120722] = "ConcretePothole";
  MaterialHash2[MaterialHash2["ConcreteDusty"] = 3210327185] = "ConcreteDusty";
  MaterialHash2[MaterialHash2["Tarmac"] = 282940568] = "Tarmac";
  MaterialHash2[MaterialHash2["TarmacPainted"] = 2993614768] = "TarmacPainted";
  MaterialHash2[MaterialHash2["TarmacPothole"] = 1886546517] = "TarmacPothole";
  MaterialHash2[MaterialHash2["RumbleStrip"] = 4044799021] = "RumbleStrip";
  MaterialHash2[MaterialHash2["BreezeBlock"] = 3340854742] = "BreezeBlock";
  MaterialHash2[MaterialHash2["Rock"] = 3454750755] = "Rock";
  MaterialHash2[MaterialHash2["RockMossy"] = 4170197704] = "RockMossy";
  MaterialHash2[MaterialHash2["Stone"] = 765206029] = "Stone";
  MaterialHash2[MaterialHash2["Cobblestone"] = 576169331] = "Cobblestone";
  MaterialHash2[MaterialHash2["Brick"] = 1639053622] = "Brick";
  MaterialHash2[MaterialHash2["Marble"] = 1945073303] = "Marble";
  MaterialHash2[MaterialHash2["PavingSlab"] = 1907048430] = "PavingSlab";
  MaterialHash2[MaterialHash2["SandstoneSolid"] = 592446772] = "SandstoneSolid";
  MaterialHash2[MaterialHash2["SandstoneBrittle"] = 1913209870] = "SandstoneBrittle";
  MaterialHash2[MaterialHash2["SandLoose"] = 2699818980] = "SandLoose";
  MaterialHash2[MaterialHash2["SandCompact"] = 510490462] = "SandCompact";
  MaterialHash2[MaterialHash2["SandWet"] = 909950165] = "SandWet";
  MaterialHash2[MaterialHash2["SandTrack"] = 2387446527] = "SandTrack";
  MaterialHash2[MaterialHash2["SandUnderwater"] = 3158909604] = "SandUnderwater";
  MaterialHash2[MaterialHash2["SandDryDeep"] = 509508168] = "SandDryDeep";
  MaterialHash2[MaterialHash2["SandWetDeep"] = 1288448767] = "SandWetDeep";
  MaterialHash2[MaterialHash2["Ice"] = 3508906581] = "Ice";
  MaterialHash2[MaterialHash2["IceTarmac"] = 2363942873] = "IceTarmac";
  MaterialHash2[MaterialHash2["SnowLoose"] = 2357397706] = "SnowLoose";
  MaterialHash2[MaterialHash2["SnowCompact"] = 3416406407] = "SnowCompact";
  MaterialHash2[MaterialHash2["SnowDeep"] = 1619704960] = "SnowDeep";
  MaterialHash2[MaterialHash2["SnowTarmac"] = 1550304810] = "SnowTarmac";
  MaterialHash2[MaterialHash2["GravelSmall"] = 951832588] = "GravelSmall";
  MaterialHash2[MaterialHash2["GravelLarge"] = 2128369009] = "GravelLarge";
  MaterialHash2[MaterialHash2["GravelDeep"] = 3938260814] = "GravelDeep";
  MaterialHash2[MaterialHash2["GravelTrainTrack"] = 1925605558] = "GravelTrainTrack";
  MaterialHash2[MaterialHash2["DirtTrack"] = 2409420175] = "DirtTrack";
  MaterialHash2[MaterialHash2["MudHard"] = 2352068586] = "MudHard";
  MaterialHash2[MaterialHash2["MudPothole"] = 312396330] = "MudPothole";
  MaterialHash2[MaterialHash2["MudSoft"] = 1635937914] = "MudSoft";
  MaterialHash2[MaterialHash2["MudUnderwater"] = 4021477129] = "MudUnderwater";
  MaterialHash2[MaterialHash2["MudDeep"] = 1109728704] = "MudDeep";
  MaterialHash2[MaterialHash2["Marsh"] = 223086562] = "Marsh";
  MaterialHash2[MaterialHash2["MarshDeep"] = 1584636462] = "MarshDeep";
  MaterialHash2[MaterialHash2["Soil"] = 3594309083] = "Soil";
  MaterialHash2[MaterialHash2["ClayHard"] = 1144315879] = "ClayHard";
  MaterialHash2[MaterialHash2["ClaySoft"] = 560985072] = "ClaySoft";
  MaterialHash2[MaterialHash2["GrassLong"] = 3833216577] = "GrassLong";
  MaterialHash2[MaterialHash2["Grass"] = 1333033863] = "Grass";
  MaterialHash2[MaterialHash2["GrassShort"] = 3008270349] = "GrassShort";
  MaterialHash2[MaterialHash2["Hay"] = 2461440131] = "Hay";
  MaterialHash2[MaterialHash2["Bushes"] = 581794674] = "Bushes";
  MaterialHash2[MaterialHash2["Twigs"] = 3381615457] = "Twigs";
  MaterialHash2[MaterialHash2["Leaves"] = 2253637325] = "Leaves";
  MaterialHash2[MaterialHash2["Woodchips"] = 3985845843] = "Woodchips";
  MaterialHash2[MaterialHash2["TreeBark"] = 2379541433] = "TreeBark";
  MaterialHash2[MaterialHash2["MetalSolidSmall"] = 2847687191] = "MetalSolidSmall";
  MaterialHash2[MaterialHash2["MetalSolidMedium"] = 3929336056] = "MetalSolidMedium";
  MaterialHash2[MaterialHash2["MetalSolidLarge"] = 752131025] = "MetalSolidLarge";
  MaterialHash2[MaterialHash2["MetalHollowSmall"] = 15972667] = "MetalHollowSmall";
  MaterialHash2[MaterialHash2["MetalHollowMedium"] = 1849540536] = "MetalHollowMedium";
  MaterialHash2[MaterialHash2["MetalHollowLarge"] = 3711753465] = "MetalHollowLarge";
  MaterialHash2[MaterialHash2["MetalChainlinkSmall"] = 762193613] = "MetalChainlinkSmall";
  MaterialHash2[MaterialHash2["MetalChainlinkLarge"] = 125958708] = "MetalChainlinkLarge";
  MaterialHash2[MaterialHash2["MetalCorrugatedIron"] = 834144982] = "MetalCorrugatedIron";
  MaterialHash2[MaterialHash2["MetalGrille"] = 3868849285] = "MetalGrille";
  MaterialHash2[MaterialHash2["MetalRailing"] = 2100727187] = "MetalRailing";
  MaterialHash2[MaterialHash2["MetalDuct"] = 1761524221] = "MetalDuct";
  MaterialHash2[MaterialHash2["MetalGarageDoor"] = 4063706601] = "MetalGarageDoor";
  MaterialHash2[MaterialHash2["MetalManhole"] = 3539969597] = "MetalManhole";
  MaterialHash2[MaterialHash2["WoodSolidSmall"] = 3895095068] = "WoodSolidSmall";
  MaterialHash2[MaterialHash2["WoodSolidMedium"] = 555004797] = "WoodSolidMedium";
  MaterialHash2[MaterialHash2["WoodSolidLarge"] = 815762359] = "WoodSolidLarge";
  MaterialHash2[MaterialHash2["WoodSolidPolished"] = 126470059] = "WoodSolidPolished";
  MaterialHash2[MaterialHash2["WoodFloorDusty"] = 3545514974] = "WoodFloorDusty";
  MaterialHash2[MaterialHash2["WoodHollowSmall"] = 1993976879] = "WoodHollowSmall";
  MaterialHash2[MaterialHash2["WoodHollowMedium"] = 3929491133] = "WoodHollowMedium";
  MaterialHash2[MaterialHash2["WoodHollowLarge"] = 3369548007] = "WoodHollowLarge";
  MaterialHash2[MaterialHash2["WoodChipboard"] = 1176309403] = "WoodChipboard";
  MaterialHash2[MaterialHash2["WoodOldCreaky"] = 722686013] = "WoodOldCreaky";
  MaterialHash2[MaterialHash2["WoodHighDensity"] = 2552123904] = "WoodHighDensity";
  MaterialHash2[MaterialHash2["WoodLattice"] = 2011204130] = "WoodLattice";
  MaterialHash2[MaterialHash2["Ceramic"] = 3108646581] = "Ceramic";
  MaterialHash2[MaterialHash2["RoofTile"] = 1755188853] = "RoofTile";
  MaterialHash2[MaterialHash2["RoofFelt"] = 2877802565] = "RoofFelt";
  MaterialHash2[MaterialHash2["Fibreglass"] = 1354180827] = "Fibreglass";
  MaterialHash2[MaterialHash2["Tarpaulin"] = 3652308448] = "Tarpaulin";
  MaterialHash2[MaterialHash2["Plastic"] = 2221655295] = "Plastic";
  MaterialHash2[MaterialHash2["PlasticHollow"] = 627123e3] = "PlasticHollow";
  MaterialHash2[MaterialHash2["PlasticHighDensity"] = 2668971817] = "PlasticHighDensity";
  MaterialHash2[MaterialHash2["PlasticClear"] = 2435246283] = "PlasticClear";
  MaterialHash2[MaterialHash2["PlasticHollowClear"] = 772722531] = "PlasticHollowClear";
  MaterialHash2[MaterialHash2["PlasticHighDensityClear"] = 2956494126] = "PlasticHighDensityClear";
  MaterialHash2[MaterialHash2["FibreglassHollow"] = 3528912198] = "FibreglassHollow";
  MaterialHash2[MaterialHash2["Rubber"] = 4149231379] = "Rubber";
  MaterialHash2[MaterialHash2["RubberHollow"] = 3511032624] = "RubberHollow";
  MaterialHash2[MaterialHash2["Linoleum"] = 289630530] = "Linoleum";
  MaterialHash2[MaterialHash2["Laminate"] = 1845676458] = "Laminate";
  MaterialHash2[MaterialHash2["CarpetSolid"] = 669292054] = "CarpetSolid";
  MaterialHash2[MaterialHash2["CarpetSolidDusty"] = 158576196] = "CarpetSolidDusty";
  MaterialHash2[MaterialHash2["CarpetFloorboard"] = 2898482353] = "CarpetFloorboard";
  MaterialHash2[MaterialHash2["Cloth"] = 122789469] = "Cloth";
  MaterialHash2[MaterialHash2["PlasterSolid"] = 3720844863] = "PlasterSolid";
  MaterialHash2[MaterialHash2["PlasterBrittle"] = 4043078398] = "PlasterBrittle";
  MaterialHash2[MaterialHash2["CardboardSheet"] = 236511221] = "CardboardSheet";
  MaterialHash2[MaterialHash2["CardboardBox"] = 2885912856] = "CardboardBox";
  MaterialHash2[MaterialHash2["Paper"] = 474149820] = "Paper";
  MaterialHash2[MaterialHash2["Foam"] = 808719444] = "Foam";
  MaterialHash2[MaterialHash2["FeatherPillow"] = 1341866303] = "FeatherPillow";
  MaterialHash2[MaterialHash2["Polystyrene"] = 2538039965] = "Polystyrene";
  MaterialHash2[MaterialHash2["Leather"] = 3724496396] = "Leather";
  MaterialHash2[MaterialHash2["Tvscreen"] = 1429989756] = "Tvscreen";
  MaterialHash2[MaterialHash2["SlattedBlinds"] = 673696729] = "SlattedBlinds";
  MaterialHash2[MaterialHash2["GlassShootThrough"] = 937503243] = "GlassShootThrough";
  MaterialHash2[MaterialHash2["GlassBulletproof"] = 244521486] = "GlassBulletproof";
  MaterialHash2[MaterialHash2["GlassOpaque"] = 1500272081] = "GlassOpaque";
  MaterialHash2[MaterialHash2["Perspex"] = 2675173228] = "Perspex";
  MaterialHash2[MaterialHash2["CarMetal"] = 4201905313] = "CarMetal";
  MaterialHash2[MaterialHash2["CarPlastic"] = 2137197282] = "CarPlastic";
  MaterialHash2[MaterialHash2["CarSofttop"] = 3315319434] = "CarSofttop";
  MaterialHash2[MaterialHash2["CarSofttopClear"] = 2130571536] = "CarSofttopClear";
  MaterialHash2[MaterialHash2["CarGlassWeak"] = 1247281098] = "CarGlassWeak";
  MaterialHash2[MaterialHash2["CarGlassMedium"] = 602884284] = "CarGlassMedium";
  MaterialHash2[MaterialHash2["CarGlassStrong"] = 1070994698] = "CarGlassStrong";
  MaterialHash2[MaterialHash2["CarGlassBulletproof"] = 2573051366] = "CarGlassBulletproof";
  MaterialHash2[MaterialHash2["CarGlassOpaque"] = 513061559] = "CarGlassOpaque";
  MaterialHash2[MaterialHash2["Water"] = 435688960] = "Water";
  MaterialHash2[MaterialHash2["Blood"] = 5236042] = "Blood";
  MaterialHash2[MaterialHash2["Oil"] = 3660485991] = "Oil";
  MaterialHash2[MaterialHash2["Petrol"] = 2660782956] = "Petrol";
  MaterialHash2[MaterialHash2["FreshMeat"] = 868733839] = "FreshMeat";
  MaterialHash2[MaterialHash2["DriedMeat"] = 2849806867] = "DriedMeat";
  MaterialHash2[MaterialHash2["EmissiveGlass"] = 1501078253] = "EmissiveGlass";
  MaterialHash2[MaterialHash2["EmissivePlastic"] = 1059629996] = "EmissivePlastic";
  MaterialHash2[MaterialHash2["VfxMetalElectrified"] = 3985833031] = "VfxMetalElectrified";
  MaterialHash2[MaterialHash2["VfxMetalWaterTower"] = 611561919] = "VfxMetalWaterTower";
  MaterialHash2[MaterialHash2["VfxMetalSteam"] = 3603690002] = "VfxMetalSteam";
  MaterialHash2[MaterialHash2["VfxMetalFlame"] = 332778253] = "VfxMetalFlame";
  MaterialHash2[MaterialHash2["PhysNoFriction"] = 1666473731] = "PhysNoFriction";
  MaterialHash2[MaterialHash2["PhysGolfBall"] = 2601153738] = "PhysGolfBall";
  MaterialHash2[MaterialHash2["PhysTennisBall"] = 4038262533] = "PhysTennisBall";
  MaterialHash2[MaterialHash2["PhysCaster"] = 4059664613] = "PhysCaster";
  MaterialHash2[MaterialHash2["PhysCasterRusty"] = 2016463089] = "PhysCasterRusty";
  MaterialHash2[MaterialHash2["PhysCarVoid"] = 1345867677] = "PhysCarVoid";
  MaterialHash2[MaterialHash2["PhysPedCapsule"] = 4003336261] = "PhysPedCapsule";
  MaterialHash2[MaterialHash2["PhysElectricFence"] = 3124923563] = "PhysElectricFence";
  MaterialHash2[MaterialHash2["PhysElectricMetal"] = 2281206151] = "PhysElectricMetal";
  MaterialHash2[MaterialHash2["PhysBarbedWire"] = 2751643840] = "PhysBarbedWire";
  MaterialHash2[MaterialHash2["PhysPooltableSurface"] = 605776921] = "PhysPooltableSurface";
  MaterialHash2[MaterialHash2["PhysPooltableCushion"] = 972939963] = "PhysPooltableCushion";
  MaterialHash2[MaterialHash2["PhysPooltableBall"] = 3546625734] = "PhysPooltableBall";
  MaterialHash2[MaterialHash2["Buttocks"] = 483400232] = "Buttocks";
  MaterialHash2[MaterialHash2["ThighLeft"] = 3834431425] = "ThighLeft";
  MaterialHash2[MaterialHash2["ShinLeft"] = 652772852] = "ShinLeft";
  MaterialHash2[MaterialHash2["FootLeft"] = 1926285543] = "FootLeft";
  MaterialHash2[MaterialHash2["ThighRight"] = 4057986041] = "ThighRight";
  MaterialHash2[MaterialHash2["ShinRight"] = 3848931141] = "ShinRight";
  MaterialHash2[MaterialHash2["FootRight"] = 2925830612] = "FootRight";
  MaterialHash2[MaterialHash2["Spine0"] = 2372680412] = "Spine0";
  MaterialHash2[MaterialHash2["Spine1"] = 3154854427] = "Spine1";
  MaterialHash2[MaterialHash2["Spine2"] = 1457572381] = "Spine2";
  MaterialHash2[MaterialHash2["Spine3"] = 32752644] = "Spine3";
  MaterialHash2[MaterialHash2["ClavicleLeft"] = 2825350831] = "ClavicleLeft";
  MaterialHash2[MaterialHash2["UpperArmLeft"] = 3784624938] = "UpperArmLeft";
  MaterialHash2[MaterialHash2["LowerArmLeft"] = 1045062756] = "LowerArmLeft";
  MaterialHash2[MaterialHash2["HandLeft"] = 113101985] = "HandLeft";
  MaterialHash2[MaterialHash2["ClavicleRight"] = 2737678298] = "ClavicleRight";
  MaterialHash2[MaterialHash2["UpperArmRight"] = 1501153539] = "UpperArmRight";
  MaterialHash2[MaterialHash2["LowerArmRight"] = 1777921590] = "LowerArmRight";
  MaterialHash2[MaterialHash2["HandRight"] = 2000961972] = "HandRight";
  MaterialHash2[MaterialHash2["Neck"] = 1718294164] = "Neck";
  MaterialHash2[MaterialHash2["Head"] = 3559574543] = "Head";
  MaterialHash2[MaterialHash2["AnimalDefault"] = 286224918] = "AnimalDefault";
  MaterialHash2[MaterialHash2["CarEngine"] = 2378027672] = "CarEngine";
  MaterialHash2[MaterialHash2["Puddle"] = 999829011] = "Puddle";
  MaterialHash2[MaterialHash2["ConcretePavement"] = 2015599386] = "ConcretePavement";
  MaterialHash2[MaterialHash2["BrickPavement"] = 3147605720] = "BrickPavement";
  MaterialHash2[MaterialHash2["PhysDynamicCoverBound"] = 2247498441] = "PhysDynamicCoverBound";
  MaterialHash2[MaterialHash2["VfxWoodBeerBarrel"] = 998201806] = "VfxWoodBeerBarrel";
  MaterialHash2[MaterialHash2["WoodHighFriction"] = 2154880249] = "WoodHighFriction";
  MaterialHash2[MaterialHash2["RockNoinst"] = 127813971] = "RockNoinst";
  MaterialHash2[MaterialHash2["BushesNoinst"] = 1441114862] = "BushesNoinst";
  MaterialHash2[MaterialHash2["MetalSolidRoadSurface"] = 3565854962] = "MetalSolidRoadSurface";
  MaterialHash2[MaterialHash2["StuntRampSurface"] = 2206792300] = "StuntRampSurface";
  MaterialHash2[MaterialHash2["Temp01"] = 746881105] = "Temp01";
  MaterialHash2[MaterialHash2["Temp02"] = 2316997185] = "Temp02";
  MaterialHash2[MaterialHash2["Temp03"] = 1911121241] = "Temp03";
  MaterialHash2[MaterialHash2["Temp04"] = 1923995104] = "Temp04";
  MaterialHash2[MaterialHash2["Temp05"] = 2901304848] = "Temp05";
  MaterialHash2[MaterialHash2["Temp06"] = 1061250033] = "Temp06";
  MaterialHash2[MaterialHash2["Temp07"] = 2529443614] = "Temp07";
  MaterialHash2[MaterialHash2["Temp08"] = 1343679702] = "Temp08";
  MaterialHash2[MaterialHash2["Temp09"] = 1026054937] = "Temp09";
  MaterialHash2[MaterialHash2["Temp10"] = 63305994] = "Temp10";
  MaterialHash2[MaterialHash2["Temp11"] = 47470226] = "Temp11";
  MaterialHash2[MaterialHash2["Temp12"] = 702596674] = "Temp12";
  MaterialHash2[MaterialHash2["Temp13"] = 2657481383] = "Temp13";
  MaterialHash2[MaterialHash2["Temp14"] = 3649011722] = "Temp14";
  MaterialHash2[MaterialHash2["Temp15"] = 2710969365] = "Temp15";
  MaterialHash2[MaterialHash2["Temp16"] = 2782232023] = "Temp16";
  MaterialHash2[MaterialHash2["Temp17"] = 1011960114] = "Temp17";
  MaterialHash2[MaterialHash2["Temp18"] = 1354993138] = "Temp18";
  MaterialHash2[MaterialHash2["Temp19"] = 3493162850] = "Temp19";
  MaterialHash2[MaterialHash2["Temp20"] = 2242086891] = "Temp20";
  MaterialHash2[MaterialHash2["Temp21"] = 3257211236] = "Temp21";
  MaterialHash2[MaterialHash2["Temp22"] = 3674578943] = "Temp22";
  MaterialHash2[MaterialHash2["Temp23"] = 465002639] = "Temp23";
  MaterialHash2[MaterialHash2["Temp24"] = 1963820161] = "Temp24";
  MaterialHash2[MaterialHash2["Temp25"] = 1952288305] = "Temp25";
  MaterialHash2[MaterialHash2["Temp26"] = 3178714198] = "Temp26";
  MaterialHash2[MaterialHash2["Temp27"] = 889255498] = "Temp27";
  MaterialHash2[MaterialHash2["Temp28"] = 3115293198] = "Temp28";
  MaterialHash2[MaterialHash2["Temp29"] = 1078418101] = "Temp29";
  MaterialHash2[MaterialHash2["Temp30"] = 13626292] = "Temp30";
  return MaterialHash2;
})(MaterialHash || {});

// src/fivem/hashes/PedHash.ts
var PedHash = /* @__PURE__ */ ((PedHash2) => {
  PedHash2[PedHash2["Michael"] = 225514697] = "Michael";
  PedHash2[PedHash2["Franklin"] = 2602752943] = "Franklin";
  PedHash2[PedHash2["Trevor"] = 2608926626] = "Trevor";
  PedHash2[PedHash2["Abigail"] = 1074457665] = "Abigail";
  PedHash2[PedHash2["Agent"] = 610988552] = "Agent";
  PedHash2[PedHash2["Agent14"] = 4227433577] = "Agent14";
  PedHash2[PedHash2["AmandaTownley"] = 1830688247] = "AmandaTownley";
  PedHash2[PedHash2["Andreas"] = 1206185632] = "Andreas";
  PedHash2[PedHash2["Ashley"] = 2129936603] = "Ashley";
  PedHash2[PedHash2["AviSchwartzman"] = 939183526] = "AviSchwartzman";
  PedHash2[PedHash2["Ballasog"] = 2802535058] = "Ballasog";
  PedHash2[PedHash2["Bankman"] = 2426248831] = "Bankman";
  PedHash2[PedHash2["Barry"] = 797459875] = "Barry";
  PedHash2[PedHash2["Bestmen"] = 1464257942] = "Bestmen";
  PedHash2[PedHash2["Beverly"] = 3181518428] = "Beverly";
  PedHash2[PedHash2["Brad"] = 3183167778] = "Brad";
  PedHash2[PedHash2["Bride"] = 1633872967] = "Bride";
  PedHash2[PedHash2["Car3Guy1"] = 2230970679] = "Car3Guy1";
  PedHash2[PedHash2["Car3Guy2"] = 1975732938] = "Car3Guy2";
  PedHash2[PedHash2["Casey"] = 3774489940] = "Casey";
  PedHash2[PedHash2["Chef"] = 1240128502] = "Chef";
  PedHash2[PedHash2["Chef2"] = 2240322243] = "Chef2";
  PedHash2[PedHash2["Clay"] = 1825562762] = "Clay";
  PedHash2[PedHash2["Claypain"] = 2634057640] = "Claypain";
  PedHash2[PedHash2["Cletus"] = 3865252245] = "Cletus";
  PedHash2[PedHash2["CrisFormage"] = 678319271] = "CrisFormage";
  PedHash2[PedHash2["Dale"] = 1182012905] = "Dale";
  PedHash2[PedHash2["DaveNorton"] = 365775923] = "DaveNorton";
  PedHash2[PedHash2["Denise"] = 2181772221] = "Denise";
  PedHash2[PedHash2["Devin"] = 1952555184] = "Devin";
  PedHash2[PedHash2["DoaMan"] = 1646160893] = "DoaMan";
  PedHash2[PedHash2["Dom"] = 2620240008] = "Dom";
  PedHash2[PedHash2["Dreyfuss"] = 3666413874] = "Dreyfuss";
  PedHash2[PedHash2["DrFriedlander"] = 3422293493] = "DrFriedlander";
  PedHash2[PedHash2["EdToh"] = 712602007] = "EdToh";
  PedHash2[PedHash2["Fabien"] = 3499148112] = "Fabien";
  PedHash2[PedHash2["FbiSuit01"] = 988062523] = "FbiSuit01";
  PedHash2[PedHash2["Floyd"] = 2981205682] = "Floyd";
  PedHash2[PedHash2["G"] = 2216405299] = "G";
  PedHash2[PedHash2["Groom"] = 4274948997] = "Groom";
  PedHash2[PedHash2["Hao"] = 1704428387] = "Hao";
  PedHash2[PedHash2["Hunter"] = 3457361118] = "Hunter";
  PedHash2[PedHash2["Janet"] = 225287241] = "Janet";
  PedHash2[PedHash2["JayNorris"] = 2050158196] = "JayNorris";
  PedHash2[PedHash2["Jewelass"] = 257763003] = "Jewelass";
  PedHash2[PedHash2["JimmyBoston"] = 3986688045] = "JimmyBoston";
  PedHash2[PedHash2["JimmyDisanto"] = 1459905209] = "JimmyDisanto";
  PedHash2[PedHash2["JoeMinuteman"] = 3189787803] = "JoeMinuteman";
  PedHash2[PedHash2["JohnnyKlebitz"] = 2278195374] = "JohnnyKlebitz";
  PedHash2[PedHash2["Josef"] = 3776618420] = "Josef";
  PedHash2[PedHash2["Josh"] = 2040438510] = "Josh";
  PedHash2[PedHash2["KarenDaniels"] = 3948009817] = "KarenDaniels";
  PedHash2[PedHash2["KerryMcintosh"] = 1530648845] = "KerryMcintosh";
  PedHash2[PedHash2["LamarDavis"] = 1706635382] = "LamarDavis";
  PedHash2[PedHash2["Lazlow"] = 3756278757] = "Lazlow";
  PedHash2[PedHash2["LesterCrest"] = 1302784073] = "LesterCrest";
  PedHash2[PedHash2["Lifeinvad01"] = 1401530684] = "Lifeinvad01";
  PedHash2[PedHash2["Lifeinvad02"] = 666718676] = "Lifeinvad02";
  PedHash2[PedHash2["Magenta"] = 4242313482] = "Magenta";
  PedHash2[PedHash2["Malc"] = 4055673113] = "Malc";
  PedHash2[PedHash2["Manuel"] = 4248931856] = "Manuel";
  PedHash2[PedHash2["Marnie"] = 411185872] = "Marnie";
  PedHash2[PedHash2["MaryAnn"] = 2741999622] = "MaryAnn";
  PedHash2[PedHash2["Maude"] = 1005070462] = "Maude";
  PedHash2[PedHash2["Michelle"] = 3214308084] = "Michelle";
  PedHash2[PedHash2["Milton"] = 3408943538] = "Milton";
  PedHash2[PedHash2["Molly"] = 2936266209] = "Molly";
  PedHash2[PedHash2["MrK"] = 3990661997] = "MrK";
  PedHash2[PedHash2["MrsPhillips"] = 946007720] = "MrsPhillips";
  PedHash2[PedHash2["MrsThornhill"] = 503621995] = "MrsThornhill";
  PedHash2[PedHash2["Natalia"] = 3726105915] = "Natalia";
  PedHash2[PedHash2["NervousRon"] = 3170921201] = "NervousRon";
  PedHash2[PedHash2["Nigel"] = 3367442045] = "Nigel";
  PedHash2[PedHash2["OldMan1a"] = 1906124788] = "OldMan1a";
  PedHash2[PedHash2["OldMan2"] = 4011150407] = "OldMan2";
  PedHash2[PedHash2["Omega"] = 1625728984] = "Omega";
  PedHash2[PedHash2["ONeil"] = 768005095] = "ONeil";
  PedHash2[PedHash2["Orleans"] = 1641334641] = "Orleans";
  PedHash2[PedHash2["Ortega"] = 648372919] = "Ortega";
  PedHash2[PedHash2["Paper"] = 2577072326] = "Paper";
  PedHash2[PedHash2["Patricia"] = 3312325004] = "Patricia";
  PedHash2[PedHash2["Popov"] = 645279998] = "Popov";
  PedHash2[PedHash2["Paige"] = 357551935] = "Paige";
  PedHash2[PedHash2["Priest"] = 1681385341] = "Priest";
  PedHash2[PedHash2["PrologueDriver"] = 2237544099] = "PrologueDriver";
  PedHash2[PedHash2["PrologueSec01"] = 1888624839] = "PrologueSec01";
  PedHash2[PedHash2["PrologueSec02"] = 666086773] = "PrologueSec02";
  PedHash2[PedHash2["RampGang"] = 3845001836] = "RampGang";
  PedHash2[PedHash2["RampHic"] = 1165307954] = "RampHic";
  PedHash2[PedHash2["RampHipster"] = 3740245870] = "RampHipster";
  PedHash2[PedHash2["RampMex"] = 3870061732] = "RampMex";
  PedHash2[PedHash2["Rashkovsky"] = 940326374] = "Rashkovsky";
  PedHash2[PedHash2["RoccoPelosi"] = 3585757951] = "RoccoPelosi";
  PedHash2[PedHash2["RussianDrunk"] = 1024089777] = "RussianDrunk";
  PedHash2[PedHash2["ScreenWriter"] = 4293277303] = "ScreenWriter";
  PedHash2[PedHash2["SiemonYetarian"] = 1283141381] = "SiemonYetarian";
  PedHash2[PedHash2["Solomon"] = 2260598310] = "Solomon";
  PedHash2[PedHash2["SteveHains"] = 941695432] = "SteveHains";
  PedHash2[PedHash2["Stretch"] = 915948376] = "Stretch";
  PedHash2[PedHash2["Talina"] = 3885222120] = "Talina";
  PedHash2[PedHash2["Tanisha"] = 226559113] = "Tanisha";
  PedHash2[PedHash2["TaoCheng"] = 3697041061] = "TaoCheng";
  PedHash2[PedHash2["TaosTranslator"] = 2089096292] = "TaosTranslator";
  PedHash2[PedHash2["TennisCoach"] = 2721800023] = "TennisCoach";
  PedHash2[PedHash2["Terry"] = 1728056212] = "Terry";
  PedHash2[PedHash2["TomEpsilon"] = 3447159466] = "TomEpsilon";
  PedHash2[PedHash2["Tonya"] = 3402126148] = "Tonya";
  PedHash2[PedHash2["TracyDisanto"] = 3728026165] = "TracyDisanto";
  PedHash2[PedHash2["TrafficWarden"] = 1461287021] = "TrafficWarden";
  PedHash2[PedHash2["TylerDixon"] = 1382414087] = "TylerDixon";
  PedHash2[PedHash2["VagosSpeak"] = 4194109068] = "VagosSpeak";
  PedHash2[PedHash2["Wade"] = 2459507570] = "Wade";
  PedHash2[PedHash2["WeiCheng"] = 2867128955] = "WeiCheng";
  PedHash2[PedHash2["Zimbor"] = 188012277] = "Zimbor";
  PedHash2[PedHash2["AbigailCutscene"] = 2306246977] = "AbigailCutscene";
  PedHash2[PedHash2["AgentCutscene"] = 3614493108] = "AgentCutscene";
  PedHash2[PedHash2["Agent14Cutscene"] = 1841036427] = "Agent14Cutscene";
  PedHash2[PedHash2["AmandaTownleyCutscene"] = 2515474659] = "AmandaTownleyCutscene";
  PedHash2[PedHash2["AndreasCutscene"] = 3881194279] = "AndreasCutscene";
  PedHash2[PedHash2["AnitaCutscene"] = 117698822] = "AnitaCutscene";
  PedHash2[PedHash2["AntonCutscene"] = 2781317046] = "AntonCutscene";
  PedHash2[PedHash2["AshleyCutscene"] = 650367097] = "AshleyCutscene";
  PedHash2[PedHash2["AviSchwartzmanCutscene"] = 2560490906] = "AviSchwartzmanCutscene";
  PedHash2[PedHash2["BallasogCutscene"] = 2884567044] = "BallasogCutscene";
  PedHash2[PedHash2["BankmanCutscene"] = 2539657518] = "BankmanCutscene";
  PedHash2[PedHash2["BarryCutscene"] = 1767447799] = "BarryCutscene";
  PedHash2[PedHash2["BeverlyCutscene"] = 3027157846] = "BeverlyCutscene";
  PedHash2[PedHash2["BradCutscene"] = 4024807398] = "BradCutscene";
  PedHash2[PedHash2["BradCadaverCutscene"] = 1915268960] = "BradCadaverCutscene";
  PedHash2[PedHash2["BrideCutscene"] = 2193587873] = "BrideCutscene";
  PedHash2[PedHash2["BurgerDrugCutscene"] = 2363277399] = "BurgerDrugCutscene";
  PedHash2[PedHash2["Car3Guy1Cutscene"] = 71501447] = "Car3Guy1Cutscene";
  PedHash2[PedHash2["Car3Guy2Cutscene"] = 327394568] = "Car3Guy2Cutscene";
  PedHash2[PedHash2["CarBuyerCutscene"] = 2362341647] = "CarBuyerCutscene";
  PedHash2[PedHash2["CaseyCutscene"] = 3935738944] = "CaseyCutscene";
  PedHash2[PedHash2["ChefCutscene"] = 2739391114] = "ChefCutscene";
  PedHash2[PedHash2["Chef2Cutscene"] = 2925257274] = "Chef2Cutscene";
  PedHash2[PedHash2["ChinGoonCutscene"] = 2831296918] = "ChinGoonCutscene";
  PedHash2[PedHash2["ClayCutscene"] = 3687553076] = "ClayCutscene";
  PedHash2[PedHash2["CletusCutscene"] = 3404326357] = "CletusCutscene";
  PedHash2[PedHash2["CopCutscene"] = 2595446627] = "CopCutscene";
  PedHash2[PedHash2["CrisFormageCutscene"] = 3253960934] = "CrisFormageCutscene";
  PedHash2[PedHash2["CustomerCutscene"] = 2756669323] = "CustomerCutscene";
  PedHash2[PedHash2["DaleCutscene"] = 216536661] = "DaleCutscene";
  PedHash2[PedHash2["DaveNortonCutscene"] = 2240226444] = "DaveNortonCutscene";
  PedHash2[PedHash2["DebraCutscene"] = 3973074921] = "DebraCutscene";
  PedHash2[PedHash2["DeniseCutscene"] = 1870669624] = "DeniseCutscene";
  PedHash2[PedHash2["DeniseFriendCutscene"] = 3045926185] = "DeniseFriendCutscene";
  PedHash2[PedHash2["DevinCutscene"] = 788622594] = "DevinCutscene";
  PedHash2[PedHash2["DomCutscene"] = 1198698306] = "DomCutscene";
  PedHash2[PedHash2["DreyfussCutscene"] = 1012965715] = "DreyfussCutscene";
  PedHash2[PedHash2["DrFriedlanderCutscene"] = 2745392175] = "DrFriedlanderCutscene";
  PedHash2[PedHash2["FabienCutscene"] = 1191403201] = "FabienCutscene";
  PedHash2[PedHash2["FbiSuit01Cutscene"] = 1482427218] = "FbiSuit01Cutscene";
  PedHash2[PedHash2["FloydCutscene"] = 103106535] = "FloydCutscene";
  PedHash2[PedHash2["FosRepCutscene"] = 466359675] = "FosRepCutscene";
  PedHash2[PedHash2["GCutscene"] = 2727244247] = "GCutscene";
  PedHash2[PedHash2["GroomCutscene"] = 2058033618] = "GroomCutscene";
  PedHash2[PedHash2["GroveStrDlrCutscene"] = 3898166818] = "GroveStrDlrCutscene";
  PedHash2[PedHash2["GuadalopeCutscene"] = 261428209] = "GuadalopeCutscene";
  PedHash2[PedHash2["GurkCutscene"] = 3272931111] = "GurkCutscene";
  PedHash2[PedHash2["HaoCutscene"] = 3969814300] = "HaoCutscene";
  PedHash2[PedHash2["HughCutscene"] = 1863555924] = "HughCutscene";
  PedHash2[PedHash2["HunterCutscene"] = 1531218220] = "HunterCutscene";
  PedHash2[PedHash2["ImranCutscene"] = 3812756443] = "ImranCutscene";
  PedHash2[PedHash2["JackHowitzerCutscene"] = 1153203121] = "JackHowitzerCutscene";
  PedHash2[PedHash2["JanetCutscene"] = 808778210] = "JanetCutscene";
  PedHash2[PedHash2["JanitorCutscene"] = 3254803008] = "JanitorCutscene";
  PedHash2[PedHash2["JewelassCutscene"] = 1145088004] = "JewelassCutscene";
  PedHash2[PedHash2["JimmyBostonCutscene"] = 60192701] = "JimmyBostonCutscene";
  PedHash2[PedHash2["JimmyDisantoCutscene"] = 3100414644] = "JimmyDisantoCutscene";
  PedHash2[PedHash2["JoeMinutemanCutscene"] = 4036845097] = "JoeMinutemanCutscene";
  PedHash2[PedHash2["JohnnyKlebitzCutscene"] = 4203395201] = "JohnnyKlebitzCutscene";
  PedHash2[PedHash2["JosefCutscene"] = 1167549130] = "JosefCutscene";
  PedHash2[PedHash2["JoshCutscene"] = 1158606749] = "JoshCutscene";
  PedHash2[PedHash2["KarenDanielsCutscene"] = 1269774364] = "KarenDanielsCutscene";
  PedHash2[PedHash2["LamarDavisCutscene"] = 1162230285] = "LamarDavisCutscene";
  PedHash2[PedHash2["LazlowCutscene"] = 949295643] = "LazlowCutscene";
  PedHash2[PedHash2["LesterCrestCutscene"] = 3046438339] = "LesterCrestCutscene";
  PedHash2[PedHash2["Lifeinvad01Cutscene"] = 1918178165] = "Lifeinvad01Cutscene";
  PedHash2[PedHash2["MagentaCutscene"] = 1477887514] = "MagentaCutscene";
  PedHash2[PedHash2["ManuelCutscene"] = 4222842058] = "ManuelCutscene";
  PedHash2[PedHash2["MarnieCutscene"] = 1464721716] = "MarnieCutscene";
  PedHash2[PedHash2["MartinMadrazoCutscene"] = 1129928304] = "MartinMadrazoCutscene";
  PedHash2[PedHash2["MaryannCutscene"] = 161007533] = "MaryannCutscene";
  PedHash2[PedHash2["MaudeCutscene"] = 3166991819] = "MaudeCutscene";
  PedHash2[PedHash2["MerryWeatherCutscene"] = 1631478380] = "MerryWeatherCutscene";
  PedHash2[PedHash2["MichelleCutscene"] = 1890499016] = "MichelleCutscene";
  PedHash2[PedHash2["MiltonCutscene"] = 3077190415] = "MiltonCutscene";
  PedHash2[PedHash2["MollyCutscene"] = 1167167044] = "MollyCutscene";
  PedHash2[PedHash2["MoviePremFemaleCutscene"] = 1270514905] = "MoviePremFemaleCutscene";
  PedHash2[PedHash2["MoviePremMaleCutscene"] = 2372398717] = "MoviePremMaleCutscene";
  PedHash2[PedHash2["MrKCutscene"] = 3284966005] = "MrKCutscene";
  PedHash2[PedHash2["MrsPhillipsCutscene"] = 3422397391] = "MrsPhillipsCutscene";
  PedHash2[PedHash2["MrsThornhillCutscene"] = 1334976110] = "MrsThornhillCutscene";
  PedHash2[PedHash2["NataliaCutscene"] = 1325314544] = "NataliaCutscene";
  PedHash2[PedHash2["NervousRonCutscene"] = 2023152276] = "NervousRonCutscene";
  PedHash2[PedHash2["NigelCutscene"] = 3779566603] = "NigelCutscene";
  PedHash2[PedHash2["OldMan1aCutscene"] = 518814684] = "OldMan1aCutscene";
  PedHash2[PedHash2["OldMan2Cutscene"] = 2566514544] = "OldMan2Cutscene";
  PedHash2[PedHash2["OmegaCutscene"] = 2339419141] = "OmegaCutscene";
  PedHash2[PedHash2["OrleansCutscene"] = 2905870170] = "OrleansCutscene";
  PedHash2[PedHash2["OrtegaCutscene"] = 3235579087] = "OrtegaCutscene";
  PedHash2[PedHash2["OscarCutscene"] = 4095687067] = "OscarCutscene";
  PedHash2[PedHash2["PaigeCutscene"] = 1528799427] = "PaigeCutscene";
  PedHash2[PedHash2["PaperCutscene"] = 1798879480] = "PaperCutscene";
  PedHash2[PedHash2["PopovCutscene"] = 1635617250] = "PopovCutscene";
  PedHash2[PedHash2["PatriciaCutscene"] = 3750433537] = "PatriciaCutscene";
  PedHash2[PedHash2["PornDudesCutscene"] = 793443893] = "PornDudesCutscene";
  PedHash2[PedHash2["PriestCutscene"] = 1299047806] = "PriestCutscene";
  PedHash2[PedHash2["PrologueDriverCutscene"] = 4027271643] = "PrologueDriverCutscene";
  PedHash2[PedHash2["PrologueSec01Cutscene"] = 2141384740] = "PrologueSec01Cutscene";
  PedHash2[PedHash2["PrologueSec02Cutscene"] = 512955554] = "PrologueSec02Cutscene";
  PedHash2[PedHash2["RampGangCutscene"] = 3263172030] = "RampGangCutscene";
  PedHash2[PedHash2["RampHicCutscene"] = 2240582840] = "RampHicCutscene";
  PedHash2[PedHash2["RampHipsterCutscene"] = 569740212] = "RampHipsterCutscene";
  PedHash2[PedHash2["RampMarineCutscene"] = 1634506681] = "RampMarineCutscene";
  PedHash2[PedHash2["RampMexCutscene"] = 4132362192] = "RampMexCutscene";
  PedHash2[PedHash2["RashkovskyCutscene"] = 411081129] = "RashkovskyCutscene";
  PedHash2[PedHash2["ReporterCutscene"] = 776079908] = "ReporterCutscene";
  PedHash2[PedHash2["RoccoPelosiCutscene"] = 2858686092] = "RoccoPelosiCutscene";
  PedHash2[PedHash2["RussianDrunkCutscene"] = 1179785778] = "RussianDrunkCutscene";
  PedHash2[PedHash2["ScreenWriterCutscene"] = 2346790124] = "ScreenWriterCutscene";
  PedHash2[PedHash2["SiemonYetarianCutscene"] = 3230888450] = "SiemonYetarianCutscene";
  PedHash2[PedHash2["SolomonCutscene"] = 4140949582] = "SolomonCutscene";
  PedHash2[PedHash2["SteveHainsCutscene"] = 2766184958] = "SteveHainsCutscene";
  PedHash2[PedHash2["StretchCutscene"] = 2302502917] = "StretchCutscene";
  PedHash2[PedHash2["Stripper01Cutscene"] = 2934601397] = "Stripper01Cutscene";
  PedHash2[PedHash2["Stripper02Cutscene"] = 2168724337] = "Stripper02Cutscene";
  PedHash2[PedHash2["TanishaCutscene"] = 1123963760] = "TanishaCutscene";
  PedHash2[PedHash2["TaoChengCutscene"] = 2288257085] = "TaoChengCutscene";
  PedHash2[PedHash2["TaosTranslatorCutscene"] = 1397974313] = "TaosTranslatorCutscene";
  PedHash2[PedHash2["TennisCoachCutscene"] = 1545995274] = "TennisCoachCutscene";
  PedHash2[PedHash2["TerryCutscene"] = 978452933] = "TerryCutscene";
  PedHash2[PedHash2["TomCutscene"] = 1776856003] = "TomCutscene";
  PedHash2[PedHash2["TomEpsilonCutscene"] = 2349847778] = "TomEpsilonCutscene";
  PedHash2[PedHash2["TonyaCutscene"] = 1665391897] = "TonyaCutscene";
  PedHash2[PedHash2["TracyDisantoCutscene"] = 101298480] = "TracyDisantoCutscene";
  PedHash2[PedHash2["TrafficWardenCutscene"] = 3727243251] = "TrafficWardenCutscene";
  PedHash2[PedHash2["UndercoverCopCutscene"] = 4017642090] = "UndercoverCopCutscene";
  PedHash2[PedHash2["VagosSpeakCutscene"] = 1224690857] = "VagosSpeakCutscene";
  PedHash2[PedHash2["WadeCutscene"] = 3529955798] = "WadeCutscene";
  PedHash2[PedHash2["WeiChengCutscene"] = 819699067] = "WeiChengCutscene";
  PedHash2[PedHash2["ZimborCutscene"] = 3937184496] = "ZimborCutscene";
  PedHash2[PedHash2["Boar"] = 3462393972] = "Boar";
  PedHash2[PedHash2["Cat"] = 1462895032] = "Cat";
  PedHash2[PedHash2["ChickenHawk"] = 2864127842] = "ChickenHawk";
  PedHash2[PedHash2["Chimp"] = 2825402133] = "Chimp";
  PedHash2[PedHash2["Chop"] = 351016938] = "Chop";
  PedHash2[PedHash2["Cormorant"] = 1457690978] = "Cormorant";
  PedHash2[PedHash2["Cow"] = 4244282910] = "Cow";
  PedHash2[PedHash2["Coyote"] = 1682622302] = "Coyote";
  PedHash2[PedHash2["Crow"] = 402729631] = "Crow";
  PedHash2[PedHash2["Deer"] = 3630914197] = "Deer";
  PedHash2[PedHash2["Dolphin"] = 2344268885] = "Dolphin";
  PedHash2[PedHash2["Fish"] = 802685111] = "Fish";
  PedHash2[PedHash2["Hen"] = 1794449327] = "Hen";
  PedHash2[PedHash2["HammerShark"] = 1015224100] = "HammerShark";
  PedHash2[PedHash2["Humpback"] = 1193010354] = "Humpback";
  PedHash2[PedHash2["Husky"] = 1318032802] = "Husky";
  PedHash2[PedHash2["KillerWhale"] = 2374682809] = "KillerWhale";
  PedHash2[PedHash2["MountainLion"] = 307287994] = "MountainLion";
  PedHash2[PedHash2["Pig"] = 2971380566] = "Pig";
  PedHash2[PedHash2["Pigeon"] = 111281960] = "Pigeon";
  PedHash2[PedHash2["Poodle"] = 1125994524] = "Poodle";
  PedHash2[PedHash2["Pug"] = 1832265812] = "Pug";
  PedHash2[PedHash2["Rabbit"] = 3753204865] = "Rabbit";
  PedHash2[PedHash2["Rat"] = 3283429734] = "Rat";
  PedHash2[PedHash2["Retriever"] = 882848737] = "Retriever";
  PedHash2[PedHash2["Rhesus"] = 3268439891] = "Rhesus";
  PedHash2[PedHash2["Rottweiler"] = 2506301981] = "Rottweiler";
  PedHash2[PedHash2["Seagull"] = 3549666813] = "Seagull";
  PedHash2[PedHash2["Shepherd"] = 1126154828] = "Shepherd";
  PedHash2[PedHash2["Stingray"] = 2705875277] = "Stingray";
  PedHash2[PedHash2["TigerShark"] = 113504370] = "TigerShark";
  PedHash2[PedHash2["Westy"] = 2910340283] = "Westy";
  PedHash2[PedHash2["Abner"] = 4037813798] = "Abner";
  PedHash2[PedHash2["AlDiNapoli"] = 4042020578] = "AlDiNapoli";
  PedHash2[PedHash2["Antonb"] = 3479321132] = "Antonb";
  PedHash2[PedHash2["Armoured01"] = 3455013896] = "Armoured01";
  PedHash2[PedHash2["Babyd"] = 3658575486] = "Babyd";
  PedHash2[PedHash2["Bankman01"] = 3272005365] = "Bankman01";
  PedHash2[PedHash2["Baygor"] = 1380197501] = "Baygor";
  PedHash2[PedHash2["Benny"] = 3300333010] = "Benny";
  PedHash2[PedHash2["BikeHire01"] = 1984382277] = "BikeHire01";
  PedHash2[PedHash2["BikerChic"] = 4198014287] = "BikerChic";
  PedHash2[PedHash2["BoatStaff01M"] = 3361671816] = "BoatStaff01M";
  PedHash2[PedHash2["BoatStaff01F"] = 848542878] = "BoatStaff01F";
  PedHash2[PedHash2["BurgerDrug"] = 2340239206] = "BurgerDrug";
  PedHash2[PedHash2["Chip"] = 610290475] = "Chip";
  PedHash2[PedHash2["Claude01"] = 3237179831] = "Claude01";
  PedHash2[PedHash2["ClubHouseBar01"] = 1914945105] = "ClubHouseBar01";
  PedHash2[PedHash2["CocaineFemale01"] = 1897303236] = "CocaineFemale01";
  PedHash2[PedHash2["CocaineMale01"] = 3455927962] = "CocaineMale01";
  PedHash2[PedHash2["ComJane"] = 3064628686] = "ComJane";
  PedHash2[PedHash2["Corpse01"] = 773063444] = "Corpse01";
  PedHash2[PedHash2["Corpse02"] = 228356856] = "Corpse02";
  PedHash2[PedHash2["CounterfeitFemale01"] = 1074385436] = "CounterfeitFemale01";
  PedHash2[PedHash2["CounterfeitMale01"] = 2625926338] = "CounterfeitMale01";
  PedHash2[PedHash2["Cyclist01"] = 755956971] = "Cyclist01";
  PedHash2[PedHash2["DeadHooker"] = 1943971979] = "DeadHooker";
  PedHash2[PedHash2["Drowned"] = 3623056905] = "Drowned";
  PedHash2[PedHash2["ExArmy01"] = 1161072059] = "ExArmy01";
  PedHash2[PedHash2["ExecutivePAMale01"] = 983887149] = "ExecutivePAMale01";
  PedHash2[PedHash2["ExecutivePAFemale01"] = 2913175640] = "ExecutivePAFemale01";
  PedHash2[PedHash2["Famdd01"] = 866411749] = "Famdd01";
  PedHash2[PedHash2["FibArchitect"] = 874722259] = "FibArchitect";
  PedHash2[PedHash2["FibMugger01"] = 2243544680] = "FibMugger01";
  PedHash2[PedHash2["FibSec01"] = 1558115333] = "FibSec01";
  PedHash2[PedHash2["FilmDirector"] = 728636342] = "FilmDirector";
  PedHash2[PedHash2["FilmNoir"] = 732742363] = "FilmNoir";
  PedHash2[PedHash2["Finguru01"] = 1189322339] = "Finguru01";
  PedHash2[PedHash2["ForgeryFemale01"] = 3691903615] = "ForgeryFemale01";
  PedHash2[PedHash2["ForgeryMale01"] = 325317957] = "ForgeryMale01";
  PedHash2[PedHash2["FreemodeFemale01"] = 2627665880] = "FreemodeFemale01";
  PedHash2[PedHash2["FreemodeMale01"] = 1885233650] = "FreemodeMale01";
  PedHash2[PedHash2["Glenstank01"] = 1169888870] = "Glenstank01";
  PedHash2[PedHash2["Griff01"] = 3293887675] = "Griff01";
  PedHash2[PedHash2["Guido01"] = 3333724719] = "Guido01";
  PedHash2[PedHash2["GunVend01"] = 3005388626] = "GunVend01";
  PedHash2[PedHash2["Hacker"] = 2579169528] = "Hacker";
  PedHash2[PedHash2["HeliStaff01"] = 431423238] = "HeliStaff01";
  PedHash2[PedHash2["Hippie01"] = 4030826507] = "Hippie01";
  PedHash2[PedHash2["Hotposh01"] = 2526768638] = "Hotposh01";
  PedHash2[PedHash2["Imporage"] = 880829941] = "Imporage";
  PedHash2[PedHash2["Jesus01"] = 3459037009] = "Jesus01";
  PedHash2[PedHash2["Jewelass01"] = 4040474158] = "Jewelass01";
  PedHash2[PedHash2["JewelSec01"] = 2899099062] = "JewelSec01";
  PedHash2[PedHash2["JewelThief"] = 3872144604] = "JewelThief";
  PedHash2[PedHash2["Justin"] = 2109968527] = "Justin";
  PedHash2[PedHash2["Mani"] = 3367706194] = "Mani";
  PedHash2[PedHash2["Markfost"] = 479578891] = "Markfost";
  PedHash2[PedHash2["Marston01"] = 943915367] = "Marston01";
  PedHash2[PedHash2["MethFemale01"] = 3778572496] = "MethFemale01";
  PedHash2[PedHash2["MethMale01"] = 1293671805] = "MethMale01";
  PedHash2[PedHash2["MilitaryBum"] = 1191548746] = "MilitaryBum";
  PedHash2[PedHash2["Miranda"] = 1095737979] = "Miranda";
  PedHash2[PedHash2["Mistress"] = 1573528872] = "Mistress";
  PedHash2[PedHash2["Misty01"] = 3509125021] = "Misty01";
  PedHash2[PedHash2["MovieStar"] = 894928436] = "MovieStar";
  PedHash2[PedHash2["MPros01"] = 1822283721] = "MPros01";
  PedHash2[PedHash2["Niko01"] = 4007317449] = "Niko01";
  PedHash2[PedHash2["Paparazzi"] = 1346941736] = "Paparazzi";
  PedHash2[PedHash2["Party01"] = 921110016] = "Party01";
  PedHash2[PedHash2["PartyTarget"] = 2180468199] = "PartyTarget";
  PedHash2[PedHash2["PestContDriver"] = 994527967] = "PestContDriver";
  PedHash2[PedHash2["PestContGunman"] = 193469166] = "PestContGunman";
  PedHash2[PedHash2["Pogo01"] = 3696858125] = "Pogo01";
  PedHash2[PedHash2["Poppymich"] = 602513566] = "Poppymich";
  PedHash2[PedHash2["Princess"] = 3538133636] = "Princess";
  PedHash2[PedHash2["Prisoner01"] = 2073775040] = "Prisoner01";
  PedHash2[PedHash2["PrologueHostage01"] = 3306347811] = "PrologueHostage01";
  PedHash2[PedHash2["PrologueMournFemale01"] = 2718472679] = "PrologueMournFemale01";
  PedHash2[PedHash2["PrologueMournMale01"] = 3465937675] = "PrologueMournMale01";
  PedHash2[PedHash2["RivalPaparazzi"] = 1624626906] = "RivalPaparazzi";
  PedHash2[PedHash2["ShopKeep01"] = 416176080] = "ShopKeep01";
  PedHash2[PedHash2["SpyActor"] = 2886641112] = "SpyActor";
  PedHash2[PedHash2["SpyActress"] = 1535236204] = "SpyActress";
  PedHash2[PedHash2["StripperLite"] = 695248020] = "StripperLite";
  PedHash2[PedHash2["Taphillbilly"] = 2585681490] = "Taphillbilly";
  PedHash2[PedHash2["Tramp01"] = 1787764635] = "Tramp01";
  PedHash2[PedHash2["VagosFun01"] = 3299219389] = "VagosFun01";
  PedHash2[PedHash2["WillyFist"] = 2423691919] = "WillyFist";
  PedHash2[PedHash2["WeedFemale01"] = 1596374223] = "WeedFemale01";
  PedHash2[PedHash2["WeedMale01"] = 2648833641] = "WeedMale01";
  PedHash2[PedHash2["Zombie01"] = 2890614022] = "Zombie01";
  PedHash2[PedHash2["Acult01AMM"] = 1413662315] = "Acult01AMM";
  PedHash2[PedHash2["Acult01AMO"] = 1430544400] = "Acult01AMO";
  PedHash2[PedHash2["Acult01AMY"] = 3043264555] = "Acult01AMY";
  PedHash2[PedHash2["Acult02AMO"] = 1268862154] = "Acult02AMO";
  PedHash2[PedHash2["Acult02AMY"] = 2162532142] = "Acult02AMY";
  PedHash2[PedHash2["AfriAmer01AMM"] = 3513928062] = "AfriAmer01AMM";
  PedHash2[PedHash2["Airhostess01SFY"] = 1567728751] = "Airhostess01SFY";
  PedHash2[PedHash2["AirworkerSMY"] = 1644266841] = "AirworkerSMY";
  PedHash2[PedHash2["Ammucity01SMY"] = 2651349821] = "Ammucity01SMY";
  PedHash2[PedHash2["AmmuCountrySMM"] = 233415434] = "AmmuCountrySMM";
  PedHash2[PedHash2["ArmBoss01GMM"] = 4058522530] = "ArmBoss01GMM";
  PedHash2[PedHash2["ArmGoon01GMM"] = 4255728232] = "ArmGoon01GMM";
  PedHash2[PedHash2["ArmGoon02GMY"] = 3310258058] = "ArmGoon02GMY";
  PedHash2[PedHash2["ArmLieut01GMM"] = 3882958867] = "ArmLieut01GMM";
  PedHash2[PedHash2["Armoured01SMM"] = 2512875213] = "Armoured01SMM";
  PedHash2[PedHash2["Armoured02SMM"] = 1669696074] = "Armoured02SMM";
  PedHash2[PedHash2["Armymech01SMY"] = 1657546978] = "Armymech01SMY";
  PedHash2[PedHash2["Autopsy01SMY"] = 2988916046] = "Autopsy01SMY";
  PedHash2[PedHash2["Autoshop01SMM"] = 68070371] = "Autoshop01SMM";
  PedHash2[PedHash2["Autoshop02SMM"] = 4033578141] = "Autoshop02SMM";
  PedHash2[PedHash2["Azteca01GMY"] = 1752208920] = "Azteca01GMY";
  PedHash2[PedHash2["BallaEast01GMY"] = 4096714883] = "BallaEast01GMY";
  PedHash2[PedHash2["BallaOrig01GMY"] = 588969535] = "BallaOrig01GMY";
  PedHash2[PedHash2["Ballas01GFY"] = 361513884] = "Ballas01GFY";
  PedHash2[PedHash2["BallaSout01GMY"] = 599294057] = "BallaSout01GMY";
  PedHash2[PedHash2["Barman01SMY"] = 3852538118] = "Barman01SMY";
  PedHash2[PedHash2["Bartender01SFY"] = 2014052797] = "Bartender01SFY";
  PedHash2[PedHash2["Baywatch01SFY"] = 1250841910] = "Baywatch01SFY";
  PedHash2[PedHash2["Baywatch01SMY"] = 189425762] = "Baywatch01SMY";
  PedHash2[PedHash2["Beach01AFM"] = 808859815] = "Beach01AFM";
  PedHash2[PedHash2["Beach01AFY"] = 3349113128] = "Beach01AFY";
  PedHash2[PedHash2["Beach01AMM"] = 1077785853] = "Beach01AMM";
  PedHash2[PedHash2["Beach01AMO"] = 2217202584] = "Beach01AMO";
  PedHash2[PedHash2["Beach01AMY"] = 3523131524] = "Beach01AMY";
  PedHash2[PedHash2["Beach02AMM"] = 2021631368] = "Beach02AMM";
  PedHash2[PedHash2["Beach02AMY"] = 600300561] = "Beach02AMY";
  PedHash2[PedHash2["Beach03AMY"] = 3886638041] = "Beach03AMY";
  PedHash2[PedHash2["Beachvesp01AMY"] = 2114544056] = "Beachvesp01AMY";
  PedHash2[PedHash2["Beachvesp02AMY"] = 3394697810] = "Beachvesp02AMY";
  PedHash2[PedHash2["Bevhills01AFM"] = 3188223741] = "Bevhills01AFM";
  PedHash2[PedHash2["Bevhills01AFY"] = 1146800212] = "Bevhills01AFY";
  PedHash2[PedHash2["Bevhills01AMM"] = 1423699487] = "Bevhills01AMM";
  PedHash2[PedHash2["Bevhills01AMY"] = 1982350912] = "Bevhills01AMY";
  PedHash2[PedHash2["Bevhills02AFM"] = 2688103263] = "Bevhills02AFM";
  PedHash2[PedHash2["Bevhills02AFY"] = 1546450936] = "Bevhills02AFY";
  PedHash2[PedHash2["Bevhills02AMM"] = 1068876755] = "Bevhills02AMM";
  PedHash2[PedHash2["Bevhills02AMY"] = 1720428295] = "Bevhills02AMY";
  PedHash2[PedHash2["Bevhills03AFY"] = 549978415] = "Bevhills03AFY";
  PedHash2[PedHash2["Bevhills04AFY"] = 920595805] = "Bevhills04AFY";
  PedHash2[PedHash2["Blackops01SMY"] = 3019107892] = "Blackops01SMY";
  PedHash2[PedHash2["Blackops02SMY"] = 2047212121] = "Blackops02SMY";
  PedHash2[PedHash2["Blackops03SMY"] = 1349953339] = "Blackops03SMY";
  PedHash2[PedHash2["Bodybuild01AFM"] = 1004114196] = "Bodybuild01AFM";
  PedHash2[PedHash2["Bouncer01SMM"] = 2681481517] = "Bouncer01SMM";
  PedHash2[PedHash2["Breakdance01AMY"] = 933205398] = "Breakdance01AMY";
  PedHash2[PedHash2["Busboy01SMY"] = 3640249671] = "Busboy01SMY";
  PedHash2[PedHash2["Busicas01AMY"] = 2597531625] = "Busicas01AMY";
  PedHash2[PedHash2["Business01AFY"] = 664399832] = "Business01AFY";
  PedHash2[PedHash2["Business01AMM"] = 2120901815] = "Business01AMM";
  PedHash2[PedHash2["Business01AMY"] = 3382649284] = "Business01AMY";
  PedHash2[PedHash2["Business02AFM"] = 532905404] = "Business02AFM";
  PedHash2[PedHash2["Business02AFY"] = 826475330] = "Business02AFY";
  PedHash2[PedHash2["Business02AMY"] = 3014915558] = "Business02AMY";
  PedHash2[PedHash2["Business03AFY"] = 2928082356] = "Business03AFY";
  PedHash2[PedHash2["Business03AMY"] = 2705543429] = "Business03AMY";
  PedHash2[PedHash2["Business04AFY"] = 3083210802] = "Business04AFY";
  PedHash2[PedHash2["Busker01SMO"] = 2912874939] = "Busker01SMO";
  PedHash2[PedHash2["CCrew01SMM"] = 3387290987] = "CCrew01SMM";
  PedHash2[PedHash2["Chef01SMY"] = 261586155] = "Chef01SMY";
  PedHash2[PedHash2["ChemSec01SMM"] = 788443093] = "ChemSec01SMM";
  PedHash2[PedHash2["ChemWork01GMM"] = 4128603535] = "ChemWork01GMM";
  PedHash2[PedHash2["ChiBoss01GMM"] = 3118269184] = "ChiBoss01GMM";
  PedHash2[PedHash2["ChiCold01GMM"] = 275618457] = "ChiCold01GMM";
  PedHash2[PedHash2["ChiGoon01GMM"] = 2119136831] = "ChiGoon01GMM";
  PedHash2[PedHash2["ChiGoon02GMM"] = 4285659174] = "ChiGoon02GMM";
  PedHash2[PedHash2["CiaSec01SMM"] = 1650288984] = "CiaSec01SMM";
  PedHash2[PedHash2["Clown01SMY"] = 71929310] = "Clown01SMY";
  PedHash2[PedHash2["Cntrybar01SMM"] = 436345731] = "Cntrybar01SMM";
  PedHash2[PedHash2["Construct01SMY"] = 3621428889] = "Construct01SMY";
  PedHash2[PedHash2["Construct02SMY"] = 3321821918] = "Construct02SMY";
  PedHash2[PedHash2["Cop01SFY"] = 368603149] = "Cop01SFY";
  PedHash2[PedHash2["Cop01SMY"] = 1581098148] = "Cop01SMY";
  PedHash2[PedHash2["Cyclist01AMY"] = 4257633223] = "Cyclist01AMY";
  PedHash2[PedHash2["Dealer01SMY"] = 3835149295] = "Dealer01SMY";
  PedHash2[PedHash2["Devinsec01SMY"] = 2606068340] = "Devinsec01SMY";
  PedHash2[PedHash2["Dhill01AMY"] = 4282288299] = "Dhill01AMY";
  PedHash2[PedHash2["Dockwork01SMM"] = 349680864] = "Dockwork01SMM";
  PedHash2[PedHash2["Dockwork01SMY"] = 2255894993] = "Dockwork01SMY";
  PedHash2[PedHash2["Doctor01SMM"] = 3564307372] = "Doctor01SMM";
  PedHash2[PedHash2["Doorman01SMY"] = 579932932] = "Doorman01SMY";
  PedHash2[PedHash2["Downtown01AFM"] = 1699403886] = "Downtown01AFM";
  PedHash2[PedHash2["Downtown01AMY"] = 766375082] = "Downtown01AMY";
  PedHash2[PedHash2["DwService01SMY"] = 1976765073] = "DwService01SMY";
  PedHash2[PedHash2["DwService02SMY"] = 4119890438] = "DwService02SMY";
  PedHash2[PedHash2["Eastsa01AFM"] = 2638072698] = "Eastsa01AFM";
  PedHash2[PedHash2["Eastsa01AFY"] = 4121954205] = "Eastsa01AFY";
  PedHash2[PedHash2["Eastsa01AMM"] = 4188468543] = "Eastsa01AMM";
  PedHash2[PedHash2["Eastsa01AMY"] = 2756120947] = "Eastsa01AMY";
  PedHash2[PedHash2["Eastsa02AFM"] = 1674107025] = "Eastsa02AFM";
  PedHash2[PedHash2["Eastsa02AFY"] = 70821038] = "Eastsa02AFY";
  PedHash2[PedHash2["Eastsa02AMM"] = 131961260] = "Eastsa02AMM";
  PedHash2[PedHash2["Eastsa02AMY"] = 377976310] = "Eastsa02AMY";
  PedHash2[PedHash2["Eastsa03AFY"] = 1371553700] = "Eastsa03AFY";
  PedHash2[PedHash2["Epsilon01AFY"] = 1755064960] = "Epsilon01AFY";
  PedHash2[PedHash2["Epsilon01AMY"] = 2010389054] = "Epsilon01AMY";
  PedHash2[PedHash2["Epsilon02AMY"] = 2860711835] = "Epsilon02AMY";
  PedHash2[PedHash2["Factory01SFY"] = 1777626099] = "Factory01SFY";
  PedHash2[PedHash2["Factory01SMY"] = 1097048408] = "Factory01SMY";
  PedHash2[PedHash2["Famca01GMY"] = 3896218551] = "Famca01GMY";
  PedHash2[PedHash2["Famdnf01GMY"] = 3681718840] = "Famdnf01GMY";
  PedHash2[PedHash2["Famfor01GMY"] = 2217749257] = "Famfor01GMY";
  PedHash2[PedHash2["Families01GFY"] = 1309468115] = "Families01GFY";
  PedHash2[PedHash2["Farmer01AMM"] = 2488675799] = "Farmer01AMM";
  PedHash2[PedHash2["FatBla01AFM"] = 4206136267] = "FatBla01AFM";
  PedHash2[PedHash2["FatCult01AFM"] = 3050275044] = "FatCult01AFM";
  PedHash2[PedHash2["Fatlatin01AMM"] = 1641152947] = "Fatlatin01AMM";
  PedHash2[PedHash2["FatWhite01AFM"] = 951767867] = "FatWhite01AFM";
  PedHash2[PedHash2["FemBarberSFM"] = 373000027] = "FemBarberSFM";
  PedHash2[PedHash2["FibOffice01SMM"] = 3988550982] = "FibOffice01SMM";
  PedHash2[PedHash2["FibOffice02SMM"] = 653289389] = "FibOffice02SMM";
  PedHash2[PedHash2["FibSec01SMM"] = 2072724299] = "FibSec01SMM";
  PedHash2[PedHash2["Fireman01SMY"] = 3065114024] = "Fireman01SMY";
  PedHash2[PedHash2["Fitness01AFY"] = 1165780219] = "Fitness01AFY";
  PedHash2[PedHash2["Fitness02AFY"] = 331645324] = "Fitness02AFY";
  PedHash2[PedHash2["Gaffer01SMM"] = 2841034142] = "Gaffer01SMM";
  PedHash2[PedHash2["GarbageSMY"] = 4000686095] = "GarbageSMY";
  PedHash2[PedHash2["Gardener01SMM"] = 1240094341] = "Gardener01SMM";
  PedHash2[PedHash2["Gay01AMY"] = 3519864886] = "Gay01AMY";
  PedHash2[PedHash2["Gay02AMY"] = 2775713665] = "Gay02AMY";
  PedHash2[PedHash2["Genfat01AMM"] = 115168927] = "Genfat01AMM";
  PedHash2[PedHash2["Genfat02AMM"] = 330231874] = "Genfat02AMM";
  PedHash2[PedHash2["Genhot01AFY"] = 793439294] = "Genhot01AFY";
  PedHash2[PedHash2["Genstreet01AFO"] = 1640504453] = "Genstreet01AFO";
  PedHash2[PedHash2["Genstreet01AMO"] = 2908022696] = "Genstreet01AMO";
  PedHash2[PedHash2["Genstreet01AMY"] = 2557996913] = "Genstreet01AMY";
  PedHash2[PedHash2["Genstreet02AMY"] = 891398354] = "Genstreet02AMY";
  PedHash2[PedHash2["GentransportSMM"] = 411102470] = "GentransportSMM";
  PedHash2[PedHash2["Golfer01AFY"] = 2111372120] = "Golfer01AFY";
  PedHash2[PedHash2["Golfer01AMM"] = 2850754114] = "Golfer01AMM";
  PedHash2[PedHash2["Golfer01AMY"] = 3609190705] = "Golfer01AMY";
  PedHash2[PedHash2["Grip01SMY"] = 815693290] = "Grip01SMY";
  PedHash2[PedHash2["Hairdress01SMM"] = 1099825042] = "Hairdress01SMM";
  PedHash2[PedHash2["Hasjew01AMM"] = 1809430156] = "Hasjew01AMM";
  PedHash2[PedHash2["Hasjew01AMY"] = 3782053633] = "Hasjew01AMY";
  PedHash2[PedHash2["Highsec01SMM"] = 4049719826] = "Highsec01SMM";
  PedHash2[PedHash2["Highsec02SMM"] = 691061163] = "Highsec02SMM";
  PedHash2[PedHash2["Hiker01AFY"] = 813893651] = "Hiker01AFY";
  PedHash2[PedHash2["Hiker01AMY"] = 1358380044] = "Hiker01AMY";
  PedHash2[PedHash2["Hillbilly01AMM"] = 1822107721] = "Hillbilly01AMM";
  PedHash2[PedHash2["Hillbilly02AMM"] = 2064532783] = "Hillbilly02AMM";
  PedHash2[PedHash2["Hippie01AFY"] = 343259175] = "Hippie01AFY";
  PedHash2[PedHash2["Hippy01AMY"] = 2097407511] = "Hippy01AMY";
  PedHash2[PedHash2["Hipster01AFY"] = 2185745201] = "Hipster01AFY";
  PedHash2[PedHash2["Hipster01AMY"] = 587703123] = "Hipster01AMY";
  PedHash2[PedHash2["Hipster02AFY"] = 2549481101] = "Hipster02AFY";
  PedHash2[PedHash2["Hipster02AMY"] = 349505262] = "Hipster02AMY";
  PedHash2[PedHash2["Hipster03AFY"] = 2780469782] = "Hipster03AFY";
  PedHash2[PedHash2["Hipster03AMY"] = 1312913862] = "Hipster03AMY";
  PedHash2[PedHash2["Hipster04AFY"] = 429425116] = "Hipster04AFY";
  PedHash2[PedHash2["Hooker01SFY"] = 42647445] = "Hooker01SFY";
  PedHash2[PedHash2["Hooker02SFY"] = 348382215] = "Hooker02SFY";
  PedHash2[PedHash2["Hooker03SFY"] = 51789996] = "Hooker03SFY";
  PedHash2[PedHash2["Hwaycop01SMY"] = 1939545845] = "Hwaycop01SMY";
  PedHash2[PedHash2["Indian01AFO"] = 3134700416] = "Indian01AFO";
  PedHash2[PedHash2["Indian01AFY"] = 153984193] = "Indian01AFY";
  PedHash2[PedHash2["Indian01AMM"] = 3721046572] = "Indian01AMM";
  PedHash2[PedHash2["Indian01AMY"] = 706935758] = "Indian01AMY";
  PedHash2[PedHash2["JanitorSMM"] = 2842417644] = "JanitorSMM";
  PedHash2[PedHash2["Jetski01AMY"] = 767028979] = "Jetski01AMY";
  PedHash2[PedHash2["Juggalo01AFY"] = 3675473203] = "Juggalo01AFY";
  PedHash2[PedHash2["Juggalo01AMY"] = 2445950508] = "Juggalo01AMY";
  PedHash2[PedHash2["KorBoss01GMM"] = 891945583] = "KorBoss01GMM";
  PedHash2[PedHash2["Korean01GMY"] = 611648169] = "Korean01GMY";
  PedHash2[PedHash2["Korean02GMY"] = 2414729609] = "Korean02GMY";
  PedHash2[PedHash2["KorLieut01GMY"] = 2093736314] = "KorLieut01GMY";
  PedHash2[PedHash2["Ktown01AFM"] = 1388848350] = "Ktown01AFM";
  PedHash2[PedHash2["Ktown01AFO"] = 1204772502] = "Ktown01AFO";
  PedHash2[PedHash2["Ktown01AMM"] = 3512565361] = "Ktown01AMM";
  PedHash2[PedHash2["Ktown01AMO"] = 355916122] = "Ktown01AMO";
  PedHash2[PedHash2["Ktown01AMY"] = 452351020] = "Ktown01AMY";
  PedHash2[PedHash2["Ktown02AFM"] = 1090617681] = "Ktown02AFM";
  PedHash2[PedHash2["Ktown02AMY"] = 696250687] = "Ktown02AMY";
  PedHash2[PedHash2["Lathandy01SMM"] = 2659242702] = "Lathandy01SMM";
  PedHash2[PedHash2["Latino01AMY"] = 321657486] = "Latino01AMY";
  PedHash2[PedHash2["Lifeinvad01SMM"] = 3724572669] = "Lifeinvad01SMM";
  PedHash2[PedHash2["LinecookSMM"] = 3684436375] = "LinecookSMM";
  PedHash2[PedHash2["Lost01GFY"] = 4250220510] = "Lost01GFY";
  PedHash2[PedHash2["Lost01GMY"] = 1330042375] = "Lost01GMY";
  PedHash2[PedHash2["Lost02GMY"] = 1032073858] = "Lost02GMY";
  PedHash2[PedHash2["Lost03GMY"] = 850468060] = "Lost03GMY";
  PedHash2[PedHash2["Lsmetro01SMM"] = 1985653476] = "Lsmetro01SMM";
  PedHash2[PedHash2["Maid01SFM"] = 3767780806] = "Maid01SFM";
  PedHash2[PedHash2["Malibu01AMM"] = 803106487] = "Malibu01AMM";
  PedHash2[PedHash2["Mariachi01SMM"] = 2124742566] = "Mariachi01SMM";
  PedHash2[PedHash2["Marine01SMM"] = 4074414829] = "Marine01SMM";
  PedHash2[PedHash2["Marine01SMY"] = 1702441027] = "Marine01SMY";
  PedHash2[PedHash2["Marine02SMM"] = 4028996995] = "Marine02SMM";
  PedHash2[PedHash2["Marine02SMY"] = 1490458366] = "Marine02SMY";
  PedHash2[PedHash2["Marine03SMY"] = 1925237458] = "Marine03SMY";
  PedHash2[PedHash2["Methhead01AMY"] = 1768677545] = "Methhead01AMY";
  PedHash2[PedHash2["MexBoss01GMM"] = 1466037421] = "MexBoss01GMM";
  PedHash2[PedHash2["MexBoss02GMM"] = 1226102803] = "MexBoss02GMM";
  PedHash2[PedHash2["MexCntry01AMM"] = 3716251309] = "MexCntry01AMM";
  PedHash2[PedHash2["MexGang01GMY"] = 3185399110] = "MexGang01GMY";
  PedHash2[PedHash2["MexGoon01GMY"] = 653210662] = "MexGoon01GMY";
  PedHash2[PedHash2["MexGoon02GMY"] = 832784782] = "MexGoon02GMY";
  PedHash2[PedHash2["MexGoon03GMY"] = 2521633500] = "MexGoon03GMY";
  PedHash2[PedHash2["MexLabor01AMM"] = 2992445106] = "MexLabor01AMM";
  PedHash2[PedHash2["MexThug01AMY"] = 810804565] = "MexThug01AMY";
  PedHash2[PedHash2["Migrant01SFY"] = 3579522037] = "Migrant01SFY";
  PedHash2[PedHash2["Migrant01SMM"] = 3977045190] = "Migrant01SMM";
  PedHash2[PedHash2["MimeSMY"] = 1021093698] = "MimeSMY";
  PedHash2[PedHash2["Motox01AMY"] = 1694362237] = "Motox01AMY";
  PedHash2[PedHash2["Motox02AMY"] = 2007797722] = "Motox02AMY";
  PedHash2[PedHash2["MovAlien01"] = 1684083350] = "MovAlien01";
  PedHash2[PedHash2["MovPrem01SFY"] = 587253782] = "MovPrem01SFY";
  PedHash2[PedHash2["Movprem01SMM"] = 3630066984] = "Movprem01SMM";
  PedHash2[PedHash2["Movspace01SMM"] = 3887273010] = "Movspace01SMM";
  PedHash2[PedHash2["Musclbeac01AMY"] = 1264920838] = "Musclbeac01AMY";
  PedHash2[PedHash2["Musclbeac02AMY"] = 3374523516] = "Musclbeac02AMY";
  PedHash2[PedHash2["OgBoss01AMM"] = 1746653202] = "OgBoss01AMM";
  PedHash2[PedHash2["Paparazzi01AMM"] = 3972697109] = "Paparazzi01AMM";
  PedHash2[PedHash2["Paramedic01SMM"] = 3008586398] = "Paramedic01SMM";
  PedHash2[PedHash2["PestCont01SMY"] = 1209091352] = "PestCont01SMY";
  PedHash2[PedHash2["Pilot01SMM"] = 3881519900] = "Pilot01SMM";
  PedHash2[PedHash2["Pilot01SMY"] = 2872052743] = "Pilot01SMY";
  PedHash2[PedHash2["Pilot02SMM"] = 4131252449] = "Pilot02SMM";
  PedHash2[PedHash2["PoloGoon01GMY"] = 1329576454] = "PoloGoon01GMY";
  PedHash2[PedHash2["PoloGoon02GMY"] = 2733138262] = "PoloGoon02GMY";
  PedHash2[PedHash2["Polynesian01AMM"] = 2849617566] = "Polynesian01AMM";
  PedHash2[PedHash2["Polynesian01AMY"] = 2206530719] = "Polynesian01AMY";
  PedHash2[PedHash2["Postal01SMM"] = 1650036788] = "Postal01SMM";
  PedHash2[PedHash2["Postal02SMM"] = 1936142927] = "Postal02SMM";
  PedHash2[PedHash2["Prisguard01SMM"] = 1456041926] = "Prisguard01SMM";
  PedHash2[PedHash2["PrisMuscl01SMY"] = 1596003233] = "PrisMuscl01SMY";
  PedHash2[PedHash2["Prisoner01SMY"] = 2981862233] = "Prisoner01SMY";
  PedHash2[PedHash2["PrologueHostage01AFM"] = 379310561] = "PrologueHostage01AFM";
  PedHash2[PedHash2["PrologueHostage01AMM"] = 2534589327] = "PrologueHostage01AMM";
  PedHash2[PedHash2["Ranger01SFY"] = 2680682039] = "Ranger01SFY";
  PedHash2[PedHash2["Ranger01SMY"] = 4017173934] = "Ranger01SMY";
  PedHash2[PedHash2["Roadcyc01AMY"] = 4116817094] = "Roadcyc01AMY";
  PedHash2[PedHash2["Robber01SMY"] = 3227390873] = "Robber01SMY";
  PedHash2[PedHash2["RsRanger01AMO"] = 1011059922] = "RsRanger01AMO";
  PedHash2[PedHash2["Runner01AFY"] = 3343476521] = "Runner01AFY";
  PedHash2[PedHash2["Runner01AMY"] = 623927022] = "Runner01AMY";
  PedHash2[PedHash2["Runner02AMY"] = 2218630415] = "Runner02AMY";
  PedHash2[PedHash2["Rurmeth01AFY"] = 1064866854] = "Rurmeth01AFY";
  PedHash2[PedHash2["Rurmeth01AMM"] = 1001210244] = "Rurmeth01AMM";
  PedHash2[PedHash2["Salton01AFM"] = 3725461865] = "Salton01AFM";
  PedHash2[PedHash2["Salton01AFO"] = 3439295882] = "Salton01AFO";
  PedHash2[PedHash2["Salton01AMM"] = 1328415626] = "Salton01AMM";
  PedHash2[PedHash2["Salton01AMO"] = 539004493] = "Salton01AMO";
  PedHash2[PedHash2["Salton01AMY"] = 3613420592] = "Salton01AMY";
  PedHash2[PedHash2["Salton02AMM"] = 1626646295] = "Salton02AMM";
  PedHash2[PedHash2["Salton03AMM"] = 2995538501] = "Salton03AMM";
  PedHash2[PedHash2["Salton04AMM"] = 2521108919] = "Salton04AMM";
  PedHash2[PedHash2["SalvaBoss01GMY"] = 2422005962] = "SalvaBoss01GMY";
  PedHash2[PedHash2["SalvaGoon01GMY"] = 663522487] = "SalvaGoon01GMY";
  PedHash2[PedHash2["SalvaGoon02GMY"] = 846439045] = "SalvaGoon02GMY";
  PedHash2[PedHash2["SalvaGoon03GMY"] = 62440720] = "SalvaGoon03GMY";
  PedHash2[PedHash2["SbikeAMO"] = 1794381917] = "SbikeAMO";
  PedHash2[PedHash2["Scdressy01AFY"] = 3680420864] = "Scdressy01AFY";
  PedHash2[PedHash2["Scientist01SMM"] = 1092080539] = "Scientist01SMM";
  PedHash2[PedHash2["Scrubs01SFY"] = 2874755766] = "Scrubs01SFY";
  PedHash2[PedHash2["Security01SMM"] = 3613962792] = "Security01SMM";
  PedHash2[PedHash2["Sheriff01SFY"] = 1096929346] = "Sheriff01SFY";
  PedHash2[PedHash2["Sheriff01SMY"] = 2974087609] = "Sheriff01SMY";
  PedHash2[PedHash2["ShopHighSFM"] = 2923947184] = "ShopHighSFM";
  PedHash2[PedHash2["ShopLowSFY"] = 2842568196] = "ShopLowSFY";
  PedHash2[PedHash2["ShopMaskSMY"] = 1846684678] = "ShopMaskSMY";
  PedHash2[PedHash2["ShopMidSFY"] = 1055701597] = "ShopMidSFY";
  PedHash2[PedHash2["Skater01AFY"] = 1767892582] = "Skater01AFY";
  PedHash2[PedHash2["Skater01AMM"] = 3654768780] = "Skater01AMM";
  PedHash2[PedHash2["Skater01AMY"] = 3250873975] = "Skater01AMY";
  PedHash2[PedHash2["Skater02AMY"] = 2952446692] = "Skater02AMY";
  PedHash2[PedHash2["Skidrow01AFM"] = 2962707003] = "Skidrow01AFM";
  PedHash2[PedHash2["Skidrow01AMM"] = 32417469] = "Skidrow01AMM";
  PedHash2[PedHash2["Snowcop01SMM"] = 451459928] = "Snowcop01SMM";
  PedHash2[PedHash2["Socenlat01AMM"] = 193817059] = "Socenlat01AMM";
  PedHash2[PedHash2["Soucent01AFM"] = 1951946145] = "Soucent01AFM";
  PedHash2[PedHash2["Soucent01AFO"] = 1039800368] = "Soucent01AFO";
  PedHash2[PedHash2["Soucent01AFY"] = 744758650] = "Soucent01AFY";
  PedHash2[PedHash2["Soucent01AMM"] = 1750583735] = "Soucent01AMM";
  PedHash2[PedHash2["Soucent01AMO"] = 718836251] = "Soucent01AMO";
  PedHash2[PedHash2["Soucent01AMY"] = 3877027275] = "Soucent01AMY";
  PedHash2[PedHash2["Soucent02AFM"] = 4079145784] = "Soucent02AFM";
  PedHash2[PedHash2["Soucent02AFO"] = 2775443222] = "Soucent02AFO";
  PedHash2[PedHash2["Soucent02AFY"] = 1519319503] = "Soucent02AFY";
  PedHash2[PedHash2["Soucent02AMM"] = 2674735073] = "Soucent02AMM";
  PedHash2[PedHash2["Soucent02AMO"] = 1082572151] = "Soucent02AMO";
  PedHash2[PedHash2["Soucent02AMY"] = 2896414922] = "Soucent02AMY";
  PedHash2[PedHash2["Soucent03AFY"] = 2276611093] = "Soucent03AFY";
  PedHash2[PedHash2["Soucent03AMM"] = 2346291386] = "Soucent03AMM";
  PedHash2[PedHash2["Soucent03AMO"] = 238213328] = "Soucent03AMO";
  PedHash2[PedHash2["Soucent03AMY"] = 3287349092] = "Soucent03AMY";
  PedHash2[PedHash2["Soucent04AMM"] = 3271294718] = "Soucent04AMM";
  PedHash2[PedHash2["Soucent04AMY"] = 2318861297] = "Soucent04AMY";
  PedHash2[PedHash2["Soucentmc01AFM"] = 3454621138] = "Soucentmc01AFM";
  PedHash2[PedHash2["Staggrm01AMO"] = 2442448387] = "Staggrm01AMO";
  PedHash2[PedHash2["Stbla01AMY"] = 3482496489] = "Stbla01AMY";
  PedHash2[PedHash2["Stbla02AMY"] = 2563194959] = "Stbla02AMY";
  PedHash2[PedHash2["Stlat01AMY"] = 2255803900] = "Stlat01AMY";
  PedHash2[PedHash2["Stlat02AMM"] = 3265820418] = "Stlat02AMM";
  PedHash2[PedHash2["Stripper01SFY"] = 1381498905] = "Stripper01SFY";
  PedHash2[PedHash2["Stripper02SFY"] = 1846523796] = "Stripper02SFY";
  PedHash2[PedHash2["StripperLiteSFY"] = 1544875514] = "StripperLiteSFY";
  PedHash2[PedHash2["Strperf01SMM"] = 2035992488] = "Strperf01SMM";
  PedHash2[PedHash2["Strpreach01SMM"] = 469792763] = "Strpreach01SMM";
  PedHash2[PedHash2["StrPunk01GMY"] = 4246489531] = "StrPunk01GMY";
  PedHash2[PedHash2["StrPunk02GMY"] = 228715206] = "StrPunk02GMY";
  PedHash2[PedHash2["Strvend01SMM"] = 3465614249] = "Strvend01SMM";
  PedHash2[PedHash2["Strvend01SMY"] = 2457805603] = "Strvend01SMY";
  PedHash2[PedHash2["Stwhi01AMY"] = 605602864] = "Stwhi01AMY";
  PedHash2[PedHash2["Stwhi02AMY"] = 919005580] = "Stwhi02AMY";
  PedHash2[PedHash2["Sunbathe01AMY"] = 3072929548] = "Sunbathe01AMY";
  PedHash2[PedHash2["Surfer01AMY"] = 3938633710] = "Surfer01AMY";
  PedHash2[PedHash2["Swat01SMY"] = 2374966032] = "Swat01SMY";
  PedHash2[PedHash2["Sweatshop01SFM"] = 824925120] = "Sweatshop01SFM";
  PedHash2[PedHash2["Sweatshop01SFY"] = 2231547570] = "Sweatshop01SFY";
  PedHash2[PedHash2["Tattoo01AMO"] = 2494442380] = "Tattoo01AMO";
  PedHash2[PedHash2["Tennis01AFY"] = 1426880966] = "Tennis01AFY";
  PedHash2[PedHash2["Tennis01AMM"] = 1416254276] = "Tennis01AMM";
  PedHash2[PedHash2["Topless01AFY"] = 2633130371] = "Topless01AFY";
  PedHash2[PedHash2["Tourist01AFM"] = 1347814329] = "Tourist01AFM";
  PedHash2[PedHash2["Tourist01AFY"] = 1446741360] = "Tourist01AFY";
  PedHash2[PedHash2["Tourist01AMM"] = 3365863812] = "Tourist01AMM";
  PedHash2[PedHash2["Tourist02AFY"] = 2435054400] = "Tourist02AFY";
  PedHash2[PedHash2["Tramp01AFM"] = 1224306523] = "Tramp01AFM";
  PedHash2[PedHash2["Tramp01AMM"] = 516505552] = "Tramp01AMM";
  PedHash2[PedHash2["Tramp01AMO"] = 390939205] = "Tramp01AMO";
  PedHash2[PedHash2["TrampBeac01AFM"] = 2359345766] = "TrampBeac01AFM";
  PedHash2[PedHash2["TrampBeac01AMM"] = 1404403376] = "TrampBeac01AMM";
  PedHash2[PedHash2["Tranvest01AMM"] = 3773208948] = "Tranvest01AMM";
  PedHash2[PedHash2["Tranvest02AMM"] = 4144940484] = "Tranvest02AMM";
  PedHash2[PedHash2["Trucker01SMM"] = 1498487404] = "Trucker01SMM";
  PedHash2[PedHash2["Ups01SMM"] = 2680389410] = "Ups01SMM";
  PedHash2[PedHash2["Ups02SMM"] = 3502104854] = "Ups02SMM";
  PedHash2[PedHash2["Uscg01SMY"] = 3389018345] = "Uscg01SMY";
  PedHash2[PedHash2["Vagos01GFY"] = 1520708641] = "Vagos01GFY";
  PedHash2[PedHash2["Valet01SMY"] = 999748158] = "Valet01SMY";
  PedHash2[PedHash2["Vindouche01AMY"] = 3247667175] = "Vindouche01AMY";
  PedHash2[PedHash2["Vinewood01AFY"] = 435429221] = "Vinewood01AFY";
  PedHash2[PedHash2["Vinewood01AMY"] = 1264851357] = "Vinewood01AMY";
  PedHash2[PedHash2["Vinewood02AFY"] = 3669401835] = "Vinewood02AFY";
  PedHash2[PedHash2["Vinewood02AMY"] = 1561705728] = "Vinewood02AMY";
  PedHash2[PedHash2["Vinewood03AFY"] = 933092024] = "Vinewood03AFY";
  PedHash2[PedHash2["Vinewood03AMY"] = 534725268] = "Vinewood03AMY";
  PedHash2[PedHash2["Vinewood04AFY"] = 4209271110] = "Vinewood04AFY";
  PedHash2[PedHash2["Vinewood04AMY"] = 835315305] = "Vinewood04AMY";
  PedHash2[PedHash2["Waiter01SMY"] = 2907468364] = "Waiter01SMY";
  PedHash2[PedHash2["WinClean01SMY"] = 1426951581] = "WinClean01SMY";
  PedHash2[PedHash2["Xmech01SMY"] = 1142162924] = "Xmech01SMY";
  PedHash2[PedHash2["Xmech02SMY"] = 3189832196] = "Xmech02SMY";
  PedHash2[PedHash2["Xmech02SMYMP"] = 1755203590] = "Xmech02SMYMP";
  PedHash2[PedHash2["Yoga01AFY"] = 3290105390] = "Yoga01AFY";
  PedHash2[PedHash2["Yoga01AMY"] = 2869588309] = "Yoga01AMY";
  return PedHash2;
})(PedHash || {});

// src/fivem/hashes/VehicleHash.ts
var VehicleHash = /* @__PURE__ */ ((VehicleHash2) => {
  VehicleHash2[VehicleHash2["Adder"] = 3078201489] = "Adder";
  VehicleHash2[VehicleHash2["Airbus"] = 1283517198] = "Airbus";
  VehicleHash2[VehicleHash2["Airtug"] = 1560980623] = "Airtug";
  VehicleHash2[VehicleHash2["Akuma"] = 1672195559] = "Akuma";
  VehicleHash2[VehicleHash2["Alpha"] = 767087018] = "Alpha";
  VehicleHash2[VehicleHash2["Ambulance"] = 1171614426] = "Ambulance";
  VehicleHash2[VehicleHash2["Annihilator"] = 837858166] = "Annihilator";
  VehicleHash2[VehicleHash2["Apc"] = 562680400] = "Apc";
  VehicleHash2[VehicleHash2["Ardent"] = 159274291] = "Ardent";
  VehicleHash2[VehicleHash2["ArmyTanker"] = 3087536137] = "ArmyTanker";
  VehicleHash2[VehicleHash2["ArmyTrailer"] = 2818520053] = "ArmyTrailer";
  VehicleHash2[VehicleHash2["ArmyTrailer2"] = 2657817814] = "ArmyTrailer2";
  VehicleHash2[VehicleHash2["Asea"] = 2485144969] = "Asea";
  VehicleHash2[VehicleHash2["Asea2"] = 2487343317] = "Asea2";
  VehicleHash2[VehicleHash2["Asterope"] = 2391954683] = "Asterope";
  VehicleHash2[VehicleHash2["Avarus"] = 2179174271] = "Avarus";
  VehicleHash2[VehicleHash2["Bagger"] = 2154536131] = "Bagger";
  VehicleHash2[VehicleHash2["BaleTrailer"] = 3895125590] = "BaleTrailer";
  VehicleHash2[VehicleHash2["Baller"] = 3486135912] = "Baller";
  VehicleHash2[VehicleHash2["Baller2"] = 142944341] = "Baller2";
  VehicleHash2[VehicleHash2["Baller3"] = 1878062887] = "Baller3";
  VehicleHash2[VehicleHash2["Baller4"] = 634118882] = "Baller4";
  VehicleHash2[VehicleHash2["Baller5"] = 470404958] = "Baller5";
  VehicleHash2[VehicleHash2["Baller6"] = 666166960] = "Baller6";
  VehicleHash2[VehicleHash2["Banshee"] = 3253274834] = "Banshee";
  VehicleHash2[VehicleHash2["Banshee2"] = 633712403] = "Banshee2";
  VehicleHash2[VehicleHash2["Barracks"] = 3471458123] = "Barracks";
  VehicleHash2[VehicleHash2["Barracks2"] = 1074326203] = "Barracks2";
  VehicleHash2[VehicleHash2["Barracks3"] = 630371791] = "Barracks3";
  VehicleHash2[VehicleHash2["Bati"] = 4180675781] = "Bati";
  VehicleHash2[VehicleHash2["Bati2"] = 3403504941] = "Bati2";
  VehicleHash2[VehicleHash2["Benson"] = 2053223216] = "Benson";
  VehicleHash2[VehicleHash2["Besra"] = 1824333165] = "Besra";
  VehicleHash2[VehicleHash2["BestiaGTS"] = 1274868363] = "BestiaGTS";
  VehicleHash2[VehicleHash2["BF400"] = 86520421] = "BF400";
  VehicleHash2[VehicleHash2["BfInjection"] = 1126868326] = "BfInjection";
  VehicleHash2[VehicleHash2["Biff"] = 850991848] = "Biff";
  VehicleHash2[VehicleHash2["Bifta"] = 3945366167] = "Bifta";
  VehicleHash2[VehicleHash2["Bison"] = 4278019151] = "Bison";
  VehicleHash2[VehicleHash2["Bison2"] = 2072156101] = "Bison2";
  VehicleHash2[VehicleHash2["Bison3"] = 1739845664] = "Bison3";
  VehicleHash2[VehicleHash2["BJXL"] = 850565707] = "BJXL";
  VehicleHash2[VehicleHash2["Blade"] = 3089165662] = "Blade";
  VehicleHash2[VehicleHash2["Blazer"] = 2166734073] = "Blazer";
  VehicleHash2[VehicleHash2["Blazer2"] = 4246935337] = "Blazer2";
  VehicleHash2[VehicleHash2["Blazer3"] = 3025077634] = "Blazer3";
  VehicleHash2[VehicleHash2["Blazer4"] = 3854198872] = "Blazer4";
  VehicleHash2[VehicleHash2["Blazer5"] = 2704629607] = "Blazer5";
  VehicleHash2[VehicleHash2["Blimp"] = 4143991942] = "Blimp";
  VehicleHash2[VehicleHash2["Blimp2"] = 3681241380] = "Blimp2";
  VehicleHash2[VehicleHash2["Blista"] = 3950024287] = "Blista";
  VehicleHash2[VehicleHash2["Blista2"] = 1039032026] = "Blista2";
  VehicleHash2[VehicleHash2["Blista3"] = 3703315515] = "Blista3";
  VehicleHash2[VehicleHash2["Bmx"] = 1131912276] = "Bmx";
  VehicleHash2[VehicleHash2["BoatTrailer"] = 524108981] = "BoatTrailer";
  VehicleHash2[VehicleHash2["BobcatXL"] = 1069929536] = "BobcatXL";
  VehicleHash2[VehicleHash2["Bodhi2"] = 2859047862] = "Bodhi2";
  VehicleHash2[VehicleHash2["Boxville"] = 2307837162] = "Boxville";
  VehicleHash2[VehicleHash2["Boxville2"] = 4061868990] = "Boxville2";
  VehicleHash2[VehicleHash2["Boxville3"] = 121658888] = "Boxville3";
  VehicleHash2[VehicleHash2["Boxville4"] = 444171386] = "Boxville4";
  VehicleHash2[VehicleHash2["Boxville5"] = 682434785] = "Boxville5";
  VehicleHash2[VehicleHash2["Brawler"] = 2815302597] = "Brawler";
  VehicleHash2[VehicleHash2["Brickade"] = 3989239879] = "Brickade";
  VehicleHash2[VehicleHash2["Brioso"] = 1549126457] = "Brioso";
  VehicleHash2[VehicleHash2["BType"] = 117401876] = "BType";
  VehicleHash2[VehicleHash2["BType2"] = 3463132580] = "BType2";
  VehicleHash2[VehicleHash2["BType3"] = 3692679425] = "BType3";
  VehicleHash2[VehicleHash2["Buccaneer"] = 3612755468] = "Buccaneer";
  VehicleHash2[VehicleHash2["Buccaneer2"] = 3281516360] = "Buccaneer2";
  VehicleHash2[VehicleHash2["Buffalo"] = 3990165190] = "Buffalo";
  VehicleHash2[VehicleHash2["Buffalo2"] = 736902334] = "Buffalo2";
  VehicleHash2[VehicleHash2["Buffalo3"] = 237764926] = "Buffalo3";
  VehicleHash2[VehicleHash2["Bulldozer"] = 1886712733] = "Bulldozer";
  VehicleHash2[VehicleHash2["Bullet"] = 2598821281] = "Bullet";
  VehicleHash2[VehicleHash2["Burrito"] = 2948279460] = "Burrito";
  VehicleHash2[VehicleHash2["Burrito2"] = 3387490166] = "Burrito2";
  VehicleHash2[VehicleHash2["Burrito3"] = 2551651283] = "Burrito3";
  VehicleHash2[VehicleHash2["Burrito4"] = 893081117] = "Burrito4";
  VehicleHash2[VehicleHash2["Burrito5"] = 1132262048] = "Burrito5";
  VehicleHash2[VehicleHash2["Bus"] = 3581397346] = "Bus";
  VehicleHash2[VehicleHash2["Buzzard"] = 788747387] = "Buzzard";
  VehicleHash2[VehicleHash2["Buzzard2"] = 745926877] = "Buzzard2";
  VehicleHash2[VehicleHash2["CableCar"] = 3334677549] = "CableCar";
  VehicleHash2[VehicleHash2["Caddy"] = 1147287684] = "Caddy";
  VehicleHash2[VehicleHash2["Caddy2"] = 3757070668] = "Caddy2";
  VehicleHash2[VehicleHash2["Caddy3"] = 3525819835] = "Caddy3";
  VehicleHash2[VehicleHash2["Camper"] = 1876516712] = "Camper";
  VehicleHash2[VehicleHash2["Carbonizzare"] = 2072687711] = "Carbonizzare";
  VehicleHash2[VehicleHash2["CarbonRS"] = 11251904] = "CarbonRS";
  VehicleHash2[VehicleHash2["Cargobob"] = 4244420235] = "Cargobob";
  VehicleHash2[VehicleHash2["Cargobob2"] = 1621617168] = "Cargobob2";
  VehicleHash2[VehicleHash2["Cargobob3"] = 1394036463] = "Cargobob3";
  VehicleHash2[VehicleHash2["Cargobob4"] = 2025593404] = "Cargobob4";
  VehicleHash2[VehicleHash2["CargoPlane"] = 368211810] = "CargoPlane";
  VehicleHash2[VehicleHash2["Casco"] = 941800958] = "Casco";
  VehicleHash2[VehicleHash2["Cavalcade"] = 2006918058] = "Cavalcade";
  VehicleHash2[VehicleHash2["Cavalcade2"] = 3505073125] = "Cavalcade2";
  VehicleHash2[VehicleHash2["Cheetah"] = 2983812512] = "Cheetah";
  VehicleHash2[VehicleHash2["Cheetah2"] = 223240013] = "Cheetah2";
  VehicleHash2[VehicleHash2["Chimera"] = 6774487] = "Chimera";
  VehicleHash2[VehicleHash2["Chino"] = 349605904] = "Chino";
  VehicleHash2[VehicleHash2["Chino2"] = 2933279331] = "Chino2";
  VehicleHash2[VehicleHash2["Cliffhanger"] = 390201602] = "Cliffhanger";
  VehicleHash2[VehicleHash2["Coach"] = 2222034228] = "Coach";
  VehicleHash2[VehicleHash2["Cog55"] = 906642318] = "Cog55";
  VehicleHash2[VehicleHash2["Cog552"] = 704435172] = "Cog552";
  VehicleHash2[VehicleHash2["CogCabrio"] = 330661258] = "CogCabrio";
  VehicleHash2[VehicleHash2["Cognoscenti"] = 2264796e3] = "Cognoscenti";
  VehicleHash2[VehicleHash2["Cognoscenti2"] = 3690124666] = "Cognoscenti2";
  VehicleHash2[VehicleHash2["Comet2"] = 3249425686] = "Comet2";
  VehicleHash2[VehicleHash2["Comet3"] = 2272483501] = "Comet3";
  VehicleHash2[VehicleHash2["Contender"] = 683047626] = "Contender";
  VehicleHash2[VehicleHash2["Coquette"] = 108773431] = "Coquette";
  VehicleHash2[VehicleHash2["Coquette2"] = 1011753235] = "Coquette2";
  VehicleHash2[VehicleHash2["Coquette3"] = 784565758] = "Coquette3";
  VehicleHash2[VehicleHash2["Cruiser"] = 448402357] = "Cruiser";
  VehicleHash2[VehicleHash2["Crusader"] = 321739290] = "Crusader";
  VehicleHash2[VehicleHash2["Cuban800"] = 3650256867] = "Cuban800";
  VehicleHash2[VehicleHash2["Cutter"] = 3288047904] = "Cutter";
  VehicleHash2[VehicleHash2["Daemon"] = 2006142190] = "Daemon";
  VehicleHash2[VehicleHash2["Daemon2"] = 2890830793] = "Daemon2";
  VehicleHash2[VehicleHash2["Defiler"] = 822018448] = "Defiler";
  VehicleHash2[VehicleHash2["Diablous"] = 4055125828] = "Diablous";
  VehicleHash2[VehicleHash2["Diablous2"] = 1790834270] = "Diablous2";
  VehicleHash2[VehicleHash2["Dilettante"] = 3164157193] = "Dilettante";
  VehicleHash2[VehicleHash2["Dilettante2"] = 1682114128] = "Dilettante2";
  VehicleHash2[VehicleHash2["Dinghy"] = 1033245328] = "Dinghy";
  VehicleHash2[VehicleHash2["Dinghy2"] = 276773164] = "Dinghy2";
  VehicleHash2[VehicleHash2["Dinghy3"] = 509498602] = "Dinghy3";
  VehicleHash2[VehicleHash2["Dinghy4"] = 867467158] = "Dinghy4";
  VehicleHash2[VehicleHash2["DLoader"] = 1770332643] = "DLoader";
  VehicleHash2[VehicleHash2["DockTrailer"] = 2154757102] = "DockTrailer";
  VehicleHash2[VehicleHash2["Docktug"] = 3410276810] = "Docktug";
  VehicleHash2[VehicleHash2["Dodo"] = 3393804037] = "Dodo";
  VehicleHash2[VehicleHash2["Dominator"] = 80636076] = "Dominator";
  VehicleHash2[VehicleHash2["Dominator2"] = 3379262425] = "Dominator2";
  VehicleHash2[VehicleHash2["Double"] = 2623969160] = "Double";
  VehicleHash2[VehicleHash2["Dubsta"] = 1177543287] = "Dubsta";
  VehicleHash2[VehicleHash2["Dubsta2"] = 3900892662] = "Dubsta2";
  VehicleHash2[VehicleHash2["Dubsta3"] = 3057713523] = "Dubsta3";
  VehicleHash2[VehicleHash2["Dukes"] = 723973206] = "Dukes";
  VehicleHash2[VehicleHash2["Dukes2"] = 3968823444] = "Dukes2";
  VehicleHash2[VehicleHash2["Dump"] = 2164484578] = "Dump";
  VehicleHash2[VehicleHash2["Dune"] = 2633113103] = "Dune";
  VehicleHash2[VehicleHash2["Dune2"] = 534258863] = "Dune2";
  VehicleHash2[VehicleHash2["Dune3"] = 1897744184] = "Dune3";
  VehicleHash2[VehicleHash2["Dune4"] = 3467805257] = "Dune4";
  VehicleHash2[VehicleHash2["Dune5"] = 3982671785] = "Dune5";
  VehicleHash2[VehicleHash2["Duster"] = 970356638] = "Duster";
  VehicleHash2[VehicleHash2["Elegy"] = 196747873] = "Elegy";
  VehicleHash2[VehicleHash2["Elegy2"] = 3728579874] = "Elegy2";
  VehicleHash2[VehicleHash2["Emperor"] = 3609690755] = "Emperor";
  VehicleHash2[VehicleHash2["Emperor2"] = 2411965148] = "Emperor2";
  VehicleHash2[VehicleHash2["Emperor3"] = 3053254478] = "Emperor3";
  VehicleHash2[VehicleHash2["Enduro"] = 1753414259] = "Enduro";
  VehicleHash2[VehicleHash2["EntityXF"] = 3003014393] = "EntityXF";
  VehicleHash2[VehicleHash2["Esskey"] = 2035069708] = "Esskey";
  VehicleHash2[VehicleHash2["Exemplar"] = 4289813342] = "Exemplar";
  VehicleHash2[VehicleHash2["F620"] = 3703357e3] = "F620";
  VehicleHash2[VehicleHash2["Faction"] = 2175389151] = "Faction";
  VehicleHash2[VehicleHash2["Faction2"] = 2504420315] = "Faction2";
  VehicleHash2[VehicleHash2["Faction3"] = 2255212070] = "Faction3";
  VehicleHash2[VehicleHash2["Faggio"] = 2452219115] = "Faggio";
  VehicleHash2[VehicleHash2["Faggio2"] = 55628203] = "Faggio2";
  VehicleHash2[VehicleHash2["Faggio3"] = 3005788552] = "Faggio3";
  VehicleHash2[VehicleHash2["FBI"] = 1127131465] = "FBI";
  VehicleHash2[VehicleHash2["FBI2"] = 2647026068] = "FBI2";
  VehicleHash2[VehicleHash2["FCR"] = 627535535] = "FCR";
  VehicleHash2[VehicleHash2["FCR2"] = 3537231886] = "FCR2";
  VehicleHash2[VehicleHash2["Felon"] = 3903372712] = "Felon";
  VehicleHash2[VehicleHash2["Felon2"] = 4205676014] = "Felon2";
  VehicleHash2[VehicleHash2["Feltzer2"] = 2299640309] = "Feltzer2";
  VehicleHash2[VehicleHash2["Feltzer3"] = 2728226064] = "Feltzer3";
  VehicleHash2[VehicleHash2["FireTruk"] = 1938952078] = "FireTruk";
  VehicleHash2[VehicleHash2["Fixter"] = 3458454463] = "Fixter";
  VehicleHash2[VehicleHash2["Flatbed"] = 1353720154] = "Flatbed";
  VehicleHash2[VehicleHash2["Forklift"] = 1491375716] = "Forklift";
  VehicleHash2[VehicleHash2["FMJ"] = 1426219628] = "FMJ";
  VehicleHash2[VehicleHash2["FQ2"] = 3157435195] = "FQ2";
  VehicleHash2[VehicleHash2["Freight"] = 1030400667] = "Freight";
  VehicleHash2[VehicleHash2["FreightCar"] = 184361638] = "FreightCar";
  VehicleHash2[VehicleHash2["FreightCont1"] = 920453016] = "FreightCont1";
  VehicleHash2[VehicleHash2["FreightCont2"] = 240201337] = "FreightCont2";
  VehicleHash2[VehicleHash2["FreightGrain"] = 642617954] = "FreightGrain";
  VehicleHash2[VehicleHash2["FreightTrailer"] = 3517691494] = "FreightTrailer";
  VehicleHash2[VehicleHash2["Frogger"] = 744705981] = "Frogger";
  VehicleHash2[VehicleHash2["Frogger2"] = 1949211328] = "Frogger2";
  VehicleHash2[VehicleHash2["Fugitive"] = 1909141499] = "Fugitive";
  VehicleHash2[VehicleHash2["Furoregt"] = 3205927392] = "Furoregt";
  VehicleHash2[VehicleHash2["Fusilade"] = 499169875] = "Fusilade";
  VehicleHash2[VehicleHash2["Futo"] = 2016857647] = "Futo";
  VehicleHash2[VehicleHash2["Gargoyle"] = 741090084] = "Gargoyle";
  VehicleHash2[VehicleHash2["Gauntlet"] = 2494797253] = "Gauntlet";
  VehicleHash2[VehicleHash2["Gauntlet2"] = 349315417] = "Gauntlet2";
  VehicleHash2[VehicleHash2["GBurrito"] = 2549763894] = "GBurrito";
  VehicleHash2[VehicleHash2["GBurrito2"] = 296357396] = "GBurrito2";
  VehicleHash2[VehicleHash2["Glendale"] = 75131841] = "Glendale";
  VehicleHash2[VehicleHash2["GP1"] = 1234311532] = "GP1";
  VehicleHash2[VehicleHash2["GrainTrailer"] = 1019737494] = "GrainTrailer";
  VehicleHash2[VehicleHash2["Granger"] = 2519238556] = "Granger";
  VehicleHash2[VehicleHash2["Gresley"] = 2751205197] = "Gresley";
  VehicleHash2[VehicleHash2["Guardian"] = 2186977100] = "Guardian";
  VehicleHash2[VehicleHash2["Habanero"] = 884422927] = "Habanero";
  VehicleHash2[VehicleHash2["Hakuchou"] = 1265391242] = "Hakuchou";
  VehicleHash2[VehicleHash2["Hakuchou2"] = 4039289119] = "Hakuchou2";
  VehicleHash2[VehicleHash2["HalfTrack"] = 4262731174] = "HalfTrack";
  VehicleHash2[VehicleHash2["Handler"] = 444583674] = "Handler";
  VehicleHash2[VehicleHash2["Hauler"] = 1518533038] = "Hauler";
  VehicleHash2[VehicleHash2["Hauler2"] = 387748548] = "Hauler2";
  VehicleHash2[VehicleHash2["Hexer"] = 301427732] = "Hexer";
  VehicleHash2[VehicleHash2["Hotknife"] = 37348240] = "Hotknife";
  VehicleHash2[VehicleHash2["Huntley"] = 486987393] = "Huntley";
  VehicleHash2[VehicleHash2["Hydra"] = 970385471] = "Hydra";
  VehicleHash2[VehicleHash2["Infernus"] = 418536135] = "Infernus";
  VehicleHash2[VehicleHash2["Infernus2"] = 2889029532] = "Infernus2";
  VehicleHash2[VehicleHash2["Ingot"] = 3005245074] = "Ingot";
  VehicleHash2[VehicleHash2["Innovation"] = 4135840458] = "Innovation";
  VehicleHash2[VehicleHash2["Insurgent"] = 2434067162] = "Insurgent";
  VehicleHash2[VehicleHash2["Insurgent2"] = 2071877360] = "Insurgent2";
  VehicleHash2[VehicleHash2["Insurgent3"] = 2370534026] = "Insurgent3";
  VehicleHash2[VehicleHash2["Intruder"] = 886934177] = "Intruder";
  VehicleHash2[VehicleHash2["Issi2"] = 3117103977] = "Issi2";
  VehicleHash2[VehicleHash2["ItaliGTB"] = 2246633323] = "ItaliGTB";
  VehicleHash2[VehicleHash2["ItaliGTB2"] = 3812247419] = "ItaliGTB2";
  VehicleHash2[VehicleHash2["Jackal"] = 3670438162] = "Jackal";
  VehicleHash2[VehicleHash2["JB700"] = 1051415893] = "JB700";
  VehicleHash2[VehicleHash2["Jester"] = 2997294755] = "Jester";
  VehicleHash2[VehicleHash2["Jester2"] = 3188613414] = "Jester2";
  VehicleHash2[VehicleHash2["Jet"] = 1058115860] = "Jet";
  VehicleHash2[VehicleHash2["Jetmax"] = 861409633] = "Jetmax";
  VehicleHash2[VehicleHash2["Journey"] = 4174679674] = "Journey";
  VehicleHash2[VehicleHash2["Kalahari"] = 92612664] = "Kalahari";
  VehicleHash2[VehicleHash2["Khamelion"] = 544021352] = "Khamelion";
  VehicleHash2[VehicleHash2["Kuruma"] = 2922118804] = "Kuruma";
  VehicleHash2[VehicleHash2["Kuruma2"] = 410882957] = "Kuruma2";
  VehicleHash2[VehicleHash2["Landstalker"] = 1269098716] = "Landstalker";
  VehicleHash2[VehicleHash2["Lazer"] = 3013282534] = "Lazer";
  VehicleHash2[VehicleHash2["LE7B"] = 3062131285] = "LE7B";
  VehicleHash2[VehicleHash2["Lectro"] = 640818791] = "Lectro";
  VehicleHash2[VehicleHash2["Lguard"] = 469291905] = "Lguard";
  VehicleHash2[VehicleHash2["Limo2"] = 4180339789] = "Limo2";
  VehicleHash2[VehicleHash2["Lurcher"] = 2068293287] = "Lurcher";
  VehicleHash2[VehicleHash2["Luxor"] = 621481054] = "Luxor";
  VehicleHash2[VehicleHash2["Luxor2"] = 3080673438] = "Luxor2";
  VehicleHash2[VehicleHash2["Lynx"] = 482197771] = "Lynx";
  VehicleHash2[VehicleHash2["Mamba"] = 2634021974] = "Mamba";
  VehicleHash2[VehicleHash2["Mammatus"] = 2548391185] = "Mammatus";
  VehicleHash2[VehicleHash2["Manana"] = 2170765704] = "Manana";
  VehicleHash2[VehicleHash2["Manchez"] = 2771538552] = "Manchez";
  VehicleHash2[VehicleHash2["Marquis"] = 3251507587] = "Marquis";
  VehicleHash2[VehicleHash2["Marshall"] = 1233534620] = "Marshall";
  VehicleHash2[VehicleHash2["Massacro"] = 4152024626] = "Massacro";
  VehicleHash2[VehicleHash2["Massacro2"] = 3663206819] = "Massacro2";
  VehicleHash2[VehicleHash2["Maverick"] = 2634305738] = "Maverick";
  VehicleHash2[VehicleHash2["Mesa"] = 914654722] = "Mesa";
  VehicleHash2[VehicleHash2["Mesa2"] = 3546958660] = "Mesa2";
  VehicleHash2[VehicleHash2["Mesa3"] = 2230595153] = "Mesa3";
  VehicleHash2[VehicleHash2["MetroTrain"] = 868868440] = "MetroTrain";
  VehicleHash2[VehicleHash2["Miljet"] = 165154707] = "Miljet";
  VehicleHash2[VehicleHash2["Minivan"] = 3984502180] = "Minivan";
  VehicleHash2[VehicleHash2["Minivan2"] = 3168702960] = "Minivan2";
  VehicleHash2[VehicleHash2["Mixer"] = 3510150843] = "Mixer";
  VehicleHash2[VehicleHash2["Mixer2"] = 475220373] = "Mixer2";
  VehicleHash2[VehicleHash2["Monroe"] = 3861591579] = "Monroe";
  VehicleHash2[VehicleHash2["Monster"] = 3449006043] = "Monster";
  VehicleHash2[VehicleHash2["Moonbeam"] = 525509695] = "Moonbeam";
  VehicleHash2[VehicleHash2["Moonbeam2"] = 1896491931] = "Moonbeam2";
  VehicleHash2[VehicleHash2["Mower"] = 1783355638] = "Mower";
  VehicleHash2[VehicleHash2["Mule"] = 904750859] = "Mule";
  VehicleHash2[VehicleHash2["Mule2"] = 3244501995] = "Mule2";
  VehicleHash2[VehicleHash2["Mule3"] = 2242229361] = "Mule3";
  VehicleHash2[VehicleHash2["Nemesis"] = 3660088182] = "Nemesis";
  VehicleHash2[VehicleHash2["Nero"] = 1034187331] = "Nero";
  VehicleHash2[VehicleHash2["Nero2"] = 1093792632] = "Nero2";
  VehicleHash2[VehicleHash2["Nightblade"] = 2688780135] = "Nightblade";
  VehicleHash2[VehicleHash2["Nightshade"] = 2351681756] = "Nightshade";
  VehicleHash2[VehicleHash2["NightShark"] = 433954513] = "NightShark";
  VehicleHash2[VehicleHash2["Nimbus"] = 2999939664] = "Nimbus";
  VehicleHash2[VehicleHash2["Ninef"] = 1032823388] = "Ninef";
  VehicleHash2[VehicleHash2["Ninef2"] = 2833484545] = "Ninef2";
  VehicleHash2[VehicleHash2["Omnis"] = 3517794615] = "Omnis";
  VehicleHash2[VehicleHash2["Oppressor"] = 884483972] = "Oppressor";
  VehicleHash2[VehicleHash2["Oracle"] = 1348744438] = "Oracle";
  VehicleHash2[VehicleHash2["Oracle2"] = 3783366066] = "Oracle2";
  VehicleHash2[VehicleHash2["Osiris"] = 1987142870] = "Osiris";
  VehicleHash2[VehicleHash2["Packer"] = 569305213] = "Packer";
  VehicleHash2[VehicleHash2["Panto"] = 3863274624] = "Panto";
  VehicleHash2[VehicleHash2["Paradise"] = 1488164764] = "Paradise";
  VehicleHash2[VehicleHash2["Patriot"] = 3486509883] = "Patriot";
  VehicleHash2[VehicleHash2["PBus"] = 2287941233] = "PBus";
  VehicleHash2[VehicleHash2["PCJ"] = 3385765638] = "PCJ";
  VehicleHash2[VehicleHash2["Penetrator"] = 2536829930] = "Penetrator";
  VehicleHash2[VehicleHash2["Penumbra"] = 3917501776] = "Penumbra";
  VehicleHash2[VehicleHash2["Peyote"] = 1830407356] = "Peyote";
  VehicleHash2[VehicleHash2["Pfister811"] = 2465164804] = "Pfister811";
  VehicleHash2[VehicleHash2["Phantom"] = 2157618379] = "Phantom";
  VehicleHash2[VehicleHash2["Phantom2"] = 2645431192] = "Phantom2";
  VehicleHash2[VehicleHash2["Phantom3"] = 177270108] = "Phantom3";
  VehicleHash2[VehicleHash2["Phoenix"] = 2199527893] = "Phoenix";
  VehicleHash2[VehicleHash2["Picador"] = 1507916787] = "Picador";
  VehicleHash2[VehicleHash2["Pigalle"] = 1078682497] = "Pigalle";
  VehicleHash2[VehicleHash2["Police"] = 2046537925] = "Police";
  VehicleHash2[VehicleHash2["Police2"] = 2667966721] = "Police2";
  VehicleHash2[VehicleHash2["Police3"] = 1912215274] = "Police3";
  VehicleHash2[VehicleHash2["Police4"] = 2321795001] = "Police4";
  VehicleHash2[VehicleHash2["Policeb"] = 4260343491] = "Policeb";
  VehicleHash2[VehicleHash2["PoliceOld1"] = 2758042359] = "PoliceOld1";
  VehicleHash2[VehicleHash2["PoliceOld2"] = 2515846680] = "PoliceOld2";
  VehicleHash2[VehicleHash2["PoliceT"] = 456714581] = "PoliceT";
  VehicleHash2[VehicleHash2["Polmav"] = 353883353] = "Polmav";
  VehicleHash2[VehicleHash2["Pony"] = 4175309224] = "Pony";
  VehicleHash2[VehicleHash2["Pony2"] = 943752001] = "Pony2";
  VehicleHash2[VehicleHash2["Pounder"] = 2112052861] = "Pounder";
  VehicleHash2[VehicleHash2["Prairie"] = 2844316578] = "Prairie";
  VehicleHash2[VehicleHash2["Pranger"] = 741586030] = "Pranger";
  VehicleHash2[VehicleHash2["Predator"] = 3806844075] = "Predator";
  VehicleHash2[VehicleHash2["Premier"] = 2411098011] = "Premier";
  VehicleHash2[VehicleHash2["Primo"] = 3144368207] = "Primo";
  VehicleHash2[VehicleHash2["Primo2"] = 2254540506] = "Primo2";
  VehicleHash2[VehicleHash2["PropTrailer"] = 356391690] = "PropTrailer";
  VehicleHash2[VehicleHash2["Prototipo"] = 2123327359] = "Prototipo";
  VehicleHash2[VehicleHash2["Radi"] = 2643899483] = "Radi";
  VehicleHash2[VehicleHash2["RakeTrailer"] = 390902130] = "RakeTrailer";
  VehicleHash2[VehicleHash2["RancherXL"] = 1645267888] = "RancherXL";
  VehicleHash2[VehicleHash2["RancherXL2"] = 1933662059] = "RancherXL2";
  VehicleHash2[VehicleHash2["RallyTruck"] = 2191146052] = "RallyTruck";
  VehicleHash2[VehicleHash2["RapidGT"] = 2360515092] = "RapidGT";
  VehicleHash2[VehicleHash2["RapidGT2"] = 1737773231] = "RapidGT2";
  VehicleHash2[VehicleHash2["Raptor"] = 3620039993] = "Raptor";
  VehicleHash2[VehicleHash2["RatBike"] = 1873600305] = "RatBike";
  VehicleHash2[VehicleHash2["RatLoader"] = 3627815886] = "RatLoader";
  VehicleHash2[VehicleHash2["RatLoader2"] = 3705788919] = "RatLoader2";
  VehicleHash2[VehicleHash2["Reaper"] = 234062309] = "Reaper";
  VehicleHash2[VehicleHash2["Rebel"] = 3087195462] = "Rebel";
  VehicleHash2[VehicleHash2["Rebel2"] = 2249373259] = "Rebel2";
  VehicleHash2[VehicleHash2["Regina"] = 4280472072] = "Regina";
  VehicleHash2[VehicleHash2["RentalBus"] = 3196165219] = "RentalBus";
  VehicleHash2[VehicleHash2["Rhapsody"] = 841808271] = "Rhapsody";
  VehicleHash2[VehicleHash2["Rhino"] = 782665360] = "Rhino";
  VehicleHash2[VehicleHash2["Riot"] = 3089277354] = "Riot";
  VehicleHash2[VehicleHash2["Ripley"] = 3448987385] = "Ripley";
  VehicleHash2[VehicleHash2["Rocoto"] = 2136773105] = "Rocoto";
  VehicleHash2[VehicleHash2["Romero"] = 627094268] = "Romero";
  VehicleHash2[VehicleHash2["Rubble"] = 2589662668] = "Rubble";
  VehicleHash2[VehicleHash2["Ruffian"] = 3401388520] = "Ruffian";
  VehicleHash2[VehicleHash2["Ruiner"] = 4067225593] = "Ruiner";
  VehicleHash2[VehicleHash2["Ruiner2"] = 941494461] = "Ruiner2";
  VehicleHash2[VehicleHash2["Ruiner3"] = 777714999] = "Ruiner3";
  VehicleHash2[VehicleHash2["Rumpo"] = 1162065741] = "Rumpo";
  VehicleHash2[VehicleHash2["Rumpo2"] = 2518351607] = "Rumpo2";
  VehicleHash2[VehicleHash2["Rumpo3"] = 1475773103] = "Rumpo3";
  VehicleHash2[VehicleHash2["Ruston"] = 719660200] = "Ruston";
  VehicleHash2[VehicleHash2["SabreGT"] = 2609945748] = "SabreGT";
  VehicleHash2[VehicleHash2["SabreGT2"] = 223258115] = "SabreGT2";
  VehicleHash2[VehicleHash2["Sadler"] = 3695398481] = "Sadler";
  VehicleHash2[VehicleHash2["Sadler2"] = 734217681] = "Sadler2";
  VehicleHash2[VehicleHash2["Sanchez"] = 788045382] = "Sanchez";
  VehicleHash2[VehicleHash2["Sanchez2"] = 2841686334] = "Sanchez2";
  VehicleHash2[VehicleHash2["Sanctus"] = 1491277511] = "Sanctus";
  VehicleHash2[VehicleHash2["Sandking"] = 3105951696] = "Sandking";
  VehicleHash2[VehicleHash2["Sandking2"] = 989381445] = "Sandking2";
  VehicleHash2[VehicleHash2["Savage"] = 4212341271] = "Savage";
  VehicleHash2[VehicleHash2["Schafter2"] = 3039514899] = "Schafter2";
  VehicleHash2[VehicleHash2["Schafter3"] = 2809443750] = "Schafter3";
  VehicleHash2[VehicleHash2["Schafter4"] = 1489967196] = "Schafter4";
  VehicleHash2[VehicleHash2["Schafter5"] = 3406724313] = "Schafter5";
  VehicleHash2[VehicleHash2["Schafter6"] = 1922255844] = "Schafter6";
  VehicleHash2[VehicleHash2["Schwarzer"] = 3548084598] = "Schwarzer";
  VehicleHash2[VehicleHash2["Scorcher"] = 4108429845] = "Scorcher";
  VehicleHash2[VehicleHash2["Scrap"] = 2594165727] = "Scrap";
  VehicleHash2[VehicleHash2["Seashark"] = 3264692260] = "Seashark";
  VehicleHash2[VehicleHash2["Seashark2"] = 3678636260] = "Seashark2";
  VehicleHash2[VehicleHash2["Seashark3"] = 3983945033] = "Seashark3";
  VehicleHash2[VehicleHash2["Seminole"] = 1221512915] = "Seminole";
  VehicleHash2[VehicleHash2["Sentinel"] = 1349725314] = "Sentinel";
  VehicleHash2[VehicleHash2["Sentinel2"] = 873639469] = "Sentinel2";
  VehicleHash2[VehicleHash2["Serrano"] = 1337041428] = "Serrano";
  VehicleHash2[VehicleHash2["Seven70"] = 2537130571] = "Seven70";
  VehicleHash2[VehicleHash2["Shamal"] = 3080461301] = "Shamal";
  VehicleHash2[VehicleHash2["Sheava"] = 819197656] = "Sheava";
  VehicleHash2[VehicleHash2["Sheriff"] = 2611638396] = "Sheriff";
  VehicleHash2[VehicleHash2["Sheriff2"] = 1922257928] = "Sheriff2";
  VehicleHash2[VehicleHash2["Shotaro"] = 3889340782] = "Shotaro";
  VehicleHash2[VehicleHash2["Skylift"] = 1044954915] = "Skylift";
  VehicleHash2[VehicleHash2["SlamVan"] = 729783779] = "SlamVan";
  VehicleHash2[VehicleHash2["SlamVan2"] = 833469436] = "SlamVan2";
  VehicleHash2[VehicleHash2["SlamVan3"] = 1119641113] = "SlamVan3";
  VehicleHash2[VehicleHash2["Sovereign"] = 743478836] = "Sovereign";
  VehicleHash2[VehicleHash2["Specter"] = 1886268224] = "Specter";
  VehicleHash2[VehicleHash2["Specter2"] = 1074745671] = "Specter2";
  VehicleHash2[VehicleHash2["Speeder"] = 231083307] = "Speeder";
  VehicleHash2[VehicleHash2["Speeder2"] = 437538602] = "Speeder2";
  VehicleHash2[VehicleHash2["Speedo"] = 3484649228] = "Speedo";
  VehicleHash2[VehicleHash2["Speedo2"] = 728614474] = "Speedo2";
  VehicleHash2[VehicleHash2["Squalo"] = 400514754] = "Squalo";
  VehicleHash2[VehicleHash2["Stalion"] = 1923400478] = "Stalion";
  VehicleHash2[VehicleHash2["Stalion2"] = 3893323758] = "Stalion2";
  VehicleHash2[VehicleHash2["Stanier"] = 2817386317] = "Stanier";
  VehicleHash2[VehicleHash2["Stinger"] = 1545842587] = "Stinger";
  VehicleHash2[VehicleHash2["StingerGT"] = 2196019706] = "StingerGT";
  VehicleHash2[VehicleHash2["Stockade"] = 1747439474] = "Stockade";
  VehicleHash2[VehicleHash2["Stockade3"] = 4080511798] = "Stockade3";
  VehicleHash2[VehicleHash2["Stratum"] = 1723137093] = "Stratum";
  VehicleHash2[VehicleHash2["Stretch"] = 2333339779] = "Stretch";
  VehicleHash2[VehicleHash2["Stunt"] = 2172210288] = "Stunt";
  VehicleHash2[VehicleHash2["Submersible"] = 771711535] = "Submersible";
  VehicleHash2[VehicleHash2["Submersible2"] = 3228633070] = "Submersible2";
  VehicleHash2[VehicleHash2["Sultan"] = 970598228] = "Sultan";
  VehicleHash2[VehicleHash2["SultanRS"] = 3999278268] = "SultanRS";
  VehicleHash2[VehicleHash2["Suntrap"] = 4012021193] = "Suntrap";
  VehicleHash2[VehicleHash2["Superd"] = 1123216662] = "Superd";
  VehicleHash2[VehicleHash2["Supervolito"] = 710198397] = "Supervolito";
  VehicleHash2[VehicleHash2["Supervolito2"] = 2623428164] = "Supervolito2";
  VehicleHash2[VehicleHash2["Surano"] = 384071873] = "Surano";
  VehicleHash2[VehicleHash2["Surfer"] = 699456151] = "Surfer";
  VehicleHash2[VehicleHash2["Surfer2"] = 2983726598] = "Surfer2";
  VehicleHash2[VehicleHash2["Surge"] = 2400073108] = "Surge";
  VehicleHash2[VehicleHash2["Swift2"] = 1075432268] = "Swift2";
  VehicleHash2[VehicleHash2["Swift"] = 3955379698] = "Swift";
  VehicleHash2[VehicleHash2["T20"] = 1663218586] = "T20";
  VehicleHash2[VehicleHash2["Taco"] = 1951180813] = "Taco";
  VehicleHash2[VehicleHash2["Tailgater"] = 3286105550] = "Tailgater";
  VehicleHash2[VehicleHash2["Tampa"] = 972671128] = "Tampa";
  VehicleHash2[VehicleHash2["Tampa2"] = 3223586949] = "Tampa2";
  VehicleHash2[VehicleHash2["Tampa3"] = 3084515313] = "Tampa3";
  VehicleHash2[VehicleHash2["Tanker"] = 3564062519] = "Tanker";
  VehicleHash2[VehicleHash2["Tanker2"] = 1956216962] = "Tanker2";
  VehicleHash2[VehicleHash2["TankerCar"] = 586013744] = "TankerCar";
  VehicleHash2[VehicleHash2["Taxi"] = 3338918751] = "Taxi";
  VehicleHash2[VehicleHash2["Technical"] = 2198148358] = "Technical";
  VehicleHash2[VehicleHash2["Technical2"] = 1180875963] = "Technical2";
  VehicleHash2[VehicleHash2["Technical3"] = 1356124575] = "Technical3";
  VehicleHash2[VehicleHash2["Tempesta"] = 272929391] = "Tempesta";
  VehicleHash2[VehicleHash2["Thrust"] = 1836027715] = "Thrust";
  VehicleHash2[VehicleHash2["TipTruck"] = 48339065] = "TipTruck";
  VehicleHash2[VehicleHash2["TipTruck2"] = 3347205726] = "TipTruck2";
  VehicleHash2[VehicleHash2["Titan"] = 1981688531] = "Titan";
  VehicleHash2[VehicleHash2["Torero"] = 1504306544] = "Torero";
  VehicleHash2[VehicleHash2["Tornado"] = 464687292] = "Tornado";
  VehicleHash2[VehicleHash2["Tornado2"] = 1531094468] = "Tornado2";
  VehicleHash2[VehicleHash2["Tornado3"] = 1762279763] = "Tornado3";
  VehicleHash2[VehicleHash2["Tornado4"] = 2261744861] = "Tornado4";
  VehicleHash2[VehicleHash2["Tornado5"] = 2497353967] = "Tornado5";
  VehicleHash2[VehicleHash2["Tornado6"] = 2736567667] = "Tornado6";
  VehicleHash2[VehicleHash2["Toro"] = 1070967343] = "Toro";
  VehicleHash2[VehicleHash2["Toro2"] = 908897389] = "Toro2";
  VehicleHash2[VehicleHash2["Tourbus"] = 1941029835] = "Tourbus";
  VehicleHash2[VehicleHash2["TowTruck"] = 2971866336] = "TowTruck";
  VehicleHash2[VehicleHash2["TowTruck2"] = 3852654278] = "TowTruck2";
  VehicleHash2[VehicleHash2["TR2"] = 2078290630] = "TR2";
  VehicleHash2[VehicleHash2["TR3"] = 1784254509] = "TR3";
  VehicleHash2[VehicleHash2["TR4"] = 2091594960] = "TR4";
  VehicleHash2[VehicleHash2["Tractor"] = 1641462412] = "Tractor";
  VehicleHash2[VehicleHash2["Tractor2"] = 2218488798] = "Tractor2";
  VehicleHash2[VehicleHash2["Tractor3"] = 1445631933] = "Tractor3";
  VehicleHash2[VehicleHash2["TrailerLogs"] = 2016027501] = "TrailerLogs";
  VehicleHash2[VehicleHash2["TrailerLarge"] = 1502869817] = "TrailerLarge";
  VehicleHash2[VehicleHash2["Trailers"] = 3417488910] = "Trailers";
  VehicleHash2[VehicleHash2["Trailers2"] = 2715434129] = "Trailers2";
  VehicleHash2[VehicleHash2["Trailers3"] = 2236089197] = "Trailers3";
  VehicleHash2[VehicleHash2["Trailers4"] = 3194418602] = "Trailers4";
  VehicleHash2[VehicleHash2["TrailerSmall"] = 712162987] = "TrailerSmall";
  VehicleHash2[VehicleHash2["TrailerSmall2"] = 2413121211] = "TrailerSmall2";
  VehicleHash2[VehicleHash2["Trash"] = 1917016601] = "Trash";
  VehicleHash2[VehicleHash2["Trash2"] = 3039269212] = "Trash2";
  VehicleHash2[VehicleHash2["TRFlat"] = 2942498482] = "TRFlat";
  VehicleHash2[VehicleHash2["TriBike"] = 1127861609] = "TriBike";
  VehicleHash2[VehicleHash2["TriBike2"] = 3061159916] = "TriBike2";
  VehicleHash2[VehicleHash2["TriBike3"] = 3894672200] = "TriBike3";
  VehicleHash2[VehicleHash2["TrophyTruck"] = 101905590] = "TrophyTruck";
  VehicleHash2[VehicleHash2["TrophyTruck2"] = 3631668194] = "TrophyTruck2";
  VehicleHash2[VehicleHash2["Tropic"] = 290013743] = "Tropic";
  VehicleHash2[VehicleHash2["Tropic2"] = 1448677353] = "Tropic2";
  VehicleHash2[VehicleHash2["Tropos"] = 1887331236] = "Tropos";
  VehicleHash2[VehicleHash2["Tug"] = 2194326579] = "Tug";
  VehicleHash2[VehicleHash2["Turismor"] = 408192225] = "Turismor";
  VehicleHash2[VehicleHash2["Turismo2"] = 3312836369] = "Turismo2";
  VehicleHash2[VehicleHash2["TVTrailer"] = 2524324030] = "TVTrailer";
  VehicleHash2[VehicleHash2["Tyrus"] = 2067820283] = "Tyrus";
  VehicleHash2[VehicleHash2["UtilliTruck"] = 516990260] = "UtilliTruck";
  VehicleHash2[VehicleHash2["UtilliTruck2"] = 887537515] = "UtilliTruck2";
  VehicleHash2[VehicleHash2["UtilliTruck3"] = 2132890591] = "UtilliTruck3";
  VehicleHash2[VehicleHash2["Vacca"] = 338562499] = "Vacca";
  VehicleHash2[VehicleHash2["Vader"] = 4154065143] = "Vader";
  VehicleHash2[VehicleHash2["Vagner"] = 1939284556] = "Vagner";
  VehicleHash2[VehicleHash2["Valkyrie"] = 2694714877] = "Valkyrie";
  VehicleHash2[VehicleHash2["Valkyrie2"] = 1543134283] = "Valkyrie2";
  VehicleHash2[VehicleHash2["Velum"] = 2621610858] = "Velum";
  VehicleHash2[VehicleHash2["Velum2"] = 1077420264] = "Velum2";
  VehicleHash2[VehicleHash2["Verlierer2"] = 1102544804] = "Verlierer2";
  VehicleHash2[VehicleHash2["Vestra"] = 1341619767] = "Vestra";
  VehicleHash2[VehicleHash2["Vigero"] = 3469130167] = "Vigero";
  VehicleHash2[VehicleHash2["Vindicator"] = 2941886209] = "Vindicator";
  VehicleHash2[VehicleHash2["Virgo"] = 3796912450] = "Virgo";
  VehicleHash2[VehicleHash2["Virgo2"] = 3395457658] = "Virgo2";
  VehicleHash2[VehicleHash2["Virgo3"] = 16646064] = "Virgo3";
  VehicleHash2[VehicleHash2["Volatus"] = 2449479409] = "Volatus";
  VehicleHash2[VehicleHash2["Voltic"] = 2672523198] = "Voltic";
  VehicleHash2[VehicleHash2["Voltic2"] = 989294410] = "Voltic2";
  VehicleHash2[VehicleHash2["Voodoo"] = 2006667053] = "Voodoo";
  VehicleHash2[VehicleHash2["Voodoo2"] = 523724515] = "Voodoo2";
  VehicleHash2[VehicleHash2["Vortex"] = 3685342204] = "Vortex";
  VehicleHash2[VehicleHash2["Warrener"] = 1373123368] = "Warrener";
  VehicleHash2[VehicleHash2["Washington"] = 1777363799] = "Washington";
  VehicleHash2[VehicleHash2["Wastelander"] = 2382949506] = "Wastelander";
  VehicleHash2[VehicleHash2["Windsor"] = 1581459400] = "Windsor";
  VehicleHash2[VehicleHash2["Windsor2"] = 2364918497] = "Windsor2";
  VehicleHash2[VehicleHash2["Wolfsbane"] = 3676349299] = "Wolfsbane";
  VehicleHash2[VehicleHash2["XA21"] = 917809321] = "XA21";
  VehicleHash2[VehicleHash2["XLS"] = 1203490606] = "XLS";
  VehicleHash2[VehicleHash2["XLS2"] = 3862958888] = "XLS2";
  VehicleHash2[VehicleHash2["Youga"] = 65402552] = "Youga";
  VehicleHash2[VehicleHash2["Youga2"] = 1026149675] = "Youga2";
  VehicleHash2[VehicleHash2["Zentorno"] = 2891838741] = "Zentorno";
  VehicleHash2[VehicleHash2["Zion"] = 3172678083] = "Zion";
  VehicleHash2[VehicleHash2["Zion2"] = 3101863448] = "Zion2";
  VehicleHash2[VehicleHash2["ZombieA"] = 3285698347] = "ZombieA";
  VehicleHash2[VehicleHash2["ZombieB"] = 3724934023] = "ZombieB";
  VehicleHash2[VehicleHash2["ZType"] = 758895617] = "ZType";
  return VehicleHash2;
})(VehicleHash || {});

// src/fivem/hashes/WeaponHash.ts
var WeaponHash = /* @__PURE__ */ ((WeaponHash2) => {
  WeaponHash2[WeaponHash2["Dagger"] = -1834847097] = "Dagger";
  WeaponHash2[WeaponHash2["Bat"] = -1786099057] = "Bat";
  WeaponHash2[WeaponHash2["Bottle"] = -102323637] = "Bottle";
  WeaponHash2[WeaponHash2["Crowbar"] = -2067956739] = "Crowbar";
  WeaponHash2[WeaponHash2["Unarmed"] = -1569615261] = "Unarmed";
  WeaponHash2[WeaponHash2["Flashlight"] = -1951375401] = "Flashlight";
  WeaponHash2[WeaponHash2["GolfClub"] = 1141786504] = "GolfClub";
  WeaponHash2[WeaponHash2["Hammer"] = 1317494643] = "Hammer";
  WeaponHash2[WeaponHash2["Hatchet"] = -102973651] = "Hatchet";
  WeaponHash2[WeaponHash2["KnuckleDuster"] = -656458692] = "KnuckleDuster";
  WeaponHash2[WeaponHash2["Knife"] = -1716189206] = "Knife";
  WeaponHash2[WeaponHash2["Machete"] = -581044007] = "Machete";
  WeaponHash2[WeaponHash2["SwitchBlade"] = -538741184] = "SwitchBlade";
  WeaponHash2[WeaponHash2["Nightstick"] = 1737195953] = "Nightstick";
  WeaponHash2[WeaponHash2["Wrench"] = 419712736] = "Wrench";
  WeaponHash2[WeaponHash2["BattleAxe"] = -853065399] = "BattleAxe";
  WeaponHash2[WeaponHash2["PoolCue"] = -1810795771] = "PoolCue";
  WeaponHash2[WeaponHash2["StoneHatchet"] = 940833800] = "StoneHatchet";
  WeaponHash2[WeaponHash2["Pistol"] = 453432689] = "Pistol";
  WeaponHash2[WeaponHash2["PistolMk2"] = 3219281620] = "PistolMk2";
  WeaponHash2[WeaponHash2["CombatPistol"] = 1593441988] = "CombatPistol";
  WeaponHash2[WeaponHash2["APPistol"] = 584646201] = "APPistol";
  WeaponHash2[WeaponHash2["StunGun"] = 911657153] = "StunGun";
  WeaponHash2[WeaponHash2["StunGunMp"] = 1171102963] = "StunGunMp";
  WeaponHash2[WeaponHash2["Pistol50"] = -1716589765] = "Pistol50";
  WeaponHash2[WeaponHash2["SNSPistol"] = -1076751822] = "SNSPistol";
  WeaponHash2[WeaponHash2["SNSPistolMk2"] = -2009644972] = "SNSPistolMk2";
  WeaponHash2[WeaponHash2["HeavyPistol"] = -771403250] = "HeavyPistol";
  WeaponHash2[WeaponHash2["VintagePistol"] = 137902532] = "VintagePistol";
  WeaponHash2[WeaponHash2["FlareGun"] = 1198879012] = "FlareGun";
  WeaponHash2[WeaponHash2["MarksmanPistol"] = -598887786] = "MarksmanPistol";
  WeaponHash2[WeaponHash2["Revolver"] = -1045183535] = "Revolver";
  WeaponHash2[WeaponHash2["RevolverMk2"] = -879347409] = "RevolverMk2";
  WeaponHash2[WeaponHash2["DoubleAction"] = -1746263880] = "DoubleAction";
  WeaponHash2[WeaponHash2["RayPistol"] = -1355376991] = "RayPistol";
  WeaponHash2[WeaponHash2["CeramicPistol"] = 727643628] = "CeramicPistol";
  WeaponHash2[WeaponHash2["NavyRevolver"] = -1853920116] = "NavyRevolver";
  WeaponHash2[WeaponHash2["GadgetPistol"] = 1470379660] = "GadgetPistol";
  WeaponHash2[WeaponHash2["MicroSMG"] = 324215364] = "MicroSMG";
  WeaponHash2[WeaponHash2["SMG"] = 736523883] = "SMG";
  WeaponHash2[WeaponHash2["SMGMk2"] = 2024373456] = "SMGMk2";
  WeaponHash2[WeaponHash2["AssaultSMG"] = -270015777] = "AssaultSMG";
  WeaponHash2[WeaponHash2["CombatPDW"] = 171789620] = "CombatPDW";
  WeaponHash2[WeaponHash2["MachinePistol"] = -619010992] = "MachinePistol";
  WeaponHash2[WeaponHash2["MiniSMG"] = -1121678507] = "MiniSMG";
  WeaponHash2[WeaponHash2["RayCarbine"] = 1198256469] = "RayCarbine";
  WeaponHash2[WeaponHash2["MG"] = -1660422300] = "MG";
  WeaponHash2[WeaponHash2["CombatMG"] = 2144741730] = "CombatMG";
  WeaponHash2[WeaponHash2["CombatMGMk2"] = 3686625920] = "CombatMGMk2";
  WeaponHash2[WeaponHash2["Gusenberg"] = 1627465347] = "Gusenberg";
  WeaponHash2[WeaponHash2["PumpShotgun"] = 487013001] = "PumpShotgun";
  WeaponHash2[WeaponHash2["PumpShotgunMk2"] = 1432025498] = "PumpShotgunMk2";
  WeaponHash2[WeaponHash2["SawnOffShotgun"] = 2017895192] = "SawnOffShotgun";
  WeaponHash2[WeaponHash2["AssaultShotgun"] = -494615257] = "AssaultShotgun";
  WeaponHash2[WeaponHash2["BullpupShotgun"] = -1654528753] = "BullpupShotgun";
  WeaponHash2[WeaponHash2["Musket"] = -1466123874] = "Musket";
  WeaponHash2[WeaponHash2["HeavyShotgun"] = 984333226] = "HeavyShotgun";
  WeaponHash2[WeaponHash2["DoubleBarrelShotgun"] = -275439685] = "DoubleBarrelShotgun";
  WeaponHash2[WeaponHash2["SweeperShotgun"] = 317205821] = "SweeperShotgun";
  WeaponHash2[WeaponHash2["CombatShotgun"] = 94989220] = "CombatShotgun";
  WeaponHash2[WeaponHash2["AssaultRifle"] = -1074790547] = "AssaultRifle";
  WeaponHash2[WeaponHash2["AssaultRifleMk2"] = 961495388] = "AssaultRifleMk2";
  WeaponHash2[WeaponHash2["CarbineRifle"] = -2084633992] = "CarbineRifle";
  WeaponHash2[WeaponHash2["CarbineRifleMk2"] = 4208062921] = "CarbineRifleMk2";
  WeaponHash2[WeaponHash2["AdvancedRifle"] = -1357824103] = "AdvancedRifle";
  WeaponHash2[WeaponHash2["SpecialCarbine"] = -1063057011] = "SpecialCarbine";
  WeaponHash2[WeaponHash2["SpecialCarbineMk2"] = -1768145561] = "SpecialCarbineMk2";
  WeaponHash2[WeaponHash2["BullpupRifle"] = 2132975508] = "BullpupRifle";
  WeaponHash2[WeaponHash2["BullpupRifleMk2"] = -2066285827] = "BullpupRifleMk2";
  WeaponHash2[WeaponHash2["CompactRifle"] = 1649403952] = "CompactRifle";
  WeaponHash2[WeaponHash2["MilitaryRifle"] = -1658906650] = "MilitaryRifle";
  WeaponHash2[WeaponHash2["HeavyRifle"] = -947031628] = "HeavyRifle";
  WeaponHash2[WeaponHash2["SniperRifle"] = 100416529] = "SniperRifle";
  WeaponHash2[WeaponHash2["HeavySniper"] = 205991906] = "HeavySniper";
  WeaponHash2[WeaponHash2["HeavySniperMk2"] = 177293209] = "HeavySniperMk2";
  WeaponHash2[WeaponHash2["MarksmanRifle"] = -952879014] = "MarksmanRifle";
  WeaponHash2[WeaponHash2["MarksmanRifleMk2"] = 1785463520] = "MarksmanRifleMk2";
  WeaponHash2[WeaponHash2["RPG"] = -1312131151] = "RPG";
  WeaponHash2[WeaponHash2["GrenadeLauncher"] = -1568386805] = "GrenadeLauncher";
  WeaponHash2[WeaponHash2["GrenadeLauncherSmoke"] = 1305664598] = "GrenadeLauncherSmoke";
  WeaponHash2[WeaponHash2["Minigun"] = 1119849093] = "Minigun";
  WeaponHash2[WeaponHash2["Firework"] = 2138347493] = "Firework";
  WeaponHash2[WeaponHash2["Railgun"] = 1834241177] = "Railgun";
  WeaponHash2[WeaponHash2["HomingLauncher"] = 1672152130] = "HomingLauncher";
  WeaponHash2[WeaponHash2["CompactGrenadeLauncher"] = 125959754] = "CompactGrenadeLauncher";
  WeaponHash2[WeaponHash2["RayMinigun"] = -1238556825] = "RayMinigun";
  WeaponHash2[WeaponHash2["EmpLauncher"] = -618237638] = "EmpLauncher";
  WeaponHash2[WeaponHash2["Grenade"] = -1813897027] = "Grenade";
  WeaponHash2[WeaponHash2["BZGas"] = -1600701090] = "BZGas";
  WeaponHash2[WeaponHash2["Molotov"] = 615608432] = "Molotov";
  WeaponHash2[WeaponHash2["StickyBomb"] = 741814745] = "StickyBomb";
  WeaponHash2[WeaponHash2["ProximityMine"] = -1420407917] = "ProximityMine";
  WeaponHash2[WeaponHash2["Snowball"] = 126349499] = "Snowball";
  WeaponHash2[WeaponHash2["PipeBomb"] = -1169823560] = "PipeBomb";
  WeaponHash2[WeaponHash2["Ball"] = 600439132] = "Ball";
  WeaponHash2[WeaponHash2["SmokeGrenade"] = -37975472] = "SmokeGrenade";
  WeaponHash2[WeaponHash2["Flare"] = 1233104067] = "Flare";
  WeaponHash2[WeaponHash2["PetrolCan"] = 883325847] = "PetrolCan";
  WeaponHash2[WeaponHash2["Parachute"] = -72657034] = "Parachute";
  WeaponHash2[WeaponHash2["FireExtinguisher"] = 101631238] = "FireExtinguisher";
  WeaponHash2[WeaponHash2["HazardCan"] = -1168940174] = "HazardCan";
  WeaponHash2[WeaponHash2["FertilizerCan"] = 406929569] = "FertilizerCan";
  return WeaponHash2;
})(WeaponHash || {});
var VehicleWeaponHash = /* @__PURE__ */ ((VehicleWeaponHash2) => {
  VehicleWeaponHash2[VehicleWeaponHash2["Invalid"] = -1] = "Invalid";
  VehicleWeaponHash2[VehicleWeaponHash2["Tank"] = 1945616459] = "Tank";
  VehicleWeaponHash2[VehicleWeaponHash2["SpaceRocket"] = -123497569] = "SpaceRocket";
  VehicleWeaponHash2[VehicleWeaponHash2["PlaneRocket"] = -821520672] = "PlaneRocket";
  VehicleWeaponHash2[VehicleWeaponHash2["PlayerLaser"] = -268631733] = "PlayerLaser";
  VehicleWeaponHash2[VehicleWeaponHash2["PlayerBullet"] = 1259576109] = "PlayerBullet";
  VehicleWeaponHash2[VehicleWeaponHash2["PlayerBuzzard"] = 1186503822] = "PlayerBuzzard";
  VehicleWeaponHash2[VehicleWeaponHash2["PlayerHunter"] = -1625648674] = "PlayerHunter";
  VehicleWeaponHash2[VehicleWeaponHash2["PlayerLazer"] = -494786007] = "PlayerLazer";
  VehicleWeaponHash2[VehicleWeaponHash2["EnemyLaser"] = 1566990507] = "EnemyLaser";
  VehicleWeaponHash2[VehicleWeaponHash2["SearchLight"] = -844344963] = "SearchLight";
  VehicleWeaponHash2[VehicleWeaponHash2["Radar"] = -764006018] = "Radar";
  return VehicleWeaponHash2;
})(VehicleWeaponHash || {});
var AmmoType = /* @__PURE__ */ ((AmmoType2) => {
  AmmoType2[AmmoType2["Melee"] = 0] = "Melee";
  AmmoType2[AmmoType2["FireExtinguisher"] = 1359393852] = "FireExtinguisher";
  AmmoType2[AmmoType2["Flare"] = 1808594799] = "Flare";
  AmmoType2[AmmoType2["FlareGun"] = 1173416293] = "FlareGun";
  AmmoType2[AmmoType2["PetrolCan"] = 3395492001] = "PetrolCan";
  AmmoType2[AmmoType2["Shotgun"] = 2416459067] = "Shotgun";
  AmmoType2[AmmoType2["Pistol"] = 1950175060] = "Pistol";
  AmmoType2[AmmoType2["Ball"] = 4287981158] = "Ball";
  AmmoType2[AmmoType2["Snowball"] = 2182627693] = "Snowball";
  AmmoType2[AmmoType2["Sniper"] = 1285032059] = "Sniper";
  AmmoType2[AmmoType2["AssaultRifle"] = 218444191] = "AssaultRifle";
  AmmoType2[AmmoType2["SMG"] = 1820140472] = "SMG";
  AmmoType2[AmmoType2["Molotov"] = 1446246869] = "Molotov";
  AmmoType2[AmmoType2["StunGun"] = 2955849184] = "StunGun";
  AmmoType2[AmmoType2["MG"] = 1788949567] = "MG";
  AmmoType2[AmmoType2["GrenadeLauncher"] = 1003267566] = "GrenadeLauncher";
  AmmoType2[AmmoType2["RPG"] = 1742569970] = "RPG";
  AmmoType2[AmmoType2["Minigun"] = 2680539266] = "Minigun";
  AmmoType2[AmmoType2["Firework"] = 2938367503] = "Firework";
  AmmoType2[AmmoType2["Railgun"] = 2034517757] = "Railgun";
  AmmoType2[AmmoType2["HomingLauncher"] = 2568293933] = "HomingLauncher";
  AmmoType2[AmmoType2["Grenade"] = 1003688881] = "Grenade";
  AmmoType2[AmmoType2["StickyBomb"] = 1411692055] = "StickyBomb";
  AmmoType2[AmmoType2["ProximityMine"] = 2938243239] = "ProximityMine";
  AmmoType2[AmmoType2["PipeBomb"] = 357983224] = "PipeBomb";
  AmmoType2[AmmoType2["SmokeGrenade"] = 3859679398] = "SmokeGrenade";
  AmmoType2[AmmoType2["BZGas"] = 2608103076] = "BZGas";
  return AmmoType2;
})(AmmoType || {});

// src/fivem/hashes/WeatherTypeHash.ts
var WeatherTypeHash = /* @__PURE__ */ ((WeatherTypeHash2) => {
  WeatherTypeHash2[WeatherTypeHash2["Unknown"] = -1] = "Unknown";
  WeatherTypeHash2[WeatherTypeHash2["ExtraSunny"] = -1750463879] = "ExtraSunny";
  WeatherTypeHash2[WeatherTypeHash2["Clear"] = 916995460] = "Clear";
  WeatherTypeHash2[WeatherTypeHash2["Neutral"] = -1530260698] = "Neutral";
  WeatherTypeHash2[WeatherTypeHash2["Smog"] = 282916021] = "Smog";
  WeatherTypeHash2[WeatherTypeHash2["Foggy"] = -1368164796] = "Foggy";
  WeatherTypeHash2[WeatherTypeHash2["Clouds"] = 821931868] = "Clouds";
  WeatherTypeHash2[WeatherTypeHash2["Overcast"] = -1148613331] = "Overcast";
  WeatherTypeHash2[WeatherTypeHash2["Clearing"] = 1840358669] = "Clearing";
  WeatherTypeHash2[WeatherTypeHash2["Raining"] = 1420204096] = "Raining";
  WeatherTypeHash2[WeatherTypeHash2["ThunderStorm"] = -1233681761] = "ThunderStorm";
  WeatherTypeHash2[WeatherTypeHash2["Blizzard"] = 669657108] = "Blizzard";
  WeatherTypeHash2[WeatherTypeHash2["Snowing"] = -273223690] = "Snowing";
  WeatherTypeHash2[WeatherTypeHash2["Snowlight"] = 603685163] = "Snowlight";
  WeatherTypeHash2[WeatherTypeHash2["Christmas"] = -1429616491] = "Christmas";
  WeatherTypeHash2[WeatherTypeHash2["Halloween"] = -921030142] = "Halloween";
  return WeatherTypeHash2;
})(WeatherTypeHash || {});

// src/fivem/Model.ts
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
      this.hash = Game.generateHash(hash);
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
   * Gets if the model is a bicycle or not.
   *
   * @returns Whether this model is a bicycle.
   */
  get IsBicycle() {
    return IsThisModelABicycle(this.hash);
  }
  /**
   * Gets if the model is a motorbike or not.
   *
   * @returns Whether this model is a motorbike.
   */
  get IsBike() {
    return IsThisModelABike(this.hash);
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
   * Gets if the model is a car or not.
   *
   * @returns Whether this model is a car.
   */
  get IsCar() {
    return IsThisModelACar(this.hash);
  }
  /**
   * Gets if the model is a cargobob or not.
   *
   * @returns Whether this model is a cargobob.
   */
  get IsCargobob() {
    return this.hash === 4244420235 /* Cargobob */ || this.hash === 1621617168 /* Cargobob2 */ || this.hash === 1394036463 /* Cargobob3 */ || this.hash === 2025593404 /* Cargobob4 */;
  }
  /**
   * Gets if the model is a helicopter or not.
   *
   * @returns Whether this model is a helicopter.
   */
  get IsHelicopter() {
    return IsThisModelAHeli(this.hash);
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
   * Gets if the model is a plane or not.
   *
   * @returns Whether this model is a plane.
   */
  get IsPlane() {
    return IsThisModelAPlane(this.hash);
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
   * Gets if the model is a quadbike or not.
   *
   * @returns Whether this model is a quadbike.
   */
  get IsQuadbike() {
    return IsThisModelAQuadbike(this.hash);
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
    RequestModel(this.hash);
    const timeout = GetGameTimer() + timeoutMs;
    while (!this.IsLoaded && GetGameTimer() < timeout) {
      await Wait(0);
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

// src/fivem/cfx/index.ts
var cfx_default = { Entity, Player };

// src/fivem/models/BaseEntity.ts
var BaseEntity = class _BaseEntity {
  static {
    __name(this, "BaseEntity");
  }
  static fromNetworkId(networkId) {
    return new _BaseEntity(NetworkGetEntityFromNetworkId(networkId));
  }
  static fromStateBagName(stateBagName) {
    const entity = GetEntityFromStateBagName(stateBagName);
    if (entity === 0) return null;
    return new _BaseEntity(entity);
  }
  handle;
  bones;
  stateBagCookies = [];
  netId = null;
  type = 3 /* Entity */;
  constructor(handle) {
    this.handle = handle;
    if (this.IsNetworked) {
      this.netId = this.NetworkId;
    }
  }
  get Handle() {
    return this.handle;
  }
  /**
   * @returns if the entity is a networked entity or local entity
   */
  get IsNetworked() {
    return NetworkGetEntityIsNetworked(this.handle);
  }
  set IsNetworked(networked) {
    if (networked) {
      NetworkRegisterEntityAsNetworked(this.handle);
    } else {
      NetworkUnregisterNetworkedEntity(this.handle);
    }
  }
  get NetworkId() {
    if (this.netId) {
      return this.netId;
    }
    return NetworkGetNetworkIdFromEntity(this.handle);
  }
  get IsNetworkConcealed() {
    return NetworkIsEntityConcealed(this.handle);
  }
  set IsNetworkConcealed(concealed) {
    NetworkConcealEntity(this.handle, concealed);
  }
  get State() {
    return cfx_default.Entity(this.handle).state;
  }
  AddStateBagChangeHandler(keyFilter, handler) {
    const stateBagName = this.IsNetworked ? `entity:${this.NetworkId}` : `localEntity:${this.handle}`;
    const cookie = AddStateBagChangeHandler(keyFilter, stateBagName, handler);
    this.stateBagCookies.push(cookie);
    return cookie;
  }
  /**
   * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
   * @param keyFilter the key to filter for or null
   * @param handler the function to handle the change
   * @returns a cookie to be used in RemoveStateBagChangeHandler
   */
  listenForStateChange(keyFilter, handler) {
    return this.AddStateBagChangeHandler(keyFilter, handler);
  }
  removeStateListener(tgtCookie) {
    this.stateBagCookies = this.stateBagCookies.filter((cookie) => {
      const isCookie = cookie === tgtCookie;
      if (isCookie) RemoveStateBagChangeHandler(cookie);
      return isCookie;
    });
  }
  get Owner() {
    return NetworkGetEntityOwner(this.handle);
  }
  // public isPlayerOwner(player: Player): boolean {
  //     return this.Owner === player.Handle;
  // }
  get Speed() {
    return GetEntitySpeed(this.handle);
  }
  getSpeedVector(isRelative = false) {
    return Vector3.fromArray(GetEntitySpeedVector(this.handle, isRelative));
  }
  get ForwardVector() {
    return Vector3.fromArray(GetEntityForwardVector(this.handle));
  }
  get Matrix() {
    return Vector3.fromArrays(GetEntityMatrix(this.handle));
  }
  set Matrix(vectors) {
    if (vectors.length !== 4) throw Error(`Expected 4 Vectors, got ${vectors.length}`);
    const [forward, right, up, pos] = vectors;
    SetEntityMatrix(
      this.handle,
      forward.x,
      forward.y,
      forward.z,
      right.x,
      right.y,
      right.z,
      up.x,
      up.y,
      up.z,
      pos.x,
      pos.y,
      pos.z
    );
  }
  get Health() {
    return GetEntityHealth(this.handle);
  }
  set Health(amount) {
    SetEntityHealth(this.handle, amount);
  }
  get MaxHealth() {
    return GetEntityMaxHealth(this.handle);
  }
  set MaxHealth(amount) {
    SetEntityMaxHealth(this.handle, amount);
  }
  set IsDead(value) {
    if (value) {
      SetEntityHealth(this.handle, 0);
    } else {
      SetEntityHealth(this.handle, 200);
    }
  }
  get IsDead() {
    return IsEntityDead(this.handle);
  }
  get IsAlive() {
    return !IsEntityDead(this.handle);
  }
  /**
   * @deprecated use [[IsDead]] instead
   */
  isDead() {
    return IsEntityDead(this.handle);
  }
  /**
   * @deprecated use [[IsAlive]] instead
   */
  isAlive() {
    return !this.isDead();
  }
  get Model() {
    return new Model(GetEntityModel(this.handle));
  }
  /**
   * Returns if the entity is set as a mission entity and will not be cleaned up by the engine
   */
  get IsMissionEntity() {
    return IsEntityAMissionEntity(this.handle);
  }
  /**
   * Sets if the entity is a mission entity and will not be cleaned up by the engine
   */
  set IsMissionEntity(value) {
    if (value) {
      SetEntityAsMissionEntity(this.handle, false, false);
    } else {
      SetEntityAsNoLongerNeeded(this.handle);
    }
  }
  get Position() {
    return Vector3.fromArray(GetEntityCoords(this.handle, false));
  }
  set Position(position) {
    SetEntityCoords(this.handle, position.x, position.y, position.z, false, false, false, true);
  }
  set PositionNoOffset(position) {
    SetEntityCoordsNoOffset(this.handle, position.x, position.y, position.z, true, true, true);
  }
  get Rotation() {
    return Vector3.fromArray(GetEntityRotation(this.handle, 2));
  }
  set Rotation(rotation) {
    SetEntityRotation(this.handle, rotation.x, rotation.y, rotation.z, 2, true);
  }
  get Quaternion() {
    const quaternion = GetEntityQuaternion(this.handle);
    return new Quaternion(quaternion[0], quaternion[1], quaternion[2], quaternion[3]);
  }
  set Quaternion(quaternion) {
    SetEntityQuaternion(this.handle, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  }
  get Heading() {
    return GetEntityHeading(this.handle);
  }
  set Heading(heading) {
    SetEntityHeading(this.handle, heading);
  }
  get IsPositionFrozen() {
    return IsEntityPositionFrozen(this.handle);
  }
  set IsPositionFrozen(value) {
    FreezeEntityPosition(this.handle, value);
  }
  get Velocity() {
    return Vector3.fromArray(GetEntityVelocity(this.handle));
  }
  set Velocity(velocity) {
    SetEntityVelocity(this.handle, velocity.x, velocity.y, velocity.z);
  }
  get RotationVelocity() {
    return Vector3.fromArray(GetEntityRotationVelocity(this.handle));
  }
  set MaxSpeed(value) {
    SetEntityMaxSpeed(this.handle, value);
  }
  set HasGravity(value) {
    SetEntityHasGravity(this.handle, value);
  }
  get HeightAboveGround() {
    return GetEntityHeightAboveGround(this.handle);
  }
  get SubmersionLevel() {
    return GetEntitySubmergedLevel(this.handle);
  }
  get LodDistance() {
    return GetEntityLodDist(this.handle);
  }
  set LodDistance(value) {
    SetEntityLodDist(this.handle, value);
  }
  get IsVisible() {
    return IsEntityVisible(this.handle);
  }
  set IsVisible(value) {
    SetEntityVisible(this.handle, value, false);
  }
  get IsOccluded() {
    return IsEntityOccluded(this.handle);
  }
  get IsOnScreen() {
    return IsEntityOnScreen(this.handle);
  }
  get IsUpright() {
    return IsEntityUpright(this.handle, 0);
  }
  get IsUpsideDown() {
    return IsEntityUpsidedown(this.handle);
  }
  get IsInAir() {
    return IsEntityInAir(this.handle);
  }
  get IsInWater() {
    return IsEntityInWater(this.handle);
  }
  /**
   * @deprecated use [[IsMissionEntity]] instead as its more obvious as what it does
   */
  get IsPersistent() {
    return IsEntityAMissionEntity(this.handle);
  }
  /**
   * @deprecated use [[IsMissionEntity]] instead as its more obvious as what it does
   */
  set IsPersistent(value) {
    if (value) {
      SetEntityAsMissionEntity(this.handle, true, false);
    } else {
      SetEntityAsNoLongerNeeded(this.handle);
    }
  }
  get IsOnFire() {
    return IsEntityOnFire(this.handle);
  }
  set IsInvincible(value) {
    SetEntityInvincible(this.handle, value);
  }
  set IsOnlyDamagedByPlayer(value) {
    SetEntityOnlyDamagedByPlayer(this.handle, value);
  }
  get Opacity() {
    return GetEntityAlpha(this.handle);
  }
  /**
   * Sets how transparent an entity is, if you want to reset the alpha level use [[resetOpacity]] instead;
   */
  set Opacity(value) {
    SetEntityAlpha(this.handle, value, false);
  }
  resetOpacity() {
    ResetEntityAlpha(this.handle);
  }
  get HasCollided() {
    return HasEntityCollidedWithAnything(this.handle);
  }
  get MaterialCollidingWith() {
    return GetLastMaterialHitByEntity(this.handle);
  }
  get IsCollisionEnabled() {
    return !GetEntityCollisonDisabled(this.handle);
  }
  set IsCollisionEnabled(value) {
    SetEntityCollision(this.handle, value, false);
  }
  set IsRecordingCollisions(value) {
    SetEntityRecordsCollisions(this.handle, value);
  }
  get Bones() {
    if (!this.bones) {
      this.bones = new EntityBoneCollection(this);
    }
    return this.bones;
  }
  get AttachedBlip() {
    const handle = GetBlipFromEntity(this.handle);
    if (DoesBlipExist(handle)) {
      return new Blip(handle);
    }
    return null;
  }
  attachBlip() {
    return new Blip(AddBlipForEntity(this.handle));
  }
  setNoCollision(entity, toggle) {
    SetEntityNoCollisionEntity(this.handle, entity.Handle, toggle);
  }
  hasClearLosToEntity(entity, traceType = 17) {
    return HasEntityClearLosToEntity(this.handle, entity.Handle, traceType);
  }
  hasClearLosToEntityInFront(entity) {
    return HasEntityClearLosToEntityInFront(this.handle, entity.Handle);
  }
  hasBeenDamagedBy(entity) {
    return HasEntityBeenDamagedByEntity(this.handle, entity.Handle, true);
  }
  hasBeenDamagedByWeapon(weapon) {
    return HasEntityBeenDamagedByWeapon(this.handle, Number(weapon), 0);
  }
  hasBeenDamagedByAnyWeapon() {
    return HasEntityBeenDamagedByWeapon(this.handle, 0, 2);
  }
  hasBeenDamagedByAnyMeleeWeapon() {
    return HasEntityBeenDamagedByWeapon(this.handle, 0, 1);
  }
  clearLastWeaponDamage() {
    ClearEntityLastWeaponDamage(this.handle);
  }
  isInArea(minBounds, maxBounds) {
    return IsEntityInArea(
      this.handle,
      minBounds.x,
      minBounds.y,
      minBounds.z,
      maxBounds.x,
      maxBounds.y,
      maxBounds.z,
      false,
      false,
      0
    );
  }
  isInAngledArea(origin, edge, angle) {
    return IsEntityInAngledArea(
      this.handle,
      origin.x,
      origin.y,
      origin.z,
      edge.x,
      edge.y,
      edge.z,
      angle,
      false,
      true,
      0
    );
  }
  isInRangeOf(position, range) {
    const v = Vector3.subtract(this.Position, position);
    return v.dotProduct(v) < range * range;
  }
  isNearEntity(entity, bounds) {
    return IsEntityAtEntity(this.handle, entity.Handle, bounds.x, bounds.y, bounds.z, false, true, 0);
  }
  isTouching(entity) {
    return IsEntityTouchingEntity(this.handle, entity.Handle);
  }
  isTouchingModel(model) {
    return IsEntityTouchingModel(this.handle, model.Hash);
  }
  /**
   * @param offset: the amount to offset from the entity
   * @returns the offset position from the entity in world coords
   */
  getOffsetInRelativeCoords(worldCoords) {
    return Vector3.fromArray(
      GetOffsetFromEntityGivenWorldCoords(this.handle, worldCoords.x, worldCoords.y, worldCoords.z)
    );
  }
  // TODO: Better example
  /**
   * @example
   * ```typescript
   * const ply = Game.PlayerPed;
   * const plyPos = ply.Position;
   * const bag = await World.createProp(new Model('ba_prop_battle_bag_01b'), plyPos, true, true, true);
   * bag.attachToBone(
   *     ply.Bones.getBone(64113),
   *     new Vector3(0.12, -0.25, 0.0),
   *     new Vector3(105.0, 50.0, 190.0)
   * )
   * const offset = bag.getRelativePositionOffset(plyPos);
   * ```
   * @param worldCoords: the offset given the world coords
   * @returns the offset position from the entity in relative coords
   */
  getOffsetInWorldCoords(offset) {
    return Vector3.fromArray(GetOffsetFromEntityInWorldCoords(this.handle, offset.x, offset.y, offset.z));
  }
  /**
   * @deprecated use [[getOffsetInRelativeCoords]] instead
   */
  getPositionOffset(worldCoords) {
    return this.getOffsetInRelativeCoords(worldCoords);
  }
  /**
   * @deprecated use [[getOffsetInWorldCoords]]
   */
  getOffsetPosition(offset) {
    return this.getOffsetInWorldCoords(offset);
  }
  attachTo(entity, position, rotation, collisions = false, unk9 = true, useSoftPinning = true, rotationOrder = 1) {
    if (this.handle === entity.Handle) {
      throw new Error("You cannot attach an entity to the same entity this will result in a crash!");
    }
    AttachEntityToEntity(
      this.handle,
      entity.Handle,
      -1,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      unk9,
      useSoftPinning,
      collisions,
      IsEntityAPed(entity.Handle),
      rotationOrder,
      true
    );
  }
  /*
   * Attaches an entity to another entity via a bone
   * @example
   * ```typescript
   * const ply = Game.PlayerPed;
   * const bag = await World.createProp(new Model('ba_prop_battle_bag_01b'), ply.Position, true, true, true);
   * bag.attachToBone(
   *     ply.Bones.getBone(64113),
   *     new Vector3(0.12, -0.25, 0.0),
   *     new Vector3(105.0, 50.0, 190.0)
   * )
   * ```
   */
  attachToBone(entityBone, position, rotation, collisions = false, unk9 = true, useSoftPinning = true, rotationOrder = 1) {
    if (this.handle === entityBone.Owner.Handle) {
      throw new Error("You cannot attach an entity to the same entity this will result in a crash!");
    }
    AttachEntityToEntity(
      this.handle,
      entityBone.Owner.Handle,
      entityBone.Index,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      unk9,
      useSoftPinning,
      collisions,
      IsEntityAPed(entityBone.Owner.Handle),
      rotationOrder,
      true
    );
  }
  detach() {
    DetachEntity(this.handle, true, true);
  }
  isAttached() {
    return IsEntityAttached(this.handle);
  }
  isAttachedTo(entity) {
    return IsEntityAttachedToEntity(this.handle, entity.Handle);
  }
  getEntityAttachedTo() {
    return new _BaseEntity(GetEntityAttachedTo(this.handle));
  }
  applyForce(direction, rotation, forceType = 3 /* MaxForceRot2 */) {
    ApplyForceToEntity(
      this.handle,
      Number(forceType),
      direction.x,
      direction.y,
      direction.z,
      rotation.x,
      rotation.y,
      rotation.z,
      0,
      false,
      true,
      true,
      false,
      true
    );
  }
  applyForceRelative(direction, rotation, forceType = 3 /* MaxForceRot2 */) {
    ApplyForceToEntity(
      this.handle,
      Number(forceType),
      direction.x,
      direction.y,
      direction.z,
      rotation.x,
      rotation.y,
      rotation.z,
      0,
      true,
      true,
      true,
      false,
      true
    );
  }
  /**
   * Removes all particle effects from the entity
   */
  removePtfxEffects() {
    RemoveParticleFxFromEntity(this.handle);
  }
  /**
   * @deprecated use [[removePtfxEffects]]
   */
  removeAllParticleEffects() {
    this.removePtfxEffects();
  }
  exists() {
    return DoesEntityExist(this.handle);
  }
  delete() {
    this.IsMissionEntity = true;
    DeleteEntity(this.handle);
    for (const cookie of this.stateBagCookies) {
      RemoveStateBagChangeHandler(cookie);
    }
  }
  /**
   * @deprecated use [[IsMissionEntity]] setter as false instead.
   */
  markAsNoLongerNeeded() {
    SetEntityAsNoLongerNeeded(this.Handle);
  }
};

// src/fivem/models/EntityBone.ts
var EntityBone = class {
  static {
    __name(this, "EntityBone");
  }
  get Index() {
    return this.index;
  }
  get Owner() {
    return this.owner;
  }
  get Position() {
    return Vector3.fromArray(GetWorldPositionOfEntityBone(this.owner.Handle, this.index));
  }
  get Rotation() {
    return Vector3.fromArray(GetEntityBoneRotation(this.owner.Handle, this.index));
  }
  get IsValid() {
    return this.owner.exists() && this.index !== -1;
  }
  owner;
  index;
  constructor(owner, boneIndex, boneName) {
    this.owner = owner;
    this.index = boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? "");
  }
};

// src/fivem/models/EntityBoneCollection.ts
var EntityBoneCollection = class {
  static {
    __name(this, "EntityBoneCollection");
  }
  owner;
  constructor(owner) {
    this.owner = owner;
  }
  hasBone(name) {
    return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
  }
  getBone(boneIndex, boneName) {
    return new EntityBone(
      this.owner,
      boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? "")
    );
  }
  get Core() {
    return new EntityBone(this.owner, -1);
  }
};

// src/fivem/Tasks.ts
var Tasks = class {
  static {
    __name(this, "Tasks");
  }
  ped;
  // we take null because sequences have a null ped, if you pass null to this
  // you betterk now what you're doing.
  constructor(ped) {
    const actualPed = ped ?? { handle: null };
    this.ped = actualPed;
  }
  achieveHeading(heading, timeout = 0) {
    TaskAchieveHeading(this.ped.Handle, heading, timeout);
  }
  blockTemporaryEvents(block = true) {
    TaskSetBlockingOfNonTemporaryEvents(this.ped.Handle, block);
  }
  aimAt(target, duration) {
    if (target instanceof BaseEntity) TaskAimGunAtEntity(this.ped.Handle, target.Handle, duration, false);
    else TaskAimGunAtCoord(this.ped.Handle, target.x, target.y, target.z, duration, false, false);
  }
  arrest(ped) {
    TaskArrestPed(this.ped.Handle, ped.Handle);
  }
  chatTo(ped) {
    TaskChatToPed(this.ped.Handle, ped.Handle, 16, 0, 0, 0, 0, 0);
  }
  jump() {
    TaskJump(this.ped.Handle, true);
  }
  climb() {
    TaskClimb(this.ped.Handle, true);
  }
  climbLadder() {
    TaskClimbLadder(this.ped.Handle, 1);
  }
  cower(duration) {
    TaskCower(this.ped.Handle, duration);
  }
  chaseWithGroundVehicle(target) {
    TaskVehicleChase(this.ped.Handle, target.Handle);
  }
  chaseWithHelicopter(target, offset) {
    TaskHeliChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
  }
  chaseWithPlane(target, offset) {
    TaskPlaneChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
  }
  cruiseWithVehicle(vehicle, speed, drivingstyle = 0 /* None */) {
    TaskVehicleDriveWander(this.ped.Handle, vehicle.Handle, speed, drivingstyle);
  }
  driveTo(vehicle, target, radius, speed, drivingstyle = 0 /* None */) {
    TaskVehicleDriveToCoordLongrange(
      this.ped.Handle,
      vehicle.Handle,
      target.x,
      target.y,
      target.z,
      speed,
      drivingstyle,
      radius
    );
  }
  enterAnyVehicle(seat = -2 /* Any */, timeout = -1, speed = 0, flag = 0) {
    TaskEnterVehicle(this.ped.Handle, 0, timeout, seat, speed, flag, 0);
  }
  static everyoneLeaveVehicle(vehicle) {
    TaskEveryoneLeaveVehicle(vehicle.Handle);
  }
  fightAgainst(target, duration) {
    if (duration) {
      TaskCombatPedTimed(this.ped.Handle, target.Handle, duration, 0);
    } else {
      TaskCombatPed(this.ped.Handle, target.Handle, 0, 16);
    }
  }
  fightAgainstHatedTargets(radius, duration) {
    if (duration) {
      TaskCombatHatedTargetsAroundPedTimed(this.ped.Handle, radius, duration, 0);
    } else {
      TaskCombatHatedTargetsAroundPed(this.ped.Handle, radius, 0);
    }
  }
  fleeFrom(pedOrPosition, duration = -1) {
    if (pedOrPosition instanceof Ped) {
      TaskSmartFleePed(this.ped.Handle, pedOrPosition.Handle, 100, duration, false, false);
    } else {
      TaskSmartFleeCoord(
        this.ped.Handle,
        pedOrPosition.x,
        pedOrPosition.y,
        pedOrPosition.z,
        100,
        duration,
        false,
        false
      );
    }
  }
  followPointRoute(points) {
    TaskFlushRoute();
    points.forEach((point) => TaskExtendRoute(point.x, point.y, point.z));
    TaskFollowPointRoute(this.ped.Handle, 1, 0);
  }
  followToOffsetFromEntity(target, offset, timeout, stoppingRange, movementSpeed = 1, persistFollowing = true) {
    TaskFollowToOffsetOfEntity(
      this.ped.Handle,
      target.Handle,
      offset.x,
      offset.y,
      offset.z,
      movementSpeed,
      timeout,
      stoppingRange,
      persistFollowing
    );
  }
  goTo(position, ignorePaths = false, timeout = -1, speed = 1, targetHeading = 0, distanceToSlide = 0, flags = 0) {
    if (ignorePaths) {
      TaskGoStraightToCoord(
        this.ped.Handle,
        position.x,
        position.y,
        position.z,
        speed,
        timeout,
        targetHeading,
        distanceToSlide
      );
    } else {
      TaskFollowNavMeshToCoord(
        this.ped.Handle,
        position.x,
        position.y,
        position.z,
        speed,
        timeout,
        0,
        flags,
        targetHeading
      );
    }
  }
  goToEntity(target, offset = null, timeout = -1) {
    if (offset === null) {
      offset = new Vector3(0, 0, 0);
    }
    TaskGotoEntityOffsetXy(this.ped.Handle, target.Handle, timeout, offset.x, offset.y, offset.z, 1, true);
  }
  guardCurrentPosition() {
    TaskGuardCurrentPosition(this.ped.Handle, 15, 10, true);
  }
  handsUp(duration) {
    TaskHandsUp(this.ped.Handle, duration, 0, -1, false);
  }
  landPlane(startPosition, touchdownPosition, plane = null) {
    if (plane === null) {
      plane = this.ped.CurrentVehicle;
    }
    if (plane === null || !plane.exists() || plane.isDead()) {
      TaskPlaneLand(
        this.ped.Handle,
        0,
        startPosition.x,
        startPosition.y,
        startPosition.z,
        touchdownPosition.x,
        touchdownPosition.y,
        touchdownPosition.z
      );
    } else {
      TaskPlaneLand(
        this.ped.Handle,
        plane.Handle,
        startPosition.x,
        startPosition.y,
        startPosition.z,
        touchdownPosition.x,
        touchdownPosition.y,
        touchdownPosition.z
      );
    }
  }
  lookAt(targetOrPosition, duration = -1) {
    if (targetOrPosition instanceof BaseEntity)
      TaskLookAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, 0, 2);
    else TaskLookAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, 0, 2);
  }
  parachuteTo(position) {
    TaskParachuteToTarget(this.ped.Handle, position.x, position.y, position.z);
  }
  parkVehicle(vehicle, position, heading, radius = 20, keepEngineOn = false) {
    TaskVehiclePark(
      this.ped.Handle,
      vehicle.Handle,
      position.x,
      position.y,
      position.z,
      heading,
      1,
      radius,
      keepEngineOn
    );
  }
  performSequence(sequence) {
    if (!sequence.IsClosed) {
      sequence.close();
    }
    this.clearAll();
    TaskPerformSequence(this.ped.Handle, sequence.Handle);
  }
  async playAnimation(animDict, animName, blendInSpeed, blendOutSpeed, duration, playbackRate, flags) {
    await LoadAnimDict(animDict);
    TaskPlayAnim(
      this.ped.Handle,
      animDict,
      animName,
      blendInSpeed,
      blendOutSpeed,
      duration,
      flags,
      playbackRate,
      false,
      false,
      false
    );
    RemoveAnimDict(animDict);
  }
  reactAndFlee(ped) {
    TaskReactAndFleePed(this.ped.Handle, ped.Handle);
  }
  reloadWeapon() {
    TaskReloadWeapon(this.ped.Handle, true);
  }
  shootAt(targetOrPosition, duration = -1, pattern = 0 /* Default */) {
    if (targetOrPosition instanceof Ped) TaskShootAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, pattern);
    else
      TaskShootAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, pattern);
  }
  shuffleToNextVehicleSeat(vehicle) {
    TaskShuffleToNextVehicleSeat(this.ped.Handle, vehicle.Handle);
  }
  skyDive() {
    TaskSkyDive(this.ped.Handle);
  }
  slideTo(position, heading, duration = 0.7) {
    TaskPedSlideToCoord(this.ped.Handle, position.x, position.y, position.z, heading, duration);
  }
  standStill(duration) {
    TaskStandStill(this.ped.Handle, duration);
  }
  startScenario(name, position, heading = 0, duration = 0, sittingScenario = false, teleport = true) {
    TaskStartScenarioAtPosition(
      this.ped.Handle,
      name,
      position.x,
      position.y,
      position.z,
      heading,
      duration,
      sittingScenario,
      teleport
    );
  }
  swapWeapon() {
    TaskSwapWeapon(this.ped.Handle, false);
  }
  turnTo(targetOrPosition, duration = -1) {
    if (targetOrPosition instanceof BaseEntity)
      TaskTurnPedToFaceEntity(this.ped.Handle, targetOrPosition.Handle, duration);
    else TaskTurnPedToFaceCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration);
  }
  useParachute() {
    TaskParachute(this.ped.Handle, true);
  }
  useMobilePhone(duration = 1) {
    TaskUseMobilePhone(this.ped.Handle, duration);
  }
  putAwayParachute() {
    TaskParachute(this.ped.Handle, false);
  }
  putAwayMobilePhone() {
    TaskUseMobilePhone(this.ped.Handle, 0);
  }
  vehicleChase(target) {
    TaskVehicleChase(this.ped.Handle, target.Handle);
  }
  vehicleShootAtPed(target) {
    TaskVehicleShootAtPed(this.ped.Handle, target.Handle, 20);
  }
  wait(duration) {
    TaskPause(this.ped.Handle, duration);
  }
  wanderAround(position, radius) {
    if (position && radius) TaskWanderInArea(this.ped.Handle, position.x, position.y, position.z, radius, 0, 0);
    else TaskWanderStandard(this.ped.Handle, 0, 0);
  }
  warpIntoVehicle(vehicle, seat) {
    TaskWarpPedIntoVehicle(this.ped.Handle, vehicle.Handle, seat);
  }
  warpOutOfVehicle(vehicle, flags) {
    TaskLeaveVehicle(this.ped.Handle, vehicle.Handle, flags);
  }
  isPlayingAnim(dict, anim, taskFlag = 3) {
    return IsEntityPlayingAnim(this.ped.Handle, dict, anim, taskFlag);
  }
  clearAll() {
    ClearPedTasks(this.ped.Handle);
  }
  clearAllImmediately() {
    ClearPedTasksImmediately(this.ped.Handle);
  }
  clearLookAt() {
    TaskClearLookAt(this.ped.Handle);
  }
  clearSecondary() {
    ClearPedSecondaryTask(this.ped.Handle);
  }
  clearAnimation(animDict, animName) {
    StopAnimTask(this.ped.Handle, animDict, animName, -4);
  }
};

// src/fivem/weaponComponent/WeaponComponentHash.ts
var WeaponComponentHash = /* @__PURE__ */ ((WeaponComponentHash2) => {
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_BASE"] = 4081463091] = "COMPONENT_KNUCKLE_VARMOD_BASE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_PIMP"] = 3323197061] = "COMPONENT_KNUCKLE_VARMOD_PIMP";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_BALLAS"] = 4007263587] = "COMPONENT_KNUCKLE_VARMOD_BALLAS";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_DOLLAR"] = 1351683121] = "COMPONENT_KNUCKLE_VARMOD_DOLLAR";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_DIAMOND"] = 2539772380] = "COMPONENT_KNUCKLE_VARMOD_DIAMOND";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_HATE"] = 2112683568] = "COMPONENT_KNUCKLE_VARMOD_HATE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_LOVE"] = 1062111910] = "COMPONENT_KNUCKLE_VARMOD_LOVE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_PLAYER"] = 146278587] = "COMPONENT_KNUCKLE_VARMOD_PLAYER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_KING"] = 3800804335] = "COMPONENT_KNUCKLE_VARMOD_KING";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_VAGOS"] = 2062808965] = "COMPONENT_KNUCKLE_VARMOD_VAGOS";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SWITCHBLADE_VARMOD_BASE"] = 2436343040] = "COMPONENT_SWITCHBLADE_VARMOD_BASE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SWITCHBLADE_VARMOD_VAR1"] = 1530822070] = "COMPONENT_SWITCHBLADE_VARMOD_VAR1";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SWITCHBLADE_VARMOD_VAR2"] = 3885209186] = "COMPONENT_SWITCHBLADE_VARMOD_VAR2";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_CLIP_01"] = 4275109233] = "COMPONENT_PISTOL_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_CLIP_02"] = 3978713628] = "COMPONENT_PISTOL_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_FLSH"] = 899381934] = "COMPONENT_AT_PI_FLSH";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_SUPP_02"] = 1709866683] = "COMPONENT_AT_PI_SUPP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_VARMOD_LUXE"] = 3610841222] = "COMPONENT_PISTOL_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPISTOL_CLIP_01"] = 119648377] = "COMPONENT_COMBATPISTOL_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPISTOL_CLIP_02"] = 3598405421] = "COMPONENT_COMBATPISTOL_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_SUPP"] = 3271853210] = "COMPONENT_AT_PI_SUPP";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER"] = 3328527730] = "COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_APPISTOL_CLIP_01"] = 834974250] = "COMPONENT_APPISTOL_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_APPISTOL_CLIP_02"] = 614078421] = "COMPONENT_APPISTOL_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_APPISTOL_VARMOD_LUXE"] = 2608252716] = "COMPONENT_APPISTOL_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL50_CLIP_01"] = 580369945] = "COMPONENT_PISTOL50_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL50_CLIP_02"] = 3654528146] = "COMPONENT_PISTOL50_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_SUPP_02"] = 2805810788] = "COMPONENT_AT_AR_SUPP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL50_VARMOD_LUXE"] = 2008591151] = "COMPONENT_PISTOL50_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_VARMOD_BOSS"] = 384708672] = "COMPONENT_REVOLVER_VARMOD_BOSS";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_VARMOD_GOON"] = 2492708877] = "COMPONENT_REVOLVER_VARMOD_GOON";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_CLIP_01"] = 3917905123] = "COMPONENT_REVOLVER_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_CLIP_01"] = 4169150169] = "COMPONENT_SNSPISTOL_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_CLIP_02"] = 2063610803] = "COMPONENT_SNSPISTOL_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_VARMOD_LOWRIDER"] = 2150886575] = "COMPONENT_SNSPISTOL_VARMOD_LOWRIDER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYPISTOL_CLIP_01"] = 222992026] = "COMPONENT_HEAVYPISTOL_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYPISTOL_CLIP_02"] = 1694090795] = "COMPONENT_HEAVYPISTOL_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYPISTOL_VARMOD_LUXE"] = 2053798779] = "COMPONENT_HEAVYPISTOL_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_01"] = 3122911422] = "COMPONENT_REVOLVER_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_TRACER"] = 3336103030] = "COMPONENT_REVOLVER_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_INCENDIARY"] = 15712037] = "COMPONENT_REVOLVER_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_HOLLOWPOINT"] = 284438159] = "COMPONENT_REVOLVER_MK2_CLIP_HOLLOWPOINT";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_FMJ"] = 231258687] = "COMPONENT_REVOLVER_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SIGHTS"] = 1108334355] = "COMPONENT_AT_SIGHTS";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_MK2"] = 77277509] = "COMPONENT_AT_SCOPE_MACRO_MK2";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_COMP_03"] = 654802123] = "COMPONENT_AT_PI_COMP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO"] = 3225415071] = "COMPONENT_REVOLVER_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_02"] = 11918884] = "COMPONENT_REVOLVER_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_03"] = 176157112] = "COMPONENT_REVOLVER_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_04"] = 4074914441] = "COMPONENT_REVOLVER_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_05"] = 288456487] = "COMPONENT_REVOLVER_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_06"] = 398658626] = "COMPONENT_REVOLVER_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_07"] = 628697006] = "COMPONENT_REVOLVER_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_08"] = 925911836] = "COMPONENT_REVOLVER_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_09"] = 1222307441] = "COMPONENT_REVOLVER_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_10"] = 552442715] = "COMPONENT_REVOLVER_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_IND_01"] = 3646023783] = "COMPONENT_REVOLVER_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_01"] = 21392614] = "COMPONENT_SNSPISTOL_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_02"] = 3465283442] = "COMPONENT_SNSPISTOL_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_TRACER"] = 2418909806] = "COMPONENT_SNSPISTOL_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_INCENDIARY"] = 3870121849] = "COMPONENT_SNSPISTOL_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_HOLLOWPOINT"] = 2366665730] = "COMPONENT_SNSPISTOL_MK2_CLIP_HOLLOWPOINT";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_FMJ"] = 3239176998] = "COMPONENT_SNSPISTOL_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_FLSH_03"] = 1246324211] = "COMPONENT_AT_PI_FLSH_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_RAIL_02"] = 1205768792] = "COMPONENT_AT_PI_RAIL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_COMP_02"] = 2860680127] = "COMPONENT_AT_PI_COMP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO"] = 259780317] = "COMPONENT_SNSPISTOL_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_02"] = 2321624822] = "COMPONENT_SNSPISTOL_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_03"] = 1996130345] = "COMPONENT_SNSPISTOL_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_04"] = 2839309484] = "COMPONENT_SNSPISTOL_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_05"] = 2626704212] = "COMPONENT_SNSPISTOL_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_06"] = 1308243489] = "COMPONENT_SNSPISTOL_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_07"] = 1122574335] = "COMPONENT_SNSPISTOL_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_08"] = 1420313469] = "COMPONENT_SNSPISTOL_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_09"] = 109848390] = "COMPONENT_SNSPISTOL_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_10"] = 593945703] = "COMPONENT_SNSPISTOL_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_IND_01"] = 1142457062] = "COMPONENT_SNSPISTOL_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_SLIDE"] = 3891161322] = "COMPONENT_SNSPISTOL_MK2_CAMO_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_02_SLIDE"] = 691432737] = "COMPONENT_SNSPISTOL_MK2_CAMO_02_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_03_SLIDE"] = 987648331] = "COMPONENT_SNSPISTOL_MK2_CAMO_03_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_04_SLIDE"] = 3863286761] = "COMPONENT_SNSPISTOL_MK2_CAMO_04_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_05_SLIDE"] = 3447384986] = "COMPONENT_SNSPISTOL_MK2_CAMO_05_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_06_SLIDE"] = 4202375078] = "COMPONENT_SNSPISTOL_MK2_CAMO_06_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_07_SLIDE"] = 3800418970] = "COMPONENT_SNSPISTOL_MK2_CAMO_07_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_08_SLIDE"] = 730876697] = "COMPONENT_SNSPISTOL_MK2_CAMO_08_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_09_SLIDE"] = 583159708] = "COMPONENT_SNSPISTOL_MK2_CAMO_09_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_10_SLIDE"] = 2366463693] = "COMPONENT_SNSPISTOL_MK2_CAMO_10_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_IND_01_SLIDE"] = 520557834] = "COMPONENT_SNSPISTOL_MK2_CAMO_IND_01_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_01"] = 2499030370] = "COMPONENT_PISTOL_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_02"] = 1591132456] = "COMPONENT_PISTOL_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_TRACER"] = 634039983] = "COMPONENT_PISTOL_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_INCENDIARY"] = 733837882] = "COMPONENT_PISTOL_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_HOLLOWPOINT"] = 2248057097] = "COMPONENT_PISTOL_MK2_CLIP_HOLLOWPOINT";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_FMJ"] = 1329061674] = "COMPONENT_PISTOL_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_RAIL"] = 2396306288] = "COMPONENT_AT_PI_RAIL";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_FLSH_02"] = 1140676955] = "COMPONENT_AT_PI_FLSH_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_COMP"] = 568543123] = "COMPONENT_AT_PI_COMP";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO"] = 1550611612] = "COMPONENT_PISTOL_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_02"] = 368550800] = "COMPONENT_PISTOL_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_03"] = 2525897947] = "COMPONENT_PISTOL_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_04"] = 24902297] = "COMPONENT_PISTOL_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_05"] = 4066925682] = "COMPONENT_PISTOL_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_06"] = 3710005734] = "COMPONENT_PISTOL_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_07"] = 3141791350] = "COMPONENT_PISTOL_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_08"] = 1301287696] = "COMPONENT_PISTOL_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_09"] = 1597093459] = "COMPONENT_PISTOL_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_10"] = 1769871776] = "COMPONENT_PISTOL_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_IND_01"] = 2467084625] = "COMPONENT_PISTOL_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_SLIDE"] = 3036451504] = "COMPONENT_PISTOL_MK2_CAMO_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_02_SLIDE"] = 438243936] = "COMPONENT_PISTOL_MK2_CAMO_02_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_03_SLIDE"] = 3839888240] = "COMPONENT_PISTOL_MK2_CAMO_03_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_04_SLIDE"] = 740920107] = "COMPONENT_PISTOL_MK2_CAMO_04_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_05_SLIDE"] = 3753350949] = "COMPONENT_PISTOL_MK2_CAMO_05_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_06_SLIDE"] = 1809261196] = "COMPONENT_PISTOL_MK2_CAMO_06_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_07_SLIDE"] = 2648428428] = "COMPONENT_PISTOL_MK2_CAMO_07_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_08_SLIDE"] = 3004802348] = "COMPONENT_PISTOL_MK2_CAMO_08_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_09_SLIDE"] = 3330502162] = "COMPONENT_PISTOL_MK2_CAMO_09_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_10_SLIDE"] = 1135718771] = "COMPONENT_PISTOL_MK2_CAMO_10_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_IND_01_SLIDE"] = 1253942266] = "COMPONENT_PISTOL_MK2_CAMO_IND_01_SLIDE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_VINTAGEPISTOL_CLIP_01"] = 1168357051] = "COMPONENT_VINTAGEPISTOL_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_VINTAGEPISTOL_CLIP_02"] = 867832552] = "COMPONENT_VINTAGEPISTOL_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_RAYPISTOL_VARMOD_XMAS18"] = 3621517063] = "COMPONENT_RAYPISTOL_VARMOD_XMAS18";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CERAMICPISTOL_CLIP_01"] = 1423184737] = "COMPONENT_CERAMICPISTOL_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CERAMICPISTOL_CLIP_02"] = 2172153001] = "COMPONENT_CERAMICPISTOL_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CERAMICPISTOL_SUPP"] = 2466764538] = "COMPONENT_CERAMICPISTOL_SUPP";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MICROSMG_CLIP_01"] = 3410538224] = "COMPONENT_MICROSMG_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MICROSMG_CLIP_02"] = 283556395] = "COMPONENT_MICROSMG_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO"] = 2637152041] = "COMPONENT_AT_SCOPE_MACRO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MICROSMG_VARMOD_LUXE"] = 1215999497] = "COMPONENT_MICROSMG_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_CLIP_01"] = 643254679] = "COMPONENT_SMG_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_CLIP_02"] = 889808635] = "COMPONENT_SMG_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_CLIP_03"] = 2043113590] = "COMPONENT_SMG_CLIP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_FLSH"] = 2076495324] = "COMPONENT_AT_AR_FLSH";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_02"] = 1019656791] = "COMPONENT_AT_SCOPE_MACRO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_VARMOD_LUXE"] = 663170192] = "COMPONENT_SMG_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSMG_CLIP_01"] = 2366834608] = "COMPONENT_ASSAULTSMG_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSMG_CLIP_02"] = 3141985303] = "COMPONENT_ASSAULTSMG_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER"] = 663517359] = "COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MINISMG_CLIP_01"] = 2227745491] = "COMPONENT_MINISMG_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MINISMG_CLIP_02"] = 2474561719] = "COMPONENT_MINISMG_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_01"] = 1277460590] = "COMPONENT_SMG_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_02"] = 3112393518] = "COMPONENT_SMG_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_TRACER"] = 2146055916] = "COMPONENT_SMG_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_INCENDIARY"] = 3650233061] = "COMPONENT_SMG_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_HOLLOWPOINT"] = 974903034] = "COMPONENT_SMG_MK2_CLIP_HOLLOWPOINT";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_FMJ"] = 190476639] = "COMPONENT_SMG_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SIGHTS_SMG"] = 2681951826] = "COMPONENT_AT_SIGHTS_SMG";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2"] = 3842157419] = "COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL_SMG_MK2"] = 1038927834] = "COMPONENT_AT_SCOPE_SMALL_SMG_MK2";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_01"] = 3113485012] = "COMPONENT_AT_MUZZLE_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_02"] = 3362234491] = "COMPONENT_AT_MUZZLE_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_03"] = 3725708239] = "COMPONENT_AT_MUZZLE_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_04"] = 3968886988] = "COMPONENT_AT_MUZZLE_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_05"] = 48731514] = "COMPONENT_AT_MUZZLE_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_06"] = 880736428] = "COMPONENT_AT_MUZZLE_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_07"] = 1303784126] = "COMPONENT_AT_MUZZLE_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SB_BARREL_01"] = 3641720545] = "COMPONENT_AT_SB_BARREL_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SB_BARREL_02"] = 2774849419] = "COMPONENT_AT_SB_BARREL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO"] = 3298267239] = "COMPONENT_SMG_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_02"] = 940943685] = "COMPONENT_SMG_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_03"] = 1263226800] = "COMPONENT_SMG_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_04"] = 3966931456] = "COMPONENT_SMG_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_05"] = 1224100642] = "COMPONENT_SMG_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_06"] = 899228776] = "COMPONENT_SMG_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_07"] = 616006309] = "COMPONENT_SMG_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_08"] = 2733014785] = "COMPONENT_SMG_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_09"] = 572063080] = "COMPONENT_SMG_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_10"] = 1170588613] = "COMPONENT_SMG_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_IND_01"] = 966612367] = "COMPONENT_SMG_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MACHINEPISTOL_CLIP_01"] = 1198425599] = "COMPONENT_MACHINEPISTOL_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MACHINEPISTOL_CLIP_02"] = 3106695545] = "COMPONENT_MACHINEPISTOL_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MACHINEPISTOL_CLIP_03"] = 2850671348] = "COMPONENT_MACHINEPISTOL_CLIP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPDW_CLIP_01"] = 1125642654] = "COMPONENT_COMBATPDW_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPDW_CLIP_02"] = 860508675] = "COMPONENT_COMBATPDW_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPDW_CLIP_03"] = 1857603803] = "COMPONENT_COMBATPDW_CLIP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_AFGRIP"] = 202788691] = "COMPONENT_AT_AR_AFGRIP";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL"] = 2855028148] = "COMPONENT_AT_SCOPE_SMALL";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_SUPP"] = 3859329886] = "COMPONENT_AT_SR_SUPP";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER"] = 2732039643] = "COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE"] = 2242268665] = "COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSHOTGUN_CLIP_01"] = 2498239431] = "COMPONENT_ASSAULTSHOTGUN_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSHOTGUN_CLIP_02"] = 2260565874] = "COMPONENT_ASSAULTSHOTGUN_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_SUPP"] = 2205435306] = "COMPONENT_AT_AR_SUPP";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_01"] = 3449028929] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_INCENDIARY"] = 2676628469] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_ARMORPIERCING"] = 1315288101] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_ARMORPIERCING";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_HOLLOWPOINT"] = 3914869031] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_HOLLOWPOINT";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_EXPLOSIVE"] = 1004815965] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_EXPLOSIVE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL_MK2"] = 1060929921] = "COMPONENT_AT_SCOPE_SMALL_MK2";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_SUPP_03"] = 2890063729] = "COMPONENT_AT_SR_SUPP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_08"] = 1602080333] = "COMPONENT_AT_MUZZLE_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO"] = 3820854852] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_02"] = 387223451] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_03"] = 617753366] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_04"] = 4072589040] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_05"] = 8741501] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_06"] = 3693681093] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_07"] = 3783533691] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_08"] = 3639579478] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_09"] = 4012490698] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_10"] = 1739501925] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01"] = 1178671645] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSHOTGUN_CLIP_01"] = 844049759] = "COMPONENT_HEAVYSHOTGUN_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSHOTGUN_CLIP_02"] = 2535257853] = "COMPONENT_HEAVYSHOTGUN_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSHOTGUN_CLIP_03"] = 2294798931] = "COMPONENT_HEAVYSHOTGUN_CLIP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_CLIP_01"] = 3193891350] = "COMPONENT_ASSAULTRIFLE_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_CLIP_02"] = 2971750299] = "COMPONENT_ASSAULTRIFLE_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_CLIP_03"] = 3689981245] = "COMPONENT_ASSAULTRIFLE_CLIP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_VARMOD_LUXE"] = 1319990579] = "COMPONENT_ASSAULTRIFLE_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_CLIP_01"] = 2680042476] = "COMPONENT_CARBINERIFLE_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_CLIP_02"] = 2433783441] = "COMPONENT_CARBINERIFLE_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_CLIP_03"] = 3127044405] = "COMPONENT_CARBINERIFLE_CLIP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MEDIUM"] = 2698550338] = "COMPONENT_AT_SCOPE_MEDIUM";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_VARMOD_LUXE"] = 3634075224] = "COMPONENT_CARBINERIFLE_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ADVANCEDRIFLE_CLIP_01"] = 4203716879] = "COMPONENT_ADVANCEDRIFLE_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ADVANCEDRIFLE_CLIP_02"] = 2395064697] = "COMPONENT_ADVANCEDRIFLE_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE"] = 930927479] = "COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_CLIP_01"] = 3334989185] = "COMPONENT_SPECIALCARBINE_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_CLIP_02"] = 2089537806] = "COMPONENT_SPECIALCARBINE_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_CLIP_03"] = 1801039530] = "COMPONENT_SPECIALCARBINE_CLIP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER"] = 1929467122] = "COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_CLIP_01"] = 3315675008] = "COMPONENT_BULLPUPRIFLE_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_CLIP_02"] = 3009973007] = "COMPONENT_BULLPUPRIFLE_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_VARMOD_LOW"] = 2824322168] = "COMPONENT_BULLPUPRIFLE_VARMOD_LOW";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_01"] = 25766362] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_02"] = 4021290536] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_TRACER"] = 2183159977] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_INCENDIARY"] = 2845636954] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_ARMORPIERCING"] = 4205311469] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_ARMORPIERCING";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_FMJ"] = 1130501904] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_02_MK2"] = 3350057221] = "COMPONENT_AT_SCOPE_MACRO_02_MK2";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_BP_BARREL_01"] = 1704640795] = "COMPONENT_AT_BP_BARREL_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_BP_BARREL_02"] = 1005743559] = "COMPONENT_AT_BP_BARREL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_AFGRIP_02"] = 2640679034] = "COMPONENT_AT_AR_AFGRIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO"] = 2923451831] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_02"] = 3104173419] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_03"] = 2797881576] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_04"] = 2491819116] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_05"] = 2318995410] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_06"] = 36929477] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_07"] = 4026522462] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_08"] = 3720197850] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_09"] = 3412267557] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_10"] = 2826785822] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01"] = 3320426066] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_01"] = 382112385] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_02"] = 3726614828] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_TRACER"] = 2271594122] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_INCENDIARY"] = 3724612230] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_ARMORPIERCING"] = 1362433589] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_ARMORPIERCING";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_FMJ"] = 1346235024] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MEDIUM_MK2"] = 3328927042] = "COMPONENT_AT_SCOPE_MEDIUM_MK2";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SC_BARREL_01"] = 3879097257] = "COMPONENT_AT_SC_BARREL_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SC_BARREL_02"] = 4185880635] = "COMPONENT_AT_SC_BARREL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO"] = 3557537083] = "COMPONENT_SPECIALCARBINE_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_02"] = 1125852043] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_03"] = 886015732] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_04"] = 3032680157] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_05"] = 3999758885] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_06"] = 3750812792] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_07"] = 172765678] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_08"] = 2312089847] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_09"] = 2072122460] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_10"] = 2308747125] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01"] = 1377355801] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_01"] = 2249208895] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_02"] = 3509242479] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_TRACER"] = 4012669121] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_INCENDIARY"] = 4218476627] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_ARMORPIERCING"] = 2816286296] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_ARMORPIERCING";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_FMJ"] = 1675665560] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_BARREL_01"] = 1134861606] = "COMPONENT_AT_AR_BARREL_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_BARREL_02"] = 1447477866] = "COMPONENT_AT_AR_BARREL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO"] = 2434475183] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_02"] = 937772107] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_03"] = 1401650071] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_04"] = 628662130] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_05"] = 3309920045] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_06"] = 3482022833] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_07"] = 2847614993] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_08"] = 4234628436] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_09"] = 2088750491] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_10"] = 2781053842] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01"] = 3115408816] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_01"] = 1283078430] = "COMPONENT_CARBINERIFLE_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_02"] = 1574296533] = "COMPONENT_CARBINERIFLE_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_TRACER"] = 391640422] = "COMPONENT_CARBINERIFLE_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_INCENDIARY"] = 1025884839] = "COMPONENT_CARBINERIFLE_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_ARMORPIERCING"] = 626875735] = "COMPONENT_CARBINERIFLE_MK2_CLIP_ARMORPIERCING";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_FMJ"] = 1141059345] = "COMPONENT_CARBINERIFLE_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_CR_BARREL_01"] = 2201368575] = "COMPONENT_AT_CR_BARREL_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_CR_BARREL_02"] = 2335983627] = "COMPONENT_AT_CR_BARREL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO"] = 1272803094] = "COMPONENT_CARBINERIFLE_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_02"] = 1080719624] = "COMPONENT_CARBINERIFLE_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_03"] = 792221348] = "COMPONENT_CARBINERIFLE_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_04"] = 3842785869] = "COMPONENT_CARBINERIFLE_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_05"] = 3548192559] = "COMPONENT_CARBINERIFLE_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_06"] = 2250671235] = "COMPONENT_CARBINERIFLE_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_07"] = 4095795318] = "COMPONENT_CARBINERIFLE_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_08"] = 2866892280] = "COMPONENT_CARBINERIFLE_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_09"] = 2559813981] = "COMPONENT_CARBINERIFLE_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_10"] = 1796459838] = "COMPONENT_CARBINERIFLE_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01"] = 3663056191] = "COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMPACTRIFLE_CLIP_01"] = 1363085923] = "COMPONENT_COMPACTRIFLE_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMPACTRIFLE_CLIP_02"] = 1509923832] = "COMPONENT_COMPACTRIFLE_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMPACTRIFLE_CLIP_03"] = 3322377230] = "COMPONENT_COMPACTRIFLE_CLIP_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MILITARYRIFLE_CLIP_01"] = 759617595] = "COMPONENT_MILITARYRIFLE_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MILITARYRIFLE_CLIP_02"] = 1749732930] = "COMPONENT_MILITARYRIFLE_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MILITARYRIFLE_SIGHT_01"] = 1803744149] = "COMPONENT_MILITARYRIFLE_SIGHT_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MG_CLIP_01"] = 4097109892] = "COMPONENT_MG_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MG_CLIP_02"] = 2182449991] = "COMPONENT_MG_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL_02"] = 1006677997] = "COMPONENT_AT_SCOPE_SMALL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MG_VARMOD_LOWRIDER"] = 3604658878] = "COMPONENT_MG_VARMOD_LOWRIDER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_CLIP_01"] = 3791631178] = "COMPONENT_COMBATMG_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_CLIP_02"] = 3603274966] = "COMPONENT_COMBATMG_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_VARMOD_LOWRIDER"] = 2466172125] = "COMPONENT_COMBATMG_VARMOD_LOWRIDER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_01"] = 1227564412] = "COMPONENT_COMBATMG_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_02"] = 400507625] = "COMPONENT_COMBATMG_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_TRACER"] = 4133787461] = "COMPONENT_COMBATMG_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_INCENDIARY"] = 3274096058] = "COMPONENT_COMBATMG_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_ARMORPIERCING"] = 696788003] = "COMPONENT_COMBATMG_MK2_CLIP_ARMORPIERCING";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_FMJ"] = 1475288264] = "COMPONENT_COMBATMG_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MG_BARREL_01"] = 3276730932] = "COMPONENT_AT_MG_BARREL_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MG_BARREL_02"] = 3051509595] = "COMPONENT_AT_MG_BARREL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO"] = 1249283253] = "COMPONENT_COMBATMG_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_02"] = 3437259709] = "COMPONENT_COMBATMG_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_03"] = 3197423398] = "COMPONENT_COMBATMG_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_04"] = 1980349969] = "COMPONENT_COMBATMG_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_05"] = 1219453777] = "COMPONENT_COMBATMG_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_06"] = 2441508106] = "COMPONENT_COMBATMG_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_07"] = 2220186280] = "COMPONENT_COMBATMG_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_08"] = 457967755] = "COMPONENT_COMBATMG_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_09"] = 235171324] = "COMPONENT_COMBATMG_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_10"] = 42685294] = "COMPONENT_COMBATMG_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_IND_01"] = 3607349581] = "COMPONENT_COMBATMG_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_GUSENBERG_CLIP_01"] = 484812453] = "COMPONENT_GUSENBERG_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_GUSENBERG_CLIP_02"] = 3939025520] = "COMPONENT_GUSENBERG_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNIPERRIFLE_CLIP_01"] = 2613461129] = "COMPONENT_SNIPERRIFLE_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE"] = 3527687644] = "COMPONENT_AT_SCOPE_LARGE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MAX"] = 3159677559] = "COMPONENT_AT_SCOPE_MAX";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNIPERRIFLE_VARMOD_LUXE"] = 1077065191] = "COMPONENT_SNIPERRIFLE_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_CLIP_01"] = 1198478068] = "COMPONENT_HEAVYSNIPER_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_01"] = 2497785294] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_02"] = 3872379306] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_TRACER"] = 3615105746] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_TRACER";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_INCENDIARY"] = 1842849902] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_ARMORPIERCING"] = 4100968569] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_ARMORPIERCING";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_FMJ"] = 3779763923] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM_MK2"] = 1528590652] = "COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM_MK2";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MRFL_BARREL_01"] = 941317513] = "COMPONENT_AT_MRFL_BARREL_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MRFL_BARREL_02"] = 1748450780] = "COMPONENT_AT_MRFL_BARREL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO"] = 2425682848] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_02"] = 1931539634] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_03"] = 1624199183] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_04"] = 4268133183] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_05"] = 4084561241] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_06"] = 423313640] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_07"] = 276639596] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_08"] = 3303610433] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_09"] = 2612118995] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_10"] = 996213771] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01"] = 3080918746] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_01"] = 4196276776] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_02"] = 752418717] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_INCENDIARY"] = 247526935] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_INCENDIARY";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_ARMORPIERCING"] = 4164277972] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_ARMORPIERCING";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_FMJ"] = 1005144310] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_FMJ";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_EXPLOSIVE"] = 2313935527] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_EXPLOSIVE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE_MK2"] = 2193687427] = "COMPONENT_AT_SCOPE_LARGE_MK2";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_NV"] = 3061846192] = "COMPONENT_AT_SCOPE_NV";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_THERMAL"] = 776198721] = "COMPONENT_AT_SCOPE_THERMAL";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_09"] = 1764221345] = "COMPONENT_AT_MUZZLE_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_BARREL_01"] = 2425761975] = "COMPONENT_AT_SR_BARREL_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_BARREL_02"] = 277524638] = "COMPONENT_AT_SR_BARREL_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO"] = 4164123906] = "COMPONENT_HEAVYSNIPER_MK2_CAMO";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_02"] = 3317620069] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_03"] = 3916506229] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_03";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_04"] = 329939175] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_04";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_05"] = 643374672] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_05";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_06"] = 807875052] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_06";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_07"] = 2893163128] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_07";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_08"] = 3198471901] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_08";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_09"] = 3447155842] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_09";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_10"] = 2881858759] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_10";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01"] = 1815270123] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_CLIP_01"] = 3627761985] = "COMPONENT_MARKSMANRIFLE_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_CLIP_02"] = 3439143621] = "COMPONENT_MARKSMANRIFLE_CLIP_02";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM"] = 471997210] = "COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_VARMOD_LUXE"] = 371102273] = "COMPONENT_MARKSMANRIFLE_VARMOD_LUXE";
  WeaponComponentHash2[WeaponComponentHash2["COMPONENT_GRENADELAUNCHER_CLIP_01"] = 296639639] = "COMPONENT_GRENADELAUNCHER_CLIP_01";
  WeaponComponentHash2[WeaponComponentHash2["Invalid"] = 4294967295] = "Invalid";
  WeaponComponentHash2[WeaponComponentHash2["AdvancedRifleClip01"] = 4203716879] = "AdvancedRifleClip01";
  WeaponComponentHash2[WeaponComponentHash2["AdvancedRifleClip02"] = 2395064697] = "AdvancedRifleClip02";
  WeaponComponentHash2[WeaponComponentHash2["AdvancedRifleVarmodLuxe"] = 930927479] = "AdvancedRifleVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["APPistolClip01"] = 834974250] = "APPistolClip01";
  WeaponComponentHash2[WeaponComponentHash2["APPistolClip02"] = 614078421] = "APPistolClip02";
  WeaponComponentHash2[WeaponComponentHash2["APPistolVarmodLuxe"] = 2608252716] = "APPistolVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleClip01"] = 3193891350] = "AssaultRifleClip01";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleClip02"] = 2971750299] = "AssaultRifleClip02";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleClip03"] = 3689981245] = "AssaultRifleClip03";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleVarmodLuxe"] = 1319990579] = "AssaultRifleVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["AssaultSMGClip01"] = 2366834608] = "AssaultSMGClip01";
  WeaponComponentHash2[WeaponComponentHash2["AssaultSMGClip02"] = 3141985303] = "AssaultSMGClip02";
  WeaponComponentHash2[WeaponComponentHash2["AssaultSMGVarmodLowrider"] = 663517359] = "AssaultSMGVarmodLowrider";
  WeaponComponentHash2[WeaponComponentHash2["AssaultShotgunClip01"] = 2498239431] = "AssaultShotgunClip01";
  WeaponComponentHash2[WeaponComponentHash2["AssaultShotgunClip02"] = 2260565874] = "AssaultShotgunClip02";
  WeaponComponentHash2[WeaponComponentHash2["AtArAfGrip"] = 202788691] = "AtArAfGrip";
  WeaponComponentHash2[WeaponComponentHash2["AtArFlsh"] = 2076495324] = "AtArFlsh";
  WeaponComponentHash2[WeaponComponentHash2["AtArSupp"] = 2205435306] = "AtArSupp";
  WeaponComponentHash2[WeaponComponentHash2["AtArSupp02"] = 2805810788] = "AtArSupp02";
  WeaponComponentHash2[WeaponComponentHash2["AtPiFlsh"] = 899381934] = "AtPiFlsh";
  WeaponComponentHash2[WeaponComponentHash2["AtPiSupp"] = 3271853210] = "AtPiSupp";
  WeaponComponentHash2[WeaponComponentHash2["AtPiSupp02"] = 1709866683] = "AtPiSupp02";
  WeaponComponentHash2[WeaponComponentHash2["AtRailCover01"] = 1967214384] = "AtRailCover01";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeLarge"] = 3527687644] = "AtScopeLarge";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeLargeFixedZoom"] = 471997210] = "AtScopeLargeFixedZoom";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeMacro"] = 2637152041] = "AtScopeMacro";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeMacro02"] = 1019656791] = "AtScopeMacro02";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeMax"] = 3159677559] = "AtScopeMax";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeMedium"] = 2698550338] = "AtScopeMedium";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeSmall"] = 2855028148] = "AtScopeSmall";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeSmall02"] = 1006677997] = "AtScopeSmall02";
  WeaponComponentHash2[WeaponComponentHash2["AtSrSupp"] = 3859329886] = "AtSrSupp";
  WeaponComponentHash2[WeaponComponentHash2["BullpupRifleClip01"] = 3315675008] = "BullpupRifleClip01";
  WeaponComponentHash2[WeaponComponentHash2["BullpupRifleClip02"] = 3009973007] = "BullpupRifleClip02";
  WeaponComponentHash2[WeaponComponentHash2["BullpupRifleVarmodLow"] = 2824322168] = "BullpupRifleVarmodLow";
  WeaponComponentHash2[WeaponComponentHash2["BullpupShotgunClip01"] = 3377353998] = "BullpupShotgunClip01";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleClip01"] = 2680042476] = "CarbineRifleClip01";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleClip02"] = 2433783441] = "CarbineRifleClip02";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleClip03"] = 3127044405] = "CarbineRifleClip03";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleVarmodLuxe"] = 3634075224] = "CarbineRifleVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGClip01"] = 3791631178] = "CombatMGClip01";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGClip02"] = 3603274966] = "CombatMGClip02";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGVarmodLowrider"] = 2466172125] = "CombatMGVarmodLowrider";
  WeaponComponentHash2[WeaponComponentHash2["CombatPDWClip01"] = 1125642654] = "CombatPDWClip01";
  WeaponComponentHash2[WeaponComponentHash2["CombatPDWClip02"] = 860508675] = "CombatPDWClip02";
  WeaponComponentHash2[WeaponComponentHash2["CombatPDWClip03"] = 1857603803] = "CombatPDWClip03";
  WeaponComponentHash2[WeaponComponentHash2["CombatPistolClip01"] = 119648377] = "CombatPistolClip01";
  WeaponComponentHash2[WeaponComponentHash2["CombatPistolClip02"] = 3598405421] = "CombatPistolClip02";
  WeaponComponentHash2[WeaponComponentHash2["CombatPistolVarmodLowrider"] = 3328527730] = "CombatPistolVarmodLowrider";
  WeaponComponentHash2[WeaponComponentHash2["CompactRifleClip01"] = 1363085923] = "CompactRifleClip01";
  WeaponComponentHash2[WeaponComponentHash2["CompactRifleClip02"] = 1509923832] = "CompactRifleClip02";
  WeaponComponentHash2[WeaponComponentHash2["CompactRifleClip03"] = 3322377230] = "CompactRifleClip03";
  WeaponComponentHash2[WeaponComponentHash2["DBShotgunClip01"] = 703231006] = "DBShotgunClip01";
  WeaponComponentHash2[WeaponComponentHash2["FireworkClip01"] = 3840197261] = "FireworkClip01";
  WeaponComponentHash2[WeaponComponentHash2["FlareGunClip01"] = 2481569177] = "FlareGunClip01";
  WeaponComponentHash2[WeaponComponentHash2["FlashlightLight"] = 3719772431] = "FlashlightLight";
  WeaponComponentHash2[WeaponComponentHash2["GrenadeLauncherClip01"] = 296639639] = "GrenadeLauncherClip01";
  WeaponComponentHash2[WeaponComponentHash2["GusenbergClip01"] = 484812453] = "GusenbergClip01";
  WeaponComponentHash2[WeaponComponentHash2["GusenbergClip02"] = 3939025520] = "GusenbergClip02";
  WeaponComponentHash2[WeaponComponentHash2["HeavyPistolClip01"] = 222992026] = "HeavyPistolClip01";
  WeaponComponentHash2[WeaponComponentHash2["HeavyPistolClip02"] = 1694090795] = "HeavyPistolClip02";
  WeaponComponentHash2[WeaponComponentHash2["HeavyPistolVarmodLuxe"] = 2053798779] = "HeavyPistolVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["HeavyShotgunClip01"] = 844049759] = "HeavyShotgunClip01";
  WeaponComponentHash2[WeaponComponentHash2["HeavyShotgunClip02"] = 2535257853] = "HeavyShotgunClip02";
  WeaponComponentHash2[WeaponComponentHash2["HeavyShotgunClip03"] = 2294798931] = "HeavyShotgunClip03";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperClip01"] = 1198478068] = "HeavySniperClip01";
  WeaponComponentHash2[WeaponComponentHash2["HomingLauncherClip01"] = 4162006335] = "HomingLauncherClip01";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodBallas"] = 4007263587] = "KnuckleVarmodBallas";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodBase"] = 4081463091] = "KnuckleVarmodBase";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodDiamond"] = 2539772380] = "KnuckleVarmodDiamond";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodDollar"] = 1351683121] = "KnuckleVarmodDollar";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodHate"] = 2112683568] = "KnuckleVarmodHate";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodKing"] = 3800804335] = "KnuckleVarmodKing";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodLove"] = 1062111910] = "KnuckleVarmodLove";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodPimp"] = 3323197061] = "KnuckleVarmodPimp";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodPlayer"] = 146278587] = "KnuckleVarmodPlayer";
  WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodVagos"] = 2062808965] = "KnuckleVarmodVagos";
  WeaponComponentHash2[WeaponComponentHash2["MGClip01"] = 4097109892] = "MGClip01";
  WeaponComponentHash2[WeaponComponentHash2["MGClip02"] = 2182449991] = "MGClip02";
  WeaponComponentHash2[WeaponComponentHash2["MGVarmodLowrider"] = 3604658878] = "MGVarmodLowrider";
  WeaponComponentHash2[WeaponComponentHash2["MachinePistolClip01"] = 1198425599] = "MachinePistolClip01";
  WeaponComponentHash2[WeaponComponentHash2["MachinePistolClip02"] = 3106695545] = "MachinePistolClip02";
  WeaponComponentHash2[WeaponComponentHash2["MachinePistolClip03"] = 2850671348] = "MachinePistolClip03";
  WeaponComponentHash2[WeaponComponentHash2["MarksmanPistolClip01"] = 3416146413] = "MarksmanPistolClip01";
  WeaponComponentHash2[WeaponComponentHash2["MarksmanRifleClip01"] = 3627761985] = "MarksmanRifleClip01";
  WeaponComponentHash2[WeaponComponentHash2["MarksmanRifleClip02"] = 3439143621] = "MarksmanRifleClip02";
  WeaponComponentHash2[WeaponComponentHash2["MarksmanRifleVarmodLuxe"] = 371102273] = "MarksmanRifleVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["MicroSMGClip01"] = 3410538224] = "MicroSMGClip01";
  WeaponComponentHash2[WeaponComponentHash2["MicroSMGClip02"] = 283556395] = "MicroSMGClip02";
  WeaponComponentHash2[WeaponComponentHash2["MicroSMGVarmodLuxe"] = 1215999497] = "MicroSMGVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["MinigunClip01"] = 3370020614] = "MinigunClip01";
  WeaponComponentHash2[WeaponComponentHash2["MusketClip01"] = 1322387263] = "MusketClip01";
  WeaponComponentHash2[WeaponComponentHash2["Pistol50Clip01"] = 580369945] = "Pistol50Clip01";
  WeaponComponentHash2[WeaponComponentHash2["Pistol50Clip02"] = 3654528146] = "Pistol50Clip02";
  WeaponComponentHash2[WeaponComponentHash2["Pistol50VarmodLuxe"] = 2008591151] = "Pistol50VarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["PistolClip01"] = 4275109233] = "PistolClip01";
  WeaponComponentHash2[WeaponComponentHash2["PistolClip02"] = 3978713628] = "PistolClip02";
  WeaponComponentHash2[WeaponComponentHash2["PistolVarmodLuxe"] = 3610841222] = "PistolVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["PoliceTorchFlashlight"] = 3315797997] = "PoliceTorchFlashlight";
  WeaponComponentHash2[WeaponComponentHash2["PumpShotgunClip01"] = 3513717816] = "PumpShotgunClip01";
  WeaponComponentHash2[WeaponComponentHash2["PumpShotgunVarmodLowrider"] = 2732039643] = "PumpShotgunVarmodLowrider";
  WeaponComponentHash2[WeaponComponentHash2["RPGClip01"] = 1319465907] = "RPGClip01";
  WeaponComponentHash2[WeaponComponentHash2["RailgunClip01"] = 59044840] = "RailgunClip01";
  WeaponComponentHash2[WeaponComponentHash2["RevolverClip01"] = 3917905123] = "RevolverClip01";
  WeaponComponentHash2[WeaponComponentHash2["RevolverVarmodBoss"] = 384708672] = "RevolverVarmodBoss";
  WeaponComponentHash2[WeaponComponentHash2["RevolverVarmodGoon"] = 2492708877] = "RevolverVarmodGoon";
  WeaponComponentHash2[WeaponComponentHash2["SMGClip01"] = 643254679] = "SMGClip01";
  WeaponComponentHash2[WeaponComponentHash2["SMGClip02"] = 889808635] = "SMGClip02";
  WeaponComponentHash2[WeaponComponentHash2["SMGClip03"] = 2043113590] = "SMGClip03";
  WeaponComponentHash2[WeaponComponentHash2["SMGVarmodLuxe"] = 663170192] = "SMGVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["SNSPistolClip01"] = 4169150169] = "SNSPistolClip01";
  WeaponComponentHash2[WeaponComponentHash2["SNSPistolClip02"] = 2063610803] = "SNSPistolClip02";
  WeaponComponentHash2[WeaponComponentHash2["SNSPistolVarmodLowrider"] = 2150886575] = "SNSPistolVarmodLowrider";
  WeaponComponentHash2[WeaponComponentHash2["SawnoffShotgunClip01"] = 3352699429] = "SawnoffShotgunClip01";
  WeaponComponentHash2[WeaponComponentHash2["SawnoffShotgunVarmodLuxe"] = 2242268665] = "SawnoffShotgunVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["SniperRifleClip01"] = 2613461129] = "SniperRifleClip01";
  WeaponComponentHash2[WeaponComponentHash2["SniperRifleVarmodLuxe"] = 1077065191] = "SniperRifleVarmodLuxe";
  WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineClip01"] = 3334989185] = "SpecialCarbineClip01";
  WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineClip02"] = 2089537806] = "SpecialCarbineClip02";
  WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineClip03"] = 1801039530] = "SpecialCarbineClip03";
  WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineVarmodLowrider"] = 1929467122] = "SpecialCarbineVarmodLowrider";
  WeaponComponentHash2[WeaponComponentHash2["SwitchbladeVarmodBase"] = 2436343040] = "SwitchbladeVarmodBase";
  WeaponComponentHash2[WeaponComponentHash2["SwitchbladeVarmodVar1"] = 1530822070] = "SwitchbladeVarmodVar1";
  WeaponComponentHash2[WeaponComponentHash2["SwitchbladeVarmodVar2"] = 3885209186] = "SwitchbladeVarmodVar2";
  WeaponComponentHash2[WeaponComponentHash2["VintagePistolClip01"] = 1168357051] = "VintagePistolClip01";
  WeaponComponentHash2[WeaponComponentHash2["VintagePistolClip02"] = 867832552] = "VintagePistolClip02";
  WeaponComponentHash2[WeaponComponentHash2["AtSights"] = 1108334355] = "AtSights";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeSmallMk2"] = 1060929921] = "AtScopeSmallMk2";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeMacroMk2"] = 77277509] = "AtScopeMacroMk2";
  WeaponComponentHash2[WeaponComponentHash2["AtScopeMediumMk2"] = 3328927042] = "AtScopeMediumMk2";
  WeaponComponentHash2[WeaponComponentHash2["AtMuzzle1"] = 3113485012] = "AtMuzzle1";
  WeaponComponentHash2[WeaponComponentHash2["AtMuzzle2"] = 3362234491] = "AtMuzzle2";
  WeaponComponentHash2[WeaponComponentHash2["AtMuzzle3"] = 3725708239] = "AtMuzzle3";
  WeaponComponentHash2[WeaponComponentHash2["AtMuzzle4"] = 3968886988] = "AtMuzzle4";
  WeaponComponentHash2[WeaponComponentHash2["AtMuzzle5"] = 48731514] = "AtMuzzle5";
  WeaponComponentHash2[WeaponComponentHash2["AtMuzzle6"] = 880736428] = "AtMuzzle6";
  WeaponComponentHash2[WeaponComponentHash2["AtMuzzle7"] = 1303784126] = "AtMuzzle7";
  WeaponComponentHash2[WeaponComponentHash2["AtArAfGrip2"] = 2640679034] = "AtArAfGrip2";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipNormal"] = 2499030370] = "PistolMk2ClipNormal";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipExtended"] = 1591132456] = "PistolMk2ClipExtended";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipFMJ"] = 1329061674] = "PistolMk2ClipFMJ";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipHollowpoint"] = 2248057097] = "PistolMk2ClipHollowpoint";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipIncendiary"] = 733837882] = "PistolMk2ClipIncendiary";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipTracer"] = 634039983] = "PistolMk2ClipTracer";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2Scope"] = 2396306288] = "PistolMk2Scope";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2Flash"] = 1140676955] = "PistolMk2Flash";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2Compensator"] = 568543123] = "PistolMk2Compensator";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoDigital"] = 1550611612] = "PistolMk2CamoDigital";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoBrushstroke"] = 368550800] = "PistolMk2CamoBrushstroke";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoWoodland"] = 2525897947] = "PistolMk2CamoWoodland";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSkull"] = 24902297] = "PistolMk2CamoSkull";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSessanta"] = 4066925682] = "PistolMk2CamoSessanta";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoPerseus"] = 3710005734] = "PistolMk2CamoPerseus";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoLeopard"] = 3141791350] = "PistolMk2CamoLeopard";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoZebra"] = 1301287696] = "PistolMk2CamoZebra";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoGeometric"] = 1597093459] = "PistolMk2CamoGeometric";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoBoom"] = 1769871776] = "PistolMk2CamoBoom";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoPatriotic"] = 2467084625] = "PistolMk2CamoPatriotic";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideDigital"] = 3036451504] = "PistolMk2CamoSlideDigital";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideBrushstroke"] = 438243936] = "PistolMk2CamoSlideBrushstroke";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideWoodland"] = 3839888240] = "PistolMk2CamoSlideWoodland";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideSkull"] = 740920107] = "PistolMk2CamoSlideSkull";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideSessanta"] = 3753350949] = "PistolMk2CamoSlideSessanta";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlidePerseus"] = 1809261196] = "PistolMk2CamoSlidePerseus";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideLeopard"] = 2648428428] = "PistolMk2CamoSlideLeopard";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideZebra"] = 3004802348] = "PistolMk2CamoSlideZebra";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideGeometric"] = 3330502162] = "PistolMk2CamoSlideGeometric";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideBoom"] = 1135718771] = "PistolMk2CamoSlideBoom";
  WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlidePatriotic"] = 1253942266] = "PistolMk2CamoSlidePatriotic";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipNormal"] = 2249208895] = "AssaultRifleMk2ClipNormal";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipExtended"] = 3509242479] = "AssaultRifleMk2ClipExtended";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipArmorPiercing"] = 2816286296] = "AssaultRifleMk2ClipArmorPiercing";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipFMJ"] = 1675665560] = "AssaultRifleMk2ClipFMJ";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipIncendiary"] = 4218476627] = "AssaultRifleMk2ClipIncendiary";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipTracer"] = 4012669121] = "AssaultRifleMk2ClipTracer";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2BarrelNormal"] = 1134861606] = "AssaultRifleMk2BarrelNormal";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2BarrelHeavy"] = 1447477866] = "AssaultRifleMk2BarrelHeavy";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoDigital"] = 2434475183] = "AssaultRifleMk2CamoDigital";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoBrushstroke"] = 937772107] = "AssaultRifleMk2CamoBrushstroke";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoWoodland"] = 1401650071] = "AssaultRifleMk2CamoWoodland";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoSkull"] = 628662130] = "AssaultRifleMk2CamoSkull";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoSessanta"] = 3309920045] = "AssaultRifleMk2CamoSessanta";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoPerseus"] = 3482022833] = "AssaultRifleMk2CamoPerseus";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoLeopard"] = 2847614993] = "AssaultRifleMk2CamoLeopard";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoZebra"] = 4234628436] = "AssaultRifleMk2CamoZebra";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoGeometric"] = 2088750491] = "AssaultRifleMk2CamoGeometric";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoBoom"] = 2781053842] = "AssaultRifleMk2CamoBoom";
  WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoPatriotic"] = 3115408816] = "AssaultRifleMk2CamoPatriotic";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipNormal"] = 1283078430] = "CarbineRifleMk2ClipNormal";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipExtended"] = 1574296533] = "CarbineRifleMk2ClipExtended";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipArmorPiercing"] = 626875735] = "CarbineRifleMk2ClipArmorPiercing";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipFMJ"] = 1141059345] = "CarbineRifleMk2ClipFMJ";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipIncendiary"] = 1025884839] = "CarbineRifleMk2ClipIncendiary";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipTracer"] = 391640422] = "CarbineRifleMk2ClipTracer";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2BarrelNormal"] = 2201368575] = "CarbineRifleMk2BarrelNormal";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2BarrelHeavy"] = 2335983627] = "CarbineRifleMk2BarrelHeavy";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoDigital"] = 1272803094] = "CarbineRifleMk2CamoDigital";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoBrushstroke"] = 1080719624] = "CarbineRifleMk2CamoBrushstroke";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoWoodland"] = 792221348] = "CarbineRifleMk2CamoWoodland";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoSkull"] = 3842785869] = "CarbineRifleMk2CamoSkull";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoSessanta"] = 3548192559] = "CarbineRifleMk2CamoSessanta";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoPerseus"] = 2250671235] = "CarbineRifleMk2CamoPerseus";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoLeopard"] = 4095795318] = "CarbineRifleMk2CamoLeopard";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoZebra"] = 2866892280] = "CarbineRifleMk2CamoZebra";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoGeometric"] = 2559813981] = "CarbineRifleMk2CamoGeometric";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoBoom"] = 1796459838] = "CarbineRifleMk2CamoBoom";
  WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoPatriotic"] = 3663056191] = "CarbineRifleMk2CamoPatriotic";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipNormal"] = 1227564412] = "CombatMGMk2ClipNormal";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipExtended"] = 400507625] = "CombatMGMk2ClipExtended";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipArmorPiercing"] = 696788003] = "CombatMGMk2ClipArmorPiercing";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipFMJ"] = 1475288264] = "CombatMGMk2ClipFMJ";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipIncendiary"] = 3274096058] = "CombatMGMk2ClipIncendiary";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipTracer"] = 4133787461] = "CombatMGMk2ClipTracer";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2BarrelNormal"] = 3276730932] = "CombatMGMk2BarrelNormal";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2BarrelHeavy"] = 3051509595] = "CombatMGMk2BarrelHeavy";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoDigital"] = 1249283253] = "CombatMGMk2CamoDigital";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoBrushstroke"] = 3437259709] = "CombatMGMk2CamoBrushstroke";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoWoodland"] = 3197423398] = "CombatMGMk2CamoWoodland";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoSkull"] = 1980349969] = "CombatMGMk2CamoSkull";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoSessanta"] = 1219453777] = "CombatMGMk2CamoSessanta";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoPerseus"] = 2441508106] = "CombatMGMk2CamoPerseus";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoLeopard"] = 2220186280] = "CombatMGMk2CamoLeopard";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoZebra"] = 457967755] = "CombatMGMk2CamoZebra";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoGeometric"] = 235171324] = "CombatMGMk2CamoGeometric";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoBoom"] = 42685294] = "CombatMGMk2CamoBoom";
  WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoPatriotic"] = 3607349581] = "CombatMGMk2CamoPatriotic";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipNormal"] = 4196276776] = "HeavySniperMk2ClipNormal";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipExtended"] = 752418717] = "HeavySniperMk2ClipExtended";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipArmorPiercing"] = 4164277972] = "HeavySniperMk2ClipArmorPiercing";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipExplosive"] = 2313935527] = "HeavySniperMk2ClipExplosive";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipFMJ"] = 1005144310] = "HeavySniperMk2ClipFMJ";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipIncendiary"] = 247526935] = "HeavySniperMk2ClipIncendiary";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ScopeLarge"] = 2193687427] = "HeavySniperMk2ScopeLarge";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ScopeNightvision"] = 3061846192] = "HeavySniperMk2ScopeNightvision";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ScopeThermal"] = 776198721] = "HeavySniperMk2ScopeThermal";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2Suppressor"] = 2890063729] = "HeavySniperMk2Suppressor";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2Muzzle8"] = 1602080333] = "HeavySniperMk2Muzzle8";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2Muzzle9"] = 1764221345] = "HeavySniperMk2Muzzle9";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2BarrelNormal"] = 2425761975] = "HeavySniperMk2BarrelNormal";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2BarrelHeavy"] = 277524638] = "HeavySniperMk2BarrelHeavy";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoDigital"] = 4164123906] = "HeavySniperMk2CamoDigital";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoBrushstroke"] = 3317620069] = "HeavySniperMk2CamoBrushstroke";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoWoodland"] = 3916506229] = "HeavySniperMk2CamoWoodland";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoSkull"] = 329939175] = "HeavySniperMk2CamoSkull";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoSessanta"] = 643374672] = "HeavySniperMk2CamoSessanta";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoPerseus"] = 807875052] = "HeavySniperMk2CamoPerseus";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoLeopard"] = 2893163128] = "HeavySniperMk2CamoLeopard";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoZebra"] = 3198471901] = "HeavySniperMk2CamoZebra";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoGeometric"] = 3447155842] = "HeavySniperMk2CamoGeometric";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoBoom"] = 2881858759] = "HeavySniperMk2CamoBoom";
  WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoPatriotic"] = 1815270123] = "HeavySniperMk2CamoPatriotic";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipNormal"] = 1277460590] = "SMGMk2ClipNormal";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipExtended"] = 3112393518] = "SMGMk2ClipExtended";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipFMJ"] = 190476639] = "SMGMk2ClipFMJ";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipHollowpoint"] = 974903034] = "SMGMk2ClipHollowpoint";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipIncendiary"] = 3650233061] = "SMGMk2ClipIncendiary";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipTracer"] = 2146055916] = "SMGMk2ClipTracer";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2Sights"] = 2681951826] = "SMGMk2Sights";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2ScopeMacro"] = 3842157419] = "SMGMk2ScopeMacro";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2ScopeSmall"] = 1038927834] = "SMGMk2ScopeSmall";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2BarrelNormal"] = 3641720545] = "SMGMk2BarrelNormal";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2BarrelHeavy"] = 2774849419] = "SMGMk2BarrelHeavy";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoDigital"] = 3298267239] = "SMGMk2CamoDigital";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoBrushstroke"] = 940943685] = "SMGMk2CamoBrushstroke";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoWoodland"] = 1263226800] = "SMGMk2CamoWoodland";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoSkull"] = 3966931456] = "SMGMk2CamoSkull";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoSessanta"] = 1224100642] = "SMGMk2CamoSessanta";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoPerseus"] = 899228776] = "SMGMk2CamoPerseus";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoLeopard"] = 616006309] = "SMGMk2CamoLeopard";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoZebra"] = 2733014785] = "SMGMk2CamoZebra";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoGeometric"] = 572063080] = "SMGMk2CamoGeometric";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoBoom"] = 1170588613] = "SMGMk2CamoBoom";
  WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoPatriotic"] = 966612367] = "SMGMk2CamoPatriotic";
  return WeaponComponentHash2;
})(WeaponComponentHash || {});

// src/fivem/weaponComponent/ComponentAttachmentPoint.ts
var ComponentAttachmentPoint = /* @__PURE__ */ ((ComponentAttachmentPoint2) => {
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Invalid"] = 4294967295] = "Invalid";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Clip"] = 3723347892] = "Clip";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Clip2"] = 291640902] = "Clip2";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["FlashLaser"] = 679107254] = "FlashLaser";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["FlashLaser2"] = 2722126698] = "FlashLaser2";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Supp"] = 1863181664] = "Supp";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Supp2"] = 945598191] = "Supp2";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["GunRoot"] = 962500902] = "GunRoot";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Scope"] = 196630833] = "Scope";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Scope2"] = 1684637069] = "Scope2";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Grip"] = 2972950469] = "Grip";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Grip2"] = 3748215485] = "Grip2";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["TorchBulb"] = 421673795] = "TorchBulb";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Rail"] = 2451679629] = "Rail";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Rail2"] = 497110245] = "Rail2";
  ComponentAttachmentPoint2[ComponentAttachmentPoint2["Barrel"] = 2982890265] = "Barrel";
  return ComponentAttachmentPoint2;
})(ComponentAttachmentPoint || {});

// src/fivem/weaponComponent/DlcWeaponComponentData.ts
var DlcWeaponComponentData = /* @__PURE__ */ new Map();
function initializeOnce() {
  let isInitialized = false;
  return () => {
    if (isInitialized || IsDuplicityVersion()) {
      return;
    }
    const intLength = 4;
    const strLength = 64;
    const weaponCount = GetNumDlcWeapons();
    for (let i = 0; i < weaponCount; i++) {
      const componentCount = GetNumDlcWeaponComponents(i);
      for (let j = 0; j < componentCount; j++) {
        const buffer = new Uint8Array(14 * intLength + 4 * strLength);
        Citizen.invokeNative("0x6CF598A2957C2BF8", i, j, buffer, Citizen.returnResultAnyway());
        const dlcWeaponComponentData = {
          attachBone: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
          bActiveByDefault: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
          unk: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
          componentHash: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
          unk2: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength),
          componentCost: getUInt32FromUint8Array(buffer, 10 * intLength, 11 * intLength),
          name: getStringFromUInt8Array(buffer, 12 * intLength, 12 * intLength + strLength),
          desc: getStringFromUInt8Array(buffer, 12 * intLength + strLength, 12 * intLength + 2 * strLength)
        };
        DlcWeaponComponentData.set(dlcWeaponComponentData.componentHash, dlcWeaponComponentData);
      }
    }
    isInitialized = true;
  };
}
__name(initializeOnce, "initializeOnce");
initializeOnce()();

// src/fivem/weaponComponent/ComponentDisplayNameByHash.ts
var ComponentDisplayNameByHash = /* @__PURE__ */ new Map([
  [4294967295 /* Invalid */, "WCT_INVALID"],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_BASE, 'WT_KNUCKLE'],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_PIMP, 'WCT_KNUCK_02'],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_BALLAS, 'WCT_KNUCK_BG'],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_DOLLAR, 'WCT_KNUCK_DLR'],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_DIAMOND, 'WCT_KNUCK_DMD'],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_HATE, 'WCT_KNUCK_HT'],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_LOVE, 'WCT_KNUCK_LV'],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_PLAYER, 'WCT_KNUCK_PC'],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_KING, 'WCT_KNUCK_SLG'],
  // [WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_VAGOS, 'WCT_KNUCK_VG'],
  [4081463091 /* KnuckleVarmodBase */, "WT_KNUCKLE"],
  [3323197061 /* KnuckleVarmodPimp */, "WCT_KNUCK_02"],
  [4007263587 /* KnuckleVarmodBallas */, "WCT_KNUCK_BG"],
  [1351683121 /* KnuckleVarmodDollar */, "WCT_KNUCK_DLR"],
  [2539772380 /* KnuckleVarmodDiamond */, "WCT_KNUCK_DMD"],
  [2112683568 /* KnuckleVarmodHate */, "WCT_KNUCK_HT"],
  [1062111910 /* KnuckleVarmodLove */, "WCT_KNUCK_LV"],
  [146278587 /* KnuckleVarmodPlayer */, "WCT_KNUCK_PC"],
  [3800804335 /* KnuckleVarmodKing */, "WCT_KNUCK_SLG"],
  [2062808965 /* KnuckleVarmodVagos */, "WCT_KNUCK_VG"],
  [4294967295 /* Invalid */, "WCT_INVALID"],
  [1967214384 /* AtRailCover01 */, "WCT_RAIL"],
  [202788691 /* AtArAfGrip */, "WCT_GRIP"],
  [2640679034 /* AtArAfGrip2 */, "WCT_GRIP"],
  [899381934 /* AtPiFlsh */, "WCT_FLASH"],
  [2076495324 /* AtArFlsh */, "WCT_FLASH"],
  [1140676955 /* PistolMk2Flash */, "WCT_FLASH"],
  [2637152041 /* AtScopeMacro */, "WCT_SCOPE_MAC"],
  [1019656791 /* AtScopeMacro02 */, "WCT_SCOPE_MAC"],
  [2855028148 /* AtScopeSmall */, "WCT_SCOPE_SML"],
  [1006677997 /* AtScopeSmall02 */, "WCT_SCOPE_SML"],
  [2698550338 /* AtScopeMedium */, "WCT_SCOPE_MED"],
  [3527687644 /* AtScopeLarge */, "WCT_SCOPE_LRG"],
  [3159677559 /* AtScopeMax */, "WCT_SCOPE_MAX"],
  [3271853210 /* AtPiSupp */, "WCT_SUPP"],
  [2205435306 /* AtArSupp */, "WCT_SUPP"],
  [2805810788 /* AtArSupp02 */, "WCT_SUPP"],
  [3859329886 /* AtSrSupp */, "WCT_SUPP"],
  [2890063729 /* HeavySniperMk2Suppressor */, "WCT_SUPP"],
  [1709866683 /* AtPiSupp02 */, "WCT_SUPP"],
  [119648377 /* CombatPistolClip01 */, "WCT_CLIP1"],
  [834974250 /* APPistolClip01 */, "WCT_CLIP1"],
  [3410538224 /* MicroSMGClip01 */, "WCT_CLIP1"],
  [3193891350 /* AssaultRifleClip01 */, "WCT_CLIP1"],
  [2680042476 /* CarbineRifleClip01 */, "WCT_CLIP1"],
  [4203716879 /* AdvancedRifleClip01 */, "WCT_CLIP1"],
  [4097109892 /* MGClip01 */, "WCT_CLIP1"],
  [3791631178 /* CombatMGClip01 */, "WCT_CLIP1"],
  [2498239431 /* AssaultShotgunClip01 */, "WCT_CLIP1"],
  [2613461129 /* SniperRifleClip01 */, "WCT_CLIP1"],
  [1198478068 /* HeavySniperClip01 */, "WCT_CLIP1"],
  [2366834608 /* AssaultSMGClip01 */, "WCT_CLIP1"],
  [580369945 /* Pistol50Clip01 */, "WCT_CLIP1"],
  [195735895, "WCT_CLIP1"],
  [1525977990, "WCT_CLIP1"],
  [3404452422, "WCT_CLIP1"],
  [4170538377, "WCT_CLIP1"],
  [4169150169 /* SNSPistolClip01 */, "WCT_CLIP1"],
  [1168357051 /* VintagePistolClip01 */, "WCT_CLIP1"],
  [844049759 /* HeavyShotgunClip01 */, "WCT_CLIP1"],
  [3627761985 /* MarksmanRifleClip01 */, "WCT_CLIP1"],
  [1125642654 /* CombatPDWClip01 */, "WCT_CLIP1"],
  [3416146413 /* MarksmanPistolClip01 */, "WCT_CLIP1"],
  [1198425599 /* MachinePistolClip01 */, "WCT_CLIP1"],
  [2499030370 /* PistolMk2ClipNormal */, "WCT_CLIP1"],
  [2249208895 /* AssaultRifleMk2ClipNormal */, "WCT_CLIP1"],
  [1283078430 /* CarbineRifleMk2ClipNormal */, "WCT_CLIP1"],
  [1227564412 /* CombatMGMk2ClipNormal */, "WCT_CLIP1"],
  [4196276776 /* HeavySniperMk2ClipNormal */, "WCT_CLIP1"],
  [1277460590 /* SMGMk2ClipNormal */, "WCT_CLIP1"],
  [3978713628 /* PistolClip02 */, "WCT_CLIP2"],
  [3598405421 /* CombatPistolClip02 */, "WCT_CLIP2"],
  [614078421 /* APPistolClip02 */, "WCT_CLIP2"],
  [283556395 /* MicroSMGClip02 */, "WCT_CLIP2"],
  [889808635 /* SMGClip02 */, "WCT_CLIP2"],
  [2971750299 /* AssaultRifleClip02 */, "WCT_CLIP2"],
  [2433783441 /* CarbineRifleClip02 */, "WCT_CLIP2"],
  [2395064697 /* AdvancedRifleClip02 */, "WCT_CLIP2"],
  [2182449991 /* MGClip02 */, "WCT_CLIP2"],
  [3603274966 /* CombatMGClip02 */, "WCT_CLIP2"],
  [2260565874 /* AssaultShotgunClip02 */, "WCT_CLIP2"],
  [3370020614 /* MinigunClip01 */, "WCT_CLIP2"],
  [3141985303 /* AssaultSMGClip02 */, "WCT_CLIP2"],
  [3654528146 /* Pistol50Clip02 */, "WCT_CLIP2"],
  [1824470811, "WCT_CLIP2"],
  [3787849722, "WCT_CLIP2"],
  [1048471894, "WCT_CLIP2"],
  [2063610803 /* SNSPistolClip02 */, "WCT_CLIP2"],
  [867832552 /* VintagePistolClip02 */, "WCT_CLIP2"],
  [2535257853 /* HeavyShotgunClip02 */, "WCT_CLIP2"],
  [3439143621 /* MarksmanRifleClip02 */, "WCT_CLIP2"],
  [860508675 /* CombatPDWClip02 */, "WCT_CLIP2"],
  [3106695545 /* MachinePistolClip02 */, "WCT_CLIP2"],
  [1591132456 /* PistolMk2ClipExtended */, "WCT_CLIP2"],
  [3509242479 /* AssaultRifleMk2ClipExtended */, "WCT_CLIP2"],
  [1574296533 /* CarbineRifleMk2ClipExtended */, "WCT_CLIP2"],
  [400507625 /* CombatMGMk2ClipExtended */, "WCT_CLIP2"],
  [752418717 /* HeavySniperMk2ClipExtended */, "WCT_CLIP2"],
  [3112393518 /* SMGMk2ClipExtended */, "WCT_CLIP2"],
  [471997210 /* AtScopeLargeFixedZoom */, "WCT_SCOPE_LRG"],
  [1319990579 /* AssaultRifleVarmodLuxe */, "WCT_VAR_GOLD"],
  [3634075224 /* CarbineRifleVarmodLuxe */, "WCT_VAR_GOLD"],
  [3610841222 /* PistolVarmodLuxe */, "WCT_VAR_GOLD"],
  [663170192 /* SMGVarmodLuxe */, "WCT_VAR_GOLD"],
  [1215999497 /* MicroSMGVarmodLuxe */, "WCT_VAR_GOLD"],
  [371102273, "WCT_VAR_GOLD"],
  [663517359 /* AssaultSMGVarmodLowrider */, "WCT_VAR_GOLD"],
  [3328527730 /* CombatPistolVarmodLowrider */, "WCT_VAR_GOLD"],
  [3604658878 /* MGVarmodLowrider */, "WCT_VAR_GOLD"],
  [2732039643 /* PumpShotgunVarmodLowrider */, "WCT_VAR_GOLD"],
  [930927479 /* AdvancedRifleVarmodLuxe */, "WCT_VAR_METAL"],
  [2608252716 /* APPistolVarmodLuxe */, "WCT_VAR_METAL"],
  [2242268665 /* SawnoffShotgunVarmodLuxe */, "WCT_VAR_METAL"],
  [2824322168 /* BullpupRifleVarmodLow */, "WCT_VAR_METAL"],
  [2008591151 /* Pistol50VarmodLuxe */, "WCT_VAR_SIL"],
  [2053798779 /* HeavyPistolVarmodLuxe */, "WCT_VAR_WOOD"],
  [1077065191 /* SniperRifleVarmodLuxe */, "WCT_VAR_WOOD"],
  [2150886575 /* SNSPistolVarmodLowrider */, "WCT_VAR_WOOD"],
  [2466172125 /* CombatMGVarmodLowrider */, "WCT_VAR_ETCHM"],
  [1929467122 /* SpecialCarbineVarmodLowrider */, "WCT_VAR_ETCHM"],
  [2436343040 /* SwitchbladeVarmodBase */, "WCT_SB_BASE"],
  [1530822070 /* SwitchbladeVarmodVar1 */, "WCT_SB_VAR1"],
  [3885209186 /* SwitchbladeVarmodVar2 */, "WCT_SB_VAR2"],
  [3917905123 /* RevolverClip01 */, "WCT_CLIP1"],
  [384708672 /* RevolverVarmodBoss */, "WCT_REV_VARB"],
  [2492708877 /* RevolverVarmodGoon */, "WCT_REV_VARG"],
  [2043113590 /* SMGClip03 */, "WCT_CLIP_DRM"],
  [3689981245 /* AssaultRifleClip03 */, "WCT_CLIP_DRM"],
  [2294798931 /* HeavyShotgunClip03 */, "WCT_CLIP_DRM"],
  [3127044405 /* CarbineRifleClip03 */, "WCT_CLIP_BOX"],
  [2816286296 /* AssaultRifleMk2ClipArmorPiercing */, "WCT_CLIP_AP"],
  [626875735 /* CarbineRifleMk2ClipArmorPiercing */, "WCT_CLIP_AP"],
  [696788003 /* CombatMGMk2ClipArmorPiercing */, "WCT_CLIP_AP"],
  [4164277972 /* HeavySniperMk2ClipArmorPiercing */, "WCT_CLIP_AP"],
  [1329061674 /* PistolMk2ClipFMJ */, "WCT_CLIP_FMJ"],
  [1675665560 /* AssaultRifleMk2ClipFMJ */, "WCT_CLIP_FMJ"],
  [1141059345 /* CarbineRifleMk2ClipFMJ */, "WCT_CLIP_FMJ"],
  [1475288264 /* CombatMGMk2ClipFMJ */, "WCT_CLIP_FMJ"],
  [1005144310 /* HeavySniperMk2ClipFMJ */, "WCT_CLIP_FMJ"],
  [190476639 /* SMGMk2ClipFMJ */, "WCT_CLIP_FMJ"],
  [733837882 /* PistolMk2ClipIncendiary */, "WCT_CLIP_INC"],
  [4218476627 /* AssaultRifleMk2ClipIncendiary */, "WCT_CLIP_INC"],
  [1025884839 /* CarbineRifleMk2ClipIncendiary */, "WCT_CLIP_INC"],
  [3274096058 /* CombatMGMk2ClipIncendiary */, "WCT_CLIP_INC"],
  [247526935 /* HeavySniperMk2ClipIncendiary */, "WCT_CLIP_INC"],
  [3650233061 /* SMGMk2ClipIncendiary */, "WCT_CLIP_INC"],
  [634039983 /* PistolMk2ClipTracer */, "WCT_CLIP_TR"],
  [4012669121 /* AssaultRifleMk2ClipTracer */, "WCT_CLIP_TR"],
  [391640422 /* CarbineRifleMk2ClipTracer */, "WCT_CLIP_TR"],
  [4133787461 /* CombatMGMk2ClipTracer */, "WCT_CLIP_TR"],
  [2146055916 /* SMGMk2ClipTracer */, "WCT_CLIP_TR"],
  [2313935527 /* HeavySniperMk2ClipExplosive */, "WCT_CLIP_EX"],
  [2248057097 /* PistolMk2ClipHollowpoint */, "WCT_CLIP_HP"],
  [974903034 /* SMGMk2ClipHollowpoint */, "WCT_CLIP_HP"],
  [1134861606 /* AssaultRifleMk2BarrelNormal */, "WCT_BARR"],
  [2201368575 /* CarbineRifleMk2BarrelNormal */, "WCT_BARR"],
  [3276730932 /* CombatMGMk2BarrelNormal */, "WCT_BARR"],
  [3641720545 /* SMGMk2BarrelNormal */, "WCT_BARR"],
  [1447477866 /* AssaultRifleMk2BarrelHeavy */, "WCT_BARR2"],
  [2335983627 /* CarbineRifleMk2BarrelHeavy */, "WCT_BARR2"],
  [3051509595 /* CombatMGMk2BarrelHeavy */, "WCT_BARR2"],
  [2774849419 /* SMGMk2BarrelHeavy */, "WCT_BARR2"],
  [1550611612 /* PistolMk2CamoDigital */, "WCT_CAMO_1"],
  [2434475183 /* AssaultRifleMk2CamoDigital */, "WCT_CAMO_1"],
  [1272803094 /* CarbineRifleMk2CamoDigital */, "WCT_CAMO_1"],
  [1249283253 /* CombatMGMk2CamoDigital */, "WCT_CAMO_1"],
  [4164123906 /* HeavySniperMk2CamoDigital */, "WCT_CAMO_1"],
  [3298267239 /* SMGMk2CamoDigital */, "WCT_CAMO_1"],
  [3036451504 /* PistolMk2CamoSlideDigital */, "WCT_CAMO_1"],
  [368550800 /* PistolMk2CamoBrushstroke */, "WCT_CAMO_2"],
  [937772107 /* AssaultRifleMk2CamoBrushstroke */, "WCT_CAMO_2"],
  [1080719624 /* CarbineRifleMk2CamoBrushstroke */, "WCT_CAMO_2"],
  [3437259709 /* CombatMGMk2CamoBrushstroke */, "WCT_CAMO_2"],
  [3317620069 /* HeavySniperMk2CamoBrushstroke */, "WCT_CAMO_2"],
  [940943685 /* SMGMk2CamoBrushstroke */, "WCT_CAMO_2"],
  [438243936 /* PistolMk2CamoSlideBrushstroke */, "WCT_CAMO_2"],
  [2525897947 /* PistolMk2CamoWoodland */, "WCT_CAMO_3"],
  [1401650071 /* AssaultRifleMk2CamoWoodland */, "WCT_CAMO_3"],
  [792221348 /* CarbineRifleMk2CamoWoodland */, "WCT_CAMO_3"],
  [3197423398 /* CombatMGMk2CamoWoodland */, "WCT_CAMO_3"],
  [3916506229 /* HeavySniperMk2CamoWoodland */, "WCT_CAMO_3"],
  [1263226800 /* SMGMk2CamoWoodland */, "WCT_CAMO_3"],
  [3839888240 /* PistolMk2CamoSlideWoodland */, "WCT_CAMO_3"],
  [24902297 /* PistolMk2CamoSkull */, "WCT_CAMO_4"],
  [628662130 /* AssaultRifleMk2CamoSkull */, "WCT_CAMO_4"],
  [3842785869 /* CarbineRifleMk2CamoSkull */, "WCT_CAMO_4"],
  [1980349969 /* CombatMGMk2CamoSkull */, "WCT_CAMO_4"],
  [329939175 /* HeavySniperMk2CamoSkull */, "WCT_CAMO_4"],
  [3966931456 /* SMGMk2CamoSkull */, "WCT_CAMO_4"],
  [740920107 /* PistolMk2CamoSlideSkull */, "WCT_CAMO_4"],
  [4066925682 /* PistolMk2CamoSessanta */, "WCT_CAMO_5"],
  [3309920045 /* AssaultRifleMk2CamoSessanta */, "WCT_CAMO_5"],
  [3548192559 /* CarbineRifleMk2CamoSessanta */, "WCT_CAMO_5"],
  [1219453777 /* CombatMGMk2CamoSessanta */, "WCT_CAMO_5"],
  [643374672 /* HeavySniperMk2CamoSessanta */, "WCT_CAMO_5"],
  [1224100642 /* SMGMk2CamoSessanta */, "WCT_CAMO_5"],
  [3753350949 /* PistolMk2CamoSlideSessanta */, "WCT_CAMO_5"],
  [3710005734 /* PistolMk2CamoPerseus */, "WCT_CAMO_6"],
  [3482022833 /* AssaultRifleMk2CamoPerseus */, "WCT_CAMO_6"],
  [2250671235 /* CarbineRifleMk2CamoPerseus */, "WCT_CAMO_6"],
  [2441508106 /* CombatMGMk2CamoPerseus */, "WCT_CAMO_6"],
  [807875052 /* HeavySniperMk2CamoPerseus */, "WCT_CAMO_6"],
  [899228776 /* SMGMk2CamoPerseus */, "WCT_CAMO_6"],
  [1809261196 /* PistolMk2CamoSlidePerseus */, "WCT_CAMO_6"],
  [3141791350 /* PistolMk2CamoLeopard */, "WCT_CAMO_7"],
  [2847614993 /* AssaultRifleMk2CamoLeopard */, "WCT_CAMO_7"],
  [4095795318 /* CarbineRifleMk2CamoLeopard */, "WCT_CAMO_7"],
  [2220186280 /* CombatMGMk2CamoLeopard */, "WCT_CAMO_7"],
  [2893163128 /* HeavySniperMk2CamoLeopard */, "WCT_CAMO_7"],
  [616006309 /* SMGMk2CamoLeopard */, "WCT_CAMO_7"],
  [2648428428 /* PistolMk2CamoSlideLeopard */, "WCT_CAMO_7"],
  [1301287696 /* PistolMk2CamoZebra */, "WCT_CAMO_8"],
  [4234628436 /* AssaultRifleMk2CamoZebra */, "WCT_CAMO_8"],
  [2866892280 /* CarbineRifleMk2CamoZebra */, "WCT_CAMO_8"],
  [457967755 /* CombatMGMk2CamoZebra */, "WCT_CAMO_8"],
  [3198471901 /* HeavySniperMk2CamoZebra */, "WCT_CAMO_8"],
  [2733014785 /* SMGMk2CamoZebra */, "WCT_CAMO_8"],
  [3004802348 /* PistolMk2CamoSlideZebra */, "WCT_CAMO_8"],
  [1597093459 /* PistolMk2CamoGeometric */, "WCT_CAMO_9"],
  [2088750491 /* AssaultRifleMk2CamoGeometric */, "WCT_CAMO_9"],
  [2559813981 /* CarbineRifleMk2CamoGeometric */, "WCT_CAMO_9"],
  [235171324 /* CombatMGMk2CamoGeometric */, "WCT_CAMO_9"],
  [3447155842 /* HeavySniperMk2CamoGeometric */, "WCT_CAMO_9"],
  [572063080 /* SMGMk2CamoGeometric */, "WCT_CAMO_9"],
  [3330502162 /* PistolMk2CamoSlideGeometric */, "WCT_CAMO_9"],
  [1769871776 /* PistolMk2CamoBoom */, "WCT_CAMO_10"],
  [2781053842 /* AssaultRifleMk2CamoBoom */, "WCT_CAMO_10"],
  [1796459838 /* CarbineRifleMk2CamoBoom */, "WCT_CAMO_10"],
  [42685294 /* CombatMGMk2CamoBoom */, "WCT_CAMO_10"],
  [2881858759 /* HeavySniperMk2CamoBoom */, "WCT_CAMO_10"],
  [1170588613 /* SMGMk2CamoBoom */, "WCT_CAMO_10"],
  [1135718771 /* PistolMk2CamoSlideBoom */, "WCT_CAMO_10"],
  [2467084625 /* PistolMk2CamoPatriotic */, "WCT_CAMO_IND"],
  [3115408816 /* AssaultRifleMk2CamoPatriotic */, "WCT_CAMO_IND"],
  [3663056191 /* CarbineRifleMk2CamoPatriotic */, "WCT_CAMO_IND"],
  [3607349581 /* CombatMGMk2CamoPatriotic */, "WCT_CAMO_IND"],
  [1815270123 /* HeavySniperMk2CamoPatriotic */, "WCT_CAMO_IND"],
  [966612367 /* SMGMk2CamoPatriotic */, "WCT_CAMO_IND"],
  [1253942266 /* PistolMk2CamoSlidePatriotic */, "WCT_CAMO_IND"],
  [1108334355 /* AtSights */, "WCT_HOLO"],
  [1060929921 /* AtScopeSmallMk2 */, "WCT_SCOPE_SML2"],
  [77277509 /* AtScopeMacroMk2 */, "WCT_SCOPE_MAC2"],
  [3328927042 /* AtScopeMediumMk2 */, "WCT_SCOPE_MED2"],
  [3113485012 /* AtMuzzle1 */, "WCT_MUZZ"],
  [3362234491 /* AtMuzzle2 */, "WCT_MUZZ"],
  [3725708239 /* AtMuzzle3 */, "WCT_MUZZ"],
  [3968886988 /* AtMuzzle4 */, "WCT_MUZZ"],
  [48731514 /* AtMuzzle5 */, "WCT_MUZZ"],
  [1303784126 /* AtMuzzle7 */, "WCT_MUZZ"],
  [1602080333 /* HeavySniperMk2Muzzle8 */, "WCT_MUZZ"],
  [1764221345 /* HeavySniperMk2Muzzle9 */, "WCT_MUZZ"],
  [2396306288 /* PistolMk2Scope */, "WCT_SCOPE_PI"],
  [568543123 /* PistolMk2Compensator */, "WCT_COMP"],
  [2193687427 /* HeavySniperMk2ScopeLarge */, "WCT_SCOPE_LRG2"]
]);
function initializeOnce2() {
  let isInitialized = false;
  return () => {
    if (isInitialized) {
      return;
    }
    for (const [hash, data] of DlcWeaponComponentData) {
      ComponentDisplayNameByHash.set(hash, data.name);
    }
    isInitialized = true;
  };
}
__name(initializeOnce2, "initializeOnce");
initializeOnce2()();

// src/fivem/weaponComponent/WeaponComponentHashesByWeaponHash.ts
var WeaponComponentHashesByWeaponHash = /* @__PURE__ */ new Map([
  // Melees
  [
    -656458692 /* KnuckleDuster */,
    // Knuckle Duster
    [
      4081463091 /* COMPONENT_KNUCKLE_VARMOD_BASE */,
      3323197061 /* COMPONENT_KNUCKLE_VARMOD_PIMP */,
      4007263587 /* COMPONENT_KNUCKLE_VARMOD_BALLAS */,
      1351683121 /* COMPONENT_KNUCKLE_VARMOD_DOLLAR */,
      2539772380 /* COMPONENT_KNUCKLE_VARMOD_DIAMOND */,
      2112683568 /* COMPONENT_KNUCKLE_VARMOD_HATE */,
      1062111910 /* COMPONENT_KNUCKLE_VARMOD_LOVE */,
      146278587 /* COMPONENT_KNUCKLE_VARMOD_PLAYER */,
      3800804335 /* COMPONENT_KNUCKLE_VARMOD_KING */,
      2062808965 /* COMPONENT_KNUCKLE_VARMOD_VAGOS */
    ]
  ],
  [
    -538741184 /* SwitchBlade */,
    // Switchblade
    [
      2436343040 /* COMPONENT_SWITCHBLADE_VARMOD_BASE */,
      1530822070 /* COMPONENT_SWITCHBLADE_VARMOD_VAR1 */,
      3885209186 /* COMPONENT_SWITCHBLADE_VARMOD_VAR2 */
    ]
  ],
  // Pistols
  [
    453432689 /* Pistol */,
    // Pistol
    [
      4275109233 /* COMPONENT_PISTOL_CLIP_01 */,
      3978713628 /* COMPONENT_PISTOL_CLIP_02 */,
      899381934 /* COMPONENT_AT_PI_FLSH */,
      1709866683 /* COMPONENT_AT_PI_SUPP_02 */,
      3610841222 /* COMPONENT_PISTOL_VARMOD_LUXE */
    ]
  ],
  [
    1593441988 /* CombatPistol */,
    // Combat Pistol
    [
      119648377 /* COMPONENT_COMBATPISTOL_CLIP_01 */,
      3598405421 /* COMPONENT_COMBATPISTOL_CLIP_02 */,
      899381934 /* COMPONENT_AT_PI_FLSH */,
      3271853210 /* COMPONENT_AT_PI_SUPP */,
      3328527730 /* COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER */
    ]
  ],
  [
    584646201 /* APPistol */,
    // AP Pistol
    [
      834974250 /* COMPONENT_APPISTOL_CLIP_01 */,
      614078421 /* COMPONENT_APPISTOL_CLIP_02 */,
      899381934 /* COMPONENT_AT_PI_FLSH */,
      3271853210 /* COMPONENT_AT_PI_SUPP */,
      2608252716 /* COMPONENT_APPISTOL_VARMOD_LUXE */
    ]
  ],
  [
    -1716589765 /* Pistol50 */,
    // Pistol .50
    [
      580369945 /* COMPONENT_PISTOL50_CLIP_01 */,
      3654528146 /* COMPONENT_PISTOL50_CLIP_02 */,
      899381934 /* COMPONENT_AT_PI_FLSH */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      2008591151 /* COMPONENT_PISTOL50_VARMOD_LUXE */
    ]
  ],
  [
    -1045183535 /* Revolver */,
    // Heavy Revolver
    [
      384708672 /* COMPONENT_REVOLVER_VARMOD_BOSS */,
      2492708877 /* COMPONENT_REVOLVER_VARMOD_GOON */,
      3917905123 /* COMPONENT_REVOLVER_CLIP_01 */
    ]
  ],
  [
    -1076751822 /* SNSPistol */,
    // SNS Pistol
    [
      4169150169 /* COMPONENT_SNSPISTOL_CLIP_01 */,
      2063610803 /* COMPONENT_SNSPISTOL_CLIP_02 */,
      2150886575 /* COMPONENT_SNSPISTOL_VARMOD_LOWRIDER */
    ]
  ],
  [
    -771403250 /* HeavyPistol */,
    // Heavy Pistol
    [
      222992026 /* COMPONENT_HEAVYPISTOL_CLIP_01 */,
      1694090795 /* COMPONENT_HEAVYPISTOL_CLIP_02 */,
      899381934 /* COMPONENT_AT_PI_FLSH */,
      3271853210 /* COMPONENT_AT_PI_SUPP */,
      2053798779 /* COMPONENT_HEAVYPISTOL_VARMOD_LUXE */
    ]
  ],
  [
    -879347409 /* RevolverMk2 */,
    // Heavy Revolver Mk II
    [
      3122911422 /* COMPONENT_REVOLVER_MK2_CLIP_01 */,
      3336103030 /* COMPONENT_REVOLVER_MK2_CLIP_TRACER */,
      15712037 /* COMPONENT_REVOLVER_MK2_CLIP_INCENDIARY */,
      284438159 /* COMPONENT_REVOLVER_MK2_CLIP_HOLLOWPOINT */,
      231258687 /* COMPONENT_REVOLVER_MK2_CLIP_FMJ */,
      1108334355 /* COMPONENT_AT_SIGHTS */,
      77277509 /* COMPONENT_AT_SCOPE_MACRO_MK2 */,
      899381934 /* COMPONENT_AT_PI_FLSH */,
      654802123 /* COMPONENT_AT_PI_COMP_03 */,
      3225415071 /* COMPONENT_REVOLVER_MK2_CAMO */,
      11918884 /* COMPONENT_REVOLVER_MK2_CAMO_02 */,
      176157112 /* COMPONENT_REVOLVER_MK2_CAMO_03 */,
      4074914441 /* COMPONENT_REVOLVER_MK2_CAMO_04 */,
      288456487 /* COMPONENT_REVOLVER_MK2_CAMO_05 */,
      398658626 /* COMPONENT_REVOLVER_MK2_CAMO_06 */,
      628697006 /* COMPONENT_REVOLVER_MK2_CAMO_07 */,
      925911836 /* COMPONENT_REVOLVER_MK2_CAMO_08 */,
      1222307441 /* COMPONENT_REVOLVER_MK2_CAMO_09 */,
      552442715 /* COMPONENT_REVOLVER_MK2_CAMO_10 */,
      3646023783 /* COMPONENT_REVOLVER_MK2_CAMO_IND_01 */
    ]
  ],
  [
    -2009644972 /* SNSPistolMk2 */,
    // SNS Pistol Mk II
    [
      21392614 /* COMPONENT_SNSPISTOL_MK2_CLIP_01 */,
      3465283442 /* COMPONENT_SNSPISTOL_MK2_CLIP_02 */,
      2418909806 /* COMPONENT_SNSPISTOL_MK2_CLIP_TRACER */,
      3870121849 /* COMPONENT_SNSPISTOL_MK2_CLIP_INCENDIARY */,
      2366665730 /* COMPONENT_SNSPISTOL_MK2_CLIP_HOLLOWPOINT */,
      3239176998 /* COMPONENT_SNSPISTOL_MK2_CLIP_FMJ */,
      1246324211 /* COMPONENT_AT_PI_FLSH_03 */,
      1205768792 /* COMPONENT_AT_PI_RAIL_02 */,
      1709866683 /* COMPONENT_AT_PI_SUPP_02 */,
      2860680127 /* COMPONENT_AT_PI_COMP_02 */,
      259780317 /* COMPONENT_SNSPISTOL_MK2_CAMO */,
      2321624822 /* COMPONENT_SNSPISTOL_MK2_CAMO_02 */,
      1996130345 /* COMPONENT_SNSPISTOL_MK2_CAMO_03 */,
      2839309484 /* COMPONENT_SNSPISTOL_MK2_CAMO_04 */,
      2626704212 /* COMPONENT_SNSPISTOL_MK2_CAMO_05 */,
      1308243489 /* COMPONENT_SNSPISTOL_MK2_CAMO_06 */,
      1122574335 /* COMPONENT_SNSPISTOL_MK2_CAMO_07 */,
      1420313469 /* COMPONENT_SNSPISTOL_MK2_CAMO_08 */,
      109848390 /* COMPONENT_SNSPISTOL_MK2_CAMO_09 */,
      593945703 /* COMPONENT_SNSPISTOL_MK2_CAMO_10 */,
      1142457062 /* COMPONENT_SNSPISTOL_MK2_CAMO_IND_01 */,
      3891161322 /* COMPONENT_SNSPISTOL_MK2_CAMO_SLIDE */,
      691432737 /* COMPONENT_SNSPISTOL_MK2_CAMO_02_SLIDE */,
      987648331 /* COMPONENT_SNSPISTOL_MK2_CAMO_03_SLIDE */,
      3863286761 /* COMPONENT_SNSPISTOL_MK2_CAMO_04_SLIDE */,
      3447384986 /* COMPONENT_SNSPISTOL_MK2_CAMO_05_SLIDE */,
      4202375078 /* COMPONENT_SNSPISTOL_MK2_CAMO_06_SLIDE */,
      3800418970 /* COMPONENT_SNSPISTOL_MK2_CAMO_07_SLIDE */,
      730876697 /* COMPONENT_SNSPISTOL_MK2_CAMO_08_SLIDE */,
      583159708 /* COMPONENT_SNSPISTOL_MK2_CAMO_09_SLIDE */,
      2366463693 /* COMPONENT_SNSPISTOL_MK2_CAMO_10_SLIDE */,
      520557834 /* COMPONENT_SNSPISTOL_MK2_CAMO_IND_01_SLIDE */
    ]
  ],
  [
    3219281620 /* PistolMk2 */,
    // Pistol Mk II
    [
      2499030370 /* COMPONENT_PISTOL_MK2_CLIP_01 */,
      1591132456 /* COMPONENT_PISTOL_MK2_CLIP_02 */,
      634039983 /* COMPONENT_PISTOL_MK2_CLIP_TRACER */,
      733837882 /* COMPONENT_PISTOL_MK2_CLIP_INCENDIARY */,
      2248057097 /* COMPONENT_PISTOL_MK2_CLIP_HOLLOWPOINT */,
      1329061674 /* COMPONENT_PISTOL_MK2_CLIP_FMJ */,
      2396306288 /* COMPONENT_AT_PI_RAIL */,
      1140676955 /* COMPONENT_AT_PI_FLSH_02 */,
      1709866683 /* COMPONENT_AT_PI_SUPP_02 */,
      568543123 /* COMPONENT_AT_PI_COMP */,
      1550611612 /* COMPONENT_PISTOL_MK2_CAMO */,
      368550800 /* COMPONENT_PISTOL_MK2_CAMO_02 */,
      2525897947 /* COMPONENT_PISTOL_MK2_CAMO_03 */,
      24902297 /* COMPONENT_PISTOL_MK2_CAMO_04 */,
      4066925682 /* COMPONENT_PISTOL_MK2_CAMO_05 */,
      3710005734 /* COMPONENT_PISTOL_MK2_CAMO_06 */,
      3141791350 /* COMPONENT_PISTOL_MK2_CAMO_07 */,
      1301287696 /* COMPONENT_PISTOL_MK2_CAMO_08 */,
      1597093459 /* COMPONENT_PISTOL_MK2_CAMO_09 */,
      1769871776 /* COMPONENT_PISTOL_MK2_CAMO_10 */,
      2467084625 /* COMPONENT_PISTOL_MK2_CAMO_IND_01 */,
      3036451504 /* COMPONENT_PISTOL_MK2_CAMO_SLIDE */,
      438243936 /* COMPONENT_PISTOL_MK2_CAMO_02_SLIDE */,
      3839888240 /* COMPONENT_PISTOL_MK2_CAMO_03_SLIDE */,
      740920107 /* COMPONENT_PISTOL_MK2_CAMO_04_SLIDE */,
      3753350949 /* COMPONENT_PISTOL_MK2_CAMO_05_SLIDE */,
      1809261196 /* COMPONENT_PISTOL_MK2_CAMO_06_SLIDE */,
      2648428428 /* COMPONENT_PISTOL_MK2_CAMO_07_SLIDE */,
      3004802348 /* COMPONENT_PISTOL_MK2_CAMO_08_SLIDE */,
      3330502162 /* COMPONENT_PISTOL_MK2_CAMO_09_SLIDE */,
      1135718771 /* COMPONENT_PISTOL_MK2_CAMO_10_SLIDE */,
      1253942266 /* COMPONENT_PISTOL_MK2_CAMO_IND_01_SLIDE */
    ]
  ],
  [
    137902532 /* VintagePistol */,
    // Vintage Pistol
    [
      1168357051 /* COMPONENT_VINTAGEPISTOL_CLIP_01 */,
      867832552 /* COMPONENT_VINTAGEPISTOL_CLIP_02 */,
      3271853210 /* COMPONENT_AT_PI_SUPP */
    ]
  ],
  [
    -1355376991 /* RayPistol */,
    // Up - n - Atomizer
    [3621517063 /* COMPONENT_RAYPISTOL_VARMOD_XMAS18 */]
  ],
  [
    727643628 /* CeramicPistol */,
    // Ceramic Pistol
    [
      1423184737 /* COMPONENT_CERAMICPISTOL_CLIP_01 */,
      2172153001 /* COMPONENT_CERAMICPISTOL_CLIP_02 */,
      2466764538 /* COMPONENT_CERAMICPISTOL_SUPP */
    ]
  ],
  // Submachine Guns
  [
    324215364 /* MicroSMG */,
    // Micro SMG
    [
      3410538224 /* COMPONENT_MICROSMG_CLIP_01 */,
      283556395 /* COMPONENT_MICROSMG_CLIP_02 */,
      899381934 /* COMPONENT_AT_PI_FLSH */,
      2637152041 /* COMPONENT_AT_SCOPE_MACRO */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      1215999497 /* COMPONENT_MICROSMG_VARMOD_LUXE */
    ]
  ],
  [
    736523883 /* SMG */,
    // SMG
    [
      643254679 /* COMPONENT_SMG_CLIP_01 */,
      889808635 /* COMPONENT_SMG_CLIP_02 */,
      2043113590 /* COMPONENT_SMG_CLIP_03 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      1019656791 /* COMPONENT_AT_SCOPE_MACRO_02 */,
      3271853210 /* COMPONENT_AT_PI_SUPP */,
      663170192 /* COMPONENT_SMG_VARMOD_LUXE */
    ]
  ],
  [
    -270015777 /* AssaultSMG */,
    // Assault SMG
    [
      2366834608 /* COMPONENT_ASSAULTSMG_CLIP_01 */,
      3141985303 /* COMPONENT_ASSAULTSMG_CLIP_02 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2637152041 /* COMPONENT_AT_SCOPE_MACRO */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      663517359 /* COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER */
    ]
  ],
  [
    -1121678507 /* MiniSMG */,
    // Mini SMG
    [2227745491 /* COMPONENT_MINISMG_CLIP_01 */, 2474561719 /* COMPONENT_MINISMG_CLIP_02 */]
  ],
  [
    2024373456 /* SMGMk2 */,
    // SMG Mk II
    [
      1277460590 /* COMPONENT_SMG_MK2_CLIP_01 */,
      3112393518 /* COMPONENT_SMG_MK2_CLIP_02 */,
      2146055916 /* COMPONENT_SMG_MK2_CLIP_TRACER */,
      3650233061 /* COMPONENT_SMG_MK2_CLIP_INCENDIARY */,
      974903034 /* COMPONENT_SMG_MK2_CLIP_HOLLOWPOINT */,
      190476639 /* COMPONENT_SMG_MK2_CLIP_FMJ */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2681951826 /* COMPONENT_AT_SIGHTS_SMG */,
      3842157419 /* COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2 */,
      1038927834 /* COMPONENT_AT_SCOPE_SMALL_SMG_MK2 */,
      3271853210 /* COMPONENT_AT_PI_SUPP */,
      3113485012 /* COMPONENT_AT_MUZZLE_01 */,
      3362234491 /* COMPONENT_AT_MUZZLE_02 */,
      3725708239 /* COMPONENT_AT_MUZZLE_03 */,
      3968886988 /* COMPONENT_AT_MUZZLE_04 */,
      48731514 /* COMPONENT_AT_MUZZLE_05 */,
      880736428 /* COMPONENT_AT_MUZZLE_06 */,
      1303784126 /* COMPONENT_AT_MUZZLE_07 */,
      3641720545 /* COMPONENT_AT_SB_BARREL_01 */,
      2774849419 /* COMPONENT_AT_SB_BARREL_02 */,
      3298267239 /* COMPONENT_SMG_MK2_CAMO */,
      940943685 /* COMPONENT_SMG_MK2_CAMO_02 */,
      1263226800 /* COMPONENT_SMG_MK2_CAMO_03 */,
      3966931456 /* COMPONENT_SMG_MK2_CAMO_04 */,
      1224100642 /* COMPONENT_SMG_MK2_CAMO_05 */,
      899228776 /* COMPONENT_SMG_MK2_CAMO_06 */,
      616006309 /* COMPONENT_SMG_MK2_CAMO_07 */,
      2733014785 /* COMPONENT_SMG_MK2_CAMO_08 */,
      572063080 /* COMPONENT_SMG_MK2_CAMO_09 */,
      1170588613 /* COMPONENT_SMG_MK2_CAMO_10 */,
      966612367 /* COMPONENT_SMG_MK2_CAMO_IND_01 */
    ]
  ],
  [
    -619010992 /* MachinePistol */,
    // Machine Pistol
    [
      1198425599 /* COMPONENT_MACHINEPISTOL_CLIP_01 */,
      3106695545 /* COMPONENT_MACHINEPISTOL_CLIP_02 */,
      2850671348 /* COMPONENT_MACHINEPISTOL_CLIP_03 */,
      3271853210 /* COMPONENT_AT_PI_SUPP */
    ]
  ],
  [
    171789620 /* CombatPDW */,
    // Combat PDW
    [
      1125642654 /* COMPONENT_COMBATPDW_CLIP_01 */,
      860508675 /* COMPONENT_COMBATPDW_CLIP_02 */,
      1857603803 /* COMPONENT_COMBATPDW_CLIP_03 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */,
      2855028148 /* COMPONENT_AT_SCOPE_SMALL */
    ]
  ],
  // Shotguns
  [
    487013001 /* PumpShotgun */,
    // Pump Shotgun
    [
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      3859329886 /* COMPONENT_AT_SR_SUPP */,
      2732039643 /* COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER */
    ]
  ],
  [
    2017895192 /* SawnOffShotgun */,
    // Sawed - Off Shotgun
    [2242268665 /* COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE */]
  ],
  [
    -494615257 /* AssaultShotgun */,
    // Assault Shotgun
    [
      2498239431 /* COMPONENT_ASSAULTSHOTGUN_CLIP_01 */,
      2260565874 /* COMPONENT_ASSAULTSHOTGUN_CLIP_02 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2205435306 /* COMPONENT_AT_AR_SUPP */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */
    ]
  ],
  [
    -1654528753 /* BullpupShotgun */,
    // Bullpup Shotgun
    [
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */
    ]
  ],
  [
    1432025498 /* PumpShotgunMk2 */,
    // Pump Shotgun Mk II
    [
      3449028929 /* COMPONENT_PUMPSHOTGUN_MK2_CLIP_01 */,
      2676628469 /* COMPONENT_PUMPSHOTGUN_MK2_CLIP_INCENDIARY */,
      1315288101 /* COMPONENT_PUMPSHOTGUN_MK2_CLIP_ARMORPIERCING */,
      3914869031 /* COMPONENT_PUMPSHOTGUN_MK2_CLIP_HOLLOWPOINT */,
      1004815965 /* COMPONENT_PUMPSHOTGUN_MK2_CLIP_EXPLOSIVE */,
      1108334355 /* COMPONENT_AT_SIGHTS */,
      77277509 /* COMPONENT_AT_SCOPE_MACRO_MK2 */,
      1060929921 /* COMPONENT_AT_SCOPE_SMALL_MK2 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2890063729 /* COMPONENT_AT_SR_SUPP_03 */,
      1602080333 /* COMPONENT_AT_MUZZLE_08 */,
      3820854852 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO */,
      387223451 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_02 */,
      617753366 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_03 */,
      4072589040 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_04 */,
      8741501 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_05 */,
      3693681093 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_06 */,
      3783533691 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_07 */,
      3639579478 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_08 */,
      4012490698 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_09 */,
      1739501925 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_10 */,
      1178671645 /* COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01 */
    ]
  ],
  [
    984333226 /* HeavyShotgun */,
    // Heavy Shotgun
    [
      844049759 /* COMPONENT_HEAVYSHOTGUN_CLIP_01 */,
      2535257853 /* COMPONENT_HEAVYSHOTGUN_CLIP_02 */,
      2294798931 /* COMPONENT_HEAVYSHOTGUN_CLIP_03 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */
    ]
  ],
  [
    94989220 /* CombatShotgun */,
    // Combat Shotgun
    [2076495324 /* COMPONENT_AT_AR_FLSH */, 2205435306 /* COMPONENT_AT_AR_SUPP */]
  ],
  // Rifles
  [
    -1074790547 /* AssaultRifle */,
    // Assault Rifle
    [
      3193891350 /* COMPONENT_ASSAULTRIFLE_CLIP_01 */,
      2971750299 /* COMPONENT_ASSAULTRIFLE_CLIP_02 */,
      3689981245 /* COMPONENT_ASSAULTRIFLE_CLIP_03 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2637152041 /* COMPONENT_AT_SCOPE_MACRO */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */,
      1319990579 /* COMPONENT_ASSAULTRIFLE_VARMOD_LUXE */
    ]
  ],
  [
    -2084633992 /* CarbineRifle */,
    // Carbine Rifle
    [
      2680042476 /* COMPONENT_CARBINERIFLE_CLIP_01 */,
      2433783441 /* COMPONENT_CARBINERIFLE_CLIP_02 */,
      3127044405 /* COMPONENT_CARBINERIFLE_CLIP_03 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2698550338 /* COMPONENT_AT_SCOPE_MEDIUM */,
      2205435306 /* COMPONENT_AT_AR_SUPP */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */,
      3634075224 /* COMPONENT_CARBINERIFLE_VARMOD_LUXE */
    ]
  ],
  [
    -1357824103 /* AdvancedRifle */,
    // Advanced Rifle
    [
      4203716879 /* COMPONENT_ADVANCEDRIFLE_CLIP_01 */,
      2395064697 /* COMPONENT_ADVANCEDRIFLE_CLIP_02 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2855028148 /* COMPONENT_AT_SCOPE_SMALL */,
      2205435306 /* COMPONENT_AT_AR_SUPP */,
      930927479 /* COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE */
    ]
  ],
  [
    -1063057011 /* SpecialCarbine */,
    // Special Carbine
    [
      3334989185 /* COMPONENT_SPECIALCARBINE_CLIP_01 */,
      2089537806 /* COMPONENT_SPECIALCARBINE_CLIP_02 */,
      1801039530 /* COMPONENT_SPECIALCARBINE_CLIP_03 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2698550338 /* COMPONENT_AT_SCOPE_MEDIUM */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */,
      1929467122 /* COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER */
    ]
  ],
  [
    2132975508 /* BullpupRifle */,
    // Bullpup Rifle
    [
      3315675008 /* COMPONENT_BULLPUPRIFLE_CLIP_01 */,
      3009973007 /* COMPONENT_BULLPUPRIFLE_CLIP_02 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2855028148 /* COMPONENT_AT_SCOPE_SMALL */,
      2205435306 /* COMPONENT_AT_AR_SUPP */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */,
      2824322168 /* COMPONENT_BULLPUPRIFLE_VARMOD_LOW */
    ]
  ],
  [
    -2066285827 /* BullpupRifleMk2 */,
    // Bullpup Rifle Mk II
    [
      25766362 /* COMPONENT_BULLPUPRIFLE_MK2_CLIP_01 */,
      4021290536 /* COMPONENT_BULLPUPRIFLE_MK2_CLIP_02 */,
      2183159977 /* COMPONENT_BULLPUPRIFLE_MK2_CLIP_TRACER */,
      2845636954 /* COMPONENT_BULLPUPRIFLE_MK2_CLIP_INCENDIARY */,
      4205311469 /* COMPONENT_BULLPUPRIFLE_MK2_CLIP_ARMORPIERCING */,
      1130501904 /* COMPONENT_BULLPUPRIFLE_MK2_CLIP_FMJ */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      1108334355 /* COMPONENT_AT_SIGHTS */,
      3350057221 /* COMPONENT_AT_SCOPE_MACRO_02_MK2 */,
      1060929921 /* COMPONENT_AT_SCOPE_SMALL_MK2 */,
      1704640795 /* COMPONENT_AT_BP_BARREL_01 */,
      1005743559 /* COMPONENT_AT_BP_BARREL_02 */,
      2205435306 /* COMPONENT_AT_AR_SUPP */,
      3113485012 /* COMPONENT_AT_MUZZLE_01 */,
      3362234491 /* COMPONENT_AT_MUZZLE_02 */,
      3725708239 /* COMPONENT_AT_MUZZLE_03 */,
      3968886988 /* COMPONENT_AT_MUZZLE_04 */,
      48731514 /* COMPONENT_AT_MUZZLE_05 */,
      880736428 /* COMPONENT_AT_MUZZLE_06 */,
      1303784126 /* COMPONENT_AT_MUZZLE_07 */,
      2640679034 /* COMPONENT_AT_AR_AFGRIP_02 */,
      2923451831 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO */,
      3104173419 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_02 */,
      2797881576 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_03 */,
      2491819116 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_04 */,
      2318995410 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_05 */,
      36929477 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_06 */,
      4026522462 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_07 */,
      3720197850 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_08 */,
      3412267557 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_09 */,
      2826785822 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_10 */,
      3320426066 /* COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01 */
    ]
  ],
  [
    -1768145561 /* SpecialCarbineMk2 */,
    // Special Carbine Mk II
    [
      382112385 /* COMPONENT_SPECIALCARBINE_MK2_CLIP_01 */,
      3726614828 /* COMPONENT_SPECIALCARBINE_MK2_CLIP_02 */,
      2271594122 /* COMPONENT_SPECIALCARBINE_MK2_CLIP_TRACER */,
      3724612230 /* COMPONENT_SPECIALCARBINE_MK2_CLIP_INCENDIARY */,
      1362433589 /* COMPONENT_SPECIALCARBINE_MK2_CLIP_ARMORPIERCING */,
      1346235024 /* COMPONENT_SPECIALCARBINE_MK2_CLIP_FMJ */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      1108334355 /* COMPONENT_AT_SIGHTS */,
      77277509 /* COMPONENT_AT_SCOPE_MACRO_MK2 */,
      3328927042 /* COMPONENT_AT_SCOPE_MEDIUM_MK2 */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      3113485012 /* COMPONENT_AT_MUZZLE_01 */,
      3362234491 /* COMPONENT_AT_MUZZLE_02 */,
      3725708239 /* COMPONENT_AT_MUZZLE_03 */,
      3968886988 /* COMPONENT_AT_MUZZLE_04 */,
      48731514 /* COMPONENT_AT_MUZZLE_05 */,
      880736428 /* COMPONENT_AT_MUZZLE_06 */,
      1303784126 /* COMPONENT_AT_MUZZLE_07 */,
      2640679034 /* COMPONENT_AT_AR_AFGRIP_02 */,
      3879097257 /* COMPONENT_AT_SC_BARREL_01 */,
      4185880635 /* COMPONENT_AT_SC_BARREL_02 */,
      3557537083 /* COMPONENT_SPECIALCARBINE_MK2_CAMO */,
      1125852043 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_02 */,
      886015732 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_03 */,
      3032680157 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_04 */,
      3999758885 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_05 */,
      3750812792 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_06 */,
      172765678 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_07 */,
      2312089847 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_08 */,
      2072122460 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_09 */,
      2308747125 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_10 */,
      1377355801 /* COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01 */
    ]
  ],
  [
    961495388 /* AssaultRifleMk2 */,
    // Assault Rifle Mk II
    [
      2249208895 /* COMPONENT_ASSAULTRIFLE_MK2_CLIP_01 */,
      3509242479 /* COMPONENT_ASSAULTRIFLE_MK2_CLIP_02 */,
      4012669121 /* COMPONENT_ASSAULTRIFLE_MK2_CLIP_TRACER */,
      4218476627 /* COMPONENT_ASSAULTRIFLE_MK2_CLIP_INCENDIARY */,
      2816286296 /* COMPONENT_ASSAULTRIFLE_MK2_CLIP_ARMORPIERCING */,
      1675665560 /* COMPONENT_ASSAULTRIFLE_MK2_CLIP_FMJ */,
      2640679034 /* COMPONENT_AT_AR_AFGRIP_02 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      1108334355 /* COMPONENT_AT_SIGHTS */,
      77277509 /* COMPONENT_AT_SCOPE_MACRO_MK2 */,
      3328927042 /* COMPONENT_AT_SCOPE_MEDIUM_MK2 */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      3113485012 /* COMPONENT_AT_MUZZLE_01 */,
      3362234491 /* COMPONENT_AT_MUZZLE_02 */,
      3725708239 /* COMPONENT_AT_MUZZLE_03 */,
      3968886988 /* COMPONENT_AT_MUZZLE_04 */,
      48731514 /* COMPONENT_AT_MUZZLE_05 */,
      880736428 /* COMPONENT_AT_MUZZLE_06 */,
      1303784126 /* COMPONENT_AT_MUZZLE_07 */,
      1134861606 /* COMPONENT_AT_AR_BARREL_01 */,
      1447477866 /* COMPONENT_AT_AR_BARREL_02 */,
      2434475183 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO */,
      937772107 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_02 */,
      1401650071 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_03 */,
      628662130 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_04 */,
      3309920045 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_05 */,
      3482022833 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_06 */,
      2847614993 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_07 */,
      4234628436 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_08 */,
      2088750491 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_09 */,
      2781053842 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_10 */,
      3115408816 /* COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01 */
    ]
  ],
  [
    4208062921 /* CarbineRifleMk2 */,
    // Carbine Rifle Mk II
    [
      1283078430 /* COMPONENT_CARBINERIFLE_MK2_CLIP_01 */,
      1574296533 /* COMPONENT_CARBINERIFLE_MK2_CLIP_02 */,
      391640422 /* COMPONENT_CARBINERIFLE_MK2_CLIP_TRACER */,
      1025884839 /* COMPONENT_CARBINERIFLE_MK2_CLIP_INCENDIARY */,
      626875735 /* COMPONENT_CARBINERIFLE_MK2_CLIP_ARMORPIERCING */,
      1141059345 /* COMPONENT_CARBINERIFLE_MK2_CLIP_FMJ */,
      2640679034 /* COMPONENT_AT_AR_AFGRIP_02 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      1108334355 /* COMPONENT_AT_SIGHTS */,
      77277509 /* COMPONENT_AT_SCOPE_MACRO_MK2 */,
      3328927042 /* COMPONENT_AT_SCOPE_MEDIUM_MK2 */,
      2205435306 /* COMPONENT_AT_AR_SUPP */,
      3113485012 /* COMPONENT_AT_MUZZLE_01 */,
      3362234491 /* COMPONENT_AT_MUZZLE_02 */,
      3725708239 /* COMPONENT_AT_MUZZLE_03 */,
      3968886988 /* COMPONENT_AT_MUZZLE_04 */,
      48731514 /* COMPONENT_AT_MUZZLE_05 */,
      880736428 /* COMPONENT_AT_MUZZLE_06 */,
      1303784126 /* COMPONENT_AT_MUZZLE_07 */,
      2201368575 /* COMPONENT_AT_CR_BARREL_01 */,
      2335983627 /* COMPONENT_AT_CR_BARREL_02 */,
      1272803094 /* COMPONENT_CARBINERIFLE_MK2_CAMO */,
      1080719624 /* COMPONENT_CARBINERIFLE_MK2_CAMO_02 */,
      792221348 /* COMPONENT_CARBINERIFLE_MK2_CAMO_03 */,
      3842785869 /* COMPONENT_CARBINERIFLE_MK2_CAMO_04 */,
      3548192559 /* COMPONENT_CARBINERIFLE_MK2_CAMO_05 */,
      2250671235 /* COMPONENT_CARBINERIFLE_MK2_CAMO_06 */,
      4095795318 /* COMPONENT_CARBINERIFLE_MK2_CAMO_07 */,
      2866892280 /* COMPONENT_CARBINERIFLE_MK2_CAMO_08 */,
      2559813981 /* COMPONENT_CARBINERIFLE_MK2_CAMO_09 */,
      1796459838 /* COMPONENT_CARBINERIFLE_MK2_CAMO_10 */,
      3663056191 /* COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01 */
    ]
  ],
  [
    1649403952 /* CompactRifle */,
    // Compact Rifle
    [
      1363085923 /* COMPONENT_COMPACTRIFLE_CLIP_01 */,
      1509923832 /* COMPONENT_COMPACTRIFLE_CLIP_02 */,
      3322377230 /* COMPONENT_COMPACTRIFLE_CLIP_03 */
    ]
  ],
  [
    -1658906650 /* MilitaryRifle */,
    // Military Rifle
    [
      759617595 /* COMPONENT_MILITARYRIFLE_CLIP_01 */,
      1749732930 /* COMPONENT_MILITARYRIFLE_CLIP_02 */,
      1803744149 /* COMPONENT_MILITARYRIFLE_SIGHT_01 */,
      2855028148 /* COMPONENT_AT_SCOPE_SMALL */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2205435306 /* COMPONENT_AT_AR_SUPP */
    ]
  ],
  // Machine Guns,
  [
    -1660422300 /* MG */,
    // MG
    [
      4097109892 /* COMPONENT_MG_CLIP_01 */,
      2182449991 /* COMPONENT_MG_CLIP_02 */,
      1006677997 /* COMPONENT_AT_SCOPE_SMALL_02 */,
      3604658878 /* COMPONENT_MG_VARMOD_LOWRIDER */
    ]
  ],
  [
    2144741730 /* CombatMG */,
    // Combat MG
    [
      3791631178 /* COMPONENT_COMBATMG_CLIP_01 */,
      3603274966 /* COMPONENT_COMBATMG_CLIP_02 */,
      2698550338 /* COMPONENT_AT_SCOPE_MEDIUM */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */,
      2466172125 /* COMPONENT_COMBATMG_VARMOD_LOWRIDER */
    ]
  ],
  [
    3686625920 /* CombatMGMk2 */,
    // Combat MG Mk II
    [
      1227564412 /* COMPONENT_COMBATMG_MK2_CLIP_01 */,
      400507625 /* COMPONENT_COMBATMG_MK2_CLIP_02 */,
      4133787461 /* COMPONENT_COMBATMG_MK2_CLIP_TRACER */,
      3274096058 /* COMPONENT_COMBATMG_MK2_CLIP_INCENDIARY */,
      696788003 /* COMPONENT_COMBATMG_MK2_CLIP_ARMORPIERCING */,
      1475288264 /* COMPONENT_COMBATMG_MK2_CLIP_FMJ */,
      2640679034 /* COMPONENT_AT_AR_AFGRIP_02 */,
      1108334355 /* COMPONENT_AT_SIGHTS */,
      1060929921 /* COMPONENT_AT_SCOPE_SMALL_MK2 */,
      3328927042 /* COMPONENT_AT_SCOPE_MEDIUM_MK2 */,
      3113485012 /* COMPONENT_AT_MUZZLE_01 */,
      3362234491 /* COMPONENT_AT_MUZZLE_02 */,
      3725708239 /* COMPONENT_AT_MUZZLE_03 */,
      3968886988 /* COMPONENT_AT_MUZZLE_04 */,
      48731514 /* COMPONENT_AT_MUZZLE_05 */,
      880736428 /* COMPONENT_AT_MUZZLE_06 */,
      1303784126 /* COMPONENT_AT_MUZZLE_07 */,
      3276730932 /* COMPONENT_AT_MG_BARREL_01 */,
      3051509595 /* COMPONENT_AT_MG_BARREL_02 */,
      1249283253 /* COMPONENT_COMBATMG_MK2_CAMO */,
      3437259709 /* COMPONENT_COMBATMG_MK2_CAMO_02 */,
      3197423398 /* COMPONENT_COMBATMG_MK2_CAMO_03 */,
      1980349969 /* COMPONENT_COMBATMG_MK2_CAMO_04 */,
      1219453777 /* COMPONENT_COMBATMG_MK2_CAMO_05 */,
      2441508106 /* COMPONENT_COMBATMG_MK2_CAMO_06 */,
      2220186280 /* COMPONENT_COMBATMG_MK2_CAMO_07 */,
      457967755 /* COMPONENT_COMBATMG_MK2_CAMO_08 */,
      235171324 /* COMPONENT_COMBATMG_MK2_CAMO_09 */,
      42685294 /* COMPONENT_COMBATMG_MK2_CAMO_10 */,
      3607349581 /* COMPONENT_COMBATMG_MK2_CAMO_IND_01 */
    ]
  ],
  [
    1627465347 /* Gusenberg */,
    // Gusenberg Sweeper
    [484812453 /* COMPONENT_GUSENBERG_CLIP_01 */, 3939025520 /* COMPONENT_GUSENBERG_CLIP_02 */]
  ],
  // Sniper Rifles
  [
    100416529 /* SniperRifle */,
    // Sniper Rifle
    [
      2613461129 /* COMPONENT_SNIPERRIFLE_CLIP_01 */,
      2805810788 /* COMPONENT_AT_AR_SUPP_02 */,
      3527687644 /* COMPONENT_AT_SCOPE_LARGE */,
      3159677559 /* COMPONENT_AT_SCOPE_MAX */,
      1077065191 /* COMPONENT_SNIPERRIFLE_VARMOD_LUXE */
    ]
  ],
  [
    205991906 /* HeavySniper */,
    // Heavy Sniper
    [
      1198478068 /* COMPONENT_HEAVYSNIPER_CLIP_01 */,
      3527687644 /* COMPONENT_AT_SCOPE_LARGE */,
      3159677559 /* COMPONENT_AT_SCOPE_MAX */
    ]
  ],
  [
    1785463520 /* MarksmanRifleMk2 */,
    // Marksman Rifle Mk II
    [
      2497785294 /* COMPONENT_MARKSMANRIFLE_MK2_CLIP_01 */,
      3872379306 /* COMPONENT_MARKSMANRIFLE_MK2_CLIP_02 */,
      3615105746 /* COMPONENT_MARKSMANRIFLE_MK2_CLIP_TRACER */,
      1842849902 /* COMPONENT_MARKSMANRIFLE_MK2_CLIP_INCENDIARY */,
      4100968569 /* COMPONENT_MARKSMANRIFLE_MK2_CLIP_ARMORPIERCING */,
      3779763923 /* COMPONENT_MARKSMANRIFLE_MK2_CLIP_FMJ */,
      1108334355 /* COMPONENT_AT_SIGHTS */,
      3328927042 /* COMPONENT_AT_SCOPE_MEDIUM_MK2 */,
      1528590652 /* COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM_MK2 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2205435306 /* COMPONENT_AT_AR_SUPP */,
      3113485012 /* COMPONENT_AT_MUZZLE_01 */,
      3362234491 /* COMPONENT_AT_MUZZLE_02 */,
      3725708239 /* COMPONENT_AT_MUZZLE_03 */,
      3968886988 /* COMPONENT_AT_MUZZLE_04 */,
      48731514 /* COMPONENT_AT_MUZZLE_05 */,
      880736428 /* COMPONENT_AT_MUZZLE_06 */,
      1303784126 /* COMPONENT_AT_MUZZLE_07 */,
      941317513 /* COMPONENT_AT_MRFL_BARREL_01 */,
      1748450780 /* COMPONENT_AT_MRFL_BARREL_02 */,
      2640679034 /* COMPONENT_AT_AR_AFGRIP_02 */,
      2425682848 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO */,
      1931539634 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_02 */,
      1624199183 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_03 */,
      4268133183 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_04 */,
      4084561241 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_05 */,
      423313640 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_06 */,
      276639596 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_07 */,
      3303610433 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_08 */,
      2612118995 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_09 */,
      996213771 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_10 */,
      3080918746 /* COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01 */
    ]
  ],
  [
    177293209 /* HeavySniperMk2 */,
    // Heavy Sniper Mk II
    [
      4196276776 /* COMPONENT_HEAVYSNIPER_MK2_CLIP_01 */,
      752418717 /* COMPONENT_HEAVYSNIPER_MK2_CLIP_02 */,
      247526935 /* COMPONENT_HEAVYSNIPER_MK2_CLIP_INCENDIARY */,
      4164277972 /* COMPONENT_HEAVYSNIPER_MK2_CLIP_ARMORPIERCING */,
      1005144310 /* COMPONENT_HEAVYSNIPER_MK2_CLIP_FMJ */,
      2313935527 /* COMPONENT_HEAVYSNIPER_MK2_CLIP_EXPLOSIVE */,
      2193687427 /* COMPONENT_AT_SCOPE_LARGE_MK2 */,
      3159677559 /* COMPONENT_AT_SCOPE_MAX */,
      3061846192 /* COMPONENT_AT_SCOPE_NV */,
      776198721 /* COMPONENT_AT_SCOPE_THERMAL */,
      2890063729 /* COMPONENT_AT_SR_SUPP_03 */,
      1602080333 /* COMPONENT_AT_MUZZLE_08 */,
      1764221345 /* COMPONENT_AT_MUZZLE_09 */,
      2425761975 /* COMPONENT_AT_SR_BARREL_01 */,
      277524638 /* COMPONENT_AT_SR_BARREL_02 */,
      4164123906 /* COMPONENT_HEAVYSNIPER_MK2_CAMO */,
      3317620069 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_02 */,
      3916506229 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_03 */,
      329939175 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_04 */,
      643374672 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_05 */,
      807875052 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_06 */,
      2893163128 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_07 */,
      3198471901 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_08 */,
      3447155842 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_09 */,
      2881858759 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_10 */,
      1815270123 /* COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01 */
    ]
  ],
  [
    -952879014 /* MarksmanRifle */,
    // Marksman Rifle
    [
      3627761985 /* COMPONENT_MARKSMANRIFLE_CLIP_01 */,
      3439143621 /* COMPONENT_MARKSMANRIFLE_CLIP_02 */,
      471997210 /* COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      2205435306 /* COMPONENT_AT_AR_SUPP */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */,
      371102273 /* COMPONENT_MARKSMANRIFLE_VARMOD_LUXE */
    ]
  ],
  // Heavy Weapons
  [
    -1568386805 /* GrenadeLauncher */,
    // Grenade Launcher
    [
      296639639 /* COMPONENT_GRENADELAUNCHER_CLIP_01 */,
      2076495324 /* COMPONENT_AT_AR_FLSH */,
      202788691 /* COMPONENT_AT_AR_AFGRIP */,
      2855028148 /* COMPONENT_AT_SCOPE_SMALL */
    ]
  ]
]);
function initializeOnce3() {
  let isInitialized = false;
  return () => {
    if (isInitialized || IsDuplicityVersion()) {
      return;
    }
    const intLength = 4;
    const strLength = 64;
    const weaponCount = GetNumDlcWeapons();
    for (let i = 0; i < weaponCount; i++) {
      const weaponBuffer = new Uint8Array(14 * intLength + 4 * strLength);
      Citizen.invokeNative("0x79923CD21BECE14E", i, weaponBuffer, Citizen.returnResultAnyway());
      const weaponHash = getUInt32FromUint8Array(weaponBuffer, 2 * intLength, 3 * intLength);
      const componentCount = GetNumDlcWeaponComponents(i);
      const componentHashes = [];
      for (let j = 0; j < componentCount; j++) {
        const componentBuffer = new Uint8Array(14 * intLength + 4 * strLength);
        Citizen.invokeNative("0x6CF598A2957C2BF8", i, j, componentBuffer, Citizen.returnResultAnyway());
        const componentHash = getUInt32FromUint8Array(componentBuffer, 6 * intLength, 7 * intLength);
        componentHashes.push(componentHash);
      }
      WeaponComponentHashesByWeaponHash.set(weaponHash, componentHashes);
    }
    isInitialized = true;
  };
}
__name(initializeOnce3, "initializeOnce");
initializeOnce3()();

// src/fivem/weaponComponent/ComponentAttachmentPointByHash.ts
var ComponentAttachmentPointByHash = /* @__PURE__ */ new Map([
  [4275109233 /* PistolClip01 */, 3723347892 /* Clip */],
  [3978713628 /* PistolClip02 */, 3723347892 /* Clip */],
  [119648377 /* CombatPistolClip01 */, 3723347892 /* Clip */],
  [3598405421 /* CombatPistolClip02 */, 3723347892 /* Clip */],
  [834974250 /* APPistolClip01 */, 3723347892 /* Clip */],
  [614078421 /* APPistolClip02 */, 3723347892 /* Clip */],
  [3410538224 /* MicroSMGClip01 */, 3723347892 /* Clip */],
  [283556395 /* MicroSMGClip02 */, 3723347892 /* Clip */],
  [643254679 /* SMGClip01 */, 3723347892 /* Clip */],
  [889808635 /* SMGClip02 */, 3723347892 /* Clip */],
  [2043113590 /* SMGClip03 */, 3723347892 /* Clip */],
  [3193891350 /* AssaultRifleClip01 */, 3723347892 /* Clip */],
  [2971750299 /* AssaultRifleClip02 */, 3723347892 /* Clip */],
  [3689981245 /* AssaultRifleClip03 */, 3723347892 /* Clip */],
  [2680042476 /* CarbineRifleClip01 */, 3723347892 /* Clip */],
  [2433783441 /* CarbineRifleClip02 */, 3723347892 /* Clip */],
  [3127044405 /* CarbineRifleClip03 */, 3723347892 /* Clip */],
  [4203716879 /* AdvancedRifleClip01 */, 3723347892 /* Clip */],
  [2395064697 /* AdvancedRifleClip02 */, 3723347892 /* Clip */],
  [4097109892 /* MGClip01 */, 3723347892 /* Clip */],
  [2182449991 /* MGClip02 */, 3723347892 /* Clip */],
  [3791631178 /* CombatMGClip01 */, 3723347892 /* Clip */],
  [3603274966 /* CombatMGClip02 */, 3723347892 /* Clip */],
  [3513717816 /* PumpShotgunClip01 */, 3723347892 /* Clip */],
  [2498239431 /* AssaultShotgunClip01 */, 3723347892 /* Clip */],
  [2260565874 /* AssaultShotgunClip02 */, 3723347892 /* Clip */],
  [2613461129 /* SniperRifleClip01 */, 3723347892 /* Clip */],
  [1198478068 /* HeavySniperClip01 */, 3723347892 /* Clip */],
  [3370020614 /* MinigunClip01 */, 3723347892 /* Clip */],
  [2366834608 /* AssaultSMGClip01 */, 3723347892 /* Clip */],
  [3141985303 /* AssaultSMGClip02 */, 3723347892 /* Clip */],
  [3377353998 /* BullpupShotgunClip01 */, 3723347892 /* Clip */],
  [580369945 /* Pistol50Clip01 */, 3723347892 /* Clip */],
  [3654528146 /* Pistol50Clip02 */, 3723347892 /* Clip */],
  [3352699429 /* SawnoffShotgunClip01 */, 3723347892 /* Clip */],
  [2499030370 /* PistolMk2ClipNormal */, 3723347892 /* Clip */],
  [1591132456 /* PistolMk2ClipExtended */, 3723347892 /* Clip */],
  [1329061674 /* PistolMk2ClipFMJ */, 3723347892 /* Clip */],
  [2248057097 /* PistolMk2ClipHollowpoint */, 3723347892 /* Clip */],
  [733837882 /* PistolMk2ClipIncendiary */, 3723347892 /* Clip */],
  [634039983 /* PistolMk2ClipTracer */, 3723347892 /* Clip */],
  [2249208895 /* AssaultRifleMk2ClipNormal */, 3723347892 /* Clip */],
  [3509242479 /* AssaultRifleMk2ClipExtended */, 3723347892 /* Clip */],
  [1675665560 /* AssaultRifleMk2ClipFMJ */, 3723347892 /* Clip */],
  [2816286296 /* AssaultRifleMk2ClipArmorPiercing */, 3723347892 /* Clip */],
  [4218476627 /* AssaultRifleMk2ClipIncendiary */, 3723347892 /* Clip */],
  [4012669121 /* AssaultRifleMk2ClipTracer */, 3723347892 /* Clip */],
  [1283078430 /* CarbineRifleMk2ClipNormal */, 3723347892 /* Clip */],
  [1574296533 /* CarbineRifleMk2ClipExtended */, 3723347892 /* Clip */],
  [1141059345 /* CarbineRifleMk2ClipFMJ */, 3723347892 /* Clip */],
  [626875735 /* CarbineRifleMk2ClipArmorPiercing */, 3723347892 /* Clip */],
  [1025884839 /* CarbineRifleMk2ClipIncendiary */, 3723347892 /* Clip */],
  [391640422 /* CarbineRifleMk2ClipTracer */, 3723347892 /* Clip */],
  [1227564412 /* CombatMGMk2ClipNormal */, 3723347892 /* Clip */],
  [400507625 /* CombatMGMk2ClipExtended */, 3723347892 /* Clip */],
  [1475288264 /* CombatMGMk2ClipFMJ */, 3723347892 /* Clip */],
  [696788003 /* CombatMGMk2ClipArmorPiercing */, 3723347892 /* Clip */],
  [3274096058 /* CombatMGMk2ClipIncendiary */, 3723347892 /* Clip */],
  [4133787461 /* CombatMGMk2ClipTracer */, 3723347892 /* Clip */],
  [4196276776 /* HeavySniperMk2ClipNormal */, 3723347892 /* Clip */],
  [752418717 /* HeavySniperMk2ClipExtended */, 3723347892 /* Clip */],
  [1005144310 /* HeavySniperMk2ClipFMJ */, 3723347892 /* Clip */],
  [4164277972 /* HeavySniperMk2ClipArmorPiercing */, 3723347892 /* Clip */],
  [247526935 /* HeavySniperMk2ClipIncendiary */, 3723347892 /* Clip */],
  [2313935527 /* HeavySniperMk2ClipExplosive */, 3723347892 /* Clip */],
  [1277460590 /* SMGMk2ClipNormal */, 3723347892 /* Clip */],
  [3112393518 /* SMGMk2ClipExtended */, 3723347892 /* Clip */],
  [190476639 /* SMGMk2ClipFMJ */, 3723347892 /* Clip */],
  [974903034 /* SMGMk2ClipHollowpoint */, 3723347892 /* Clip */],
  [3650233061 /* SMGMk2ClipIncendiary */, 3723347892 /* Clip */],
  [2146055916 /* SMGMk2ClipTracer */, 3723347892 /* Clip */],
  [899381934 /* AtPiFlsh */, 679107254 /* FlashLaser */],
  [899381934 /* AtPiFlsh */, 679107254 /* FlashLaser */],
  [899381934 /* AtPiFlsh */, 679107254 /* FlashLaser */],
  [899381934 /* AtPiFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [899381934 /* AtPiFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [2076495324 /* AtArFlsh */, 679107254 /* FlashLaser */],
  [568543123 /* PistolMk2Compensator */, 1863181664 /* Supp */],
  [1709866683 /* AtPiSupp02 */, 1863181664 /* Supp */],
  [3271853210 /* AtPiSupp */, 1863181664 /* Supp */],
  [3271853210 /* AtPiSupp */, 1863181664 /* Supp */],
  [2805810788 /* AtArSupp02 */, 1863181664 /* Supp */],
  [3271853210 /* AtPiSupp */, 1863181664 /* Supp */],
  [2805810788 /* AtArSupp02 */, 1863181664 /* Supp */],
  [2205435306 /* AtArSupp */, 1863181664 /* Supp */],
  [2205435306 /* AtArSupp */, 1863181664 /* Supp */],
  [2205435306 /* AtArSupp */, 1863181664 /* Supp */],
  [2205435306 /* AtArSupp */, 1863181664 /* Supp */],
  [2805810788 /* AtArSupp02 */, 1863181664 /* Supp */],
  [2805810788 /* AtArSupp02 */, 1863181664 /* Supp */],
  [2805810788 /* AtArSupp02 */, 1863181664 /* Supp */],
  [2805810788 /* AtArSupp02 */, 1863181664 /* Supp */],
  [1709866683 /* AtPiSupp02 */, 1863181664 /* Supp */],
  [3113485012 /* AtMuzzle1 */, 1863181664 /* Supp */],
  [3362234491 /* AtMuzzle2 */, 1863181664 /* Supp */],
  [3725708239 /* AtMuzzle3 */, 1863181664 /* Supp */],
  [3968886988 /* AtMuzzle4 */, 1863181664 /* Supp */],
  [48731514 /* AtMuzzle5 */, 1863181664 /* Supp */],
  [880736428 /* AtMuzzle6 */, 1863181664 /* Supp */],
  [1303784126 /* AtMuzzle7 */, 1863181664 /* Supp */],
  [2890063729 /* HeavySniperMk2Suppressor */, 1863181664 /* Supp */],
  [1602080333 /* HeavySniperMk2Muzzle8 */, 1863181664 /* Supp */],
  [1764221345 /* HeavySniperMk2Muzzle9 */, 1863181664 /* Supp */],
  [2205435306 /* AtArSupp */, 945598191 /* Supp2 */],
  [3113485012 /* AtMuzzle1 */, 945598191 /* Supp2 */],
  [3362234491 /* AtMuzzle2 */, 945598191 /* Supp2 */],
  [3725708239 /* AtMuzzle3 */, 945598191 /* Supp2 */],
  [3968886988 /* AtMuzzle4 */, 945598191 /* Supp2 */],
  [48731514 /* AtMuzzle5 */, 945598191 /* Supp2 */],
  [880736428 /* AtMuzzle6 */, 945598191 /* Supp2 */],
  [1303784126 /* AtMuzzle7 */, 945598191 /* Supp2 */],
  [2805810788 /* AtArSupp02 */, 945598191 /* Supp2 */],
  [3113485012 /* AtMuzzle1 */, 945598191 /* Supp2 */],
  [3362234491 /* AtMuzzle2 */, 945598191 /* Supp2 */],
  [3725708239 /* AtMuzzle3 */, 945598191 /* Supp2 */],
  [3968886988 /* AtMuzzle4 */, 945598191 /* Supp2 */],
  [48731514 /* AtMuzzle5 */, 945598191 /* Supp2 */],
  [880736428 /* AtMuzzle6 */, 945598191 /* Supp2 */],
  [1303784126 /* AtMuzzle7 */, 945598191 /* Supp2 */],
  [3271853210 /* AtPiSupp */, 945598191 /* Supp2 */],
  [3113485012 /* AtMuzzle1 */, 945598191 /* Supp2 */],
  [3362234491 /* AtMuzzle2 */, 945598191 /* Supp2 */],
  [3725708239 /* AtMuzzle3 */, 945598191 /* Supp2 */],
  [3968886988 /* AtMuzzle4 */, 945598191 /* Supp2 */],
  [48731514 /* AtMuzzle5 */, 945598191 /* Supp2 */],
  [880736428 /* AtMuzzle6 */, 945598191 /* Supp2 */],
  [1303784126 /* AtMuzzle7 */, 945598191 /* Supp2 */],
  [3610841222 /* PistolVarmodLuxe */, 962500902 /* GunRoot */],
  [3328527730 /* CombatPistolVarmodLowrider */, 962500902 /* GunRoot */],
  [2608252716 /* APPistolVarmodLuxe */, 962500902 /* GunRoot */],
  [1215999497 /* MicroSMGVarmodLuxe */, 962500902 /* GunRoot */],
  [663170192 /* SMGVarmodLuxe */, 962500902 /* GunRoot */],
  [1319990579 /* AssaultRifleVarmodLuxe */, 962500902 /* GunRoot */],
  [3634075224 /* CarbineRifleVarmodLuxe */, 962500902 /* GunRoot */],
  [930927479 /* AdvancedRifleVarmodLuxe */, 962500902 /* GunRoot */],
  [3604658878 /* MGVarmodLowrider */, 962500902 /* GunRoot */],
  [2466172125 /* CombatMGVarmodLowrider */, 962500902 /* GunRoot */],
  [2732039643 /* PumpShotgunVarmodLowrider */, 962500902 /* GunRoot */],
  [1077065191 /* SniperRifleVarmodLuxe */, 962500902 /* GunRoot */],
  [663517359 /* AssaultSMGVarmodLowrider */, 962500902 /* GunRoot */],
  [2008591151 /* Pistol50VarmodLuxe */, 962500902 /* GunRoot */],
  [2242268665 /* SawnoffShotgunVarmodLuxe */, 962500902 /* GunRoot */],
  [1550611612 /* PistolMk2CamoDigital */, 962500902 /* GunRoot */],
  [368550800 /* PistolMk2CamoBrushstroke */, 962500902 /* GunRoot */],
  [2525897947 /* PistolMk2CamoWoodland */, 962500902 /* GunRoot */],
  [24902297 /* PistolMk2CamoSkull */, 962500902 /* GunRoot */],
  [4066925682 /* PistolMk2CamoSessanta */, 962500902 /* GunRoot */],
  [3710005734 /* PistolMk2CamoPerseus */, 962500902 /* GunRoot */],
  [3141791350 /* PistolMk2CamoLeopard */, 962500902 /* GunRoot */],
  [1301287696 /* PistolMk2CamoZebra */, 962500902 /* GunRoot */],
  [1597093459 /* PistolMk2CamoGeometric */, 962500902 /* GunRoot */],
  [1769871776 /* PistolMk2CamoBoom */, 962500902 /* GunRoot */],
  [2467084625 /* PistolMk2CamoPatriotic */, 962500902 /* GunRoot */],
  [2434475183 /* AssaultRifleMk2CamoDigital */, 962500902 /* GunRoot */],
  [937772107 /* AssaultRifleMk2CamoBrushstroke */, 962500902 /* GunRoot */],
  [1401650071 /* AssaultRifleMk2CamoWoodland */, 962500902 /* GunRoot */],
  [628662130 /* AssaultRifleMk2CamoSkull */, 962500902 /* GunRoot */],
  [3309920045 /* AssaultRifleMk2CamoSessanta */, 962500902 /* GunRoot */],
  [3482022833 /* AssaultRifleMk2CamoPerseus */, 962500902 /* GunRoot */],
  [2847614993 /* AssaultRifleMk2CamoLeopard */, 962500902 /* GunRoot */],
  [4234628436 /* AssaultRifleMk2CamoZebra */, 962500902 /* GunRoot */],
  [2088750491 /* AssaultRifleMk2CamoGeometric */, 962500902 /* GunRoot */],
  [2781053842 /* AssaultRifleMk2CamoBoom */, 962500902 /* GunRoot */],
  [3115408816 /* AssaultRifleMk2CamoPatriotic */, 962500902 /* GunRoot */],
  [1272803094 /* CarbineRifleMk2CamoDigital */, 962500902 /* GunRoot */],
  [1080719624 /* CarbineRifleMk2CamoBrushstroke */, 962500902 /* GunRoot */],
  [792221348 /* CarbineRifleMk2CamoWoodland */, 962500902 /* GunRoot */],
  [3842785869 /* CarbineRifleMk2CamoSkull */, 962500902 /* GunRoot */],
  [3548192559 /* CarbineRifleMk2CamoSessanta */, 962500902 /* GunRoot */],
  [2250671235 /* CarbineRifleMk2CamoPerseus */, 962500902 /* GunRoot */],
  [4095795318 /* CarbineRifleMk2CamoLeopard */, 962500902 /* GunRoot */],
  [2866892280 /* CarbineRifleMk2CamoZebra */, 962500902 /* GunRoot */],
  [2559813981 /* CarbineRifleMk2CamoGeometric */, 962500902 /* GunRoot */],
  [1796459838 /* CarbineRifleMk2CamoBoom */, 962500902 /* GunRoot */],
  [3663056191 /* CarbineRifleMk2CamoPatriotic */, 962500902 /* GunRoot */],
  [1249283253 /* CombatMGMk2CamoDigital */, 962500902 /* GunRoot */],
  [3437259709 /* CombatMGMk2CamoBrushstroke */, 962500902 /* GunRoot */],
  [3197423398 /* CombatMGMk2CamoWoodland */, 962500902 /* GunRoot */],
  [1980349969 /* CombatMGMk2CamoSkull */, 962500902 /* GunRoot */],
  [1219453777 /* CombatMGMk2CamoSessanta */, 962500902 /* GunRoot */],
  [2441508106 /* CombatMGMk2CamoPerseus */, 962500902 /* GunRoot */],
  [2220186280 /* CombatMGMk2CamoLeopard */, 962500902 /* GunRoot */],
  [457967755 /* CombatMGMk2CamoZebra */, 962500902 /* GunRoot */],
  [235171324 /* CombatMGMk2CamoGeometric */, 962500902 /* GunRoot */],
  [42685294 /* CombatMGMk2CamoBoom */, 962500902 /* GunRoot */],
  [3607349581 /* CombatMGMk2CamoPatriotic */, 962500902 /* GunRoot */],
  [4164123906 /* HeavySniperMk2CamoDigital */, 962500902 /* GunRoot */],
  [3317620069 /* HeavySniperMk2CamoBrushstroke */, 962500902 /* GunRoot */],
  [3916506229 /* HeavySniperMk2CamoWoodland */, 962500902 /* GunRoot */],
  [329939175 /* HeavySniperMk2CamoSkull */, 962500902 /* GunRoot */],
  [643374672 /* HeavySniperMk2CamoSessanta */, 962500902 /* GunRoot */],
  [807875052 /* HeavySniperMk2CamoPerseus */, 962500902 /* GunRoot */],
  [2893163128 /* HeavySniperMk2CamoLeopard */, 962500902 /* GunRoot */],
  [3198471901 /* HeavySniperMk2CamoZebra */, 962500902 /* GunRoot */],
  [3447155842 /* HeavySniperMk2CamoGeometric */, 962500902 /* GunRoot */],
  [2881858759 /* HeavySniperMk2CamoBoom */, 962500902 /* GunRoot */],
  [1815270123 /* HeavySniperMk2CamoPatriotic */, 962500902 /* GunRoot */],
  [3298267239 /* SMGMk2CamoDigital */, 962500902 /* GunRoot */],
  [940943685 /* SMGMk2CamoBrushstroke */, 962500902 /* GunRoot */],
  [1263226800 /* SMGMk2CamoWoodland */, 962500902 /* GunRoot */],
  [3966931456 /* SMGMk2CamoSkull */, 962500902 /* GunRoot */],
  [1224100642 /* SMGMk2CamoSessanta */, 962500902 /* GunRoot */],
  [899228776 /* SMGMk2CamoPerseus */, 962500902 /* GunRoot */],
  [616006309 /* SMGMk2CamoLeopard */, 962500902 /* GunRoot */],
  [2733014785 /* SMGMk2CamoZebra */, 962500902 /* GunRoot */],
  [572063080 /* SMGMk2CamoGeometric */, 962500902 /* GunRoot */],
  [1170588613 /* SMGMk2CamoBoom */, 962500902 /* GunRoot */],
  [966612367 /* SMGMk2CamoPatriotic */, 962500902 /* GunRoot */],
  [2637152041 /* AtScopeMacro */, 196630833 /* Scope */],
  [1019656791 /* AtScopeMacro02 */, 196630833 /* Scope */],
  [2637152041 /* AtScopeMacro */, 196630833 /* Scope */],
  [2698550338 /* AtScopeMedium */, 196630833 /* Scope */],
  [2855028148 /* AtScopeSmall */, 196630833 /* Scope */],
  [1006677997 /* AtScopeSmall02 */, 196630833 /* Scope */],
  [2698550338 /* AtScopeMedium */, 196630833 /* Scope */],
  [3527687644 /* AtScopeLarge */, 196630833 /* Scope */],
  [3159677559 /* AtScopeMax */, 196630833 /* Scope */],
  [3527687644 /* AtScopeLarge */, 196630833 /* Scope */],
  [3159677559 /* AtScopeMax */, 196630833 /* Scope */],
  [2855028148 /* AtScopeSmall */, 196630833 /* Scope */],
  [2637152041 /* AtScopeMacro */, 196630833 /* Scope */],
  [2396306288 /* PistolMk2Scope */, 196630833 /* Scope */],
  [1140676955 /* PistolMk2Flash */, 196630833 /* Scope */],
  [2193687427 /* HeavySniperMk2ScopeLarge */, 196630833 /* Scope */],
  [3159677559 /* AtScopeMax */, 196630833 /* Scope */],
  [3061846192 /* HeavySniperMk2ScopeNightvision */, 196630833 /* Scope */],
  [776198721 /* HeavySniperMk2ScopeThermal */, 196630833 /* Scope */],
  [2681951826 /* SMGMk2Sights */, 196630833 /* Scope */],
  [3842157419 /* SMGMk2ScopeMacro */, 196630833 /* Scope */],
  [1038927834 /* SMGMk2ScopeSmall */, 196630833 /* Scope */],
  [3036451504 /* PistolMk2CamoSlideDigital */, 1684637069 /* Scope2 */],
  [438243936 /* PistolMk2CamoSlideBrushstroke */, 1684637069 /* Scope2 */],
  [3839888240 /* PistolMk2CamoSlideWoodland */, 1684637069 /* Scope2 */],
  [740920107 /* PistolMk2CamoSlideSkull */, 1684637069 /* Scope2 */],
  [3753350949 /* PistolMk2CamoSlideSessanta */, 1684637069 /* Scope2 */],
  [1809261196 /* PistolMk2CamoSlidePerseus */, 1684637069 /* Scope2 */],
  [2648428428 /* PistolMk2CamoSlideLeopard */, 1684637069 /* Scope2 */],
  [3004802348 /* PistolMk2CamoSlideZebra */, 1684637069 /* Scope2 */],
  [3330502162 /* PistolMk2CamoSlideGeometric */, 1684637069 /* Scope2 */],
  [1135718771 /* PistolMk2CamoSlideBoom */, 1684637069 /* Scope2 */],
  [1253942266 /* PistolMk2CamoSlidePatriotic */, 1684637069 /* Scope2 */],
  [1108334355 /* AtSights */, 1684637069 /* Scope2 */],
  [77277509 /* AtScopeMacroMk2 */, 1684637069 /* Scope2 */],
  [3328927042 /* AtScopeMediumMk2 */, 1684637069 /* Scope2 */],
  [1108334355 /* AtSights */, 1684637069 /* Scope2 */],
  [1060929921 /* AtScopeSmallMk2 */, 1684637069 /* Scope2 */],
  [3328927042 /* AtScopeMediumMk2 */, 1684637069 /* Scope2 */],
  [1108334355 /* AtSights */, 1684637069 /* Scope2 */],
  [77277509 /* AtScopeMacroMk2 */, 1684637069 /* Scope2 */],
  [3328927042 /* AtScopeMediumMk2 */, 1684637069 /* Scope2 */],
  [202788691 /* AtArAfGrip */, 3748215485 /* Grip2 */],
  [202788691 /* AtArAfGrip */, 3748215485 /* Grip2 */],
  [202788691 /* AtArAfGrip */, 3748215485 /* Grip2 */],
  [202788691 /* AtArAfGrip */, 3748215485 /* Grip2 */],
  [296639639 /* GrenadeLauncherClip01 */, 3748215485 /* Grip2 */],
  [202788691 /* AtArAfGrip */, 3748215485 /* Grip2 */],
  [202788691 /* AtArAfGrip */, 3748215485 /* Grip2 */],
  [2640679034 /* AtArAfGrip2 */, 3748215485 /* Grip2 */],
  [2640679034 /* AtArAfGrip2 */, 3748215485 /* Grip2 */],
  [2640679034 /* AtArAfGrip2 */, 3748215485 /* Grip2 */],
  [2640679034 /* AtArAfGrip2 */, 3748215485 /* Grip2 */],
  [1967214384 /* AtRailCover01 */, 2451679629 /* Rail */],
  [1134861606 /* AssaultRifleMk2BarrelNormal */, 2982890265 /* Barrel */],
  [1447477866 /* AssaultRifleMk2BarrelHeavy */, 2982890265 /* Barrel */],
  [2201368575 /* CarbineRifleMk2BarrelNormal */, 2982890265 /* Barrel */],
  [2335983627 /* CarbineRifleMk2BarrelHeavy */, 2982890265 /* Barrel */],
  [3276730932 /* CombatMGMk2BarrelNormal */, 2982890265 /* Barrel */],
  [3051509595 /* CombatMGMk2BarrelHeavy */, 2982890265 /* Barrel */],
  [2425761975 /* HeavySniperMk2BarrelNormal */, 2982890265 /* Barrel */],
  [277524638 /* HeavySniperMk2BarrelHeavy */, 2982890265 /* Barrel */],
  [3641720545 /* SMGMk2BarrelNormal */, 2982890265 /* Barrel */],
  [2774849419 /* SMGMk2BarrelHeavy */, 2982890265 /* Barrel */]
]);
function initializeOnce4() {
  let isInitialized = false;
  return () => {
    if (isInitialized) {
      return;
    }
    for (const [hash, data] of DlcWeaponComponentData) {
      ComponentAttachmentPointByHash.set(hash, data.attachBone);
    }
    isInitialized = true;
  };
}
__name(initializeOnce4, "initializeOnce");
initializeOnce4()();

// src/fivem/weaponComponent/WeaponComponentHudStats.ts
var WeaponComponentHudStats = /* @__PURE__ */ new Map();
function initializeOnce5() {
  let isInitialized = false;
  return () => {
    if (isInitialized || IsDuplicityVersion()) {
      return;
    }
    const intLength = 4;
    for (const hash of enumValues(WeaponComponentHash)) {
      const buffer = new Uint8Array(40);
      Citizen.invokeNative("0xB3CAF387AE12E9F8", hash, buffer, Citizen.returnResultAnyway());
      const weaponComponentHudStat = {
        hudDamage: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
        hudSpeed: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
        hudCapacity: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
        hudAccuracy: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
        hudRange: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength)
      };
      WeaponComponentHudStats.set(hash, weaponComponentHudStat);
    }
    isInitialized = true;
  };
}
__name(initializeOnce5, "initializeOnce");
initializeOnce5()();

// src/fivem/weaponComponent/WeaponComponent.ts
var WeaponComponent = class _WeaponComponent {
  static {
    __name(this, "WeaponComponent");
  }
  owner;
  weapon;
  componentHash;
  constructor(owner, weapon, componentHash) {
    this.owner = owner;
    this.weapon = weapon;
    this.componentHash = componentHash;
  }
  /**
   * Check WeaponComponent is invalid or not
   *
   * @constructor
   */
  get IsInvalid() {
    return this.componentHash === 4294967295 /* Invalid */;
  }
  /**
   * get component hash
   *
   * @constructor
   */
  get ComponentHash() {
    return this.componentHash;
  }
  /**
   * check ped has weapon component
   *
   * @constructor
   */
  get Active() {
    return HasPedGotWeaponComponent(this.owner.Handle, this.weapon.Hash, this.componentHash);
  }
  /**
   * give weapon component to ped
   *
   * @param value
   * @constructor
   */
  set Active(value) {
    if (value) {
      GiveWeaponComponentToPed(this.owner.Handle, this.weapon.Hash, this.componentHash);
    } else {
      RemoveWeaponComponentFromPed(this.owner.Handle, this.weapon.Hash, this.componentHash);
    }
  }
  /**
   * get component display name / label
   *
   * @constructor
   */
  get DisplayName() {
    return _WeaponComponent.getComponentDisplayNameFromHash(this.weapon.Hash, this.componentHash);
  }
  /**
   * get component localized name
   *
   * @constructor
   */
  get LocalizedName() {
    return Game.getGXTEntry(this.DisplayName);
  }
  /**
   * get component attachment point
   *
   * @constructor
   */
  get AttachmentPoint() {
    return _WeaponComponent.getAttachmentPoint(this.weapon.Hash, this.componentHash);
  }
  /**
   * get component hud stats
   *
   * @constructor
   */
  get HudStats() {
    return WeaponComponentHudStats.get(this.componentHash);
  }
  /**
   * get component display name / label by hash
   *
   * @param hash
   * @param componentHash
   * @constructor
   */
  static getComponentDisplayNameFromHash(hash, componentHash) {
    if (!hash) {
      return "WCT_INVALID";
    }
    return ComponentDisplayNameByHash.get(componentHash) ?? "WCT_INVALID";
  }
  /**
   * get component attachment point by WeaponHash and WeaponComponentHash
   *
   * @param weaponHash
   * @param componentHash
   * @constructor
   */
  static getAttachmentPoint(weaponHash, componentHash) {
    const componentHashes = WeaponComponentHashesByWeaponHash.get(weaponHash);
    if (!componentHashes) {
      return 4294967295 /* Invalid */;
    }
    if (componentHashes.every((x) => x !== componentHash)) {
      return 4294967295 /* Invalid */;
    }
    return ComponentAttachmentPointByHash.get(componentHash) ?? 4294967295 /* Invalid */;
  }
};

// src/fivem/weaponComponent/InvalidWeaponComponent.ts
var InvalidWeaponComponent = class extends WeaponComponent {
  static {
    __name(this, "InvalidWeaponComponent");
  }
  constructor() {
    super(null, null, 4294967295 /* Invalid */);
  }
  get Active() {
    return false;
  }
  set Active(value) {
  }
  get DisplayName() {
    return "WCT_INVALID";
  }
  get LocalizedName() {
    return Game.getGXTEntry(this.DisplayName);
  }
  static getAttachmentPoint(hash, componentHash) {
    return 4294967295 /* Invalid */;
  }
};

// src/fivem/weaponComponent/WeaponComponentCollection.ts
var WeaponComponentCollection = class {
  static {
    __name(this, "WeaponComponentCollection");
  }
  owner;
  weapon;
  components = /* @__PURE__ */ new Map();
  invalidComponent = new InvalidWeaponComponent();
  constructor(owner, weapon) {
    this.owner = owner;
    this.weapon = weapon;
  }
  [Symbol.iterator]() {
    let pointer = 0;
    const components = Array.from(this.components.values());
    return {
      next() {
        if (pointer < components.length) {
          return { done: false, value: components[pointer++] };
        }
        return { done: true, value: null };
      }
    };
  }
  /**
   * get component
   *
   * @param componentHash
   */
  get(componentHash) {
    if (this.AllWeaponComponentHashes.some((x) => x === componentHash)) {
      let component = this.components.get(componentHash);
      if (!component) {
        component = this.createAndAddComponent(componentHash);
      }
      return component;
    }
    return this.invalidComponent;
  }
  /**
   * get current weapon component count
   *
   * @constructor
   */
  get Count() {
    return this.components.size;
  }
  /**
   * get clip component
   *
   * @param index - index of component
   */
  getClipComponent(index) {
    return this.getAnyComponentByAttachmentPoints(index, 3723347892 /* Clip */, 291640902 /* Clip2 */);
  }
  /**
   * get clip variation count
   *
   * @constructor
   */
  get ClipVariationsCount() {
    return this.getComponentHashesByAttachmentPoints(3723347892 /* Clip */, 291640902 /* Clip2 */).length;
  }
  /**
   * get scope component
   *
   * @param index - index of component
   */
  getScopeComponent(index) {
    return this.getAnyComponentByAttachmentPoints(
      index,
      196630833 /* Scope */,
      1684637069 /* Scope2 */
    );
  }
  /**
   * get scope variation count
   *
   * @constructor
   */
  get ScopeVariationsCount() {
    return this.getComponentHashesByAttachmentPoints(196630833 /* Scope */, 1684637069 /* Scope2 */).length;
  }
  /**
   * get suppressor component
   *
   */
  getSuppressorComponent() {
    return this.getAnyComponentByAttachmentPoints(
      void 0,
      1863181664 /* Supp */,
      945598191 /* Supp2 */
    );
  }
  /**
   * get flash light component
   *
   */
  getFlashLightComponent() {
    return this.getAnyComponentByAttachmentPoints(
      void 0,
      679107254 /* FlashLaser */,
      2722126698 /* FlashLaser2 */
    );
  }
  /**
   * get luxury finish component
   *
   */
  getLuxuryFinishComponent() {
    return this.getAnyComponentByAttachmentPoints(void 0, 962500902 /* GunRoot */);
  }
  /**
   * get Mk2 camo component
   *
   * @param index - index of component
   */
  getMk2CamoComponent(index) {
    return this.getAnyComponentByAttachmentPoints(index, 962500902 /* GunRoot */);
  }
  /**
   * get Mk2 barrel component
   *
   * @param index - index of component
   */
  getMk2BarrelComponent(index) {
    return this.getAnyComponentByAttachmentPoints(index, 2982890265 /* Barrel */);
  }
  /**
   * Create component object and add to collection
   *
   * @param hash
   * @private
   */
  createAndAddComponent(hash) {
    const uintHash = hash >>> 0;
    console.log("createAndAdd", hash, uintHash);
    console.log("about to create", this.owner, this.weapon, uintHash);
    const component = new WeaponComponent(this.owner, this.weapon, uintHash);
    this.components.set(uintHash, component);
    return component;
  }
  /**
   * get all WeaponComponentHash belongs to weapon
   *
   * @constructor
   * @private
   */
  get AllWeaponComponentHashes() {
    return WeaponComponentHashesByWeaponHash.get(this.weapon.Hash);
  }
  /**
   * get components belongs to attachmentPoints
   *
   * @param attachmentPoints
   * @private
   */
  getComponentHashesByAttachmentPoints(...attachmentPoints) {
    return this.AllWeaponComponentHashes.filter(
      (hash) => attachmentPoints.some((attachmentPoint) => ComponentAttachmentPointByHash.get(hash) === attachmentPoint)
    );
  }
  /**
   * get component by index and attachmentPoints
   *
   * @param index - component index
   * @param attachmentPoints -  attachmentPoints to search
   * @private
   */
  getAnyComponentByAttachmentPoints(index, ...attachmentPoints) {
    const hashes = this.getComponentHashesByAttachmentPoints(...attachmentPoints);
    if (index === void 0) {
      return this.get(hashes[0]) ?? this.invalidComponent;
    }
    return 0 <= index && index <= hashes.length - 1 ? this.get(hashes[index]) : this.invalidComponent;
  }
};

// src/fivem/weapon/DlcWeaponData.ts
var DlcWeaponData = /* @__PURE__ */ new Map();
function initializeOnce6() {
  let isInitialized = false;
  return () => {
    if (isInitialized || IsDuplicityVersion()) {
      return;
    }
    const intLength = 4;
    const strLength = 64;
    const weaponCount = GetNumDlcWeapons();
    for (let i = 0; i < weaponCount; i++) {
      const buffer = new Uint8Array(14 * intLength + 4 * strLength);
      Citizen.invokeNative("0x79923CD21BECE14E", i, buffer, Citizen.returnResultAnyway());
      const dlcWeaponData = {
        validCheck: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
        weaponHash: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
        unk: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
        weaponCost: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
        ammoCost: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength),
        ammoType: getUInt32FromUint8Array(buffer, 10 * intLength, 11 * intLength),
        defaultClipSize: getUInt32FromUint8Array(buffer, 12 * intLength, 13 * intLength),
        name: getStringFromUInt8Array(buffer, 14 * intLength, 14 * intLength + strLength),
        desc: getStringFromUInt8Array(buffer, 14 * intLength + strLength, 14 * intLength + 2 * strLength),
        simpleDesc: getStringFromUInt8Array(buffer, 14 * intLength + 2 * strLength, 14 * intLength + 3 * strLength),
        upperCaseName: getStringFromUInt8Array(buffer, 14 * intLength + 3 * strLength, 14 * intLength + 4 * strLength)
      };
      DlcWeaponData.set(dlcWeaponData.weaponHash, dlcWeaponData);
    }
    isInitialized = true;
  };
}
__name(initializeOnce6, "initializeOnce");
initializeOnce6()();

// src/fivem/weapon/WeaponDisplayNameByHash.ts
var WeaponDisplayNameByHash = /* @__PURE__ */ new Map([
  [453432689 /* Pistol */, "WT_PIST"],
  [1593441988 /* CombatPistol */, "WT_PIST_CBT"],
  [584646201 /* APPistol */, "WT_PIST_AP"],
  [736523883 /* SMG */, "WT_SMG"],
  [324215364 /* MicroSMG */, "WT_SMG_MCR"],
  [-1074790547 /* AssaultRifle */, "WT_RIFLE_ASL"],
  [-2084633992 /* CarbineRifle */, "WT_RIFLE_CBN"],
  [-1357824103 /* AdvancedRifle */, "WT_RIFLE_ADV"],
  [-1660422300 /* MG */, "WT_MG"],
  [2144741730 /* CombatMG */, "WT_MG_CBT"],
  [487013001 /* PumpShotgun */, "WT_SG_PMP"],
  [2017895192 /* SawnOffShotgun */, "WT_SG_SOF"],
  [-494615257 /* AssaultShotgun */, "WT_SG_ASL"],
  [205991906 /* HeavySniper */, "WT_SNIP_HVY"],
  [100416529 /* SniperRifle */, "WT_SNIP_RIF"],
  [-1568386805 /* GrenadeLauncher */, "WT_GL"],
  [-1312131151 /* RPG */, "WT_RPG"],
  [1119849093 /* Minigun */, "WT_MINIGUN"],
  [-270015777 /* AssaultSMG */, "WT_SMG_ASL"],
  [-1654528753 /* BullpupShotgun */, "WT_SG_BLP"],
  [-1716589765 /* Pistol50 */, "WT_PIST_50"],
  [-102323637 /* Bottle */, "WT_BOTTLE"],
  [1627465347 /* Gusenberg */, "WT_GUSENBERG"],
  [-1076751822 /* SNSPistol */, "WT_SNSPISTOL"],
  [137902532 /* VintagePistol */, "TT_VPISTOL"],
  [-1834847097 /* Dagger */, "WT_DAGGER"],
  [1198879012 /* FlareGun */, "WT_FLAREGUN"],
  [-1466123874 /* Musket */, "WT_MUSKET"],
  [2138347493 /* Firework */, "WT_FWRKLNCHR"],
  [-952879014 /* MarksmanRifle */, "WT_HMKRIFLE"],
  [984333226 /* HeavyShotgun */, "WT_HVYSHOT"],
  [-1420407917 /* ProximityMine */, "WT_PRXMINE"],
  [1672152130 /* HomingLauncher */, "WT_HOMLNCH"],
  [171789620 /* CombatPDW */, "WT_COMBATPDW"],
  [-656458692 /* KnuckleDuster */, "WT_KNUCKLE"],
  [-598887786 /* MarksmanPistol */, "WT_MKPISTOL"],
  [-581044007 /* Machete */, "WT_MACHETE"],
  [-619010992 /* MachinePistol */, "WT_MCHPIST"],
  [-1951375401 /* Flashlight */, "WT_FLASHLIGHT"],
  [-275439685 /* DoubleBarrelShotgun */, "WT_DBSHGN"],
  [1649403952 /* CompactRifle */, "WT_CMPRIFLE"],
  [-538741184 /* SwitchBlade */, "WT_SWBLADE"],
  [-1045183535 /* Revolver */, "WT_REVOLVER"],
  // mpgunrunning
  [3219281620 /* PistolMk2 */, "WT_PIST2"],
  [961495388 /* AssaultRifleMk2 */, "WT_RIFLE_ASL2"],
  [4208062921 /* CarbineRifleMk2 */, "WT_RIFLE_CBN2"],
  [3686625920 /* CombatMGMk2 */, "WT_MG_CBT2"],
  [177293209 /* HeavySniperMk2 */, "WT_SNIP_HVY2"],
  [2024373456 /* SMGMk2 */, "WT_SMG2"]
]);
function initializeOnce7() {
  let isInitialized = false;
  return () => {
    if (isInitialized) {
      return;
    }
    for (const [hash, data] of DlcWeaponData) {
      WeaponDisplayNameByHash.set(hash, data.name);
    }
    isInitialized = true;
  };
}
__name(initializeOnce7, "initializeOnce");
initializeOnce7()();

// src/fivem/weapon/WeaponHudStats.ts
var WeaponHudStats = /* @__PURE__ */ new Map();
function initializeOnce8() {
  let isInitialized = false;
  return () => {
    if (isInitialized || IsDuplicityVersion()) {
      return;
    }
    const intLength = 4;
    for (const hash of enumValues(WeaponHash)) {
      const buffer = new Uint8Array(40);
      Citizen.invokeNative("0xD92C739EE34C9EBA", hash, buffer, Citizen.returnResultAnyway());
      const weaponHudStats = {
        hudDamage: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
        hudSpeed: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
        hudCapacity: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
        hudAccuracy: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
        hudRange: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength)
      };
      WeaponHudStats.set(hash, weaponHudStats);
    }
    isInitialized = true;
  };
}
__name(initializeOnce8, "initializeOnce");
initializeOnce8()();

// src/fivem/weapon/Mk2WeaponHash.ts
var Mk2WeaponHash = /* @__PURE__ */ ((Mk2WeaponHash2) => {
  Mk2WeaponHash2[Mk2WeaponHash2["PistolMk2"] = 3219281620] = "PistolMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["SNSPistolMk2"] = 2285322324] = "SNSPistolMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["RevolverMk2"] = 3415619887] = "RevolverMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["SMGMk2"] = 2024373456] = "SMGMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["PumpShotgunMk2"] = 1432025498] = "PumpShotgunMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["AssaultRifleMk2"] = 961495388] = "AssaultRifleMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["CarbineRifleMk2"] = 4208062921] = "CarbineRifleMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["SpecialCarbineMk2"] = 2526821735] = "SpecialCarbineMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["BullpupRifleMk2"] = 2228681469] = "BullpupRifleMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["CombatMGMk2"] = 3686625920] = "CombatMGMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["HeavySniperMk2"] = 177293209] = "HeavySniperMk2";
  Mk2WeaponHash2[Mk2WeaponHash2["MarksmanRifleMk2"] = 1785463520] = "MarksmanRifleMk2";
  return Mk2WeaponHash2;
})(Mk2WeaponHash || {});

// src/fivem/weapon/Weapon.ts
var Weapon = class _Weapon {
  static {
    __name(this, "Weapon");
  }
  owner;
  components;
  hash;
  constructor(owner, hash) {
    this.owner = owner;
    this.hash = hash;
    this.components = new WeaponComponentCollection(this.owner, this);
  }
  /**
   * weapon components
   *
   * @constructor
   */
  get Components() {
    return this.components;
  }
  /**
   * weapon hash
   *
   * @constructor
   */
  get Hash() {
    return this.hash;
  }
  /**
   * check ped is unarmed or not
   *
   * @constructor
   */
  get IsUnarmed() {
    return this.hash === -1569615261 /* Unarmed */;
  }
  /**
   * Check if the ped has the current weapon.
   *
   * @constructor
   */
  get IsPresent() {
    if (this.IsUnarmed) {
      return true;
    }
    return HasPedGotWeapon(this.owner.Handle, this.hash, false);
  }
  /**
   * get weapon display name / label
   *
   * @constructor
   */
  get DisplayName() {
    return _Weapon.getDisplayNameFromHash(this.hash) ?? "WCT_INVALID";
  }
  /**
   * get weapon localized name
   *
   * @constructor
   */
  get LocalizedName() {
    return Game.getGXTEntry(this.DisplayName);
  }
  /**
   * get weapon model
   *
   * @constructor
   */
  get Model() {
    return new Model(GetWeapontypeModel(this.hash));
  }
  /**
   * get weapon tint
   *
   * @constructor
   */
  get Tint() {
    return GetPedWeaponTintIndex(this.owner.Handle, this.hash);
  }
  /**
   * set weapon tint
   *
   * @param tint
   * @constructor
   */
  set Tint(tint) {
    SetPedWeaponTintIndex(this.owner.Handle, this.hash, tint);
  }
  /**
   * get weapon group
   *
   * @constructor
   */
  get Group() {
    return GetWeapontypeGroup(this.hash);
  }
  /**
   * get weapon ammo type
   *
   * @constructor
   */
  get AmmoType() {
    return GetPedAmmoTypeFromWeapon(this.owner.Handle, this.hash);
  }
  /**
   * get weapon ammo count
   *
   * @constructor
   */
  get Ammo() {
    if (this.IsUnarmed) {
      return 1;
    }
    if (!this.IsPresent) {
      return GetPedAmmoByType(this.owner.Handle, this.AmmoType);
    }
    return GetAmmoInPedWeapon(this.owner.Handle, this.hash);
  }
  /**
   * set weapon ammo count
   *
   * @param count
   * @constructor
   */
  set Ammo(count) {
    if (this.IsUnarmed) {
      return;
    }
    if (this.IsPresent) {
      SetPedAmmo(this.owner.Handle, this.hash, count);
    } else {
      GiveWeaponToPed(this.owner.Handle, this.hash, count, false, true);
    }
  }
  /**
   * get weapon max ammo
   *
   * @constructor
   */
  get MaxAmmo() {
    if (this.IsUnarmed) {
      return 1;
    }
    const amount = Citizen.invokeNative(
      "0xDC16122C7A20C933",
      this.owner.Handle,
      this.hash,
      Citizen.pointerValueInt(),
      Citizen.resultAsInteger()
    );
    return amount;
  }
  /**
   * get weapon max ammo in clip
   *
   * @constructor
   */
  get MaxAmmoInClip() {
    if (this.IsUnarmed) {
      return 1;
    }
    if (!this.IsPresent) {
      return 0;
    }
    return GetMaxAmmoInClip(this.owner.Handle, this.hash, true);
  }
  /**
   * get weapon default clip size
   *
   * @constructor
   */
  get DefaultClipSize() {
    return GetWeaponClipSize(this.hash);
  }
  /**
   * toggle weapon infinite ammo
   *
   * @param toggle
   * @constructor
   */
  set InfiniteAmmo(toggle) {
    if (this.IsUnarmed) {
      return;
    }
    SetPedInfiniteAmmo(this.owner.Handle, toggle, this.hash);
  }
  /**
   * toggle ped infinite ammo clip on all weapons
   *
   * @param toggle
   * @constructor
   */
  set InfiniteAmmoClip(toggle) {
    SetPedInfiniteAmmoClip(this.owner.Handle, toggle);
  }
  /**
   * check weapon can use on parachute
   *
   * @constructor
   */
  get CanUseOnParachute() {
    return CanUseWeaponOnParachute(this.hash);
  }
  /**
   * Check weapon is Mk2 or not
   *
   * @constructor
   */
  get IsMk2() {
    return Array.from(enumValues(Mk2WeaponHash)).some((x) => x === this.hash);
  }
  /**
   * set weapon livery, only work for Mk2 weapon
   *
   * @param liveryId
   * @param colorId
   */
  setLivery(liveryId, colorId) {
    if (!this.IsMk2) {
      console.log(`[ERROR]${this.setLivery.name} failed. Reason: non-Mk2 weapon`);
      return;
    }
    const component = this.Components.getMk2CamoComponent(liveryId);
    if (component.IsInvalid) {
      console.log(`[ERROR]${this.setLivery.name} failed. Reason: invalid liveryId/Component`);
      return;
    }
    component.Active = true;
    SetPedWeaponLiveryColor(this.owner.Handle, this.hash, component.ComponentHash, colorId);
  }
  /**
   * get weapon hud stats
   *
   * @constructor
   */
  get HudStats() {
    return WeaponHudStats.get(this.hash);
  }
  /**
   * get weapon display name / label by hash
   *
   * @param hash
   */
  static getDisplayNameFromHash(hash) {
    if (!hash) {
      return "WT_INVALID";
    }
    return WeaponDisplayNameByHash.get(hash) ?? "WCT_INVALID";
  }
  /**
   * get component hashes belongs to weapon
   *
   * @param hash
   */
  static getWeaponComponentHashes(hash) {
    const hashes = WeaponComponentHashesByWeaponHash.get(hash);
    if (!hashes) {
      return [];
    }
    return [...hashes];
  }
};

// src/fivem/weapon/WeaponCollection.ts
var WeaponCollection = class {
  static {
    __name(this, "WeaponCollection");
  }
  owner;
  weapons = /* @__PURE__ */ new Map();
  constructor(owner) {
    this.owner = owner;
  }
  [Symbol.iterator]() {
    let pointer = 0;
    const weapons = Array.from(this.weapons.values());
    return {
      next() {
        if (pointer < weapons.length) {
          return { done: false, value: weapons[pointer++] };
        }
        return { done: true, value: null };
      }
    };
  }
  /**
   * get weapon by hash
   *
   * @param hash
   */
  get(hash) {
    let weapon = this.weapons.get(hash);
    if (!weapon) {
      if (!this.hasWeapon(hash)) {
        return null;
      }
      weapon = this.createAndAddWeapon(hash);
    }
    return weapon;
  }
  /**
   * get ped current weapon
   *
   * @constructor
   */
  get Current() {
    const [, hash] = GetCurrentPedWeapon(this.owner.Handle, true);
    if (this.weapons.has(hash)) {
      return this.weapons.get(hash);
    }
    return this.createAndAddWeapon(hash);
  }
  /**
   * get ped current weapon object
   *
   * @constructor
   */
  get CurrentWeaponObject() {
    if (this.Current.IsUnarmed) {
      return null;
    }
    return new Prop(GetCurrentPedWeaponEntityIndex(this.owner.Handle));
  }
  /**
   * get ped best weapon
   *
   * @constructor
   */
  get BestWeapon() {
    const hash = GetBestPedWeapon(this.owner.Handle, false);
    if (this.weapons.has(hash)) {
      return this.weapons.get(hash);
    }
    return this.createAndAddWeapon(hash);
  }
  /**
   * check ped has weapon
   *
   * @param hash
   */
  hasWeapon(hash) {
    return HasPedGotWeapon(this.owner.Handle, hash, false);
  }
  /**
   * check weapon is valid
   *
   * @param hash
   */
  isWeaponValid(hash) {
    return IsWeaponValid(hash);
  }
  /**
   * give weapon to ped
   *
   * @param hash
   * @param ammoCount
   * @param equipNow
   * @param isAmmoLoaded
   */
  give(hash, ammoCount, equipNow, isAmmoLoaded) {
    let weapon = this.weapons.get(hash);
    if (!weapon) {
      weapon = this.createAndAddWeapon(hash);
    }
    if (weapon.IsPresent) {
      this.select(weapon);
    } else {
      GiveWeaponToPed(this.owner.Handle, weapon.Hash, ammoCount, equipNow, isAmmoLoaded);
    }
    return weapon;
  }
  /**
   * set ped current weapon on hand
   *
   * @param weapon
   */
  select(weapon) {
    if (weapon instanceof Weapon) {
      if (!weapon.IsPresent) {
        return false;
      }
      SetCurrentPedWeapon(this.owner.Handle, weapon.Hash, true);
      return true;
    }
    if (!this.hasWeapon(weapon)) {
      return false;
    }
    SetCurrentPedWeapon(this.owner.Handle, weapon, true);
    return true;
  }
  /**
   * remove weapon from ped
   *
   * @param weapon
   */
  remove(weapon) {
    if (weapon instanceof Weapon) {
      if (this.weapons.has(weapon.Hash)) {
        this.weapons.delete(weapon.Hash);
      }
      this.remove(weapon.Hash);
    } else {
      RemoveWeaponFromPed(this.owner.Handle, weapon);
    }
  }
  /**
   * remove all weapons from ped
   *
   */
  removeAll() {
    RemoveAllPedWeapons(this.owner.Handle, true);
    this.weapons.clear();
  }
  /**
   * Drop ped current weapon?
   * todo: this native seems does not work as expected, need to investigate
   * refer1: https://docs.fivem.net/natives/?_0x6B7513D9966FBEC0
   * refer2: https://forum.cfx.re/t/release-weapondrop/49856/8
   *
   */
  drop() {
    SetPedDropsWeapon(this.owner.Handle);
  }
  /**
   * create weapon object and add to collection
   *
   * @param hash
   * @private
   */
  createAndAddWeapon(hash) {
    const uintHash = hash >>> 0;
    const weapon = new Weapon(this.owner, uintHash);
    this.weapons.set(uintHash, weapon);
    return weapon;
  }
};

// src/fivem/models/Ped.ts
var Ped = class _Ped extends BaseEntity {
  static {
    __name(this, "Ped");
  }
  static exists(ped) {
    return typeof ped !== "undefined" && ped.exists();
  }
  static fromHandle(handle) {
    return new _Ped(handle);
  }
  static fromNetworkId(networkId) {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new _Ped(NetworkGetEntityFromNetworkId(networkId));
  }
  type = 0 /* Ped */;
  pedBones;
  weapons;
  static speechModifierNames = [
    "SPEECH_PARAMS_STANDARD",
    "SPEECH_PARAMS_ALLOW_REPEAT",
    "SPEECH_PARAMS_BEAT",
    "SPEECH_PARAMS_FORCE",
    "SPEECH_PARAMS_FORCE_FRONTEND",
    "SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND",
    "SPEECH_PARAMS_FORCE_NORMAL",
    "SPEECH_PARAMS_FORCE_NORMAL_CLEAR",
    "SPEECH_PARAMS_FORCE_NORMAL_CRITICAL",
    "SPEECH_PARAMS_FORCE_SHOUTED",
    "SPEECH_PARAMS_FORCE_SHOUTED_CLEAR",
    "SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL",
    "SPEECH_PARAMS_FORCE_PRELOAD_ONLY",
    "SPEECH_PARAMS_MEGAPHONE",
    "SPEECH_PARAMS_HELI",
    "SPEECH_PARAMS_FORCE_MEGAPHONE",
    "SPEECH_PARAMS_FORCE_HELI",
    "SPEECH_PARAMS_INTERRUPT",
    "SPEECH_PARAMS_INTERRUPT_SHOUTED",
    "SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR",
    "SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL",
    "SPEECH_PARAMS_INTERRUPT_NO_FORCE",
    "SPEECH_PARAMS_INTERRUPT_FRONTEND",
    "SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND",
    "SPEECH_PARAMS_ADD_BLIP",
    "SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT",
    "SPEECH_PARAMS_ADD_BLIP_FORCE",
    "SPEECH_PARAMS_ADD_BLIP_SHOUTED",
    "SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE",
    "SPEECH_PARAMS_ADD_BLIP_INTERRUPT",
    "SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE",
    "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED",
    "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR",
    "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL",
    "SPEECH_PARAMS_SHOUTED",
    "SPEECH_PARAMS_SHOUTED_CLEAR",
    "SPEECH_PARAMS_SHOUTED_CRITICAL"
  ];
  tasks;
  constructor(handle) {
    super(handle);
  }
  get Player() {
    return new Player2(NetworkGetPlayerIndexFromPed(this.handle));
  }
  get Money() {
    return GetPedMoney(this.handle);
  }
  set Money(amount) {
    SetPedMoney(this.handle, amount);
  }
  get Gender() {
    return IsPedMale(this.handle) ? 0 /* Male */ : 1 /* Female */;
  }
  get Armor() {
    return GetPedArmour(this.handle);
  }
  set Armor(amount) {
    if (amount > 100) amount = 100;
    SetPedArmour(this.handle, amount);
  }
  get Accuracy() {
    return GetPedAccuracy(this.handle);
  }
  set Accuracy(accuracy) {
    if (accuracy > 100) accuracy = 100;
    SetPedAccuracy(this.handle, accuracy);
  }
  get Health() {
    return super.Health - 100;
  }
  set Health(amount) {
    super.Health = amount + 100;
  }
  get MaxHealth() {
    return super.MaxHealth - 100;
  }
  set MaxHealth(amount) {
    super.MaxHealth = amount + 100;
  }
  set Sweat(value) {
    SetPedSweat(this.handle, value);
  }
  set WetnessHeight(value) {
    if (value === 0) {
      ClearPedWetness(this.Handle);
    } else {
      SetPedWetnessHeight(this.handle, value);
    }
  }
  set Voice(value) {
    SetAmbientVoiceName(this.handle, value);
  }
  set ShootRate(value) {
    if (value > 1e3) value = 1e3;
    SetPedShootRate(this.handle, value);
  }
  get WasKilledByStealth() {
    return WasPedKilledByStealth(this.handle);
  }
  get WasKilledByTakedown() {
    return WasPedKilledByTakedown(this.handle);
  }
  get SeatIndex() {
    if (!this.CurrentVehicle) return -3 /* None */;
    const numberOfSeats = GetVehicleModelNumberOfSeats(this.CurrentVehicle.Model.Hash);
    for (let seat = -1; seat < numberOfSeats; seat++) {
      if (this.CurrentVehicle.getPedOnSeat(seat).Handle === this.handle) {
        return seat;
      }
    }
    return -3 /* None */;
  }
  get CurrentVehicle() {
    const veh = new Vehicle(GetVehiclePedIsIn(this.handle, false));
    return veh.exists() ? veh : null;
  }
  get LastVehicle() {
    const veh = new Vehicle(GetVehiclePedIsIn(this.handle, true));
    return veh.exists() ? veh : null;
  }
  get VehicleTryingToEnter() {
    const veh = new Vehicle(GetVehiclePedIsTryingToEnter(this.handle));
    return veh.exists() ? veh : null;
  }
  get IsJumpingOutOfVehicle() {
    return IsPedJumpingOutOfVehicle(this.handle);
  }
  set StaysInVehicleWhenJacked(value) {
    SetPedStayInVehicleWhenJacked(this.handle, value);
  }
  set MaxDrivingSpeed(value) {
    SetDriveTaskMaxCruiseSpeed(this.handle, value);
  }
  get IsHuman() {
    return IsPedHuman(this.handle);
  }
  set IsEnemy(value) {
    SetPedAsEnemy(this.handle, value);
  }
  set IsPriorityTargetForEnemies(value) {
    SetEntityIsTargetPriority(this.handle, value, 0);
  }
  get IsPlayer() {
    return IsPedAPlayer(this.handle);
  }
  get IsCuffed() {
    return IsPedCuffed(this.handle);
  }
  get IsWearingHelmet() {
    return IsPedWearingHelmet(this.handle);
  }
  get IsRagdoll() {
    return IsPedRagdoll(this.handle);
  }
  get IsIdle() {
    return !this.IsInjured && !this.IsRagdoll && !this.IsInAir && !this.IsOnFire && !this.IsDucking && !this.IsGettingIntoAVehicle && !this.IsInCombat && !this.IsInMeleeCombat && (!this.isInAnyVehicle() || this.isSittingInAnyVehicle());
  }
  get IsProne() {
    return IsPedProne(this.handle);
  }
  set IsDucking(value) {
    SetPedDucking(this.handle, value);
  }
  get IsDucking() {
    return IsPedDucking(this.handle);
  }
  get IsGettingUp() {
    return IsPedGettingUp(this.handle);
  }
  get IsClimbing() {
    return IsPedClimbing(this.handle);
  }
  get IsJumping() {
    return IsPedJumping(this.handle);
  }
  get IsFalling() {
    return IsPedFalling(this.handle);
  }
  get IsStopped() {
    return IsPedStopped(this.handle);
  }
  get IsWalking() {
    return IsPedWalking(this.handle);
  }
  get IsRunning() {
    return IsPedRunning(this.handle);
  }
  get IsSprinting() {
    return IsPedSprinting(this.handle);
  }
  get IsDiving() {
    return IsPedDiving(this.handle);
  }
  get IsInParachuteFreeFall() {
    return IsPedInParachuteFreeFall(this.handle);
  }
  get IsSwimming() {
    return IsPedSwimming(this.handle);
  }
  get IsSwimmingUnderWater() {
    return IsPedSwimmingUnderWater(this.handle);
  }
  get IsVaulting() {
    return IsPedVaulting(this.handle);
  }
  get IsOnBike() {
    return IsPedOnAnyBike(this.handle);
  }
  get IsOnFoot() {
    return IsPedOnFoot(this.handle);
  }
  get IsInSub() {
    return IsPedInAnySub(this.handle);
  }
  get IsInTaxi() {
    return IsPedInAnyTaxi(this.handle);
  }
  get IsInTrain() {
    return IsPedInAnyTrain(this.handle);
  }
  get IsInHeli() {
    return IsPedInAnyHeli(this.handle);
  }
  get IsInPlane() {
    return IsPedInAnyPlane(this.handle);
  }
  get IsInFlyingVehicle() {
    return IsPedInFlyingVehicle(this.handle);
  }
  get IsInBoat() {
    return IsPedInAnyBoat(this.handle);
  }
  get IsInPoliceVehicle() {
    return IsPedInAnyPoliceVehicle(this.handle);
  }
  get IsJacking() {
    return IsPedJacking(this.handle);
  }
  get IsBeingJacked() {
    return IsPedBeingJacked(this.handle);
  }
  get IsGettingIntoAVehicle() {
    return IsPedGettingIntoAVehicle(this.handle);
  }
  get IsTryingToEnterALockedVehicle() {
    return IsPedTryingToEnterALockedVehicle(this.handle);
  }
  get IsInjured() {
    return IsPedInjured(this.handle);
  }
  get IsFleeing() {
    return IsPedFleeing(this.handle);
  }
  get IsInCombat() {
    return IsPedInCombat(this.handle, PlayerPedId());
  }
  get IsInMeleeCombat() {
    return IsPedInMeleeCombat(this.handle);
  }
  get IsInStealthMode() {
    return GetPedStealthMovement(this.handle);
  }
  get IsAmbientSpeechPlaying() {
    return IsAmbientSpeechPlaying(this.handle);
  }
  get IsScriptedSpeechPlaying() {
    return IsScriptedSpeechPlaying(this.handle);
  }
  get IsAnySpeechPlaying() {
    return IsAnySpeechPlaying(this.handle);
  }
  get IsAmbientSpeechEnabled() {
    return !IsAmbientSpeechDisabled(this.handle);
  }
  set IsPainAudioEnabled(value) {
    DisablePedPainAudio(this.handle, !value);
  }
  get IsPlantingBomb() {
    return IsPedPlantingBomb(this.handle);
  }
  get IsShooting() {
    return IsPedShooting(this.handle);
  }
  get IsAiming() {
    return this.getConfigFlag(78);
  }
  get IsReloading() {
    return IsPedReloading(this.handle);
  }
  get IsDoingDriveby() {
    return IsPedDoingDriveby(this.handle);
  }
  get IsGoingIntoCover() {
    return IsPedGoingIntoCover(this.handle);
  }
  get IsBeingStunned() {
    return IsPedBeingStunned(this.handle, 0);
  }
  get IsBeingStealthKilled() {
    return IsPedBeingStealthKilled(this.handle);
  }
  get IsPerformingStealthKill() {
    return IsPedPerformingStealthKill(this.handle);
  }
  get IsAimingFromCover() {
    return IsPedAimingFromCover(this.handle);
  }
  isInCover(expectUseWeapon = false) {
    return IsPedInCover(this.handle, expectUseWeapon);
  }
  get IsInCoverFacingLeft() {
    return IsPedInCoverFacingLeft(this.handle);
  }
  set FiringPattern(value) {
    SetPedFiringPattern(this.handle, value);
  }
  set DropsWeaponsOnDeath(value) {
    SetPedDropsWeaponsWhenDead(this.handle, value);
  }
  set DrivingSpeed(value) {
    SetDriveTaskCruiseSpeed(this.handle, value);
  }
  set DrivingStyle(style) {
    SetDriveTaskDrivingStyle(this.handle, Number(style));
  }
  set IsDrunk(isDrunk) {
    SetPedIsDrunk(this.handle, isDrunk);
  }
  set MotionBlur(value) {
    SetPedMotionBlur(this.handle, value);
  }
  get Task() {
    if (!this.tasks) {
      this.tasks = new Tasks(this);
    }
    return this.tasks;
  }
  get DeathCause() {
    return GetPedCauseOfDeath(this.handle);
  }
  get TaskSequenceProgress() {
    return GetSequenceProgress(this.handle);
  }
  set BlockPermanentEvents(block) {
    SetBlockingOfNonTemporaryEvents(this.handle, block);
  }
  isInAnyVehicle() {
    return IsPedInAnyVehicle(this.handle, false);
  }
  isInVehicle(vehicle) {
    return IsPedInVehicle(this.handle, vehicle.Handle, false);
  }
  isSittingInAnyVehicle() {
    return IsPedSittingInAnyVehicle(this.handle);
  }
  isSittingInVehicle(vehicle) {
    return IsPedSittingInVehicle(this.handle, vehicle.Handle);
  }
  setIntoVehicle(vehicle, seat) {
    SetPedIntoVehicle(this.handle, vehicle.Handle, Number(seat));
  }
  isHeadtracking(entity) {
    return IsPedHeadtrackingEntity(this.handle, entity.Handle);
  }
  isInCombatAgainst(target) {
    return IsPedInCombat(this.handle, target.Handle);
  }
  getJacker() {
    return new _Ped(GetPedsJacker(this.handle));
  }
  getJackTarget() {
    return new _Ped(GetJackTarget(this.handle));
  }
  getMeleeTarget() {
    return new _Ped(GetMeleeTargetForPed(this.handle));
  }
  getKiller() {
    return _Ped.fromHandle(GetPedSourceOfDeath(this.handle));
  }
  kill() {
    this.Health = -1;
  }
  resurrect() {
    const maxHealth = this.Health;
    const isCollisionEnabled = super.IsCollisionEnabled;
    ResurrectPed(this.handle);
    this.MaxHealth = maxHealth;
    this.Health = maxHealth;
    super.IsCollisionEnabled = isCollisionEnabled;
    ClearPedTasksImmediately(this.handle);
  }
  resetVisibleDamage() {
    ResetPedVisibleDamage(this.handle);
  }
  clearBloodDamage() {
    ClearPedBloodDamage(this.handle);
  }
  // TODO: Add RelationshipGroup
  get IsInGroup() {
    return IsPedInGroup(this.handle);
  }
  set NeverLeavesGroup(value) {
    SetPedNeverLeavesGroup(this.handle, value);
  }
  leaveGroup() {
    RemovePedFromGroup(this.handle);
  }
  playAmbientSpeed(speechName, voiceName = "", modifier = 0 /* Standard */) {
    if (Number(modifier) >= 0 && Number(modifier) < _Ped.speechModifierNames.length) {
      if (voiceName === "") {
        PlayAmbientSpeech1(this.handle, speechName, _Ped.speechModifierNames[Number(modifier)]);
      } else {
        PlayAmbientSpeechWithVoice(
          this.handle,
          speechName,
          voiceName,
          _Ped.speechModifierNames[Number(modifier)],
          false
        );
      }
    } else {
      throw new RangeError("modifier");
    }
  }
  applyDamage(damageAmount, armorFirst = true) {
    ApplyDamageToPed(this.handle, damageAmount, armorFirst);
  }
  hasBeenDamagedByWeapon(weapon) {
    return HasPedBeenDamagedByWeapon(this.handle, Number(weapon), 0);
  }
  hasBeenDamagedByAnyWeapon() {
    return HasPedBeenDamagedByWeapon(this.handle, 0, 2);
  }
  hasBeenDamagedByAnyMeleeWeapon() {
    return HasPedBeenDamagedByWeapon(this.handle, 0, 1);
  }
  clearLastWeaponDamage() {
    ClearPedLastWeaponDamage(this.handle);
  }
  get Bones() {
    if (!this.pedBones) {
      this.pedBones = new PedBoneCollection(this);
    }
    return this.pedBones;
  }
  /**
   * Ped Weapons
   *
   * @constructor
   */
  get Weapons() {
    if (!this.weapons) {
      this.weapons = new WeaponCollection(this);
    }
    return this.weapons;
  }
  giveWeapon(weapon, ammoCount = 999, isHidden = false, equipNow = true) {
    GiveWeaponToPed(this.handle, weapon, ammoCount, isHidden, equipNow);
  }
  removeWeapon(weapon) {
    RemoveWeaponFromPed(this.handle, weapon);
  }
  removeAllWeapons() {
    RemoveAllPedWeapons(this.handle, true);
  }
  getLastWeaponImpactPosition() {
    const [valid, coords] = GetPedLastWeaponImpactCoord(this.handle);
    return valid ? Vector3.fromArray(coords) : new Vector3(0, 0, 0);
  }
  get CanRagdoll() {
    return CanPedRagdoll(this.handle);
  }
  set CanRagdoll(value) {
    SetPedCanRagdoll(this.handle, value);
  }
  ragdoll(duration = -1, ragdollType = 0 /* Normal */) {
    this.CanRagdoll = true;
    SetPedToRagdoll(this.handle, duration, duration, Number(ragdollType), false, false, false);
  }
  cancelRagdoll() {
    SetPedToRagdoll(this.handle, 1, 1, 1, false, false, false);
  }
  giveHelmet(canBeRemovedByPed, helmetType, textureIndex) {
    GivePedHelmet(this.handle, !canBeRemovedByPed, Number(helmetType), textureIndex);
  }
  removeHelmet(instantly) {
    RemovePedHelmet(this.handle, instantly);
  }
  openParachute() {
    ForcePedToOpenParachute(this.handle);
  }
  getConfigFlag(flagId) {
    return GetPedConfigFlag(this.handle, flagId, true);
  }
  setConfigFlag(flagId, value) {
    SetPedConfigFlag(this.handle, flagId, value);
  }
  resetConfigFlag(flagId) {
    SetPedResetFlag(this.handle, flagId, true);
  }
  // TODO: Proper extension for this
  clone() {
    return new _Ped(ClonePed(this.handle, false, false, false));
  }
  exists() {
    return super.exists() && GetEntityType(this.handle) === 1;
  }
  isFacingPed(ped, angle = 25) {
    return IsPedFacingPed(this.handle, ped.Handle, angle);
  }
  setComponentVariation(componentId, drawableId, textureId, paletteId = 0) {
    SetPedComponentVariation(this.handle, componentId, drawableId, textureId, paletteId);
  }
  setRandomComponentVariation() {
    SetPedRandomComponentVariation(this.handle, 0);
  }
  setDefaultComponentVariation() {
    SetPedDefaultComponentVariation(this.handle);
  }
  getDrawableVariation(componentId) {
    return GetPedDrawableVariation(this.handle, componentId);
  }
  getNumberOfDrawableVariations(componentId) {
    return GetNumberOfPedDrawableVariations(this.handle, componentId);
  }
  getTextureVariation(componentId) {
    return GetPedTextureVariation(this.handle, componentId);
  }
  getNumberTextureVariations(componentId, drawableId = this.getDrawableVariation(componentId)) {
    return GetNumberOfPedTextureVariations(this.handle, componentId, drawableId);
  }
  setRandomProps() {
    SetPedRandomProps(this.handle);
  }
  setPropIndex(propId, drawableId, textureId, attach = true) {
    SetPedPropIndex(this.handle, propId, drawableId, textureId, attach);
  }
  clearProp(propId) {
    ClearPedProp(this.handle, propId);
  }
  clearAllProps() {
    ClearAllPedProps(this.handle);
  }
  knockPropOff(p1, p2, p3, p4) {
    KnockOffPedProp(this.handle, p1, p2, p3, p4);
  }
  isPropValid(propId, drawableId, textureId) {
    return SetPedPreloadPropData(this.handle, propId, drawableId, textureId);
  }
  getPropIndex(propId) {
    return GetPedPropIndex(this.handle, propId);
  }
  getNumberOfPropDrawableVariations(propId) {
    return GetNumberOfPedPropDrawableVariations(this.handle, propId);
  }
  getNumberOfPropTextureVariations(propId, drawableId = this.getPropIndex(propId)) {
    return GetNumberOfPedPropTextureVariations(this.handle, propId, drawableId);
  }
  getPropTextureIndex(propId) {
    return GetPedPropTextureIndex(this.handle, propId);
  }
  setHelmetPropIndex(propIndex) {
    SetPedHelmetPropIndex(this.handle, propIndex);
  }
  setEyeColor(color) {
    SetPedEyeColor(this.handle, color);
  }
  getEyeColor() {
    return GetPedEyeColor(this.handle);
  }
  setHairColors(primary, highlight) {
    SetPedHairColor(this.handle, primary, highlight);
  }
  setHairColor(color) {
    this.setHairColors(color, this.getHairHighlightColor());
  }
  getHairColor() {
    return GetPedHairColor(this.handle);
  }
  setHairHighlightColor(color) {
    this.setHairColors(this.getHairColor(), color);
  }
  getHairHighlightColor() {
    return GetPedHairHighlightColor(this.handle);
  }
  getHeadOverlayNum(overlayId) {
    return GetPedHeadOverlayNum(overlayId);
  }
  getHeadOverlayValue(overlayId) {
    return GetPedHeadOverlayValue(this.handle, overlayId);
  }
  setHeadOverlayValue(overlayId, value) {
    const opacity = GetPedHeadOverlayData(this.handle, overlayId)[5];
    this.setHeadOverlay(overlayId, value, opacity);
  }
  getHeadOverlay(overlayId) {
    const [ret, overlayValue, colourType, firstColour, secondColour, overlayOpacity] = GetPedHeadOverlayData(
      this.handle,
      overlayId
    );
    if (!ret) {
      return null;
    }
    return [overlayValue, colourType, firstColour, secondColour, overlayOpacity];
  }
  setHeadOverlay(overlayId, index, opacity) {
    SetPedHeadOverlay(this.handle, overlayId, index, opacity);
  }
  getHeadOverlayOpacity(overlayId) {
    return GetPedHeadOverlayData(this.handle, overlayId)[5];
  }
  setHeadOverlayOpacity(overlayId, opacity) {
    this.setHeadOverlay(overlayId, this.getHeadOverlayValue(overlayId), opacity);
  }
  setHeadOverlayColor(overlayId, color) {
    let colorId = 0;
    if (overlayId === 1 || overlayId === 2 || overlayId === 10) {
      colorId = 1;
    } else if (overlayId === 5 || overlayId === 8) {
      colorId = 2;
    }
    SetPedHeadOverlayColor(this.handle, overlayId, colorId, color, color);
  }
  setHeadBlend(shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent = false) {
    SetPedHeadBlendData(
      this.handle,
      shapeFirstID,
      shapeSecondID,
      shapeThirdID,
      skinFirstID,
      skinSecondID,
      skinThirdID,
      shapeMix,
      skinMix,
      thirdMix,
      isParent
    );
  }
  getHeadBlend() {
    const buffer = new ArrayBuffer(80);
    if (!Citizen.invokeNative("0x2746BD9D88C5C5D0", this.handle, new Float32Array(buffer))) {
      return null;
    }
    const {
      0: shapeFirstId,
      2: shapeSecondId,
      4: shapeThirdId,
      6: skinFirstId,
      8: skinSecondId,
      10: skinThirdId,
      18: isParent
    } = new Uint32Array(buffer);
    const { 0: shapeMix, 2: skinMix, 4: thirdMix } = new Float32Array(buffer, 48);
    return [
      shapeFirstId,
      shapeSecondId,
      shapeThirdId,
      skinFirstId,
      skinSecondId,
      skinThirdId,
      shapeMix,
      skinMix,
      thirdMix,
      !!isParent
    ];
  }
  finalizeHeadBlend() {
    FinalizeHeadBlend(this.handle);
  }
  hasHeadBlendFinished() {
    return HasPedHeadBlendFinished(this.handle);
  }
};

// src/fivem/models/PedBone.ts
var PedBone = class extends EntityBone {
  static {
    __name(this, "PedBone");
  }
  constructor(owner, boneId) {
    super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
  }
  get IsValid() {
    return Ped.exists(this.Owner) && this.Index !== -1;
  }
};

// src/fivem/models/PedBoneCollection.ts
var PedBoneCollection = class extends EntityBoneCollection {
  static {
    __name(this, "PedBoneCollection");
  }
  constructor(owner) {
    super(owner);
  }
  get Core() {
    return new PedBone(this.owner, -1);
  }
  get LastDamaged() {
    const [, outBone] = GetPedLastDamageBone(this.owner.Handle, 0);
    return PedBone[outBone];
  }
  clearLastDamaged() {
    ClearPedLastDamageBone(this.owner.Handle);
  }
  getBone(boneIndex, boneName) {
    return new PedBone(
      this.owner,
      boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? "")
    );
  }
};

// src/fivem/models/Player.ts
var Player2 = class _Player {
  static {
    __name(this, "Player");
  }
  handle;
  ped;
  pvp = false;
  stateBagCookies = [];
  source;
  type = 4 /* Player */;
  static fromPedHandle(handle) {
    return new _Player(NetworkGetPlayerIndexFromPed(handle));
  }
  static fromServerId(serverId) {
    return new _Player(GetPlayerFromServerId(serverId));
  }
  /**
   * @param handle the player handle, or if on the server, their source.
   */
  constructor(handle = -1) {
    this.handle = handle;
    this.source = this.ServerId;
    if (!IsDuplicityVersion()) {
      this.PvPEnabled = true;
    }
  }
  get Handle() {
    return this.handle;
  }
  /**
   * This is here for compatibility with older versions.
   */
  get Character() {
    return this.Ped;
  }
  get Ped() {
    const handle = GetPlayerPed(this.handle);
    if (typeof this.ped === "undefined" || handle !== this.ped.Handle) {
      this.ped = new Ped(handle);
    }
    return this.ped;
  }
  get ServerId() {
    if (this.source) {
      return this.source;
    }
    return GetPlayerServerId(this.handle);
  }
  get State() {
    return cfx_default.Player(this.ServerId).state;
  }
  AddStateBagChangeHandler(keyFilter, handler) {
    const cookie = AddStateBagChangeHandler(keyFilter, `player:${this.ServerId}`, handler);
    this.stateBagCookies.push(cookie);
    return cookie;
  }
  /**
   * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
   * @param keyFilter the key to filter for or null
   * @param handler the function to handle the change
   * @returns a cookie to be used in RemoveStateBagChangeHandler
   */
  listenForStateChange(keyFilter, handler) {
    return this.AddStateBagChangeHandler(keyFilter, handler);
  }
  removeStateListener(tgtCookie) {
    this.stateBagCookies = this.stateBagCookies.filter((cookie) => {
      const isCookie = cookie === tgtCookie;
      if (isCookie) RemoveStateBagChangeHandler(cookie);
      return isCookie;
    });
  }
  removeAllStateListeners() {
    for (const cookie of this.stateBagCookies) {
      RemoveStateBagChangeHandler(cookie);
    }
  }
  get Name() {
    return GetPlayerName(this.handle);
  }
  get PvPEnabled() {
    return this.pvp;
  }
  set PvPEnabled(value) {
    NetworkSetFriendlyFireOption(value);
    SetCanAttackFriendly(this.Character.Handle, value, value);
    this.pvp = value;
  }
  get IsDead() {
    return IsPlayerDead(this.handle);
  }
  set DisableFiring(value) {
    DisablePlayerFiring(this.handle, value);
  }
  set Ghosted(isGhosted) {
    if (this.Handle === 128) {
      SetLocalPlayerAsGhost(isGhosted);
    } else {
      SetRelationshipToPlayer(this.handle, isGhosted);
    }
  }
  get EntityPlayerIsAimingAt() {
    const [entityHit, entity] = GetEntityPlayerIsFreeAimingAt(this.handle);
    if (entityHit) {
      return new BaseEntity(entity);
    }
    return null;
  }
  get StealthNoise() {
    return GetPlayerCurrentStealthNoise(this.handle);
  }
  get FakeWantedLevel() {
    return GetPlayerFakeWantedLevel(this.handle);
  }
  get PlayerGroup() {
    return GetPlayerGroup(this.handle);
  }
  get HasReserveParachute() {
    return GetPlayerHasReserveParachute(this.handle);
  }
  get HealthRechargeLimit() {
    return GetPlayerHealthRechargeLimit(this.handle);
  }
  get IsInvincible() {
    if (IsDuplicityVersion()) {
      return GetPlayerInvincible(this.handle);
    }
    return GetPlayerInvincible_2(this.handle);
  }
  get MaxArmor() {
    return GetPlayerMaxArmour(this.handle);
  }
  get ParachuteModelOverride() {
    return new Model(GetPlayerParachuteModelOverride(this.handle));
  }
  get ParachutePackTintIndex() {
    return GetPlayerParachutePackTintIndex(this.handle);
  }
  get ParachuteTintIndex() {
    return GetPlayerParachuteTintIndex(this.handle);
  }
  get ParachuteColorTrailColor() {
    return Color.fromArray(GetPlayerParachuteSmokeTrailColor(this.handle));
  }
  get ReserveParachuteModelOverride() {
    return new Model(GetPlayerReserveParachuteModelOverride(this.handle));
  }
  get ReserveParachuteTintIndex() {
    return GetPlayerReserveParachuteTintIndex(this.handle);
  }
  get PlayerRgbColour() {
    return Color.fromArray(GetPlayerRgbColour(this.handle));
  }
  get Stamina() {
    return GetPlayerSprintStaminaRemaining(this.handle);
  }
  get SprintTimeRemaining() {
    return GetPlayerSprintStaminaRemaining(this.handle);
  }
  /**
   * The players melee target?
   */
  get TargetEntity() {
    const [entityHit, entity] = GetPlayerTargetEntity(this.handle);
    if (entityHit) {
      return new BaseEntity(entity);
    }
    return null;
  }
  get Team() {
    return GetPlayerTeam(this.handle);
  }
  // GetPlayerUnderwaterTimeRemaining
  CanPedHearPlayer(ped) {
    return CanPedHearPlayer(this.handle, ped.Handle);
  }
};

// src/fivem/models/Prop.ts
var Prop = class _Prop extends BaseEntity {
  static {
    __name(this, "Prop");
  }
  static exists(prop) {
    return typeof prop !== "undefined" && prop.exists();
  }
  static fromHandle(handle) {
    return new _Prop(handle);
  }
  static fromNetworkId(networkId) {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new _Prop(NetworkGetEntityFromNetworkId(networkId));
  }
  type = 1 /* Prop */;
  constructor(handle) {
    super(handle);
  }
  exists() {
    return super.exists() && GetEntityType(this.handle) === 3;
  }
  placeOnGround() {
    PlaceObjectOnGroundProperly(this.handle);
  }
};

// src/fivem/models/Vehicle.ts
var Vehicle = class _Vehicle extends BaseEntity {
  static {
    __name(this, "Vehicle");
  }
  static getModelDisplayName(vehicleModel) {
    return GetDisplayNameFromVehicleModel(vehicleModel.Hash);
  }
  static getModelClass(vehicleModel) {
    return GetVehicleClassFromName(vehicleModel.Hash);
  }
  static getClassDisplayName(vehicleClass) {
    return `VEH_CLASS_${vehicleClass}`;
  }
  static exists(vehicle) {
    return typeof vehicle !== "undefined" && vehicle.exists();
  }
  static fromHandle(handle) {
    if (!DoesEntityExist(handle)) return null;
    return new _Vehicle(handle);
  }
  static fromNetworkId(networkId) {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new _Vehicle(NetworkGetEntityFromNetworkId(networkId));
  }
  _doors;
  _mods;
  _wheels;
  _windows;
  type = 2 /* Vehicle */;
  constructor(handle) {
    super(handle);
  }
  exists() {
    return super.exists() && GetEntityType(this.handle) === 2;
  }
  get DisplayName() {
    return _Vehicle.getModelDisplayName(this.Model);
  }
  get ClassDisplayName() {
    return _Vehicle.getClassDisplayName(this.ClassType);
  }
  get NumberPlate() {
    return GetVehicleNumberPlateText(this.handle);
  }
  set NumberPlate(value) {
    SetVehicleNumberPlateText(this.handle, value.substring(0, 8));
  }
  get ClassType() {
    return GetVehicleClass(this.handle);
  }
  get BodyHealth() {
    return GetVehicleBodyHealth(this.handle);
  }
  set BodyHealth(value) {
    SetVehicleBodyHealth(this.handle, value);
  }
  get EngineHealth() {
    return GetVehicleEngineHealth(this.handle);
  }
  set EngineHealth(value) {
    SetVehicleEngineHealth(this.handle, value);
  }
  get PetrolTankHealth() {
    return GetVehiclePetrolTankHealth(this.handle);
  }
  set PetrolTankHealth(value) {
    SetVehiclePetrolTankHealth(this.handle, value);
  }
  get FuelLevel() {
    return GetVehicleFuelLevel(this.handle);
  }
  set FuelLevel(value) {
    SetVehicleFuelLevel(this.handle, value);
  }
  get OilLevel() {
    return GetVehicleOilLevel(this.handle);
  }
  set OilLevel(value) {
    SetVehicleOilLevel(this.handle, value);
  }
  get Gravity() {
    return GetVehicleGravityAmount(this.handle);
  }
  set Gravity(value) {
    SetVehicleGravityAmount(this.handle, value);
  }
  get IsEngineRunning() {
    return GetIsVehicleEngineRunning(this.handle);
  }
  set IsEngineRunning(value) {
    SetVehicleEngineOn(this.handle, value, true, true);
  }
  get IsEngineStarting() {
    return IsVehicleEngineStarting(this.handle);
  }
  set IsEngineStarting(value) {
    if ((this.IsEngineStarting || this.IsEngineRunning) && value) {
      return;
    }
    SetVehicleEngineOn(this.handle, value, !value, true);
  }
  get IsRadioEnabled() {
    if (Game.Player.Character.isInVehicle(this)) {
      return IsPlayerVehicleRadioEnabled();
    }
    return false;
  }
  set IsRadioEnabled(value) {
    SetVehicleRadioEnabled(this.handle, value);
  }
  set RadioStation(value) {
    this.IsRadioEnabled = true;
    SetVehRadioStation(this.handle, value);
  }
  set Speed(value) {
    if (this.Model.IsTrain) {
      SetTrainSpeed(this.handle, value);
      SetTrainCruiseSpeed(this.handle, value);
    } else {
      SetVehicleForwardSpeed(this.handle, value);
    }
  }
  get WheelSpeed() {
    return GetVehicleDashboardSpeed(this.handle);
  }
  get EstimatedMaxSpeed() {
    return GetVehicleEstimatedMaxSpeed(this.handle);
  }
  get Acceleration() {
    return GetVehicleCurrentAcceleration(this.handle);
  }
  get CurrentRPM() {
    return GetVehicleCurrentRpm(this.handle);
  }
  set CurrentRPM(value) {
    SetVehicleCurrentRpm(this.handle, value);
  }
  get HighGear() {
    return GetVehicleHighGear(this.handle);
  }
  set HighGear(value) {
    SetVehicleHighGear(this.handle, value);
  }
  get CurrentGear() {
    return GetVehicleCurrentGear(this.handle);
  }
  get SteeringAngle() {
    return GetVehicleSteeringAngle(this.handle);
  }
  set SteeringAngle(value) {
    SetVehicleSteeringAngle(this.handle, value);
  }
  get SteeringScale() {
    return GetVehicleSteeringScale(this.handle);
  }
  set SteeringScale(value) {
    SetVehicleSteeringScale(this.handle, value);
  }
  get IsAlarmSet() {
    return IsVehicleAlarmSet(this.handle);
  }
  set IsAlarmSet(value) {
    SetVehicleAlarm(this.handle, value);
  }
  get IsAlarmSounding() {
    return IsVehicleAlarmActivated(this.handle);
  }
  get AlarmTimeLeft() {
    return GetVehicleAlarmTimeLeft(this.handle);
  }
  set AlarmTimeLeft(value) {
    SetVehicleAlarmTimeLeft(this.handle, value);
  }
  startAlarm() {
    StartVehicleAlarm(this.handle);
  }
  get IsSirenActive() {
    return IsVehicleSirenOn(this.handle);
  }
  set IsSirenActive(value) {
    SetVehicleSiren(this.handle, value);
  }
  set HasMutedSirens(value) {
    SetVehicleHasMutedSirens(this.handle, value);
  }
  soundHorn(duration, mode = Game.generateHash("HELDDOWN")) {
    StartVehicleHorn(this.handle, duration, mode, false);
  }
  get IsWanted() {
    return IsVehicleWanted(this.handle);
  }
  set IsWanted(value) {
    SetVehicleIsWanted(this.handle, value);
  }
  set ProvidesCover(value) {
    SetVehicleProvidesCover(this.handle, value);
  }
  set DropsMoneyOnExplosion(value) {
    SetVehicleCreatesMoneyPickupsWhenExploded(this.handle, value);
  }
  get PreviouslyOwnedByPlayer() {
    return IsVehiclePreviouslyOwnedByPlayer(this.handle);
  }
  set PreviouslyOwnedByPlayer(value) {
    SetVehicleHasBeenOwnedByPlayer(this.handle, value);
  }
  get NeedsToBeHotwired() {
    return IsVehicleNeedsToBeHotwired(this.handle);
  }
  set NeedsToBeHotwired(value) {
    SetVehicleNeedsToBeHotwired(this.handle, value);
  }
  get AreLightsOn() {
    return GetVehicleLightsState(this.handle)[0];
  }
  set AreLightsOn(value) {
    SetVehicleLights(this.handle, value ? 3 : 4);
  }
  get AreHighBeamsOn() {
    return GetVehicleLightsState(this.handle)[1];
  }
  set AreHighBeamsOn(value) {
    SetVehicleFullbeam(this.handle, value);
  }
  get IsInteriorLightOn() {
    return IsVehicleInteriorLightOn(this.handle);
  }
  set IsInteriorLightOn(value) {
    SetVehicleInteriorlight(this.handle, value);
  }
  get IsSearchLightOn() {
    return IsVehicleSearchlightOn(this.handle);
  }
  set IsSearchLightOn(value) {
    SetVehicleSearchlight(this.handle, value, false);
  }
  get IsTaxiLightOn() {
    return IsTaxiLightOn(this.handle);
  }
  set IsTaxiLightOn(value) {
    SetTaxiLights(this.handle, value);
  }
  get IsLeftIndicatorLightOn() {
    const val = GetVehicleIndicatorLights(this.handle);
    return val === 1 || val === 3;
  }
  set IsLeftIndicatorLightOn(value) {
    SetVehicleIndicatorLights(this.handle, 1, value);
  }
  get IsRightIndicatorLightOn() {
    return GetVehicleIndicatorLights(this.handle) >= 2;
  }
  set IsRightIndicatorLightOn(value) {
    SetVehicleIndicatorLights(this.handle, 0, value);
  }
  get IsHandbrakeForcedOn() {
    return GetVehicleHandbrake(this.handle);
  }
  set IsHandbrakeForcedOn(value) {
    SetVehicleHandbrake(this.handle, value);
  }
  set AreBrakeLightsOn(value) {
    SetVehicleBrakeLights(this.handle, value);
  }
  set LightsMultiplier(value) {
    SetVehicleLightMultiplier(this.handle, value);
  }
  set CanBeVisiblyDamaged(value) {
    SetVehicleCanBeVisiblyDamaged(this.handle, value);
  }
  set Strong(toggle) {
    SetVehicleStrong(this.handle, toggle);
  }
  set CanBreak(toggle) {
    SetVehicleCanBreak(this.handle, toggle);
  }
  get IsDamaged() {
    return IsVehicleDamaged(this.handle);
  }
  get IsDriveable() {
    return IsVehicleDriveable(this.handle, false);
  }
  set IsDriveable(value) {
    SetVehicleUndriveable(this.handle, !value);
  }
  get IsEngineOnFire() {
    return IsVehicleEngineOnFire(this.handle);
  }
  get HasRoof() {
    return DoesVehicleHaveRoof(this.handle);
  }
  get IsLeftHeadLightBroken() {
    return GetIsLeftVehicleHeadlightDamaged(this.handle);
  }
  get IsRightHeadLightBroken() {
    return GetIsRightVehicleHeadlightDamaged(this.handle);
  }
  get IsRearBumperBrokenOff() {
    return IsVehicleBumperBrokenOff(this.handle, false);
  }
  get IsFrontBumperBrokenOff() {
    return IsVehicleBumperBrokenOff(this.handle, true);
  }
  set IsAxlesStrong(value) {
    SetVehicleHasStrongAxles(this.handle, value);
  }
  set CanEngineDegrade(value) {
    SetVehicleEngineCanDegrade(this.handle, value);
  }
  set EnginePowerMultiplier(value) {
    SetVehicleEnginePowerMultiplier(this.handle, value);
  }
  set EngineTorqueMultiplier(value) {
    SetVehicleEngineTorqueMultiplier(this.handle, value);
  }
  get LandingGearState() {
    return GetLandingGearState(this.handle);
  }
  set LandingGearState(value) {
    SetVehicleLandingGear(this.handle, value);
  }
  get RoofState() {
    return GetConvertibleRoofState(this.handle);
  }
  set RoofState(value) {
    switch (value) {
      case 0 /* Closed */:
        RaiseConvertibleRoof(this.handle, true);
        RaiseConvertibleRoof(this.handle, false);
        break;
      case 3 /* Closing */:
        RaiseConvertibleRoof(this.handle, false);
        break;
      case 2 /* Opened */:
        LowerConvertibleRoof(this.handle, true);
        LowerConvertibleRoof(this.handle, false);
        break;
      case 1 /* Opening */:
        LowerConvertibleRoof(this.handle, false);
        break;
    }
  }
  get LockStatus() {
    return GetVehicleDoorLockStatus(this.handle);
  }
  set LockStatus(value) {
    SetVehicleDoorsLocked(this.handle, value);
  }
  get MaxBraking() {
    return GetVehicleMaxBraking(this.handle);
  }
  get MaxTraction() {
    return GetVehicleMaxTraction(this.handle);
  }
  get IsOnAllWheels() {
    return IsVehicleOnAllWheels(this.handle);
  }
  get IsStopped() {
    return IsVehicleStopped(this.handle);
  }
  get IsStoppedAtTrafficLights() {
    return IsVehicleStoppedAtTrafficLights(this.handle);
  }
  get IsStolen() {
    return IsVehicleStolen(this.handle);
  }
  set IsStolen(value) {
    SetVehicleIsStolen(this.handle, value);
  }
  get IsConvertible() {
    return IsVehicleAConvertible(this.handle, false);
  }
  set IsBurnoutForced(value) {
    SetVehicleBurnout(this.handle, value);
  }
  get IsInBurnout() {
    return IsVehicleInBurnout(this.handle);
  }
  get Driver() {
    return this.getPedOnSeat(-1 /* Driver */);
  }
  // while ghosted use entity index, it doesn't look like you can ghost
  // anything but players and vehicles
  get Ghosted() {
    return IsEntityGhostedToLocalPlayer(this.handle);
  }
  set GhostedForGhostPlayers(isGhostedForGhostPlayers) {
    NetworkSetEntityGhostedWithOwner(this.handle, isGhostedForGhostPlayers);
  }
  set Ghosted(isGhosted) {
    SetNetworkVehicleAsGhost(this.Handle, isGhosted);
  }
  static set GhostAlpha(alpha) {
    SetGhostedEntityAlpha(alpha);
  }
  get IsInGhostCollision() {
    return N_0x7ef7649b64d7ff10(this.handle);
  }
  static resetGhostAlpha() {
    ResetGhostedEntityAlpha();
  }
  get Occupants() {
    const driver = this.Driver;
    if (!Ped.exists(driver)) {
      return this.Passengers;
    }
    return [driver, ...this.Passengers];
  }
  get Passengers() {
    const passengerCount = this.PassengerCount;
    if (passengerCount === 0) {
      return [];
    }
    const result = [];
    for (let i = 0; i < this.PassengerCapacity; i++) {
      if (!this.isSeatFree(i)) {
        result.push(this.getPedOnSeat(i));
        if (result.length === passengerCount) {
          break;
        }
      }
    }
    return result;
  }
  get Doors() {
    if (!this._doors) {
      this._doors = new VehicleDoorCollection(this);
    }
    return this._doors;
  }
  get Mods() {
    if (!this._mods) {
      this._mods = new VehicleModCollection(this);
    }
    return this._mods;
  }
  get Wheels() {
    if (!this._wheels) {
      this._wheels = new VehicleWheelCollection(this);
    }
    return this._wheels;
  }
  get Windows() {
    if (!this._windows) {
      this._windows = new VehicleWindowCollection(this);
    }
    return this._windows;
  }
  extraExists(extra) {
    return DoesExtraExist(this.handle, extra);
  }
  isExtraOn(extra) {
    return this.extraExists(extra) ? IsVehicleExtraTurnedOn(this.handle, extra) : false;
  }
  toggleExtra(extra, toggle) {
    if (this.extraExists(extra)) {
      SetVehicleExtra(this.handle, extra, !toggle);
    }
  }
  getPedOnSeat(seat) {
    return new Ped(GetPedInVehicleSeat(this.handle, seat));
  }
  isSeatFree(seat) {
    return IsVehicleSeatFree(this.handle, seat);
  }
  wash() {
    this.DirtLevel = 0;
  }
  get DirtLevel() {
    return GetVehicleDirtLevel(this.handle);
  }
  set DirtLevel(value) {
    SetVehicleDirtLevel(this.handle, value);
  }
  placeOnGround() {
    SetVehicleOnGroundProperly(this.handle);
  }
  repair() {
    SetVehicleFixed(this.handle);
  }
  explode() {
    ExplodeVehicle(this.handle, true, false);
  }
  explodeNetworked() {
    NetworkExplodeVehicle(this.handle, true, false, false);
  }
  get CanTiresBurst() {
    return GetVehicleTyresCanBurst(this.handle);
  }
  set CanTiresBurst(value) {
    SetVehicleTyresCanBurst(this.handle, value);
  }
  set CanWheelsBreak(value) {
    SetVehicleWheelsCanBreak(this.handle, value);
  }
  set CanDeformWheels(value) {
    SetVehicleCanDeformWheels(this.handle, value);
  }
  get HasBombBay() {
    return this.Bones ? this.Bones.hasBone("door_hatch_1") && this.Bones.hasBone("door_hatch_r") : false;
  }
  openBombBay() {
    if (this.HasBombBay) {
      OpenBombBayDoors(this.handle);
    }
  }
  closeBombBay() {
    if (this.HasBombBay) {
      CloseBombBayDoors(this.handle);
    }
  }
  setHeliYawPitchRollMult(mult) {
    if (this.Model.IsHelicopter && mult >= 0 && mult <= 1) {
      SetHelicopterRollPitchYawMult(this.handle, mult);
    }
  }
  set TowingCraneRaisedAmount(value) {
    SetTowTruckCraneHeight(this.handle, value);
  }
  get TowedVehicle() {
    return new _Vehicle(GetEntityAttachedToTowTruck(this.handle));
  }
  towVehicle(vehicle, rear) {
    AttachVehicleToTowTruck(this.handle, vehicle.Handle, rear, 0, 0, 0);
  }
  detachFromTowTruck() {
    DetachVehicleFromAnyTowTruck(this.handle);
  }
  detachTowedVehicle() {
    const vehicle = this.TowedVehicle;
    if (_Vehicle.exists(this.TowedVehicle)) {
      DetachVehicleFromTowTruck(this.handle, vehicle.Handle);
    }
  }
  deform(position, damageAmount, radius) {
    SetVehicleDamage(this.handle, position.x, position.y, position.z, damageAmount, radius, false);
  }
  get PassengerCapacity() {
    return GetVehicleMaxNumberOfPassengers(this.handle);
  }
  get PassengerCount() {
    return GetVehicleNumberOfPassengers(this.handle);
  }
  set RespotTimer(time) {
    SetNetworkVehicleRespotTimer(this.NetworkId, time);
  }
  getHandlingFloat(fieldName) {
    return GetVehicleHandlingFloat(this.handle, "CHandlingData", fieldName);
  }
  setHandlingFloat(fieldName, value) {
    SetVehicleHandlingFloat(this.handle, "CHandlingData", fieldName, value);
  }
  getHandlingInt(fieldName) {
    return GetVehicleHandlingInt(this.handle, "CHandlingData", fieldName);
  }
  setHandlingInt(fieldName, value) {
    SetVehicleHandlingInt(this.handle, "CHandlingData", fieldName, Math.ceil(value));
  }
  getHandlingVector(fieldName) {
    return Vector3.fromArray(GetVehicleHandlingVector(this.handle, "CHandlingData", fieldName));
  }
};

// src/fivem/models/VehicleDoor.ts
var VehicleDoor = class {
  static {
    __name(this, "VehicleDoor");
  }
  _owner;
  _index;
  constructor(owner, index) {
    this._owner = owner;
    this._index = index;
  }
  get Index() {
    return this._index;
  }
  set Index(index) {
    this._index = index;
  }
  get AngleRatio() {
    return GetVehicleDoorAngleRatio(this._owner.Handle, this.Index);
  }
  set AngleRatio(value) {
    SetVehicleDoorControl(this._owner.Handle, this.Index, 1, value);
  }
  set CanBeBroken(value) {
    SetVehicleDoorBreakable(this._owner.Handle, this.Index, value);
  }
  get IsOpen() {
    return this.AngleRatio > 0;
  }
  get IsFullyOpen() {
    return IsVehicleDoorFullyOpen(this._owner.Handle, this.Index);
  }
  get IsBroken() {
    return IsVehicleDoorDamaged(this._owner.Handle, this.Index);
  }
  get Vehicle() {
    return this._owner;
  }
  open(loose = false, instantly = false) {
    SetVehicleDoorOpen(this._owner.Handle, this.Index, loose, instantly);
  }
  close(instantly = false) {
    SetVehicleDoorShut(this._owner.Handle, this.Index, instantly);
  }
  break(stayInTheWorld = true) {
    SetVehicleDoorBroken(this._owner.Handle, this.Index, stayInTheWorld);
  }
};

// src/fivem/models/VehicleDoorCollection.ts
var VehicleDoorCollection = class {
  static {
    __name(this, "VehicleDoorCollection");
  }
  _owner;
  _vehicleDoors = /* @__PURE__ */ new Map();
  constructor(owner) {
    this._owner = owner;
  }
  getDoors(index) {
    if (!this._vehicleDoors.has(index)) {
      this._vehicleDoors.set(index, new VehicleDoor(this._owner, index));
    }
    return this._vehicleDoors.get(index);
  }
  getAllDoors() {
    return Object.keys(VehicleDoorIndex).filter((key) => !isNaN(Number(key))).map((key) => {
      const index = Number(key);
      if (this.hasDoor(index)) {
        return this.getDoors(index);
      }
      return null;
    }).filter((d) => d);
  }
  openAllDoors(loose, instantly) {
    this.getAllDoors().forEach((door) => {
      door?.open(loose, instantly);
    });
  }
  closeAllDoors(instantly) {
    this.getAllDoors().forEach((door) => {
      door?.close(instantly);
    });
  }
  breakAllDoors(stayInTheWorld) {
    this.getAllDoors().forEach((door) => {
      door?.break(stayInTheWorld);
    });
  }
  hasDoor(index) {
    if (this._owner.Bones === void 0) return false;
    switch (index) {
      case 0 /* FrontLeftDoor */:
        return this._owner.Bones.hasBone("door_dside_f");
      case 1 /* FrontRightDoor */:
        return this._owner.Bones.hasBone("door_pside_f");
      case 2 /* BackLeftDoor */:
        return this._owner.Bones.hasBone("door_dside_r");
      case 3 /* BackRightDoor */:
        return this._owner.Bones.hasBone("door_pside_r");
      case 4 /* Hood */:
        return this._owner.Bones.hasBone("bonnet");
      case 5 /* Trunk */:
        return this._owner.Bones.hasBone("boot");
      default:
        return false;
    }
  }
};

// src/fivem/models/VehicleMod.ts
var VehicleMod = class {
  static {
    __name(this, "VehicleMod");
  }
  _owner;
  _modType;
  constructor(owner, modType) {
    this._owner = owner;
    this._modType = modType;
  }
  get ModType() {
    return this._modType;
  }
  set ModType(modType) {
    this._modType = modType;
  }
  get Index() {
    return GetVehicleMod(this._owner.Handle, this.ModType);
  }
  set Index(value) {
    SetVehicleMod(this._owner.Handle, this.ModType, value, this.Variation);
  }
  get Variation() {
    return GetVehicleModVariation(this._owner.Handle, this.ModType);
  }
  set Variation(value) {
    SetVehicleMod(this._owner.Handle, this.ModType, this.Index, value);
  }
  get ModCount() {
    return GetNumVehicleMods(this._owner.Handle, this.ModType);
  }
  get Vehicle() {
    return this._owner;
  }
  remove() {
    RemoveVehicleMod(this._owner.Handle, this.ModType);
  }
};

// src/fivem/models/VehicleToggleMod.ts
var VehicleToggleMod = class {
  static {
    __name(this, "VehicleToggleMod");
  }
  _owner;
  _modType;
  constructor(owner, modType) {
    this._owner = owner;
    this._modType = modType;
  }
  get ModType() {
    return this._modType;
  }
  set ModType(modType) {
    this._modType = modType;
  }
  get IsInstalled() {
    return IsToggleModOn(this._owner.Handle, this.ModType);
  }
  set IsInstalled(value) {
    ToggleVehicleMod(this._owner.Handle, this.ModType, value);
  }
  get LocalizedModTypeName() {
    return GetModSlotName(this._owner.Handle, this.ModType);
  }
  get Vehicle() {
    return this._owner;
  }
  remove() {
    RemoveVehicleMod(this._owner.Handle, this.ModType);
  }
};

// src/fivem/models/VehicleModCollection.ts
var VehicleModCollection = class {
  static {
    __name(this, "VehicleModCollection");
  }
  _owner;
  _vehicleMods = /* @__PURE__ */ new Map();
  _vehicleToggleMods = /* @__PURE__ */ new Map();
  constructor(owner) {
    this._owner = owner;
  }
  hasVehicleMod(type) {
    return GetNumVehicleMods(this._owner.Handle, type) > 0;
  }
  getMod(modType) {
    if (!this._vehicleMods.has(modType)) {
      this._vehicleMods.set(modType, new VehicleMod(this._owner, modType));
    }
    return this._vehicleMods.get(modType);
  }
  getToggleMod(modType) {
    if (!this._vehicleToggleMods.has(modType)) {
      this._vehicleToggleMods.set(modType, new VehicleToggleMod(this._owner, modType));
    }
    return this._vehicleToggleMods.get(modType);
  }
  getAllMods() {
    return Object.keys(VehicleModType).filter((key) => !isNaN(Number(key))).map((key) => {
      const index = Number(key);
      if (this.hasVehicleMod(index)) {
        return this.getMod(index);
      }
      return null;
    }).filter((m) => m);
  }
  get WheelType() {
    return GetVehicleWheelType(this._owner.Handle);
  }
  set WheelType(type) {
    SetVehicleWheelType(this._owner.Handle, type);
  }
  installModKit() {
    SetVehicleModKit(this._owner.Handle, 0);
  }
  // TODO: This should return always return a  number
  get Livery() {
    const modCount = this.getMod(48 /* Livery */)?.ModCount;
    if (modCount !== void 0 && modCount > 0) {
      return this.getMod(48 /* Livery */)?.Index;
    }
    return GetVehicleLivery(this._owner.Handle);
  }
  set Livery(value) {
    const mod = this.getMod(48 /* Livery */);
    if (mod !== void 0 && mod.ModCount > 0) {
      mod.Index = value;
    } else {
      SetVehicleLivery(this._owner.Handle, value);
    }
  }
  get LiveryCount() {
    const modCount = this.getMod(48 /* Livery */)?.ModCount;
    if (modCount !== void 0 && modCount > 0) {
      return modCount;
    }
    return GetVehicleLiveryCount(this._owner.Handle);
  }
  get WindowTint() {
    return GetVehicleWindowTint(this._owner.Handle);
  }
  set WindowTint(tint) {
    SetVehicleWindowTint(this._owner.Handle, tint);
  }
  get PrimaryColor() {
    return GetVehicleColours(this._owner.Handle)[0];
  }
  set PrimaryColor(color) {
    SetVehicleColours(this._owner.Handle, color, this.SecondaryColor);
  }
  get SecondaryColor() {
    return GetVehicleColours(this._owner.Handle)[1];
  }
  set SecondaryColor(color) {
    SetVehicleColours(this._owner.Handle, this.PrimaryColor, color);
  }
  get RimColor() {
    return GetVehicleExtraColours(this._owner.Handle)[1];
  }
  set RimColor(color) {
    SetVehicleExtraColours(this._owner.Handle, this.PearlescentColor, color);
  }
  get PearlescentColor() {
    return GetVehicleExtraColours(this._owner.Handle)[0];
  }
  set PearlescentColor(color) {
    SetVehicleExtraColours(this._owner.Handle, color, this.RimColor);
  }
  set TrimColor(color) {
    SetVehicleInteriorColour(this._owner.Handle, color);
  }
  set DashboardColor(color) {
    SetVehicleDashboardColour(this._owner.Handle, color);
  }
  setModColor1(paintType, color) {
    SetVehicleModColor_1(this._owner.Handle, paintType, color, 0);
  }
  setModColor2(paintType, color) {
    SetVehicleModColor_2(this._owner.Handle, paintType, color);
  }
  get ColorCombination() {
    return GetVehicleColourCombination(this._owner.Handle);
  }
  set ColorCombination(value) {
    SetVehicleColourCombination(this._owner.Handle, value);
  }
  get ColorCombinationCount() {
    return GetNumberOfVehicleColours(this._owner.Handle);
  }
  get TireSmokeColor() {
    const color = GetVehicleTyreSmokeColor(this._owner.Handle);
    return Color.fromRgb(color[0], color[1], color[2]);
  }
  set TireSmokeColor(color) {
    SetVehicleTyreSmokeColor(this._owner.Handle, color.r, color.g, color.b);
  }
  get NeonLightsColor() {
    const color = GetVehicleNeonLightsColour(this._owner.Handle);
    return Color.fromRgb(color[0], color[1], color[2]);
  }
  set NeonLightsColor(color) {
    SetVehicleNeonLightsColour(this._owner.Handle, color.r, color.g, color.b);
  }
  isNeonLightsOn(light) {
    return IsVehicleNeonLightEnabled(this._owner.Handle, light);
  }
  setNeonLightsOn(light, on2) {
    SetVehicleNeonLightEnabled(this._owner.Handle, light, on2);
  }
  areAllNeonLightsOn() {
    if (!this.HasAllNeonLights) {
      return false;
    }
    let on2 = true;
    Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
      if (!on2) {
        return;
      }
      on2 = this.isNeonLightsOn(Number(key));
    });
    return on2;
  }
  setAllNeonLightsOn(on2) {
    Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
      this.setNeonLightsOn(Number(key), on2);
    });
  }
  get HasAllNeonLights() {
    return Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).findIndex((light) => !this.hasNeonLight(Number(light))) === -1;
  }
  hasNeonLight(light) {
    if (this._owner.Bones === void 0) return false;
    switch (light) {
      case 0 /* Left */:
        return this._owner.Bones.hasBone("neon_l");
      case 1 /* Right */:
        return this._owner.Bones.hasBone("neon_r");
      case 2 /* Front */:
        return this._owner.Bones.hasBone("neon_f");
      case 3 /* Back */:
        return this._owner.Bones.hasBone("neon_b");
      default:
        return false;
    }
  }
  get CustomPrimaryColor() {
    const color = GetVehicleCustomPrimaryColour(this._owner.Handle);
    return Color.fromRgb(color[0], color[1], color[2]);
  }
  set CustomPrimaryColor(color) {
    SetVehicleCustomPrimaryColour(this._owner.Handle, color.r, color.g, color.b);
  }
  get CustomSecondaryColor() {
    const color = GetVehicleCustomSecondaryColour(this._owner.Handle);
    return Color.fromRgb(color[0], color[1], color[2]);
  }
  set CustomSecondaryColor(color) {
    SetVehicleCustomSecondaryColour(this._owner.Handle, color.r, color.g, color.b);
  }
  get IsPrimaryColorCustom() {
    return GetIsVehiclePrimaryColourCustom(this._owner.Handle);
  }
  get IsSecondaryColorCustom() {
    return GetIsVehicleSecondaryColourCustom(this._owner.Handle);
  }
  clearCustomPrimaryColor() {
    ClearVehicleCustomPrimaryColour(this._owner.Handle);
  }
  clearCustomSecondaryColor() {
    ClearVehicleCustomSecondaryColour(this._owner.Handle);
  }
  get LicensePlateStyle() {
    return GetVehicleNumberPlateTextIndex(this._owner.Handle);
  }
  set LicensePlateStyle(style) {
    SetVehicleNumberPlateTextIndex(this._owner.Handle, style);
  }
  get LicensePlateType() {
    return GetVehiclePlateType(this._owner.Handle);
  }
  get LicensePlate() {
    return GetVehicleNumberPlateText(this._owner.Handle);
  }
  set LicensePlate(text) {
    SetVehicleNumberPlateText(this._owner.Handle, text);
  }
};

// src/fivem/models/VehicleWheel.ts
var VehicleWheel = class {
  static {
    __name(this, "VehicleWheel");
  }
  _owner;
  _index;
  constructor(owner, index) {
    this._owner = owner;
    this._index = index;
  }
  get Index() {
    return this._index;
  }
  set Index(index) {
    this._index = index;
  }
  get Vehicle() {
    return this._owner;
  }
  burst() {
    SetVehicleTyreBurst(this._owner.Handle, this.Index, true, 1e3);
  }
  fix() {
    SetVehicleTyreFixed(this._owner.Handle, this.Index);
  }
};

// src/fivem/models/VehicleWheelCollection.ts
var VehicleWheelCollection = class {
  static {
    __name(this, "VehicleWheelCollection");
  }
  _owner;
  _vehicleWheels = /* @__PURE__ */ new Map();
  constructor(owner) {
    this._owner = owner;
  }
  getWheel(index) {
    if (!this._vehicleWheels.has(index)) {
      this._vehicleWheels.set(index, new VehicleWheel(this._owner, index));
    }
    return this._vehicleWheels.get(index);
  }
  getAllWheels() {
    return Object.keys(VehicleWheelIndex).filter((key) => !isNaN(Number(key))).map((key) => {
      const index = Number(key);
      if (this.hasWheel(index)) {
        return this.getWheel(index);
      }
      return null;
    }).filter((w) => w);
  }
  burstAllWheels() {
    this.getAllWheels().forEach((wheel) => {
      wheel?.burst();
    });
  }
  fixAllWheels() {
    this.getAllWheels().forEach((wheel) => {
      wheel?.fix();
    });
  }
  hasWheel(wheel) {
    if (this._owner.Bones === void 0) return false;
    switch (wheel) {
      case 0 /* FrontLeftWheel */:
        return this._owner.Bones.hasBone("wheel_lf");
      case 1 /* FrontRightWheel */:
        return this._owner.Bones.hasBone("wheel_rf");
      case 2 /* MidLeftWheel */:
        return this._owner.Bones.hasBone("wheel_lm");
      case 3 /* MidRightWheel */:
        return this._owner.Bones.hasBone("wheel_rm");
      case 4 /* RearLeftWheel */:
        return this._owner.Bones.hasBone("wheel_lr");
      case 5 /* RearRightWheel */:
        return this._owner.Bones.hasBone("wheel_rr");
      default:
        return false;
    }
  }
};

// src/fivem/models/VehicleWindow.ts
var VehicleWindow = class {
  static {
    __name(this, "VehicleWindow");
  }
  _owner;
  _index;
  constructor(owner, index) {
    this._owner = owner;
    this._index = index;
  }
  get Index() {
    return this._index;
  }
  set Index(index) {
    this._index = index;
  }
  get IsIntact() {
    return IsVehicleWindowIntact(this._owner.Handle, this.Index);
  }
  get Vehicle() {
    return this._owner;
  }
  repair() {
    FixVehicleWindow(this._owner.Handle, this.Index);
  }
  smash() {
    SmashVehicleWindow(this._owner.Handle, this.Index);
  }
  rollUp() {
    RollUpWindow(this._owner.Handle, this.Index);
  }
  rollDown() {
    RollDownWindow(this._owner.Handle, this.Index);
  }
  remove() {
    RemoveVehicleWindow(this._owner.Handle, this.Index);
  }
};

// src/fivem/models/VehicleWindowCollection.ts
var VehicleWindowCollection = class {
  static {
    __name(this, "VehicleWindowCollection");
  }
  _owner;
  _vehicleWindows = /* @__PURE__ */ new Map();
  constructor(owner) {
    this._owner = owner;
  }
  getWindow(index) {
    const window = this._vehicleWindows.get(index);
    if (!window) {
      const vehicleWindow = new VehicleWindow(this._owner, index);
      this._vehicleWindows.set(index, vehicleWindow);
      return vehicleWindow;
    }
    return window;
  }
  getAllWindows() {
    return Object.keys(VehicleWindowIndex).filter((key) => !isNaN(Number(key))).map((key) => {
      const index = Number(key);
      if (this.hasWindow(index)) {
        return this.getWindow(index);
      }
      return null;
    }).filter((w) => w);
  }
  get AreAllWindowsIntact() {
    return AreAllVehicleWindowsIntact(this._owner.Handle);
  }
  rollDownAllWindows() {
    this.getAllWindows().forEach((window) => {
      window?.rollDown();
    });
  }
  rollUpAllWindows() {
    this.getAllWindows().forEach((window) => {
      window?.rollUp();
    });
  }
  hasWindow(window) {
    switch (window) {
      case 0 /* FrontLeftWindow */:
        return this._owner.Bones.hasBone("window_lf");
      case 1 /* FrontRightWindow */:
        return this._owner.Bones.hasBone("window_rf");
      case 2 /* BackLeftWindow */:
        return this._owner.Bones.hasBone("window_lr");
      case 3 /* BackRightWindow */:
        return this._owner.Bones.hasBone("window_rr");
      default:
        return false;
    }
  }
};

// src/fivem/Game.ts
var Game = class _Game {
  static {
    __name(this, "Game");
  }
  static useHashCache = true;
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
    if (!_Game.useHashCache) {
      return GetHashKey(input);
    }
    let hash = _Game.hashCache.get(input);
    if (!hash) {
      hash = GetHashKey(input);
      _Game.hashCache.set(input, hash);
    }
    return hash;
  }
  static setLocalPlayerGhosted(isGhosted, inverseGhost) {
    SetLocalPlayerAsGhost(isGhosted, inverseGhost);
  }
  static setGhostAlpha(alpha) {
    SetGhostedEntityAlpha(alpha);
  }
  static resetGhostAlpha() {
    ResetGhostedEntityAlpha();
  }
  static setGhostingInverted(isInverted) {
    N_0xd7b6c73cad419bcf(isInverted);
  }
  /**
   * Gets the game language
   */
  static get Language() {
    return GetUiLanguageId();
  }
  /**
   * Gets how many milliseconds the game has been open this session
   */
  static get GameTime() {
    return GetGameTimer();
  }
  /**
   * Sets the time scale of the Game.
   *
   * @param time The time scale, only accepts values between 0.0 and 1.0
   */
  static set TimeScale(time) {
    SetTimeScale(time <= 1 && time >= 0 ? time : 1);
  }
  /**
   * Gets the total amount of frames rendered in this session
   */
  static get FrameCount() {
    return GetFrameCount();
  }
  /**
   * Gets the current frame rate per second
   */
  static get FPS() {
    return 1 / _Game.LastFrameTime;
  }
  /**
   * Gets the time it currently takes to render a frame, in seconds;
   */
  static get LastFrameTime() {
    return GetFrameTime();
  }
  /**
   * Get the local player's Player object.
   */
  static get Player() {
    const handle = PlayerId();
    if (_Game.cachedPlayer === void 0 || handle !== _Game.cachedPlayer.Handle) {
      _Game.cachedPlayer = new Player2(handle);
    }
    return _Game.cachedPlayer;
  }
  /**
   * Get the local player character's Ped object.
   * @returns A local player's character.
   */
  static get PlayerPed() {
    return _Game.Player.Character;
  }
  /**
   * Get an iterable list of players currently on server.
   * @returns Iterable list of Player objects.
   */
  static *playerList(excludeLocalPlayer = false) {
    const localPlayer = _Game.Player;
    for (const id of GetActivePlayers()) {
      if (excludeLocalPlayer && localPlayer.Handle === id) {
        continue;
      }
      yield new Player2(id);
    }
  }
  /**
   * Get whether PvP is enabled.
   * @returns True if enabled.
   */
  static get PlayerVersusPlayer() {
    return _Game.Player.PvPEnabled;
  }
  /**
   * Set whether PvP is enabled.
   */
  static set PlayerVersusPlayer(value) {
    _Game.Player.PvPEnabled = value;
  }
  /**
   * Get the maximum wanted level.
   */
  static get MaxWantedLevel() {
    return GetMaxWantedLevel();
  }
  /**
   * Set the maximum wanted level the local client can get.
   */
  static set MaxWantedLevel(value) {
    if (value < 0) {
      value = 0;
    } else if (value > 5) {
      value = 5;
    }
    SetMaxWantedLevel(value);
  }
  /**
   * Set the multiplier of the wanted level.
   */
  static set WantedMultiplier(value) {
    SetWantedLevelMultiplier(value);
  }
  /**
   * Set whether police blips should show on minimap.
   */
  static set ShowPoliceBlipsOnRadar(toggle) {
    SetPoliceRadarBlips(toggle);
  }
  /**
   * Get if nightvision is active.
   */
  static get Nightvision() {
    return IsNightvisionActive();
  }
  /**
   * Toggle nightvision.
   */
  static set Nightvision(toggle) {
    SetNightvision(toggle);
  }
  /**
   * Get if thermal (heat) vision is active.
   */
  static get ThermalVision() {
    return IsSeethroughActive();
  }
  /**
   * Toggle thermal (heat) vision.
   */
  static set ThermalVision(toggle) {
    SetSeethrough(toggle);
  }
  static get IsMissionActive() {
    return GetMissionFlag();
  }
  static set IsMissionActive(toggle) {
    SetMissionFlag(toggle);
  }
  static get IsRandomEventActive() {
    return GetRandomEventFlag();
  }
  static set IsRandomEventActive(toggle) {
    SetRandomEventFlag(toggle);
  }
  static get IsCutsceneActive() {
    return IsCutsceneActive();
  }
  /**
   * Is a waypoint set on the map.
   */
  static get IsWaypointActive() {
    return IsWaypointActive();
  }
  /**
   * Is the player in the pause menu (ESC).
   */
  static get IsPaused() {
    return IsPauseMenuActive();
  }
  /**
   * Force enable pause menu.
   */
  static set IsPaused(toggle) {
    SetPauseMenuActive(toggle);
  }
  /**
   * Get if a loading screen is active.
   */
  static get IsLoading() {
    return GetIsLoadingScreenActive();
  }
  /**
   * Get current input mode.
   * @returns InputMode: Mouse & Keyboard or GamePad.
   */
  static get CurrentInputMode() {
    return IsInputDisabled(2) ? 0 /* MouseAndKeyboard */ : 2 /* GamePad */;
  }
  /**
   * Gets the player's current radio station.
   *
   * @returns A radio station.
   */
  static get RadioStation() {
    const stationName = GetPlayerRadioStationName();
    return RadioStation[stationName];
  }
  /**
   * Sets the player's radio station.
   *
   * @param station A radio station.
   */
  static set RadioStation(station) {
    SetRadioToStationName(station);
  }
  /**
   * Check whether a control is currently pressed.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlPressed(inputMode, control) {
    return IsControlPressed(inputMode, Number(control));
  }
  /**
   * Check whether a disabled control is currently pressed.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isDisabledControlPressed(inputMode, control) {
    return IsDisabledControlPressed(inputMode, Number(control));
  }
  /**
   * Check whether a control has been pressed since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlJustPressed(inputMode, control) {
    return IsControlJustPressed(inputMode, Number(control));
  }
  /**
   * Check whether a disabled control has been pressed since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isDisabledControlJustPressed(inputMode, control) {
    return IsDisabledControlJustPressed(inputMode, Number(control));
  }
  /**
   * Check whether a control is being released.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlReleased(inputMode, control) {
    return IsControlReleased(inputMode, Number(control));
  }
  /**
   * Check whether a disabled control is being released.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isDisabledControlReleased(inputMode, control) {
    return IsDisabledControlReleased(inputMode, Number(control));
  }
  /**
   * Check whether a control has been released since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlJustReleased(inputMode, control) {
    return IsControlJustReleased(inputMode, Number(control));
  }
  /**
   * Check whether a disabled control has been released since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isDisabledControlJustReleased(inputMode, control) {
    return IsDisabledControlJustReleased(inputMode, Number(control));
  }
  /**
   * Check whether a control is enabled this frame.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlEnabled(inputMode, control) {
    return IsControlEnabled(inputMode, Number(control));
  }
  /**
   * Makes the Game Engine respond to the given Control this frame
   *
   * @param inputMode InputMode
   * @param control Control
   */
  static enableControlThisFrame(inputMode, control) {
    EnableControlAction(inputMode, Number(control), true);
  }
  /**
   * Makes the Game Engine ignore the given Control this frame
   *
   * @param inputMode InputMode
   * @param control Control
   */
  static disableControlThisFrame(inputMode, control) {
    DisableControlAction(inputMode, Number(control), true);
  }
  /**
   * Disables all Controls this frame.
   *
   * @param inputMode InputMode
   */
  static disableAllControlsThisFrame(inputMode) {
    DisableAllControlActions(inputMode);
  }
  /**
   * Enables all Controls this frame.
   *
   * @param inputMode InputMode
   */
  static enableAllControlsThisFrame(inputMode) {
    EnableAllControlActions(inputMode);
  }
  /**
   * Get an entity object from an entity handle.
   *
   * @param handle Handle of entity
   * @returns A Ped, Vehicle or Prop object. `undefined` if entity handle doesn't exist.
   */
  static entityFromHandle(handle) {
    switch (GetEntityType(handle)) {
      case 1:
        return new Ped(handle);
      case 2:
        return new Vehicle(handle);
      case 3:
        return new Prop(handle);
    }
    return null;
  }
  /**
   * Play a sound. Same as Audio.playSound
   *
   * @param soundFile Name of sound
   * @param soundSet The set where the sound is in
   */
  static playSound(soundFile, soundSet) {
    Audio.playSound(soundFile, soundSet);
  }
  /**
   * Play music. Same as Audio.playSound
   *
   * @param musicFile Music file.
   */
  static playMusic(musicFile) {
    Audio.playMusic(musicFile);
  }
  /**
   * Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound
   *
   * @param musicFile (optional) Music file.
   */
  static stopMusic(musicFile) {
    Audio.stopMusic(musicFile);
  }
  /**
   * Determines the game language files contain a entry for the specified GXT key
   *
   * @param entry - The GXT key.
   * @returns true if GXT entry exists; otherwise, false
   * @constructor
   */
  static doesGXTEntryExist(entry) {
    if (typeof entry === "number") {
      return DoesTextLabelExist(entry.toString());
    }
    return DoesTextLabelExist(entry);
  }
  /**
   * Returns a localised string from the games language files with a specified GXT key
   *
   * @param entry - The GXT key.
   * @returns The localised string if the key exists; otherwise, empty string
   */
  static getGXTEntry(entry) {
    return _Game.doesGXTEntryExist(entry) ? GetLabelText(entry.toString()) : "";
  }
  /**
   * Sets the max boundry the local player can go to before they get killed
   *
   * @param vec - the max bounds for the local player
   */
  set ExtendWorldBoundry(vec) {
    ExtendWorldBoundaryForPlayer(vec.x, vec.y, vec.z);
  }
  get LastVehicle() {
    const vehicle = GetPlayersLastVehicle();
    if (vehicle === 0) return null;
    return new Vehicle(vehicle);
  }
  static getWaypointBlip() {
    if (!_Game.IsWaypointActive) return null;
    for (let handle = GetBlipInfoIdIterator(), blip = GetFirstBlipInfoId(handle); DoesBlipExist(handle); blip = GetNextBlipInfoId(handle)) {
      if (GetBlipInfoIdType(blip) === 4) return new Blip(blip);
    }
    return null;
  }
  static removeWaypoint() {
    SetWaypointOff();
  }
  static get WaypointPosition() {
    const waypointBlip = _Game.getWaypointBlip();
    if (waypointBlip == null) {
      return Vector3.Zero;
    }
    const position = waypointBlip.Position;
    position.z = _Game.getGroundHeight(position);
    return position;
  }
  static set WaypointPosition(position) {
    SetNewWaypoint(position.x, position.y);
  }
  static getGroundHeight(position) {
    RequestCollisionAtCoord(position.x, position.z, 1e3);
    return GetGroundZFor_3dCoord(position.x, position.y, 1e3, false)[1];
  }
  static cachedPlayer;
};

// src/fivem/GameplayCamera.ts
var GameplayCamera = class _GameplayCamera {
  static {
    __name(this, "GameplayCamera");
  }
  /**
   * Get the world position of gameplay camera.
   */
  static get Position() {
    return Vector3.fromArray(GetGameplayCamCoords());
  }
  /**
   * Get the rotation of gameplay camera.
   */
  static get Rotation() {
    return Vector3.fromArray(GetGameplayCamRot(2));
  }
  /**
   * Get the forward vector of gameplay camera.
   */
  static get ForwardVector() {
    const rotation = Vector3.multiply(_GameplayCamera.Rotation, Math.PI / 180);
    return Vector3.normalize(
      new Vector3(
        -Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.sin(rotation.x)
      )
    );
  }
  /**
   * Get the pitch of the gameplay camera relative to player.
   */
  static get RelativePitch() {
    return GetGameplayCamRelativePitch();
  }
  /**
   * Set gameplay camera pitch relative to player.
   */
  static set RelativePitch(pitch) {
    SetGameplayCamRelativePitch(pitch, 1);
  }
  /**
   * Get heading of gameplay camera.
   */
  static get RelativeHeading() {
    return GetGameplayCamRelativeHeading();
  }
  /**
   * Get heading of gameplay camera.
   */
  static set RelativeHeading(heading) {
    SetGameplayCamRelativeHeading(heading);
  }
  /**
   * Clamps the yaw of the gameplay camera.
   *
   * @param min The minimum yaw value.
   * @param max The maximum yaw value.
   */
  static clampYaw(min, max) {
    ClampGameplayCamYaw(min, max);
  }
  /**
   * Clamps the pitch of the gameplay camera.
   *
   * @param min The minimum pitch value.
   * @param max The maximum pitch value.
   */
  static clampPitch(min, max) {
    ClampGameplayCamPitch(min, max);
  }
  /**
   * Gets zoom of the gameplay camera.
   */
  static get Zoom() {
    return GetGameplayCamZoom();
  }
  /**
   * Gets field of view of the gameplay camera.
   */
  static get FieldOfView() {
    return GetGameplayCamFov();
  }
  /**
   * Gets a value indicating whether the gameplay camera is rendering.
   *
   * @returns true if the gameplay camera is rendering; otherwise, false.
   */
  static get IsRendering() {
    return IsGameplayCamRendering();
  }
  /**
   * Gets a value indicating whether the aiming camera is rendering.
   *
   * @returns true if the aiming camera is rendering; otherwise, false.
   */
  static get IsAimCamActive() {
    return IsAimCamActive();
  }
  /**
   * Gets a value indicating whether the first person aiming camera is rendering.
   *
   * @returns true if the first person aiming camera is rendering; otherwise, false.
   */
  static get IsFirstPersonAimCamActive() {
    return IsFirstPersonAimCamActive();
  }
  /**
   * Gets a value indicating whether the gameplay camera is looking behind.
   *
   * @returns true if the gameplay camera is looking behind; otherwise, false.
   */
  static get IsLookingBehind() {
    return IsGameplayCamLookingBehind();
  }
  /**
   * Shakes the gameplay camera.
   *
   * @param shakeType Type of the shake to apply.
   * @param amplitude The amplitude of the shaking.
   */
  static shake(shakeType, amplitude) {
    ShakeGameplayCam(Camera.shakeNames[Number(shakeType)], amplitude);
  }
  /**
   * Stops shaking the gameplay camera.
   */
  static stopShaking() {
    StopGameplayCamShaking(true);
  }
  /**
   * Gets a value indicating whether the gameplay camera is shaking.
   *
   * @returns true if the gameplay camera is shaking; otherwise, false.
   */
  static get IsShaking() {
    return IsGameplayCamShaking();
  }
  /**
   * Sets the shake amplitude for the gameplay camera.
   */
  static set ShakeAmplitude(value) {
    SetGameplayCamShakeAmplitude(value);
  }
};

// src/fivem/Camera.ts
var Camera = class _Camera {
  static {
    __name(this, "Camera");
  }
  static shakeNames = [
    "HAND_SHAKE",
    "SMALL_EXPLOSION_SHAKE",
    "MEDIUM_EXPLOSION_SHAKE",
    "LARGE_EXPLOSION_SHAKE",
    "JOLT_SHAKE",
    "VIBRATE_SHAKE",
    "ROAD_VIBRATION_SHAKE",
    "DRUNK_SHAKE",
    "SKY_DIVING_SHAKE",
    "FAMILY5_DRUG_TRIP_SHAKE",
    "DEATH_FAIL_IN_EFFECT_SHAKE"
  ];
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  get Handle() {
    return this.handle;
  }
  get IsActive() {
    return IsCamActive(this.handle);
  }
  set IsActive(active) {
    SetCamActive(this.handle, active);
  }
  get Position() {
    return Vector3.fromArray(GetCamCoord(this.handle));
  }
  set Position(position) {
    SetCamCoord(this.handle, position.x, position.y, position.z);
  }
  get Rotation() {
    return Vector3.fromArray(GetCamRot(this.handle, 2));
  }
  set Rotation(rotation) {
    SetCamRot(this.handle, rotation.x, rotation.y, rotation.z, 2);
  }
  // public get Matrix() : Matrix {}
  /**
   * Gets the direction the camera is facing. Same as ForwardVector
   */
  get Direction() {
    return this.ForwardVector;
  }
  set Direction(direction) {
    const dir = direction.normalize();
    const vec1 = new Vector3(dir.x, dir.y, 0);
    const vec2 = new Vector3(dir.z, vec1.distanceSquared(vec1), 0);
    const vec3 = vec2.normalize();
    this.Rotation = new Vector3(
      Math.atan2(vec3.x, vec3.y) * 57.29577951308232,
      this.Rotation.y,
      Math.atan2(dir.x, dir.y) * -57.29577951308232
    );
  }
  //   public get UpVector() : Vector3 {
  //       return Matrix.Up;
  //   }
  get ForwardVector() {
    const rotation = Vector3.multiply(GameplayCamera.Rotation, Math.PI / 180);
    const normalized = Vector3.normalize(
      new Vector3(
        -Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.sin(rotation.x)
      )
    );
    return new Vector3(normalized.x, normalized.y, normalized.z);
  }
  //   public get RightVector() : Vector3 {
  //       return Matrix.Right;
  //   }
  // public Vector3 GetOffsetPosition(Vector3 offset) {
  //     return Vector3.TransformCoordinate(offset, Matrix);
  // }
  // public Vector3 GetPositionOffset(Vector3 worldCoords) {
  //     return Vector3.TransformCoordinate(worldCoords, Matrix.Invert(Matrix));
  // }
  get FieldOfView() {
    return GetCamFov(this.handle);
  }
  set FieldOfView(fieldOfView) {
    SetCamFov(this.handle, fieldOfView);
  }
  get NearClip() {
    return GetCamNearClip(this.handle);
  }
  set NearClip(nearClip) {
    SetCamNearClip(this.handle, nearClip);
  }
  get FarClip() {
    return GetCamFarClip(this.handle);
  }
  set FarClip(farClip) {
    SetCamFarClip(this.handle, farClip);
  }
  set NearDepthOfField(nearDepthOfField) {
    SetCamNearDof(this.handle, nearDepthOfField);
  }
  get FarDepthOfField() {
    return GetCamFarDof(this.handle);
  }
  set FarDepthOfField(farDepthOfField) {
    SetCamFarDof(this.handle, farDepthOfField);
  }
  set DepthOfFieldStrength(strength) {
    SetCamDofStrength(this.handle, strength);
  }
  set MotionBlurStrength(strength) {
    SetCamMotionBlurStrength(this.handle, strength);
  }
  shake(shakeType, amplitude) {
    ShakeCam(this.handle, _Camera.shakeNames[Number(shakeType)], amplitude);
  }
  stopShaking() {
    StopCamShaking(this.handle, true);
  }
  get IsShaking() {
    return IsCamShaking(this.handle);
  }
  set ShakeAmplitude(amplitude) {
    SetCamShakeAmplitude(this.handle, amplitude);
  }
  async playAnim(animName, animDict, position, rotation) {
    await LoadAnimDict(animDict);
    PlayCamAnim(
      this.handle,
      animName,
      animDict,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      false,
      2
    );
    RemoveAnimDict(animDict);
  }
  pointAt(target, offset = new Vector3(0, 0, 0)) {
    if (target instanceof BaseEntity) {
      PointCamAtEntity(this.handle, target.Handle, offset.x, offset.y, offset.z, true);
    } else if (target instanceof PedBone) {
      PointCamAtPedBone(this.handle, target.Owner.Handle, target.Index, offset.x, offset.y, offset.z, true);
    } else {
      PointCamAtCoord(this.handle, target.x, target.y, target.z);
    }
  }
  stopPointing() {
    StopCamPointing(this.handle);
  }
  interpTo(to, duration, easePosition, easeRotation) {
    SetCamActiveWithInterp(to.handle, this.handle, duration, Number(easePosition), Number(easeRotation));
  }
  get IsInterpolating() {
    return IsCamInterpolating(this.handle);
  }
  attachTo(object, offset) {
    if (object instanceof BaseEntity) {
      AttachCamToEntity(this.handle, object.Handle, offset.x, offset.y, offset.z, true);
    } else if (object instanceof PedBone) {
      AttachCamToPedBone(this.handle, object.Owner.Handle, object.Index, offset.x, offset.y, offset.z, true);
    }
  }
  detach() {
    DetachCam(this.handle);
  }
  delete() {
    DestroyCam(this.handle, false);
  }
  exists() {
    return DoesCamExist(this.handle);
  }
};

// src/fivem/Pickup.ts
var Pickup = class {
  static {
    __name(this, "Pickup");
  }
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  get Position() {
    return Vector3.fromArray(GetPickupCoords(this.handle));
  }
  get IsCollected() {
    return HasPickupBeenCollected(this.handle);
  }
  delete() {
    RemovePickup(this.handle);
  }
  exists() {
    return DoesPickupExist(this.handle);
  }
};

// src/fivem/Raycast.ts
var RaycastResult = class {
  static {
    __name(this, "RaycastResult");
  }
  /**
   * Return the entity that was hit.
   */
  get HitEntity() {
    return this.entityHandleArg;
  }
  /**
   * Get the position of the entity that was hit.
   */
  get HitPosition() {
    return this.hitPositionArg;
  }
  /**
   * Return the vector perpendicular to the tangent plane.
   */
  get SurfaceNormal() {
    return this.surfaceNormalArg;
  }
  /**
   * Whether we hit anything.
   */
  get DidHit() {
    return this.hitSomethingArg;
  }
  /**
   * Whether the entity hit exists.
   */
  get DidHitEntity() {
    return this.entityHandleArg !== null && this.entityHandleArg.Handle !== 0;
  }
  /**
   * Material type that was hit.
   */
  get Material() {
    return this.materialArg;
  }
  /**
   * Raycast result's handle.
   */
  get Result() {
    return this.result;
  }
  /**
   * @returns if the shape test handle was already discarded
   */
  get WasDiscarded() {
    return this.result === 0 /* Discarded */;
  }
  /**
   * NOTE: These will not be updated unless polled by `resolve` or the shape
   * test is synchronous
   * @returns if the raycast has been marked as ready by the engine
   */
  get HasResolved() {
    return this.result === 2 /* Ready */;
  }
  applyShapeTestResults() {
    const [result, hit, endCoords, surfaceNormal, materialHash, entityHit] = GetShapeTestResultIncludingMaterial(
      this.handle
    );
    this.result = result;
    if (!this.HasResolved || this.WasDiscarded) return;
    this.hitSomethingArg = hit;
    this.hitPositionArg = Vector3.fromArray(endCoords);
    this.surfaceNormalArg = Vector3.fromArray(surfaceNormal);
    this.materialArg = materialHash;
    if (entityHit !== 0) {
      this.entityHandleArg = Game.entityFromHandle(entityHit);
    }
  }
  handle;
  hitPositionArg;
  hitSomethingArg;
  entityHandleArg;
  surfaceNormalArg;
  materialArg;
  result;
  /**
   * Create a RaycastResult object that gets the results from a StartShapeTestRay()
   *
   * @param handle The handle returned from StartShapeTestRay()
   */
  constructor(handle) {
    this.handle = handle;
    this.hitPositionArg = new Vector3(0, 0, 0);
    this.hitSomethingArg = false;
    this.entityHandleArg = null;
    this.surfaceNormalArg = new Vector3(0, 0, 0);
    this.materialArg = 0;
    this.result = 1 /* NotReady */;
  }
};
var SynchronousRaycastResult = class extends RaycastResult {
  static {
    __name(this, "SynchronousRaycastResult");
  }
  constructor(handle) {
    super(handle);
    this.applyShapeTestResults();
  }
};
var AsynchronousRaycastResult = class extends RaycastResult {
  static {
    __name(this, "AsynchronousRaycastResult");
  }
  /**
   * waits until the shape test handle is valid and then sets the expected
   * values on the RaycastResult
   */
  async resolve(timeoutInMs = 1e3) {
    const timeout = GetGameTimer() + timeoutInMs;
    while (!this.HasResolved && !this.WasDiscarded) {
      this.applyShapeTestResults();
      if (timeout < GetGameTimer()) break;
      await Delay(0);
    }
  }
};

// src/fivem/Rope.ts
var Rope = class {
  static {
    __name(this, "Rope");
  }
  /**
   * Id of rope entity.
   */
  handle;
  /**
   * Create a rope object based on an existing rope in the world.
   *
   * @param handle entity Id of rope.
   */
  constructor(handle) {
    this.handle = handle;
  }
  get Handle() {
    return this.handle;
  }
  /**
   * Get the length of the rope.
   *
   * @returns The rope length.
   */
  get Length() {
    return GetRopeLength(this.handle);
  }
  /**
   * Sets the length of the rope.
   *
   * @param length Desired new length of rope.
   */
  set Length(length) {
    RopeForceLength(this.handle, length);
  }
  /**
   * Get the number of vertices on the rope.
   *
   * @returns Returns the number of vertices.
   */
  get VertexCount() {
    return GetRopeVertexCount(this.handle);
  }
  /**
   * Resets the length of the rope to it's length upon object creation or a length of 1.
   *
   * @param reset Whether to reset the length to it's original length or 1.
   */
  resetLength(reset) {
    RopeResetLength(this.handle, reset ? 1 : this.Length);
  }
  /**
   * Activates world physics on the rope object.
   */
  activatePhysics() {
    ActivatePhysics(this.handle);
  }
  /**
   * Attach the rope to an entity.
   *
   * @param entity Entity to attach the rope to.
   * @param position Location where the rope is to be attached.
   */
  attachEntity(entity, position) {
    AttachRopeToEntity(this.handle, entity.Handle, position.x, position.y, position.z, false);
  }
  /**
   * Attach the rope between two entities at given locations on the entities.
   *
   * @param entityOne The first entity to attach to.
   * @param positionOne Where on the first entity to attach the rope to.
   * @param entityTwo The second entity to attach to.
   * @param positionTwo Where on the second entity to attach the rope to.
   * @param length The desired length of the rope between the two entities.
   */
  attachEntities(entityOne, positionOne, entityTwo, positionTwo, length) {
    AttachEntitiesToRope(
      this.handle,
      entityOne.Handle,
      entityTwo.Handle,
      positionOne.x,
      positionOne.y,
      positionOne.z,
      positionTwo.x,
      positionTwo.y,
      positionTwo.z,
      length,
      false,
      false,
      "",
      ""
    );
  }
  /**
   * Detach the rope from an entity.
   *
   * @param entity Entity to detach the rope from.
   */
  detachEntity(entity) {
    DetachRopeFromEntity(this.handle, entity.Handle);
  }
  /**
   * Pin a vertex of the rope to a certain location.
   *
   * @param vertex Vertex to pin.
   * @param position Location to pin the vertex to.
   */
  pinVertex(vertex, position) {
    PinRopeVertex(this.handle, vertex, position.x, position.y, position.z);
  }
  /**
   * Unpin a specified vertex from it's current pinned location (if any).
   *
   * @param vertex Vertex to unpin.
   */
  unpinVertex(vertex) {
    UnpinRopeVertex(this.handle, vertex);
  }
  /**
   * Return the world location of a specified vertex on the rope.
   *
   * @param vertex Vertex to get location from.
   * @returns The vector location of the vertex.
   */
  getVertexCoord(vertex) {
    return Vector3.fromArray(GetRopeVertexCoord(this.handle, vertex));
  }
  /**
   * Delete the rope from the world. This does not delete the rope object.
   */
  delete() {
    DeleteRope(this.handle);
  }
  /**
   * Check if the rope still exists in the world based on it's handle.
   *
   * @returns Whether the rope exists or not.
   */
  exists() {
    const [exists] = DoesRopeExist(this.handle);
    return exists;
  }
};

// src/fivem/World.ts
var World = class {
  static {
    __name(this, "World");
  }
  /**
   * Get the current camera that's rendering.
   *
   * @returns The camera that's currently used.
   */
  static get RenderingCamera() {
    return new Camera(GetRenderingCam());
  }
  /**
   * Set the rendering camera. World.RenderingCamera = null to reset.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446);
   * const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
   * World.RenderingCamera = myCamera;
   *
   * // Reset to default cam
   * World.RenderingCamera = null;
   * ```
   *
   * @param value The camera to render.
   */
  static set RenderingCamera(value) {
    if (value === null) {
      RenderScriptCams(false, false, 3e3, true, false);
    } else {
      value.IsActive = true;
      RenderScriptCams(true, false, 3e3, true, false);
    }
  }
  /**
   * Whether to create a network world state for Ropes
   * This currently does nothing
   */
  static set RopesCreateNetworkWorldState(value) {
    SetRopesCreateNetworkWorldState(value);
  }
  /**
   * Get the current date in the world.
   *
   * @returns The current date.
   */
  static get CurrentDate() {
    const year = GetClockYear();
    const month = GetClockMonth();
    const day = GetClockDayOfMonth();
    const hour = GetClockHours();
    const minutes = GetClockMinutes();
    const seconds = GetClockSeconds();
    return new Date(year, month, day, hour, minutes, seconds);
  }
  /**
   * Set the current date of the world.
   */
  static set CurrentDate(date) {
    SetClockDate(date.getDate(), date.getMonth(), date.getFullYear());
    NetworkOverrideClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
  }
  /**
   * Disables all emissive textures, street/building/vehicle lights. "EMP" effect.
   *
   * @param value On or off.
   */
  static set Blackout(value) {
    SetBlackout(value);
  }
  /**
   * Get the current cloud hat.
   *
   * @returns The current cloud hat type.
   */
  static get CloudHat() {
    return this.currentCloudHat;
  }
  /**
   * Set the current cloud hat.
   *
   * @param value The type of cloud hat.
   */
  static set CloudHat(value) {
    this.currentCloudHat = value;
    if (this.currentCloudHat === 1 /* Unknown */) {
      this.currentCloudHat = 5 /* Clear */;
      ClearCloudHat();
      return;
    }
    SetCloudHatTransition(this.cloudHatDict.get(this.currentCloudHat) ?? "", 3);
  }
  /**
   * Get the opacity of current cloud hat. Value is between 0-1.
   *
   * @returns The current cloud opacity between 0.0 and 1.0
   */
  static get CloudHatOpacity() {
    return GetCloudHatOpacity();
  }
  /**
   * Set opacity of current cloud hat between 0-1.
   *
   * @param value Opacity between 0.0 and 1.0
   */
  static set CloudHatOpacity(value) {
    SetCloudHatOpacity(Maths2.clamp(value, 0, 1));
  }
  /**
   * Get the current weather type.
   *
   * @returns The current type of weather.
   */
  static get Weather() {
    switch (GetPrevWeatherTypeHashName()) {
      case -1750463879:
        return 0 /* ExtraSunny */;
      case 916995460:
        return 1 /* Clear */;
      case -1530260698:
        return 9 /* Neutral */;
      case 282916021:
        return 3 /* Smog */;
      case -1368164796:
        return 4 /* Foggy */;
      case 821931868:
        return 2 /* Clouds */;
      case -1148613331:
        return 5 /* Overcast */;
      case 1840358669:
        return 8 /* Clearing */;
      case 1420204096:
        return 6 /* Raining */;
      case -1233681761:
        return 7 /* ThunderStorm */;
      case 669657108:
        return 11 /* Blizzard */;
      case -273223690:
        return 10 /* Snowing */;
      case 603685163:
        return 12 /* Snowlight */;
      case -1429616491:
        return 13 /* Christmas */;
      case -921030142:
        return 14 /* Halloween */;
      default:
        return -1 /* Unknown */;
    }
  }
  /**
   * Set the current weather.
   *
   * @param value Type of weather to set.
   */
  static set Weather(value) {
    if (value !== -1 /* Unknown */) {
      const weather = this.weatherDict[value];
      SetWeatherTypeOverTime(weather, 1);
      setTimeout(() => {
        SetWeatherTypeNow(weather);
      }, 100);
    }
  }
  /**
   * Get the next weather type.
   *
   * @returns The Weather type
   */
  static get NextWeather() {
    switch (GetNextWeatherTypeHashName()) {
      case -1750463879:
        return 0 /* ExtraSunny */;
      case 916995460:
        return 1 /* Clear */;
      case -1530260698:
        return 9 /* Neutral */;
      case 282916021:
        return 3 /* Smog */;
      case -1368164796:
        return 4 /* Foggy */;
      case 821931868:
        return 2 /* Clouds */;
      case -1148613331:
        return 5 /* Overcast */;
      case 1840358669:
        return 8 /* Clearing */;
      case 1420204096:
        return 6 /* Raining */;
      case -1233681761:
        return 7 /* ThunderStorm */;
      case 669657108:
        return 11 /* Blizzard */;
      case -273223690:
        return 10 /* Snowing */;
      case 603685163:
        return 12 /* Snowlight */;
      case -1429616491:
        return 13 /* Christmas */;
      case -921030142:
        return 14 /* Halloween */;
      default:
        return -1 /* Unknown */;
    }
  }
  /**
   * Set weather type instantly. Similar to World.transitionToWeather with duration 0.
   */
  static set NextWeather(value) {
    if (value !== -1 /* Unknown */) {
      const weather = this.weatherDict[value];
      SetWeatherTypeOverTime(weather, 0);
    }
  }
  /**
   * Doesn't work
   */
  static get WeatherTransition() {
    const transition = GetWeatherTypeTransition();
    return [this.weatherDict[transition[0]], this.weatherDict[transition[1]], transition[2]];
  }
  /**
   * Doesn't work
   */
  static set WeatherTransition(transition) {
    SetWeatherTypeTransition(transition[0], transition[1], transition[2]);
  }
  /**
   * Transition to different weather type within a certain time.
   *
   * @param weather Weather type to change to.
   * @param duration Time for full weather change (in milliseconds);
   */
  static transitionToWeather(weather, duration) {
    if (weather !== -1 /* Unknown */) {
      SetWeatherTypeOverTime(this.weatherDict[weather], duration);
    }
  }
  /**
   * Destroys all existing cameras and sets your rendering camera back to GameplayCam.
   */
  static destroyAllCameras() {
    DestroyAllCams(false);
  }
  /**
   * Creates a blip at a given position and optionally radius.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446);
   * const myStoreBlip = World.createBlip(position, 5.0);
   * myStoreBlip.Sprite = BlipSprite.Store;
   * ```
   *
   * @param position World coordinate of blip.
   * @param radius (Optional) Radius of where blip should be shown.
   * @returns Blip object.
   */
  static createBlip(position, radius) {
    if (radius !== null && radius !== void 0) {
      return new Blip(AddBlipForRadius(position.x, position.y, position.z, radius));
    }
    return new Blip(AddBlipForCoord(position.x, position.y, position.z));
  }
  /**
   * Creates a cam that defaults to {@link CameraTypes.Scripted}
   *
   * ```ts
   * const cam = World.createCamera(CameraTypes.Spline, true);
   * ```
   * @param cameraType the camera type to create
   * @param active unknown
   * @returns
   */
  static createCamera(cameraType = "DEFAULT_SCRIPTED_CAMERA" /* Scripted */, active = true) {
    return new Camera(CreateCam(cameraType, active));
  }
  /**
   * Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446);
   * const myCamera = World.createCameraWithParams(position, new Vector3(0,0,0), 180);
   * ```
   *
   * @param position World coordinate where the camera should render.
   * @param rotation Rotation of camera relative to world.
   * @param fieldOfView Field of view angle of camera.
   * @returns Camera object.
   */
  static createCameraWithParams(cameraType = "DEFAULT_SCRIPTED_CAMERA" /* Scripted */, position = Vector3.Zero, rotation = Vector3.Zero, fieldOfView = 90) {
    return new Camera(
      CreateCamWithParams(
        cameraType,
        position.x,
        position.y,
        position.z,
        rotation.x,
        rotation.y,
        rotation.z,
        fieldOfView,
        true,
        2
      )
    );
  }
  /**
   * Create a ped at a desired location.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446);
   * const model = new Model("a_f_m_beach_01");
   * const myPed = await World.createPed(model, position);
   * ```
   *
   * @param model Ped model to be spawned.
   * @param position World position (coordinates) of Ped spawn.
   * @param heading Heading of Ped when spawning.
   * @param isNetwork
   * @returns Ped object.
   */
  static async createPed(model, position, heading = 0, isNetwork = true, pinToScript = true) {
    if (!model.IsPed || !await model.request(1e3)) {
      return null;
    }
    const ped = CreatePed(-1, model.Hash, position.x, position.y, position.z, heading, isNetwork, pinToScript);
    model.markAsNoLongerNeeded();
    if (ped === 0) {
      return null;
    }
    return new Ped(ped);
  }
  /**
   * Creates a [[`Ped`]] with a random model.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446);
   * const randomPed = World.createRandomPed(position);
   * ```
   *
   * @param position World coordinate of Ped spawn.
   * @returns Ped object.
   */
  static createRandomPed(position) {
    return new Ped(CreateRandomPed(position.x, position.y, position.z));
  }
  /**
   * Create a vehicle at a desired location.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446);
   * const model = new Model("adder");
   * const myVehicle = await World.createVehicle(model, position);
   * ```
   *
   * @param model Vehicle model to be spawned.
   * @param position World position (coordinates) of Vehicle spawn.
   * @param heading Heading of Vehicle when spawning.
   * @param isNetwork
   * @returns Vehicle object.
   */
  static async createVehicle(model, position, heading = 0, isNetwork = true, pinToScript = true) {
    if (!model.IsVehicle || !await model.request(1e3)) {
      return null;
    }
    const vehicle = CreateVehicle(model.Hash, position.x, position.y, position.z, heading, isNetwork, pinToScript);
    if (vehicle === 0) {
      return null;
    }
    return new Vehicle(vehicle);
  }
  /**
   * Create a random vehicle at a desired location.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446);
   * const randomVehicle = await World.createRandomVehicle(position);
   * ```
   *
   * @param position World position (coordinates) of Vehicle spawn.
   * @param heading Heading of Vehicle when spawning.
   * @param isNetwork
   * @returns Vehicle object.
   */
  static async createRandomVehicle(position, heading = 0, isNetwork = true) {
    const vehicleCount = Object.keys(VehicleHash).length / 2;
    const randomIndex = Maths2.getRandomInt(0, vehicleCount);
    const randomVehicleName = VehicleHash[randomIndex];
    const modelHash = GetHashKey(randomVehicleName);
    const model = new Model(modelHash);
    return this.createVehicle(model, position, heading, isNetwork, false);
  }
  /*
   * Creates a rope at the specified location.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446)
   * const rotation = new Vector3(0,0,0)
   * const rope = await World.createRope(position, rotation, 15.0, RopeType.ThickRope, 3.0, 0.5);
   * ```
   *
   * You should manually call `RopeUnloadTextures()` after you finish using **all** ropes, unlike models requesting rope models is instantaneous
   * If called with collisionOn you will have to LoadRopeData after
   */
  static async createRope(position, rotation, maxLength, ropeType, initLength, minLength, lengthChangeRate = 1, onlyPPU = false, collisionOn = false, lockFromFront = false, timeMultiplier = 1, breakable = false, shouldLoadTextures = true) {
    if (shouldLoadTextures) {
      if (!RopeAreTexturesLoaded()) {
        RopeLoadTextures();
      }
      while (!RopeAreTexturesLoaded()) {
        await Wait(0);
      }
    }
    const [ropeHandle] = AddRope(
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      maxLength,
      ropeType,
      initLength,
      minLength,
      lengthChangeRate,
      onlyPPU,
      collisionOn,
      lockFromFront,
      timeMultiplier,
      breakable
    );
    return new Rope(ropeHandle);
  }
  /**
   * Spawns a [[`Prop`]] at the given position.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446);
   * const model = new Model("prop_barrel_02a");
   * const myBarrelProp = await World.createProp(model, position, false, true);
   * ```
   *
   * @param model The [[`Model`]] to spawn (must be a Prop)
   * @param position Location of Prop
   * @param doorFlag If set to true, the Prop will have physics otherwise it's static.
   * @param placeOnGround If set to true, sets the Prop on the ground nearest to position.
   * @param isNetwork
   * @returns Prop object.
   */
  static async createProp(model, position, placeOnGround, isNetwork = true, pinToScript = true, forceToBeObject = false) {
    if (!model.IsProp || !await model.request(1e3)) {
      return null;
    }
    const object = CreateObject(
      model.Hash,
      position.x,
      position.y,
      position.z,
      isNetwork,
      pinToScript,
      forceToBeObject
    );
    model.markAsNoLongerNeeded();
    if (object === 0) {
      return null;
    }
    const prop = new Prop(object);
    if (placeOnGround) {
      prop.placeOnGround();
    }
    return prop;
  }
  /**
   * Create a pickup in a specific position in the world with a specified type and value.
   *
   * @param type The [[`PickupType`]] of pickup.
   * @param position The position in the world it should be spawned.
   * @param model The model of the spawned pickup.
   * @param value Give a value for the pickup when picked up.
   * @param rotation If set, create a rotating pickup with this rotation.
   * @returns Pickup object.
   */
  static async createPickup(type, position, model, value, rotation) {
    if (!await model.request(1e3)) {
      return null;
    }
    let handle = 0;
    if (rotation !== void 0)
      handle = CreatePickupRotate(
        type,
        position.x,
        position.y,
        position.z,
        rotation.x,
        rotation.y,
        rotation.z,
        0,
        value,
        2,
        true,
        model.Hash
      );
    else handle = CreatePickup(type, position.x, position.y, position.z, 0, value, true, model.Hash);
    model.markAsNoLongerNeeded();
    if (handle === 0) {
      return null;
    }
    return new Pickup(handle);
  }
  /**
   * Creates an ambient pickup.
   *
   * @param type The [[`PickupType`]] of the pickup.
   * @param position The position where it should be spawned.
   * @param model The model.
   * @param value The value tied to the pickup.
   * @returns The pickup in form of a Prop.
   */
  static async createAmbientPickup(type, position, model, value) {
    if (!await model.request(1e3)) {
      return null;
    }
    const handle = CreateAmbientPickup(type, position.x, position.y, position.z, 0, value, model.Hash, false, true);
    model.markAsNoLongerNeeded();
    if (handle === 0) {
      return null;
    }
    return new Prop(handle);
  }
  /**
   * Draw a marker at a desired location. Careful! Must be drawn every tick.
   *
   * ```typescript
   * const position = new Vector3(-802.311, 175.056, 72.8446);
   * const zeroVector = new Vector3(0,0,0);
   *
   * setTick(() => {
   *  World.drawMarker(MarkerType.ThickChevronUp, position, zeroVector, zeroVector, 1.0, new Color(255,0,0));
   * })
   * ```
   *
   * @param type Type of marker.
   * @param position Location of marker.
   * @param direction Direction facing.
   * @param rotation World rotation.
   * @param scale Size of marker.
   * @param color Color of marker.
   * @param bobUpAndDown Animated movement along marker's own X axis.
   * @param faceCamera Rendering marker facing rendering camera.
   * @param rotateY Rotate along Y axis.
   * @param textureDict Custom texture dictionary for custom marker.
   * @param textureName Custom texture name for custom marker.
   * @param drawOnEntity Render the marker on an entity.
   */
  static drawMarker(type, position, direction, rotation, scale, color, bobUpAndDown = false, faceCamera = false, rotateY = false, textureDict = null, textureName = null, drawOnEntity = false) {
    DrawMarker(
      Number(type),
      position.x,
      position.y,
      position.z,
      direction.x,
      direction.y,
      direction.z,
      rotation.x,
      rotation.y,
      rotation.z,
      scale.x,
      scale.y,
      scale.z,
      color.r,
      color.g,
      color.b,
      color.a,
      bobUpAndDown,
      faceCamera,
      2,
      rotateY,
      textureDict,
      textureName,
      drawOnEntity
    );
  }
  /**
   * Creates a light in the world with a certain length (range).
   *
   * @param pos World coordinate where to draw the light.
   * @param color RGB colors of the light.
   * @param range How far to draw the light.
   * @param intensity Intensity of the light ("alpha").
   */
  static drawLightWithRange(pos, color, range, intensity) {
    DrawLightWithRange(pos.x, pos.y, pos.z, color.r, color.g, color.b, range, intensity);
  }
  /**
   * Creates a light in the world. More configurable than World.drawLightWithRange.
   *
   * @param pos World coordinate of spotlight.
   * @param dir Direction to face spotlight.
   * @param color RGB colors of spotlight.
   * @param distance The maximum distance the spotlight can reach.
   * @param brightness Brightness of the spotlight.
   * @param roundness "Smoothness" of the edge of the spotlight.
   * @param radius Radius size of spotlight.
   * @param fadeOut Falloff size of the spotlight's edge.
   */
  static drawSpotLight(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
    DrawSpotLight(
      pos.x,
      pos.y,
      pos.z,
      dir.x,
      dir.y,
      dir.z,
      color.r,
      color.g,
      color.b,
      distance,
      brightness,
      roundness,
      radius,
      fadeOut
    );
  }
  /**
   * Creates a light in the world. Same as World.drawSpotlight, but also draws shadows.
   *
   * @param pos World coordinate of spotlight.
   * @param dir Direction to face spotlight.
   * @param color RGB colors of spotlight.
   * @param distance The maximum distance the spotlight can reach.
   * @param brightness Brightness of the spotlight.
   * @param roundness "Smoothness" of the edge of the spotlight.
   * @param radius Radius size of spotlight.
   * @param fadeOut Falloff size of the spotlight's edge.
   */
  static drawSpotLightWithShadow(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
    DrawSpotLightWithShadow(
      pos.x,
      pos.y,
      pos.z,
      dir.x,
      dir.y,
      dir.z,
      color.r,
      color.g,
      color.b,
      distance,
      brightness,
      roundness,
      radius,
      fadeOut,
      0
    );
  }
  /**
   * Draws a line in the world. It's not possible to change thickness.
   *
   * @param start World coordinate of start position of line.
   * @param end World coordinate of end position of line.
   * @param color RGB color of line.
   */
  static drawLine(start, end, color) {
    DrawLine(start.x, start.y, start.z, end.x, end.y, end.z, color.r, color.g, color.b, color.a);
  }
  /**
   * Draw polygon in the world.
   *
   * @param vertexA World coordinate of first point.
   * @param vertexB World coordinate of second point.
   * @param vertexC World coordinate of third point.
   * @param color RGB color of polygon.
   */
  static drawPoly(vertexA, vertexB, vertexC, color) {
    DrawPoly(
      vertexA.x,
      vertexA.y,
      vertexA.z,
      vertexB.x,
      vertexB.y,
      vertexB.z,
      vertexC.x,
      vertexC.y,
      vertexC.z,
      color.r,
      color.g,
      color.b,
      color.a
    );
  }
  // TODO: Add a raycast option for every type.
  /**
   * Cast a ray from {@param start} to {@param end}.
   *
   * @param start Starting position of raycast.
   * @param end Direction to cast a ray to.
   * @param losFlags The entity type(s) that the raycast should intersect with
   * defaults to {@enum IntersectFlags.All}
   * @param options Possible entity types to detect.
   * @param ignoreEntity An entity to ignore (usually player's Ped).
   * @returns {@see SynchronousRaycastResult} object.
   */
  static expensiveRaycast(start, end, losFlags = 511 /* All */, shapeTestOptions = SHAPE_TEST_DEFAULT, ignoreEntity) {
    return new SynchronousRaycastResult(
      StartExpensiveSynchronousShapeTestLosProbe(
        start.x,
        start.y,
        start.z,
        end.x,
        end.y,
        end.z,
        losFlags,
        ignoreEntity?.Handle ?? 0,
        shapeTestOptions
      )
    );
  }
  /**
   * Cast a ray from {@param start} to {@param end} and returns the first hit
   * entity or coordinate .
   *
   * @param start starting position of raycast.
   * @param end the ending position to raycast to.
   * @param losFlags The entity type(s) that the raycast should intersect with defaults to {@enum IntersectFlags.All}
   * @param shapeTestOptions shape test collision modifiers defaults to ignoring glass, see through, and no collided entities
   * @param ignoreEntity An entity to ignore (usually player's Ped).
   * @returns {@see AsynchronousRaycastResult} object that must be awaited to get its results.
   */
  static raycast(start, end, losFlags = 511 /* All */, shapeTestOptions = SHAPE_TEST_DEFAULT, ignoreEntity) {
    return new AsynchronousRaycastResult(
      StartShapeTestLosProbe(
        start.x,
        start.y,
        start.z,
        end.x,
        end.y,
        end.z,
        losFlags,
        ignoreEntity?.Handle ?? 0,
        shapeTestOptions
      )
    );
  }
  static raycastDirection(useExpensiveRaycast, source2, direction, maxDistance, losFlags = 511 /* All */, shapeTestOptions = SHAPE_TEST_DEFAULT, ignoreEntity) {
    const target = Vector3.add(source2, Vector3.multiply(direction, maxDistance));
    if (useExpensiveRaycast) {
      return new SynchronousRaycastResult(
        StartExpensiveSynchronousShapeTestLosProbe(
          source2.x,
          source2.y,
          source2.z,
          target.x,
          target.y,
          target.z,
          losFlags,
          ignoreEntity?.Handle ?? 0,
          shapeTestOptions
        )
      );
    }
    return new AsynchronousRaycastResult(
      StartShapeTestLosProbe(
        source2.x,
        source2.y,
        source2.z,
        target.x,
        target.y,
        target.z,
        losFlags,
        ignoreEntity?.Handle ?? 0,
        shapeTestOptions
      )
    );
  }
  /**
   * Cast a ray from the local players camera until it hits an entity
   *
   * @param maxDistance Max distance to cast the ray.
   * @param flags Possible entity types to detect.
   * @returns SynchronousRaycast object.
   */
  static raycastPlayerCamera(maxDistance, flags) {
    const camera = GameplayCamera.Position;
    const direction = GameplayCamera.ForwardVector;
    const destination = direction.multiply(maxDistance).add(camera);
    return new SynchronousRaycastResult(
      StartExpensiveSynchronousShapeTestLosProbe(
        camera.x,
        camera.y,
        camera.z,
        destination.x,
        destination.y,
        destination.z,
        flags,
        PlayerPedId(),
        7
      )
    );
  }
  /**
   * Gets the closest object of this model
   */
  static getClosestObject(model, coords, radius = 25, isMission = false) {
    const prop = GetClosestObjectOfType(coords.x, coords.y, coords.z, radius, model.Hash, isMission, false, false);
    if (prop !== 0) {
      return new Prop(prop);
    }
    return null;
  }
  /**
   * Get all [[`Prop`]] entities in your own scope.
   *
   * @returns Array of Props.
   */
  static getAllProps() {
    const handles = GetGamePool("CObject");
    const props = [];
    handles.forEach((handle) => props.push(new Prop(handle)));
    return props;
  }
  /**
   * Get all [[`Rope`]] entities in your own scope.
   *
   * @returns Array of Ropes.
   */
  static getAllRopes() {
    const handles = GetAllRopes();
    const props = [];
    handles.forEach((handle) => props.push(new Rope(handle)));
    return props;
  }
  /**
   * Get all [[`Ped`]] entities in your own scope.
   *
   * @returns Array of Peds.
   */
  static getAllPeds() {
    const handles = GetGamePool("CPed");
    const peds = [];
    handles.forEach((handle) => peds.push(new Ped(handle)));
    return peds;
  }
  /**
   * Get all [[`Vehicle`]] entities in your own scope.
   *
   * @returns Array of Vehicles.
   */
  static getAllVehicles() {
    const handles = GetGamePool("CVehicle");
    const vehicles = [];
    handles.forEach((handle) => vehicles.push(new Vehicle(handle)));
    return vehicles;
  }
  /**
   * Gets the cloest [[`Vehicle`]] to the current coords, or null if none are found
   * @returns the closest vehicle or null
   */
  static getClosestVehicle(coords) {
    const vehicles = this.getAllVehicles();
    let currentVeh = null;
    let lastDistance = 9999;
    for (const vehicle of vehicles) {
      if (!currentVeh) {
        currentVeh = vehicle;
        lastDistance = coords.distance(vehicle.Position);
        continue;
      }
      const distance = coords.distance(vehicle.Position);
      if (distance < lastDistance) {
        currentVeh = vehicle;
        lastDistance = distance;
      }
    }
    return currentVeh;
  }
  /**
   * Get all [[`Pickup`]] entities using the GetGamePool.
   * @returns Array of Pickups.
   */
  static getAllPickups() {
    const handles = GetGamePool("CPickup");
    const pickups = [];
    handles.forEach((handle) => pickups.push(new Pickup(handle)));
    return pickups;
  }
  static currentCloudHat = 5 /* Clear */;
  static cloudHatDict = /* @__PURE__ */ new Map([
    [1 /* Unknown */, "Unknown"],
    [2 /* Altostratus */, "altostratus"],
    [3 /* Cirrus */, "Cirrus"],
    [4 /* Cirrocumulus */, "cirrocumulus"],
    [5 /* Clear */, "Clear 01"],
    [6 /* Cloudy */, "Cloudy 01"],
    [7 /* Contrails */, "Contrails"],
    [8 /* Horizon */, "Horizon"],
    [9 /* HorizonBand1 */, "horizonband1"],
    [10 /* HorizonBand2 */, "horizonband2"],
    [11 /* HorizonBand3 */, "horizonband3"],
    [12 /* Horsey */, "horsey"],
    [13 /* Nimbus */, "Nimbus"],
    [14 /* Puffs */, "Puffs"],
    [15 /* Rain */, "RAIN"],
    [16 /* Snowy */, "Snowy 01"],
    [17 /* Stormy */, "Stormy 01"],
    [18 /* Stratoscumulus */, "stratoscumulus"],
    [19 /* Stripey */, "Stripey"],
    [20 /* Shower */, "shower"],
    [21 /* Wispy */, "Wispy"]
  ]);
  static weatherDict = [
    "EXTRASUNNY",
    "CLEAR",
    "CLOUDS",
    "SMOG",
    "FOGGY",
    "OVERCAST",
    "RAIN",
    "THUNDER",
    "CLEARING",
    "NEUTRAL",
    "SNOW",
    "BLIZZARD",
    "SNOWLIGHT",
    "XMAS"
  ];
};

// src/fivem/Checkpoint.ts
var Checkpoint = class {
  static {
    __name(this, "Checkpoint");
  }
  handle;
  position = new Vector3(0, 0, 0);
  targetPosition = new Vector3(0, 0, 0);
  icon = 39 /* Empty */;
  radius = 0;
  constructor(handle) {
    this.handle = handle;
  }
  get Position() {
    return this.position;
  }
  set Position(position) {
    this.position = position;
  }
  get TargetPosition() {
    return this.targetPosition;
  }
  set TargetPosition(targetPosition) {
    this.targetPosition = targetPosition;
  }
  get Icon() {
    return this.icon;
  }
  set Icon(icon) {
    this.icon = icon;
  }
  // TODO
  //   public get CustomIcon(): CheckpointIcon {
  //     return this.icon;
  //   }
  //     public set CustomIcon(icon: CheckpointIcon) {
  //     this.icon = icon;
  //   }
  get Radius() {
    return this.radius;
  }
  set Radius(radius) {
    this.radius = radius;
  }
};

// src/fivem/ParticleEffect.ts
var ParticleEffect = class {
  static {
    __name(this, "ParticleEffect");
  }
  asset;
  effectName;
  offset = new Vector3(0, 0, 0);
  rotation = new Vector3(0, 0, 0);
  color = Color.Transparent;
  scale = 1;
  range = 1;
  invertAxis = { flags: 0 /* None */ };
  handle;
  /**
   * Creates a particle effect.
   *
   * @param asset Particle effect asset.
   * @param effectName Name of effect.
   */
  constructor(asset, effectName) {
    this.handle = -1;
    this.asset = asset;
    this.effectName = effectName;
  }
  /**
   * Get the particle effect handle.
   */
  get Handle() {
    return this.handle;
  }
  /**
   * Get whether particle effect is currently active.
   */
  get IsActive() {
    return this.Handle !== -1 && DoesParticleFxLoopedExist(this.Handle);
  }
  /**
   * Stop a particle effect.
   */
  stop() {
    if (this.IsActive) {
      RemoveParticleFx(this.Handle, false);
    }
    this.handle = -1;
  }
  /**
   * Get the rotation of the particle effect.
   */
  get Rotation() {
    return this.rotation;
  }
  /**
   * Set the rotation of the particle effect.
   */
  set Rotation(rotation) {
    this.rotation = rotation;
    if (this.IsActive) {
      const off = this.offset;
      SetParticleFxLoopedOffsets(this.Handle, off.x, off.y, off.z, rotation.x, rotation.y, rotation.z);
    }
  }
  /**
   * Get the range of the particle effect.
   */
  get Range() {
    return this.range;
  }
  /**
   * Set the range of the particle effect.
   */
  set Range(range) {
    this.range = range;
    SetParticleFxLoopedRange(this.Handle, range);
  }
  /**
   * Get the invert axis flag of the particle effect.
   */
  get InvertAxis() {
    return this.invertAxis;
  }
  /**
   * Set the inverted axis of the particle effect.
   */
  set InvertAxis(invertAxis) {
    this.invertAxis = invertAxis;
    if (this.IsActive) {
      this.stop();
      this.start();
    }
  }
  /**
   * Set a paramaeter of a particle effect.
   *
   * @param parameterName Name of parameter.
   * @param value Value of parameter.
   */
  setParameter(parameterName, value) {
    if (this.IsActive) {
      SetParticleFxLoopedEvolution(this.Handle, parameterName, value, false);
    }
  }
  /**
   * Get the name of the particle effect asset. Same as ParticleEffect.AssetName.
   */
  get AssetName() {
    return this.asset.AssetName;
  }
  /**
   * Get the name of the particle effect.
   */
  get EffectName() {
    return this.effectName;
  }
  /**
   * Return the particle effect as string. `AssetName`\\`EffectName`.
   */
  toString() {
    return `${this.AssetName}\\${this.EffectName}`;
  }
};

// src/fivem/ParticleEffectAsset.ts
var ParticleEffectAsset = class {
  static {
    __name(this, "ParticleEffectAsset");
  }
  /**
   * Returns the name of the asset. Same as AssetName.
   */
  get Asset() {
    return this.assetName;
  }
  assetName;
  constructor(assetName) {
    this.assetName = assetName;
  }
  /**
   * Get the name of the particle effect.
   */
  get AssetName() {
    return this.assetName;
  }
  /**
   * Get whether the particle effect has loaded into game memory.
   */
  get IsLoaded() {
    return HasNamedPtfxAssetLoaded(this.assetName);
  }
  /**
   * Start a particle effect at a world position.
   *
   * @param effectName Name of effect.
   * @param rot Rotation from entity position.
   * @param scale Size of the effect.
   * @param invertAxis Which axis to invert (default none).
   */
  startNonLoopedAtCoord(effectName, pos, rot = new Vector3(0, 0, 0), scale = 1, invertAxis = { flags: 0 /* None */ }) {
    if (!this.setNextCall()) {
      return false;
    }
    const invertAxisFlags = invertAxis.flags;
    SetPtfxAssetNextCall(this.assetName);
    return StartParticleFxLoopedAtCoord(
      effectName,
      pos.x,
      pos.y,
      pos.z,
      rot.x,
      rot.y,
      rot.z,
      scale,
      !!(invertAxisFlags & 1 /* X */),
      !!(invertAxisFlags & 2 /* Y */),
      !!(invertAxisFlags & 4 /* Z */),
      false
    ) > 0;
  }
  /**
   * Start a particle effect on an entity
   *
   * @param effectName Name of effect.
   * @param entity Entity to use effect on.
   * @param off Offset from entity position.
   * @param rot Rotation from entity position.
   * @param scale Size of the effect.
   * @param invertAxis Which axis to invert (default none).
   */
  startNonLoopedOnEntity(effectName, entity, off = new Vector3(0, 0, 0), rot = new Vector3(0, 0, 0), scale = 1, invertAxis = { flags: 0 /* None */ }) {
    if (!this.setNextCall()) {
      return false;
    }
    const invertAxisFlags = invertAxis.flags;
    SetPtfxAssetNextCall(this.assetName);
    return !!StartParticleFxLoopedOnEntity(
      effectName,
      entity.Handle,
      off.x,
      off.y,
      off.z,
      rot.x,
      rot.y,
      rot.z,
      scale,
      !!(invertAxisFlags & 1 /* X */),
      !!(invertAxisFlags & 2 /* Y */),
      !!(invertAxisFlags & 4 /* Z */)
    );
  }
  /**
   * Load a particle effect into the game memory.
   *
   * @param timeout Max time to load Particle Effect
   */
  request(timeout) {
    return new Promise((resolve) => {
      if (!this.IsLoaded) {
        RequestNamedPtfxAsset(this.assetName);
        const start = GetGameTimer();
        const interval = setInterval(() => {
          if (this.IsLoaded || GetGameTimer() - start >= timeout) {
            clearInterval(interval);
            resolve(this.IsLoaded);
          }
        }, 0);
      } else {
        resolve(this.IsLoaded);
      }
    });
  }
  /**
   * Allow game engine to safely unload particle effect model from memory.
   */
  markAsNoLongerNeeded() {
    RemoveNamedPtfxAsset(this.assetName);
  }
  toString() {
    return this.assetName;
  }
  setNextCall() {
    if (!this.IsLoaded) {
      RequestNamedPtfxAsset(this.assetName);
    } else {
      SetPtfxAssetNextCall(this.assetName);
      return true;
    }
    return false;
  }
};

// src/fivem/RelationshipGroup.ts
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

// src/fivem/TaskSequence.ts
var TaskSequence = class _TaskSequence {
  static {
    __name(this, "TaskSequence");
  }
  static nullTask;
  handle = 0;
  isClosed;
  count;
  constructor(handle) {
    handle === void 0 ? this.create() : this.handle = handle;
    if (!_TaskSequence.nullTask) {
      _TaskSequence.nullTask = new Tasks(null);
    }
    this.isClosed = false;
    this.count = 0;
  }
  create() {
    this.handle = OpenSequenceTask();
  }
  dispose() {
    ClearSequenceTask(this.handle);
    this.handle = 0;
  }
  close(repeat = false) {
    if (this.isClosed) return;
    SetSequenceToRepeat(this.handle, repeat);
    CloseSequenceTask(this.handle);
    this.isClosed = true;
  }
  get Handle() {
    return this.handle;
  }
  get AddTask() {
    if (this.isClosed) {
      throw new Error("You can't add tasks to a closed sequence!");
    }
    this.count += 1;
    return _TaskSequence.nullTask;
  }
  get IsClosed() {
    return this.isClosed;
  }
  get Count() {
    return this.count;
  }
};

// src/fivem/NetworkedScene.ts
var NetworkedScene = class {
  static {
    __name(this, "NetworkedScene");
  }
  scene;
  constructor(pos, rot, rotationOrder, holdLastFrame, looped, sceneHash, animTime, animSpeed) {
    this.scene = NetworkCreateSynchronisedScene(
      pos.x,
      pos.y,
      pos.z,
      rot.x,
      rot.y,
      rot.z,
      rotationOrder,
      holdLastFrame,
      looped,
      sceneHash,
      animTime + 0,
      animSpeed + 0
    );
  }
  addPed(ped, animDict, animName, blendInSpeed, blendOutSpeed, duration, flag, playbackRate, p9) {
    NetworkAddPedToSynchronisedScene(
      ped.Handle,
      this.scene,
      animDict,
      animName,
      blendInSpeed,
      blendOutSpeed,
      duration,
      flag,
      playbackRate,
      p9
    );
  }
  addEntity(entity, animDict, animName, speed, speedMultiplier, flag) {
    NetworkAddEntityToSynchronisedScene(entity.Handle, this.scene, animDict, animName, speed, speedMultiplier, flag);
  }
  start() {
    NetworkStartSynchronisedScene(this.scene);
  }
  stop() {
    NetworkStopSynchronisedScene(this.scene);
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

// src/fivem/ui/Rectangle.ts
var Rectangle = class {
  static {
    __name(this, "Rectangle");
  }
  pos;
  size;
  color;
  constructor(pos, size2, color) {
    this.pos = pos;
    this.size = size2;
    this.color = color;
  }
  draw(arg1, arg2, color, resolution) {
    resolution = color === void 0 ? arg2 : resolution;
    resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
    if (color === void 0) {
      if (arg1 && arg1 instanceof Size) {
        arg1 = new Point(this.pos.X + arg1.width, this.pos.Y + arg1.height);
      } else {
        arg1 = this.pos;
      }
      arg2 = this.size;
    } else {
      if (!arg1) {
        arg1 = this.pos;
      } else {
        arg1 = arg1;
      }
      arg2 = arg2 || this.size;
    }
    color = color || this.color;
    const w = arg2.width / resolution.width;
    const h = arg2.height / resolution.height;
    const x = arg1.X / resolution.width + w * 0.5;
    const y = arg1.Y / resolution.height + h * 0.5;
    DrawRect(x, y, w, h, color.r, color.g, color.b, color.a);
  }
};

// src/fivem/ui/Container.ts
var Container = class {
  static {
    __name(this, "Container");
  }
  pos;
  size;
  color;
  items = [];
  constructor(pos, size2, color) {
    this.pos = pos;
    this.size = size2;
    this.color = color;
  }
  addItem(items) {
    if (!Array.isArray(items)) {
      items = [items];
    }
    this.items.push(...items);
  }
  draw(offset, resolution) {
    resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
    offset = offset || new Size();
    const w = this.size.width / resolution.width;
    const h = this.size.height / resolution.height;
    const x = (this.pos.X + offset.width) / resolution.width + w * 0.5;
    const y = (this.pos.Y + offset.height) / resolution.height + h * 0.5;
    DrawRect(x, y, w, h, this.color.r, this.color.g, this.color.b, this.color.a);
    for (const item of this.items) {
      item.draw(new Size(this.pos.X + offset.width, this.pos.Y + offset.height), resolution);
    }
  }
};

// src/fivem/ui/Effects.ts
var Effects = class _Effects {
  static {
    __name(this, "Effects");
  }
  static start(effectName, duration = 0, looped = false) {
    StartScreenEffect(_Effects.effectToString(effectName), duration, looped);
  }
  static stop(screenEffect) {
    if (typeof screenEffect === "undefined") {
      return StopAllScreenEffects();
    }
    StopScreenEffect(_Effects.effectToString(screenEffect));
  }
  static isActive(screenEffect) {
    return GetScreenEffectIsActive(_Effects.effectToString(screenEffect));
  }
  static effects = [
    "SwitchHUDIn",
    "SwitchHUDOut",
    "FocusIn",
    "FocusOut",
    "MinigameEndNeutral",
    "MinigameEndTrevor",
    "MinigameEndFranklin",
    "MinigameEndMichael",
    "MinigameTransitionOut",
    "MinigameTransitionIn",
    "SwitchShortNeutralIn",
    "SwitchShortFranklinIn",
    "SwitchShortTrevorIn",
    "SwitchShortMichaelIn",
    "SwitchOpenMichaelIn",
    "SwitchOpenFranklinIn",
    "SwitchOpenTrevorIn",
    "SwitchHUDMichaelOut",
    "SwitchHUDFranklinOut",
    "SwitchHUDTrevorOut",
    "SwitchShortFranklinMid",
    "SwitchShortMichaelMid",
    "SwitchShortTrevorMid",
    "DeathFailOut",
    "CamPushInNeutral",
    "CamPushInFranklin",
    "CamPushInMichael",
    "CamPushInTrevor",
    "SwitchSceneFranklin",
    "SwitchSceneTrevor",
    "SwitchSceneMichael",
    "SwitchSceneNeutral",
    "MP_Celeb_Win",
    "MP_Celeb_Win_Out",
    "MP_Celeb_Lose",
    "MP_Celeb_Lose_Out",
    "DeathFailNeutralIn",
    "DeathFailMPDark",
    "DeathFailMPIn",
    "MP_Celeb_Preload_Fade",
    "PeyoteEndOut",
    "PeyoteEndIn",
    "PeyoteIn",
    "PeyoteOut",
    "MP_race_crash",
    "SuccessFranklin",
    "SuccessTrevor",
    "SuccessMichael",
    "DrugsMichaelAliensFightIn",
    "DrugsMichaelAliensFight",
    "DrugsMichaelAliensFightOut",
    "DrugsTrevorClownsFightIn",
    "DrugsTrevorClownsFight",
    "DrugsTrevorClownsFightOut",
    "HeistCelebPass",
    "HeistCelebPassBW",
    "HeistCelebEnd",
    "HeistCelebToast",
    "MenuMGHeistIn",
    "MenuMGTournamentIn",
    "MenuMGSelectionIn",
    "ChopVision",
    "DMT_flight_intro",
    "DMT_flight",
    "DrugsDrivingIn",
    "DrugsDrivingOut",
    "SwitchOpenNeutralFIB5",
    "HeistLocate",
    "MP_job_load",
    "RaceTurbo",
    "MP_intro_logo",
    "HeistTripSkipFade",
    "MenuMGHeistOut",
    "MP_corona_switch",
    "MenuMGSelectionTint",
    "SuccessNeutral",
    "ExplosionJosh3",
    "SniperOverlay",
    "RampageOut",
    "Rampage",
    "Dont_tazeme_bro"
  ];
  static effectToString(screenEffect) {
    const effect = Number(screenEffect);
    if (effect >= 0 && effect <= _Effects.effects.length) {
      return _Effects.effects[effect];
    }
    return "INVALID";
  }
};

// src/fivem/ui/Fading.ts
var Fading = class {
  static {
    __name(this, "Fading");
  }
  /**
   * Gets whether the screen is faded in
   *
   * @returns True or false
   */
  static get IsFadedIn() {
    return IsScreenFadedIn();
  }
  /**
   * Gets whether the screen is faded out
   *
   * @returns True or false
   */
  static get IsFadedOut() {
    return IsScreenFadedOut();
  }
  /**
   * Gets whether the screen is currently fading in
   *
   * @returns True or false
   */
  static get IsFadingIn() {
    return IsScreenFadingIn();
  }
  /**
   * Gets whether the screen is currently fading out
   *
   * @returns True or false
   */
  static get IsFadingOut() {
    return IsScreenFadingOut();
  }
  /**
   * Fade in the screen for a certain duration.
   *
   * @param duration Time to fade in
   */
  static fadeIn(duration) {
    return new Promise((resolve) => {
      DoScreenFadeIn(duration);
      const interval = setInterval(() => {
        if (this.IsFadedIn) {
          clearInterval(interval);
          resolve();
        }
      }, 0);
    });
  }
  /**
   * Fade out the screen for a certain duration.
   *
   * @param duration Time to fade out
   */
  static fadeOut(duration) {
    return new Promise((resolve) => {
      DoScreenFadeOut(duration);
      const interval = setInterval(() => {
        if (this.IsFadedOut) {
          clearInterval(interval);
          resolve();
        }
      }, 0);
    });
  }
};

// src/fivem/ui/Hud.ts
var Hud = class {
  static {
    __name(this, "Hud");
  }
  static isComponentActive(component) {
    return IsHudComponentActive(Number(component));
  }
  static showComponentThisFrame(component) {
    ShowHudComponentThisFrame(Number(component));
  }
  static hideComponentThisFrame(component) {
    HideHudComponentThisFrame(Number(component));
  }
  static showCursorThisFrame() {
    ShowCursorThisFrame();
  }
  static set CursorPosition(position) {
    SetCursorLocation(position.X, position.Y);
  }
  static get CursorSprite() {
    return 9 /* DownArrow */;
  }
  static set CursorSprite(sprite) {
    SetCursorSprite(Number(sprite));
  }
  static get IsVisible() {
    return !(IsHudHidden() || !IsHudPreferenceSwitchedOn());
  }
  static set IsVisible(toggle) {
    DisplayHud(toggle);
  }
  static get IsRadarVisible() {
    return !(IsRadarHidden() || IsRadarPreferenceSwitchedOn());
  }
  static set IsRadarVisible(toggle) {
    DisplayRadar(toggle);
  }
  static set RadarZoom(zoomLevel) {
    SetRadarZoom(zoomLevel);
  }
};

// src/fivem/ui/Scaleform.ts
var Scaleform = class {
  static {
    __name(this, "Scaleform");
  }
  static async render2DMasked(scaleform1, scaleform2) {
    if (!scaleform1.IsLoaded) await scaleform1.load();
    if (!scaleform2.IsLoaded) await scaleform2.load();
    if (scaleform1.IsLoaded && scaleform2.IsLoaded) {
      DrawScaleformMovieFullscreenMasked(scaleform1.Handle, scaleform2.Handle, 255, 255, 255, 255);
    }
  }
  handle;
  name;
  loaded = false;
  constructor(name) {
    this.name = name;
    this.handle = RequestScaleformMovie(this.name);
  }
  /**
   * Get the handle of the scaleform.
   */
  get Handle() {
    return this.handle;
  }
  /**
   * Get whether the handle is a valid handle.
   */
  get IsValid() {
    return this.handle !== 0;
  }
  /**
   * Get whether the scaleform is loaded.
   */
  get IsLoaded() {
    if (!this.loaded) {
      this.loaded = HasScaleformMovieLoaded(this.handle);
    }
    return this.loaded;
  }
  /**
   * Dispose the scaleform allowing the GTA engine to free memory when wanted.
   */
  dispose() {
    if (this.IsLoaded) {
      SetScaleformMovieAsNoLongerNeeded(this.handle);
      this.loaded = false;
    }
  }
  /**
   * Call a function on the scaleform.
   *
   * @param name Name of the function
   * @param args Additional arguments
   */
  callFunction(name, ...args) {
    BeginScaleformMovieMethod(this.handle, name);
    args.forEach((arg) => {
      switch (typeof arg) {
        case "number":
          PushScaleformMovieFunctionParameterInt(arg);
          break;
        case "string":
          PushScaleformMovieFunctionParameterString(arg);
          break;
        case "boolean":
          PushScaleformMovieFunctionParameterBool(arg);
          break;
        default:
          throw new Error(
            `Unknown argument type [${typeof arg}] passed to scaleform with handle [${this.handle}], had value of ${arg}`
          );
      }
    });
    EndScaleformMovieMethod();
  }
  /**
   * Calls a void method on the scaleform.
   *
   * @param name Name of the function
   */
  callVoidMethod(name) {
    CallScaleformMovieMethod(this.handle, name);
  }
  /**
   * Calls a string method on the scaleform.
   *
   * @param name Name of the function
   * @param param1
   * @param param2
   * @param param3
   * @param param4
   * @param param5
   */
  callStringMethod(name, param1 = "", param2 = "", param3 = "", param4 = "", param5 = "") {
    CallScaleformMovieMethodWithString(this.handle, name, param1, param2, param3, param4, param5);
  }
  /**
   * Calls a number method on the scaleform.
   *
   * @param name Name of the function
   * @param param1
   * @param param2
   * @param param3
   * @param param4
   * @param param5
   */
  callNumberMethod(name, param1 = -1, param2 = -1, param3 = -1, param4 = -1, param5 = -1) {
    CallScaleformMovieMethodWithNumber(this.handle, name, param1, param2, param3, param4, param5);
  }
  /**
   * Calls a number & string method on the scaleform.
   *
   * @param name Name of the function
   * @param fParam1
   * @param fParam2
   * @param fParam3
   * @param fParam4
   * @param fParam5
   * @param sParam1
   * @param sParam2
   * @param sParam3
   * @param sParam4
   * @param sParam5
   */
  callSharedMethod(name, fParam1 = -1, fParam2 = -1, fParam3 = -1, fParam4 = -1, fParam5 = -1, sParam1 = "", sParam2 = "", sParam3 = "", sParam4 = "", sParam5 = "") {
    CallScaleformMovieMethodWithNumberAndString(
      this.handle,
      name,
      fParam1,
      fParam2,
      fParam3,
      fParam4,
      fParam5,
      sParam1,
      sParam2,
      sParam3,
      sParam4,
      sParam5
    );
  }
  /**
   * Sets a duration the scaleform should be shown.
   * Useful for showing a scaleform for a known amount of time, such as messages.
   *
   * This only works for any scaleform using {@linkcode render2D};
   *
   * @param duration Duration in milliseconds
   */
  setDuration(duration) {
    if (duration <= 0) {
      return;
    }
    const start = GetGameTimer();
    const interval = setInterval(async () => {
      if (GetGameTimer() - start < duration) {
        await this.render2D();
      } else {
        clearInterval(interval);
      }
    }, 0);
  }
  async render2D() {
    if (!this.IsLoaded) await this.load();
    if (!this.IsLoaded) return;
    DrawScaleformMovieFullscreen(this.handle, 255, 255, 255, 255, 0);
  }
  async render2DScreenSpace(location, size2) {
    if (this.IsLoaded) await this.load();
    if (!this.IsLoaded) return;
    const x = location.x;
    const y = location.y;
    const width = size2.x;
    const height = size2.y;
    DrawScaleformMovie(this.handle, x + width / 2, y + height / 2, width, height, 255, 255, 255, 255, 0);
  }
  async render3D(position, rotation, scale) {
    if (this.IsLoaded) await this.load();
    if (!this.IsLoaded) return;
    DrawScaleformMovie_3dNonAdditive(
      this.handle,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      2,
      2,
      1,
      scale.x,
      scale.y,
      scale.z,
      2
    );
  }
  async render3DAdditive(position, rotation, scale) {
    if (this.IsLoaded) await this.load();
    if (!this.IsLoaded) return;
    DrawScaleformMovie_3d(
      this.handle,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      2,
      2,
      1,
      scale.x,
      scale.y,
      scale.z,
      2
    );
  }
  load() {
    return new Promise((resolve) => {
      if (this.IsLoaded) {
        resolve(true);
      } else {
        const start = GetGameTimer();
        const interval = setInterval(() => {
          if (this.IsLoaded) {
            clearInterval(interval);
            resolve(true);
          } else if (GetGameTimer() - start > 5e3) {
            clearInterval(interval);
            console.log(`^1[fivemjs/client] Could not load scaleform ${this.name}!^7`);
            resolve(false);
          }
        }, 0);
      }
    });
  }
};

// src/fivem/ui/InstructionalButtons.ts
var InstructionalButtons = class {
  static {
    __name(this, "InstructionalButtons");
  }
  scaleform;
  /**
   * Draws native instructional buttons
   *
   * @param buttons Array of instructional buttons to be drawn
   */
  constructor(buttons) {
    this.scaleform = new Scaleform("INSTRUCTIONAL_BUTTONS");
    this.scaleform.callFunction("CLEAR_ALL");
    this.scaleform.callFunction("SET_CLEAR_SPACE", 200);
    buttons.forEach((button, index) => {
      this.pushButton(button, index);
    });
    this.scaleform.callFunction("DRAW_INSTRUCTIONAL_BUTTONS");
    this.scaleform.callFunction("SET_BACKGROUND_COLOUR", 0, 0, 0, 80);
  }
  pushButton(button, index) {
    BeginScaleformMovieMethod(this.scaleform.Handle, "SET_DATA_SLOT");
    PushScaleformMovieFunctionParameterInt(index);
    for (let i = button.controls.length - 1; i >= 0; i--) {
      PushScaleformMovieMethodParameterButtonName(GetControlInstructionalButton(2, button.controls[i], true));
    }
    PushScaleformMovieMethodParameterString(button.label);
    EndScaleformMovieMethod();
  }
  /**
   * Renders the instructional button scaleform
   */
  async draw() {
    await this.scaleform.render2D();
  }
};

// src/fivem/ui/LoadingPrompt.ts
var LoadingPrompt = class _LoadingPrompt {
  static {
    __name(this, "LoadingPrompt");
  }
  /**
   * Shows a loading prompt.
   *
   * @param loadingText Text to be displayed inside loading prompt.
   * @param spinnerType Type of spinner.
   */
  static show(loadingText = "", spinnerType = 5 /* RegularClockwise */) {
    if (_LoadingPrompt.IsActive) {
      _LoadingPrompt.hide();
    }
    if (loadingText === "") {
      BeginTextCommandBusyString("");
    } else {
      BeginTextCommandBusyString("STRING");
      AddTextComponentSubstringPlayerName(loadingText);
    }
    EndTextCommandBusyString(Number(spinnerType));
  }
  static hide() {
    if (_LoadingPrompt.IsActive) {
      RemoveLoadingPrompt();
    }
  }
  static get IsActive() {
    return IsLoadingPromptBeingDisplayed();
  }
};

// src/fivem/ui/Notification.ts
var Notification = class {
  static {
    __name(this, "Notification");
  }
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  hide() {
    RemoveNotification(this.handle);
  }
};

// src/fivem/ui/Screen.ts
var Screen = class {
  static {
    __name(this, "Screen");
  }
  static get Resolution() {
    const [width, height] = GetScreenActiveResolution();
    return new Size(width, height);
  }
  static get ScaledResolution() {
    const height = this.Height;
    return new Size(height * this.AspectRatio, height);
  }
  static get Width() {
    return this.Resolution.width;
  }
  static get ScaledWidth() {
    return this.Height * this.AspectRatio;
  }
  static get Height() {
    return this.Resolution.height;
  }
  static get AspectRatio() {
    return GetAspectRatio(false);
  }
  static showSubtitle(message, duration = 2500) {
    const strings = _String.stringToArray(message);
    BeginTextCommandPrint("CELL_EMAIL_BCON");
    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });
    EndTextCommandPrint(duration, true);
  }
  static displayHelpTextThisFrame(message) {
    const strings = _String.stringToArray(message);
    BeginTextCommandDisplayHelp("CELL_EMAIL_BCON");
    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });
    EndTextCommandDisplayHelp(0, false, false, -1);
  }
  static showNotification(message, blinking = false) {
    const strings = _String.stringToArray(message);
    SetNotificationTextEntry("CELL_EMAIL_BCON");
    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });
    return new Notification(DrawNotification(blinking, true));
  }
  static showAdvancedNotification(message, title, subtitle, iconSet, icon, bgColor = -1 /* NONE */, flashColor = Color.Transparent, blinking = false, type = 0 /* Default */, showInBrief = true, sound = true) {
    const strings = _String.stringToArray(message);
    SetNotificationTextEntry("CELL_EMAIL_BCON");
    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });
    if (bgColor !== -1 /* NONE */) {
      SetNotificationBackgroundColor(Number(bgColor));
    }
    if (flashColor !== Color.Transparent && blinking) {
      SetNotificationFlashColor(flashColor.r, flashColor.g, flashColor.b, flashColor.a);
    }
    if (sound) {
      Audio.playSoundFrontEnd("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    }
    SetNotificationMessage(iconSet, icon, true, Number(type), title, subtitle);
    return new Notification(DrawNotification(blinking, showInBrief));
  }
  static worldToScreen(position, scaleWidth = false) {
    const coords = GetScreenCoordFromWorldCoord(position.x, position.y, position.z);
    return new Size(coords[1] * (scaleWidth ? this.ScaledWidth : this.Width), coords[2] * this.Height);
  }
};

// src/fivem/ui/Sprite.ts
var Sprite = class {
  static {
    __name(this, "Sprite");
  }
  textureName;
  pos;
  size;
  heading;
  color;
  visible;
  _textureDict;
  constructor(textureDict, textureName, pos, size2, heading = 0, color = Color.White) {
    this._textureDict = textureDict;
    this.textureName = textureName;
    this.pos = pos || new Point();
    this.size = size2 || new Size();
    this.heading = heading || 0;
    this.color = color || Color.White;
    this.visible = true;
  }
  loadTextureDictionary() {
    RequestStreamedTextureDict(this._textureDict, true);
    const interval = setInterval(() => {
      if (this.IsTextureDictionaryLoaded) {
        clearInterval(interval);
      }
    }, 0);
  }
  set TextureDict(v) {
    this._textureDict = v;
    if (!this.IsTextureDictionaryLoaded) {
      this.loadTextureDictionary();
    }
  }
  get TextureDict() {
    return this._textureDict;
  }
  get IsTextureDictionaryLoaded() {
    return HasStreamedTextureDictLoaded(this._textureDict);
  }
  draw(arg1, textureName, pos, size2, heading, color, loadTexture = true, resolution) {
    const textureDictionary = arg1 && typeof arg1 === "string" ? arg1 : this.TextureDict;
    textureName = textureName || this.textureName;
    pos = pos || this.pos;
    size2 = size2 || this.size;
    heading = heading || this.heading;
    color = color || this.color;
    if (loadTexture) {
      if (!HasStreamedTextureDictLoaded(textureDictionary)) {
        RequestStreamedTextureDict(textureDictionary, false);
      }
    }
    resolution = arg1 instanceof Size ? arg1 : resolution;
    resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
    const w = size2.width / resolution.width;
    const h = size2.height / resolution.height;
    const x = pos.X / resolution.width + w * 0.5;
    const y = pos.Y / resolution.height + h * 0.5;
    DrawSprite(textureDictionary, textureName, x, y, w, h, heading, color.r, color.g, color.b, color.a);
  }
};

// src/fivem/ui/Text.ts
var Text = class _Text {
  static {
    __name(this, "Text");
  }
  static draw(caption, pos, scale = 1, color = Color.White, font = 0 /* ChaletLondon */, alignment = 0 /* Left */, dropShadow = false, outline = false, wordWrap, resolution) {
    resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
    const x = pos.X / resolution.width;
    const y = pos.Y / resolution.height;
    SetTextFont(Number(font));
    SetTextScale(1, scale);
    SetTextColour(color.r, color.g, color.b, color.a);
    if (dropShadow) {
      SetTextDropshadow(2, 0, 0, 0, 0);
    }
    if (outline) {
      SetTextOutline();
    }
    switch (alignment) {
      case 1 /* Centered */:
        SetTextCentre(true);
        break;
      case 2 /* Right */:
        SetTextRightJustify(true);
        if (!wordWrap) {
          SetTextWrap(0, x);
        }
        break;
    }
    if (wordWrap) {
      SetTextWrap(x, (pos.X + wordWrap.width) / resolution.width);
    }
    SetTextEntry("STRING");
    _Text.addLongString(caption);
    DrawText(x, y);
  }
  static addLongString(str) {
    const strLen = 99;
    for (let i = 0; i < str.length; i += strLen) {
      const substr = str.substr(i, Math.min(strLen, str.length - i));
      AddTextComponentSubstringPlayerName(substr);
    }
  }
  caption;
  pos;
  scale;
  color;
  font;
  alignment;
  dropShadow;
  outline;
  wordWrap;
  /**
   *
   * @param caption Text to display
   * @param pos Position of text relative to alignment. In pixels.
   * @param scale Size of text. Default 1.0
   * @param color Color of text. Default black.
   * @param font Font of text. Default Chalet London.
   * @param alignment Alignment of text. Default Left.
   * @param dropShadow
   * @param outline
   * @param wordWrap
   */
  constructor(caption, pos, scale = 1, color = Color.White, font = 0 /* ChaletLondon */, alignment = 0 /* Left */, dropShadow = false, outline = false, wordWrap = new Size(500, 300)) {
    this.caption = caption;
    this.pos = pos;
    this.scale = scale;
    this.color = color;
    this.font = font;
    this.alignment = alignment;
    this.dropShadow = dropShadow;
    this.outline = outline;
    this.wordWrap = wordWrap;
  }
  draw(arg1, arg2, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution) {
    resolution = arg2 instanceof Size ? arg2 : resolution;
    if (scale === void 0) {
      if (arg1 && arg1 instanceof Size) {
        arg2 = new Point(this.pos.X + arg1.width, this.pos.Y + arg1.height);
      } else {
        arg2 = this.pos;
      }
      arg1 = this.caption;
      scale = this.scale;
      color = this.color;
      font = this.font;
      alignment = this.alignment;
      dropShadow = this.dropShadow;
      outline = this.outline;
      wordWrap = this.wordWrap;
    } else {
      arg1 = arg1 || this.caption;
      if (!arg2) {
        arg2 = this.pos;
      } else {
        arg2 = arg2;
      }
      scale = scale !== void 0 && scale !== null ? scale : this.scale;
      color = color || this.color;
      font = font !== void 0 && font !== null ? font : this.font;
      alignment = alignment !== void 0 && alignment !== null ? alignment : this.alignment;
      dropShadow = typeof dropShadow === "boolean" ? dropShadow : dropShadow;
      outline = typeof outline === "boolean" ? outline : outline;
      wordWrap = wordWrap || this.wordWrap;
    }
    _Text.draw(arg1, arg2, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution);
  }
};

// src/fivem/ui/Timerbar.ts
var activeTimerBars = [];
var drawText = /* @__PURE__ */ __name((text, position, options) => {
  options = {
    ...{
      align: 1,
      color: [255, 255, 255, 255],
      font: 4,
      outline: true,
      scale: 0.3,
      shadow: true
    },
    ...options
  };
  const font = options.font;
  const scale = options.scale;
  const outline = options.outline;
  const shadow = options.shadow;
  const color = options.color;
  const align = options.align;
  SetTextEntry("CELL_EMAIL_BCON");
  for (let i = 0; i < text.length; i += 99) {
    const subStringText = text.substr(i, Math.min(99, text.length - i));
    AddTextComponentSubstringPlayerName(subStringText);
  }
  SetTextFont(font);
  SetTextScale(scale, scale);
  SetTextColour(color[0], color[1], color[2], color[3]);
  if (shadow) {
    SetTextDropShadow();
  }
  if (outline) {
    SetTextOutline();
  }
  switch (align) {
    case 1: {
      SetTextCentre(true);
      break;
    }
    case 2: {
      SetTextRightJustify(true);
      SetTextWrap(0, position[0] || 0);
      break;
    }
  }
  DrawText(position[0] || 0, position[1] || 0);
}, "drawText");
var Timerbar = class {
  static {
    __name(this, "Timerbar");
  }
  sprite;
  title = "";
  text = "";
  useProgressBar = false;
  usePlayerStyle = false;
  isVisible = false;
  pbarValue = 0;
  textColor = [240, 240, 240, 255];
  pbarBgColor = [155, 155, 155, 255];
  pbarFgColor = [255, 255, 255, 255];
  constructor(title, useProgressBar = false) {
    this.title = title;
    this.useProgressBar = useProgressBar;
    this.text = "";
    this.pbarValue = 0;
    this.textColor = [240, 240, 240, 255];
    this.pbarBgColor = [155, 155, 155, 255];
    this.pbarFgColor = [255, 255, 255, 255];
    this.usePlayerStyle = false;
    const safeZone = GetSafeZoneSize();
    const safeZoneX = (1 - safeZone) * 0.5;
    const safeZoneY = (1 - safeZone) * 0.5;
    this.sprite = new Sprite(
      "timerbars",
      "all_black_bg",
      new Point(Screen.ScaledWidth * 0.918 - safeZoneX, Screen.Height * 0.984 - safeZoneY),
      new Size(Screen.ScaledWidth * 0.165, Screen.Height * 0.035),
      0,
      new Color(255, 255, 255, 160)
    );
    if (!this.sprite.IsTextureDictionaryLoaded) {
      this.sprite.loadTextureDictionary();
    }
    this.isVisible = true;
    activeTimerBars.push(this);
  }
  get Title() {
    return this.title;
  }
  set Title(value) {
    this.title = value;
  }
  get Text() {
    return this.text;
  }
  set Text(value) {
    this.text = value;
  }
  get UseProgressBar() {
    return this.useProgressBar;
  }
  get Progress() {
    return this.pbarValue;
  }
  set Progress(value) {
    this.pbarValue = value <= 0 ? 0 : value >= 1 ? 1 : value;
  }
  get Visible() {
    return this.isVisible;
  }
  set Visible(value) {
    const idx = activeTimerBars.indexOf(this);
    if (value) {
      if (idx !== -1) {
        return;
      }
      activeTimerBars.push(this);
    } else {
      if (idx === -1) {
        return;
      }
      activeTimerBars.splice(idx, 1);
    }
    this.isVisible = value;
  }
  get TextColor() {
    return this.textColor;
  }
  set TextColor(value) {
    if (Array.isArray(value)) {
      this.textColor = value;
    } else {
      const result = GetHudColour(value);
      this.textColor = [result[0], result[1], result[2], result[3]];
    }
  }
  get ProgressbarBgColor() {
    return this.pbarBgColor;
  }
  set ProgressbarBgColor(value) {
    if (Array.isArray(value)) {
      this.pbarBgColor = value;
    } else {
      const result = GetHudColour(value);
      this.pbarBgColor = [result[0], result[1], result[2], result[3]];
    }
  }
  get ProgressbarFgColor() {
    return this.pbarFgColor;
  }
  set ProgressbarFgColor(value) {
    if (Array.isArray(value)) {
      this.pbarFgColor = value;
    } else {
      const result = GetHudColour(value);
      this.pbarFgColor = [result[0], result[1], result[2], result[3]];
    }
  }
  set PlayerStyle(value) {
    this.usePlayerStyle = value;
  }
  get PlayerStyle() {
    return this.usePlayerStyle;
  }
  get Sprite() {
    return this.sprite;
  }
};
setTick(() => {
  if (activeTimerBars.length <= 0) {
    return;
  }
  const safeZone = GetSafeZoneSize();
  const safeZoneX = (1 - safeZone) * 0.5;
  const safeZoneY = (1 - safeZone) * 0.5;
  Hud.hideComponentThisFrame(7 /* AreaName */);
  Hud.hideComponentThisFrame(9 /* StreetName */);
  let loadingPromptOffset = 0;
  if (LoadingPrompt.IsActive) {
    loadingPromptOffset = 0.035 + 0.035 * 0.038 * 2;
  }
  activeTimerBars.forEach((timerbar) => {
    const drawY = 0.984 - loadingPromptOffset - safeZoneY - activeTimerBars.indexOf(timerbar) * 0.038;
    DrawSprite("timerbars", "all_black_bg", 0.918 - safeZoneX, drawY, 0.165, 0.035, 0, 255, 255, 255, 160);
    drawText(timerbar.Title, [0.918 - safeZoneX + 0.012, drawY - 9e-3 - (timerbar.PlayerStyle ? 625e-5 : 0)], {
      align: 2,
      color: timerbar.TextColor,
      font: timerbar.PlayerStyle ? 4 : 0,
      outline: false,
      scale: timerbar.PlayerStyle ? 0.465 : 0.3,
      shadow: timerbar.PlayerStyle
    });
    if (timerbar.UseProgressBar) {
      const pbarX = 0.918 - safeZoneX + 0.047;
      const pbarY = drawY + 15e-4;
      const width = 0.0616 * timerbar.Progress;
      DrawRect(
        pbarX,
        pbarY,
        0.0616,
        0.0105,
        typeof timerbar.ProgressbarBgColor === "number" ? timerbar.ProgressbarBgColor : timerbar.ProgressbarBgColor[0],
        typeof timerbar.ProgressbarBgColor === "number" ? timerbar.ProgressbarBgColor : timerbar.ProgressbarBgColor[1],
        typeof timerbar.ProgressbarBgColor === "number" ? timerbar.ProgressbarBgColor : timerbar.ProgressbarBgColor[2],
        typeof timerbar.ProgressbarBgColor === "number" ? timerbar.ProgressbarBgColor : timerbar.ProgressbarBgColor[3]
      );
      DrawRect(
        pbarX - 0.0616 / 2 + width / 2,
        pbarY,
        width,
        0.0105,
        typeof timerbar.ProgressbarFgColor === "number" ? timerbar.ProgressbarFgColor : timerbar.ProgressbarFgColor[0],
        typeof timerbar.ProgressbarFgColor === "number" ? timerbar.ProgressbarFgColor : timerbar.ProgressbarFgColor[1],
        typeof timerbar.ProgressbarFgColor === "number" ? timerbar.ProgressbarFgColor : timerbar.ProgressbarFgColor[2],
        typeof timerbar.ProgressbarFgColor === "number" ? timerbar.ProgressbarFgColor : timerbar.ProgressbarFgColor[3]
      );
    } else {
      drawText(timerbar.Text, [0.918 - safeZoneX + 0.0785, drawY + -0.0165], {
        align: 2,
        color: timerbar.TextColor,
        font: 0,
        outline: false,
        scale: 0.425,
        shadow: false
      });
    }
  });
});

// src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts
var AbstractUIMenuPanel = class {
  static {
    __name(this, "AbstractUIMenuPanel");
  }
  id = Crypto.uuidv4();
  parentItem;
  enabled = true;
  background;
  get ParentMenu() {
    return this.parentItem ? this.parentItem.parent : void 0;
  }
  get ParentItem() {
    return this.parentItem;
  }
  set ParentItem(value) {
    this.parentItem = value;
  }
  get Enabled() {
    return this.enabled;
  }
  set Enabled(value) {
    this.enabled = value;
  }
  get Height() {
    return this.background ? this.background.size.height : 0;
  }
  setVerticalPosition(y) {
    if (this.background) this.background.pos.Y = y;
  }
  draw() {
    if (this.background) {
      this.background.size.width = 431 + (this.ParentMenu ? this.ParentMenu.WidthOffset : 0);
      this.background.pos.X = this.parentItem ? this.parentItem.offset.X : 0;
      if (this.background instanceof Sprite) {
        this.background.draw(Menu.screenResolution);
      } else {
        this.background.draw(void 0, Menu.screenResolution);
      }
    }
  }
};

// src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts
var UIMenuGridPanel = class extends AbstractUIMenuPanel {
  static {
    __name(this, "UIMenuGridPanel");
  }
  background;
  _isCircleLocked = false;
  _pressed = false;
  _lockXAxis = false;
  _lockYAxis = false;
  _topText;
  _leftText;
  _rightText;
  _bottomText;
  _lastCirclePosition;
  _grid;
  _circle;
  _setCirclePosition;
  constructor(topText, leftText, rightText, bottomText, circlePosition) {
    super();
    this._setCirclePosition = circlePosition || new Point(0.5, 0.5);
    this.background = new Sprite("commonmenu", "gradient_bgd", new Point(), new Size(431, 275));
    this._grid = new Sprite("pause_menu_pages_char_mom_dad", "nose_grid", new Point(), new Size(200, 200));
    this._circle = new Sprite("mpinventory", "in_world_circle", new Point(), new Size(20, 20));
    this.TopText = topText ?? "";
    this.LeftText = leftText ?? "";
    this.RightText = rightText ?? "";
    this.BottomText = bottomText ?? "";
    this._lastCirclePosition = this._setCirclePosition;
  }
  get TopText() {
    return this._topText ? this._topText.caption : "";
  }
  set TopText(value) {
    this._setText("_topText", value);
  }
  get LeftText() {
    return this._leftText ? this._leftText.caption : "";
  }
  set LeftText(value) {
    this._setText("_leftText", value);
  }
  get RightText() {
    return this._rightText ? this._rightText.caption : "";
  }
  set RightText(value) {
    this._setText("_rightText", value);
  }
  get BottomText() {
    return this._bottomText ? this._bottomText.caption : "";
  }
  set BottomText(value) {
    this._setText("_bottomText", value);
  }
  get CirclePosition() {
    return new Point(
      Math.round(
        (this._circle.pos.X - (this._grid.pos.X + 20) + this._circle.size.width / 2) / (this._grid.size.width - 40) * 100
      ) / 100,
      Math.round(
        (this._circle.pos.Y - (this._grid.pos.Y + 20) + this._circle.size.height / 2) / (this._grid.size.height - 40) * 100
      ) / 100
    );
  }
  set CirclePosition(position) {
    this.CirclePositionX = position.X;
    this.CirclePositionY = position.Y;
  }
  set CirclePositionX(x) {
    if (this._isCircleLocked && this._lockXAxis) {
      return;
    }
    x = x >= 0 && x <= 1 ? x : 0;
    this._setCirclePosition.X = x;
    this._circle.pos.X = this._grid.pos.X + 20 + (this._grid.size.width - 40) * x - this._circle.size.width / 2;
  }
  set CirclePositionY(y) {
    if (this._isCircleLocked && this._lockYAxis) {
      return;
    }
    y = y >= 0 && y <= 1 ? y : 0;
    this._setCirclePosition.Y = y;
    this._circle.pos.Y = this._grid.pos.Y + 20 + (this._grid.size.height - 40) * y - this._circle.size.height / 2;
  }
  get LockXAxis() {
    return this._lockXAxis;
  }
  set LockXAxis(value) {
    this._lockXAxis = value;
    if (value) {
      if (this._lockYAxis) {
        this._lockYAxis = false;
      }
      this.CirclePositionX = 0.5;
    }
  }
  get LockYAxis() {
    return this._lockYAxis;
  }
  set LockYAxis(value) {
    this._lockYAxis = value;
    if (value) {
      if (this._lockXAxis) {
        this._lockXAxis = false;
      }
      this.CirclePositionY = 0.5;
    }
  }
  updateParentItem() {
    const last = this._lastCirclePosition;
    const current = this.CirclePosition;
    if (!last || last.X !== current.X || last.Y !== current.Y) {
      this._lastCirclePosition = current;
      if (this.ParentMenu && this.parentItem) {
        this.ParentMenu.panelActivated.emit(this.parentItem, this, current);
        this.parentItem.panelActivated.emit(this, current);
      }
    }
  }
  setVerticalPosition(y) {
    super.setVerticalPosition(y);
    this._grid.pos.Y = y + 37.5;
    if (this._topText) {
      this._topText.pos.Y = y + 5;
    }
    if (this._leftText) {
      this._leftText.pos.Y = y + 120;
    }
    if (this._rightText) {
      this._rightText.pos.Y = y + 120;
    }
    if (this._bottomText) {
      this._bottomText.pos.Y = y + 240;
    }
  }
  draw() {
    if (this.enabled) {
      super.draw();
      const x = this.parentItem?.offset.X ?? 0 + (this.ParentMenu?.WidthOffset ?? 0) / 2;
      this._grid.pos.X = x + 115.5;
      if (!this._isCircleLocked) {
        this.CirclePosition = this._setCirclePosition;
        this._isCircleLocked = true;
      }
      this._grid.draw(Menu.screenResolution);
      this._circle.draw(Menu.screenResolution);
      if (this._topText) {
        this._topText.pos.X = x + 215.5;
        this._topText.draw(void 0, Menu.screenResolution);
      }
      if (this._leftText) {
        this._leftText.pos.X = x + 57.75;
        this._leftText.draw(void 0, Menu.screenResolution);
      }
      if (this._rightText) {
        this._rightText.pos.X = x + 373.25;
        this._rightText.draw(void 0, Menu.screenResolution);
      }
      if (this._bottomText) {
        this._bottomText.pos.X = x + 215.5;
        this._bottomText.draw(void 0, Menu.screenResolution);
      }
      this._processControls();
    }
  }
  _setText(name, value) {
    if (value && value.trim() !== "") {
      if (!this[name]) {
        this[name] = new Text(value, new Point(), 0.35, Color.White, 0 /* ChaletLondon */, 1 /* Centered */);
      } else {
        this[name].caption = value;
      }
    } else if (this[name]) {
      delete this[name];
    }
  }
  _processControls() {
    if (!this._pressed && Game.isDisabledControlJustPressed(0, 24 /* Attack */) && this.ParentMenu?.isMouseInBounds(this._grid.pos, this._grid.size)) {
      this._pressed = true;
      (async () => {
        const drawOffset = this.ParentMenu?.DrawOffset ?? new Point(0, 0);
        while (Game.isDisabledControlPressed(0, 24 /* Attack */)) {
          await Wait(0);
          let cX = (GetControlNormal(0, 239 /* CursorX */) - drawOffset.X) * Menu.screenWidth;
          let cY = (GetControlNormal(0, 240 /* CursorY */) - drawOffset.Y) * Menu.screenHeight;
          cX -= this._circle.size.width / 2;
          cY -= this._circle.size.height / 2;
          this._circle.pos.X = cX > this._grid.pos.X + 10 + this._grid.size.width - (this._lockXAxis ? 120 : 40) ? this._grid.pos.X + 10 + this._grid.size.width - (this._lockXAxis ? 120 : 40) : cX < this._grid.pos.X + (this._lockXAxis ? 100 : 20) - this._circle.size.width / 2 ? this._grid.pos.X + (this._lockXAxis ? 100 : 20) - this._circle.size.width / 2 : cX;
          this._circle.pos.Y = cY > this._grid.pos.Y + 10 + this._grid.size.height - (this._lockYAxis ? 120 : 40) ? this._grid.pos.Y + 10 + this._grid.size.height - (this._lockYAxis ? 120 : 40) : cY < this._grid.pos.Y + (this._lockYAxis ? 100 : 20) - this._circle.size.height / 2 ? this._grid.pos.Y + (this._lockYAxis ? 100 : 20) - this._circle.size.height / 2 : cY;
        }
        this.updateParentItem();
        this._pressed = false;
      })();
      const interval = setInterval(async () => {
        if (Game.isDisabledControlPressed(0, 24 /* Attack */)) {
          this.updateParentItem();
        } else {
          clearInterval(interval);
        }
      }, 75);
    }
  }
};

// src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts
var UIMenuColorPanel = class extends AbstractUIMenuPanel {
  static {
    __name(this, "UIMenuColorPanel");
  }
  background;
  _title = "";
  _text;
  _colors = [];
  _bar = [];
  _lastColor = Color.Transparent;
  _leftArrow;
  _rightArrow;
  _selectedRectangle;
  // Pagination
  _min = 0;
  _max = 8;
  _total = 9;
  _index = 0;
  constructor(title, colors) {
    super();
    this.background = new Sprite("commonmenu", "gradient_bgd", new Point(), new Size(431, 112));
    this._leftArrow = new Sprite("commonmenu", "arrowleft", new Point(), new Size(30, 30));
    this._rightArrow = new Sprite("commonmenu", "arrowright", new Point(), new Size(30, 30));
    this._selectedRectangle = new Rectangle(new Point(), new Size(44.5, 8), Color.White);
    this._text = new Text("", new Point(), 0.35, Color.White, 0 /* ChaletLondon */, 1 /* Centered */);
    this.Title = title;
    this.Colors = colors;
  }
  get Title() {
    return this._title;
  }
  set Title(value) {
    this._title = value ? value.trim() : "";
    this._updateText();
  }
  get Colors() {
    return this._colors;
  }
  set Colors(value) {
    if (!value) {
      value = [];
    }
    this._colors = value;
    this._bar = [];
    const colorRectangles = value.slice(0, this._total).map((color) => {
      return new Rectangle(new Point(0, 0), new Size(44.5, 44.5), color);
    });
    this._bar.push(...colorRectangles);
    this._refreshIndex();
    this._updateSelection(true);
  }
  get Color() {
    return this._colors[this.Index];
  }
  set Color(value) {
    const index = this._colors.findIndex((c) => {
      return c.a === value.a && c.r === value.r && c.g === value.g && c.b === value.b;
    });
    if (index !== -1) {
      this.Index = index;
    }
  }
  get Index() {
    return this._index % this._colors.length;
  }
  set Index(value) {
    value = 1e6 - 1e6 % this._colors.length + value;
    if (this.Index === value % this._colors.length) {
      return;
    }
    this._index = value;
    const currentSelection = this.Index;
    if (currentSelection > this._max) {
      this._min = currentSelection - this._total + 1;
      this._max = currentSelection;
    } else if (currentSelection < this._min) {
      this._min = currentSelection;
      this._max = currentSelection + this._total - 1;
    }
    this._updateSelection();
  }
  updateParentItem() {
    const last = this._lastColor;
    const current = this.Color;
    if (!last || last.a !== current.a || last.r !== current.r || last.g !== current.g || last.b !== current.b) {
      this._lastColor = current;
      if (this.ParentMenu) this.ParentMenu.panelActivated.emit(this.parentItem, this, this.Index, current);
      if (this.parentItem) this.parentItem.panelActivated.emit(this, this.Index, current);
    }
  }
  setVerticalPosition(y) {
    super.setVerticalPosition(y);
    this._selectedRectangle.pos.Y = y + 47;
    this._leftArrow.pos.Y = y + 15;
    this._rightArrow.pos.Y = y + 15;
    this._text.pos.Y = y + 15;
    this._bar.forEach(async (colorRect) => {
      colorRect.pos.Y = y + 55;
    });
  }
  draw() {
    if (this.enabled) {
      super.draw();
      const x = (this.parentItem ? this.parentItem.offset.X : 0) + (this.ParentMenu ? this.ParentMenu.WidthOffset / 2 : 0);
      this._selectedRectangle.pos.X = x + 15 + 44.5 * (this.Index - this._min);
      this._leftArrow.pos.X = x + 7.5;
      this._rightArrow.pos.X = x + 393.5;
      this._text.pos.X = x + 215.5;
      this._leftArrow.draw(Menu.screenResolution);
      this._rightArrow.draw(Menu.screenResolution);
      this._text.draw(void 0, Menu.screenResolution);
      this._selectedRectangle.draw(void 0, Menu.screenResolution);
      this._bar.forEach(async (colorRect, index) => {
        colorRect.pos.X = x + 15 + 44.5 * index;
        colorRect.draw(void 0, Menu.screenResolution);
      });
      this._processControls();
    }
  }
  _refreshIndex() {
    if (!this._colors.length) {
      this._index = 1e3;
    } else {
      this._index = 1e3 - 1e3 % this._colors.length;
    }
    this._max = this._total - 1;
    this._min = 0;
  }
  _updateSelection(preventUpdate = false) {
    if (!preventUpdate) {
      this.updateParentItem();
    }
    this._bar.forEach(async (colorRect, index) => {
      colorRect.color = this._colors[this._min + index];
    });
    this._updateText();
  }
  _updateText() {
    this._text.caption = `${this._title} [${this.Index + 1 || 0} / ${this._colors.length}]`;
  }
  _goLeft() {
    if (this._colors.length > this._total) {
      if (this.Index <= this._min) {
        if (this.Index === 0) {
          this._min = this._colors.length - this._total;
          this._max = this._colors.length - 1;
          this._index = 1e3 - 1e3 % this._colors.length;
          this._index += this._colors.length - 1;
        } else {
          this._min--;
          this._max--;
          this._index--;
        }
      } else {
        this._index--;
      }
    } else {
      this._index--;
    }
    this._updateSelection();
  }
  _goRight() {
    if (this._colors.length > this._total) {
      if (this.Index >= this._max) {
        if (this.Index === this._colors.length - 1) {
          this._min = 0;
          this._max = this._total - 1;
          this._index = 1e3 - 1e3 % this._colors.length;
        } else {
          this._min++;
          this._max++;
          this._index++;
        }
      } else {
        this._index++;
      }
    } else {
      this._index++;
    }
    this._updateSelection();
  }
  _processControls() {
    if (Game.isDisabledControlJustPressed(0, 24 /* Attack */)) {
      if (this.ParentMenu) {
        if (this.ParentMenu.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size)) {
          this._goLeft();
        } else if (this.ParentMenu.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size)) {
          this._goRight();
        }
        this._bar.forEach(async (colorRect, index) => {
          if (this.ParentMenu?.isMouseInBounds(colorRect.pos, colorRect.size)) {
            this.Index = this._min + index;
          }
        });
      }
    }
  }
};

// src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts
var UIMenuPercentagePanel = class extends AbstractUIMenuPanel {
  static {
    __name(this, "UIMenuPercentagePanel");
  }
  background;
  _pressed = false;
  _lastPercentage;
  _title;
  _minText;
  _maxText;
  _activeBar;
  _backgroundBar;
  constructor(title = "", percentage = 0, minText, maxText) {
    super();
    this.background = new Sprite("commonmenu", "gradient_bgd", new Point(), new Size(431, 76));
    const barSize = new Size(413, 10);
    this._activeBar = new Rectangle(new Point(), barSize, Color.fromRgb(245, 245, 245));
    this._backgroundBar = new Rectangle(new Point(), { ...barSize }, Color.fromRgb(87, 87, 87));
    this._title = new Text("", new Point(), 0.35, Color.White, 0 /* ChaletLondon */, 1 /* Centered */);
    this._minText = new Text("", new Point(), 0.35, Color.White, 0 /* ChaletLondon */, 1 /* Centered */);
    this._maxText = new Text("", new Point(), 0.35, Color.White, 0 /* ChaletLondon */, 1 /* Centered */);
    this.Title = title;
    this.MinText = minText || "0%";
    this.MaxText = maxText || "100%";
    this.Percentage = percentage;
    this._lastPercentage = percentage;
  }
  get Title() {
    return this._title.caption;
  }
  set Title(value) {
    this._title.caption = value ? value.trim() : "";
  }
  get MinText() {
    return this._minText.caption;
  }
  set MinText(value) {
    this._minText.caption = value ? value.trim() : "";
  }
  get MaxText() {
    return this._maxText.caption;
  }
  set MaxText(value) {
    this._maxText.caption = value ? value.trim() : "";
  }
  get Percentage() {
    const progress = this._activeBar.size.width / this._backgroundBar.size.width;
    return Math.round(progress * 100) / 100;
  }
  set Percentage(value) {
    value = value || 0;
    value = value < 0 ? 0 : value > 1 ? 1 : value;
    this._activeBar.size.width = this._backgroundBar.size.width * value;
  }
  updateParentItem() {
    const last = this._lastPercentage;
    const current = this.Percentage;
    if (last !== current) {
      this._lastPercentage = current;
      if (this.ParentMenu && this.parentItem) {
        this.ParentMenu.panelActivated.emit(this.parentItem, this, current);
        this.parentItem.panelActivated.emit(this, current);
      }
    }
  }
  setVerticalPosition(y) {
    super.setVerticalPosition(y);
    this._activeBar.pos.Y = y + 50;
    this._backgroundBar.pos.Y = y + 50;
    y += 15;
    this._minText.pos.Y = y;
    this._title.pos.Y = y;
    this._maxText.pos.Y = y;
  }
  draw() {
    if (this.enabled) {
      super.draw();
      const x = this.parentItem?.offset.X ?? 0 + (this.ParentMenu?.WidthOffset ?? 0) / 2;
      this._activeBar.pos.X = x + 9;
      this._backgroundBar.pos.X = x + 9;
      this._minText.pos.X = x + 25;
      this._title.pos.X = x + 215.5;
      this._maxText.pos.X = x + 398;
      this._backgroundBar.draw(void 0, Menu.screenResolution);
      this._activeBar.draw(void 0, Menu.screenResolution);
      this._minText.draw(void 0, Menu.screenResolution);
      this._title.draw(void 0, Menu.screenResolution);
      this._maxText.draw(void 0, Menu.screenResolution);
      this._processControls();
    }
  }
  _processControls() {
    if (!this._pressed && Game.isDisabledControlJustPressed(0, 24 /* Attack */) && this.ParentMenu?.isMouseInBounds(
      new Point(this._backgroundBar.pos.X, this._backgroundBar.pos.Y - 4),
      new Size(this._backgroundBar.size.width, this._backgroundBar.size.height + 8)
    )) {
      this._pressed = true;
      (async () => {
        while (Game.isDisabledControlPressed(0, 24 /* Attack */)) {
          await Wait(0);
          this._activeBar.size.width = this._getProgress();
        }
        this.updateParentItem();
        this._pressed = false;
      })();
      const interval = setInterval(async () => {
        if (Game.isDisabledControlPressed(0, 24 /* Attack */)) {
          this.updateParentItem();
        } else {
          clearInterval(interval);
        }
      }, 75);
    }
  }
  _getProgress() {
    const drawOffset = this.ParentMenu?.DrawOffset ?? new Point(0, 0);
    const progress = (GetControlNormal(0, 239) - drawOffset.X) * Menu.screenWidth - this._activeBar.pos.X;
    return progress < 0 ? 0 : progress > 413 ? 413 : progress;
  }
};

// src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts
var UIMenuStatisticsPanel = class extends AbstractUIMenuPanel {
  static {
    __name(this, "UIMenuStatisticsPanel");
  }
  background;
  _divider = true;
  _items = [];
  constructor(item, divider = true) {
    super();
    this.background = new Rectangle(new Point(), new Size(431, 47), new Color(0, 0, 0, 170));
    if (item) {
      this.addItem(item);
    }
    this.Divider = divider;
  }
  get Divider() {
    return this._divider;
  }
  set Divider(value) {
    this._divider = value || false;
  }
  get Items() {
    return this._items;
  }
  set Items(value) {
    this._items = value;
  }
  addItem(item) {
    const items = Array.isArray(item) ? item : [item];
    this._items.push(...items);
  }
  removeItem(itemOrIndex) {
    if (typeof itemOrIndex === "number") {
      this._items = this._items.filter((i, index) => index !== itemOrIndex);
    } else {
      this._items = this._items.filter((i) => i.id !== itemOrIndex.id);
    }
  }
  setVerticalPosition(y) {
    super.setVerticalPosition(y);
    this._items.forEach(async (item, index) => {
      const itemCountOffset = 40 * (index + 1);
      const yOffset = y + itemCountOffset - 22;
      item.backgroundBar.pos.Y = yOffset;
      item.activeBar.pos.Y = yOffset;
      item.text.pos.Y = yOffset - 12;
      if (this._divider) {
        item.divider.forEach(async (divider) => {
          divider.pos.Y = yOffset;
        });
      }
    });
  }
  draw() {
    if (this.enabled) {
      super.draw();
      const x = this.parentItem?.offset.X ?? 0 + (this.ParentMenu?.WidthOffset ?? 0) / 2;
      this._items.forEach(async (item, index) => {
        const itemCountOffset = 40 * (index + 1);
        item.backgroundBar.pos.X = x + 200;
        item.activeBar.pos.X = x + 200;
        item.text.pos.X = x + 13;
        item.backgroundBar.draw(void 0, Menu.screenResolution);
        item.activeBar.draw(void 0, Menu.screenResolution);
        item.text.draw(void 0, Menu.screenResolution);
        if (this._divider) {
          item.divider.forEach(async (divider, index2) => {
            const dividerWidthOffset = (index2 + 1) * 40;
            divider.pos.X = x + dividerWidthOffset + 200;
            this.background.size.height = itemCountOffset + 47 - 39;
            divider.draw(void 0, Menu.screenResolution);
          });
        }
      });
    }
  }
};

// src/fivem/ui/menu/items/panels/UIMenuStatisticsPanelItem.ts
var UIMenuStatisticsPanelItem = class {
  static {
    __name(this, "UIMenuStatisticsPanelItem");
  }
  id = Crypto.uuidv4();
  text;
  activeBar;
  backgroundBar;
  divider = [];
  constructor(name, percentage = 0) {
    this.text = new Text("", new Point(), 0.35, Color.White, 0 /* ChaletLondon */, 0 /* Left */);
    this.backgroundBar = new Rectangle(new Point(), new Size(200, 10), Color.fromArgb(100, 87, 87, 87));
    this.activeBar = new Rectangle(new Point(), new Size(0, 10), Color.White);
    for (let i = 1; i <= 4; i++) {
      this.divider.push(new Rectangle(new Point(), new Size(2, 10), Color.Black));
    }
    this.Name = name;
    this.Percentage = percentage;
  }
  get Name() {
    return this.text.caption;
  }
  set Name(value) {
    this.text.caption = value ? value.trim() : "";
  }
  get Percentage() {
    return this.activeBar.size.width / 200;
  }
  set Percentage(value) {
    value = value || 0;
    value = Math.round(value * 100) / 100;
    value = value < 0 ? 0 : value > 1 ? 1 : value;
    this.activeBar.size.width = value * 200;
  }
};

// src/fivem/ui/menu/items/UIMenuItem.ts
var UIMenuItem = class _UIMenuItem {
  static {
    __name(this, "UIMenuItem");
  }
  static badgeToTextureDict(badge) {
    switch (badge) {
      case 29 /* Male */:
      case 28 /* Female */:
      case 105 /* AudioMute */:
      case 106 /* AudioInactive */:
      case 107 /* AudioVol1 */:
      case 108 /* AudioVol2 */:
      case 109 /* AudioVol3 */:
        return "mpleaderboard";
      case 63 /* InvArmWrestling */:
      case 64 /* InvBasejump */:
      case 65 /* InvMission */:
      case 66 /* InvDarts */:
      case 67 /* InvDeathmatch */:
      case 68 /* InvDrug */:
      case 69 /* InvCastle */:
      case 70 /* InvGolf */:
      case 71 /* InvBike */:
      case 72 /* InvBoat */:
      case 73 /* InvAnchor */:
      case 74 /* InvCar */:
      case 75 /* InvDollar */:
      case 76 /* InvCoke */:
      case 77 /* InvKey */:
      case 78 /* InvData */:
      case 79 /* InvHeli */:
      case 80 /* InvHeorin */:
      case 81 /* InvKeycard */:
      case 82 /* InvMeth */:
      case 83 /* InvBriefcase */:
      case 84 /* InvLink */:
      case 85 /* InvPerson */:
      case 86 /* InvPlane */:
      case 87 /* InvPlane2 */:
      case 88 /* InvQuestionmark */:
      case 89 /* InvRemote */:
      case 90 /* InvSafe */:
      case 91 /* InvSteerWheel */:
      case 92 /* InvWeapon */:
      case 93 /* InvWeed */:
      case 94 /* InvRaceFlagPlane */:
      case 95 /* InvRaceFlagBicycle */:
      case 96 /* InvRaceFlagBoatAnchor */:
      case 97 /* InvRaceFlagPerson */:
      case 98 /* InvRaceFlagCar */:
      case 99 /* InvRaceFlagHelmet */:
      case 100 /* InvShootingRange */:
      case 101 /* InvSurvival */:
      case 102 /* InvTeamDeathmatch */:
      case 103 /* InvTennis */:
      case 104 /* InvVehicleDeathmatch */:
        return "mpinventory";
      case 31 /* Adversary */:
      case 32 /* BaseJumping */:
      case 33 /* Briefcase */:
      case 34 /* MissionStar */:
      case 35 /* Deathmatch */:
      case 36 /* Castle */:
      case 37 /* Trophy */:
      case 38 /* RaceFlag */:
      case 39 /* RaceFlagPlane */:
      case 40 /* RaceFlagBicycle */:
      case 41 /* RaceFlagPerson */:
      case 42 /* RaceFlagCar */:
      case 43 /* RaceFlagBoatAnchor */:
      case 44 /* Rockstar */:
      case 45 /* Stunt */:
      case 46 /* StuntPremium */:
      case 47 /* RaceFlagStuntJump */:
      case 48 /* Shield */:
      case 49 /* TeamDeathmatch */:
      case 50 /* VehicleDeathmatch */:
        return "commonmenutu";
      case 51 /* MpAmmoPickup */:
      case 52 /* MpAmmo */:
      case 53 /* MpCash */:
      case 54 /* MpRp */:
      case 55 /* MpSpectating */:
        return "mphud";
      case 56 /* Sale */:
        return "mpshopsale";
      case 57 /* GlobeWhite */:
      case 58 /* GlobeRed */:
      case 59 /* GlobeBlue */:
      case 60 /* GlobeYellow */:
      case 61 /* GlobeGreen */:
      case 62 /* GlobeOrange */:
        return "mprankbadge";
      case 110 /* CountryUsa */:
      case 111 /* CountryUk */:
      case 112 /* CountrySweden */:
      case 113 /* CountryKorea */:
      case 114 /* CountryJapan */:
      case 115 /* CountryItaly */:
      case 116 /* CountryGermany */:
      case 117 /* CountryFrance */:
      case 118 /* BrandAlbany */:
      case 119 /* BrandAnnis */:
      case 120 /* BrandBanshee */:
      case 121 /* BrandBenefactor */:
      case 122 /* BrandBf */:
      case 123 /* BrandBollokan */:
      case 124 /* BrandBravado */:
      case 125 /* BrandBrute */:
      case 126 /* BrandBuckingham */:
      case 127 /* BrandCanis */:
      case 128 /* BrandChariot */:
      case 129 /* BrandCheval */:
      case 130 /* BrandClassique */:
      case 131 /* BrandCoil */:
      case 132 /* BrandDeclasse */:
      case 133 /* BrandDewbauchee */:
      case 134 /* BrandDilettante */:
      case 135 /* BrandDinka */:
      case 136 /* BrandDundreary */:
      case 137 /* BrandEmporer */:
      case 138 /* BrandEnus */:
      case 139 /* BrandFathom */:
      case 140 /* BrandGalivanter */:
      case 141 /* BrandGrotti */:
      case 143 /* BrandHijak */:
      case 144 /* BrandHvy */:
      case 145 /* BrandImponte */:
      case 146 /* BrandInvetero */:
      case 147 /* BrandJacksheepe */:
      case 149 /* BrandJobuilt */:
      case 150 /* BrandKarin */:
      case 151 /* BrandLampadati */:
      case 152 /* BrandMaibatsu */:
      case 153 /* BrandMammoth */:
      case 154 /* BrandMtl */:
      case 155 /* BrandNagasaki */:
      case 156 /* BrandObey */:
      case 157 /* BrandOcelot */:
      case 158 /* BrandOverflod */:
      case 159 /* BrandPed */:
      case 160 /* BrandPegassi */:
      case 161 /* BrandPfister */:
      case 162 /* BrandPrincipe */:
      case 163 /* BrandProgen */:
      case 166 /* BrandSchyster */:
      case 167 /* BrandShitzu */:
      case 168 /* BrandSpeedophile */:
      case 169 /* BrandStanley */:
      case 170 /* BrandTruffade */:
      case 171 /* BrandUbermacht */:
      case 172 /* BrandVapid */:
      case 173 /* BrandVulcar */:
      case 174 /* BrandWeeny */:
      case 175 /* BrandWestern */:
      case 176 /* BrandWesternmotorcycle */:
      case 177 /* BrandWillard */:
      case 178 /* BrandZirconium */:
        return "mpcarhud";
      case 142 /* BrandGrotti2 */:
      case 148 /* BrandLcc */:
      case 164 /* BrandProgen2 */:
      case 165 /* BrandRune */:
        return "mpcarhud2";
      case 179 /* Info */:
        return "shared";
      default:
        return "commonmenu";
    }
  }
  static getBadgeSpriteWidthOffset(sprite) {
    return (40 - sprite.size.width) / 2;
  }
  static getBadgeSpriteHeightOffset(sprite) {
    return (40 - sprite.size.height) / 2;
  }
  static getBadgeSize(badge) {
    switch (badge) {
      case 8 /* Cash */:
      case 9 /* Coke */:
      case 4 /* Crown */:
      case 10 /* Heroin */:
      case 11 /* Meth */:
      case 12 /* Weed */:
      case 31 /* Adversary */:
      case 32 /* BaseJumping */:
      case 33 /* Briefcase */:
      case 34 /* MissionStar */:
      case 35 /* Deathmatch */:
      case 36 /* Castle */:
      case 37 /* Trophy */:
      case 38 /* RaceFlag */:
      case 39 /* RaceFlagPlane */:
      case 40 /* RaceFlagBicycle */:
      case 41 /* RaceFlagPerson */:
      case 42 /* RaceFlagCar */:
      case 43 /* RaceFlagBoatAnchor */:
      case 44 /* Rockstar */:
      case 45 /* Stunt */:
      case 46 /* StuntPremium */:
      case 47 /* RaceFlagStuntJump */:
      case 48 /* Shield */:
      case 49 /* TeamDeathmatch */:
      case 50 /* VehicleDeathmatch */:
      case 105 /* AudioMute */:
      case 106 /* AudioInactive */:
      case 107 /* AudioVol1 */:
      case 108 /* AudioVol2 */:
      case 109 /* AudioVol3 */:
      case 118 /* BrandAlbany */:
      case 119 /* BrandAnnis */:
      case 120 /* BrandBanshee */:
      case 121 /* BrandBenefactor */:
      case 122 /* BrandBf */:
      case 123 /* BrandBollokan */:
      case 124 /* BrandBravado */:
      case 125 /* BrandBrute */:
      case 126 /* BrandBuckingham */:
      case 127 /* BrandCanis */:
      case 128 /* BrandChariot */:
      case 129 /* BrandCheval */:
      case 130 /* BrandClassique */:
      case 131 /* BrandCoil */:
      case 132 /* BrandDeclasse */:
      case 133 /* BrandDewbauchee */:
      case 134 /* BrandDilettante */:
      case 135 /* BrandDinka */:
      case 136 /* BrandDundreary */:
      case 137 /* BrandEmporer */:
      case 138 /* BrandEnus */:
      case 139 /* BrandFathom */:
      case 140 /* BrandGalivanter */:
      case 141 /* BrandGrotti */:
      case 143 /* BrandHijak */:
      case 144 /* BrandHvy */:
      case 145 /* BrandImponte */:
      case 146 /* BrandInvetero */:
      case 147 /* BrandJacksheepe */:
      case 149 /* BrandJobuilt */:
      case 150 /* BrandKarin */:
      case 151 /* BrandLampadati */:
      case 152 /* BrandMaibatsu */:
      case 153 /* BrandMammoth */:
      case 154 /* BrandMtl */:
      case 155 /* BrandNagasaki */:
      case 156 /* BrandObey */:
      case 157 /* BrandOcelot */:
      case 158 /* BrandOverflod */:
      case 159 /* BrandPed */:
      case 160 /* BrandPegassi */:
      case 161 /* BrandPfister */:
      case 162 /* BrandPrincipe */:
      case 163 /* BrandProgen */:
      case 166 /* BrandSchyster */:
      case 167 /* BrandShitzu */:
      case 168 /* BrandSpeedophile */:
      case 169 /* BrandStanley */:
      case 170 /* BrandTruffade */:
      case 171 /* BrandUbermacht */:
      case 172 /* BrandVapid */:
      case 173 /* BrandVulcar */:
      case 174 /* BrandWeeny */:
      case 175 /* BrandWestern */:
      case 176 /* BrandWesternmotorcycle */:
      case 177 /* BrandWillard */:
      case 178 /* BrandZirconium */:
      case 142 /* BrandGrotti2 */:
      case 148 /* BrandLcc */:
      case 164 /* BrandProgen2 */:
      case 165 /* BrandRune */:
      case 110 /* CountryUsa */:
      case 111 /* CountryUk */:
      case 112 /* CountrySweden */:
      case 113 /* CountryKorea */:
      case 114 /* CountryJapan */:
      case 115 /* CountryItaly */:
      case 116 /* CountryGermany */:
      case 117 /* CountryFrance */:
        return new Size(30, 30);
      case 7 /* MedalSilver */:
      case 51 /* MpAmmoPickup */:
      case 52 /* MpAmmo */:
      case 53 /* MpCash */:
      case 54 /* MpRp */:
      case 57 /* GlobeWhite */:
      case 59 /* GlobeBlue */:
      case 61 /* GlobeGreen */:
      case 62 /* GlobeOrange */:
      case 58 /* GlobeRed */:
      case 60 /* GlobeYellow */:
      case 63 /* InvArmWrestling */:
      case 64 /* InvBasejump */:
      case 65 /* InvMission */:
      case 66 /* InvDarts */:
      case 67 /* InvDeathmatch */:
      case 68 /* InvDrug */:
      case 69 /* InvCastle */:
      case 70 /* InvGolf */:
      case 71 /* InvBike */:
      case 72 /* InvBoat */:
      case 73 /* InvAnchor */:
      case 74 /* InvCar */:
      case 75 /* InvDollar */:
      case 76 /* InvCoke */:
      case 77 /* InvKey */:
      case 78 /* InvData */:
      case 79 /* InvHeli */:
      case 80 /* InvHeorin */:
      case 81 /* InvKeycard */:
      case 82 /* InvMeth */:
      case 83 /* InvBriefcase */:
      case 84 /* InvLink */:
      case 85 /* InvPerson */:
      case 86 /* InvPlane */:
      case 87 /* InvPlane2 */:
      case 88 /* InvQuestionmark */:
      case 89 /* InvRemote */:
      case 90 /* InvSafe */:
      case 91 /* InvSteerWheel */:
      case 92 /* InvWeapon */:
      case 93 /* InvWeed */:
      case 94 /* InvRaceFlagPlane */:
      case 95 /* InvRaceFlagBicycle */:
      case 96 /* InvRaceFlagBoatAnchor */:
      case 97 /* InvRaceFlagPerson */:
      case 98 /* InvRaceFlagCar */:
      case 99 /* InvRaceFlagHelmet */:
      case 100 /* InvShootingRange */:
      case 101 /* InvSurvival */:
      case 102 /* InvTeamDeathmatch */:
      case 103 /* InvTennis */:
      case 104 /* InvVehicleDeathmatch */:
        return new Size(25, 25);
      default:
        return new Size(40, 40);
    }
  }
  static defaultBackColor = Color.Transparent;
  static defaultHighlightedBackColor = Color.White;
  static defaultHoveredBackColor = new Color(255, 255, 255, 25);
  static defaultForeColor = Color.WhiteSmoke;
  static defaultHoveredForeColor = _UIMenuItem.defaultForeColor;
  static defaultHighlightedForeColor = Color.Black;
  id = Crypto.uuidv4();
  enabled = true;
  selected = false;
  hovered = false;
  offset = new Point(0, 0);
  parent;
  activated = new LiteEvent();
  panelActivated = new LiteEvent();
  supportsDescription = true;
  supportsPanels = true;
  supportsLeftBadge = true;
  supportsRightBadge = true;
  supportsRightLabel = true;
  rectangle;
  text;
  selectedSprite;
  badgeLeft;
  badgeRight;
  labelText;
  _description = "";
  _formattedDescription = "";
  _backColor = _UIMenuItem.defaultBackColor;
  _highlightedBackColor = _UIMenuItem.defaultHighlightedBackColor;
  _foreColor = _UIMenuItem.defaultForeColor;
  _highlightedForeColor = _UIMenuItem.defaultHighlightedForeColor;
  _leftBadge = 0 /* None */;
  _rightBadge = 0 /* None */;
  _event = { event: "", args: [] };
  _panels = [];
  constructor(text, description) {
    this.rectangle = new Rectangle(new Point(), new Size(431, 38), this._backColor);
    this.text = new Text("", new Point(), 0.33, this._foreColor, 0 /* ChaletLondon */, 0 /* Left */);
    this.selectedSprite = new Sprite(
      "commonmenu",
      "gradient_nav",
      new Point(),
      new Size(431, 38),
      0,
      this._highlightedBackColor
    );
    this.badgeLeft = new Sprite("", "");
    this.badgeRight = new Sprite("", "");
    this.labelText = new Text("", new Point(), 0.35, this._foreColor, 0, 2 /* Right */);
    this.Text = text;
    this.Description = description ?? "";
  }
  get Text() {
    return this.text.caption;
  }
  set Text(value) {
    this.text.caption = value ? value.trim() : "";
  }
  get Description() {
    if (!this.supportsDescription) {
      return "";
    }
    return this._description;
  }
  set Description(value) {
    if (!this.supportsDescription) {
      throw new Error("This item does not support description");
    }
    this._description = value ? value.trim() : "";
    this.formatDescription();
  }
  get FormattedDescription() {
    return this._formattedDescription;
  }
  get BackColor() {
    return this._backColor;
  }
  set BackColor(value) {
    value = value || this._backColor;
    this._backColor = value;
    this.rectangle.color = value;
  }
  get HighlightedBackColor() {
    return this._highlightedBackColor;
  }
  set HighlightedBackColor(value) {
    value = value || this._highlightedBackColor;
    this._highlightedBackColor = value;
    this.selectedSprite.color = value;
  }
  get ForeColor() {
    return this._foreColor;
  }
  set ForeColor(value) {
    value = value || this._foreColor;
    this._foreColor = value;
    this.text.color = value;
  }
  get HighlightedForeColor() {
    return this._highlightedForeColor;
  }
  set HighlightedForeColor(value) {
    this._highlightedForeColor = value || this._highlightedForeColor;
  }
  get LeftBadge() {
    if (!this.supportsLeftBadge) {
      return 0 /* None */;
    }
    return this._leftBadge;
  }
  set LeftBadge(value) {
    if (!this.supportsLeftBadge) {
      throw new Error("This item does not support left badge");
    }
    value = Number(value);
    this._leftBadge = value;
    this.badgeLeft.TextureDict = _UIMenuItem.badgeToTextureDict(value);
    this.badgeLeft.size = _UIMenuItem.getBadgeSize(value);
  }
  get RightBadge() {
    if (!this.supportsRightBadge) {
      return 0 /* None */;
    }
    return this._rightBadge;
  }
  set RightBadge(value) {
    if (!this.supportsRightBadge) {
      throw new Error("This item does not support right badge");
    }
    value = Number(value);
    this._rightBadge = value;
    this.badgeRight.TextureDict = _UIMenuItem.badgeToTextureDict(value);
    this.badgeRight.size = _UIMenuItem.getBadgeSize(value);
  }
  get RightLabel() {
    if (!this.supportsRightLabel) {
      return "";
    }
    return this.labelText.caption;
  }
  set RightLabel(value) {
    if (!this.supportsRightLabel) {
      throw new Error("This item does not support right label");
    }
    this.labelText.caption = value ? value.trim() : "";
  }
  get IsMouseInBounds() {
    return this.parent ? this.parent.isMouseInBounds(this.rectangle.pos, this.rectangle.size) : false;
  }
  get Panels() {
    if (!this.supportsPanels) {
      return [];
    }
    return this._panels;
  }
  set Panels(value) {
    if (!this.supportsPanels) {
      throw new Error("This item does not support panels");
    }
    this._panels = value;
  }
  addPanel(panel) {
    if (!this.supportsPanels) {
      throw new Error("This item does not support panels");
    }
    const panels = Array.isArray(panel) ? panel : [panel];
    panels.forEach((p) => {
      p.ParentItem = this;
    });
    this._panels.push(...panels);
  }
  findPanelIndex(panel) {
    if (!this.supportsPanels) {
      throw new Error("This item does not support panels");
    }
    const index = this._panels.findIndex((p) => p.id === panel.id);
    return index !== -1 ? index : 0;
  }
  removePanel(panelOrIndex) {
    if (!this.supportsPanels) {
      throw new Error("This item does not support panels");
    }
    if (typeof panelOrIndex === "number") {
      this._panels = this._panels.filter((p, index) => index !== panelOrIndex);
    } else {
      this._panels = this._panels.filter((p) => p.id !== panelOrIndex.id);
    }
  }
  addEvent(event, ...args) {
    this._event = { event, args };
  }
  fireEvent() {
    if (this._event) {
      TriggerEvent(this._event.event, ...this._event.args);
    }
  }
  formatDescription() {
    if (!this.parent) {
      return;
    }
    let input = this._description;
    if (input.length > 99) {
      input = input.slice(0, 99);
    }
    const maxPixelsPerLine = 425 + this.parent.WidthOffset;
    let aggregatePixels = 0;
    let output = "";
    const words = input.split(" ");
    const spaceWidth = _String.measureString(" ", 0 /* ChaletLondon */, 0.33, Menu.screenWidth);
    for (const word of words) {
      const offset = _String.measureString(word, 0 /* ChaletLondon */, 0.33, Menu.screenWidth);
      aggregatePixels += offset;
      if (aggregatePixels > maxPixelsPerLine) {
        output = `${output} 
${word} `;
        aggregatePixels = offset + spaceWidth;
      } else {
        output = `${output}${word} `;
        aggregatePixels += spaceWidth;
      }
    }
    this._formattedDescription = output;
  }
  badgeToTextureName(badge) {
    const selected = this.selected;
    switch (badge) {
      case 0 /* None */:
        return "";
      case 13 /* Ammo */:
        return selected ? "shop_ammo_icon_b" : "shop_ammo_icon_a";
      case 14 /* Armor */:
        return selected ? "shop_armour_icon_b" : "shop_armour_icon_a";
      case 15 /* Barber */:
        return selected ? "shop_barber_icon_b" : "shop_barber_icon_a";
      case 18 /* Bike */:
        return selected ? "shop_garage_bike_icon_b" : "shop_garage_bike_icon_a";
      case 19 /* Car */:
        return selected ? "shop_garage_icon_b" : "shop_garage_icon_a";
      case 8 /* Cash */:
        return "mp_specitem_cash";
      case 16 /* Clothing */:
        return selected ? "shop_clothing_icon_b" : "shop_clothing_icon_a";
      case 9 /* Coke */:
        return "mp_specitem_coke";
      case 4 /* Crown */:
        return "mp_hostcrown";
      case 17 /* Franklin */:
        return selected ? "shop_franklin_icon_b" : "shop_franklin_icon_a";
      case 20 /* Gun */:
        return selected ? "shop_gunclub_icon_b" : "shop_gunclub_icon_a";
      case 21 /* HealthHeart */:
        return selected ? "shop_health_icon_b" : "shop_health_icon_a";
      case 10 /* Heroin */:
        return "mp_specitem_heroin";
      case 1 /* Lock */:
        return "shop_lock";
      case 22 /* MakeupBrush */:
        return selected ? "shop_makeup_icon_b" : "shop_makeup_icon_a";
      case 23 /* Mask */:
        return selected ? "shop_mask_icon_b" : "shop_mask_icon_a";
      case 5 /* MedalBronze */:
        return "mp_medal_bronze";
      case 6 /* MedalGold */:
        return "mp_medal_gold";
      case 7 /* MedalSilver */:
        return "mp_medal_silver";
      case 11 /* Meth */:
        return "mp_specitem_meth";
      case 24 /* Michael */:
        return selected ? "shop_michael_icon_b" : "shop_michael_icon_a";
      case 2 /* Star */:
        return "shop_new_star";
      case 25 /* Tattoo */:
        return selected ? "shop_tattoos_icon_b" : "shop_tattoos_icon_a";
      case 26 /* Tick */:
        return "shop_tick_icon";
      case 27 /* Trevor */:
        return selected ? "shop_trevor_icon_b" : "shop_trevor_icon_a";
      case 3 /* Warning */:
        return "mp_alerttriangle";
      case 12 /* Weed */:
        return "mp_specitem_weed";
      case 29 /* Male */:
        return "leaderboard_male_icon";
      case 28 /* Female */:
        return "leaderboard_female_icon";
      case 30 /* LockArena */:
        return "shop_lock_arena";
      case 31 /* Adversary */:
        return "adversary";
      case 32 /* BaseJumping */:
        return "base_jumping";
      case 33 /* Briefcase */:
        return "capture_the_flag";
      case 34 /* MissionStar */:
        return "custom_mission";
      case 35 /* Deathmatch */:
        return "deathmatch";
      case 36 /* Castle */:
        return "gang_attack";
      case 37 /* Trophy */:
        return "last_team_standing";
      case 38 /* RaceFlag */:
        return "race";
      case 39 /* RaceFlagPlane */:
        return "race_air";
      case 40 /* RaceFlagBicycle */:
        return "race_bicycle";
      case 41 /* RaceFlagPerson */:
        return "race_foot";
      case 42 /* RaceFlagCar */:
        return "race_land";
      case 43 /* RaceFlagBoatAnchor */:
        return "race_water";
      case 44 /* Rockstar */:
        return "rockstar";
      case 45 /* Stunt */:
        return "stunt";
      case 46 /* StuntPremium */:
        return "stunt_premium";
      case 47 /* RaceFlagStuntJump */:
        return "stunt_race";
      case 48 /* Shield */:
        return "survival";
      case 49 /* TeamDeathmatch */:
        return "team_deathmatch";
      case 50 /* VehicleDeathmatch */:
        return "vehicle_deathmatch";
      case 51 /* MpAmmoPickup */:
        return "ammo_pickup";
      case 52 /* MpAmmo */:
        return "mp_anim_ammo";
      case 53 /* MpCash */:
        return "mp_anim_cash";
      case 54 /* MpRp */:
        return "mp_anim_rp";
      case 55 /* MpSpectating */:
        return "spectating";
      case 56 /* Sale */:
        return "saleicon";
      case 57 /* GlobeWhite */:
      case 58 /* GlobeRed */:
      case 59 /* GlobeBlue */:
      case 60 /* GlobeYellow */:
      case 61 /* GlobeGreen */:
      case 62 /* GlobeOrange */:
        return "globe";
      case 63 /* InvArmWrestling */:
        return "arm_wrestling";
      case 64 /* InvBasejump */:
        return "basejump";
      case 65 /* InvMission */:
        return "custom_mission";
      case 66 /* InvDarts */:
        return "darts";
      case 67 /* InvDeathmatch */:
        return "deathmatch";
      case 68 /* InvDrug */:
        return "drug_trafficking";
      case 69 /* InvCastle */:
        return "gang_attack";
      case 70 /* InvGolf */:
        return "golf";
      case 71 /* InvBike */:
        return "mp_specitem_bike";
      case 72 /* InvBoat */:
        return "mp_specitem_boat";
      case 73 /* InvAnchor */:
        return "mp_specitem_boatpickup";
      case 74 /* InvCar */:
        return "mp_specitem_car";
      case 75 /* InvDollar */:
        return "mp_specitem_cash";
      case 76 /* InvCoke */:
        return "mp_specitem_coke";
      case 77 /* InvKey */:
        return "mp_specitem_cuffkeys";
      case 78 /* InvData */:
        return "mp_specitem_data";
      case 79 /* InvHeli */:
        return "mp_specitem_heli";
      case 80 /* InvHeorin */:
        return "mp_specitem_heroin";
      case 81 /* InvKeycard */:
        return "mp_specitem_keycard";
      case 82 /* InvMeth */:
        return "mp_specitem_meth";
      case 83 /* InvBriefcase */:
        return "mp_specitem_package";
      case 84 /* InvLink */:
        return "mp_specitem_partnericon";
      case 85 /* InvPerson */:
        return "mp_specitem_ped";
      case 86 /* InvPlane */:
        return "mp_specitem_plane";
      case 87 /* InvPlane2 */:
        return "mp_specitem_plane2";
      case 88 /* InvQuestionmark */:
        return "mp_specitem_randomobject";
      case 89 /* InvRemote */:
        return "mp_specitem_remote";
      case 90 /* InvSafe */:
        return "mp_specitem_safe";
      case 91 /* InvSteerWheel */:
        return "mp_specitem_steer_wheel";
      case 92 /* InvWeapon */:
        return "mp_specitem_weapons";
      case 93 /* InvWeed */:
        return "mp_specitem_weed";
      case 94 /* InvRaceFlagPlane */:
        return "race_air";
      case 95 /* InvRaceFlagBicycle */:
        return "race_bike";
      case 96 /* InvRaceFlagBoatAnchor */:
        return "race_boat";
      case 97 /* InvRaceFlagPerson */:
        return "race_foot";
      case 98 /* InvRaceFlagCar */:
        return "race_land";
      case 99 /* InvRaceFlagHelmet */:
        return "race_offroad";
      case 100 /* InvShootingRange */:
        return "shooting_range";
      case 101 /* InvSurvival */:
        return "survival";
      case 102 /* InvTeamDeathmatch */:
        return "team_deathmatch";
      case 103 /* InvTennis */:
        return "tennis";
      case 104 /* InvVehicleDeathmatch */:
        return "vehicle_deathmatch";
      case 105 /* AudioMute */:
        return "leaderboard_audio_mute";
      case 106 /* AudioInactive */:
        return "leaderboard_audio_inactive";
      case 107 /* AudioVol1 */:
        return "leaderboard_audio_1";
      case 108 /* AudioVol2 */:
        return "leaderboard_audio_2";
      case 109 /* AudioVol3 */:
        return "leaderboard_audio_3";
      case 110 /* CountryUsa */:
        return "vehicle_card_icons_flag_usa";
      case 111 /* CountryUk */:
        return "vehicle_card_icons_flag_uk";
      case 112 /* CountrySweden */:
        return "vehicle_card_icons_flag_sweden";
      case 113 /* CountryKorea */:
        return "vehicle_card_icons_flag_korea";
      case 114 /* CountryJapan */:
        return "vehicle_card_icons_flag_japan";
      case 115 /* CountryItaly */:
        return "vehicle_card_icons_flag_italy";
      case 116 /* CountryGermany */:
        return "vehicle_card_icons_flag_germany";
      case 117 /* CountryFrance */:
        return "vehicle_card_icons_flag_france";
      case 118 /* BrandAlbany */:
        return "albany";
      case 119 /* BrandAnnis */:
        return "annis";
      case 120 /* BrandBanshee */:
        return "banshee";
      case 121 /* BrandBenefactor */:
        return "benefactor";
      case 122 /* BrandBf */:
        return "bf";
      case 123 /* BrandBollokan */:
        return "bollokan";
      case 124 /* BrandBravado */:
        return "bravado";
      case 125 /* BrandBrute */:
        return "brute";
      case 126 /* BrandBuckingham */:
        return "buckingham";
      case 127 /* BrandCanis */:
        return "canis";
      case 128 /* BrandChariot */:
        return "chariot";
      case 129 /* BrandCheval */:
        return "cheval";
      case 130 /* BrandClassique */:
        return "classique";
      case 131 /* BrandCoil */:
        return "coil";
      case 132 /* BrandDeclasse */:
        return "declasse";
      case 133 /* BrandDewbauchee */:
        return "dewbauchee";
      case 134 /* BrandDilettante */:
        return "dilettante";
      case 135 /* BrandDinka */:
        return "dinka";
      case 136 /* BrandDundreary */:
        return "dundreary";
      case 137 /* BrandEmporer */:
        return "emporer";
      case 138 /* BrandEnus */:
        return "enus";
      case 139 /* BrandFathom */:
        return "fathom";
      case 140 /* BrandGalivanter */:
        return "galivanter";
      case 141 /* BrandGrotti */:
        return "grotti";
      case 143 /* BrandHijak */:
        return "hijak";
      case 144 /* BrandHvy */:
        return "hvy";
      case 145 /* BrandImponte */:
        return "imponte";
      case 146 /* BrandInvetero */:
        return "invetero";
      case 147 /* BrandJacksheepe */:
        return "jacksheepe";
      case 149 /* BrandJobuilt */:
        return "jobuilt";
      case 150 /* BrandKarin */:
        return "karin";
      case 151 /* BrandLampadati */:
        return "lampadati";
      case 152 /* BrandMaibatsu */:
        return "maibatsu";
      case 153 /* BrandMammoth */:
        return "mammoth";
      case 154 /* BrandMtl */:
        return "mtl";
      case 155 /* BrandNagasaki */:
        return "nagasaki";
      case 156 /* BrandObey */:
        return "obey";
      case 157 /* BrandOcelot */:
        return "ocelot";
      case 158 /* BrandOverflod */:
        return "overflod";
      case 159 /* BrandPed */:
        return "ped";
      case 160 /* BrandPegassi */:
        return "pegassi";
      case 161 /* BrandPfister */:
        return "pfister";
      case 162 /* BrandPrincipe */:
        return "principe";
      case 163 /* BrandProgen */:
        return "progen";
      case 166 /* BrandSchyster */:
        return "schyster";
      case 167 /* BrandShitzu */:
        return "shitzu";
      case 168 /* BrandSpeedophile */:
        return "speedophile";
      case 169 /* BrandStanley */:
        return "stanley";
      case 170 /* BrandTruffade */:
        return "truffade";
      case 171 /* BrandUbermacht */:
        return "ubermacht";
      case 172 /* BrandVapid */:
        return "vapid";
      case 173 /* BrandVulcar */:
        return "vulcar";
      case 174 /* BrandWeeny */:
        return "weeny";
      case 175 /* BrandWestern */:
        return "western";
      case 176 /* BrandWesternmotorcycle */:
        return "westernmotorcycle";
      case 177 /* BrandWillard */:
        return "willard";
      case 178 /* BrandZirconium */:
        return "zirconium";
      case 142 /* BrandGrotti2 */:
        return "grotti_2";
      case 148 /* BrandLcc */:
        return "lcc";
      case 164 /* BrandProgen2 */:
        return "progen";
      case 165 /* BrandRune */:
        return "rune";
      case 179 /* Info */:
        return "info_icon_32";
      default:
        return "";
    }
  }
  badgeToColor(badge) {
    const selected = this.selected;
    const enabled = this.enabled;
    switch (badge) {
      case 4 /* Crown */:
      case 26 /* Tick */:
      case 29 /* Male */:
      case 28 /* Female */:
      case 1 /* Lock */:
      case 30 /* LockArena */:
      case 31 /* Adversary */:
      case 32 /* BaseJumping */:
      case 33 /* Briefcase */:
      case 34 /* MissionStar */:
      case 35 /* Deathmatch */:
      case 36 /* Castle */:
      case 37 /* Trophy */:
      case 38 /* RaceFlag */:
      case 39 /* RaceFlagPlane */:
      case 40 /* RaceFlagBicycle */:
      case 41 /* RaceFlagPerson */:
      case 42 /* RaceFlagCar */:
      case 43 /* RaceFlagBoatAnchor */:
      case 44 /* Rockstar */:
      case 45 /* Stunt */:
      case 46 /* StuntPremium */:
      case 47 /* RaceFlagStuntJump */:
      case 48 /* Shield */:
      case 49 /* TeamDeathmatch */:
      case 50 /* VehicleDeathmatch */:
      case 55 /* MpSpectating */:
      case 57 /* GlobeWhite */:
      case 105 /* AudioMute */:
      case 106 /* AudioInactive */:
      case 107 /* AudioVol1 */:
      case 108 /* AudioVol2 */:
      case 109 /* AudioVol3 */:
      case 118 /* BrandAlbany */:
      case 119 /* BrandAnnis */:
      case 120 /* BrandBanshee */:
      case 121 /* BrandBenefactor */:
      case 122 /* BrandBf */:
      case 123 /* BrandBollokan */:
      case 124 /* BrandBravado */:
      case 125 /* BrandBrute */:
      case 126 /* BrandBuckingham */:
      case 127 /* BrandCanis */:
      case 128 /* BrandChariot */:
      case 129 /* BrandCheval */:
      case 130 /* BrandClassique */:
      case 131 /* BrandCoil */:
      case 132 /* BrandDeclasse */:
      case 133 /* BrandDewbauchee */:
      case 134 /* BrandDilettante */:
      case 135 /* BrandDinka */:
      case 136 /* BrandDundreary */:
      case 137 /* BrandEmporer */:
      case 138 /* BrandEnus */:
      case 139 /* BrandFathom */:
      case 140 /* BrandGalivanter */:
      case 141 /* BrandGrotti */:
      case 143 /* BrandHijak */:
      case 144 /* BrandHvy */:
      case 145 /* BrandImponte */:
      case 146 /* BrandInvetero */:
      case 147 /* BrandJacksheepe */:
      case 149 /* BrandJobuilt */:
      case 150 /* BrandKarin */:
      case 151 /* BrandLampadati */:
      case 152 /* BrandMaibatsu */:
      case 153 /* BrandMammoth */:
      case 154 /* BrandMtl */:
      case 155 /* BrandNagasaki */:
      case 156 /* BrandObey */:
      case 157 /* BrandOcelot */:
      case 158 /* BrandOverflod */:
      case 159 /* BrandPed */:
      case 160 /* BrandPegassi */:
      case 161 /* BrandPfister */:
      case 162 /* BrandPrincipe */:
      case 163 /* BrandProgen */:
      case 166 /* BrandSchyster */:
      case 167 /* BrandShitzu */:
      case 168 /* BrandSpeedophile */:
      case 169 /* BrandStanley */:
      case 170 /* BrandTruffade */:
      case 171 /* BrandUbermacht */:
      case 172 /* BrandVapid */:
      case 173 /* BrandVulcar */:
      case 174 /* BrandWeeny */:
      case 175 /* BrandWestern */:
      case 176 /* BrandWesternmotorcycle */:
      case 177 /* BrandWillard */:
      case 178 /* BrandZirconium */:
      case 142 /* BrandGrotti2 */:
      case 148 /* BrandLcc */:
      case 164 /* BrandProgen2 */:
      case 165 /* BrandRune */:
        return selected ? enabled ? Color.Black : Color.fromRgb(50, 50, 50) : enabled ? Color.White : Color.fromRgb(109, 109, 109);
      case 59 /* GlobeBlue */:
        return enabled ? Color.fromRgb(10, 103, 166) : Color.fromRgb(11, 62, 117);
      case 61 /* GlobeGreen */:
        return enabled ? Color.fromRgb(10, 166, 85) : Color.fromRgb(5, 71, 22);
      case 62 /* GlobeOrange */:
        return enabled ? Color.fromRgb(232, 145, 14) : Color.fromRgb(133, 77, 12);
      case 58 /* GlobeRed */:
        return enabled ? Color.fromRgb(207, 43, 31) : Color.fromRgb(110, 7, 7);
      case 60 /* GlobeYellow */:
        return enabled ? Color.fromRgb(232, 207, 14) : Color.fromRgb(131, 133, 12);
      default:
        return enabled ? Color.White : Color.fromRgb(109, 109, 109);
    }
  }
  setVerticalPosition(y) {
    const yOffset = y + this.offset.Y;
    this.rectangle.pos.Y = yOffset + 144;
    this.selectedSprite.pos.Y = yOffset + 144;
    this.text.pos.Y = yOffset + 147;
    this.badgeLeft.pos.Y = yOffset + 142 + _UIMenuItem.getBadgeSpriteHeightOffset(this.badgeLeft);
    this.badgeRight.pos.Y = yOffset + 142 + _UIMenuItem.getBadgeSpriteHeightOffset(this.badgeRight);
    this.labelText.pos.Y = yOffset + 148;
  }
  draw() {
    if (this.selected) {
      this.selectedSprite.size.width = 431 + (this.parent ? this.parent.WidthOffset : 0);
      this.selectedSprite.pos.X = this.offset.X;
      this.selectedSprite.draw(Menu.screenResolution);
    } else {
      this.rectangle.size.width = 431 + (this.parent ? this.parent.WidthOffset : 0);
      this.rectangle.pos.X = this.offset.X;
      this.rectangle.color = this.hovered ? _UIMenuItem.defaultHoveredBackColor : this._backColor;
      this.rectangle.draw(void 0, Menu.screenResolution);
    }
    this.text.color = this.enabled ? this.selected ? this._highlightedForeColor : this.hovered ? _UIMenuItem.defaultHoveredForeColor : this._foreColor : new Color(163, 159, 148);
    if (this.supportsLeftBadge && this._leftBadge !== 0 /* None */) {
      const widthOffset = _UIMenuItem.getBadgeSpriteWidthOffset(this.badgeLeft);
      this.badgeLeft.pos.X = this.offset.X + widthOffset;
      this.text.pos.X = this.offset.X + 40;
      this.badgeLeft.textureName = this.badgeToTextureName(this._leftBadge);
      this.badgeLeft.color = this.badgeToColor(this._leftBadge);
      this.badgeLeft.draw(Menu.screenResolution);
    } else {
      this.text.pos.X = this.offset.X + 8;
    }
    if (this.supportsRightBadge && this._rightBadge !== 0 /* None */) {
      this.labelText.pos.X = -40;
      const widthOffset = _UIMenuItem.getBadgeSpriteWidthOffset(this.badgeRight);
      this.badgeRight.pos.X = 431 + this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
      this.badgeRight.pos.X -= this.badgeRight.size.width + widthOffset;
      this.badgeRight.textureName = this.badgeToTextureName(this._rightBadge);
      this.badgeRight.color = this.badgeToColor(this._rightBadge);
      this.badgeRight.draw(Menu.screenResolution);
    } else {
      this.labelText.pos.X = -11;
    }
    if (this.supportsRightLabel && this.labelText.caption !== "") {
      this.labelText.pos.X += 431 + this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
      this.labelText.color = this.text.color;
      this.labelText.draw(void 0, Menu.screenResolution);
    }
    this.text.draw(void 0, Menu.screenResolution);
  }
};

// src/fivem/ui/menu/items/UIMenuCheckboxItem.ts
var UIMenuCheckboxItem = class extends UIMenuItem {
  static {
    __name(this, "UIMenuCheckboxItem");
  }
  checkboxChanged = new LiteEvent();
  supportsRightBadge = false;
  supportsRightLabel = false;
  _checked = false;
  _style = 0 /* Tick */;
  _checkboxSprite;
  constructor(text, checked = false, description, style = 0 /* Tick */) {
    super(text, description);
    this._checkboxSprite = new Sprite("commonmenu", "", new Point(410, 95), new Size(50, 50));
    this.Checked = checked;
    this.Style = style;
  }
  get Checked() {
    return this._checked;
  }
  set Checked(value) {
    this._checked = value || false;
  }
  get Style() {
    return this._style;
  }
  set Style(value) {
    this._style = Number(value);
  }
  setVerticalPosition(y) {
    super.setVerticalPosition(y);
    this._checkboxSprite.pos.Y = y + 138 + this.offset.Y;
  }
  draw() {
    super.draw();
    this._checkboxSprite.pos.X = 380 + this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
    this._checkboxSprite.textureName = this._getSpriteName();
    this._checkboxSprite.color = this._getSpriteColor();
    this._checkboxSprite.draw(Menu.screenResolution);
  }
  _getSpriteName() {
    let name = "blank";
    if (this._checked) {
      switch (this._style) {
        case 0 /* Tick */:
          name = "tick";
          break;
        case 1 /* Cross */:
          name = "cross";
          break;
      }
    }
    return `shop_box_${name}${this.selected ? "b" : ""}`;
  }
  _getSpriteColor() {
    return this.enabled ? Color.White : Color.fromRgb(109, 109, 109);
  }
};

// src/fivem/ui/menu/items/UIMenuListItem.ts
var UIMenuListItem = class extends UIMenuItem {
  static {
    __name(this, "UIMenuListItem");
  }
  listChanged = new LiteEvent();
  listSelected = new LiteEvent();
  supportsRightBadge = false;
  supportsRightLabel = false;
  _itemText;
  _leftArrow;
  _rightArrow;
  _index = 0;
  _arrowOnlyOnSelected = false;
  _items = [];
  _textWidth = 0;
  constructor(text, items, startIndex = 0, description, arrowOnlyOnSelected = true) {
    super(text, description);
    this._leftArrow = new Sprite("commonmenu", "arrowleft", new Point(), new Size(30, 30));
    this._rightArrow = new Sprite("commonmenu", "arrowright", new Point(), new Size(30, 30));
    this._itemText = new Text("", new Point(), 0.35, Color.White, 0 /* ChaletLondon */, 2 /* Right */);
    this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
    this.Items = items;
    this.Index = startIndex;
  }
  get Items() {
    return this._items;
  }
  set Items(value) {
    if (!value) {
      throw new Error("Items can't be null");
    }
    this._items = value;
  }
  get SelectedItem() {
    return this.Items[this.Index];
  }
  set SelectedItem(value) {
    const index = this.Items.findIndex((i) => i.id === value.id);
    if (index >= 0) {
      this.Index = index;
    }
  }
  get SelectedValue() {
    const item = this.SelectedItem;
    return item ? item.value : null;
  }
  get Index() {
    return this._index % this.Items.length;
  }
  set Index(value) {
    if (!this._items.length) {
      return;
    }
    value = value < 0 ? this._items.length - 1 : value > this._items.length - 1 ? 0 : value;
    this._index = value;
    this._textWidth = 0;
  }
  get ArrowOnlyOnSelected() {
    return this._arrowOnlyOnSelected;
  }
  set ArrowOnlyOnSelected(value) {
    this._arrowOnlyOnSelected = value;
  }
  get IsMouseInBoundsOfLeftArrow() {
    return this.parent ? this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size) : false;
  }
  get IsMouseInBoundsOfRightArrow() {
    return this.parent ? this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size) : false;
  }
  setVerticalPosition(y) {
    const yOffset = y + this.offset.Y + 147;
    this._leftArrow.pos.Y = yOffset;
    this._rightArrow.pos.Y = yOffset;
    this._itemText.pos.Y = yOffset;
    super.setVerticalPosition(y);
  }
  draw() {
    super.draw();
    if (this._textWidth === void 0) {
      const caption = this._getSelectedItemCaption();
      this._itemText.caption = caption;
      this._textWidth = _String.measureString(caption, this._itemText.font, this._itemText.scale, Menu.screenWidth);
    }
    this._rightArrow.pos.X = this.offset.X + (this.parent ? this.parent.WidthOffset : 0) + 400;
    this._itemText.pos.X = this._rightArrow.pos.X + 5;
    this._itemText.color = this.enabled ? this.selected ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148);
    if (this._arrowOnlyOnSelected && !this.selected) {
      this._itemText.pos.X += this._rightArrow.size.width / 2;
    } else {
      this._leftArrow.color = this._itemText.color;
      this._rightArrow.color = this._itemText.color;
      this._leftArrow.pos.X = this._itemText.pos.X - this._textWidth - this._leftArrow.size.width + 5;
      this._leftArrow.draw(Menu.screenResolution);
      this._rightArrow.draw(Menu.screenResolution);
    }
    this._itemText.draw(void 0, Menu.screenResolution);
  }
  _getSelectedItemCaption() {
    const item = this.SelectedItem;
    return item ? item.name : "";
  }
};

// src/fivem/ui/menu/items/UIMenuSeparatorItem.ts
var UIMenuSeparatorItem = class extends UIMenuItem {
  static {
    __name(this, "UIMenuSeparatorItem");
  }
  supportsDescription = false;
  supportsPanels = false;
  supportsLeftBadge = false;
  supportsRightBadge = false;
  supportsRightLabel = false;
  constructor(text) {
    super(text ?? "");
    this.text.alignment = 1 /* Centered */;
  }
  setVerticalPosition(y) {
    const yOffset = y + this.offset.Y;
    this.rectangle.pos.Y = yOffset + 144;
    this.text.pos.Y = yOffset + 147;
  }
  draw() {
    const width = 431 + (this.parent ? this.parent.WidthOffset : 0);
    this.rectangle.size.width = width;
    this.rectangle.pos.X = this.offset.X;
    this.rectangle.draw(void 0, Menu.screenResolution);
    if (this.text.caption !== "") {
      this.text.pos.X = this.offset.X + width / 2;
      this.text.draw(void 0, Menu.screenResolution);
    }
  }
};

// src/fivem/ui/menu/items/UIMenuSliderItem.ts
var UIMenuSliderItem = class extends UIMenuItem {
  static {
    __name(this, "UIMenuSliderItem");
  }
  sliderChanged = new LiteEvent();
  sliderSelected = new LiteEvent();
  supportsRightBadge = false;
  supportsRightLabel = false;
  _index = 0;
  _items = [];
  _showDivider = true;
  _arrowOnlyOnSelected = false;
  _leftSliderBadge = 0 /* None */;
  _rightSliderBadge = 0 /* None */;
  _background;
  _slider;
  _divider;
  _leftArrow;
  _rightArrow;
  _leftSliderBadgeSprite;
  _rightSliderBadgeSprite;
  constructor(text, items, startIndex = 0, description, showDivider = false, arrowOnlyOnSelected = false) {
    super(text, description);
    this._background = new Rectangle(new Point(), new Size(150, 9), new Color(4, 32, 57));
    this._slider = new Rectangle(new Point(), new Size(75, 9), new Color(57, 116, 200));
    this._divider = new Rectangle(new Point(), new Size(2.5, 20), Color.WhiteSmoke);
    this._leftArrow = new Sprite("commonmenutu", "arrowleft", new Point(), new Size(15, 15));
    this._rightArrow = new Sprite("commonmenutu", "arrowright", new Point(), new Size(15, 15));
    this._leftSliderBadgeSprite = new Sprite("", "");
    this._rightSliderBadgeSprite = new Sprite("", "");
    this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
    this.ShowDivider = showDivider;
    this.Items = items;
    this.Index = startIndex;
  }
  get Index() {
    return this._index % this._items.length;
  }
  set Index(value) {
    this._index = 1e8 - 1e8 % this._items.length + value;
  }
  get Item() {
    return this._items[this.Index];
  }
  get Items() {
    return this._items;
  }
  set Items(value) {
    this._items = value || [];
  }
  get ShowDivider() {
    return this._showDivider;
  }
  set ShowDivider(value) {
    this._showDivider = value;
  }
  get ArrowOnlyOnSelected() {
    return this._arrowOnlyOnSelected;
  }
  set ArrowOnlyOnSelected(value) {
    this._arrowOnlyOnSelected = value;
  }
  get BackgroundColor() {
    return this._background.color;
  }
  set BackgroundColor(value) {
    this._background.color = value || new Color(4, 32, 57);
  }
  get SliderColor() {
    return this._slider.color;
  }
  set SliderColor(value) {
    this._slider.color = value || new Color(57, 116, 200);
  }
  get DividerColor() {
    return this._divider.color;
  }
  set DividerColor(value) {
    this._divider.color = value || Color.WhiteSmoke;
  }
  get LeftSliderBadge() {
    return this._leftSliderBadge;
  }
  set LeftSliderBadge(value) {
    value = Number(value);
    this._leftSliderBadge = value;
    this._leftSliderBadgeSprite.TextureDict = UIMenuItem.badgeToTextureDict(value);
    this._leftSliderBadgeSprite.size = UIMenuItem.getBadgeSize(value);
  }
  get RightSliderBadge() {
    return this._rightSliderBadge;
  }
  set RightSliderBadge(value) {
    value = Number(value);
    this._rightSliderBadge = value;
    this._rightSliderBadgeSprite.TextureDict = UIMenuItem.badgeToTextureDict(value);
    this._rightSliderBadgeSprite.size = UIMenuItem.getBadgeSize(value);
  }
  get IsMouseInBoundsOfLeftArrow() {
    return this.parent ? this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size) : false;
  }
  get IsMouseInBoundsOfRightArrow() {
    return this.parent ? this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size) : false;
  }
  indexToItem(index) {
    return this._items[index];
  }
  setVerticalPosition(y) {
    const yOffset = y + this.offset.Y;
    this._background.pos.Y = yOffset + 158.5;
    this._slider.pos.Y = yOffset + 158.5;
    this._divider.pos.Y = yOffset + 153;
    this._leftArrow.pos.Y = yOffset + 155.5;
    this._rightArrow.pos.Y = yOffset + 155.5;
    this._leftSliderBadgeSprite.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this._leftSliderBadgeSprite);
    this._rightSliderBadgeSprite.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this._rightSliderBadgeSprite);
    super.setVerticalPosition(y);
  }
  draw() {
    super.draw();
    const showArrows = !this._arrowOnlyOnSelected || this.selected;
    const x = this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
    this._background.pos.X = 431 + x - this._background.size.width;
    if (showArrows) {
      this._background.pos.X -= this._rightArrow.size.width / 2;
      this._leftSliderBadgeSprite.pos.X = -this._leftArrow.size.width / 2;
    } else {
      this._leftSliderBadgeSprite.pos.X = 0;
    }
    if (this._rightSliderBadge !== 0 /* None */) {
      const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this._rightSliderBadgeSprite);
      this._background.pos.X -= 40;
      this._rightSliderBadgeSprite.pos.X = 431 + x;
      this._rightSliderBadgeSprite.pos.X -= this._rightSliderBadgeSprite.size.width + widthOffset;
      this._rightSliderBadgeSprite.textureName = this.badgeToTextureName(this._rightSliderBadge);
      this._rightSliderBadgeSprite.color = this.badgeToColor(this._rightSliderBadge);
      this._rightSliderBadgeSprite.draw(Menu.screenResolution);
    } else {
      this._background.pos.X -= this._rightArrow.size.width / 2;
    }
    if (this._leftSliderBadge !== 0 /* None */) {
      const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this._leftSliderBadgeSprite);
      this._leftSliderBadgeSprite.pos.X -= this._leftSliderBadgeSprite.size.width + widthOffset;
      this._leftSliderBadgeSprite.pos.X += this._background.pos.X;
      this._leftSliderBadgeSprite.textureName = this.badgeToTextureName(this._leftSliderBadge);
      this._leftSliderBadgeSprite.color = this.badgeToColor(this._leftSliderBadge);
      this._leftSliderBadgeSprite.draw(Menu.screenResolution);
    }
    const sliderXOffset = (this._background.size.width - this._slider.size.width) / (this._items.length - 1) * this.Index;
    this._slider.pos.X = this._background.pos.X + sliderXOffset;
    this._leftArrow.color = this.enabled ? this.selected ? Color.Black : Color.WhiteSmoke : new Color(163, 159, 148);
    this._rightArrow.color = this._leftArrow.color;
    this._background.draw(void 0, Menu.screenResolution);
    this._slider.draw(void 0, Menu.screenResolution);
    if (showArrows) {
      this._leftArrow.pos.X = this._background.pos.X - 15;
      this._rightArrow.pos.X = this._background.pos.X + this._background.size.width;
      this._leftArrow.draw(Menu.screenResolution);
      this._rightArrow.draw(Menu.screenResolution);
    }
    if (this._showDivider) {
      this._divider.pos.X = this._background.pos.X + this._background.size.width / 2;
      this._divider.draw(void 0, Menu.screenResolution);
    }
  }
};

// src/fivem/ui/menu/modules/ListItem.ts
var ListItem = class {
  static {
    __name(this, "ListItem");
  }
  id = Crypto.uuidv4();
  name;
  value;
  constructor(name, value = null) {
    this.name = name;
    this.value = value;
  }
};

// src/fivem/ui/menu/Menu.ts
var Menu = class _Menu {
  static {
    __name(this, "Menu");
  }
  static screenAspectRatio = IsDuplicityVersion() ? 0 : Screen.AspectRatio;
  static screenHeight = 1080;
  static screenWidth = _Menu.screenHeight * _Menu.screenAspectRatio;
  static screenResolution = new Size(_Menu.screenWidth, _Menu.screenHeight);
  id = Crypto.uuidv4();
  visible = false;
  parentMenu;
  parentItem;
  items = [];
  children = /* @__PURE__ */ new Map();
  menuOpen = new LiteEvent();
  menuClose = new LiteEvent();
  menuChange = new LiteEvent();
  indexChange = new LiteEvent();
  listChange = new LiteEvent();
  sliderChange = new LiteEvent();
  checkboxChange = new LiteEvent();
  listSelect = new LiteEvent();
  sliderSelect = new LiteEvent();
  itemSelect = new LiteEvent();
  panelActivated = new LiteEvent();
  _counterPretext = "";
  _counterOverride = "";
  _alignment = 76 /* Left */;
  _offset;
  _navigationDelay = 140;
  _lastUpDownNavigation = 0;
  _lastLeftRightNavigation = 0;
  _activeItem = 1e3;
  _widthOffset = 0;
  _drawOffset = new Point();
  _justOpened = true;
  _mousePressed = false;
  _minItem = 0;
  _maxItem = 9;
  _maxItemsOnScreen = this._maxItem;
  _controls = new MenuControls();
  _settings = new MenuSettings();
  _title;
  _subtitle;
  _mainMenu;
  _logo;
  _upAndDownSprite;
  _subtitleResRectangle;
  _extraRectangleUp;
  _extraRectangleDown;
  _descriptionBar;
  _descriptionRectangle;
  _descriptionText;
  _counterText;
  _background;
  constructor(title, subtitle, offset = new Point(), spriteLibrary = "commonmenu", spriteName = "interaction_bgd") {
    this._offset = offset;
    this._mainMenu = new Container(new Point(), new Size(700, 500), Color.Transparent);
    this._logo = new Sprite(
      spriteLibrary || "",
      spriteName || "",
      new Point(this._offset.X, this._offset.Y),
      new Size(431, 107)
    );
    this._mainMenu.addItem([
      this._title = new Text(
        title || "",
        new Point(431 / 2 + this._offset.X, 20 + this._offset.Y),
        1.15,
        Color.White,
        1,
        1 /* Centered */
      ),
      this._subtitleResRectangle = new Rectangle(
        new Point(this._offset.X, 107 + this._offset.Y),
        new Size(431, 37),
        Color.Black
      ),
      this._subtitle = new Text(
        subtitle || "",
        new Point(8 + this._offset.X, 110 + this._offset.Y),
        0.35,
        Color.White,
        0,
        0 /* Left */
      )
    ]);
    if (this._subtitle.caption.startsWith("~")) {
      this._counterPretext = this._subtitle.caption.substr(0, 3);
    }
    this._counterText = new Text(
      "",
      new Point(425 + this._offset.X, 110 + this._offset.Y),
      0.35,
      Color.White,
      0,
      2 /* Right */
    );
    this._upAndDownSprite = new Sprite("commonmenu", "shop_arrows_upanddown", new Point(), new Size(50, 50));
    const extraRectanglePos = new Point(this._offset.X);
    const extraRectangleSize = new Size(431, 18);
    const extraRectangleColor = new Color(0, 0, 0, 200);
    this._extraRectangleUp = new Rectangle(extraRectanglePos, extraRectangleSize, extraRectangleColor);
    this._extraRectangleDown = new Rectangle(
      { ...extraRectanglePos },
      { ...extraRectangleSize },
      { ...extraRectangleColor }
    );
    this._descriptionBar = new Rectangle(new Point(this._offset.X), new Size(431, 4), Color.Black);
    this._descriptionRectangle = new Sprite("commonmenu", "gradient_bgd", new Point(this._offset.X), new Size(431, 30));
    this._descriptionText = new Text(
      "Description",
      new Point(this._offset.X + 8),
      0.35,
      Color.White,
      0 /* ChaletLondon */,
      0 /* Left */
    );
    this._background = new Sprite(
      "commonmenu",
      "gradient_bgd",
      new Point(this._offset.X, 144 + this._offset.Y),
      new Size(290, 25)
    );
    setTick(() => {
      this._render();
    });
  }
  set Title(text) {
    this._title.caption = text;
  }
  get Title() {
    return this._title.caption;
  }
  get TitleFont() {
    return this._title.font;
  }
  set TitleFont(font) {
    this._title.font = font;
  }
  set Subtitle(text) {
    this._subtitle.caption = text;
  }
  get Subtitle() {
    return this._subtitle.caption;
  }
  set SubtitleFont(font) {
    this._subtitle.font = font;
  }
  get SubtitleFont() {
    return this._subtitle.font;
  }
  set SubtitleForeColor(color) {
    this._subtitle.color = color;
  }
  get SubtitleForeColor() {
    return this._subtitle.color;
  }
  set SubtitleBackColor(color) {
    this._subtitleResRectangle.color = color;
  }
  get SubtitleBackColor() {
    return this._subtitleResRectangle.color;
  }
  get CurrentItem() {
    return this.items[this._activeItem % this.items.length];
  }
  set CurrentItem(value) {
    const index = this.items.findIndex((i) => i.id === value.id);
    if (index !== -1) {
      this.CurrentSelection = index;
    }
  }
  get CurrentSelection() {
    return this._activeItem % this.items.length;
  }
  set CurrentSelection(v) {
    this.CurrentItem.selected = false;
    this._activeItem = 1e3 - 1e3 % this.items.length + v;
    const currentSelection = this.CurrentSelection;
    if (currentSelection > this._maxItem) {
      this._maxItem = currentSelection;
      this._minItem = currentSelection - this._maxItemsOnScreen;
    } else if (currentSelection < this._minItem) {
      this._maxItem = this._maxItemsOnScreen + currentSelection;
      this._minItem = currentSelection;
    }
  }
  get Alignment() {
    return this._alignment;
  }
  set Alignment(alignment) {
    this._alignment = alignment;
  }
  get WidthOffset() {
    return this._widthOffset;
  }
  set WidthOffset(widthOffset) {
    this._widthOffset = widthOffset;
    const width = 431 + widthOffset;
    if (this._logo) {
      this._logo.size.width = width;
    }
    this._mainMenu.items[0].pos.X = width / 2 + this._offset.X;
    if (this._counterText) {
      this._counterText.pos.X = 425 + this._offset.X + widthOffset;
    }
    if (this._subtitleResRectangle) {
      this._subtitleResRectangle.size.width = width;
    }
    this._extraRectangleUp.size.width = width;
    this._extraRectangleDown.size.width = width;
    this._upAndDownSprite.pos.X = 190 + this._offset.X + widthOffset / 2;
    this._descriptionBar.size.width = width;
    this._descriptionRectangle.size.width = width;
    this.items.forEach((item) => {
      item.formatDescription();
    });
  }
  get DrawOffset() {
    return this._drawOffset;
  }
  get Controls() {
    return this._controls;
  }
  get Settings() {
    return this._settings;
  }
  addNewSubMenu(text, description, inherit = true) {
    let menu;
    if (inherit) {
      menu = new _Menu(this._title.caption, text, this._offset, this._logo.TextureDict, this._logo.textureName);
      menu.Alignment = this.Alignment;
      menu.WidthOffset = this.WidthOffset;
      menu._settings = this._settings;
      menu.TitleFont = this.TitleFont;
      menu.SubtitleFont = this.SubtitleFont;
    } else {
      menu = new _Menu(this._title.caption, text);
    }
    const item = new UIMenuItem(text, description);
    this.addItem(item);
    this.bindMenuToItem(menu, item);
    return menu;
  }
  addSubMenu(subMenuToAdd, text, description, inherit = true) {
    if (inherit) {
      subMenuToAdd.Alignment = this.Alignment;
      subMenuToAdd.WidthOffset = this.WidthOffset;
      subMenuToAdd._settings = this._settings;
      subMenuToAdd.TitleFont = this.TitleFont;
      subMenuToAdd.SubtitleFont = this.SubtitleFont;
    }
    const item = new UIMenuItem(text, description);
    this.addItem(item);
    this.bindMenuToItem(subMenuToAdd, item);
    return subMenuToAdd;
  }
  addItem(items) {
    if (!Array.isArray(items)) {
      items = [items];
    }
    items.forEach((item) => {
      item.offset = this._offset;
      item.parent = this;
      item.formatDescription();
    });
    this.items.push(...items);
    this.refreshIndex();
  }
  removeItem(itemOrIndex) {
    if (typeof itemOrIndex === "number") {
      this.items = this.items.filter((i, index) => index !== itemOrIndex);
    } else {
      this.items = this.items.filter((i) => i.id !== itemOrIndex.id);
    }
    this.refreshIndex();
  }
  bindMenuToItem(menuToBind, itemToBindTo) {
    menuToBind.parentMenu = this;
    menuToBind.parentItem = itemToBindTo;
    this.children.set(itemToBindTo.id, menuToBind);
  }
  releaseMenuFromItem(releaseFrom) {
    if (!this.children.has(releaseFrom.id)) {
      return false;
    }
    const menu = this.children.get(releaseFrom.id);
    if (menu instanceof _Menu) {
      menu.parentItem = void 0;
      menu.parentMenu = void 0;
    }
    this.children.delete(releaseFrom.id);
    return true;
  }
  refreshIndex() {
    if (this.items.length === 0) {
      this._activeItem = 1e3;
      this._maxItem = this._maxItemsOnScreen;
      this._minItem = 0;
      return;
    }
    for (const item of this.items) {
      item.selected = false;
    }
    this._activeItem = 1e3 - 1e3 % this.items.length;
    this._maxItem = this._maxItemsOnScreen;
    this._minItem = 0;
    if (this.CurrentItem instanceof UIMenuSeparatorItem && this._isThereAnyItemExcludingSeparators()) {
      this.goDown();
    }
  }
  clear() {
    this.items = [];
    this._recalculateUpAndDown();
    this._recalculateDescriptionPosition();
  }
  open() {
    this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
    this.visible = true;
    this._justOpened = true;
    if (!this.parentMenu && this.Settings.resetCursorOnOpen) {
      Hud.CursorPosition = new Point(0.5, 0.5);
      Hud.CursorSprite = 1 /* Normal */;
    }
    this.menuOpen.emit();
  }
  close() {
    this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
    this.visible = false;
    this.refreshIndex();
    this.menuClose.emit();
  }
  goLeft() {
    const item = this.CurrentItem;
    if (item instanceof UIMenuListItem) {
      if (!item.Items.length) {
        return;
      }
      item.Index -= 1;
      this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
      this.listChange.emit(item, item.Index, item.SelectedItem);
      item.listChanged.emit(item.Index, item.SelectedItem);
    } else if (item instanceof UIMenuSliderItem) {
      if (!item.Items.length) {
        return;
      }
      item.Index -= 1;
      this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
      this.sliderChange.emit(item, item.Index, item.indexToItem(item.Index));
      item.sliderChanged.emit(item.Index, item.indexToItem(item.Index));
    }
  }
  goRight() {
    const item = this.CurrentItem;
    if (item instanceof UIMenuListItem) {
      if (item.Items.length === 0) {
        return;
      }
      item.Index += 1;
      this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
      this.listChange.emit(item, item.Index, item.SelectedItem);
      item.listChanged.emit(item.Index, item.SelectedItem);
    } else if (item instanceof UIMenuSliderItem) {
      item.Index += 1;
      this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
      this.sliderChange.emit(item, item.Index, item.indexToItem(item.Index));
      item.sliderChanged.emit(item.Index, item.indexToItem(item.Index));
    }
  }
  selectItem() {
    const item = this.CurrentItem;
    if (!item.enabled) {
      this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
      return;
    }
    this._playSoundAndReleaseId(this.Settings.audio.select, this.Settings.audio.library);
    if (item instanceof UIMenuCheckboxItem) {
      item.Checked = !item.Checked;
      this.checkboxChange.emit(item, item.Checked);
      item.checkboxChanged.emit(item.Checked);
    } else if (item instanceof UIMenuListItem) {
      this.listSelect.emit(item, item.Index, item.SelectedItem);
      item.listSelected.emit(item.Index, item.SelectedItem);
    } else if (item instanceof UIMenuSliderItem) {
      this.sliderSelect.emit(item, item.Index, item.indexToItem(item.Index));
      item.sliderSelected.emit(item.Index, item.indexToItem(item.Index));
    } else {
      this.itemSelect.emit(item, this.CurrentSelection);
      item.activated.emit();
      if (this.children.has(item.id)) {
        const subMenu = this.children.get(item.id);
        this.visible = false;
        if (subMenu instanceof _Menu) {
          subMenu.visible = true;
          subMenu._justOpened = true;
          subMenu.menuOpen.emit();
        }
        this.menuChange.emit(subMenu, true);
      }
    }
    item.fireEvent();
  }
  isMouseInBounds(pos, size2, drawOffset = true) {
    const resolution = _Menu.screenResolution;
    const cX = GetControlNormal(0, 239 /* CursorX */) * resolution.width / resolution.width;
    const cY = GetControlNormal(0, 240 /* CursorY */) * resolution.height / resolution.height;
    let x = pos.X / resolution.width;
    let y = pos.Y / resolution.height;
    const w = size2.width / resolution.width;
    const h = size2.height / resolution.height;
    if (drawOffset) {
      x += this._drawOffset.X;
      y += this._drawOffset.Y;
    }
    return cX >= x && cX <= x + w && cY > y && cY < y + h;
  }
  goUp() {
    this.CurrentItem.selected = false;
    if (this.items.length > this._maxItemsOnScreen + 1) {
      if (this.CurrentSelection <= this._minItem) {
        if (this.CurrentSelection === 0) {
          this._minItem = this.items.length - this._maxItemsOnScreen - 1;
          this._maxItem = this.items.length - 1;
          this._activeItem = 1e3 - 1e3 % this.items.length;
          this._activeItem += this.items.length - 1;
        } else {
          this._minItem--;
          this._maxItem--;
          this._activeItem--;
        }
      } else {
        this._activeItem--;
      }
    } else {
      this._activeItem--;
    }
    if (this.CurrentItem instanceof UIMenuSeparatorItem && this._isThereAnyItemExcludingSeparators()) {
      this.goUp();
    } else {
      this.CurrentItem.selected = true;
      this._playSoundAndReleaseId(this.Settings.audio.upDown, this.Settings.audio.library);
      this.indexChange.emit(this.CurrentSelection);
    }
  }
  goDown() {
    this.CurrentItem.selected = false;
    if (this.items.length > this._maxItemsOnScreen + 1) {
      if (this.CurrentSelection >= this._maxItem) {
        if (this.CurrentSelection === this.items.length - 1) {
          this._minItem = 0;
          this._maxItem = this._maxItemsOnScreen;
          this._activeItem = 1e3 - 1e3 % this.items.length;
        } else {
          this._minItem++;
          this._maxItem++;
          this._activeItem++;
        }
      } else {
        this._activeItem++;
      }
    } else {
      this._activeItem++;
    }
    if (this.CurrentItem instanceof UIMenuSeparatorItem && this._isThereAnyItemExcludingSeparators()) {
      this.goDown();
    } else {
      this.CurrentItem.selected = true;
      this._playSoundAndReleaseId(this.Settings.audio.upDown, this.Settings.audio.library);
      this.indexChange.emit(this.CurrentSelection);
    }
  }
  goBack() {
    this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
    this.visible = false;
    if (this.parentMenu != null) {
      this.parentMenu.visible = true;
      this.parentMenu._justOpened = true;
      this.parentMenu.menuOpen.emit();
      this.menuChange.emit(this.parentMenu, false);
    }
    this.menuClose.emit();
  }
  _processMouse() {
    if (!this.visible || this._justOpened || !this.items.length || Game.CurrentInputMode === 2 /* GamePad */ || !this.Settings.mouseControlsEnabled) {
      Game.enableControlThisFrame(0, 272 /* LookUp */);
      Game.enableControlThisFrame(0, 273 /* LookDown */);
      Game.enableControlThisFrame(0, 24 /* Attack */);
      Game.enableControlThisFrame(0, 25 /* Aim */);
      return;
    }
    Hud.showCursorThisFrame();
    if (this.Settings.mouseEdgeEnabled) {
      if (this.isMouseInBounds(new Point(), new Size(30, _Menu.screenHeight), false)) {
        GameplayCamera.RelativeHeading += 1;
        Hud.CursorSprite = 6 /* LeftArrow */;
      } else if (this.isMouseInBounds(new Point(_Menu.screenWidth - 30), new Size(30, _Menu.screenHeight), false)) {
        GameplayCamera.RelativeHeading -= 1;
        Hud.CursorSprite = 7 /* RightArrow */;
      } else {
        Hud.CursorSprite = 1 /* Normal */;
      }
    }
    if (this._mousePressed) {
      return;
    }
    let hoveredItem;
    let hoveredItemIndex = 0;
    const limit = this.items.length > this._maxItemsOnScreen + 1 ? this._maxItem : this.items.length - 1;
    for (let i = this._minItem; i <= limit; i++) {
      const item = this.items[i];
      if (item instanceof UIMenuSeparatorItem) {
        continue;
      }
      if (!hoveredItem && item.IsMouseInBounds) {
        item.hovered = true;
        hoveredItem = item;
        hoveredItemIndex = i;
      } else {
        item.hovered = false;
      }
    }
    if (hoveredItem && Game.isDisabledControlJustPressed(0, 24 /* Attack */)) {
      (async () => {
        this._mousePressed = true;
        if (hoveredItem.selected) {
          if (hoveredItem.enabled) {
            if (hoveredItem instanceof UIMenuListItem || hoveredItem instanceof UIMenuSliderItem) {
              if (hoveredItem.IsMouseInBoundsOfLeftArrow) {
                this.goLeft();
              } else if (hoveredItem.IsMouseInBoundsOfRightArrow) {
                this.goRight();
              } else {
                this.selectItem();
              }
            } else {
              this.selectItem();
            }
          } else {
            this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
          }
        } else {
          this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
          this.CurrentSelection = hoveredItemIndex;
          this.indexChange.emit(this.CurrentSelection);
        }
        await Wait(this._navigationDelay);
        while (Game.isDisabledControlPressed(0, 24 /* Attack */) && hoveredItem.IsMouseInBounds) {
          if (hoveredItem.selected) {
            if (hoveredItem.enabled) {
              if (hoveredItem instanceof UIMenuListItem || hoveredItem instanceof UIMenuSliderItem) {
                if (hoveredItem.IsMouseInBoundsOfLeftArrow) {
                  this.goLeft();
                } else if (hoveredItem.IsMouseInBoundsOfRightArrow) {
                  this.goRight();
                }
              }
            } else {
              this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
            }
          } else {
            this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
            this.CurrentSelection = hoveredItemIndex;
            this.indexChange.emit(this.CurrentSelection);
          }
          await Wait(125);
        }
        this._mousePressed = false;
      })();
    }
    if (this.items.length <= this._maxItemsOnScreen + 1 || this._mousePressed) {
      return;
    }
    if (this.isMouseInBounds(this._extraRectangleUp.pos, this._extraRectangleUp.size)) {
      this._extraRectangleUp.color = Color.fromRgb(30, 30, 30);
      if (Game.isDisabledControlJustPressed(0, 24 /* Attack */)) {
        (async () => {
          this._mousePressed = true;
          this.goUp();
          await Wait(this._navigationDelay);
          while (Game.isDisabledControlPressed(0, 24 /* Attack */)) {
            this.goUp();
            await Wait(125);
          }
          this._mousePressed = false;
        })();
      }
    } else {
      this._extraRectangleUp.color = new Color(0, 0, 0, 200);
    }
    if (this._mousePressed) {
      return;
    }
    if (this.isMouseInBounds(this._extraRectangleDown.pos, this._extraRectangleDown.size)) {
      this._extraRectangleDown.color = Color.fromRgb(30, 30, 30);
      if (Game.isDisabledControlJustPressed(0, 24 /* Attack */)) {
        (async () => {
          this._mousePressed = true;
          this.goDown();
          await Wait(this._navigationDelay);
          while (Game.isDisabledControlPressed(0, 24 /* Attack */)) {
            this.goDown();
            await Wait(125);
          }
          this._mousePressed = false;
        })();
      }
    } else {
      this._extraRectangleDown.color = new Color(0, 0, 0, 200);
    }
  }
  _processControl() {
    if (!this.visible) {
      return;
    }
    if (this._justOpened) {
      this._justOpened = false;
      return;
    }
    if (this.Controls.back.Enabled && Game.isDisabledControlJustReleased(0, 177 /* PhoneCancel */)) {
      this.goBack();
    }
    if (this.items.length === 0) {
      return;
    }
    if (this.Controls.up.Enabled && (Game.isDisabledControlPressed(0, 172 /* PhoneUp */) || Game.isDisabledControlPressed(0, 241 /* CursorScrollUp */)) && this._lastUpDownNavigation + this._navigationDelay < Date.now()) {
      this._lastUpDownNavigation = Date.now();
      this.goUp();
    }
    if (this.Controls.down.Enabled && (Game.isDisabledControlPressed(0, 173 /* PhoneDown */) || Game.isDisabledControlPressed(0, 242 /* CursorScrollDown */)) && this._lastUpDownNavigation + this._navigationDelay < Date.now()) {
      this._lastUpDownNavigation = Date.now();
      this.goDown();
    }
    if (this.Controls.left.Enabled && Game.isDisabledControlPressed(0, 174 /* PhoneLeft */) && this._lastLeftRightNavigation + this._navigationDelay < Date.now()) {
      this._lastLeftRightNavigation = Date.now();
      this.goLeft();
    }
    if (this.Controls.right.Enabled && Game.isDisabledControlPressed(0, 175 /* PhoneRight */) && this._lastLeftRightNavigation + this._navigationDelay < Date.now()) {
      this._lastLeftRightNavigation = Date.now();
      this.goRight();
    }
    if (this.Controls.select.Enabled && Game.isDisabledControlJustPressed(0, 201 /* FrontendAccept */)) {
      this.selectItem();
    }
  }
  _isThereAnyItemExcludingSeparators() {
    return !!this.items.filter((item) => !(item instanceof UIMenuSeparatorItem)).length;
  }
  _playSoundAndReleaseId(sound, set) {
    const soundId = Audio.playSoundFrontEnd(sound, set);
    Audio.releaseSound(soundId);
  }
  _disEnableControls() {
    Game.disableAllControlsThisFrame(2 /* GamePad */);
    for (const control of this._settings.enabledControls[Game.CurrentInputMode]) {
      Game.enableControlThisFrame(0, control);
    }
  }
  _recalculateUpAndDown() {
    const y = this._offset.Y;
    this._extraRectangleUp.pos.Y = 144 + 38 * (this._maxItemsOnScreen + 1) + y;
    this._extraRectangleDown.pos.Y = 144 + 18 + 38 * (this._maxItemsOnScreen + 1) + y;
    this._upAndDownSprite.pos.Y = 147 + 37 * (this._maxItemsOnScreen + 1) + y;
  }
  _recalculateDescriptionPosition() {
    let y = 149 + this._offset.Y;
    let count = this.items.length;
    if (count > this._maxItemsOnScreen + 1) {
      count = this._maxItemsOnScreen + 2;
    }
    y += 38 * count;
    this._descriptionBar.pos.Y = y;
    this._descriptionRectangle.pos.Y = y;
    this._descriptionText.pos.Y = y + 6;
  }
  _calculateItemHeight() {
    const y = 149 + this._offset.Y;
    let count = this.items.length;
    if (count > this._maxItemsOnScreen + 1) {
      count = this._maxItemsOnScreen + 2;
    }
    return y + 38 * count;
  }
  _calculatePanelPosition(hasDescription) {
    let height = 0;
    if (hasDescription) {
      height += this._descriptionRectangle.size.height + 5;
    }
    return this._calculateItemHeight() + height;
  }
  _render() {
    if (!this.visible || Game.IsPaused) {
      return;
    }
    if (this._justOpened) {
      if (this._logo != null && !this._logo.IsTextureDictionaryLoaded) {
        this._logo.loadTextureDictionary();
      }
      if (!this._background.IsTextureDictionaryLoaded) {
        this._background.loadTextureDictionary();
      }
      if (!this._descriptionRectangle.IsTextureDictionaryLoaded) {
        this._descriptionRectangle.loadTextureDictionary();
      }
      if (!this._upAndDownSprite.IsTextureDictionaryLoaded) {
        this._upAndDownSprite.loadTextureDictionary();
      }
    }
    SetScriptGfxAlign(this._alignment, 84);
    const menuWidth = (431 + this._widthOffset) / _Menu.screenWidth;
    if (this.Settings.scaleWithSafezone) {
      SetScriptGfxAlignParams(0, 0, menuWidth, 0);
      const pos = GetScriptGfxPosition(0, 0);
      this._drawOffset.X = pos[0];
      this._drawOffset.Y = pos[1];
    } else {
      const sSize = (1 - GetSafeZoneSize()) / 2;
      if (this._alignment === 82 /* Right */) {
        SetScriptGfxAlignParams(sSize, -sSize, menuWidth, 0);
        const pos = GetScriptGfxPosition(0, 0);
        this._drawOffset.X = pos[0];
        this._drawOffset.Y = pos[1];
      } else {
        SetScriptGfxAlignParams(-sSize, -sSize, menuWidth, 0);
        const pos = GetScriptGfxPosition(0, 0);
        this._drawOffset.X = pos[0];
        this._drawOffset.Y = pos[1];
      }
    }
    this._mainMenu.draw(void 0, _Menu.screenResolution);
    this._processControl();
    this._processMouse();
    if (this.Settings.controlDisablingEnabled) {
      this._disEnableControls();
    }
    this._background.size = this.items.length > this._maxItemsOnScreen + 1 ? new Size(431 + this._widthOffset, 38 * (this._maxItemsOnScreen + 1)) : new Size(431 + this._widthOffset, 38 * this.items.length);
    this._background.draw(_Menu.screenResolution);
    if (this.items.length > 0) {
      let hasDescription = false;
      if (this.CurrentItem.Description && this.CurrentItem.Description !== "") hasDescription = true;
      this.CurrentItem.selected = true;
      if (hasDescription) {
        this._recalculateDescriptionPosition();
        this._descriptionText.caption = this.CurrentItem.FormattedDescription;
        const numLines = this._descriptionText.caption.split("\n").length;
        this._descriptionRectangle.size = new Size(431 + this._widthOffset, numLines * 25 + 15);
        this._descriptionBar.draw(void 0, _Menu.screenResolution);
        this._descriptionRectangle.draw(_Menu.screenResolution);
        this._descriptionText.draw(void 0, _Menu.screenResolution);
      }
      if (this.CurrentItem.Panels?.length) {
        let offset = this._calculatePanelPosition(hasDescription);
        for (let i = 0; i < this.CurrentItem.Panels.length; i++) {
          if (i > 0) {
            offset += this.CurrentItem.Panels[i - 1].Height + 5;
          }
          this.CurrentItem.Panels[i].setVerticalPosition(offset);
          this.CurrentItem.Panels[i].draw();
        }
      }
    }
    if (this.items.length <= this._maxItemsOnScreen + 1) {
      let count = 0;
      for (const menuItem of this.items) {
        menuItem.setVerticalPosition(count * 38);
        menuItem.draw();
        count += 1;
      }
      if (this._counterText && this._counterOverride) {
        this._counterText.caption = this._counterPretext + this._counterOverride;
        this._counterText.draw(void 0, _Menu.screenResolution);
      }
    } else {
      let count = 0;
      for (let index = this._minItem; index <= this._maxItem; index++) {
        const item = this.items[index];
        item.setVerticalPosition(count * 38);
        item.draw();
        count++;
      }
      this._recalculateUpAndDown();
      this._extraRectangleUp.draw(void 0, _Menu.screenResolution);
      this._extraRectangleDown.draw(void 0, _Menu.screenResolution);
      this._upAndDownSprite.draw(_Menu.screenResolution);
      if (this._counterText) {
        if (!this._counterOverride) {
          const cap = `${this.CurrentSelection + 1} / ${this.items.length}`;
          this._counterText.caption = this._counterPretext + cap;
        } else {
          this._counterText.caption = this._counterPretext + this._counterOverride;
        }
        this._counterText.draw(void 0, _Menu.screenResolution);
      }
    }
    this._logo.draw(_Menu.screenResolution);
    ResetScriptGfxAlign();
  }
};

// src/fivem/ui/menu/MenuControl.ts
var MenuControl = class {
  static {
    __name(this, "MenuControl");
  }
  _enabled;
  constructor(enabled = true) {
    this._enabled = enabled;
  }
  get Enabled() {
    return this._enabled;
  }
  set Enabled(value) {
    this._enabled = value;
  }
};

// src/fivem/ui/menu/MenuControls.ts
var MenuControls = class {
  static {
    __name(this, "MenuControls");
  }
  back = new MenuControl();
  select = new MenuControl();
  left = new MenuControl();
  right = new MenuControl();
  up = new MenuControl();
  down = new MenuControl();
};

// src/fivem/ui/menu/MenuSettings.ts
var MenuSettings = class {
  static {
    __name(this, "MenuSettings");
  }
  scaleWithSafezone = true;
  resetCursorOnOpen = true;
  mouseControlsEnabled = true;
  mouseEdgeEnabled = true;
  controlDisablingEnabled = true;
  audio = {
    library: "HUD_FRONTEND_DEFAULT_SOUNDSET",
    upDown: "NAV_UP_DOWN",
    leftRight: "NAV_LEFT_RIGHT",
    select: "SELECT",
    back: "BACK",
    error: "ERROR"
  };
  enabledControls = {
    [2 /* GamePad */]: [2 /* LookUpDown */, 1 /* LookLeftRight */, 25 /* Aim */, 24 /* Attack */],
    [0 /* MouseAndKeyboard */]: [
      201 /* FrontendAccept */,
      195 /* FrontendAxisX */,
      196 /* FrontendAxisY */,
      187 /* FrontendDown */,
      188 /* FrontendUp */,
      189 /* FrontendLeft */,
      190 /* FrontendRight */,
      202 /* FrontendCancel */,
      217 /* FrontendSelect */,
      242 /* CursorScrollDown */,
      241 /* CursorScrollUp */,
      239 /* CursorX */,
      240 /* CursorY */,
      31 /* MoveUpDown */,
      30 /* MoveLeftRight */,
      21 /* Sprint */,
      22 /* Jump */,
      23 /* Enter */,
      75 /* VehicleExit */,
      71 /* VehicleAccelerate */,
      72 /* VehicleBrake */,
      76 /* VehicleHandbrake */,
      59 /* VehicleMoveLeftRight */,
      89 /* VehicleFlyYawLeft */,
      90 /* VehicleFlyYawRight */,
      9 /* FlyLeftRight */,
      8 /* FlyUpDown */
    ]
  };
};

// src/fivem/weapon/WeaponTint.ts
var WeaponTint = /* @__PURE__ */ ((WeaponTint2) => {
  WeaponTint2[WeaponTint2["Mk2ClassicBlack"] = 0] = "Mk2ClassicBlack";
  WeaponTint2[WeaponTint2["Mk2ClassicGray"] = 1] = "Mk2ClassicGray";
  WeaponTint2[WeaponTint2["Mk2ClassicTwoTone"] = 2] = "Mk2ClassicTwoTone";
  WeaponTint2[WeaponTint2["Mk2ClassicWhite"] = 3] = "Mk2ClassicWhite";
  WeaponTint2[WeaponTint2["Mk2ClassicBeige"] = 4] = "Mk2ClassicBeige";
  WeaponTint2[WeaponTint2["Mk2ClassicGreen"] = 5] = "Mk2ClassicGreen";
  WeaponTint2[WeaponTint2["Mk2ClassicBlue"] = 6] = "Mk2ClassicBlue";
  WeaponTint2[WeaponTint2["Mk2ClassicEarth"] = 7] = "Mk2ClassicEarth";
  WeaponTint2[WeaponTint2["Mk2ClassicBrownAndBlack"] = 8] = "Mk2ClassicBrownAndBlack";
  WeaponTint2[WeaponTint2["Mk2RedContrast"] = 9] = "Mk2RedContrast";
  WeaponTint2[WeaponTint2["Mk2BlueContrast"] = 10] = "Mk2BlueContrast";
  WeaponTint2[WeaponTint2["Mk2YellowContrast"] = 11] = "Mk2YellowContrast";
  WeaponTint2[WeaponTint2["Mk2OrangeContrast"] = 12] = "Mk2OrangeContrast";
  WeaponTint2[WeaponTint2["Mk2BoldPink"] = 13] = "Mk2BoldPink";
  WeaponTint2[WeaponTint2["Mk2BoldPurpleAndYellow"] = 14] = "Mk2BoldPurpleAndYellow";
  WeaponTint2[WeaponTint2["Mk2BoldOrange"] = 15] = "Mk2BoldOrange";
  WeaponTint2[WeaponTint2["Mk2BoldGreenAndPurple"] = 16] = "Mk2BoldGreenAndPurple";
  WeaponTint2[WeaponTint2["Mk2BoldRedFeatures"] = 17] = "Mk2BoldRedFeatures";
  WeaponTint2[WeaponTint2["Mk2BoldGreenFeatures"] = 18] = "Mk2BoldGreenFeatures";
  WeaponTint2[WeaponTint2["Mk2BoldCyanFeatures"] = 19] = "Mk2BoldCyanFeatures";
  WeaponTint2[WeaponTint2["Mk2BoldYellowFeatures"] = 20] = "Mk2BoldYellowFeatures";
  WeaponTint2[WeaponTint2["Mk2BoldRedAndWhite"] = 21] = "Mk2BoldRedAndWhite";
  WeaponTint2[WeaponTint2["Mk2BoldBlueAndWhite"] = 22] = "Mk2BoldBlueAndWhite";
  WeaponTint2[WeaponTint2["Mk2MetallicGold"] = 23] = "Mk2MetallicGold";
  WeaponTint2[WeaponTint2["Mk2MetallicPlatinum"] = 24] = "Mk2MetallicPlatinum";
  WeaponTint2[WeaponTint2["Mk2MetallicGrayAndLilac"] = 25] = "Mk2MetallicGrayAndLilac";
  WeaponTint2[WeaponTint2["Mk2MetallicPurpleAndLime"] = 26] = "Mk2MetallicPurpleAndLime";
  WeaponTint2[WeaponTint2["Mk2MetallicRed"] = 27] = "Mk2MetallicRed";
  WeaponTint2[WeaponTint2["Mk2MetallicGreen"] = 28] = "Mk2MetallicGreen";
  WeaponTint2[WeaponTint2["Mk2MetallicBlue"] = 29] = "Mk2MetallicBlue";
  WeaponTint2[WeaponTint2["Mk2MetallicWhiteAndAqua"] = 30] = "Mk2MetallicWhiteAndAqua";
  WeaponTint2[WeaponTint2["Mk2MetallicRedAndYellow"] = 31] = "Mk2MetallicRedAndYellow";
  WeaponTint2[WeaponTint2["Normal"] = 0] = "Normal";
  WeaponTint2[WeaponTint2["Green"] = 1] = "Green";
  WeaponTint2[WeaponTint2["Gold"] = 2] = "Gold";
  WeaponTint2[WeaponTint2["Pink"] = 3] = "Pink";
  WeaponTint2[WeaponTint2["Army"] = 4] = "Army";
  WeaponTint2[WeaponTint2["LSPD"] = 5] = "LSPD";
  WeaponTint2[WeaponTint2["Orange"] = 6] = "Orange";
  WeaponTint2[WeaponTint2["Platinum"] = 7] = "Platinum";
  return WeaponTint2;
})(WeaponTint || {});

// src/fivem/weapon/WeaponGroup.ts
var WeaponGroup = /* @__PURE__ */ ((WeaponGroup2) => {
  WeaponGroup2[WeaponGroup2["Unarmed"] = 2685387236] = "Unarmed";
  WeaponGroup2[WeaponGroup2["Melee"] = 3566412244] = "Melee";
  WeaponGroup2[WeaponGroup2["Pistol"] = 416676503] = "Pistol";
  WeaponGroup2[WeaponGroup2["SMG"] = 3337201093] = "SMG";
  WeaponGroup2[WeaponGroup2["AssaultRifle"] = 970310034] = "AssaultRifle";
  WeaponGroup2[WeaponGroup2["DigiScanner"] = 3539449195] = "DigiScanner";
  WeaponGroup2[WeaponGroup2["FireExtinguisher"] = 4257178988] = "FireExtinguisher";
  WeaponGroup2[WeaponGroup2["MG"] = 1159398588] = "MG";
  WeaponGroup2[WeaponGroup2["NightVision"] = 3493187224] = "NightVision";
  WeaponGroup2[WeaponGroup2["Parachute"] = 431593103] = "Parachute";
  WeaponGroup2[WeaponGroup2["Shotgun"] = 860033945] = "Shotgun";
  WeaponGroup2[WeaponGroup2["Sniper"] = 3082541095] = "Sniper";
  WeaponGroup2[WeaponGroup2["Stungun"] = 690389602] = "Stungun";
  WeaponGroup2[WeaponGroup2["Heavy"] = 2725924767] = "Heavy";
  WeaponGroup2[WeaponGroup2["Thrown"] = 1548507267] = "Thrown";
  WeaponGroup2[WeaponGroup2["PetrolCan"] = 1595662460] = "PetrolCan";
  return WeaponGroup2;
})(WeaponGroup || {});

// src/fivem/weapon/WeaponLivery.ts
var WeaponLivery = /* @__PURE__ */ ((WeaponLivery2) => {
  WeaponLivery2[WeaponLivery2["Digital"] = 0] = "Digital";
  WeaponLivery2[WeaponLivery2["Brushstroke"] = 1] = "Brushstroke";
  WeaponLivery2[WeaponLivery2["Woodland"] = 2] = "Woodland";
  WeaponLivery2[WeaponLivery2["Skull"] = 3] = "Skull";
  WeaponLivery2[WeaponLivery2["Sessanta"] = 4] = "Sessanta";
  WeaponLivery2[WeaponLivery2["Perseus"] = 5] = "Perseus";
  WeaponLivery2[WeaponLivery2["Leopard"] = 6] = "Leopard";
  WeaponLivery2[WeaponLivery2["Zebra"] = 7] = "Zebra";
  WeaponLivery2[WeaponLivery2["Geometric"] = 8] = "Geometric";
  WeaponLivery2[WeaponLivery2["Boom"] = 9] = "Boom";
  WeaponLivery2[WeaponLivery2["Patriotic"] = 10] = "Patriotic";
  return WeaponLivery2;
})(WeaponLivery || {});

// src/fivem/weapon/WeaponLiveryColor.ts
var WeaponLiveryColor = /* @__PURE__ */ ((WeaponLiveryColor2) => {
  WeaponLiveryColor2[WeaponLiveryColor2["Gray"] = 0] = "Gray";
  WeaponLiveryColor2[WeaponLiveryColor2["DarkGray"] = 1] = "DarkGray";
  WeaponLiveryColor2[WeaponLiveryColor2["Black"] = 2] = "Black";
  WeaponLiveryColor2[WeaponLiveryColor2["White"] = 3] = "White";
  WeaponLiveryColor2[WeaponLiveryColor2["Blue"] = 4] = "Blue";
  WeaponLiveryColor2[WeaponLiveryColor2["Cyan"] = 5] = "Cyan";
  WeaponLiveryColor2[WeaponLiveryColor2["Aqua"] = 6] = "Aqua";
  WeaponLiveryColor2[WeaponLiveryColor2["CoolBlue"] = 7] = "CoolBlue";
  WeaponLiveryColor2[WeaponLiveryColor2["DarkBlue"] = 8] = "DarkBlue";
  WeaponLiveryColor2[WeaponLiveryColor2["RoyalBlue"] = 9] = "RoyalBlue";
  WeaponLiveryColor2[WeaponLiveryColor2["Plum"] = 10] = "Plum";
  WeaponLiveryColor2[WeaponLiveryColor2["DarkPurple"] = 11] = "DarkPurple";
  WeaponLiveryColor2[WeaponLiveryColor2["Purple"] = 12] = "Purple";
  WeaponLiveryColor2[WeaponLiveryColor2["Red"] = 13] = "Red";
  WeaponLiveryColor2[WeaponLiveryColor2["WineRed"] = 14] = "WineRed";
  WeaponLiveryColor2[WeaponLiveryColor2["Magenta"] = 15] = "Magenta";
  WeaponLiveryColor2[WeaponLiveryColor2["Pink"] = 16] = "Pink";
  WeaponLiveryColor2[WeaponLiveryColor2["Salmon"] = 17] = "Salmon";
  WeaponLiveryColor2[WeaponLiveryColor2["HotPink"] = 18] = "HotPink";
  WeaponLiveryColor2[WeaponLiveryColor2["RustOrange"] = 19] = "RustOrange";
  WeaponLiveryColor2[WeaponLiveryColor2["Brown"] = 20] = "Brown";
  WeaponLiveryColor2[WeaponLiveryColor2["Earth"] = 21] = "Earth";
  WeaponLiveryColor2[WeaponLiveryColor2["Orange"] = 22] = "Orange";
  WeaponLiveryColor2[WeaponLiveryColor2["LightOrange"] = 23] = "LightOrange";
  WeaponLiveryColor2[WeaponLiveryColor2["DarkYellow"] = 24] = "DarkYellow";
  WeaponLiveryColor2[WeaponLiveryColor2["Yellow"] = 25] = "Yellow";
  WeaponLiveryColor2[WeaponLiveryColor2["LightBrown"] = 26] = "LightBrown";
  WeaponLiveryColor2[WeaponLiveryColor2["LimeGreen"] = 27] = "LimeGreen";
  WeaponLiveryColor2[WeaponLiveryColor2["Olive"] = 28] = "Olive";
  WeaponLiveryColor2[WeaponLiveryColor2["Moss"] = 29] = "Moss";
  WeaponLiveryColor2[WeaponLiveryColor2["Turquoise"] = 30] = "Turquoise";
  WeaponLiveryColor2[WeaponLiveryColor2["DarkGreen"] = 31] = "DarkGreen";
  return WeaponLiveryColor2;
})(WeaponLiveryColor || {});

// src/fivem/weapon/WeaponAsset.ts
var WeaponAsset = class {
  static {
    __name(this, "WeaponAsset");
  }
  hash;
  constructor(hash) {
    this.hash = hash;
  }
  /**
   * get weapon hash
   *
   * @constructor
   */
  get Hash() {
    return this.hash;
  }
  /**
   * check weapon is valid
   *
   * @constructor
   */
  get IsValid() {
    return IsWeaponValid(this.hash);
  }
  /**
   * check weapon assets is loaded
   *
   * @constructor
   */
  get IsLoaded() {
    return HasWeaponAssetLoaded(this.hash);
  }
  /**
   * request weapon asset
   *
   */
  request() {
    RequestWeaponAsset(this.hash, 31, 0);
  }
  /**
   * request weapon asset async
   *
   * @param timeout
   */
  async requestAsync(timeout) {
    this.request();
    const start = GetGameTimer();
    while (!this.IsLoaded) {
      await Wait(100);
      const now = GetGameTimer();
      if (now - start >= timeout) {
        return false;
      }
    }
    return true;
  }
  /**
   * unload weapon asset
   *
   */
  dismiss() {
    RemoveWeaponAsset(this.hash);
  }
  /**
   * get weapon display name / label
   *
   * @constructor
   */
  get DisplayName() {
    return Weapon.getDisplayNameFromHash(this.hash);
  }
  /**
   * get weapon localized name
   *
   * @constructor
   */
  get LocalizedName() {
    return Game.getGXTEntry(this.DisplayName);
  }
};
export {
  AbstractUIMenuPanel,
  Alignment,
  AmmoType,
  AnimationFlags,
  AsynchronousRaycastResult,
  Audio,
  AudioFlag,
  BadgeStyle,
  BaseEntity,
  Blip,
  BlipColor,
  BlipSprite,
  Bone,
  Camera,
  CameraShake,
  CameraTypes,
  CargobobHook,
  CheckboxStyle,
  Checkpoint,
  CheckpointCustomIconStyle,
  CheckpointIcon,
  CloudHat,
  Color,
  Command,
  ComponentAttachmentPoint,
  Container,
  Control,
  Convar,
  Crypto,
  CursorSprite,
  Delay,
  DlcWeaponComponentData,
  DlcWeaponData,
  DrivingStyle,
  Effects,
  EntityBone,
  EntityBoneCollection,
  ExplosionType,
  Fading,
  FiringPattern,
  Font,
  ForceType,
  Game,
  GameplayCamera,
  Gender,
  HelmetType,
  Hud,
  HudColor,
  HudComponent,
  InputMode,
  InstructionalButtons,
  IntersectFlags,
  InvalidWeaponComponent,
  InvertAxisFlags,
  Kvp,
  Language,
  LeaveVehicleFlags,
  LicensePlateStyle,
  LicensePlateType,
  ListItem,
  LiteEvent,
  LoadAnimDict,
  LoadAnimDictArray,
  LoadingPrompt,
  LoadingSpinnerType,
  MarkerType,
  MaterialHash,
  Maths2 as Maths,
  Menu,
  MenuAlignment,
  MenuControl,
  MenuControls,
  MenuSettings,
  Model,
  NetworkedScene,
  Notification,
  NotificationType,
  ParachuteLandingType,
  ParachuteState,
  ParticleEffect,
  ParticleEffectAsset,
  Ped,
  PedBone,
  PedBoneCollection,
  PedHash,
  Pickup,
  PickupType,
  Player2 as Player,
  Point,
  PointF,
  Prop,
  Quaternion,
  RadioStation,
  RagdollType,
  Rectangle,
  Relationship,
  RelationshipGroup,
  RemoveAnimDictArray,
  Resource,
  Rope,
  RopeType,
  SHAPE_TEST_DEFAULT,
  Scaleform,
  Screen,
  ScreenEffect,
  ShapeTestOptions,
  Size,
  SpeechModifier,
  Sprite,
  SynchronousRaycastResult,
  TaskSequence,
  Tasks,
  Text,
  Timerbar,
  UIMenuCheckboxItem,
  UIMenuColorPanel,
  UIMenuGridPanel,
  UIMenuItem,
  UIMenuListItem,
  UIMenuPercentagePanel,
  UIMenuSeparatorItem,
  UIMenuSliderItem,
  UIMenuStatisticsPanel,
  UIMenuStatisticsPanelItem,
  Vector2,
  Vector3,
  Vector4,
  Vehicle,
  VehicleClass,
  VehicleColor,
  VehicleDoor,
  VehicleDoorCollection,
  VehicleDoorIndex,
  VehicleDrivingFlags,
  VehicleHash,
  VehicleLandingGearState,
  VehicleLockStatus,
  VehicleMod,
  VehicleModCollection,
  VehicleModType,
  VehicleNeonLight,
  VehiclePaintType,
  VehicleRoofState,
  VehicleSeat,
  VehicleToggleMod,
  VehicleToggleModType,
  VehicleWeaponHash,
  VehicleWheel,
  VehicleWheelCollection,
  VehicleWheelIndex,
  VehicleWheelType,
  VehicleWindow,
  VehicleWindowCollection,
  VehicleWindowIndex,
  VehicleWindowTint,
  Wait,
  Weapon,
  WeaponAsset,
  WeaponComponentHash,
  WeaponComponentHudStats,
  WeaponGroup,
  WeaponHash,
  WeaponHudStats,
  WeaponLivery,
  WeaponLiveryColor,
  WeaponTint,
  Weather,
  WeatherTypeHash,
  World,
  ZoneID,
  _String,
  enumValues,
  getStringFromUInt8Array,
  getUInt32FromUint8Array
};
