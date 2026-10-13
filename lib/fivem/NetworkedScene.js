var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { SyncedSceneFlags } from "./enums/SyncedSceneFlags";
class NetworkedScene {
  static {
    __name(this, "NetworkedScene");
  }
  networked_scene_id;
  /*
   * Allows the current client to receive removed synced scene requests
   * WARNING: This is unsecure, you shouldn't leave this set to true,
   * you should disable this as fast as soon as possible to mitigate any possible exploits.
   */
  static set AllowRemoveSyncedScenes(allow) {
    Citizen.invokeNative("0x144DA052257AE7D8", allow);
  }
  constructor(pos, rot, rotationOrder = 2, holdLastFrame = false, looped = false, phaseToStopScene = 1, phaseToStartScene = 0, animSpeed = 1) {
    this.networked_scene_id = NetworkCreateSynchronisedScene(
      pos.x,
      pos.y,
      pos.z,
      rot.x,
      rot.y,
      rot.z,
      rotationOrder,
      holdLastFrame,
      looped,
      phaseToStopScene,
      phaseToStartScene + 0,
      animSpeed + 0
    );
  }
  addPed(ped, animDict, animName, blendInSpeed = 8, blendOutSpeed = -8, syncedSceneFlags = SyncedSceneFlags.None, ragdollBlockingFlags = 0, moverBlendInData = 1e3, ikFlags = 0) {
    NetworkAddPedToSynchronisedScene(
      ped.Handle,
      this.networked_scene_id,
      animDict,
      animName,
      blendInSpeed,
      blendOutSpeed,
      syncedSceneFlags,
      ragdollBlockingFlags,
      moverBlendInData,
      ikFlags
    );
  }
  addEntity(entity, animDict, animName, blendInSpeed = 8, blendOutSpeed = -8, syncedSceneFlags = SyncedSceneFlags.None) {
    NetworkAddEntityToSynchronisedScene(
      entity.Handle,
      this.networked_scene_id,
      animDict,
      animName,
      blendInSpeed,
      blendOutSpeed,
      syncedSceneFlags
    );
  }
  forceLocalUseOfSyncedSceneCamera() {
    NetworkForceLocalUseOfSyncedSceneCamera(this.networked_scene_id);
  }
  attachSceneToEntityBone(entity, bone) {
    NetworkAttachSynchronisedSceneToEntity(this.networked_scene_id, entity.Handle, bone.Index);
  }
  get LocalSceneId() {
    return NetworkGetLocalSceneFromNetworkId(this.networked_scene_id);
  }
  get NetworkSceneId() {
    return this.networked_scene_id;
  }
  start() {
    NetworkStartSynchronisedScene(this.networked_scene_id);
  }
  stop() {
    NetworkStopSynchronisedScene(this.networked_scene_id);
  }
}
export {
  NetworkedScene
};
