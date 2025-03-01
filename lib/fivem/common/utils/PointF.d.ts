export interface PointF {
    x: number;
    y: number;
    z: number;
}
export declare class PointF implements PointF {
    x: number;
    y: number;
    z: number;
    static empty(): PointF;
    constructor(x: number, y: number, z: number);
}
