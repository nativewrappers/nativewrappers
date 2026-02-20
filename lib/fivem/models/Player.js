var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "../common/utils/ClassTypes";
import { Color } from "../common/utils/Color";
import { GameConstants } from "../GameConstants";
import { Model } from "../Model";
import { GetEntityClassFromId } from "../utils/GetEntityFromEntityIds";
import cfx, {} from "../cfx";
import { Ped } from "./Ped";
class Player {
  static {
    __name(this, "Player");
  }
  handle;
  ped;
  pvp = false;
  stateBagCookies = [];
  source;
  type = ClassTypes.Player;
  static *AllPlayers(excludeLocalPlayer = true) {
    for (const ply of GetActivePlayers()) {
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
  static fromPedHandle(handle) {
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
  static fromServerId(serverId) {
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
  static getClosestPlayerPedWithDistance(minimumDistance = Number.MAX_VALUE, fromPlayer = GameConstants.Player) {
    const ped = fromPlayer.Ped;
    const pos = ped.Position;
    const data = [null, Number.MAX_VALUE];
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
  static getClosestPlayerPed(minimumDistance = Number.MAX_VALUE, fromPlayer = GameConstants.Player) {
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
      this.ped = new Ped(handle);
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
  get PvPEnabled() {
    return this.pvp;
  }
  set PvPEnabled(value) {
    NetworkSetFriendlyFireOption(value);
    SetCanAttackFriendly(this.Character.Handle, value, value);
    this.pvp = value;
  }
  set Ghosted(isGhosted) {
    if (this.Handle === 128) {
      SetLocalPlayerAsGhost(isGhosted);
    } else {
      SetRelationshipToPlayer(this.handle, isGhosted);
    }
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
      return GetEntityClassFromId(entity);
    }
    return null;
  }
  get StealthNoise() {
    return GetPlayerCurrentStealthNoise(this.handle);
  }
  get FakeWantedLevel() {
    return GetPlayerFakeWantedLevel(this.handle);
  }
  get PlayerGroup() {
    return GetPlayerGroup(this.handle);
  }
  get HasReserveParachute() {
    return GetPlayerHasReserveParachute(this.handle);
  }
  get HealthRechargeLimit() {
    return GetPlayerHealthRechargeLimit(this.handle);
  }
  get IsInvincible() {
    return GetPlayerInvincible_2(this.handle);
  }
  get MaxArmor() {
    return GetPlayerMaxArmour(this.handle);
  }
  get ParachuteModelOverride() {
    return new Model(GetPlayerParachuteModelOverride(this.handle));
  }
  get ParachutePackTintIndex() {
    return GetPlayerParachutePackTintIndex(this.handle);
  }
  get ParachuteTintIndex() {
    return GetPlayerParachuteTintIndex(this.handle);
  }
  get ParachuteColorTrailColor() {
    return Color.fromArray(GetPlayerParachuteSmokeTrailColor(this.handle));
  }
  get ReserveParachuteModelOverride() {
    return new Model(GetPlayerReserveParachuteModelOverride(this.handle));
  }
  get ReserveParachuteTintIndex() {
    return GetPlayerReserveParachuteTintIndex(this.handle);
  }
  get PlayerRgbColour() {
    return Color.fromArray(GetPlayerRgbColour(this.handle));
  }
  get Stamina() {
    return GetPlayerSprintStaminaRemaining(this.handle);
  }
  get SprintTimeRemaining() {
    return GetPlayerSprintStaminaRemaining(this.handle);
  }
  /**
   * The players melee target?
   */
  get TargetEntity() {
    const [entityHit, entity] = GetPlayerTargetEntity(this.handle);
    if (entityHit) {
      return GetEntityClassFromId(entity);
    }
    return null;
  }
  get Team() {
    return GetPlayerTeam(this.handle);
  }
  // GetPlayerUnderwaterTimeRemaining
  CanPedHearPlayer(ped) {
    return CanPedHearPlayer(this.handle, ped.Handle);
  }
}
export {
  Player
};
