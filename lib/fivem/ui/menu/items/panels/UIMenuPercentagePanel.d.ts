import { Sprite } from "../../../../ui/Sprite";
import { AbstractUIMenuPanel } from "./AbstractUIMenuPanel";
export declare class UIMenuPercentagePanel extends AbstractUIMenuPanel {
    protected readonly background: Sprite;
    private _pressed;
    private _lastPercentage;
    private readonly _title;
    private readonly _minText;
    private readonly _maxText;
    private readonly _activeBar;
    private readonly _backgroundBar;
    constructor(title?: string, percentage?: number, minText?: string, maxText?: string);
    get Title(): string;
    set Title(value: string);
    get MinText(): string;
    set MinText(value: string);
    get MaxText(): string;
    set MaxText(value: string);
    get Percentage(): number;
    set Percentage(value: number);
    updateParentItem(): void;
    setVerticalPosition(y: number): void;
    draw(): void;
    private _processControls;
    private _getProgress;
}
