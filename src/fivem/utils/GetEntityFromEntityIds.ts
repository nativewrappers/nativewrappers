import { BaseEntity } from "fivem/models";
import type { Entity } from "fivem/models/Entity";
import { Ped } from "fivem/models/Ped";
import { Prop } from "fivem/models/Prop";
import { Vehicle } from "fivem/models/Vehicle";

export function GetEntityClassFromId(entityId: number): Entity {
  BaseEntity;
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
