export declare class Point {
    static parse(arg: [number, number] | {
        X: number;
        Y: number;
    } | string): Point;
    X: number;
    Y: number;
    constructor(x?: number, y?: number);
}
