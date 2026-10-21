var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const Delay = /* @__PURE__ */ __name((ms) => new Promise((res) => setTimeout(res, ms)), "Delay");
export {
  Delay
};
