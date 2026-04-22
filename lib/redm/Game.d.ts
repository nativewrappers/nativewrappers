import { Vector3 } from "./common/utils/Vector";
import { Ped } from "./entities/Ped";
export declare class Game {
    static get PlayerPed(): Ped;
    static get Player(): import("./entities/Player").Player;
    static loadScene(pos: Vector3, offset?: Vector3, radius?: number, controlFlags?: number): boolean;
    static stopLoadScene(): void;
    static isLoadSceneLoaded(): boolean;
    static isLoadSceneActive(): boolean;
}
