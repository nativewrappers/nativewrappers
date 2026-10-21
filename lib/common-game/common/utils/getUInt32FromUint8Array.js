var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const getUInt32FromUint8Array = /* @__PURE__ */ __name((buffer, start, end) => new Uint32Array(buffer.slice(start, end).buffer)[0], "getUInt32FromUint8Array");
export {
  getUInt32FromUint8Array
};
