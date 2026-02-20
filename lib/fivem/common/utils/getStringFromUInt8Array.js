var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const getStringFromUInt8Array = /* @__PURE__ */ __name((buffer, start, end) => String.fromCharCode(...buffer.slice(start, end)).replace(/\u0000/g, ""), "getStringFromUInt8Array");
export {
  getStringFromUInt8Array
};
