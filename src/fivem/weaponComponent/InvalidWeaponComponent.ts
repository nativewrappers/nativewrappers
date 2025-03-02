import { WeaponComponent } from "./WeaponComponent";
import { WeaponComponentHash } from "./WeaponComponentHash";
import type { WeaponHash } from "../hashes";
import { ComponentAttachmentPoint } from "./ComponentAttachmentPoint";
import { Game } from "../Game";

export class InvalidWeaponComponent extends WeaponComponent {
  constructor() {
    super(null!, null!, WeaponComponentHash.Invalid);
  }

  public get Active(): boolean {
    return false;
  }

  public set Active(value: boolean) {}

  public get DisplayName(): string {
    return "WCT_INVALID";
  }

  public get LocalizedName(): string {
    return Game.getGXTEntry(this.DisplayName);
  }

  public static getAttachmentPoint(hash: WeaponHash, componentHash: WeaponComponentHash): ComponentAttachmentPoint {
    return ComponentAttachmentPoint.Invalid;
  }
}
