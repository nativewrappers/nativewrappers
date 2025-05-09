import { Color } from "@common/utils/Color";
import type { Vector3 } from "@common/utils/Vector";
import { HudColor } from "fivem/enums/HudColor";
import { NotificationType } from "fivem/enums/NotificationType";
import { Size } from "fivem/utils/Size";
import { _String } from "fivem/utils/String";
import { Audio } from "../Audio";
import { Notification } from "./Notification";

export abstract class Screen {
  public static get Resolution(): Size {
    const [width, height] = GetScreenActiveResolution();
    return new Size(width, height);
  }

  public static get ScaledResolution(): Size {
    const height = this.Height;
    return new Size(height * this.AspectRatio, height);
  }

  public static get Width(): number {
    return this.Resolution.width;
  }

  public static get ScaledWidth(): number {
    return this.Height * this.AspectRatio;
  }

  public static get Height(): number {
    return this.Resolution.height;
  }

  public static get AspectRatio(): number {
    return GetAspectRatio(false);
  }

  public static showSubtitle(message: string, duration = 2500): void {
    const strings: string[] = _String.stringToArray(message);

    BeginTextCommandPrint("CELL_EMAIL_BCON");

    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });

    EndTextCommandPrint(duration, true);
  }

  public static displayHelpTextThisFrame(message: string): void {
    const strings: string[] = _String.stringToArray(message);

    BeginTextCommandDisplayHelp("CELL_EMAIL_BCON");

    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });

    EndTextCommandDisplayHelp(0, false, false, -1);
  }

  public static showNotification(message: string, blinking = false): Notification {
    const strings: string[] = _String.stringToArray(message);

    SetNotificationTextEntry("CELL_EMAIL_BCON");

    strings.forEach((element) => {
      AddTextComponentSubstringPlayerName(element);
    });

    return new Notification(DrawNotification(blinking, true));
  }

  public static showAdvancedNotification(
    message: string,
    title: string,
    subtitle: string,
    iconSet: string,
    icon: string,
    bgColor: HudColor = HudColor.NONE,
    flashColor: Color = Color.Transparent,
    blinking = false,
    type: NotificationType = NotificationType.Default,
    showInBrief = true,
    sound = true,
  ): Notification {
    const strings: string[] = _String.stringToArray(message);

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

  public static worldToScreen(position: Vector3, scaleWidth = false): Size {
    const coords = GetScreenCoordFromWorldCoord(position.x, position.y, position.z);
    return new Size(coords[1] * (scaleWidth ? this.ScaledWidth : this.Width), coords[2] * this.Height);
  }
}
