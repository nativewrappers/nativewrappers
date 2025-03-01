import { Player } from "./entities/Player";
export type NetEvent = (player: Player, ...args: any[]) => void;
export type LocalEvent = (...args: any[]) => void;
export declare class Events {
    static cancel(): void;
    static wasCanceled(): boolean;
    static get InvokingResource(): string;
    /**
     * An onNet wrapper that properly converts the type into the correct type
     */
    static onNet: (eventName: string, event: NetEvent) => void;
    /**
     * An on wrapper that properly converts the classes
     */
    static on: (eventName: string, event: LocalEvent) => void;
}
