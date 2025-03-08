import { Ped } from "./entities/Ped";
import { GameConstants } from "./GameConstants";

export class Game {
  static get PlayerPed() {
    return new Ped(PlayerPedId());
  }

  static get Player() {
    return GameConstants.Player;
  }
}
