var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Player } from "./models/Player";
class GameConstants {
  static {
    __name(this, "GameConstants");
  }
  // the actual player object that will get initialized on the first call to the `get Player()`
  static player = null;
  // The player id of the local client
  static PlayerId = PlayerId();
  // The server id of the local client.
  static ServerId = GetPlayerServerId(GameConstants.PlayerId);
  // The player class of the local object
  static get Player() {
    if (GameConstants.player === null) {
      GameConstants.player = new Player(GameConstants.PlayerId);
    }
    return GameConstants.player;
  }
}
export {
  GameConstants
};
