import { LoadingSpinnerType } from "../enums";

/**
 * Show and hide loading prompt on the bottom right of the screen.
 *
 * Example:
 *
 * ```typescript
 * import { LoadingPrompt } from '@nativewrappers/client/ui';
 *
 * LoadingPrompt.show("Hello World");
 *
 * setTimeout(() => {
 *  LoadingPrompt.hide();
 * }, 10000)'
 * ```
 */
export abstract class LoadingPrompt {
  /**
   * Shows a loading prompt.
   *
   * @param loadingText Text to be displayed inside loading prompt.
   * @param spinnerType Type of spinner.
   */
  public static show(loadingText = "", spinnerType: LoadingSpinnerType = LoadingSpinnerType.RegularClockwise): void {
    if (LoadingPrompt.IsActive) {
      LoadingPrompt.hide();
    }

    if (loadingText === "") {
      BeginTextCommandBusyString("");
    } else {
      BeginTextCommandBusyString("STRING");
      AddTextComponentSubstringPlayerName(loadingText);
    }

    EndTextCommandBusyString(Number(spinnerType));
  }

  public static hide(): void {
    if (LoadingPrompt.IsActive) {
      RemoveLoadingPrompt();
    }
  }

  public static get IsActive(): boolean {
    return IsLoadingPromptBeingDisplayed();
  }
}
