import { CheckboxStyle } from "../../../enums/CheckboxStyle";
import { LiteEvent } from "../../../utils/LiteEvent";
import { UIMenuItem } from "./UIMenuItem";
export declare class UIMenuCheckboxItem extends UIMenuItem {
    readonly checkboxChanged: LiteEvent;
    protected supportsRightBadge: boolean;
    protected supportsRightLabel: boolean;
    private _checked;
    private _style;
    private readonly _checkboxSprite;
    constructor(text: string, checked?: boolean, description?: string, style?: CheckboxStyle);
    get Checked(): boolean;
    set Checked(value: boolean);
    get Style(): CheckboxStyle;
    set Style(value: CheckboxStyle);
    setVerticalPosition(y: number): void;
    draw(): void;
    private _getSpriteName;
    private _getSpriteColor;
}
