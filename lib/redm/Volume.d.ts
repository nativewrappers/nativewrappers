import type { Vector3 } from "./common/utils/Vector3";
export declare class Volume {
    private handle;
    constructor(coord: Vector3, rot: Vector3, scale: Vector3, customName?: string);
    get Handle(): number;
}
