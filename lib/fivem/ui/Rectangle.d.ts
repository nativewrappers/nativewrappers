import { type Color, Point, Size } from "../utils";
import { type IDrawable } from "./";
export declare class Rectangle implements IDrawable {
    pos: Point;
    size: Size;
    color: Color;
    constructor(pos: Point, size: Size, color: Color);
    draw(offset?: Size, resolution?: Size): void;
    draw(pos: Point, size: Size, color: Color, resolution?: Size): void;
}
