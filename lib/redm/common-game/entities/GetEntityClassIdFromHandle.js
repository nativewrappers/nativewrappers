var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonPed } from "./CommonPed";
import { CommonProp } from "./CommonProp";
import { CommonVehicle } from "./CommonVehicle";
function GetEntityClassFromHandle(entityId) {
  switch (GetEntityType(entityId)) {
    case 1: {
      return CommonPed.fromHandle(entityId);
    }
    case 2: {
      return CommonVehicle.fromHandle(entityId);
    }
    case 3: {
      return CommonProp.fromHandle(entityId);
    }
  }
  return null;
}
__name(GetEntityClassFromHandle, "GetEntityClassFromHandle");
export {
  GetEntityClassFromHandle
};
