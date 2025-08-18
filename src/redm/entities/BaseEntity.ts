// This shouldn't change from typeof, we don't want to import the class, this is only used for documentation
import { Vector3 } from "@common/utils/Vector";
import type { Ped } from "./Ped";
import { CommonBaseEntity } from "@common-game/entities/CommonBaseEntity";

export abstract class BaseEntity extends CommonBaseEntity {}
