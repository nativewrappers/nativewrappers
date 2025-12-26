var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "../common/utils/Vector";
import { CommonBaseEntity } from "./entities/CommonBaseEntity";
import { CommonPed } from "./entities/CommonPed";
import { VehicleSeat } from "./enums/VehicleSeat";
import { LoadAnimDict } from "./utils/Animations";
import { GlobalData } from "../common/GlobalData";
import { IHandle } from "./entities/IHandle";
class CommonTasks {
  static {
    __name(this, "CommonTasks");
  }
  ped;
  // we take null because sequences have a null ped, if you pass null to this
  // you better now what you're doing.
  constructor(ped) {
    const actualPed = ped ?? { handle: null };
    this.ped = actualPed;
  }
  achieveHeading(heading, timeout = 0) {
    TaskAchieveHeading(this.ped.Handle, heading, timeout);
  }
  blockTemporaryEvents(block = true) {
    TaskSetBlockingOfNonTemporaryEvents(this.ped.Handle, block);
  }
  aimAt(target, duration) {
    if (target instanceof CommonBaseEntity)
      TaskAimGunAtEntity(this.ped.Handle, target.Handle, duration, false, false);
    else TaskAimGunAtCoord(this.ped.Handle, target.x, target.y, target.z, duration, false, false);
  }
  arrest(ped) {
    TaskArrestPed(this.ped.Handle, ped.Handle);
  }
  jump() {
    TaskJump(this.ped.Handle, true);
  }
  climb() {
    TaskClimb(this.ped.Handle, true);
  }
  cruiseWithVehicle(vehicle, speed, drivingStyle = 0) {
    TaskVehicleDriveWander(this.ped.Handle, vehicle.Handle, speed, drivingStyle);
  }
  enterAnyVehicle(seat = VehicleSeat.AnyPassenger, timeout = -1, speed = 0, flag = 0) {
    TaskEnterVehicle(this.ped.Handle, 0, timeout, seat, speed, flag, 0);
  }
  static everyoneLeaveVehicle(vehicle) {
    TaskEveryoneLeaveVehicle(vehicle.Handle, 0);
  }
  fightAgainst(target, duration) {
    if (duration) {
      TaskCombatPedTimed(this.ped.Handle, target.Handle, duration, 0);
    } else {
      TaskCombatPed(this.ped.Handle, target.Handle, 0, 16);
    }
  }
  fightAgainstHatedTargets(radius, duration) {
    if (duration) {
      TaskCombatHatedTargetsAroundPedTimed(this.ped.Handle, radius, duration, 0);
    } else {
      TaskCombatHatedTargetsAroundPed(this.ped.Handle, radius, 0, 0);
    }
  }
  fleeFrom(pedOrPosition, distance = 100, duration = -1, fleeType = 0, fleeSpeed = 3, fleeFrom) {
    if (pedOrPosition instanceof CommonPed) {
      TaskSmartFleePed(
        this.ped.Handle,
        pedOrPosition.Handle,
        distance,
        duration,
        fleeType,
        fleeSpeed,
        fleeFrom ? fleeFrom.Handle : 0
      );
    } else {
      TaskSmartFleeCoord(
        this.ped.Handle,
        pedOrPosition.x,
        pedOrPosition.y,
        pedOrPosition.z,
        distance,
        duration,
        fleeType,
        fleeSpeed
      );
    }
  }
  goTo(position, ignorePaths = false, timeout = -1, speed = 1, targetHeading = 0, distanceToSlide = 0, flags = 0) {
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
        0
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
        targetHeading
      );
    }
  }
  goToEntity(target, offset = new Vector3(0), timeout = -1) {
    TaskGotoEntityOffsetXy(this.ped.Handle, target.Handle, timeout, offset.x, offset.y, offset.z, 1, true);
  }
  guardCurrentPosition() {
    TaskGuardCurrentPosition(this.ped.Handle, 15, 10, true);
  }
  handsUp(duration) {
    TaskHandsUp(this.ped.Handle, duration, 0, -1, false);
  }
  lookAt(targetOrPosition, duration = -1) {
    if (targetOrPosition instanceof CommonBaseEntity) {
      TaskLookAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, 2048, 31, 0);
    } else {
      TaskLookAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, 0, 51, 0);
    }
  }
  async playAnimation(animDict, animName, blendInSpeed, blendOutSpeed, duration, playbackRate, animFlags, ikFlags) {
    await LoadAnimDict(animDict);
    if (GlobalData.GameName === "redm") {
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
        ikFlags,
        false,
        0,
        false
      );
    } else {
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
        false
      );
    }
    RemoveAnimDict(animDict);
  }
  reloadWeapon() {
    TaskReloadWeapon(this.ped.Handle, true);
  }
  shootAt(targetOrPosition, duration = -1, pattern = 0, affectCockedState = false) {
    if (targetOrPosition instanceof IHandle) {
      TaskShootAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, pattern, affectCockedState);
    } else {
      TaskShootAtCoord(
        this.ped.Handle,
        targetOrPosition.x,
        targetOrPosition.y,
        targetOrPosition.z,
        duration,
        pattern,
        0
      );
    }
  }
  shuffleToNextVehicleSeat(vehicle) {
    TaskShuffleToNextVehicleSeat(this.ped.Handle, vehicle.Handle);
  }
  slideTo(position, heading, duration = 0.7) {
    TaskPedSlideToCoord(this.ped.Handle, position.x, position.y, position.z, heading, duration);
  }
  standStill(duration) {
    TaskStandStill(this.ped.Handle, duration);
  }
  vehicleShootAtPed(target) {
    TaskVehicleShootAtPed(this.ped.Handle, target.Handle, 20);
  }
  wait(duration) {
    TaskPause(this.ped.Handle, duration);
  }
  wanderAround(position, radius) {
    if (position && radius) {
      TaskWanderInArea(this.ped.Handle, position.x, position.y, position.z, radius, 0, 0, 0);
    } else {
      TaskWanderStandard(this.ped.Handle, 0, 0);
    }
  }
  warpIntoVehicle(vehicle, seat) {
    TaskWarpPedIntoVehicle(this.ped.Handle, vehicle.Handle, seat);
  }
  warpOutOfVehicle(vehicle, flags) {
    TaskLeaveVehicle(this.ped.Handle, vehicle.Handle, flags, 0);
  }
  isPlayingAnim(dict, anim, taskFlag = 3) {
    return IsEntityPlayingAnim(this.ped.Handle, dict, anim, taskFlag);
  }
  clearAll() {
    ClearPedTasks(this.ped.Handle, true, false);
  }
  clearAllImmediately() {
    ClearPedTasksImmediately(this.ped.Handle, true, false);
  }
  clearLookAt() {
    TaskClearLookAt(this.ped.Handle);
  }
  clearSecondary() {
    ClearPedSecondaryTask(this.ped.Handle);
  }
  clearAnimation(animDict, animName) {
    StopAnimTask(this.ped.Handle, animDict, animName, -4);
  }
}
export {
  CommonTasks
};
