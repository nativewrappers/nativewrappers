import { ClassTypes } from "@common/utils/ClassTypes";
import { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonEntityBoneCollection } from "./CommonEntityBoneCollection";
import type { CommonEntity } from "./CommonEntityType";
import { GetEntityClassFromHandle } from "./GetEntityClassIdFromHandle";

export class CommonProp extends CommonBaseEntity {
  public static fromHandle(handle: number): CommonProp | null {
    return new this(handle);
  }

  public static fromNetworkId(networkId: number): CommonProp | null {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }

    return new this(NetworkGetEntityFromNetworkId(networkId));
  }
  protected type = ClassTypes.Prop;
  protected bones?: CommonEntityBoneCollection | undefined;

  constructor(handle: number) {
    super(handle);
  }

  public exists(): boolean {
    return super.exists() && GetEntityType(this.handle) === 3;
  }

  public placeOnGround(): void {
    PlaceObjectOnGroundProperly(this.handle);
  }

  public getEntityAttachedTo(): CommonEntity {
    return GetEntityClassFromHandle(this.handle);
  }

  public get Bones(): CommonEntityBoneCollection {
    if (!this.bones) {
      this.bones = new CommonEntityBoneCollection(this);
    }

    return this.bones;
  }
}
