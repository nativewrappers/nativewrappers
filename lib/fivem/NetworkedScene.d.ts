import type { Vector3 } from "./common/utils/Vector";
import type { BaseEntity } from "./models/BaseEntity";
import type { Ped } from "./models/Ped";
import { SyncedSceneFlags } from "./enums/SyncedSceneFlags";
import type { EntityBone } from "./models/EntityBone";
export declare class NetworkedScene {
    private networked_scene_id;
    static set AllowRemoveSyncedScenes(allow: boolean);
    constructor(pos: Vector3, rot: Vector3, rotationOrder?: number, holdLastFrame?: boolean, looped?: boolean, phaseToStopScene?: number, phaseToStartScene?: number, animSpeed?: number);
    addPed(ped: Ped, animDict: string, animName: string, blendInSpeed?: number, blendOutSpeed?: number, syncedSceneFlags?: SyncedSceneFlags, ragdollBlockingFlags?: number, moverBlendInData?: number, ikFlags?: number): void;
    addEntity(entity: BaseEntity, animDict: string, animName: string, blendInSpeed?: number, blendOutSpeed?: number, syncedSceneFlags?: SyncedSceneFlags): void;
    forceLocalUseOfSyncedSceneCamera(): void;
    attachSceneToEntityBone(entity: BaseEntity, bone: EntityBone): void;
    get LocalSceneId(): number;
    get NetworkSceneId(): number;
    start(): void;
    stop(): void;
}
