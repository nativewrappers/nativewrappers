var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonPed } from "../common-game/entities/CommonPed";
import { CommonPedBoneCollection } from "../common-game/entities/CommonPedBoneCollection";
import { ClassTypes } from "../common/utils/ClassTypes";
import { Tasks } from "../Task";
import { WeaponAttachPoints } from "../enums/WeaponAttachPoints";
import { ItemAddReason } from "../inventory/InventoryTypes";
import { WeaponModel } from "../models/WeaponModel";
import { _N } from "../utils/Native";
import { Attributes } from "../Attribute";
import { BaseEntity } from "./BaseEntity";
import { Player } from "./Player";
import { Vehicle } from "./Vehicle";
import { PedBoneCollection } from "./bones/PedBoneCollection";
class Ped extends BaseEntity {
  static {
    __name(this, "Ped");
  }
  type = ClassTypes.Ped;
  bones;
  attributes;
  tasks;
  /**
   * Gets the entity from the handle given, if the entity doesn't exist it will return
   * null.
   */
  static fromHandle(handle) {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new Ped(handle);
  }
  /**
   * Gets the ped from the current network id, this doesn't check that
   * the entity is actually a ped
   */
  static fromNetworkId(netId) {
    if (netId === 0 || !NetworkDoesEntityExistWithNetworkId(netId)) {
      return null;
    }
    return new Ped(NetToPed(netId));
  }
  static fromStateBagName(bagName) {
    const ent = GetEntityFromStateBagName(bagName);
    if (ent === 0) {
      return null;
    }
    return new Ped(ent);
  }
  constructor(handle) {
    super(handle);
  }
  get Player() {
    const playerId = NetworkGetPlayerIndexFromPed(this.handle);
    if (playerId !== 255) {
      return new Player(playerId);
    }
    return null;
  }
  /**
   * @returns the current horse or vehicle the ped is on, or null if they're not on either
   */
  get MountedEntity() {
    const veh = this.CurrentVehicle;
    if (veh !== null) {
      return veh;
    }
    const horse = this.Mount;
    return horse;
  }
  /**
   * Blocks scenarios inbetween the specified vectors
   * @todo Move to Game
   * @param vec1
   * @param vec2
   * @param blockingFlags you can find blocking flags [here](https://github.com/Halen84/RDR3-Native-Flags-And-Enums/blob/main/ADD_SCENARIO_BLOCKING_AREA/README.md)
   * @returns the scenarioId that can be used in {@link removeScenarioBlock} to unblock
   */
  static blockScenariosInArea(vec1, vec2, blockingFlags) {
    return AddScenarioBlockingArea(
      vec1.x,
      vec1.y,
      vec1.z,
      vec2.x,
      vec2.y,
      vec2.z,
      true,
      blockingFlags
    );
  }
  /**
   * Removes the blocking of scenarios in the specified area
   * @param scenarioId the number returned from {@link blockScenariosInArea}
   */
  static removeScenarioBlock(scenarioId) {
    RemoveScenarioBlockingArea(scenarioId, false);
  }
  get Tasks() {
    if (this.tasks) {
      return this.tasks;
    }
    this.tasks = new Tasks(this);
    return this.tasks;
  }
  get Bones() {
    this.bones = this.bones ?? new PedBoneCollection(this);
    return this.bones;
  }
  /**
   * While this increases the peds max health, if used on a player it wont increase the max core value on the hud
   */
  set MaxHealth(amount) {
    SetPedMaxHealth(this.handle, amount);
  }
  /**
   * @returns the maximum health of the ped
   */
  get MaxHealth() {
    return GetPedMaxHealth(this.handle);
  }
  /**
   * @returns the {@link Attributes} for the current ped
   */
  get Attributes() {
    if (this.attributes) return this.attributes;
    return this.attributes = new Attributes(this);
  }
  get InVehicle() {
    return IsPedInAnyVehicle(this.handle, true);
  }
  get IsInjured() {
    return IsPedInjured(this.handle);
  }
  get IsFatallyInjured() {
    return IsPedFatallyInjured(this.handle);
  }
  get IsPlayer() {
    return IsPedAPlayer(this.handle);
  }
  get IsShooting() {
    return IsPedShooting(this.handle);
  }
  get Accuracy() {
    return GetPedAccuracy(this.handle);
  }
  set Accuracy(accuracy) {
    SetPedAccuracy(this.handle, accuracy);
  }
  get CanBeKnockedOffVehicle() {
    return CanKnockPedOffVehicle(this.handle);
  }
  get IsMale() {
    return IsPedMale(this.handle);
  }
  get IsHuman() {
    return IsPedHuman(this.handle);
  }
  get IsOnTopOfVehicle() {
    return IsPedOnVehicle(this.handle, false);
  }
  get Vehicle() {
    return Vehicle.fromHandle(GetVehiclePedIsIn(this.handle, false));
  }
  /**
   * @returns the last mount that this ped was on, or null if it doesn't exist
   */
  get LastMount() {
    const pedId = _N("0x4C8B59171957BCF7", this.handle, Citizen.resultAsInteger());
    return Ped.fromHandle(pedId);
  }
  /**
   * @returns the the current mount that the ped is on, or null if there isn't one
   */
  get Mount() {
    return Ped.fromHandle(GetMount(this.handle));
  }
  /**
   * returns the horse that this ped is leading
   */
  get LeadingHorse() {
    const pedId = _N("0x693126B5D0457D0D", this.handle, Citizen.resultAsInteger());
    return Ped.fromHandle(pedId);
  }
  /**
   * returns the owner of the current animal
   */
  get AnimalOwner() {
    const pedId = _N("0xF103823FFE72BB49", this.handle, Citizen.resultAsInteger());
    return Ped.fromHandle(pedId);
  }
  get TamingState() {
    return _N("0x454AD4DA6C41B5BD", this.handle, Citizen.resultAsInteger());
  }
  get IsInteractingWithAnimal() {
    return _N("0x7FC84E85D98F063D", this.handle, Citizen.resultAsInteger());
  }
  get IsSittingInAnyVehicle() {
    return IsPedSittingInAnyVehicle(this.handle);
  }
  get IsPlantingBomb() {
    return IsPedPlantingBomb(this.handle);
  }
  get IsInAnyBoat() {
    return IsPedInAnyBoat(this.handle);
  }
  get IsInAnyHeli() {
    return IsPedInAnyHeli(this.handle);
  }
  get IsInAnyPlane() {
    return IsPedInAnyPlane(this.handle);
  }
  get IsInFlyingVehicle() {
    return IsPedInFlyingVehicle(this.handle);
  }
  get IsFalling() {
    return IsPedFalling(this.handle);
  }
  get IsSliding() {
    return _N("0xD6740E14E4CEFC0B", this.handle, Citizen.resultAsInteger());
  }
  get IsJumping() {
    return IsPedJumping(this.handle);
  }
  get IsClimbing() {
    return IsPedClimbing(this.handle);
  }
  get IsClimbingLadder() {
    return _N("0x59643424B68D52B5", this.handle, Citizen.resultAsInteger());
  }
  get IsVaulting() {
    return IsPedVaulting(this.handle);
  }
  get IsDiving() {
    return IsPedDiving(this.handle);
  }
  get IsOpeningADoor() {
    return IsPedOpeningADoor(this.handle);
  }
  set SeeingRange(value) {
    SetPedSeeingRange(this.handle, value);
  }
  set HearingRange(value) {
    SetPedHearingRange(this.handle, value);
  }
  get IsStealthed() {
    return GetPedStealthMovement(this.handle);
  }
  get IsJacking() {
    return IsPedJacking(this.handle);
  }
  get IsStunned() {
    return IsPedBeingStunned(this.handle, 0);
  }
  get IsBeingJacked() {
    return IsPedBeingJacked(this.handle);
  }
  get IsInCombatRoll() {
    return _N("0xC48A9EB0D499B3E5", this.handle, Citizen.resultAsInteger());
  }
  get CrouchMovement() {
    return _N("0xD5FE956C70FF370B", this.handle, Citizen.resultAsInteger());
  }
  /**
   * returns true if {@link DamageCleanliness} was ever lower than {@link eDamageCleanliness.Good}
   */
  get IsDamaged() {
    return _N("0x6CFC373008A1EDAF", this.handle, Citizen.resultAsInteger());
  }
  set IsDamaged(damaged) {
    _N("0xDACE03C65C6666DB", this.handle, damaged);
  }
  get DamageCleanliness() {
    return _N("0x88EFFED5FE8B0B4A", this.handle, Citizen.resultAsInteger());
  }
  set DamageCleanliness(cleanliness) {
    _N("0x7528720101A807A5", this.handle, cleanliness);
  }
  set DefenseModifier(amount) {
    _N("0x9B6808EC46BE849B", this.handle, amount);
  }
  set CanBeTargeted(toggle) {
    SetPedCanBeTargetted(this.handle, toggle);
  }
  // TODO: Team class wrapper
  // TODO: Bone wrapper `GET_PED_LAST_DAMAGE_BONE`
  /**
   * returns the ped who jacked this ped
   */
  getJacker() {
    return new Ped(GetPedsJacker(this.handle));
  }
  setCrouchMovement(state, immediately = false) {
    _N("0x7DE9692C6F64CFE8", this.handle, state, 0, immediately);
  }
  canBeTargetedByPlayer(player, toggle) {
    SetPedCanBeTargettedByPlayer(this.handle, player.Handle, toggle);
  }
  clearLastBoneDamage() {
    ClearPedLastDamageBone(this.handle);
  }
  set OwnsAnimal(animal) {
    _N("0x931B241409216C1F", this.handle, animal.Handle, false);
  }
  isInteractionPossible(animal) {
    return _N("0xD543D3A8FDE4F185", this.handle, animal.Handle, Citizen.resultAsInteger());
  }
  isOnVehicle(vehicle) {
    return IsPedOnSpecificVehicle(this.handle, vehicle.Handle);
  }
  isSittingInVehicle(vehicle) {
    return IsPedSittingInVehicle(this.handle, vehicle.Handle);
  }
  warpOutOfVehicle() {
    _N("0xE0B61ED8BB37712F", this.handle);
  }
  /**
   * puts the ped onto the specified mount
   * @param targetPed the horse to put the ped on
   * @param seatIndex the seat index to put the ped on
   */
  setOntoMount(targetPed, seatIndex) {
    _N("0x028F76B6E78246EB", this.handle, targetPed.Handle, seatIndex, true);
  }
  removeFromMount() {
    _N("0x5337B721C51883A9", this.handle, true, true);
  }
  /**
   * Sets the ped into the specified vehicle
   * @param vehicle the vehicle to put the ped into
   * @param seatIndex the seat index to put the ped into
   */
  setIntoVehicle(vehicle, seatIndex) {
    SetPedIntoVehicle(this.handle, vehicle.Handle, seatIndex);
  }
  /**
   * kills the ped and optionally sets the killer
   * @param killer the entity that killed the ped
   */
  killPed(killer) {
    SetEntityHealth(this.handle, 0, killer ? killer.Handle : 0);
  }
  damage(amount, boneId = 0, killer) {
    ApplyDamageToPed(this.handle, amount, 0, boneId, killer ? killer.Handle : 0);
  }
  /**
   * this returns a different type then the getter so we can't use set, maybe ts will fix soon (tm)
   * @param state how hard it will be to knock a ped off their vehicle
   */
  setCanBeKnockedOffVehicle(state) {
    SetPedCanBeKnockedOffVehicle(this.handle, state);
  }
  /**
   * Removes the specified ped if its not a player entity
   */
  delete() {
    SetEntityAsMissionEntity(this.handle, true, true);
    DeletePed(this.handle);
  }
  /**
   * creates a clone of the ped
   * @param network if the ped should be a networked entity
   * @param bScriptHostPed whether to register the ped as pinned to the script host in the R* network model.
   * @param copyHeadBlend whether to copy the peds head blend
   * @returns the cloned ped
   */
  clone(network, bScriptHostPed, copyHeadBlend) {
    return new Ped(ClonePed(this.handle, network, bScriptHostPed, copyHeadBlend));
  }
  /**
   * clones the ped onto the target ped
   * @param targetPed the ped to clone onto
   */
  cloneTo(targetPed) {
    ClonePedToTarget(this.handle, targetPed.Handle);
  }
  /**
   * @param amount - the amount of armour to add to the ped
   */
  addArmour(amount) {
    AddArmourToPed(this.handle, amount);
  }
  applyDamage(damageAmount, boneId = 0, pedKiller = null) {
    ApplyDamageToPed(this.handle, damageAmount, 0, boneId, pedKiller ? pedKiller.Handle : 0);
  }
  /**
   * @param damagePack - the damage decal to apply see [here](https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua) for more documentation
   * @param damage - the damage to apply
   * @param mult - the multiplier?
   */
  applyDamagePack(damagePack, damage, mult) {
    ApplyPedDamagePack(this.handle, damagePack, damage, mult);
  }
  get CurrentVehicle() {
    const veh = GetVehiclePedIsIn(this.handle, false);
    if (veh === 0) return null;
    return new Vehicle(veh);
  }
  // No documentation
  // applyBloodSpecific() {
  // 	ApplyPedBloodSpecific
  // }
  giveHashCommand(commandHash, activationDuration) {
    Citizen.invokeNative("0xD65FDC686A031C83", this.handle, commandHash, activationDuration);
  }
  /**
   * Adds or removes the ped stamina, depending on of the amount is positive or negative.
   * @param amount the amount of stamina to add/remove
   */
  changeStamina(amount) {
    _N("0xC3D4B754C0E86B9E", this.handle, amount);
  }
  get MaxStamina() {
    return _N("0xCB42AFE2B613EE55", this.handle);
  }
  /**
   * Returns the amount of stamina the ped has
   */
  get Stamina() {
    return _N("0x775A1CA7893AA8B5", this.handle);
  }
  /**
   * returns the normalized stamina for the player, taking into account their unlocked stamina
   */
  get StaminaNormalized() {
    return _N("0x22F2A386D43048A9", this.handle);
  }
  resetStamina() {
    _N("0x36513AFFC703C60D", this.handle);
  }
  setOwnsAnimal(ped, p2 = 0) {
    _N("0x931B241409216C1F", this.handle, ped.Handle, p2);
  }
  // WEAPON NAMESPACE
  addAmmo(weapon, amount, addReason = ItemAddReason.Default) {
    Citizen.invokeNative("0xB190BCA3F4042F95", this.handle, weapon.Hash, amount, addReason);
  }
  clearLastDamage() {
    Citizen.invokeNative("0x087D8F4BC65F68E4", this.handle);
  }
  disableAmmoType(ammo) {
    Citizen.invokeNative("0xAA5A52204E077883", this.handle, ammo.Hash);
  }
  disableAmmoForWeapon(weapon, ammo) {
    Citizen.invokeNative("0xF0D728EEA3C99775", this.handle, weapon.Hash, ammo.Hash);
  }
  get HasPistol() {
    return Citizen.invokeNative("0xBFCA7AFABF9D7967", this.handle);
  }
  get HasRepeater() {
    return Citizen.invokeNative("0x495A04CAEC263AF8", this.handle);
  }
  get CurrentWeapon() {
    const weapon = Citizen.invokeNative("0x8425C5F057012DAB", this.handle);
    return new WeaponModel(weapon);
  }
  async giveWeapon(weapon, ammoCount, forceInHand = true, forceInHolster = false, attachPoint = void 0, allowMultipleCopies = false, p7 = 0.5, p8 = 1, addReason = ItemAddReason.Default, ignoreUnlocks = true, permanentDegradation = 0.5, p12 = false) {
    if (!await weapon.request()) {
      return false;
    }
    attachPoint = attachPoint ?? weapon.DefaultAttachPoint;
    Citizen.invokeNative(
      "0x5E3BDDBCB83F3D84",
      this.handle,
      weapon.Hash,
      ammoCount,
      forceInHand,
      forceInHolster,
      attachPoint,
      allowMultipleCopies,
      p7,
      p8,
      addReason,
      ignoreUnlocks,
      permanentDegradation,
      p12
    );
    return true;
  }
  setCurrentWeapon(weapon, equipNow = true, attachPoint = WeaponAttachPoints.HandPrimary, p4 = false, p5 = false) {
    Citizen.invokeNative("0xADF692B254977C0C", this.handle, weapon.Hash, equipNow, attachPoint, p4, p5);
  }
  holsterWeapon() {
    Citizen.invokeNative("0x94A3C1B804D291EC", this.handle, true, true, true, true);
  }
  setWeaponOnBack(disableAnim = false) {
    Citizen.invokeNative("0x4820A6939D7CEF28", this.handle, disableAnim);
  }
  isHoldingWeapon(weapon) {
    return Citizen.invokeNative("0x07E1C35F0078C3F9", this.handle, weapon.Hash);
  }
  isHolsterStateChanging() {
    return Citizen.invokeNative("0x2387D6E9C6B478AA", this.handle);
  }
}
export {
  Ped
};
