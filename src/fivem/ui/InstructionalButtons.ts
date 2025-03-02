import { Scaleform } from "./Scaleform";
import type { IButton } from "./interfaces/IButton";

/**
 * Draw native instructional buttons in the bottom left of the screen using scaleform
 *
 * Example:
 *
 * ```typescript
 * import { InstructionalButtons, Control } from '@nativewrappers/client';
 *
 * const buttons = new InstructionalButtons([
 *  {controls: [Control.Context], label: "Interact with Bob"},
 *  {controls: [Control.Detonate], label: "Say hello to Alice"}
 * ])
 *
 * setTick(() => {
 *   buttons.draw()
 * })
 * ```
 */
export class InstructionalButtons {
  private scaleform: Scaleform;

  /**
   * Draws native instructional buttons
   *
   * @param buttons Array of instructional buttons to be drawn
   */
  constructor(buttons: IButton[]) {
    this.scaleform = new Scaleform("INSTRUCTIONAL_BUTTONS");
    this.scaleform.callFunction("CLEAR_ALL");
    this.scaleform.callFunction("SET_CLEAR_SPACE", 200);

    buttons.forEach((button, index) => {
      this.pushButton(button, index);
    });

    this.scaleform.callFunction("DRAW_INSTRUCTIONAL_BUTTONS");
    this.scaleform.callFunction("SET_BACKGROUND_COLOUR", 0, 0, 0, 80);
  }

  private pushButton(button: IButton, index: number) {
    BeginScaleformMovieMethod(this.scaleform.Handle, "SET_DATA_SLOT");
    PushScaleformMovieFunctionParameterInt(index);
    // Looping backwards here since scaleform is using a stack so the first control ends up being the last
    // So looping backwards makes more sense here so that the controls are rendered in the order they're defined
    for (let i = button.controls.length - 1; i >= 0; i--) {
      PushScaleformMovieMethodParameterButtonName(GetControlInstructionalButton(2, button.controls[i], true));
    }
    PushScaleformMovieMethodParameterString(button.label);
    EndScaleformMovieMethod();
  }

  /**
   * Renders the instructional button scaleform
   */
  public async draw(): Promise<void> {
    await this.scaleform.render2D();
  }
}
