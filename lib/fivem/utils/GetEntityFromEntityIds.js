var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Ped } from "../models/Ped";
import { Prop } from "../models/Prop";
import { Vehicle } from "../models/Vehicle";
function GetEntityClassFromId(entityId) {
  switch (GetEntityType(entityId)) {
    case 1: {
      return Ped.fromHandle(entityId);
    }
    case 2: {
      return Vehicle.fromHandle(entityId);
    }
    case 3: {
      return Prop.fromHandle(entityId);
    }
  }
  return null;
}
__name(GetEntityClassFromId, "GetEntityClassFromId");
export {
  GetEntityClassFromId
};
