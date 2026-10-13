import type { Rectangle } from "../../../../ui/Rectangle";
import { Sprite } from "../../../../ui/Sprite";
import { Menu } from "../../Menu";
import type { UIMenuItem } from "../UIMenuItem";
export declare abstract class AbstractUIMenuPanel {
    readonly id: string;
    protected parentItem?: UIMenuItem;
    protected enabled: boolean;
    protected readonly background?: Sprite | Rectangle;
    get ParentMenu(): Menu | undefined;
    get ParentItem(): UIMenuItem | undefined;
    set ParentItem(value: UIMenuItem | undefined);
    get Enabled(): boolean;
    set Enabled(value: boolean);
    get Height(): number;
    setVerticalPosition(y: number): void;
    draw(): void;
}
