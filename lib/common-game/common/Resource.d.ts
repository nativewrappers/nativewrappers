export declare class Resource {
    name: string;
    constructor(name: string);
    getMetadata(metadataKey: string, index: number): string;
    getPath(): string;
    loadFile(fileName: string): string;
    saveFile(fileName: string, data: string, length: number): boolean;
    scheduleTick(): void;
    start(): void;
    stop(): void;
    static startResource(name: string): void;
    static stopResource(name: string): void;
    static resourceCount(): number;
}
