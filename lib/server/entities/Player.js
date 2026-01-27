var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "../common/utils/ClassTypes";
import { Vector3 } from "../common/utils/Vector";
import { cleanPlayerName } from "../common/utils/cleanPlayerName";
import cfx from "../cfx";
import { Ped } from "./Ped";
class Player {
  constructor(source) {
    this.source = source;
  }
  static {
    __name(this, "Player");
  }
  type = ClassTypes.Player;
  static fromServerId(serverId) {
    if (!DoesPlayerExist(serverId)) {
      return null;
    }
    return new Player(serverId);
  }
  /**
   * Get an interable list of players currently on the server
   * @returns Iterable list of Players.
   */
  static *AllPlayers() {
    const num = GetNumPlayerIndices();
    for (let i = 0; i < num; i++) {
      yield new Player(Number.parseInt(GetPlayerFromIndex(i)));
    }
  }
  get Exists() {
    return this.source !== 0 && DoesPlayerExist(this.source);
  }
  get Source() {
    return this.source;
  }
  /**
   * @returns the handle of the current player, this will be a number type, but we return 'any'
   * so we don't have to deal with annoying type differences between native calls
   */
  get Handle() {
    return this.source;
  }
  get State() {
    return cfx.Player(this.source).state;
  }
  /**
   * Returns the player source casted as a string
   */
  get Src() {
    return this.source;
  }
  get Ped() {
    const ped = GetPlayerPed(this.source);
    return new Ped(ped);
  }
  get Tokens() {
    return getPlayerTokens(this.source);
  }
  get Identifiers() {
    return getPlayerIdentifiers(this.source);
  }
  get Endpoint() {
    return GetPlayerEndpoint(this.source);
  }
  get CameraRotation() {
    return Vector3.fromArray(GetPlayerCameraRotation(this.Src));
  }
  /**
   * Returns the time since the last player UDP message
   */
  get LastMessage() {
    return GetPlayerLastMsg(this.Src);
  }
  get MaxArmour() {
    return GetPlayerMaxArmour(this.Src);
  }
  get MaxHealth() {
    return GetPlayerMaxHealth(this.Src);
  }
  get MeleeModifier() {
    return GetPlayerMeleeWeaponDamageModifier(this.Src);
  }
  /**
   * @returns the players name
   */
  get Name() {
    return GetPlayerName(this.Src);
  }
  /**
   * @returns the players name with any color code unicode, etc removed, this can lead to there being no name at all
   */
  filteredName() {
    return cleanPlayerName(this.Name);
  }
  /**
   * @returns the players round trip ping
   */
  get Ping() {
    return GetPlayerPing(this.Src);
  }
  /**
   * @returns the current routhing bucket the player is in, default is 0
   */
  get RoutingBucket() {
    return GetPlayerRoutingBucket(this.Src);
  }
  get Team() {
    return GetPlayerTeam(this.Src);
  }
  get WantedPosition() {
    return Vector3.fromArray(GetPlayerWantedCentrePosition(this.Src));
  }
  get WantedLevel() {
    return GetPlayerWantedLevel(this.Src);
  }
  get IsEvadingWanted() {
    return IsPlayerEvadingWantedLevel(this.Src);
  }
  get WeaponDamageModifier() {
    return GetPlayerWeaponDamageModifier(this.Src);
  }
  get WeaponDefenseModifier() {
    return GetPlayerWeaponDefenseModifier(this.Src);
  }
  get WeaponDefenseModifier2() {
    return GetPlayerWeaponDefenseModifier_2(this.Src);
  }
  get AirDragMultiplier() {
    return GetAirDragMultiplierForPlayersVehicle(this.Src);
  }
  get IsUsingSuperJump() {
    return IsPlayerUsingSuperJump(this.Src);
  }
  get IsMuted() {
    return MumbleIsPlayerMuted(this.source);
  }
  set IsMuted(isMuted) {
    MumbleSetPlayerMuted(this.source, isMuted);
  }
  isAceAllowed(object) {
    return IsPlayerAceAllowed(this.Src, object);
  }
  timeInPersuit(lastPursuit = false) {
    return GetPlayerTimeInPursuit(this.Src, lastPursuit);
  }
  drop(reason = "No reason specified") {
    DropPlayer(this.Src, reason);
  }
  emit(eventName, ...args) {
    TriggerClientEvent(eventName, this.source, ...args);
  }
  emitRaw(eventName, data) {
    TriggerClientEventInternal(eventName, this.source, data, data.byteLength);
  }
}
export {
  Player
};
