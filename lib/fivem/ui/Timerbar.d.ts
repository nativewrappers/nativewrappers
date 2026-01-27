import { Sprite } from "./Sprite";
/**
 * Create a Timerbar. It's automatically added to the internal Timerbar array and drawn in a FIFO (first in, first out) way.
 *
 * ```typescript
 * // Create simple Timerbar
 * const myTimerbar = new Cfx.Timerbar("Hello");
 * myTimerbar.Text = "World";
 *
 * // Disable Timerbar later on
 * myTimerbar.Visible = false;
 * ```
 */
export declare class Timerbar {
    private sprite;
    private title;
    private text;
    private useProgressBar;
    private usePlayerStyle;
    private isVisible;
    private pbarValue;
    private textColor;
    private pbarBgColor;
    private pbarFgColor;
    constructor(title: string, useProgressBar?: boolean);
    get Title(): string;
    set Title(value: string);
    get Text(): string;
    set Text(value: string);
    get UseProgressBar(): boolean;
    get Progress(): number;
    set Progress(value: number);
    get Visible(): boolean;
    set Visible(value: boolean);
    get TextColor(): number | number[];
    set TextColor(value: number | number[]);
    get ProgressbarBgColor(): number[] | number;
    set ProgressbarBgColor(value: number[] | number);
    get ProgressbarFgColor(): number[] | number;
    set ProgressbarFgColor(value: number[] | number);
    set PlayerStyle(value: boolean);
    get PlayerStyle(): boolean;
    get Sprite(): Sprite | null;
}
