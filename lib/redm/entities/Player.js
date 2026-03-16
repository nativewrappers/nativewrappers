var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { GameConstants } from "../GameConstants";
import { _N } from "../utils/Native";
import { Ped } from "./Ped";
const handleUpgrade = /* @__PURE__ */ __name((name, amount) => {
  const b1 = new ArrayBuffer(8 * 24);
  const a2 = new DataView(b1);
  const b2 = new ArrayBuffer(8 * 12);
  const a3 = new DataView(b2);
  _N("0xCB5D11F9508A928D", 1, a2, a3, GetHashKey(name), 1084182731, amount, 752097756);
}, "handleUpgrade");
class Player {
  static {
    __name(this, "Player");
  }
  handle;
  static *AllPlayers(excludeLocalPlayer = true) {
    for (const ply of GetActivePlayers()) {
      if (excludeLocalPlayer && ply === GameConstants.PlayerId) {
        continue;
      }
      yield new Player(ply);
    }
  }
  static fromPedHandle(handle) {
    return new Player(NetworkGetPlayerIndexFromPed(handle));
  }
  /**
   * Gets the player from the specified {@param serverId}
   * @returns the player object, or null if the player didn't exist
   */
  static fromServerId(serverId) {
    if (serverId === GameConstants.ServerId) {
      return GameConstants.Player;
    }
    const player = GetPlayerFromServerId(serverId);
    if (player === -1) return null;
    return new Player(player);
  }
  /**
   * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
   * @param [fromPlayer=GameConstants.Player] the player to get the distance from
   * @returns the closest player from {@param fromPlayer} and the distance the player was
   */
  static getClosestPlayerWithDistance(minimumDistance = Number.MAX_VALUE, fromPlayer = GameConstants.Player) {
    const ped = fromPlayer.Ped;
    const pos = ped.Position;
    const data = [null, Number.MAX_VALUE];
    for (const ply of Player.AllPlayers(true)) {
      const tgtPed = ply.Ped;
      const dist = pos.distance(tgtPed.Position);
      if (dist < data[1] && dist < minimumDistance) {
        data[0] = ply;
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
  static getClosestPlayer(minimumDistance = Number.MAX_VALUE, fromPlayer = GameConstants.Player) {
    const data = this.getClosestPlayerWithDistance(minimumDistance, fromPlayer);
    return data[0];
  }
  /**
   * @param handle the player handle
   */
  constructor(handle) {
    this.handle = handle;
  }
  get Handle() {
    return this.handle;
  }
  get Ped() {
    return new Ped(GetPlayerPed(this.handle));
  }
  get ServerId() {
    return GetPlayerServerId(this.handle);
  }
  /**
   * Adds the amount of stamina player has on the hud
   * @param amount the amount of upgrade to give 6 is half the bar while 12 is the full bar
   */
  addStaminaUpgrade(amount) {
    handleUpgrade("UPGRADE_STAMINA_TANK_1", amount);
  }
  addHealthUpgrade(amount) {
    handleUpgrade("UPGRADE_HEALTH_TANK_1", amount);
  }
  addDeadeyeUpgrade(amount) {
    handleUpgrade("UPGRADE_DEADEYE_TANK_1", amount);
  }
  setOwnsMount(mount) {
    _N("0xE6D4E435B56D5BD0", this.handle, mount.Handle);
  }
}
export {
  Player
};
