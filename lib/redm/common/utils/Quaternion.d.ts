import { Vector3 } from "./Vector3";
export declare class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(value: number);
    constructor(vector: Vector3, w: number);
    constructor(x: number, y: number, z: number, w: number);
}
