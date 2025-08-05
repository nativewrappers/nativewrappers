import { ClassTypes } from "@common/utils/ClassTypes";
import { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonEntityBoneCollection } from "./CommonEntityBoneCollection";

export class CommonVehicle extends CommonBaseEntity {
  public static exists(vehicle: CommonVehicle): boolean {
    return typeof vehicle !== "undefined" && vehicle.exists();
  }

  public static fromHandle(handle: number): CommonVehicle | null {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new this(handle);
  }

  public static fromNetworkId(networkId: number): CommonVehicle | null {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new this(NetworkGetEntityFromNetworkId(networkId));
  }

  protected type = ClassTypes.Vehicle;
  protected bones?: CommonEntityBoneCollection;

  constructor(handle: number) {
    super(handle);
  }

  public get Bones(): CommonEntityBoneCollection {
    if (!this.bones) {
      this.bones = new CommonEntityBoneCollection(this);
    }

    return this.bones;
  }
}
