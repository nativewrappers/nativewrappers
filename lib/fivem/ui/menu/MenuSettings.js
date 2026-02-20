var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Control } from "../../enums/Control";
import { InputMode } from "../../enums/InputMode";
class MenuSettings {
  static {
    __name(this, "MenuSettings");
  }
  scaleWithSafezone = true;
  resetCursorOnOpen = true;
  mouseControlsEnabled = true;
  mouseEdgeEnabled = true;
  controlDisablingEnabled = true;
  audio = {
    library: "HUD_FRONTEND_DEFAULT_SOUNDSET",
    upDown: "NAV_UP_DOWN",
    leftRight: "NAV_LEFT_RIGHT",
    select: "SELECT",
    back: "BACK",
    error: "ERROR"
  };
  enabledControls = {
    [InputMode.GamePad]: [Control.LookUpDown, Control.LookLeftRight, Control.Aim, Control.Attack],
    [InputMode.MouseAndKeyboard]: [
      Control.FrontendAccept,
      Control.FrontendAxisX,
      Control.FrontendAxisY,
      Control.FrontendDown,
      Control.FrontendUp,
      Control.FrontendLeft,
      Control.FrontendRight,
      Control.FrontendCancel,
      Control.FrontendSelect,
      Control.CursorScrollDown,
      Control.CursorScrollUp,
      Control.CursorX,
      Control.CursorY,
      Control.MoveUpDown,
      Control.MoveLeftRight,
      Control.Sprint,
      Control.Jump,
      Control.Enter,
      Control.VehicleExit,
      Control.VehicleAccelerate,
      Control.VehicleBrake,
      Control.VehicleHandbrake,
      Control.VehicleMoveLeftRight,
      Control.VehicleFlyYawLeft,
      Control.VehicleFlyYawRight,
      Control.FlyLeftRight,
      Control.FlyUpDown
    ]
  };
}
export {
  MenuSettings
};
