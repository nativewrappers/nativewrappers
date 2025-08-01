import type { Vector3 } from "@common/utils/Vector";
import type { BaseEntity } from "./models/BaseEntity";
import type { Ped } from "./models/Ped";
import { SyncedSceneFlags } from "./enums/SyncedSceneFlags";
import type { EntityBone } from "./models/EntityBone";

export class NetworkedScene {
  private networked_scene_id;

  /*
   * Allows the current client to receive removed synced scene requests
   * WARNING: This is unsecure, you shouldn't leave this set to true,
   * you should disable this as fast as soon as possible to mitigate any possible exploits.
   */
  static set AllowRemoveSyncedScenes(allow: boolean) {
    Citizen.invokeNative("0x144DA052257AE7D8", allow);
  }

  constructor(
    pos: Vector3,
    rot: Vector3,
    rotationOrder = 2,
    holdLastFrame = false,
    looped = false,
    phaseToStopScene = 1.0,
    phaseToStartScene = 0.0,
    animSpeed = 1.0,
  ) {
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
      phaseToStartScene + 0.0,
      animSpeed + 0.0,
    );
  }

  addPed(
    ped: Ped,
    animDict: string,
    animName: string,
    blendInSpeed = 8.0,
    blendOutSpeed = -8.0,
    syncedSceneFlags: SyncedSceneFlags = SyncedSceneFlags.None,
    ragdollBlockingFlags = 0,
    moverBlendInData = 1000.0,
    ikFlags = 0,
  ): void {
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
      ikFlags,
    );
  }

  addEntity(
    entity: BaseEntity,
    animDict: string,
    animName: string,
    blendInSpeed = 8.0,
    blendOutSpeed = -8.0,
    syncedSceneFlags: SyncedSceneFlags = SyncedSceneFlags.None,
  ): void {
    NetworkAddEntityToSynchronisedScene(
      entity.Handle,
      this.networked_scene_id,
      animDict,
      animName,
      blendInSpeed,
      blendOutSpeed,
      syncedSceneFlags,
    );
  }

  forceLocalUseOfSyncedSceneCamera() {
    NetworkForceLocalUseOfSyncedSceneCamera(this.networked_scene_id);
  }

  attachSceneToEntityBone(entity: BaseEntity, bone: EntityBone) {
    NetworkAttachSynchronisedSceneToEntity(this.networked_scene_id, entity.Handle, bone.Index);
  }

  get LocalSceneId() {
    return NetworkGetLocalSceneFromNetworkId(this.networked_scene_id);
  }

  get NetworkSceneId() {
    return this.networked_scene_id;
  }

  start(): void {
    NetworkStartSynchronisedScene(this.networked_scene_id);
  }

  stop(): void {
    NetworkStopSynchronisedScene(this.networked_scene_id);
  }
}
