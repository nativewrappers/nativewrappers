import { KeyHash } from "./enums/Keys";

export class Controls {
  public static IsInputJustPressed(hash: KeyHash) {
    return IsControlJustPressed(0, hash);
  }

  public static IsInputPressed(hash: KeyHash): boolean {
    return IsControlPressed(0, hash);
  }

  public static IsDisabledInputPressed(hash: KeyHash) {
    return IsDisabledControlPressed(0, hash);
  }

  public static DisableControl(hash: KeyHash): void {
    DisableControlAction(0, hash, false);
  }
}
