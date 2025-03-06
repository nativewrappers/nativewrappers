import { type AnimationFlags, DrivingStyle, FiringPattern, type LeaveVehicleFlags, VehicleSeat } from "./enums";
import { Ped, type Vehicle } from "./models";
import { BaseEntity } from "./models/BaseEntity";
import type { TaskSequence } from "./TaskSequence";
import { Vector3 } from "./utils";
export declare class Tasks {
    private ped;
    constructor(ped: Ped | null);
    achieveHeading(heading: number, timeout?: number): void;
    blockTemporaryEvents(block?: boolean): void;
    aimAt(target: BaseEntity | Vector3, duration: number): void;
    arrest(ped: Ped): void;
    chatTo(ped: Ped): void;
    jump(): void;
    climb(): void;
    climbLadder(): void;
    cower(duration: number): void;
    chaseWithGroundVehicle(target: BaseEntity): void;
    chaseWithHelicopter(target: BaseEntity, offset: Vector3): void;
    chaseWithPlane(target: BaseEntity, offset: Vector3): void;
    cruiseWithVehicle(vehicle: Vehicle, speed: number, drivingstyle?: DrivingStyle): void;
    driveTo(vehicle: Vehicle, target: Vector3, radius: number, speed: number, drivingstyle?: DrivingStyle): void;
    enterAnyVehicle(seat?: VehicleSeat, timeout?: number, speed?: number, flag?: number): void;
    static everyoneLeaveVehicle(vehicle: Vehicle): void;
    fightAgainst(target: Ped, duration?: number): void;
    fightAgainstHatedTargets(radius: number, duration?: number): void;
    fleeFrom(pedOrPosition: Ped | Vector3, duration?: number): void;
    followPointRoute(points: Vector3[]): void;
    followToOffsetFromEntity(target: BaseEntity, offset: Vector3, timeout: number, stoppingRange: number, movementSpeed?: number, persistFollowing?: boolean): void;
    goTo(position: Vector3, ignorePaths?: boolean, timeout?: number, speed?: number, targetHeading?: number, distanceToSlide?: number, flags?: number): void;
    goToEntity(target: BaseEntity, offset?: Vector3 | null, timeout?: number): void;
    guardCurrentPosition(): void;
    handsUp(duration: number): void;
    landPlane(startPosition: Vector3, touchdownPosition: Vector3, plane?: Vehicle | null): void;
    lookAt(targetOrPosition: BaseEntity | Vector3, duration?: number): void;
    parachuteTo(position: Vector3): void;
    parkVehicle(vehicle: Vehicle, position: Vector3, heading: number, radius?: number, keepEngineOn?: boolean): void;
    performSequence(sequence: TaskSequence): void;
    playAnimation(animDict: string, animName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, playbackRate: number, flags: AnimationFlags): Promise<void>;
    reactAndFlee(ped: Ped): void;
    reloadWeapon(): void;
    shootAt(targetOrPosition: Ped | Vector3, duration?: number, pattern?: FiringPattern): void;
    shuffleToNextVehicleSeat(vehicle: Vehicle): void;
    skyDive(): void;
    slideTo(position: Vector3, heading: number, duration?: number): void;
    standStill(duration: number): void;
    startScenario(name: string, position: Vector3, heading?: number, duration?: number, sittingScenario?: boolean, teleport?: boolean): void;
    swapWeapon(): void;
    turnTo(targetOrPosition: BaseEntity | Vector3, duration?: number): void;
    useParachute(): void;
    useMobilePhone(duration?: number): void;
    putAwayParachute(): void;
    putAwayMobilePhone(): void;
    vehicleChase(target: Ped): void;
    vehicleShootAtPed(target: Ped): void;
    wait(duration: number): void;
    wanderAround(position?: Vector3, radius?: number): void;
    warpIntoVehicle(vehicle: Vehicle, seat: VehicleSeat): void;
    warpOutOfVehicle(vehicle: Vehicle, flags: LeaveVehicleFlags): void;
    isPlayingAnim(dict: string, anim: string, taskFlag?: number): boolean;
    clearAll(): void;
    clearAllImmediately(): void;
    clearLookAt(): void;
    clearSecondary(): void;
    clearAnimation(animDict: string, animName: string): void;
}
