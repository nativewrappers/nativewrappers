var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Player } from "./entities/Player";
class PlayerList {
  static {
    __name(this, "PlayerList");
  }
  static playerMap = /* @__PURE__ */ new Map();
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
  static get AllPlayers() {
    return PlayerList.playerMap;
  }
}
export {
  PlayerList
};
