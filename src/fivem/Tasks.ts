import { Vector3 } from "@common/utils/Vector";
import type { TaskSequence } from "./TaskSequence";
import type { AnimationFlags } from "./enums/AnimationFlags";
import { DrivingStyle } from "./enums/Driving";
import { FiringPattern } from "./enums/FiringPattern";
import type { LeaveVehicleFlags } from "./enums/LeaveVehicleFlags";
import { VehicleSeat } from "./enums/Vehicle";
import type { BaseEntity } from "./models/BaseEntity";
import type { Ped } from "./models/Ped";
import type { Vehicle } from "./models/Vehicle";
import { LoadAnimDict } from "./utils/Animations";

export class Tasks {
  private ped: Ped;

  // we take null because sequences have a null ped, if you pass null to this
  // you better now what you're doing.
  constructor(ped: Ped | null) {
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

  public aimAt(target: BaseEntity | Vector3, duration: number): void {
    if (target instanceof Vector3) {
      TaskAimGunAtCoord(this.ped.Handle, target.x, target.y, target.z, duration, false, false);
    } else {
      TaskAimGunAtEntity(this.ped.Handle, target.Handle, duration, false);
    }
  }

  public arrest(ped: Ped): void {
    TaskArrestPed(this.ped.Handle, ped.Handle);
  }

  public chatTo(ped: Ped): void {
    TaskChatToPed(this.ped.Handle, ped.Handle, 16, 0, 0, 0, 0, 0);
  }

  public jump(): void {
    TaskJump(this.ped.Handle, true);
  }

  public climb(): void {
    TaskClimb(this.ped.Handle, true);
  }

  public climbLadder(): void {
    TaskClimbLadder(this.ped.Handle, 1);
  }

  public cower(duration: number): void {
    TaskCower(this.ped.Handle, duration);
  }

  public chaseWithGroundVehicle(target: BaseEntity): void {
    TaskVehicleChase(this.ped.Handle, target.Handle);
  }

  public chaseWithHelicopter(target: BaseEntity, offset: Vector3): void {
    TaskHeliChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
  }

  public chaseWithPlane(target: BaseEntity, offset: Vector3): void {
    TaskPlaneChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
  }

  public cruiseWithVehicle(vehicle: Vehicle, speed: number, drivingstyle = DrivingStyle.None): void {
    TaskVehicleDriveWander(this.ped.Handle, vehicle.Handle, speed, drivingstyle);
  }

  public driveTo(
    vehicle: Vehicle,
    target: Vector3,
    radius: number,
    speed: number,
    drivingstyle = DrivingStyle.None,
  ): void {
    TaskVehicleDriveToCoordLongrange(
      this.ped.Handle,
      vehicle.Handle,
      target.x,
      target.y,
      target.z,
      speed,
      drivingstyle,
      radius,
    );
  }

  public enterAnyVehicle(seat = VehicleSeat.Any, timeout = -1, speed = 0, flag = 0): void {
    TaskEnterVehicle(this.ped.Handle, 0, timeout, seat, speed, flag, 0);
  }

  public static everyoneLeaveVehicle(vehicle: Vehicle): void {
    TaskEveryoneLeaveVehicle(vehicle.Handle);
  }

  public fightAgainst(target: Ped, duration?: number): void {
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
      TaskCombatHatedTargetsAroundPed(this.ped.Handle, radius, 0);
    }
  }

  public fleeFrom(pedOrPosition: Ped | Vector3, duration = -1): void {
    if (pedOrPosition instanceof Vector3) {
      TaskSmartFleeCoord(
        this.ped.Handle,
        pedOrPosition.x,
        pedOrPosition.y,
        pedOrPosition.z,
        100,
        duration,
        false,
        false,
      );
    } else {
      TaskSmartFleePed(this.ped.Handle, pedOrPosition.Handle, 100, duration, false, false);
    }
  }

  public followPointRoute(points: Vector3[]): void {
    TaskFlushRoute();

    points.forEach((point) => TaskExtendRoute(point.x, point.y, point.z));

    TaskFollowPointRoute(this.ped.Handle, 1, 0);
  }

  public followToOffsetFromEntity(
    target: BaseEntity,
    offset: Vector3,
    timeout: number,
    stoppingRange: number,
    movementSpeed = 1,
    persistFollowing = true,
  ): void {
    TaskFollowToOffsetOfEntity(
      this.ped.Handle,
      target.Handle,
      offset.x,
      offset.y,
      offset.z,
      movementSpeed,
      timeout,
      stoppingRange,
      persistFollowing,
    );
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
        flags,
        targetHeading,
      );
    }
  }

  public goToEntity(target: BaseEntity, offset: Vector3 | null = null, timeout = -1): void {
    if (offset === null) {
      offset = new Vector3(0, 0, 0);
    }

    TaskGotoEntityOffsetXy(this.ped.Handle, target.Handle, timeout, offset.x, offset.y, offset.z, 1, true);
  }

  public guardCurrentPosition(): void {
    TaskGuardCurrentPosition(this.ped.Handle, 15, 10, true);
  }

  public handsUp(duration: number): void {
    TaskHandsUp(this.ped.Handle, duration, 0, -1, false);
  }

  public landPlane(startPosition: Vector3, touchdownPosition: Vector3, plane: Vehicle | null = null): void {
    if (plane === null) {
      plane = this.ped.CurrentVehicle;
    }

    if (plane === null || !plane.exists() || plane.isDead()) {
      TaskPlaneLand(
        this.ped.Handle,
        0,
        startPosition.x,
        startPosition.y,
        startPosition.z,
        touchdownPosition.x,
        touchdownPosition.y,
        touchdownPosition.z,
      );
    } else {
      TaskPlaneLand(
        this.ped.Handle,
        plane.Handle,
        startPosition.x,
        startPosition.y,
        startPosition.z,
        touchdownPosition.x,
        touchdownPosition.y,
        touchdownPosition.z,
      );
    }
  }

  public lookAt(targetOrPosition: BaseEntity | Vector3, duration = -1): void {
    if (targetOrPosition instanceof Vector3) {
      TaskLookAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, 0, 2);
    } else {
      TaskLookAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, 0, 2);
    }
  }

  public parachuteTo(position: Vector3): void {
    TaskParachuteToTarget(this.ped.Handle, position.x, position.y, position.z);
  }

  public parkVehicle(vehicle: Vehicle, position: Vector3, heading: number, radius = 20, keepEngineOn = false): void {
    TaskVehiclePark(
      this.ped.Handle,
      vehicle.Handle,
      position.x,
      position.y,
      position.z,
      heading,
      1,
      radius,
      keepEngineOn,
    );
  }

  public performSequence(sequence: TaskSequence): void {
    if (!sequence.IsClosed) {
      sequence.close();
    }

    this.clearAll();
    // this.ped.BlockPermanentEvents = true;

    TaskPerformSequence(this.ped.Handle, sequence.Handle);
  }

  public async playAnimation(
    animDict: string,
    animName: string,
    blendInSpeed: number,
    blendOutSpeed: number,
    duration: number,
    playbackRate: number,
    flags: AnimationFlags,
  ): Promise<void> {
    await LoadAnimDict(animDict);

    TaskPlayAnim(
      this.ped.Handle,
      animDict,
      animName,
      blendInSpeed,
      blendOutSpeed,
      duration,
      flags,
      playbackRate,
      false,
      false,
      false,
    );

    RemoveAnimDict(animDict);
  }

  public reactAndFlee(ped: Ped): void {
    TaskReactAndFleePed(this.ped.Handle, ped.Handle);
  }

  public reloadWeapon(): void {
    TaskReloadWeapon(this.ped.Handle, true);
  }

  public shootAt(targetOrPosition: Ped | Vector3, duration = -1, pattern = FiringPattern.Default): void {
    if (targetOrPosition instanceof Vector3) {
      TaskShootAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, pattern);
    } else {
      TaskShootAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, pattern);
    }
  }

  public shuffleToNextVehicleSeat(vehicle: Vehicle): void {
    TaskShuffleToNextVehicleSeat(this.ped.Handle, vehicle.Handle);
  }

  public skyDive(): void {
    TaskSkyDive(this.ped.Handle);
  }

  public slideTo(position: Vector3, heading: number, duration = 0.7): void {
    TaskPedSlideToCoord(this.ped.Handle, position.x, position.y, position.z, heading, duration);
  }

  public standStill(duration: number): void {
    TaskStandStill(this.ped.Handle, duration);
  }

  public startScenario(
    name: string,
    position: Vector3,
    heading = 0,
    duration = 0,
    sittingScenario = false,
    teleport = true,
  ): void {
    TaskStartScenarioAtPosition(
      this.ped.Handle,
      name,
      position.x,
      position.y,
      position.z,
      heading,
      duration,
      sittingScenario,
      teleport,
    );
  }

  public swapWeapon(): void {
    TaskSwapWeapon(this.ped.Handle, false);
  }

  public turnTo(targetOrPosition: BaseEntity | Vector3, duration = -1): void {
    if (targetOrPosition instanceof Vector3) {
      TaskTurnPedToFaceCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration);
    } else {
      TaskTurnPedToFaceEntity(this.ped.Handle, targetOrPosition.Handle, duration);
    }
  }

  public useParachute(): void {
    TaskParachute(this.ped.Handle, true);
  }

  public useMobilePhone(duration = 1): void {
    TaskUseMobilePhone(this.ped.Handle, duration);
  }

  public putAwayParachute(): void {
    TaskParachute(this.ped.Handle, false);
  }

  public putAwayMobilePhone(): void {
    TaskUseMobilePhone(this.ped.Handle, 0);
  }

  public vehicleChase(target: Ped): void {
    TaskVehicleChase(this.ped.Handle, target.Handle);
  }

  public vehicleShootAtPed(target: Ped): void {
    TaskVehicleShootAtPed(this.ped.Handle, target.Handle, 20);
  }

  public wait(duration: number): void {
    TaskPause(this.ped.Handle, duration);
  }

  public wanderAround(position?: Vector3, radius?: number): void {
    if (position && radius) TaskWanderInArea(this.ped.Handle, position.x, position.y, position.z, radius, 0, 0);
    else TaskWanderStandard(this.ped.Handle, 0, 0);
  }

  public warpIntoVehicle(vehicle: Vehicle, seat: VehicleSeat): void {
    TaskWarpPedIntoVehicle(this.ped.Handle, vehicle.Handle, seat);
  }

  public warpOutOfVehicle(vehicle: Vehicle, flags: LeaveVehicleFlags): void {
    TaskLeaveVehicle(this.ped.Handle, vehicle.Handle, flags);
  }

  public isPlayingAnim(dict: string, anim: string, taskFlag = 3): boolean {
    return IsEntityPlayingAnim(this.ped.Handle, dict, anim, taskFlag);
  }

  public clearAll(): void {
    ClearPedTasks(this.ped.Handle);
  }

  public clearAllImmediately(): void {
    ClearPedTasksImmediately(this.ped.Handle);
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
