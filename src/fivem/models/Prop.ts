import { ClassTypes } from "@common/utils/ClassTypes";
import { GetEntityClassFromId } from "fivem/utils/GetEntityFromEntityIds";
import { BaseEntity } from "./BaseEntity";
import type { Entity } from "./Entity";
import { EntityBoneCollection } from "./EntityBoneCollection";

export class Prop extends BaseEntity {
  public static exists(prop: Prop): boolean {
    return typeof prop !== "undefined" && prop.exists();
  }

  public static fromHandle(handle: number): Prop | null {
    return new Prop(handle);
  }

  public static fromNetworkId(networkId: number): Prop | null {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }

    return new Prop(NetworkGetEntityFromNetworkId(networkId));
  }
  protected type = ClassTypes.Prop;
  protected bones?: EntityBoneCollection | undefined;

  constructor(handle: number) {
    super(handle);
  }

  public exists(): boolean {
    return super.exists() && GetEntityType(this.handle) === 3;
  }

  public placeOnGround(): void {
    PlaceObjectOnGroundProperly(this.handle);
  }

  public getEntityAttachedTo(): Entity {
    return GetEntityClassFromId(this.handle);
  }

  public get Bones(): EntityBoneCollection {
    if (!this.bones) {
      this.bones = new EntityBoneCollection(this);
    }

    return this.bones;
  }
}
