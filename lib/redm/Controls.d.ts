import type { KeyHash } from "./enums/Keys";
export declare class Controls {
    static IsInputJustPressed(hash: KeyHash): boolean;
    static IsInputPressed(hash: KeyHash): boolean;
    static IsDisabledInputPressed(hash: KeyHash): boolean;
    static DisableControl(hash: KeyHash): void;
}
