export declare enum ErrorType {
    Event = 0,
    NetEvent = 1,
    Export = 2,
    Nui = 3,
    Tick = 4,
    Immediate = 5,
    ConVar = 6
}
export type NativeWrapperErrorType = (type: ErrorType, err: Error) => void;
export interface ErrorData {
    name?: string;
    source?: number;
    args?: any | any[];
}
/**
 * A static class containing useful
 */
export declare class GlobalData {
    static CurrentResource: string;
    static GameName: string;
    static GameBuild: number;
    static IS_SERVER: boolean;
    static IS_REDM: boolean;
    static IS_FIVEM: boolean;
    static IS_CLIENT: boolean;
    static NetworkTick: number | null;
    static NetworkedTicks: any[];
    static OnError: (type: ErrorType, err: Error, errorData: ErrorData) => void;
}
