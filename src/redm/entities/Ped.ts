import { Attributes } from "../Attribute";
import { eDamageCleanliness, KnockOffVehicle, TamingState } from "../enums/Ped";
import { VehicleSeat } from "../enums/VehicleSeat";
import { _N, Vector3 } from "../utils";
import { BaseEntity } from "./BaseEntity";
import { Vehicle } from "./Vehicle";
import { Player } from "./Player";

export class Ped extends BaseEntity {
  private attributes: Attributes | undefined;

  constructor(handle: number) {
    super(handle);
  }

  /**
   * Blocks scenarios inbetween the specified vectors
   * @todo Move to Game
   * @param vec1
   * @param vec2
   * @param blockingFlags you can find blocking flags [here](https://github.com/Halen84/RDR3-Native-Flags-And-Enums/blob/main/ADD_SCENARIO_BLOCKING_AREA/README.md)
   * @returns the scenarioId that can be used in {@link removeScenarioBlock} to unblock
   */
  static blockScenariosInArea(
    vec1: Vector3,
    vec2: Vector3,
    blockingFlags: number,
  ): number {
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

  /**
   * While this increases the peds max health, if used on a player it wont increase the max core value on the hud
   */
  set MaxHealth(amount: number) {
    SetPedMaxHealth(this.Handle, amount);
  }

  /**
   * @returns the maximum health of the ped
   */
  get MaxHealth(): number {
    return GetPedMaxHealth(this.Handle);
  }

  /**
   * @returns the {@link Attributes} for the current ped
   */
  get Attributes(): Attributes {
    if (this.attributes) return this.attributes;

    return (this.attributes = new Attributes(this));
  }

  get InVehicle(): boolean {
    return IsPedInAnyVehicle(this.Handle, true);
  }

  get IsInjured(): boolean {
    return IsPedInjured(this.Handle);
  }

  get IsFatallyInjured(): boolean {
    return IsPedFatallyInjured(this.Handle);
  }

  get IsPlayer(): boolean {
    return IsPedAPlayer(this.Handle);
  }

  get IsShooting(): boolean {
    return IsPedShooting(this.Handle);
  }

  get Accuracy(): number {
    return GetPedAccuracy(this.Handle);
  }

  set Accuracy(accuracy: number) {
    SetPedAccuracy(this.Handle, accuracy);
  }

  get CanBeKnockedOffVehicle(): boolean {
    return CanKnockPedOffVehicle(this.Handle);
  }

  get IsMale(): boolean {
    return IsPedMale(this.Handle);
  }

  get IsHuman(): boolean {
    return IsPedHuman(this.Handle);
  }

  get IsOnTopOfVehicle(): boolean {
    return IsPedOnVehicle(this.Handle, false as unknown as number);
  }

  get Vehicle(): Vehicle | null {
    const vehicle = GetVehiclePedIsIn(this.Handle, false);
    if (vehicle === 0) {
      return null;
    }
    return new Vehicle(vehicle);
  }

  /**
   * @returns the last mount that this ped was on, or null if it doesn't exist
   */
  get Mount(): Ped | null {
    // GET_LAST_MOUNT
    const pedId = _N<number>(
      "0x4C8B59171957BCF7",
      this.Handle,
      Citizen.resultAsInteger(),
    );
    return pedId ? new Ped(pedId) : null;
  }

  /**
   * returns the horse that this ped is leading
   */
  get LeadingHorse(): Ped | null {
    // GET_LAST_LED_MOUNT
    const pedId = _N<number>(
      "0x693126B5D0457D0D",
      this.Handle,
      Citizen.resultAsInteger(),
    );
    return pedId ? new Ped(pedId) : null;
  }

  /**
   * returns the owner of the current animal
   */
  get Owner(): Ped | null {
    // _GET_ACTIVE_ANIMAL_OWNER
    const pedId = _N<number>(
      "0xF103823FFE72BB49",
      this.Handle,
      Citizen.resultAsInteger(),
    );
    return pedId ? new Ped(pedId) : null;
  }

  get TamingState(): TamingState {
    // _GET_HORSE_TAMING_STATE
    return _N<TamingState>(
      "0x454AD4DA6C41B5BD",
      this.Handle,
      Citizen.resultAsInteger(),
    );
  }

  get IsInteractingWithAnimal(): boolean {
    // _IS_ANIMAL_INTERACTION_RUNNING
    return _N<boolean>(
      "0x7FC84E85D98F063D",
      this.Handle,
      Citizen.resultAsInteger(),
    );
  }

  get IsSittingInAnyVehicle(): boolean {
    return IsPedSittingInAnyVehicle(this.Handle);
  }

  get IsPlantingBomb(): boolean {
    return IsPedPlantingBomb(this.Handle);
  }

  get IsInAnyBoat(): boolean {
    return IsPedInAnyBoat(this.Handle);
  }

  get IsInAnyHeli(): boolean {
    return IsPedInAnyHeli(this.Handle);
  }

  get IsInAnyPlane(): boolean {
    return IsPedInAnyPlane(this.Handle);
  }

  get IsInFlyingVehicle(): boolean {
    return IsPedInFlyingVehicle(this.Handle);
  }

  get IsFalling(): boolean {
    return IsPedFalling(this.Handle);
  }

  get IsSliding(): boolean {
    // _IS_PED_SLIDING
    return _N<boolean>(
      "0xD6740E14E4CEFC0B",
      this.Handle,
      Citizen.resultAsInteger(),
    );
  }

  get IsJumping(): boolean {
    return IsPedJumping(this.Handle);
  }

  get IsClimbing(): boolean {
    return IsPedClimbing(this.Handle);
  }

  get IsClimbingLadder(): boolean {
    // _IS_PED_CLIMBING_LADDER
    return _N<boolean>(
      "0x59643424B68D52B5",
      this.Handle,
      Citizen.resultAsInteger(),
    );
  }

  get IsVaulting(): boolean {
    return IsPedVaulting(this.Handle);
  }

  get IsDiving(): boolean {
    return IsPedDiving(this.Handle);
  }

  get IsOpeningADoor(): boolean {
    return IsPedOpeningADoor(this.Handle);
  }

  set SeeingRange(value: number) {
    SetPedSeeingRange(this.Handle, value);
  }

  set HearingRange(value: number) {
    SetPedHearingRange(this.Handle, value);
  }

  get IsStealthed(): boolean {
    return GetPedStealthMovement(this.Handle);
  }

  get IsJacking(): boolean {
    return IsPedJacking(this.Handle);
  }

  get IsStunned(): boolean {
    return IsPedBeingStunned(this.Handle, 0);
  }

  get IsBeingJacked(): boolean {
    return IsPedBeingJacked(this.Handle);
  }

  get IsInCombatRoll(): boolean {
    return _N<boolean>(
      "0xC48A9EB0D499B3E5",
      this.Handle,
      Citizen.resultAsInteger(),
    );
  }

  get CrouchMovement(): boolean {
    return _N<boolean>(
      "0xD5FE956C70FF370B",
      this.Handle,
      Citizen.resultAsInteger(),
    );
  }

  /**
   * returns true if {@link DamageCleanliness} was ever lower than {@link eDamageCleanliness.Good}
   */
  get IsDamaged(): boolean {
    return _N<boolean>(
      "0x6CFC373008A1EDAF",
      this.Handle,
      Citizen.resultAsInteger(),
    );
  }

  set IsDamaged(damaged: boolean) {
    // _SET_PED_DAMAGED
    _N("0xDACE03C65C6666DB", this.Handle, damaged);
  }

  get DamageCleanliness(): eDamageCleanliness {
    return _N<eDamageCleanliness>(
      "0x88EFFED5FE8B0B4A",
      this.Handle,
      Citizen.resultAsInteger(),
    );
  }

  set DamageCleanliness(cleanliness: eDamageCleanliness) {
    _N("0x7528720101A807A5", this.Handle, cleanliness);
  }

  set DefenseModifier(amount: number) {
    _N("0x9B6808EC46BE849B", this.Handle, amount);
  }

  set CanBeTargeted(toggle: boolean) {
    SetPedCanBeTargetted(this.Handle, toggle);
  }

  // TODO: Team class wrapper

  // TODO: Bone wrapper `GET_PED_LAST_DAMAGE_BONE`

  /**
   * returns the ped who jacked this ped
   */
  getJacker(): Ped {
    return new Ped(GetPedsJacker(this.Handle));
  }

  setCrouchMovement(state: boolean, immediately = false): void {
    // SET_PED_CROUCH_MOVEMENT
    _N("0x7DE9692C6F64CFE8", this.Handle, state, 0, immediately);
  }

  canBeTargetedByPlayer(player: Player, toggle: boolean): void {
    SetPedCanBeTargettedByPlayer(this.Handle, player.Handle, toggle);
  }

  clearLastBoneDamage(): void {
    ClearPedLastDamageBone(this.Handle);
  }

  set OwnsAnimal(animal: Ped) {
    // SET_PED_OWNS_ANIMAL
    _N("0x931B241409216C1F", this.Handle, animal.Handle, false);
  }

  isInteractionPossible(animal: Ped): boolean {
    // IS_ANIMAL_INTERACTION_POSSIBLE
    return _N<boolean>(
      "0xD543D3A8FDE4F185",
      this.Handle,
      animal.Handle,
      Citizen.resultAsInteger(),
    );
  }

  isOnVehicle(vehicle: Vehicle): boolean {
    return IsPedOnSpecificVehicle(this.Handle, vehicle.Handle);
  }

  isSittingInVehicle(vehicle: Vehicle): boolean {
    return IsPedSittingInVehicle(this.Handle, vehicle.Handle);
  }

  warpOutOfVehicle(): void {
    // _WARP_PED_OUT_OF_VEHICLE
    _N("0xE0B61ED8BB37712F", this.Handle);
  }

  /**
   * puts the ped onto the specified mount
   * @param targetPed the horse to put the ped on
   * @param seatIndex the seat index to put the ped on
   */
  setOntoMount(targetPed: Ped, seatIndex: VehicleSeat): void {
    // SET_PED_ONTO_MOUNT
    _N("0x028F76B6E78246EB", this.Handle, targetPed.Handle, seatIndex, true);
  }

  removeFromMount(): void {
    // REMOVE_PED_FROM_MOUNT
    _N("0x5337B721C51883A9", this.Handle, true, true);
  }

  /**
   * Sets the ped into the specified vehicle
   * @param vehicle the vehicle to put the ped into
   * @param seatIndex the seat index to put the ped into
   */
  setIntoVehicle(vehicle: Vehicle, seatIndex: VehicleSeat): void {
    SetPedIntoVehicle(this.Handle, vehicle.Handle, seatIndex);
  }

  /**
   * kills the ped and optionally sets the killer
   * @param killer the entity that killed the ped
   */
  killPed(killer?: BaseEntity): void {
    SetEntityHealth(this.Handle, 0, killer ? killer.Handle : 0);
  }

  damage(amount: number, boneId = 0, killer?: Ped): void {
    ApplyDamageToPed(
      this.Handle,
      amount,
      0,
      boneId,
      killer ? killer.Handle : 0,
    );
  }

  /**
   * this returns a different type then the getter so we can't use set, maybe ts will fix soon (tm)
   * @param state how hard it will be to knock a ped off their vehicle
   */
  setCanBeKnockedOffVehicle(state: KnockOffVehicle): void {
    SetPedCanBeKnockedOffVehicle(this.Handle, state);
  }

  /**
   * Removes the specified ped if its not a player entity
   */
  delete(): void {
    SetEntityAsMissionEntity(this.Handle, true, true);
    DeletePed(this.Handle);
  }

  /**
   * creates a clone of the ped
   * @param network if the ped should be a networked entity
   * @param bScriptHostPed whether to register the ped as pinned to the script host in the R* network model.
   * @param copyHeadBlend whether to copy the peds head blend
   * @returns the cloned ped
   */
  clone(
    network: boolean,
    bScriptHostPed: boolean,
    copyHeadBlend: boolean,
  ): Ped {
    return new Ped(
      ClonePed(this.Handle, network, bScriptHostPed, copyHeadBlend),
    );
  }

  /**
   * clones the ped onto the target ped
   * @param targetPed the ped to clone onto
   */
  cloneTo(targetPed: Ped): void {
    ClonePedToTarget(this.Handle, targetPed.Handle);
  }

  /**
   * @param amount - the amount of armour to add to the ped
   */
  addArmour(amount: number): void {
    AddArmourToPed(this.Handle, amount);
  }

  applyDamage(
    damageAmount: number,
    boneId = 0,
    pedKiller: Ped | null = null,
  ): void {
    ApplyDamageToPed(
      this.Handle,
      damageAmount,
      0,
      boneId,
      pedKiller ? pedKiller.Handle : 0,
    );
  }

  /**
   * @param damagePack - the damage decal to apply see [here](https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua) for more documentation
   * @param damage - the damage to apply
   * @param mult - the multiplier?
   */
  applyDamagePack(damagePack: string, damage: number, mult: number): void {
    ApplyPedDamagePack(this.Handle, damagePack, damage, mult);
  }

  get CurrentVehicle(): Vehicle | null {
    const veh = GetVehiclePedIsIn(this.Handle, false);
    if (veh === 0) return null;
    return new Vehicle(veh);
  }

  // No documentation
  // applyBloodSpecific() {
  // 	ApplyPedBloodSpecific
  // }
}
