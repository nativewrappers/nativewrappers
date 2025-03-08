import { ClassTypes } from "@common/utils/ClassTypes";
import type { Hash } from "../type/Hash";
import { BaseEntity } from "./BaseEntity";
import { Vehicle } from "./Vehicle";

export class Ped extends BaseEntity {
  protected type = ClassTypes.Ped;
  constructor(handle: number) {
    super(handle);
  }

  /**
   * Get an interable list of peds currently on the server
   * @returns Iterable list of Peds.
   */
  public static *AllPeds(): IterableIterator<Ped> {
    for (const pedId of GetAllPeds() as unknown as number[]) {
      yield new Ped(pedId);
    }
  }

  public static fromNetworkId(netId: number): Ped | null {
    const ent = NetworkGetEntityFromNetworkId(netId);
    if (ent === 0) return null;
    return new Ped(ent);
  }

  public static fromStateBagName(stateBagName: string): Ped | null {
    const handle = GetEntityFromStateBagName(stateBagName);
    if (handle === 0) return null;
    return new Ped(handle);
  }

  public static fromSource(source: number): Ped {
    return new Ped(GetPlayerPed(source as any));
  }

  public get Armour(): number {
    return GetPedArmour(this.handle);
  }

  public get CauseOfDeath(): Hash {
    return GetPedCauseOfDeath(this.handle);
  }

  public get DesiredHeading(): number {
    return GetPedDesiredHeading(this.handle);
  }

  public get MaxHealth(): number {
    return GetPedMaxHealth(this.handle);
  }

  public get TaskCommand(): Hash {
    return GetPedScriptTaskCommand(this.handle);
  }

  public get TaskStage(): number {
    return GetPedScriptTaskStage(this.handle);
  }

  public get LastSourceOfDamage(): number {
    return GetPedSourceOfDamage(this.handle);
  }

  public get DeathCause(): Hash {
    return GetPedCauseOfDeath(this.handle);
  }

  public get Weapon(): Hash {
    return GetSelectedPedWeapon(this.handle);
  }

  /**
   * @returns the current vehicle the ped is in, or null if it doesn't exist
   */
  public get CurrentVehicle(): Vehicle | null {
    const vehicle = GetVehiclePedIsIn(this.handle, false);
    if (vehicle === 0) return null;
    return new Vehicle(vehicle);
  }

  public get LastVehicle(): Vehicle | null {
    const vehicle = GetVehiclePedIsIn(this.handle, false);
    if (vehicle === 0) return null;
    return new Vehicle(GetVehiclePedIsIn(this.handle, true));
  }

  public get IsPlayer(): boolean {
    return IsPedAPlayer(this.handle);
  }

  public getSpecificTaskType(index: number): number {
    return GetPedSpecificTaskType(this.handle, index);
  }
}
