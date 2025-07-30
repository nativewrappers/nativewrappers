import type { Vector3 } from "@common/utils/Vector";
import type { BaseEntity } from "./models/BaseEntity";
import type { Ped } from "./models/Ped";
import { SyncedSceneFlags } from "./enums/SyncedSceneFlags";
import type { EntityBone } from "./models/EntityBone";

export class NetworkedScene {
  private scene;

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
    this.scene = NetworkCreateSynchronisedScene(
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
      this.scene,
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
    NetworkAddEntityToSynchronisedScene(entity.Handle, this.scene, animDict, animName, blendInSpeed, blendOutSpeed, syncedSceneFlags);
  }

  forceLocalUseOfSyncedSceneCamera() {
    NetworkForceLocalUseOfSyncedSceneCamera(this.scene);
  }

  attachSceneToEntityBone(entity: BaseEntity, bone: EntityBone) {
    NetworkAttachSynchronisedSceneToEntity(this.scene, entity.Handle, bone.Index);
  }

  get LocalScene() {
    return NetworkGetLocalSceneFromNetworkId(this.scene);
  }

  start(): void {
    NetworkStartSynchronisedScene(this.scene);
  }

  stop(): void {
    NetworkStopSynchronisedScene(this.scene);
  }
}
