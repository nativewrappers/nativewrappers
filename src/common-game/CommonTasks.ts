import { Vector3 } from "@common/utils/Vector";
import { CommonBaseEntity } from "./entities/CommonBaseEntity";
import { CommonPed } from "./entities/CommonPed";
import type { CommonVehicle } from "./entities/CommonVehicle";
import { VehicleSeat } from "./enums/VehicleSeat";
import { LoadAnimDict } from "./utils/Animations";
import { GlobalData } from "@common/GlobalData";

export class CommonTasks {
  private ped: CommonPed;

  // we take null because sequences have a null ped, if you pass null to this
  // you better now what you're doing.
  constructor(ped: CommonPed | null) {
    const actualPed = ped ?? { handle: null };
    // @ts-ignore
    this.ped = actualPed;
  }

  public achieveHeading(heading: number, timeout = 0): void {
    TaskAchieveHeading(this.ped.Handle, heading, timeout);
  }

  public blockTemporaryEvents(block = true): void {
    TaskSetBlockingOfNonTemporaryEvents(this.ped.Handle, block);
  }

  public aimAt(target: CommonBaseEntity | Vector3, duration: number): void {
    if (target instanceof CommonBaseEntity)
      TaskAimGunAtEntity(this.ped.Handle, target.Handle, duration, false as any, false as any);
    else TaskAimGunAtCoord(this.ped.Handle, target.x, target.y, target.z, duration, false, false);
  }

  public arrest(ped: CommonPed): void {
    TaskArrestPed(this.ped.Handle, ped.Handle);
  }

  public jump(): void {
    TaskJump(this.ped.Handle, true);
  }

  public climb(): void {
    TaskClimb(this.ped.Handle, true);
  }

  public cruiseWithVehicle(vehicle: CommonVehicle, speed: number, drivingStyle = 0): void {
    TaskVehicleDriveWander(this.ped.Handle, vehicle.Handle, speed, drivingStyle);
  }

  public enterAnyVehicle(seat = VehicleSeat.AnyPassenger, timeout = -1, speed = 0, flag = 0): void {
    TaskEnterVehicle(this.ped.Handle, 0, timeout, seat, speed, flag, 0);
  }

  public static everyoneLeaveVehicle(vehicle: CommonVehicle): void {
    TaskEveryoneLeaveVehicle(vehicle.Handle, 0);
  }

  public fightAgainst(target: CommonPed, duration?: number): void {
    if (duration) {
      TaskCombatPedTimed(this.ped.Handle, target.Handle, duration, 0);
    } else {
      TaskCombatPed(this.ped.Handle, target.Handle, 0, 16);
    }
  }

  public fightAgainstHatedTargets(radius: number, duration?: number): void {
    if (duration) {
      TaskCombatHatedTargetsAroundPedTimed(this.ped.Handle, radius, duration, 0);
    } else {
      TaskCombatHatedTargetsAroundPed(this.ped.Handle, radius, 0, 0);
    }
  }

  public fleeFrom(
    pedOrPosition: CommonPed | Vector3,
    distance = 100.0,
    duration = -1,
    fleeType = 0,
    fleeSpeed = 3.0,
    fleeFrom?: CommonPed,
  ): void {
    if (pedOrPosition instanceof CommonPed) {
      TaskSmartFleePed(
        this.ped.Handle,
        pedOrPosition.Handle,
        distance,
        duration,
        fleeType,
        fleeSpeed,
        fleeFrom ? fleeFrom.Handle : 0,
      );
    } else {
      TaskSmartFleeCoord(
        this.ped.Handle,
        pedOrPosition.x,
        pedOrPosition.y,
        pedOrPosition.z,
        distance,
        duration,
        fleeType as any,
        fleeSpeed as any,
      );
    }
  }

  public goTo(
    position: Vector3,
    ignorePaths = false,
    timeout = -1,
    speed = 1,
    targetHeading = 0,
    distanceToSlide = 0,
    flags = 0,
  ): void {
    if (ignorePaths) {
      TaskGoStraightToCoord(
        this.ped.Handle,
        position.x,
        position.y,
        position.z,
        speed,
        timeout,
        targetHeading,
        distanceToSlide,
        0,
      );
    } else {
      TaskFollowNavMeshToCoord(
        this.ped.Handle,
        position.x,
        position.y,
        position.z,
        speed,
        timeout,
        0,
        flags as any,
        targetHeading,
      );
    }
  }

  public goToEntity(target: CommonBaseEntity, offset = new Vector3(0), timeout = -1): void {
    TaskGotoEntityOffsetXy(this.ped.Handle, target.Handle, timeout, offset.x, offset.y, offset.z, 1, true);
  }

  public guardCurrentPosition(): void {
    TaskGuardCurrentPosition(this.ped.Handle, 15, 10, true);
  }

  public handsUp(duration: number): void {
    TaskHandsUp(this.ped.Handle, duration, 0, -1, false);
  }

  public lookAt(targetOrPosition: CommonBaseEntity | Vector3, duration = -1): void {
    if (targetOrPosition instanceof CommonBaseEntity) {
      TaskLookAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, 2048, 31, 0);
    } else {
      TaskLookAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, 0, 51, 0);
    }
  }

  public async playAnimation(
    animDict: string,
    animName: string,
    blendInSpeed: number,
    blendOutSpeed: number,
    duration: number,
    playbackRate: number,
    animFlags: number,
    ikFlags?: number,
  ): Promise<void> {
    await LoadAnimDict(animDict);

    if (GlobalData.GameName === "redm") {
      TaskPlayAnim(
        this.ped.Handle,
        animDict as any,
        animName as any,
        blendInSpeed,
        blendOutSpeed,
        duration,
        animFlags,
        playbackRate,
        false as any,
        ikFlags!,
        false as any,
        0,
        false as any,
      );
    } else {
      // @ts-ignore: This is for FiveM only, but we specifically only build against redm.d.ts to ensure everything works properly.
      TaskPlayAnim(
            this.ped.Handle,
            animDict,
            animName,
            blendInSpeed,
            blendOutSpeed,
            duration,
            animFlags,
            playbackRate,
            false,
            false,
            false,
        );      
    }

    RemoveAnimDict(animDict);
  }

  public reloadWeapon(): void {
    TaskReloadWeapon(this.ped.Handle, true);
  }

  public shootAt(
    targetOrPosition: CommonPed | Vector3,
    duration = -1,
    pattern = 0,
    affectCockedState = false,
  ): void {
    if (targetOrPosition instanceof CommonPed) {
      TaskShootAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, pattern, affectCockedState as any);
    } else {
      TaskShootAtCoord(
        this.ped.Handle,
        targetOrPosition.x,
        targetOrPosition.y,
        targetOrPosition.z,
        duration,
        pattern,
        0,
      );
    }
  }

  public shuffleToNextVehicleSeat(vehicle: CommonVehicle): void {
    TaskShuffleToNextVehicleSeat(this.ped.Handle, vehicle.Handle);
  }

  public slideTo(position: Vector3, heading: number, duration = 0.7): void {
    TaskPedSlideToCoord(this.ped.Handle, position.x, position.y, position.z, heading, duration);
  }

  public standStill(duration: number): void {
    TaskStandStill(this.ped.Handle, duration);
  }

  public vehicleShootAtPed(target: CommonPed): void {
    TaskVehicleShootAtPed(this.ped.Handle, target.Handle, 20);
  }

  public wait(duration: number): void {
    TaskPause(this.ped.Handle, duration);
  }

  public wanderAround(position?: Vector3, radius?: number): void {
    if (position && radius) {
      TaskWanderInArea(this.ped.Handle, position.x, position.y, position.z, radius, 0, 0, 0);
    } else {
      TaskWanderStandard(this.ped.Handle, 0, 0);
    }
  }

  public warpIntoVehicle(vehicle: CommonVehicle, seat: VehicleSeat): void {
    TaskWarpPedIntoVehicle(this.ped.Handle, vehicle.Handle, seat);
  }

  public warpOutOfVehicle(vehicle: CommonVehicle, flags: number): void {
    TaskLeaveVehicle(this.ped.Handle, vehicle.Handle, flags, 0);
  }

  public isPlayingAnim(dict: string, anim: string, taskFlag = 3): boolean {
    return IsEntityPlayingAnim(this.ped.Handle, dict, anim, taskFlag);
  }

  public clearAll(): void {
    ClearPedTasks(this.ped.Handle, true as any, false as any);
  }

  public clearAllImmediately(): void {
    ClearPedTasksImmediately(this.ped.Handle, true as any, false as any);
  }

  public clearLookAt(): void {
    TaskClearLookAt(this.ped.Handle);
  }

  public clearSecondary(): void {
    ClearPedSecondaryTask(this.ped.Handle);
  }

  public clearAnimation(animDict: string, animName: string): void {
    StopAnimTask(this.ped.Handle, animDict, animName, -4);
  }
}
