import { Ped, Player } from "./entities";
import { GameConstants } from "./GameConstants";

export class Game {
  static get PlayerPed() {
    return new Ped(PlayerPedId());
  }

  static get Player() {
    return GameConstants.Player;
  }
}
