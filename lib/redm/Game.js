var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
import { GameConstants } from "./GameConstants";
import { Ped } from "./entities/Ped";
class Game {
  static {
    __name(this, "Game");
  }
  static get PlayerPed() {
    return new Ped(PlayerPedId());
  }
  static get Player() {
    return GameConstants.Player;
  }
  static loadScene(pos, offset = Vector3.Zero, radius = 5, controlFlags = 0) {
    return Citizen.invokeNative(
      "0x387AD749E3B69B70",
      pos.x,
      pos.y,
      pos.z,
      offset.x,
      offset.y,
      offset.z,
      radius,
      controlFlags
    );
  }
  static stopLoadScene() {
    Citizen.invokeNative("0x5A8B01199C3E79C3");
  }
  static isLoadSceneLoaded() {
    return Citizen.invokeNative("0x0909F71B5C070797");
  }
  static isLoadSceneActive() {
    return Citizen.invokeNative("0xCF45DF50C7775F2A");
  }
}
export {
  Game
};
