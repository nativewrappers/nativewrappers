import type { Color } from "../../common/utils/Color";
import type { Point } from "../../utils/Point";
import type { Size } from "../../utils/Size";
export interface IDrawable {
    pos: Point;
    size?: Size;
    color?: Color;
    draw(offset?: Size, resolution?: Size): void;
}
