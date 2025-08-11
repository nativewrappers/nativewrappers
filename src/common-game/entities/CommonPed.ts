import { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonPlayer } from "./CommonPlayer";
import { ClassTypes } from "@common/utils/ClassTypes";
import { CommonPedBoneCollection } from "./CommonPedBoneCollection";
import { CommonTasks } from "@common-game/CommonTasks";

export class CommonPed extends CommonBaseEntity {
  private tasks: CommonTasks | undefined;
  protected type = ClassTypes.Ped;
  protected bones?: CommonPedBoneCollection;

  public static fromHandle(handle: number): CommonPed | null {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new this(handle);
  }

  public static fromNetworkId(networkId: number): CommonPed | null {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }

    return new this(NetworkGetEntityFromNetworkId(networkId));
  }

  constructor(handle: number) {
    super(handle);
  }

  public get Player(): CommonPlayer | null {
    const playerIndex = NetworkGetPlayerIndexFromPed(this.handle);
    if (playerIndex === -1) {
      return null;
    }
    return new CommonPlayer(playerIndex);
  }

  public get Task(): CommonTasks {
    if (!this.tasks) {
      this.tasks = new CommonTasks(this);
    }

    return this.tasks;
  }

  public get Bones(): CommonPedBoneCollection {
    if (!this.bones) {
      this.bones = new CommonPedBoneCollection(this);
    }

    return this.bones;
  }
}
