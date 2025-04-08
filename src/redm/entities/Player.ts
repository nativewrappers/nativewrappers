import { GameConstants } from "redm/GameConstants";
import { _N } from "../utils/Native";
import type { Ped } from "./Ped";

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
   * @param handle the player handle
   */
  constructor(handle: number) {
    this.handle = handle;
  }

  get Handle(): number {
    return this.handle;
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
