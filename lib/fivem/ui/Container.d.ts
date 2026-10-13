import type { Color } from "../common/utils/Color";
import type { Point } from "../utils/Point";
import { Size } from "../utils/Size";
import type { IDrawable } from "./interfaces/IDrawable";
export declare class Container implements IDrawable {
    pos: Point;
    size: Size;
    color: Color;
    items: IDrawable[];
    constructor(pos: Point, size: Size, color: Color);
    addItem(items: IDrawable | IDrawable[]): void;
    draw(offset?: Size, resolution?: Size): void;
}
