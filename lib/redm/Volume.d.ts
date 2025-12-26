import type { Vector3 } from "./common/utils/Vector";
export declare enum VolumeType {
    Cylinder = 0,
    Box = 1
}
export declare class Volume {
    private handle;
    constructor(volumeType: VolumeType, coord: Vector3, rot: Vector3, scale: Vector3, customName?: string);
    get Handle(): number;
}
