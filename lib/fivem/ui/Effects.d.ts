import type { ScreenEffect } from "../enums/ScreenEffect";
export declare abstract class Effects {
    static start(effectName: ScreenEffect, duration?: number, looped?: boolean): void;
    static stop(screenEffect?: ScreenEffect): void;
    static isActive(screenEffect: ScreenEffect): boolean;
    private static readonly effects;
    private static effectToString;
}
