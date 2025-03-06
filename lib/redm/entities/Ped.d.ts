import { Attributes } from "../Attribute";
import type { eDamageCleanliness, KnockOffVehicle, TamingState } from "../enums/Ped";
import type { VehicleSeat } from "../enums/VehicleSeat";
import { type Vector3 } from "../utils";
import { BaseEntity } from "./BaseEntity";
import { Vehicle } from "./Vehicle";
import type { Player } from "./Player";
export declare class Ped extends BaseEntity {
    private attributes;
    constructor(handle: number);
    /**
     * Blocks scenarios inbetween the specified vectors
     * @todo Move to Game
     * @param vec1
     * @param vec2
     * @param blockingFlags you can find blocking flags [here](https://github.com/Halen84/RDR3-Native-Flags-And-Enums/blob/main/ADD_SCENARIO_BLOCKING_AREA/README.md)
     * @returns the scenarioId that can be used in {@link removeScenarioBlock} to unblock
     */
    static blockScenariosInArea(vec1: Vector3, vec2: Vector3, blockingFlags: number): number;
    /**
     * Removes the blocking of scenarios in the specified area
     * @param scenarioId the number returned from {@link blockScenariosInArea}
     */
    static removeScenarioBlock(scenarioId: number): void;
    /**
     * While this increases the peds max health, if used on a player it wont increase the max core value on the hud
     */
    set MaxHealth(amount: number);
    /**
     * @returns the maximum health of the ped
     */
    get MaxHealth(): number;
    /**
     * @returns the {@link Attributes} for the current ped
     */
    get Attributes(): Attributes;
    get InVehicle(): boolean;
    get IsInjured(): boolean;
    get IsFatallyInjured(): boolean;
    get IsPlayer(): boolean;
    get IsShooting(): boolean;
    get Accuracy(): number;
    set Accuracy(accuracy: number);
    get CanBeKnockedOffVehicle(): boolean;
    get IsMale(): boolean;
    get IsHuman(): boolean;
    get IsOnTopOfVehicle(): boolean;
    get Vehicle(): Vehicle | null;
    /**
     * @returns the last mount that this ped was on, or null if it doesn't exist
     */
    get Mount(): Ped | null;
    /**
     * returns the horse that this ped is leading
     */
    get LeadingHorse(): Ped | null;
    /**
     * returns the owner of the current animal
     */
    get Owner(): Ped | null;
    get TamingState(): TamingState;
    get IsInteractingWithAnimal(): boolean;
    get IsSittingInAnyVehicle(): boolean;
    get IsPlantingBomb(): boolean;
    get IsInAnyBoat(): boolean;
    get IsInAnyHeli(): boolean;
    get IsInAnyPlane(): boolean;
    get IsInFlyingVehicle(): boolean;
    get IsFalling(): boolean;
    get IsSliding(): boolean;
    get IsJumping(): boolean;
    get IsClimbing(): boolean;
    get IsClimbingLadder(): boolean;
    get IsVaulting(): boolean;
    get IsDiving(): boolean;
    get IsOpeningADoor(): boolean;
    set SeeingRange(value: number);
    set HearingRange(value: number);
    get IsStealthed(): boolean;
    get IsJacking(): boolean;
    get IsStunned(): boolean;
    get IsBeingJacked(): boolean;
    get IsInCombatRoll(): boolean;
    get CrouchMovement(): boolean;
    /**
     * returns true if {@link DamageCleanliness} was ever lower than {@link eDamageCleanliness.Good}
     */
    get IsDamaged(): boolean;
    set IsDamaged(damaged: boolean);
    get DamageCleanliness(): eDamageCleanliness;
    set DamageCleanliness(cleanliness: eDamageCleanliness);
    set DefenseModifier(amount: number);
    set CanBeTargeted(toggle: boolean);
    /**
     * returns the ped who jacked this ped
     */
    getJacker(): Ped;
    setCrouchMovement(state: boolean, immediately?: boolean): void;
    canBeTargetedByPlayer(player: Player, toggle: boolean): void;
    clearLastBoneDamage(): void;
    set OwnsAnimal(animal: Ped);
    isInteractionPossible(animal: Ped): boolean;
    isOnVehicle(vehicle: Vehicle): boolean;
    isSittingInVehicle(vehicle: Vehicle): boolean;
    warpOutOfVehicle(): void;
    /**
     * puts the ped onto the specified mount
     * @param targetPed the horse to put the ped on
     * @param seatIndex the seat index to put the ped on
     */
    setOntoMount(targetPed: Ped, seatIndex: VehicleSeat): void;
    removeFromMount(): void;
    /**
     * Sets the ped into the specified vehicle
     * @param vehicle the vehicle to put the ped into
     * @param seatIndex the seat index to put the ped into
     */
    setIntoVehicle(vehicle: Vehicle, seatIndex: VehicleSeat): void;
    /**
     * kills the ped and optionally sets the killer
     * @param killer the entity that killed the ped
     */
    killPed(killer?: BaseEntity): void;
    damage(amount: number, boneId?: number, killer?: Ped): void;
    /**
     * this returns a different type then the getter so we can't use set, maybe ts will fix soon (tm)
     * @param state how hard it will be to knock a ped off their vehicle
     */
    setCanBeKnockedOffVehicle(state: KnockOffVehicle): void;
    /**
     * Removes the specified ped if its not a player entity
     */
    delete(): void;
    /**
     * creates a clone of the ped
     * @param network if the ped should be a networked entity
     * @param bScriptHostPed whether to register the ped as pinned to the script host in the R* network model.
     * @param copyHeadBlend whether to copy the peds head blend
     * @returns the cloned ped
     */
    clone(network: boolean, bScriptHostPed: boolean, copyHeadBlend: boolean): Ped;
    /**
     * clones the ped onto the target ped
     * @param targetPed the ped to clone onto
     */
    cloneTo(targetPed: Ped): void;
    /**
     * @param amount - the amount of armour to add to the ped
     */
    addArmour(amount: number): void;
    applyDamage(damageAmount: number, boneId?: number, pedKiller?: Ped | null): void;
    /**
     * @param damagePack - the damage decal to apply see [here](https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua) for more documentation
     * @param damage - the damage to apply
     * @param mult - the multiplier?
     */
    applyDamagePack(damagePack: string, damage: number, mult: number): void;
    get CurrentVehicle(): Vehicle | null;
}
