var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../common/utils/Color";
import { HudColor } from "../enums/HudColor";
import { NotificationType } from "../enums/NotificationType";
import { Size } from "../utils/Size";
import { _String } from "../utils/String";
import { Audio } from "../Audio";
import { Notification } from "./Notification";
class Screen {
  static {
    __name(this, "Screen");
  }
  static get Resolution() {
    const [width, height] = GetScreenActiveResolution();
    return new Size(width, height);
  }
  static get ScaledResolution() {
    const height = this.Height;
    return new Size(height * this.AspectRatio, height);
  }
  static get Width() {
    return this.Resolution.width;
  }
  static get ScaledWidth() {
    return this.Height * this.AspectRatio;
  }
  static get Height() {
    return this.Resolution.height;
  }
  static get AspectRatio() {
    return GetAspectRatio(false);
  }
  static showSubtitle(message, duration = 2500) {
    const strings = _String.stringToArray(message);
    BeginTextCommandPrint("CELL_EMAIL_BCON");
    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });
    EndTextCommandPrint(duration, true);
  }
  static displayHelpTextThisFrame(message) {
    const strings = _String.stringToArray(message);
    BeginTextCommandDisplayHelp("CELL_EMAIL_BCON");
    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });
    EndTextCommandDisplayHelp(0, false, false, -1);
  }
  static showNotification(message, blinking = false) {
    const strings = _String.stringToArray(message);
    SetNotificationTextEntry("CELL_EMAIL_BCON");
    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });
    return new Notification(DrawNotification(blinking, true));
  }
  static showAdvancedNotification(message, title, subtitle, iconSet, icon, bgColor = HudColor.NONE, flashColor = Color.Transparent, blinking = false, type = NotificationType.Default, showInBrief = true, sound = true) {
    const strings = _String.stringToArray(message);
    SetNotificationTextEntry("CELL_EMAIL_BCON");
    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });
    if (bgColor !== HudColor.NONE) {
      SetNotificationBackgroundColor(Number(bgColor));
    }
    if (flashColor !== Color.Transparent && blinking) {
      SetNotificationFlashColor(flashColor.r, flashColor.g, flashColor.b, flashColor.a);
    }
    if (sound) {
      Audio.playSoundFrontEnd("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    }
    SetNotificationMessage(iconSet, icon, true, Number(type), title, subtitle);
    return new Notification(DrawNotification(blinking, showInBrief));
  }
  static worldToScreen(position, scaleWidth = false) {
    const coords = GetScreenCoordFromWorldCoord(position.x, position.y, position.z);
    return new Size(coords[1] * (scaleWidth ? this.ScaledWidth : this.Width), coords[2] * this.Height);
  }
}
export {
  Screen
};
