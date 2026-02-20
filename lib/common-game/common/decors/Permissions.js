var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { GlobalData } from "../GlobalData";
const addAcePermission = /* @__PURE__ */ __name((aceName, context) => {
  context.addInitializer(function() {
    const _t = this;
    _t.__permissionMap = _t.__permissionMap ?? /* @__PURE__ */ new Map();
    const ace_list = _t.__permissionMap.get(context.name);
    if (ace_list) {
      ace_list.add(aceName);
    } else {
      _t.__permissionMap.set(context.name, /* @__PURE__ */ new Set([aceName]));
    }
  });
}, "addAcePermission");
function RestrictToGroupAce(groupAceName) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }
    const groupAce = `group.${groupAceName}`;
    addAcePermission(groupAce, context);
  }, "actualDecorator");
}
__name(RestrictToGroupAce, "RestrictToGroupAce");
function RestrictToJobAce(jobAce) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }
    const groupAce = `job.${jobAce}`;
    addAcePermission(groupAce, context);
  }, "actualDecorator");
}
__name(RestrictToJobAce, "RestrictToJobAce");
function RestrictToAce(aceName) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }
    addAcePermission(aceName, context);
  }, "actualDecorator");
}
__name(RestrictToAce, "RestrictToAce");
export {
  RestrictToAce,
  RestrictToGroupAce,
  RestrictToJobAce
};
