import { Color } from "@common/utils/Color";
import { Rectangle } from "fivem/ui/Rectangle";
import { Point } from "fivem/utils/Point";
import { Size } from "fivem/utils/Size";
import { Menu } from "../../Menu";
import { AbstractUIMenuPanel } from "./AbstractUIMenuPanel";
import type { UIMenuStatisticsPanelItem } from "./UIMenuStatisticsPanelItem";

export class UIMenuStatisticsPanel extends AbstractUIMenuPanel {
  protected readonly background: Rectangle;

  private _divider = true;
  private _items: UIMenuStatisticsPanelItem[] = [];

  constructor(item?: UIMenuStatisticsPanelItem[] | UIMenuStatisticsPanelItem, divider = true) {
    super();
    this.background = new Rectangle(new Point(), new Size(431, 47), new Color(0, 0, 0, 170));
    if (item) {
      this.addItem(item);
    }
    this.Divider = divider;
  }

  public get Divider(): boolean {
    return this._divider;
  }

  public set Divider(value: boolean) {
    this._divider = value || false;
  }

  public get Items(): UIMenuStatisticsPanelItem[] {
    return this._items;
  }

  public set Items(value: UIMenuStatisticsPanelItem[]) {
    this._items = value;
  }

  public addItem(item: UIMenuStatisticsPanelItem | UIMenuStatisticsPanelItem[]): void {
    const items = Array.isArray(item) ? item : [item];
    this._items.push(...items);
  }

  public removeItem(itemOrIndex: UIMenuStatisticsPanelItem | number): void {
    if (typeof itemOrIndex === "number") {
      this._items = this._items.filter((i, index) => index !== itemOrIndex);
    } else {
      this._items = this._items.filter((i) => i.id !== itemOrIndex.id);
    }
  }

  public setVerticalPosition(y: number): void {
    super.setVerticalPosition(y);
    this._items.forEach(async (item, index) => {
      const itemCountOffset = 40 * (index + 1);
      const yOffset = y + itemCountOffset - 22;
      item.backgroundBar.pos.Y = yOffset;
      item.activeBar.pos.Y = yOffset;
      item.text.pos.Y = yOffset - 12;
      if (this._divider) {
        item.divider.forEach(async (divider) => {
          divider.pos.Y = yOffset;
        });
      }
    });
  }

  public draw(): void {
    if (this.enabled) {
      super.draw();

      const x = this.parentItem?.offset.X ?? 0 + (this.ParentMenu?.WidthOffset ?? 0) / 2;
      this._items.forEach(async (item, index) => {
        const itemCountOffset = 40 * (index + 1);
        item.backgroundBar.pos.X = x + 200;
        item.activeBar.pos.X = x + 200;
        item.text.pos.X = x + 13;

        item.backgroundBar.draw(undefined, Menu.screenResolution);
        item.activeBar.draw(undefined, Menu.screenResolution);
        item.text.draw(undefined, Menu.screenResolution);
        if (this._divider) {
          item.divider.forEach(async (divider, index) => {
            const dividerWidthOffset = (index + 1) * 40;
            divider.pos.X = x + dividerWidthOffset + 200;
            this.background.size.height = itemCountOffset + 47 - 39;

            divider.draw(undefined, Menu.screenResolution);
          });
        }
      });
    }
  }
}
