var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Net } from "../net/Net";
function parseSource(source) {
  const id = source.replace(/^(internal-)?net:/, "");
  return parseInt(id, 10);
}
__name(parseSource, "parseSource");
function OnProto(messageType, eventName) {
  const event = eventName ?? `${messageType.name}`;
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("OnProto does not work on private methods");
    }
    context.addInitializer(function() {
      Net.onRaw(event, async (data) => {
        try {
          const message = messageType.decode(data);
          return await originalMethod.call(this, message);
        } catch (e) {
          globalThis.printError?.("proto event", e);
        }
      });
    });
  }, "actualDecorator");
}
__name(OnProto, "OnProto");
function OnProtoNet(messageType, eventName) {
  const event = eventName ?? `${messageType.name}`;
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("OnProto does not work on private methods");
    }
    context.addInitializer(function() {
      Net.onRawNet(event, async (data, source) => {
        try {
          const message = messageType.decode(data);
          return await originalMethod.call(this, message, parseSource(source));
        } catch (e) {
          globalThis.printError?.("proto event", e);
        }
      });
    });
  }, "actualDecorator");
}
__name(OnProtoNet, "OnProtoNet");
export {
  OnProto,
  OnProtoNet
};
