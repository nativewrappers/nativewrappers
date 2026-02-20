import type { Color } from "../common/utils/Color";
import { Point } from "../utils/Point";
import { Size } from "../utils/Size";
import type { IDrawable } from "./interfaces/IDrawable";
export declare class Rectangle implements IDrawable {
    pos: Point;
    size: Size;
    color: Color;
    constructor(pos: Point, size: Size, color: Color);
    draw(offset?: Size, resolution?: Size): void;
    draw(pos: Point, size: Size, color: Color, resolution?: Size): void;
}
