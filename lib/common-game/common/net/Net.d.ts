import type { MessageTypeEncoder } from "../decors/Proto";
type EventCallback = (...args: any[]) => void;
type RawEventCallback = (data: Uint8Array, source: `internal-net:${number}` | `net:${number}`) => void;
export declare class Net {
    static emit(eventName: string, ...args: any[]): void;
    static on(eventName: string, cb: EventCallback): void;
    static onNet(eventName: string, cb: EventCallback): void;
    static onRaw(eventName: string, cb: RawEventCallback): void;
    static onRawNet(eventName: string, cb: RawEventCallback): void;
}
export declare class NetServer extends Net {
    static emitNet(eventName: string, source: number, ...args: any[]): void;
    static emitProto<T>(source: number, message: MessageTypeEncoder<T>): void;
    static emitProtoToPlayers<T>(sources: number[], message: MessageTypeEncoder<T>): void;
    static emitRawNet(eventName: string, source: number, data: Uint8Array): void;
}
export declare class NetClient extends Net {
    static emitNet(eventName: string, source: number, ...args: any[]): void;
    static emitProto<T>(message: MessageTypeEncoder<T>): void;
    static emitRawNet(eventName: string, data: Uint8Array): void;
}
export {};
