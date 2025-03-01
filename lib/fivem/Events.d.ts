export type NetEvent = (...args: any[]) => void;
export declare class Events {
    /**
     * An onNet wrapper that properly converts the type into the correct type
     */
    static onNet: (eventName: string, event: NetEvent) => void;
    /**
     * An on wrapper that properly converts the classes
     */
    static on: (eventName: string, event: NetEvent) => void;
}
