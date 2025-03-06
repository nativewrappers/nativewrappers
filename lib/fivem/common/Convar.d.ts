export declare class Convar {
    /**
     * @returns the current console buffer
     */
    buffer(): string;
    get(variable: string, defaultVar: string): string;
    getInt(variable: string, defaultVar: number): number;
    getFloat(varName: string, defaultVar: number): number;
    getBool(varName: string, defaultVar: boolean): boolean;
    set(variable: string, value: string): void;
    setReplicated(variable: string, value: string): void;
    setServerInfo(variable: string, value: string): void;
}
