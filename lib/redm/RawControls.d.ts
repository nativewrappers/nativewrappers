import type { RawKeys } from "./enums";
export declare class RawControls {
    static IsKeyDown(rawKey: RawKeys): boolean;
    static IsKeyPressed(rawKey: RawKeys): boolean;
    static IsKeyReleased(rawKey: RawKeys): boolean;
    static IsKeyUp(rawKey: RawKeys): boolean;
}
