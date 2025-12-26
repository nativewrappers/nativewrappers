import { ClassTypes } from "../common/utils/ClassTypes";
import type { Hash } from "../type/Hash";
import { BaseEntity } from "./BaseEntity";
import { Vehicle } from "./Vehicle";
export declare class Ped extends BaseEntity {
    protected type: ClassTypes;
    constructor(handle: number);
    /**
     * Get an interable list of peds currently on the server
     * @returns Iterable list of Peds.
     */
    static AllPeds(): IterableIterator<Ped>;
    static fromNetworkId(netId: number): Ped | null;
    static fromStateBagName(stateBagName: string): Ped | null;
    static fromSource(source: number): Ped;
    get Armour(): number;
    get CauseOfDeath(): Hash;
    get DesiredHeading(): number;
    get MaxHealth(): number;
    get TaskCommand(): Hash;
    get TaskStage(): number;
    get LastSourceOfDamage(): number;
    get DeathCause(): Hash;
    get Weapon(): Hash;
    /**
     * @returns the current vehicle the ped is in, or null if it doesn't exist
     */
    get CurrentVehicle(): Vehicle | null;
    get LastVehicle(): Vehicle | null;
    get IsPlayer(): boolean;
    getSpecificTaskType(index: number): number;
}
