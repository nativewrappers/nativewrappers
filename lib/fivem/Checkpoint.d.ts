import { Vector3 } from "./common/utils/Vector";
import { CheckpointIcon } from "./enums/Checkpoint";
export declare class Checkpoint {
    private handle;
    private position;
    private targetPosition;
    private icon;
    private radius;
    constructor(handle: number);
    get Position(): Vector3;
    set Position(position: Vector3);
    get TargetPosition(): Vector3;
    set TargetPosition(targetPosition: Vector3);
    get Icon(): CheckpointIcon;
    set Icon(icon: CheckpointIcon);
    get Radius(): number;
    set Radius(radius: number);
}
