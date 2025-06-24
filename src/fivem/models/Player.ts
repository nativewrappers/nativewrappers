import { ClassTypes } from "@common/utils/ClassTypes";
import { Color } from "@common/utils/Color";
import { GameConstants } from "fivem/GameConstants";
import { Model } from "fivem/Model";
import { GetEntityClassFromId } from "fivem/utils/GetEntityFromEntityIds";
import cfx, { type StateBagChangeHandler } from "../cfx";
import type { Entity } from "./Entity";
import { Ped } from "./Ped";

export class Player {
  private handle: number;
  private ped?: Ped;
  private pvp = false;
  private stateBagCookies: number[] = [];
  private source: number;
  private type = ClassTypes.Player;

  public static *AllPlayers(excludeLocalPlayer = true): IterableIterator<Player> {
    for (const ply of GetActivePlayers() as number[]) {
      if (excludeLocalPlayer && ply === GameConstants.PlayerId) {
        continue;
      }
      yield new Player(ply);
    }
  }

  /**
   * @param handle the handoe of the ped to get the player of
   * @returns the player, or null if the player doesn't exist
   */
  public static fromPedHandle(handle: number): Player | null {
    const playerHandle = NetworkGetPlayerIndexFromPed(handle);
    if (!handle) {
      return null;
    }
    return new Player(playerHandle);
  }

  /**
   * @param serverId the server id to get the player of
   * @returns the player, or null if the player doesn't exist
   */
  public static fromServerId(serverId: number): Player | null {
    const player = GetPlayerFromServerId(serverId);
    if (player === -1) {
      return null;
    }
    return new Player(player);
  }

  /**
   * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
   * @param [fromPlayer=GameConstants.Player] the player to get the distance from
   * @returns the closest player from {@param fromPlayer} and the distance the player was
   */
  public static getClosestPlayerPedWithDistance(minimumDistance = Number.MAX_VALUE, fromPlayer = GameConstants.Player) {
    const ped = fromPlayer.Ped;
    const pos = ped.Position;
    const data: [Ped | null, number] = [null as Ped | null, Number.MAX_VALUE];
    for (const ply of Player.AllPlayers(true)) {
      const tgtPed = ply.Ped;
      const dist = pos.distance(tgtPed.Position);
      if (dist < data[1] && dist < minimumDistance) {
        data[0] = tgtPed;
        data[1] = dist;
      }
    }

    return data;
  }

  /**
   * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
   * @param [fromPlayer=GameConstants.Player] the player to get the distance from
   * @returns the closest player from {@param fromPlayer} and the distance the player was
   */
  public static getClosestPlayerPed(minimumDistance = Number.MAX_VALUE, fromPlayer = GameConstants.Player) {
    const data = this.getClosestPlayerPedWithDistance(minimumDistance, fromPlayer);
    return data[0];
  }

  /**
   * @param handle the player handle, or if on the server, their source.
   */
  constructor(handle = -1) {
    this.handle = handle;
    this.source = this.ServerId;
    if (!IsDuplicityVersion()) {
      this.PvPEnabled = true;
    }
  }

  public get Handle(): number {
    return this.handle;
  }

  /**
   * This is here for compatibility with older versions.
   */
  public get Character(): Ped {
    return this.Ped;
  }

  public get Ped(): Ped {
    const handle = GetPlayerPed(this.handle);

    if (typeof this.ped === "undefined" || handle !== this.ped.Handle) {
      this.ped = new Ped(handle);
    }

    return this.ped;
  }

  public get ServerId(): number {
    if (this.source) {
      return this.source;
    }
    return GetPlayerServerId(this.handle);
  }

  public get State(): StateBagInterface {
    return cfx.Player(this.ServerId).state;
  }

  public AddStateBagChangeHandler(keyFilter: string | null, handler: StateBagChangeHandler): number {
    const cookie = AddStateBagChangeHandler(keyFilter as any, `player:${this.ServerId}`, handler);
    this.stateBagCookies.push(cookie);
    return cookie;
  }

  /**
   * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
   * @param keyFilter the key to filter for or null
   * @param handler the function to handle the change
   * @returns a cookie to be used in RemoveStateBagChangeHandler
   */
  public listenForStateChange(keyFilter: string | null, handler: StateBagChangeHandler): number {
    return this.AddStateBagChangeHandler(keyFilter, handler);
  }

  public removeStateListener(tgtCookie: number): void {
    this.stateBagCookies = this.stateBagCookies.filter((cookie) => {
      const isCookie = cookie === tgtCookie;
      if (isCookie) RemoveStateBagChangeHandler(cookie);
      return isCookie;
    });
  }

  public removeAllStateListeners(): void {
    for (const cookie of this.stateBagCookies) {
      RemoveStateBagChangeHandler(cookie);
    }
  }

  public get Name(): string {
    return GetPlayerName(this.handle);
  }

  public get PvPEnabled(): boolean {
    return this.pvp;
  }

  public set PvPEnabled(value: boolean) {
    NetworkSetFriendlyFireOption(value);
    SetCanAttackFriendly(this.Character.Handle, value, value);
    this.pvp = value;
  }

  public get IsDead(): boolean {
    return IsPlayerDead(this.handle);
  }

  public set DisableFiring(value: boolean) {
    DisablePlayerFiring(this.handle, value);
  }

  public set Ghosted(isGhosted: boolean) {
    // if we're the local player then use the local version of the native
    if (this.Handle === 128) {
      SetLocalPlayerAsGhost(isGhosted);
    } else {
      // actual name is SET_REMOTE_PLAYER_AS_GHOST
      SetRelationshipToPlayer(this.handle, isGhosted);
    }
  }

  public get EntityPlayerIsAimingAt(): Entity | null {
    const [entityHit, entity] = GetEntityPlayerIsFreeAimingAt(this.handle);
    if (entityHit) {
      return GetEntityClassFromId(entity);
    }
    return null;
  }

  public get StealthNoise(): number {
    return GetPlayerCurrentStealthNoise(this.handle);
  }

  public get FakeWantedLevel(): number {
    return GetPlayerFakeWantedLevel(this.handle);
  }

  public get PlayerGroup(): number {
    return GetPlayerGroup(this.handle);
  }

  public get HasReserveParachute(): boolean {
    return GetPlayerHasReserveParachute(this.handle);
  }

  public get HealthRechargeLimit(): number {
    return GetPlayerHealthRechargeLimit(this.handle);
  }

  public get IsInvincible(): boolean {
    if (IsDuplicityVersion()) {
      return GetPlayerInvincible(this.handle);
    }

    return GetPlayerInvincible_2(this.handle);
  }

  public get MaxArmor(): number {
    return GetPlayerMaxArmour(this.handle);
  }

  public get ParachuteModelOverride(): Model {
    return new Model(GetPlayerParachuteModelOverride(this.handle));
  }

  public get ParachutePackTintIndex(): number {
    return GetPlayerParachutePackTintIndex(this.handle);
  }

  public get ParachuteTintIndex(): number {
    return GetPlayerParachuteTintIndex(this.handle);
  }

  public get ParachuteColorTrailColor(): Color {
    return Color.fromArray(GetPlayerParachuteSmokeTrailColor(this.handle));
  }

  public get ReserveParachuteModelOverride(): Model {
    return new Model(GetPlayerReserveParachuteModelOverride(this.handle));
  }

  public get ReserveParachuteTintIndex(): number {
    return GetPlayerReserveParachuteTintIndex(this.handle);
  }

  public get PlayerRgbColour(): Color {
    return Color.fromArray(GetPlayerRgbColour(this.handle));
  }

  public get Stamina(): number {
    return GetPlayerSprintStaminaRemaining(this.handle);
  }

  public get SprintTimeRemaining(): number {
    return GetPlayerSprintStaminaRemaining(this.handle);
  }

  /**
   * The players melee target?
   */
  public get TargetEntity(): Entity | null {
    const [entityHit, entity] = GetPlayerTargetEntity(this.handle);
    if (entityHit) {
      return GetEntityClassFromId(entity);
    }

    return null;
  }

  public get Team(): number {
    return GetPlayerTeam(this.handle);
  }

  // GetPlayerUnderwaterTimeRemaining

  public CanPedHearPlayer(ped: Ped): boolean {
    return CanPedHearPlayer(this.handle, ped.Handle);
  }
}
