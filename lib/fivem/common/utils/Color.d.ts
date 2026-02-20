export declare class Color {
    static Transparent: Color;
    static Black: Color;
    static White: Color;
    static WhiteSmoke: Color;
    static fromArgb(a: number, r: number, g: number, b: number): Color;
    static fromRgb(r: number, g: number, b: number): Color;
    static fromArray(primitive: [number, number, number] | number[]): Color;
    a: number;
    r: number;
    g: number;
    b: number;
    constructor(r: number, g: number, b: number, a?: number);
}
