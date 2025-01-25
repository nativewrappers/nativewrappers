import { Ped, Player } from "./entities";

// Constants that will never change throughout the lifetime of the player
export class GameConstants {
  public static readonly PlayerId = PlayerId();
  public static readonly ServerId = GetPlayerServerId(GameConstants.PlayerId);
  public static readonly Player = new Player(GameConstants.PlayerId);
}

export class Game {
  static get PlayerPed() {
    return new Ped(PlayerPedId());
  }

  static get Player() {
    return new Player(PlayerId());
  }
}
