import { CursorSprite } from "../enums/CursorSprite";
import type { HudComponent } from "../enums/HudComponent";
import type { Point } from "../utils/Point";
export declare abstract class Hud {
    static isComponentActive(component: HudComponent): boolean;
    static showComponentThisFrame(component: HudComponent): void;
    static hideComponentThisFrame(component: HudComponent): void;
    static showCursorThisFrame(): void;
    static set CursorPosition(position: Point);
    static get CursorSprite(): CursorSprite;
    static set CursorSprite(sprite: CursorSprite);
    static get IsVisible(): boolean;
    static set IsVisible(toggle: boolean);
    static get IsRadarVisible(): boolean;
    static set IsRadarVisible(toggle: boolean);
    static set RadarZoom(zoomLevel: number);
}
