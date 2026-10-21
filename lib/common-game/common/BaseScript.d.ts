export declare enum State {
    Uninitialized = 0,
    Initialized = 1,
    Enabled = 2
}
export declare class BaseScript {
    private state;
    private events;
    private exports;
    private ticks;
    private statebags;
    private convars;
    get IsEnabled(): boolean;
    start(): void;
    stop(): void;
    startTick(name: string): void;
    stopTick(name: string): void;
}
