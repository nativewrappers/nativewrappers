var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonPed } from "./CommonPed";
import { ClassTypes } from "../common/utils/ClassTypes";
import { GetEntityClassFromHandle } from "./GetEntityClassIdFromHandle";
import cfx from "../cfx/cfx";
import { CommonGameConstants } from "../CommonGameConstants";
class CommonPlayer {
  static {
    __name(this, "CommonPlayer");
  }
  handle;
  ped;
  pvp = false;
  stateBagCookies = [];
  source;
  type = ClassTypes.Player;
  static *AllPlayers(excludeLocalPlayer = true) {
    for (const ply of GetActivePlayers()) {
      if (excludeLocalPlayer && ply === CommonGameConstants.PlayerId) {
        continue;
      }
      yield new CommonPlayer(ply);
    }
  }
  /**
   * @param handle the handoe of the ped to get the player of
   * @returns the player, or null if the player doesn't exist
   */
  static fromPedHandle(handle) {
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
  static fromServerId(serverId) {
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
  static getClosestPlayerPedWithDistance(minimumDistance = Number.MAX_VALUE, fromPlayer = CommonGameConstants.Player) {
    const ped = fromPlayer.Ped;
    const pos = ped.Position;
    const data = [null, Number.MAX_VALUE];
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
  static getClosestPlayerPed(minimumDistance = Number.MAX_VALUE, fromPlayer = CommonGameConstants.Player) {
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
  get Handle() {
    return this.handle;
  }
  /**
   * This is here for compatibility with older versions.
   */
  get Character() {
    return this.Ped;
  }
  get Ped() {
    const handle = GetPlayerPed(this.handle);
    if (typeof this.ped === "undefined" || handle !== this.ped.Handle) {
      this.ped = new CommonPed(handle);
    }
    return this.ped;
  }
  get ServerId() {
    if (this.source) {
      return this.source;
    }
    return GetPlayerServerId(this.handle);
  }
  get State() {
    return cfx.Player(this.ServerId).state;
  }
  AddStateBagChangeHandler(keyFilter, handler) {
    const cookie = AddStateBagChangeHandler(keyFilter, `player:${this.ServerId}`, handler);
    this.stateBagCookies.push(cookie);
    return cookie;
  }
  /**
   * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
   * @param keyFilter the key to filter for or null
   * @param handler the function to handle the change
   * @returns a cookie to be used in RemoveStateBagChangeHandler
   */
  listenForStateChange(keyFilter, handler) {
    return this.AddStateBagChangeHandler(keyFilter, handler);
  }
  removeStateListener(tgtCookie) {
    this.stateBagCookies = this.stateBagCookies.filter((cookie) => {
      const isCookie = cookie === tgtCookie;
      if (isCookie) RemoveStateBagChangeHandler(cookie);
      return isCookie;
    });
  }
  removeAllStateListeners() {
    for (const cookie of this.stateBagCookies) {
      RemoveStateBagChangeHandler(cookie);
    }
  }
  get Name() {
    return GetPlayerName(this.handle);
  }
  get IsDead() {
    return IsPlayerDead(this.handle);
  }
  set DisableFiring(value) {
    DisablePlayerFiring(this.handle, value);
  }
  get EntityPlayerIsAimingAt() {
    const [entityHit, entity] = GetEntityPlayerIsFreeAimingAt(this.handle);
    if (entityHit) {
      return GetEntityClassFromHandle(entity);
    }
    return null;
  }
  get StealthNoise() {
    return GetPlayerCurrentStealthNoise(this.handle);
  }
}
export {
  CommonPlayer
};
