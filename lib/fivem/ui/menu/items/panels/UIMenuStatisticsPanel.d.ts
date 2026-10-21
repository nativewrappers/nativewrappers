import { Rectangle } from "../../../../ui/Rectangle";
import { AbstractUIMenuPanel } from "./AbstractUIMenuPanel";
import type { UIMenuStatisticsPanelItem } from "./UIMenuStatisticsPanelItem";
export declare class UIMenuStatisticsPanel extends AbstractUIMenuPanel {
    protected readonly background: Rectangle;
    private _divider;
    private _items;
    constructor(item?: UIMenuStatisticsPanelItem[] | UIMenuStatisticsPanelItem, divider?: boolean);
    get Divider(): boolean;
    set Divider(value: boolean);
    get Items(): UIMenuStatisticsPanelItem[];
    set Items(value: UIMenuStatisticsPanelItem[]);
    addItem(item: UIMenuStatisticsPanelItem | UIMenuStatisticsPanelItem[]): void;
    removeItem(itemOrIndex: UIMenuStatisticsPanelItem | number): void;
    setVerticalPosition(y: number): void;
    draw(): void;
}
