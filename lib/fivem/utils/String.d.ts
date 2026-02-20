import { Font } from "../enums/Font";
export declare abstract class _String {
    static stringToArray(input: string): string[];
    static measureStringWidthNoConvert(input: string, font?: Font, scale?: number): number;
    static measureString(str: string, font?: Font, scale?: number, screenWidth?: number): number;
}
