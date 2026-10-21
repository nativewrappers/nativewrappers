export declare function GetBufferAsHex(buffer: DataView): string;
export declare abstract class BufferedClass {
    buffer: ArrayBuffer;
    view: DataView;
    constructor(bufferSize: number);
}
