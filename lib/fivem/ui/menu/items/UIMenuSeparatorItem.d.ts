import { UIMenuItem } from "./UIMenuItem";
export declare class UIMenuSeparatorItem extends UIMenuItem {
    protected supportsDescription: boolean;
    protected supportsPanels: boolean;
    protected supportsLeftBadge: boolean;
    protected supportsRightBadge: boolean;
    protected supportsRightLabel: boolean;
    constructor(text?: string);
    setVerticalPosition(y: number): void;
    draw(): void;
}
