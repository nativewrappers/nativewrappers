import { Alignment, Font } from "../enums";
import { Color, Point, Size } from "../utils";
import { type IDrawable } from "./";
export declare class Text implements IDrawable {
    static draw(caption: string, pos: Point, scale?: number, color?: Color, font?: Font, alignment?: Alignment, dropShadow?: boolean, outline?: boolean, wordWrap?: Size, resolution?: Size): void;
    static addLongString(str: string): void;
    caption: string;
    pos: Point;
    scale: number;
    color: Color;
    font: Font;
    alignment: Alignment;
    dropShadow: boolean;
    outline: boolean;
    wordWrap: Size;
    /**
     *
     * @param caption Text to display
     * @param pos Position of text relative to alignment. In pixels.
     * @param scale Size of text. Default 1.0
     * @param color Color of text. Default black.
     * @param font Font of text. Default Chalet London.
     * @param alignment Alignment of text. Default Left.
     * @param dropShadow
     * @param outline
     * @param wordWrap
     */
    constructor(caption: string, pos: Point, scale?: number, color?: Color, font?: Font, alignment?: Alignment, dropShadow?: boolean, outline?: boolean, wordWrap?: Size);
    draw(offset?: Size, resolution?: Size): void;
    draw(caption: string, pos: Point, scale: number, color?: Color, font?: Font, alignment?: Alignment, dropShadow?: boolean, outline?: boolean, wordWrap?: Size, resolution?: Size): void;
}
