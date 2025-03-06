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
export declare class InstructionalButtons {
    private scaleform;
    /**
     * Draws native instructional buttons
     *
     * @param buttons Array of instructional buttons to be drawn
     */
    constructor(buttons: IButton[]);
    private pushButton;
    /**
     * Renders the instructional button scaleform
     */
    draw(): Promise<void>;
}
