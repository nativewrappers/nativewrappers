var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Scaleform } from "./Scaleform";
class InstructionalButtons {
  static {
    __name(this, "InstructionalButtons");
  }
  scaleform;
  /**
   * Draws native instructional buttons
   *
   * @param buttons Array of instructional buttons to be drawn
   */
  constructor(buttons) {
    this.scaleform = new Scaleform("INSTRUCTIONAL_BUTTONS");
    this.scaleform.callFunction("CLEAR_ALL");
    this.scaleform.callFunction("SET_CLEAR_SPACE", 200);
    buttons.forEach((button, index) => {
      this.pushButton(button, index);
    });
    this.scaleform.callFunction("DRAW_INSTRUCTIONAL_BUTTONS");
    this.scaleform.callFunction("SET_BACKGROUND_COLOUR", 0, 0, 0, 80);
  }
  pushButton(button, index) {
    BeginScaleformMovieMethod(this.scaleform.Handle, "SET_DATA_SLOT");
    PushScaleformMovieFunctionParameterInt(index);
    for (let i = button.controls.length - 1; i >= 0; i--) {
      PushScaleformMovieMethodParameterButtonName(GetControlInstructionalButton(2, button.controls[i], true));
    }
    PushScaleformMovieMethodParameterString(button.label);
    EndScaleformMovieMethod();
  }
  /**
   * Renders the instructional button scaleform
   */
  async draw() {
    await this.scaleform.render2D();
  }
}
export {
  InstructionalButtons
};
