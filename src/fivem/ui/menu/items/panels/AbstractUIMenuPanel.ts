import type { UIMenuItem } from "../";
import { Crypto } from "../../../../utils";
import { type Rectangle, Sprite } from "../../../";
import { Menu } from "../../";

export abstract class AbstractUIMenuPanel {
  public readonly id: string = Crypto.uuidv4();

  protected parentItem?: UIMenuItem;
  protected enabled = true;

  protected readonly background?: Sprite | Rectangle;

  public get ParentMenu(): Menu | undefined {
    return this.parentItem ? this.parentItem.parent : undefined;
  }

  public get ParentItem(): UIMenuItem | undefined {
    return this.parentItem;
  }

  public set ParentItem(value: UIMenuItem | undefined) {
    this.parentItem = value;
  }

  public get Enabled(): boolean {
    return this.enabled;
  }

  public set Enabled(value: boolean) {
    this.enabled = value;
  }

  public get Height(): number {
    return this.background ? this.background.size.height : 0;
  }

  public setVerticalPosition(y: number): void {
    if (this.background) this.background.pos.Y = y;
  }

  public draw(): void {
    if (this.background) {
      this.background.size.width =
        431 + (this.ParentMenu ? this.ParentMenu.WidthOffset : 0);
      this.background.pos.X = this.parentItem ? this.parentItem.offset.X : 0;
      if (this.background instanceof Sprite) {
        this.background.draw(Menu.screenResolution);
      } else {
        this.background.draw(undefined, Menu.screenResolution);
      }
    }
  }
}
