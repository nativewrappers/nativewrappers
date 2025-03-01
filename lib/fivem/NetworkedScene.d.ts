import type { Ped, Vector3 } from ".";
import type { BaseEntity } from "./models/BaseEntity";
export declare class NetworkedScene {
    private scene;
    constructor(pos: Vector3, rot: Vector3, rotationOrder: number, holdLastFrame: boolean, looped: boolean, sceneHash: number, animTime: number, animSpeed: number);
    addPed(ped: Ped, animDict: string, animName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, p9: number): void;
    addEntity(entity: BaseEntity, animDict: string, animName: string, speed: number, speedMultiplier: number, flag: number): void;
    start(): void;
    stop(): void;
}
