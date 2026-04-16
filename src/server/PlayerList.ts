import { Player } from "./entities/Player";

export type PlayerMap = Map<number, Player>;

/**
 * A static helper class that will automatically handle adding/removing players from
 * a shared player map.
 *
 * This should be preferred over using constant calls to `getPlayers` since it will
 * have marginally less overhead
 */
export class PlayerList {
  private static playerMap: PlayerMap = new Map();
  static {
    for (const srcStr of getPlayers()) {
      const src = parseInt(srcStr, 10);
      PlayerList.playerMap.set(src, new Player(src));
    }

    on("playerJoining", () => {
      PlayerList.playerMap.set(source, new Player(source));
    });

    on("playerDropped", () => {
      PlayerList.playerMap.delete(source);
    });
  }

  static get AllPlayers(): Readonly<PlayerMap> {
    return PlayerList.playerMap;
  }
}
