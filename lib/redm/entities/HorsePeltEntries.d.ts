import { BufferedClass } from "../BufferedClass";
import type { Ped } from "./Ped";
declare class HorsePeltEntry {
    #private;
    constructor(view: DataView, index: number);
    get ItemHash(): number;
    get AlbedoHash(): number;
    get NormalHash(): number;
}
export declare class HorsePeltEntries extends BufferedClass {
    constructor(horse: Ped);
    GetAllPelts(): Generator<HorsePeltEntry, void, unknown>;
    getPeltEntry(index: number): HorsePeltEntry;
}
export {};
