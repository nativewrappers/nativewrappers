var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { LoadingSpinnerType } from "../enums/LoadingSpinnerType";
class LoadingPrompt {
  static {
    __name(this, "LoadingPrompt");
  }
  /**
   * Shows a loading prompt.
   *
   * @param loadingText Text to be displayed inside loading prompt.
   * @param spinnerType Type of spinner.
   */
  static show(loadingText = "", spinnerType = LoadingSpinnerType.RegularClockwise) {
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
  static hide() {
    if (LoadingPrompt.IsActive) {
      RemoveLoadingPrompt();
    }
  }
  static get IsActive() {
    return IsLoadingPromptBeingDisplayed();
  }
}
export {
  LoadingPrompt
};
