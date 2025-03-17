import { Player } from "./models/Player";

// Constants that will never change throughout the lifetime of the player
export class GameConstants {
  // the actual player object that will get initialized on the first call to the `get Player()`
  private static player: Player | null = null;
  // The player id of the local client
  public static readonly PlayerId = PlayerId();
  // The server id of the local client.
  public static readonly ServerId = GetPlayerServerId(GameConstants.PlayerId);
  // The player class of the local object
  public static get Player(): Player {
    // Initialize the player on first access, this should prevent any issues where the `Player` class isn't
    // defined yet since we call this from `Player` too.
    // return GameConstants.player;
    if (GameConstants.player === null) {
      GameConstants.player = new Player(GameConstants.PlayerId);
    }
    return GameConstants.player;
  }
}
