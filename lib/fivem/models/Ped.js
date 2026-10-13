var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "../common/utils/ClassTypes";
import { Vector3 } from "../common/utils/Vector";
import { Tasks } from "../Tasks";
import { Gender } from "../enums/Gender";
import { RagdollType } from "../enums/RagdollType";
import { SpeechModifier } from "../enums/SpeechModifier";
import { VehicleSeat } from "../enums/Vehicle";
import { GetEntityClassFromId } from "../utils/GetEntityFromEntityIds";
import { WeaponCollection } from "../weapon/WeaponCollection";
import { BaseEntity } from "./BaseEntity";
import { PedBoneCollection } from "./PedBoneCollection";
import { Player } from "./Player";
import { Vehicle } from "./Vehicle";
class Ped extends BaseEntity {
  static {
    __name(this, "Ped");
  }
  static exists(ped) {
    return typeof ped !== "undefined" && ped.exists();
  }
  static fromHandle(handle) {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new this(handle);
  }
  static fromNetworkId(networkId) {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new Ped(NetworkGetEntityFromNetworkId(networkId));
  }
  type = ClassTypes.Ped;
  bones;
  weapons;
  static speechModifierNames = [
    "SPEECH_PARAMS_STANDARD",
    "SPEECH_PARAMS_ALLOW_REPEAT",
    "SPEECH_PARAMS_BEAT",
    "SPEECH_PARAMS_FORCE",
    "SPEECH_PARAMS_FORCE_FRONTEND",
    "SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND",
    "SPEECH_PARAMS_FORCE_NORMAL",
    "SPEECH_PARAMS_FORCE_NORMAL_CLEAR",
    "SPEECH_PARAMS_FORCE_NORMAL_CRITICAL",
    "SPEECH_PARAMS_FORCE_SHOUTED",
    "SPEECH_PARAMS_FORCE_SHOUTED_CLEAR",
    "SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL",
    "SPEECH_PARAMS_FORCE_PRELOAD_ONLY",
    "SPEECH_PARAMS_MEGAPHONE",
    "SPEECH_PARAMS_HELI",
    "SPEECH_PARAMS_FORCE_MEGAPHONE",
    "SPEECH_PARAMS_FORCE_HELI",
    "SPEECH_PARAMS_INTERRUPT",
    "SPEECH_PARAMS_INTERRUPT_SHOUTED",
    "SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR",
    "SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL",
    "SPEECH_PARAMS_INTERRUPT_NO_FORCE",
    "SPEECH_PARAMS_INTERRUPT_FRONTEND",
    "SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND",
    "SPEECH_PARAMS_ADD_BLIP",
    "SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT",
    "SPEECH_PARAMS_ADD_BLIP_FORCE",
    "SPEECH_PARAMS_ADD_BLIP_SHOUTED",
    "SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE",
    "SPEECH_PARAMS_ADD_BLIP_INTERRUPT",
    "SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE",
    "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED",
    "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR",
    "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL",
    "SPEECH_PARAMS_SHOUTED",
    "SPEECH_PARAMS_SHOUTED_CLEAR",
    "SPEECH_PARAMS_SHOUTED_CRITICAL"
  ];
  tasks;
  constructor(handle) {
    super(handle);
  }
  get Player() {
    const playerIndex = NetworkGetPlayerIndexFromPed(this.handle);
    if (playerIndex === -1) {
      return null;
    }
    return new Player(playerIndex);
  }
  get Money() {
    return GetPedMoney(this.handle);
  }
  set Money(amount) {
    SetPedMoney(this.handle, amount);
  }
  get Gender() {
    return IsPedMale(this.handle) ? Gender.Male : Gender.Female;
  }
  get Armor() {
    return GetPedArmour(this.handle);
  }
  set Armor(amount) {
    if (amount > 100) amount = 100;
    SetPedArmour(this.handle, amount);
  }
  get Accuracy() {
    return GetPedAccuracy(this.handle);
  }
  set Accuracy(accuracy) {
    if (accuracy > 100) accuracy = 100;
    SetPedAccuracy(this.handle, accuracy);
  }
  get Health() {
    return super.Health - 100;
  }
  set Health(amount) {
    super.Health = amount + 100;
  }
  get MaxHealth() {
    return super.MaxHealth - 100;
  }
  set MaxHealth(amount) {
    super.MaxHealth = amount + 100;
  }
  set Sweat(value) {
    SetPedSweat(this.handle, value);
  }
  set WetnessHeight(value) {
    if (value === 0) {
      ClearPedWetness(this.Handle);
    } else {
      SetPedWetnessHeight(this.handle, value);
    }
  }
  set Voice(value) {
    SetAmbientVoiceName(this.handle, value);
  }
  set ShootRate(value) {
    if (value > 1e3) value = 1e3;
    SetPedShootRate(this.handle, value);
  }
  get WasKilledByStealth() {
    return WasPedKilledByStealth(this.handle);
  }
  get WasKilledByTakedown() {
    return WasPedKilledByTakedown(this.handle);
  }
  get SeatIndex() {
    if (!this.CurrentVehicle) return VehicleSeat.None;
    const numberOfSeats = GetVehicleModelNumberOfSeats(this.CurrentVehicle.Model.Hash);
    for (let seat = -1; seat < numberOfSeats; seat++) {
      if (this.CurrentVehicle.getPedOnSeat(seat)?.Handle === this.handle) {
        return seat;
      }
    }
    return VehicleSeat.None;
  }
  get CurrentVehicle() {
    const veh = Vehicle.fromHandle(GetVehiclePedIsIn(this.handle, false));
    return veh?.exists() ? veh : null;
  }
  get LastVehicle() {
    const veh = Vehicle.fromHandle(GetVehiclePedIsIn(this.handle, true));
    return veh?.exists() ? veh : null;
  }
  get VehicleTryingToEnter() {
    const veh = Vehicle.fromHandle(GetVehiclePedIsTryingToEnter(this.handle));
    return veh?.exists() ? veh : null;
  }
  get IsJumpingOutOfVehicle() {
    return IsPedJumpingOutOfVehicle(this.handle);
  }
  set StaysInVehicleWhenJacked(value) {
    SetPedStayInVehicleWhenJacked(this.handle, value);
  }
  set MaxDrivingSpeed(value) {
    SetDriveTaskMaxCruiseSpeed(this.handle, value);
  }
  get IsHuman() {
    return IsPedHuman(this.handle);
  }
  set IsEnemy(value) {
    SetPedAsEnemy(this.handle, value);
  }
  set IsPriorityTargetForEnemies(value) {
    SetEntityIsTargetPriority(this.handle, value, 0);
  }
  get IsPlayer() {
    return IsPedAPlayer(this.handle);
  }
  get IsCuffed() {
    return IsPedCuffed(this.handle);
  }
  get IsWearingHelmet() {
    return IsPedWearingHelmet(this.handle);
  }
  get IsRagdoll() {
    return IsPedRagdoll(this.handle);
  }
  get IsIdle() {
    return !this.IsInjured && !this.IsRagdoll && !this.IsInAir && !this.IsOnFire && !this.IsDucking && !this.IsGettingIntoAVehicle && !this.IsInCombat && !this.IsInMeleeCombat && (!this.isInAnyVehicle() || this.isSittingInAnyVehicle());
  }
  get IsProne() {
    return IsPedProne(this.handle);
  }
  set IsDucking(value) {
    SetPedDucking(this.handle, value);
  }
  get IsDucking() {
    return IsPedDucking(this.handle);
  }
  get IsGettingUp() {
    return IsPedGettingUp(this.handle);
  }
  get IsClimbing() {
    return IsPedClimbing(this.handle);
  }
  get IsJumping() {
    return IsPedJumping(this.handle);
  }
  get IsFalling() {
    return IsPedFalling(this.handle);
  }
  get IsStopped() {
    return IsPedStopped(this.handle);
  }
  get IsWalking() {
    return IsPedWalking(this.handle);
  }
  get IsRunning() {
    return IsPedRunning(this.handle);
  }
  get IsSprinting() {
    return IsPedSprinting(this.handle);
  }
  get IsDiving() {
    return IsPedDiving(this.handle);
  }
  get IsInParachuteFreeFall() {
    return IsPedInParachuteFreeFall(this.handle);
  }
  get IsSwimming() {
    return IsPedSwimming(this.handle);
  }
  get IsSwimmingUnderWater() {
    return IsPedSwimmingUnderWater(this.handle);
  }
  get IsVaulting() {
    return IsPedVaulting(this.handle);
  }
  get IsOnBike() {
    return IsPedOnAnyBike(this.handle);
  }
  get IsOnFoot() {
    return IsPedOnFoot(this.handle);
  }
  get IsInSub() {
    return IsPedInAnySub(this.handle);
  }
  get IsInTaxi() {
    return IsPedInAnyTaxi(this.handle);
  }
  get IsInTrain() {
    return IsPedInAnyTrain(this.handle);
  }
  get IsInHeli() {
    return IsPedInAnyHeli(this.handle);
  }
  get IsInPlane() {
    return IsPedInAnyPlane(this.handle);
  }
  get IsInFlyingVehicle() {
    return IsPedInFlyingVehicle(this.handle);
  }
  get IsInBoat() {
    return IsPedInAnyBoat(this.handle);
  }
  get IsInPoliceVehicle() {
    return IsPedInAnyPoliceVehicle(this.handle);
  }
  get IsJacking() {
    return IsPedJacking(this.handle);
  }
  get IsBeingJacked() {
    return IsPedBeingJacked(this.handle);
  }
  get IsGettingIntoAVehicle() {
    return IsPedGettingIntoAVehicle(this.handle);
  }
  get IsTryingToEnterALockedVehicle() {
    return IsPedTryingToEnterALockedVehicle(this.handle);
  }
  get IsInjured() {
    return IsPedInjured(this.handle);
  }
  get IsFleeing() {
    return IsPedFleeing(this.handle);
  }
  get IsInCombat() {
    return IsPedInCombat(this.handle, PlayerPedId());
  }
  get IsInMeleeCombat() {
    return IsPedInMeleeCombat(this.handle);
  }
  get IsInStealthMode() {
    return GetPedStealthMovement(this.handle);
  }
  get IsAmbientSpeechPlaying() {
    return IsAmbientSpeechPlaying(this.handle);
  }
  get IsScriptedSpeechPlaying() {
    return IsScriptedSpeechPlaying(this.handle);
  }
  get IsAnySpeechPlaying() {
    return IsAnySpeechPlaying(this.handle);
  }
  get IsAmbientSpeechEnabled() {
    return !IsAmbientSpeechDisabled(this.handle);
  }
  set IsPainAudioEnabled(value) {
    DisablePedPainAudio(this.handle, !value);
  }
  get IsPlantingBomb() {
    return IsPedPlantingBomb(this.handle);
  }
  get IsShooting() {
    return IsPedShooting(this.handle);
  }
  get IsAiming() {
    return this.getConfigFlag(78);
  }
  get IsReloading() {
    return IsPedReloading(this.handle);
  }
  get IsDoingDriveby() {
    return IsPedDoingDriveby(this.handle);
  }
  get IsGoingIntoCover() {
    return IsPedGoingIntoCover(this.handle);
  }
  get IsBeingStunned() {
    return IsPedBeingStunned(this.handle, 0);
  }
  get IsBeingStealthKilled() {
    return IsPedBeingStealthKilled(this.handle);
  }
  get IsPerformingStealthKill() {
    return IsPedPerformingStealthKill(this.handle);
  }
  get IsAimingFromCover() {
    return IsPedAimingFromCover(this.handle);
  }
  isInCover(expectUseWeapon = false) {
    return IsPedInCover(this.handle, expectUseWeapon);
  }
  get IsInCoverFacingLeft() {
    return IsPedInCoverFacingLeft(this.handle);
  }
  set FiringPattern(value) {
    SetPedFiringPattern(this.handle, value);
  }
  set DropsWeaponsOnDeath(value) {
    SetPedDropsWeaponsWhenDead(this.handle, value);
  }
  set DrivingSpeed(value) {
    SetDriveTaskCruiseSpeed(this.handle, value);
  }
  set DrivingStyle(style) {
    SetDriveTaskDrivingStyle(this.handle, Number(style));
  }
  set IsDrunk(isDrunk) {
    SetPedIsDrunk(this.handle, isDrunk);
  }
  set MotionBlur(value) {
    SetPedMotionBlur(this.handle, value);
  }
  get Task() {
    if (!this.tasks) {
      this.tasks = new Tasks(this);
    }
    return this.tasks;
  }
  get DeathCause() {
    return GetPedCauseOfDeath(this.handle);
  }
  get TaskSequenceProgress() {
    return GetSequenceProgress(this.handle);
  }
  set BlockPermanentEvents(block) {
    SetBlockingOfNonTemporaryEvents(this.handle, block);
  }
  /*
   * NOTE: You should generally just use {@link ped.CurrentVehicle} if you plan on using the vehicle after
   * as then you don't have to do an extra native call.
   */
  isInAnyVehicle() {
    return IsPedInAnyVehicle(this.handle, false);
  }
  isInVehicle(vehicle) {
    return IsPedInVehicle(this.handle, vehicle.Handle, false);
  }
  isSittingInAnyVehicle() {
    return IsPedSittingInAnyVehicle(this.handle);
  }
  isSittingInVehicle(vehicle) {
    return IsPedSittingInVehicle(this.handle, vehicle.Handle);
  }
  setIntoVehicle(vehicle, seat) {
    SetPedIntoVehicle(this.handle, vehicle.Handle, Number(seat));
  }
  isHeadtracking(entity) {
    return IsPedHeadtrackingEntity(this.handle, entity.Handle);
  }
  isInCombatAgainst(target) {
    return IsPedInCombat(this.handle, target.Handle);
  }
  getJacker() {
    return new Ped(GetPedsJacker(this.handle));
  }
  getJackTarget() {
    return new Ped(GetJackTarget(this.handle));
  }
  getMeleeTarget() {
    return new Ped(GetMeleeTargetForPed(this.handle));
  }
  getKiller() {
    return GetEntityClassFromId(GetPedSourceOfDeath(this.handle));
  }
  kill() {
    this.Health = -1;
  }
  resurrect() {
    const maxHealth = this.Health;
    const isCollisionEnabled = super.IsCollisionEnabled;
    ResurrectPed(this.handle);
    this.MaxHealth = maxHealth;
    this.Health = maxHealth;
    super.IsCollisionEnabled = isCollisionEnabled;
    ClearPedTasksImmediately(this.handle);
  }
  resetVisibleDamage() {
    ResetPedVisibleDamage(this.handle);
  }
  clearBloodDamage() {
    ClearPedBloodDamage(this.handle);
  }
  // TODO: Add RelationshipGroup
  get IsInGroup() {
    return IsPedInGroup(this.handle);
  }
  set NeverLeavesGroup(value) {
    SetPedNeverLeavesGroup(this.handle, value);
  }
  leaveGroup() {
    RemovePedFromGroup(this.handle);
  }
  playAmbientSpeed(speechName, voiceName = "", modifier = SpeechModifier.Standard) {
    if (Number(modifier) >= 0 && Number(modifier) < Ped.speechModifierNames.length) {
      if (voiceName === "") {
        PlayAmbientSpeech1(this.handle, speechName, Ped.speechModifierNames[Number(modifier)]);
      } else {
        PlayAmbientSpeechWithVoice(
          this.handle,
          speechName,
          voiceName,
          Ped.speechModifierNames[Number(modifier)],
          false
        );
      }
    } else {
      throw new RangeError("modifier");
    }
  }
  applyDamage(damageAmount, armorFirst = true) {
    ApplyDamageToPed(this.handle, damageAmount, armorFirst);
  }
  hasBeenDamagedByWeapon(weapon) {
    return HasPedBeenDamagedByWeapon(this.handle, Number(weapon), 0);
  }
  hasBeenDamagedByAnyWeapon() {
    return HasPedBeenDamagedByWeapon(this.handle, 0, 2);
  }
  hasBeenDamagedByAnyMeleeWeapon() {
    return HasPedBeenDamagedByWeapon(this.handle, 0, 1);
  }
  clearLastWeaponDamage() {
    ClearPedLastWeaponDamage(this.handle);
  }
  get Bones() {
    if (!this.bones) {
      this.bones = new PedBoneCollection(this);
    }
    return this.bones;
  }
  /**
   * Ped Weapons
   *
   * @constructor
   */
  get Weapons() {
    if (!this.weapons) {
      this.weapons = new WeaponCollection(this);
    }
    return this.weapons;
  }
  giveWeapon(weapon, ammoCount = 999, isHidden = false, equipNow = true) {
    GiveWeaponToPed(this.handle, weapon, ammoCount, isHidden, equipNow);
  }
  removeWeapon(weapon) {
    RemoveWeaponFromPed(this.handle, weapon);
  }
  removeAllWeapons() {
    RemoveAllPedWeapons(this.handle, true);
  }
  getLastWeaponImpactPosition() {
    const [valid, coords] = GetPedLastWeaponImpactCoord(this.handle);
    return valid ? Vector3.fromArray(coords) : new Vector3(0, 0, 0);
  }
  get CanRagdoll() {
    return CanPedRagdoll(this.handle);
  }
  set CanRagdoll(value) {
    SetPedCanRagdoll(this.handle, value);
  }
  ragdoll(duration = -1, ragdollType = RagdollType.Normal) {
    this.CanRagdoll = true;
    SetPedToRagdoll(this.handle, duration, duration, Number(ragdollType), false, false, false);
  }
  cancelRagdoll() {
    SetPedToRagdoll(this.handle, 1, 1, 1, false, false, false);
  }
  giveHelmet(canBeRemovedByPed, helmetType, textureIndex) {
    GivePedHelmet(this.handle, !canBeRemovedByPed, Number(helmetType), textureIndex);
  }
  removeHelmet(instantly) {
    RemovePedHelmet(this.handle, instantly);
  }
  openParachute() {
    ForcePedToOpenParachute(this.handle);
  }
  getConfigFlag(flagId) {
    return GetPedConfigFlag(this.handle, flagId, true);
  }
  setConfigFlag(flagId, value) {
    SetPedConfigFlag(this.handle, flagId, value);
  }
  resetConfigFlag(flagId) {
    SetPedResetFlag(this.handle, flagId, true);
  }
  // TODO: Proper extension for this
  clone() {
    return new Ped(ClonePed(this.handle, false, false, false));
  }
  exists() {
    return super.exists() && GetEntityType(this.handle) === 1;
  }
  isFacingPed(ped, angle = 25) {
    return IsPedFacingPed(this.handle, ped.Handle, angle);
  }
  setComponentVariation(componentId, drawableId, textureId, paletteId = 0) {
    SetPedComponentVariation(this.handle, componentId, drawableId, textureId, paletteId);
  }
  setRandomComponentVariation() {
    SetPedRandomComponentVariation(this.handle, 0);
  }
  setDefaultComponentVariation() {
    SetPedDefaultComponentVariation(this.handle);
  }
  getDrawableVariation(componentId) {
    return GetPedDrawableVariation(this.handle, componentId);
  }
  getNumberOfDrawableVariations(componentId) {
    return GetNumberOfPedDrawableVariations(this.handle, componentId);
  }
  getTextureVariation(componentId) {
    return GetPedTextureVariation(this.handle, componentId);
  }
  getNumberTextureVariations(componentId, drawableId = this.getDrawableVariation(componentId)) {
    return GetNumberOfPedTextureVariations(this.handle, componentId, drawableId);
  }
  setRandomProps() {
    SetPedRandomProps(this.handle);
  }
  setPropIndex(propId, drawableId, textureId, attach = true) {
    SetPedPropIndex(this.handle, propId, drawableId, textureId, attach);
  }
  clearProp(propId) {
    ClearPedProp(this.handle, propId);
  }
  clearAllProps() {
    ClearAllPedProps(this.handle);
  }
  knockPropOff(p1, p2, p3, p4) {
    KnockOffPedProp(this.handle, p1, p2, p3, p4);
  }
  isPropValid(propId, drawableId, textureId) {
    return SetPedPreloadPropData(this.handle, propId, drawableId, textureId);
  }
  getPropIndex(propId) {
    return GetPedPropIndex(this.handle, propId);
  }
  getNumberOfPropDrawableVariations(propId) {
    return GetNumberOfPedPropDrawableVariations(this.handle, propId);
  }
  getNumberOfPropTextureVariations(propId, drawableId = this.getPropIndex(propId)) {
    return GetNumberOfPedPropTextureVariations(this.handle, propId, drawableId);
  }
  getPropTextureIndex(propId) {
    return GetPedPropTextureIndex(this.handle, propId);
  }
  setHelmetPropIndex(propIndex) {
    SetPedHelmetPropIndex(this.handle, propIndex);
  }
  setEyeColor(color) {
    SetPedEyeColor(this.handle, color);
  }
  getEyeColor() {
    return GetPedEyeColor(this.handle);
  }
  setHairColors(primary, highlight) {
    SetPedHairColor(this.handle, primary, highlight);
  }
  setHairColor(color) {
    this.setHairColors(color, this.getHairHighlightColor());
  }
  getHairColor() {
    return GetPedHairColor(this.handle);
  }
  setHairHighlightColor(color) {
    this.setHairColors(this.getHairColor(), color);
  }
  getHairHighlightColor() {
    return GetPedHairHighlightColor(this.handle);
  }
  getHeadOverlayNum(overlayId) {
    return GetPedHeadOverlayNum(overlayId);
  }
  getHeadOverlayValue(overlayId) {
    return GetPedHeadOverlayValue(this.handle, overlayId);
  }
  setHeadOverlayValue(overlayId, value) {
    const opacity = GetPedHeadOverlayData(this.handle, overlayId)[5];
    this.setHeadOverlay(overlayId, value, opacity);
  }
  getHeadOverlay(overlayId) {
    const [ret, overlayValue, colourType, firstColour, secondColour, overlayOpacity] = GetPedHeadOverlayData(
      this.handle,
      overlayId
    );
    if (!ret) {
      return null;
    }
    return [overlayValue, colourType, firstColour, secondColour, overlayOpacity];
  }
  setHeadOverlay(overlayId, index, opacity) {
    SetPedHeadOverlay(this.handle, overlayId, index, opacity);
  }
  getHeadOverlayOpacity(overlayId) {
    return GetPedHeadOverlayData(this.handle, overlayId)[5];
  }
  setHeadOverlayOpacity(overlayId, opacity) {
    this.setHeadOverlay(overlayId, this.getHeadOverlayValue(overlayId), opacity);
  }
  setHeadOverlayColor(overlayId, color) {
    let colorId = 0;
    if (overlayId === 1 || overlayId === 2 || overlayId === 10) {
      colorId = 1;
    } else if (overlayId === 5 || overlayId === 8) {
      colorId = 2;
    }
    SetPedHeadOverlayColor(this.handle, overlayId, colorId, color, color);
  }
  setHeadBlend(shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent = false) {
    SetPedHeadBlendData(
      this.handle,
      shapeFirstID,
      shapeSecondID,
      shapeThirdID,
      skinFirstID,
      skinSecondID,
      skinThirdID,
      shapeMix,
      skinMix,
      thirdMix,
      isParent
    );
  }
  getHeadBlend() {
    const buffer = new ArrayBuffer(80);
    if (!Citizen.invokeNative("0x2746BD9D88C5C5D0", this.handle, new Float32Array(buffer))) {
      return null;
    }
    const {
      0: shapeFirstId,
      2: shapeSecondId,
      4: shapeThirdId,
      6: skinFirstId,
      8: skinSecondId,
      10: skinThirdId,
      18: isParent
    } = new Uint32Array(buffer);
    const { 0: shapeMix, 2: skinMix, 4: thirdMix } = new Float32Array(buffer, 48);
    return [
      shapeFirstId,
      shapeSecondId,
      shapeThirdId,
      skinFirstId,
      skinSecondId,
      skinThirdId,
      shapeMix,
      skinMix,
      thirdMix,
      !!isParent
    ];
  }
  finalizeHeadBlend() {
    FinalizeHeadBlend(this.handle);
  }
  hasHeadBlendFinished() {
    return HasPedHeadBlendFinished(this.handle);
  }
  getEntityAttachedTo() {
    return GetEntityClassFromId(this.handle);
  }
}
export {
  Ped
};
