import { Rectangle, Text } from "../../../";
export declare class UIMenuStatisticsPanelItem {
    readonly id: string;
    readonly text: Text;
    readonly activeBar: Rectangle;
    readonly backgroundBar: Rectangle;
    readonly divider: Rectangle[];
    constructor(name: string, percentage?: number);
    get Name(): string;
    set Name(value: string);
    get Percentage(): number;
    set Percentage(value: number);
}
