import { Model } from "redm/Model";
import type { WeaponAttachPoints } from "redm/enums/WeaponAttachPoints";

export class WeaponModel extends Model {
  public requestModel(): void {
    // REQUEST_WEAPON_ASSET
    Citizen.invokeNative("0x72D4CB5DB927009C", this.hash, 0, true);
    this.requestCount++;
  }

  public markAsNoLongerNeeded(): void {
    Citizen.invokeNative("0xC3896D03E2852236", this.hash);
    this.requestCount--;
  }

  get DefaultAttachPoint(): WeaponAttachPoints {
    // _GET_DEFAULT_WEAPON_ATTACH_POINT
    return Citizen.invokeNative("0x65DC4AC5B96614CB", this.hash, Citizen.resultAsInteger());
  }
}
