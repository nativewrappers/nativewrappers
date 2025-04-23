import { Vector3 } from "@common/utils/Vector";
import { GameConstants } from "./GameConstants";
import { Ped } from "./entities/Ped";

export class Game {
  static get PlayerPed() {
    return new Ped(PlayerPedId());
  }

  static get Player() {
    return GameConstants.Player;
  }

  static loadScene(pos: Vector3, offset = Vector3.Zero, radius = 5.0, controlFlags = 0) {
    // LOAD_SCENE_START
    return Citizen.invokeNative<boolean>(
      "0x387AD749E3B69B70",
      pos.x,
      pos.y,
      pos.z,
      offset.x,
      offset.y,
      offset.z,
      radius,
      controlFlags,
    );
  }

  static stopLoadScene() {
    // LOAD_SCENE_STOP
    Citizen.invokeNative<boolean>("0x5A8B01199C3E79C3");
  }

  static isLoadSceneLoaded() {
    // IS_LOAD_SCENE_LOADED
    return Citizen.invokeNative<boolean>("0x0909F71B5C070797");
  }

  static isLoadSceneActive() {
    // IS_LOAD_SCENE_ACTIVE
    return Citizen.invokeNative<boolean>("0xCF45DF50C7775F2A");
  }
}
