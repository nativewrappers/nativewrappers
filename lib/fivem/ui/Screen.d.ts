import { Color } from "../common/utils/Color";
import type { Vector3 } from "../common/utils/Vector";
import { HudColor } from "../enums/HudColor";
import { NotificationType } from "../enums/NotificationType";
import { Size } from "../utils/Size";
import { Notification } from "./Notification";
export declare abstract class Screen {
    static get Resolution(): Size;
    static get ScaledResolution(): Size;
    static get Width(): number;
    static get ScaledWidth(): number;
    static get Height(): number;
    static get AspectRatio(): number;
    static showSubtitle(message: string, duration?: number): void;
    static displayHelpTextThisFrame(message: string): void;
    static showNotification(message: string, blinking?: boolean): Notification;
    static showAdvancedNotification(message: string, title: string, subtitle: string, iconSet: string, icon: string, bgColor?: HudColor, flashColor?: Color, blinking?: boolean, type?: NotificationType, showInBrief?: boolean, sound?: boolean): Notification;
    static worldToScreen(position: Vector3, scaleWidth?: boolean): Size;
}
