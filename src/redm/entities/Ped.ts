import type { Vector3 } from "@common/utils/Vector";
import type { Model } from "redm/Model";
import { Tasks } from "redm/Task";
import { ItemAddReason } from "redm/inventory/InventoryTypes";
import type { AmmoModel } from "redm/models/AmmoModel";
import type { WeaponModel } from "redm/models/WeaponModel";
import { _N } from "redm/utils/Native";
import { Attributes } from "../Attribute";
import type { KnockOffVehicle, TamingState, eDamageCleanliness } from "../enums/Ped";
import type { VehicleSeat } from "../enums/VehicleSeat";
import { BaseEntity } from "./BaseEntity";
import type { Player } from "./Player";
import { Vehicle } from "./Vehicle";

export class Ped extends BaseEntity {
  private attributes: Attributes | undefined;
  private tasks: Tasks | undefined;

  /**
   * Gets the entity from the handle given, if the entity doesn't exist it will return
   * null.
   */
  static fromHandle(handle: number): Ped | null {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new Ped(handle);
  }

  /**
   * Gets the ped from the current network id, this doesn't check that
   * the entity is actually a ped
   */
  static fromNetworkId(netId: number): Ped | null {
    if (netId === 0 || !NetworkDoesEntityExistWithNetworkId(netId)) {
      return null;
    }
    return new Ped(NetToPed(netId));
  }

  static fromStateBagName(bagName: string): Ped | null {
    const ent = GetEntityFromStateBagName(bagName);
    if (ent === 0) {
      return null;
    }
    return new Ped(ent);
  }

  constructor(handle: number) {
    super(handle);
  }

  /**
   * @returns the current horse or vehicle the ped is on, or null if they're not on either
   */
  get MountedEntity(): BaseEntity | null {
    const veh = this.CurrentVehicle;
    if (veh !== null) {
      return veh;
    }

    const horse = this.Mount;
    if (horse !== null) {
      return horse;
    }

    return null;
  }

  /**
   * Blocks scenarios inbetween the specified vectors
   * @todo Move to Game
   * @param vec1
   * @param vec2
   * @param blockingFlags you can find blocking flags [here](https://github.com/Halen84/RDR3-Native-Flags-And-Enums/blob/main/ADD_SCENARIO_BLOCKING_AREA/README.md)
   * @returns the scenarioId that can be used in {@link removeScenarioBlock} to unblock
   */
  static blockScenariosInArea(vec1: Vector3, vec2: Vector3, blockingFlags: number): number {
    return AddScenarioBlockingArea(
      vec1.x,
      vec1.y,
      vec1.z,
      vec2.x,
      vec2.y,
      vec2.z,
      true as unknown as number,
      blockingFlags,
    );
  }

  /**
   * Removes the blocking of scenarios in the specified area
   * @param scenarioId the number returned from {@link blockScenariosInArea}
   */
  static removeScenarioBlock(scenarioId: number): void {
    RemoveScenarioBlockingArea(scenarioId, false);
  }

  get Tasks(): Tasks {
    if (this.tasks) {
      return this.tasks;
    }
    this.tasks = new Tasks(this);
    return this.tasks;
  }

  /**
   * While this increases the peds max health, if used on a player it wont increase the max core value on the hud
   */
  set MaxHealth(amount: number) {
    SetPedMaxHealth(this.handle, amount);
  }

  /**
   * @returns the maximum health of the ped
   */
  get MaxHealth(): number {
    return GetPedMaxHealth(this.handle);
  }

  /**
   * @returns the {@link Attributes} for the current ped
   */
  get Attributes(): Attributes {
    if (this.attributes) return this.attributes;

    return (this.attributes = new Attributes(this));
  }

  get InVehicle(): boolean {
    return IsPedInAnyVehicle(this.handle, true);
  }

  get IsInjured(): boolean {
    return IsPedInjured(this.handle);
  }

  get IsFatallyInjured(): boolean {
    return IsPedFatallyInjured(this.handle);
  }

  get IsPlayer(): boolean {
    return IsPedAPlayer(this.handle);
  }

  get IsShooting(): boolean {
    return IsPedShooting(this.handle);
  }

  get Accuracy(): number {
    return GetPedAccuracy(this.handle);
  }

  set Accuracy(accuracy: number) {
    SetPedAccuracy(this.handle, accuracy);
  }

  get CanBeKnockedOffVehicle(): boolean {
    return CanKnockPedOffVehicle(this.handle);
  }

  get IsMale(): boolean {
    return IsPedMale(this.handle);
  }

  get IsHuman(): boolean {
    return IsPedHuman(this.handle);
  }

  get IsOnTopOfVehicle(): boolean {
    return IsPedOnVehicle(this.handle, false as unknown as number);
  }

  get Vehicle(): Vehicle | null {
    return Vehicle.fromHandle(GetVehiclePedIsIn(this.handle, false));
  }

  /**
   * @returns the last mount that this ped was on, or null if it doesn't exist
   */
  get LastMount(): Ped | null {
    // GET_LAST_MOUNT
    const pedId = _N<number>("0x4C8B59171957BCF7", this.handle, Citizen.resultAsInteger());
    return Ped.fromHandle(pedId);
  }

  /**
   * @returns the the current mount that the ped is on, or null if there isn't one
   */
  get Mount(): Ped | null {
    return Ped.fromHandle(GetMount(this.handle));
  }

  /**
   * returns the horse that this ped is leading
   */
  get LeadingHorse(): Ped | null {
    // GET_LAST_LED_MOUNT
    const pedId = _N<number>("0x693126B5D0457D0D", this.handle, Citizen.resultAsInteger());
    return Ped.fromHandle(pedId);
  }

  /**
   * returns the owner of the current animal
   */
  get Owner(): Ped | null {
    // _GET_ACTIVE_ANIMAL_OWNER
    const pedId = _N<number>("0xF103823FFE72BB49", this.handle, Citizen.resultAsInteger());
    return Ped.fromHandle(pedId);
  }

  get TamingState(): TamingState {
    // _GET_HORSE_TAMING_STATE
    return _N<TamingState>("0x454AD4DA6C41B5BD", this.handle, Citizen.resultAsInteger());
  }

  get IsInteractingWithAnimal(): boolean {
    // _IS_ANIMAL_INTERACTION_RUNNING
    return _N<boolean>("0x7FC84E85D98F063D", this.handle, Citizen.resultAsInteger());
  }

  get IsSittingInAnyVehicle(): boolean {
    return IsPedSittingInAnyVehicle(this.handle);
  }

  get IsPlantingBomb(): boolean {
    return IsPedPlantingBomb(this.handle);
  }

  get IsInAnyBoat(): boolean {
    return IsPedInAnyBoat(this.handle);
  }

  get IsInAnyHeli(): boolean {
    return IsPedInAnyHeli(this.handle);
  }

  get IsInAnyPlane(): boolean {
    return IsPedInAnyPlane(this.handle);
  }

  get IsInFlyingVehicle(): boolean {
    return IsPedInFlyingVehicle(this.handle);
  }

  get IsFalling(): boolean {
    return IsPedFalling(this.handle);
  }

  get IsSliding(): boolean {
    // _IS_PED_SLIDING
    return _N<boolean>("0xD6740E14E4CEFC0B", this.handle, Citizen.resultAsInteger());
  }

  get IsJumping(): boolean {
    return IsPedJumping(this.handle);
  }

  get IsClimbing(): boolean {
    return IsPedClimbing(this.handle);
  }

  get IsClimbingLadder(): boolean {
    // _IS_PED_CLIMBING_LADDER
    return _N<boolean>("0x59643424B68D52B5", this.handle, Citizen.resultAsInteger());
  }

  get IsVaulting(): boolean {
    return IsPedVaulting(this.handle);
  }

  get IsDiving(): boolean {
    return IsPedDiving(this.handle);
  }

  get IsOpeningADoor(): boolean {
    return IsPedOpeningADoor(this.handle);
  }

  set SeeingRange(value: number) {
    SetPedSeeingRange(this.handle, value);
  }

  set HearingRange(value: number) {
    SetPedHearingRange(this.handle, value);
  }

  get IsStealthed(): boolean {
    return GetPedStealthMovement(this.handle);
  }

  get IsJacking(): boolean {
    return IsPedJacking(this.handle);
  }

  get IsStunned(): boolean {
    return IsPedBeingStunned(this.handle, 0);
  }

  get IsBeingJacked(): boolean {
    return IsPedBeingJacked(this.handle);
  }

  get IsInCombatRoll(): boolean {
    return _N<boolean>("0xC48A9EB0D499B3E5", this.handle, Citizen.resultAsInteger());
  }

  get CrouchMovement(): boolean {
    return _N<boolean>("0xD5FE956C70FF370B", this.handle, Citizen.resultAsInteger());
  }

  /**
   * returns true if {@link DamageCleanliness} was ever lower than {@link eDamageCleanliness.Good}
   */
  get IsDamaged(): boolean {
    return _N<boolean>("0x6CFC373008A1EDAF", this.handle, Citizen.resultAsInteger());
  }

  set IsDamaged(damaged: boolean) {
    // _SET_PED_DAMAGED
    _N("0xDACE03C65C6666DB", this.handle, damaged);
  }

  get DamageCleanliness(): eDamageCleanliness {
    return _N<eDamageCleanliness>("0x88EFFED5FE8B0B4A", this.handle, Citizen.resultAsInteger());
  }

  set DamageCleanliness(cleanliness: eDamageCleanliness) {
    _N("0x7528720101A807A5", this.handle, cleanliness);
  }

  set DefenseModifier(amount: number) {
    _N("0x9B6808EC46BE849B", this.handle, amount);
  }

  set CanBeTargeted(toggle: boolean) {
    SetPedCanBeTargetted(this.handle, toggle);
  }

  // TODO: Team class wrapper

  // TODO: Bone wrapper `GET_PED_LAST_DAMAGE_BONE`

  /**
   * returns the ped who jacked this ped
   */
  getJacker(): Ped {
    return new Ped(GetPedsJacker(this.handle));
  }

  setCrouchMovement(state: boolean, immediately = false): void {
    // SET_PED_CROUCH_MOVEMENT
    _N("0x7DE9692C6F64CFE8", this.handle, state, 0, immediately);
  }

  canBeTargetedByPlayer(player: Player, toggle: boolean): void {
    SetPedCanBeTargettedByPlayer(this.handle, player.Handle, toggle);
  }

  clearLastBoneDamage(): void {
    ClearPedLastDamageBone(this.handle);
  }

  set OwnsAnimal(animal: Ped) {
    // SET_PED_OWNS_ANIMAL
    _N("0x931B241409216C1F", this.handle, animal.Handle, false);
  }

  isInteractionPossible(animal: Ped): boolean {
    // IS_ANIMAL_INTERACTION_POSSIBLE
    return _N<boolean>("0xD543D3A8FDE4F185", this.handle, animal.Handle, Citizen.resultAsInteger());
  }

  isOnVehicle(vehicle: Vehicle): boolean {
    return IsPedOnSpecificVehicle(this.handle, vehicle.Handle);
  }

  isSittingInVehicle(vehicle: Vehicle): boolean {
    return IsPedSittingInVehicle(this.handle, vehicle.Handle);
  }

  warpOutOfVehicle(): void {
    // _WARP_PED_OUT_OF_VEHICLE
    _N("0xE0B61ED8BB37712F", this.handle);
  }

  /**
   * puts the ped onto the specified mount
   * @param targetPed the horse to put the ped on
   * @param seatIndex the seat index to put the ped on
   */
  setOntoMount(targetPed: Ped, seatIndex: VehicleSeat): void {
    // SET_PED_ONTO_MOUNT
    _N("0x028F76B6E78246EB", this.handle, targetPed.Handle, seatIndex, true);
  }

  removeFromMount(): void {
    // REMOVE_PED_FROM_MOUNT
    _N("0x5337B721C51883A9", this.handle, true, true);
  }

  /**
   * Sets the ped into the specified vehicle
   * @param vehicle the vehicle to put the ped into
   * @param seatIndex the seat index to put the ped into
   */
  setIntoVehicle(vehicle: Vehicle, seatIndex: VehicleSeat): void {
    SetPedIntoVehicle(this.handle, vehicle.Handle, seatIndex);
  }

  /**
   * kills the ped and optionally sets the killer
   * @param killer the entity that killed the ped
   */
  killPed(killer?: BaseEntity): void {
    SetEntityHealth(this.handle, 0, killer ? killer.Handle : 0);
  }

  damage(amount: number, boneId = 0, killer?: Ped): void {
    ApplyDamageToPed(this.handle, amount, 0, boneId, killer ? killer.Handle : 0);
  }

  /**
   * this returns a different type then the getter so we can't use set, maybe ts will fix soon (tm)
   * @param state how hard it will be to knock a ped off their vehicle
   */
  setCanBeKnockedOffVehicle(state: KnockOffVehicle): void {
    SetPedCanBeKnockedOffVehicle(this.handle, state);
  }

  /**
   * Removes the specified ped if its not a player entity
   */
  delete(): void {
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
  clone(network: boolean, bScriptHostPed: boolean, copyHeadBlend: boolean): Ped {
    return new Ped(ClonePed(this.handle, network, bScriptHostPed, copyHeadBlend));
  }

  /**
   * clones the ped onto the target ped
   * @param targetPed the ped to clone onto
   */
  cloneTo(targetPed: Ped): void {
    ClonePedToTarget(this.handle, targetPed.Handle);
  }

  /**
   * @param amount - the amount of armour to add to the ped
   */
  addArmour(amount: number): void {
    AddArmourToPed(this.handle, amount);
  }

  applyDamage(damageAmount: number, boneId = 0, pedKiller: Ped | null = null): void {
    ApplyDamageToPed(this.handle, damageAmount, 0, boneId, pedKiller ? pedKiller.Handle : 0);
  }

  /**
   * @param damagePack - the damage decal to apply see [here](https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua) for more documentation
   * @param damage - the damage to apply
   * @param mult - the multiplier?
   */
  applyDamagePack(damagePack: string, damage: number, mult: number): void {
    ApplyPedDamagePack(this.handle, damagePack, damage, mult);
  }

  get CurrentVehicle(): Vehicle | null {
    const veh = GetVehiclePedIsIn(this.handle, false);
    if (veh === 0) return null;
    return new Vehicle(veh);
  }

  // No documentation
  // applyBloodSpecific() {
  // 	ApplyPedBloodSpecific
  // }

  giveHashCommand(commandHash: number, activationDuration: number) {
    Citizen.invokeNative("0xD65FDC686A031C83", this.handle, commandHash, activationDuration);
  }

  /**
   * Adds or removes the ped stamina, depending on of the amount is positive or negative.
   * @param amount the amount of stamina to add/remove
   */
  changeStamina(amount: number) {
    _N("0xC3D4B754C0E86B9E", this.handle, amount);
  }

  get MaxStamina(): number {
    return _N<number>("0xCB42AFE2B613EE55", this.handle);
  }

  /**
   * Returns the amount of stamina the ped has
   */
  get Stamina() {
    return _N<number>("0x775A1CA7893AA8B5", this.handle);
  }

  /**
   * returns the normalized stamina for the player, taking into account their unlocked stamina
   */
  get StaminaNormalized() {
    return _N<number>("0x22F2A386D43048A9", this.handle);
  }

  resetStamina() {
    _N("0x36513AFFC703C60D", this.handle);
  }

  setOwnsAnimal(ped: Ped, p2 = 0) {
    _N("0x931B241409216C1F", this.handle, ped.Handle, p2);
  }

  // WEAPON NAMESPACE

  addAmmo(weapon: WeaponModel, amount: number, addReason = ItemAddReason.Default) {
    // _ADD_AMMO_TO_PED
    Citizen.invokeNative("0xB190BCA3F4042F95", this.handle, weapon.Hash, amount, addReason);
  }

  clearLastDamage() {
    // _CLEAR_PED_LAST_WEAPON_DAMAGE
    Citizen.invokeNative("0x087D8F4BC65F68E4", this.handle);
  }

  disableAmmoType(ammo: AmmoModel) {
    // _DISABLE_AMMO_TYPE_FOR_PED
    Citizen.invokeNative("0xAA5A52204E077883", this.handle, ammo.Hash);
  }

  disableAmmoForWeapon(weapon: WeaponModel, ammo: AmmoModel) {
    // _DISABLE_AMMO_TYPE_FOR_PED_WEAPON
    Citizen.invokeNative("0xF0D728EEA3C99775", this.handle, weapon.Hash, ammo.Hash);
  }

  get HasPistol(): boolean {
    // _DOES_PED_HAVE_PISTOL
    return Citizen.invokeNative<boolean>("0xBFCA7AFABF9D7967", this.handle);
  }

  get HasRepeater(): boolean {
    // _DOES_PED_HAVE_REPEATER
    return Citizen.invokeNative<boolean>("0x495A04CAEC263AF8", this.handle);
  }
}
