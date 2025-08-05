import type { CommonEntity } from "./CommonEntityType";
import { CommonPed } from "./CommonPed";
import { CommonProp } from "./CommonProp";
import { CommonVehicle } from "./CommonVehicle";

export function GetEntityClassFromHandle(entityId: number): CommonEntity {
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
