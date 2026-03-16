var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonPlayer } from "./entities/CommonPlayer";
class CommonGameConstants {
  static {
    __name(this, "CommonGameConstants");
  }
  // the actual player object that will get initialized on the first call to the `get Player()`
  static player = null;
  // The player id of the local client
  static PlayerId = PlayerId();
  // The server id of the local client.
  static ServerId = GetPlayerServerId(CommonGameConstants.PlayerId);
  // The player class of the local object
  static get Player() {
    if (CommonGameConstants.player === null) {
      CommonGameConstants.player = new CommonPlayer(CommonGameConstants.PlayerId);
    }
    return CommonGameConstants.player;
  }
}
export {
  CommonGameConstants
};
