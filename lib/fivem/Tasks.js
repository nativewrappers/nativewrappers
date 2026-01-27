var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
import { DrivingStyle } from "./enums/Driving";
import { FiringPattern } from "./enums/FiringPattern";
import { VehicleSeat } from "./enums/Vehicle";
import { LoadAnimDict } from "./utils/Animations";
class Tasks {
  static {
    __name(this, "Tasks");
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
    if (target instanceof Vector3) {
      TaskAimGunAtCoord(this.ped.Handle, target.x, target.y, target.z, duration, false, false);
    } else {
      TaskAimGunAtEntity(this.ped.Handle, target.Handle, duration, false);
    }
  }
  arrest(ped) {
    TaskArrestPed(this.ped.Handle, ped.Handle);
  }
  chatTo(ped) {
    TaskChatToPed(this.ped.Handle, ped.Handle, 16, 0, 0, 0, 0, 0);
  }
  jump() {
    TaskJump(this.ped.Handle, true);
  }
  climb() {
    TaskClimb(this.ped.Handle, true);
  }
  climbLadder() {
    TaskClimbLadder(this.ped.Handle, 1);
  }
  cower(duration) {
    TaskCower(this.ped.Handle, duration);
  }
  chaseWithGroundVehicle(target) {
    TaskVehicleChase(this.ped.Handle, target.Handle);
  }
  chaseWithHelicopter(target, offset) {
    TaskHeliChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
  }
  chaseWithPlane(target, offset) {
    TaskPlaneChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
  }
  cruiseWithVehicle(vehicle, speed, drivingstyle = DrivingStyle.None) {
    TaskVehicleDriveWander(this.ped.Handle, vehicle.Handle, speed, drivingstyle);
  }
  driveTo(vehicle, target, radius, speed, drivingstyle = DrivingStyle.None) {
    TaskVehicleDriveToCoordLongrange(
      this.ped.Handle,
      vehicle.Handle,
      target.x,
      target.y,
      target.z,
      speed,
      drivingstyle,
      radius
    );
  }
  enterAnyVehicle(seat = VehicleSeat.Any, timeout = -1, speed = 0, flag = 0) {
    TaskEnterVehicle(this.ped.Handle, 0, timeout, seat, speed, flag, 0);
  }
  static everyoneLeaveVehicle(vehicle) {
    TaskEveryoneLeaveVehicle(vehicle.Handle);
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
      TaskCombatHatedTargetsAroundPed(this.ped.Handle, radius, 0);
    }
  }
  fleeFrom(pedOrPosition, duration = -1) {
    if (pedOrPosition instanceof Vector3) {
      TaskSmartFleeCoord(
        this.ped.Handle,
        pedOrPosition.x,
        pedOrPosition.y,
        pedOrPosition.z,
        100,
        duration,
        false,
        false
      );
    } else {
      TaskSmartFleePed(this.ped.Handle, pedOrPosition.Handle, 100, duration, false, false);
    }
  }
  followPointRoute(points) {
    TaskFlushRoute();
    points.forEach((point) => TaskExtendRoute(point.x, point.y, point.z));
    TaskFollowPointRoute(this.ped.Handle, 1, 0);
  }
  followToOffsetFromEntity(target, offset, timeout, stoppingRange, movementSpeed = 1, persistFollowing = true) {
    TaskFollowToOffsetOfEntity(
      this.ped.Handle,
      target.Handle,
      offset.x,
      offset.y,
      offset.z,
      movementSpeed,
      timeout,
      stoppingRange,
      persistFollowing
    );
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
        distanceToSlide
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
  goToEntity(target, offset = null, timeout = -1) {
    if (offset === null) {
      offset = new Vector3(0, 0, 0);
    }
    TaskGotoEntityOffsetXy(this.ped.Handle, target.Handle, timeout, offset.x, offset.y, offset.z, 1, true);
  }
  guardCurrentPosition() {
    TaskGuardCurrentPosition(this.ped.Handle, 15, 10, true);
  }
  handsUp(duration) {
    TaskHandsUp(this.ped.Handle, duration, 0, -1, false);
  }
  landPlane(startPosition, touchdownPosition, plane = null) {
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
        touchdownPosition.z
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
        touchdownPosition.z
      );
    }
  }
  lookAt(targetOrPosition, duration = -1) {
    if (targetOrPosition instanceof Vector3) {
      TaskLookAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, 0, 2);
    } else {
      TaskLookAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, 0, 2);
    }
  }
  parachuteTo(position) {
    TaskParachuteToTarget(this.ped.Handle, position.x, position.y, position.z);
  }
  parkVehicle(vehicle, position, heading, radius = 20, keepEngineOn = false) {
    TaskVehiclePark(
      this.ped.Handle,
      vehicle.Handle,
      position.x,
      position.y,
      position.z,
      heading,
      1,
      radius,
      keepEngineOn
    );
  }
  performSequence(sequence) {
    if (!sequence.IsClosed) {
      sequence.close();
    }
    this.clearAll();
    TaskPerformSequence(this.ped.Handle, sequence.Handle);
  }
  async playAnimation(animDict, animName, blendInSpeed, blendOutSpeed, duration, playbackRate, flags) {
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
      false
    );
    RemoveAnimDict(animDict);
  }
  reactAndFlee(ped) {
    TaskReactAndFleePed(this.ped.Handle, ped.Handle);
  }
  reloadWeapon() {
    TaskReloadWeapon(this.ped.Handle, true);
  }
  shootAt(targetOrPosition, duration = -1, pattern = FiringPattern.Default) {
    if (targetOrPosition instanceof Vector3) {
      TaskShootAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, pattern);
    } else {
      TaskShootAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, pattern);
    }
  }
  shuffleToNextVehicleSeat(vehicle) {
    TaskShuffleToNextVehicleSeat(this.ped.Handle, vehicle.Handle);
  }
  skyDive() {
    TaskSkyDive(this.ped.Handle);
  }
  slideTo(position, heading, duration = 0.7) {
    TaskPedSlideToCoord(this.ped.Handle, position.x, position.y, position.z, heading, duration);
  }
  standStill(duration) {
    TaskStandStill(this.ped.Handle, duration);
  }
  startScenario(name, position, heading = 0, duration = 0, sittingScenario = false, teleport = true) {
    TaskStartScenarioAtPosition(
      this.ped.Handle,
      name,
      position.x,
      position.y,
      position.z,
      heading,
      duration,
      sittingScenario,
      teleport
    );
  }
  swapWeapon() {
    TaskSwapWeapon(this.ped.Handle, false);
  }
  turnTo(targetOrPosition, duration = -1) {
    if (targetOrPosition instanceof Vector3) {
      TaskTurnPedToFaceCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration);
    } else {
      TaskTurnPedToFaceEntity(this.ped.Handle, targetOrPosition.Handle, duration);
    }
  }
  useParachute() {
    TaskParachute(this.ped.Handle, true);
  }
  useMobilePhone(duration = 1) {
    TaskUseMobilePhone(this.ped.Handle, duration);
  }
  putAwayParachute() {
    TaskParachute(this.ped.Handle, false);
  }
  putAwayMobilePhone() {
    TaskUseMobilePhone(this.ped.Handle, 0);
  }
  vehicleChase(target) {
    TaskVehicleChase(this.ped.Handle, target.Handle);
  }
  vehicleShootAtPed(target) {
    TaskVehicleShootAtPed(this.ped.Handle, target.Handle, 20);
  }
  wait(duration) {
    TaskPause(this.ped.Handle, duration);
  }
  wanderAround(position, radius) {
    if (position && radius) TaskWanderInArea(this.ped.Handle, position.x, position.y, position.z, radius, 0, 0);
    else TaskWanderStandard(this.ped.Handle, 0, 0);
  }
  warpIntoVehicle(vehicle, seat) {
    TaskWarpPedIntoVehicle(this.ped.Handle, vehicle.Handle, seat);
  }
  warpOutOfVehicle(vehicle, flags) {
    TaskLeaveVehicle(this.ped.Handle, vehicle.Handle, flags);
  }
  isPlayingAnim(dict, anim, taskFlag = 3) {
    return IsEntityPlayingAnim(this.ped.Handle, dict, anim, taskFlag);
  }
  clearAll() {
    ClearPedTasks(this.ped.Handle);
  }
  clearAllImmediately() {
    ClearPedTasksImmediately(this.ped.Handle);
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
  Tasks
};
