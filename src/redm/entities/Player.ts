import { GameConstants } from "redm/GameConstants";
import { _N } from "../utils/Native";
import { Ped } from "./Ped";

// TODO: Use the inventory stuff
const handleUpgrade = (name: string, amount: number): void => {
  const b1 = new ArrayBuffer(8 * 24);
  const a2 = new DataView(b1);
  const b2 = new ArrayBuffer(8 * 12);
  const a3 = new DataView(b2);

  // _INVENTORY_ADD_ITEM_WITH_GUID
  _N("0xCB5D11F9508A928D", 1, a2, a3, GetHashKey(name), 1084182731, amount, 752097756);
};

export class Player {
  private handle: number;

  public static *AllPlayers(excludeLocalPlayer = true): IterableIterator<Player> {
    for (const ply of GetActivePlayers() as number[]) {
      if (excludeLocalPlayer && ply === GameConstants.PlayerId) {
        continue;
      }
      yield new Player(ply);
    }
  }

  public static fromPedHandle(handle: number): Player {
    return new Player(NetworkGetPlayerIndexFromPed(handle));
  }

  /**
   * Gets the player from the specified {@param serverId}
   * @returns the player object, or null if the player didn't exist
   */
  public static fromServerId(serverId: number): Player | null {
    if (serverId === GameConstants.ServerId) {
      return GameConstants.Player;
    }

    const player = GetPlayerFromServerId(serverId);
    if (player === -1) return null;
    return new Player(player);
  }

  /**
   * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
   * @param [fromPlayer=GameConstants.Player] the player to get the distance from
   * @returns the closest player from {@param fromPlayer} and the distance the player was
   */
  public static getClosestPlayerPedWithDistance(minimumDistance = Number.MAX_VALUE, fromPlayer = GameConstants.Player) {
    const ped = fromPlayer.Ped;
    const pos = ped.Position;
    const data: [Ped | null, number] = [null as Ped | null, Number.MAX_VALUE];
    for (const ply of Player.AllPlayers(true)) {
      const tgtPed = ply.Ped;
      const dist = pos.distance(tgtPed.Position);
      if (dist < data[1] && dist < minimumDistance) {
        data[0] = tgtPed;
        data[1] = dist;
      }
    }

    return data;
  }

  /**
   * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
   * @param [fromPlayer=GameConstants.Player] the player to get the distance from
   * @returns the closest player from {@param fromPlayer} and the distance the player was
   */
  public static getClosestPlayerPed(minimumDistance = Number.MAX_VALUE, fromPlayer = GameConstants.Player) {
    const data = this.getClosestPlayerPedWithDistance(minimumDistance, fromPlayer);
    return data[0];
  }

  /**
   * @param handle the player handle
   */
  constructor(handle: number) {
    this.handle = handle;
  }

  get Handle(): number {
    return this.handle;
  }

  get Ped(): Ped {
    return new Ped(GetPlayerPed(this.handle));
  }

  /**
   * Adds the amount of stamina player has on the hud
   * @param amount the amount of upgrade to give 6 is half the bar while 12 is the full bar
   */
  addStaminaUpgrade(amount: number): void {
    handleUpgrade("UPGRADE_STAMINA_TANK_1", amount);
  }

  addHealthUpgrade(amount: number): void {
    handleUpgrade("UPGRADE_HEALTH_TANK_1", amount);
  }

  addDeadeyeUpgrade(amount: number): void {
    handleUpgrade("UPGRADE_DEADEYE_TANK_1", amount);
  }

  setOwnsMount(mount: Ped) {
    _N("0xE6D4E435B56D5BD0", this.handle, mount.Handle);
  }
}
