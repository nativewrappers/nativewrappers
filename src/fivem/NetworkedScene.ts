import type { Ped, Vector3 } from ".";
import type { BaseEntity } from "./models/BaseEntity";
export class NetworkedScene {
  private scene;
  constructor(
    pos: Vector3,
    rot: Vector3,
    rotationOrder: number,
    holdLastFrame: boolean,
    looped: boolean,
    sceneHash: number,
    animTime: number,
    animSpeed: number,
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
      sceneHash,
      animTime + 0.0,
      animSpeed + 0.0,
    );
  }

  addPed(
    ped: Ped,
    animDict: string,
    animName: string,
    blendInSpeed: number,
    blendOutSpeed: number,
    duration: number,
    flag: number,
    playbackRate: number,
    p9: number,
  ): void {
    NetworkAddPedToSynchronisedScene(
      ped.Handle,
      this.scene,
      animDict,
      animName,
      blendInSpeed,
      blendOutSpeed,
      duration,
      flag,
      playbackRate,
      p9,
    );
  }

  addEntity(
    entity: BaseEntity,
    animDict: string,
    animName: string,
    speed: number,
    speedMultiplier: number,
    flag: number,
  ): void {
    NetworkAddEntityToSynchronisedScene(entity.Handle, this.scene, animDict, animName, speed, speedMultiplier, flag);
  }

  start(): void {
    NetworkStartSynchronisedScene(this.scene);
  }

  stop(): void {
    NetworkStopSynchronisedScene(this.scene);
  }
}
