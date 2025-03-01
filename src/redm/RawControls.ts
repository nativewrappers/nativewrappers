import type { RawKeys } from "./enums";

// rdr3 doesn't have proper definitions
declare function IsRawKeyDown(rawKeyIndex: number): boolean;
declare function IsRawKeyPressed(rawKeyIndex: number): boolean;
declare function IsRawKeyReleased(rawKeyIndex: number): boolean;
declare function IsRawKeyUp(rawKeyIndex: number): boolean;

export class RawControls {
  public static IsKeyDown(rawKey: RawKeys) {
    return IsRawKeyDown(rawKey);
  }

  public static IsKeyPressed(rawKey: RawKeys) {
    return IsRawKeyPressed(rawKey);
  }

  public static IsKeyReleased(rawKey: RawKeys): boolean {
    return IsRawKeyReleased(rawKey);
  }

  public static IsKeyUp(rawKey: RawKeys): boolean {
    return IsRawKeyUp(rawKey);
  }
}
