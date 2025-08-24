import { CommonPlayer } from "./entities/CommonPlayer";

// Constants that will never change throughout the lifetime of the player
export class CommonGameConstants {
  // the actual player object that will get initialized on the first call to the `get Player()`
  private static player: CommonPlayer | null = null;
  // The player id of the local client
  public static readonly PlayerId = PlayerId();
  // The server id of the local client.
  public static readonly ServerId = GetPlayerServerId(CommonGameConstants.PlayerId);
  // The player class of the local object
  public static get Player(): CommonPlayer {
    // Initialize the player on first access, this should prevent any issues where the `Player` class isn't
    // defined yet since we call this from `Player` too.
    if (CommonGameConstants.player === null) {
      CommonGameConstants.player = new CommonPlayer(CommonGameConstants.PlayerId);
    }
    return CommonGameConstants.player;
  }
}
