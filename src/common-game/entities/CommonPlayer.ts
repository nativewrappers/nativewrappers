import type { StateBagChangeHandler } from "common-game/cfx/StateBagChangeHandler";
import { CommonPed } from "./CommonPed";
import { ClassTypes } from "@common/utils/ClassTypes";
import { GameConstants } from "common-game/CommonGameConstants";
import cfx from "common-game/cfx/cfx";
import type { CommonEntity } from "./CommonEntityType";
import { GetEntityClassFromHandle } from "./GetEntityClassIdFromHandle";

export class CommonPlayer {
  private handle: number;
  private ped?: CommonPed;
  private pvp = false;
  private stateBagCookies: number[] = [];
  private source: number;
  private type = ClassTypes.Player;

  public static *AllPlayers(excludeLocalPlayer = true): IterableIterator<CommonPlayer> {
    for (const ply of GetActivePlayers() as number[]) {
      if (excludeLocalPlayer && ply === GameConstants.PlayerId) {
        continue;
      }
      yield new CommonPlayer(ply);
    }
  }

  /**
   * @param handle the handoe of the ped to get the player of
   * @returns the player, or null if the player doesn't exist
   */
  public static fromPedHandle(handle: number): CommonPlayer | null {
    const playerHandle = NetworkGetPlayerIndexFromPed(handle);
    if (!handle) {
      return null;
    }
    return new CommonPlayer(playerHandle);
  }

  /**
   * @param serverId the server id to get the player of
   * @returns the player, or null if the player doesn't exist
   */
  public static fromServerId(serverId: number): CommonPlayer | null {
    const player = GetPlayerFromServerId(serverId);
    if (player === -1) {
      return null;
    }
    return new CommonPlayer(player);
  }

  /**
   * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
   * @param [fromPlayer=GameConstants.Player] the player to get the distance from
   * @returns the closest player from {@param fromPlayer} and the distance the player was
   */
  public static getClosestPlayerPedWithDistance(minimumDistance = Number.MAX_VALUE, fromPlayer = GameConstants.Player) {
    const ped = fromPlayer.Ped;
    const pos = ped.Position;
    const data: [CommonPed | null, number] = [null as CommonPed | null, Number.MAX_VALUE];
    for (const ply of CommonPlayer.AllPlayers(true)) {
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
  }

  public get Handle(): number {
    return this.handle;
  }

  /**
   * This is here for compatibility with older versions.
   */
  public get Character(): CommonPed {
    return this.Ped;
  }

  public get Ped(): CommonPed {
    const handle = GetPlayerPed(this.handle);

    if (typeof this.ped === "undefined" || handle !== this.ped.Handle) {
      this.ped = new CommonPed(handle);
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

  public AddStateBagChangeHandler(keyFilter: string | null, handler: StateBagChangeHandler<unknown>): number {
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
  public listenForStateChange(keyFilter: string | null, handler: StateBagChangeHandler<unknown>): number {
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

  public get IsDead(): boolean {
    return IsPlayerDead(this.handle);
  }

  public set DisableFiring(value: boolean) {
    DisablePlayerFiring(this.handle, value);
  }

  public get EntityPlayerIsAimingAt(): CommonEntity | null {
    const [entityHit, entity] = GetEntityPlayerIsFreeAimingAt(this.handle);
    if (entityHit) {
      return GetEntityClassFromHandle(entity);
    }
    return null;
  }

  public get StealthNoise(): number {
    return GetPlayerCurrentStealthNoise(this.handle);
  }
}
