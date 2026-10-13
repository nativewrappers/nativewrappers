var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var State = /* @__PURE__ */ ((State2) => {
  State2[State2["Uninitialized"] = 0] = "Uninitialized";
  State2[State2["Initialized"] = 1] = "Initialized";
  State2[State2["Enabled"] = 2] = "Enabled";
  return State2;
})(State || {});
class BaseScript {
  static {
    __name(this, "BaseScript");
  }
  state = 0 /* Uninitialized */;
  events = /* @__PURE__ */ new Map();
  exports = /* @__PURE__ */ new Map();
  ticks = /* @__PURE__ */ new Map();
  statebags = /* @__PURE__ */ new Map();
  convars = /* @__PURE__ */ new Map();
  // TODO:
  // Commands?
  get IsEnabled() {
    return (this.state & 2 /* Enabled */) !== 0;
  }
  start() {
  }
  stop() {
  }
  startTick(name) {
  }
  stopTick(name) {
  }
}
export {
  BaseScript,
  State
};
