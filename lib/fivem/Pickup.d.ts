import { Vector3 } from "./utils";
export declare class Pickup {
    private handle;
    constructor(handle: number);
    get Position(): Vector3;
    get IsCollected(): boolean;
    delete(): void;
    exists(): boolean;
}
