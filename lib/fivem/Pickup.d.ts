import { Vector3 } from "./common/utils/Vector";
export declare class Pickup {
    private handle;
    constructor(handle: number);
    /**
     * @returns `true` if the current entity is networked, false otherwise
     */
    get IsNetworked(): boolean;
    get Position(): Vector3;
    get IsCollected(): boolean;
    delete(): void;
    exists(): boolean;
}
