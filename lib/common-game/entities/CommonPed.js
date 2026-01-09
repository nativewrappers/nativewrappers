var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonPlayer } from "./CommonPlayer";
import { ClassTypes } from "../common/utils/ClassTypes";
import { CommonPedBoneCollection } from "./CommonPedBoneCollection";
import { CommonTasks } from "../CommonTasks";
class CommonPed extends CommonBaseEntity {
  static {
    __name(this, "CommonPed");
  }
  tasks;
  type = ClassTypes.Ped;
  bones;
  static fromHandle(handle) {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new this(handle);
  }
  static fromNetworkId(networkId) {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new this(NetworkGetEntityFromNetworkId(networkId));
  }
  constructor(handle) {
    super(handle);
  }
  get Player() {
    const playerIndex = NetworkGetPlayerIndexFromPed(this.handle);
    if (playerIndex === -1) {
      return null;
    }
    return new CommonPlayer(playerIndex);
  }
  get Task() {
    if (!this.tasks) {
      this.tasks = new CommonTasks(this);
    }
    return this.tasks;
  }
  get Bones() {
    if (!this.bones) {
      this.bones = new CommonPedBoneCollection(this);
    }
    return this.bones;
  }
}
export {
  CommonPed
};
