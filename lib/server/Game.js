var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Delay } from "./common/utils/Delay";
import { Player } from "./entities/Player";
class Game {
  static {
    __name(this, "Game");
  }
  // A map containing generated hashes.
  static hashCache = /* @__PURE__ */ new Map();
  /**
   * Calculate the Jenkins One At A Time (joaat) has from the given string.
   *
   * @param input The input string to calculate the hash
   */
  static generateHash(input) {
    if (typeof input === "undefined") {
      return 0;
    }
    const _hash = this.hashCache.get(input);
    if (_hash) return _hash;
    const hash = GetHashKey(input);
    this.hashCache.set(input, hash);
    return hash;
  }
  /**
   * Gets how many milliseconds the game has been open this session
   */
  static get GameTime() {
    return GetGameTimer();
  }
  static get GameBuild() {
    return GetGameBuildNumber();
  }
  static get GameName() {
    return GetGameName();
  }
  static get RegisteredCommands() {
    return GetRegisteredCommands();
  }
}
export {
  Game
};
