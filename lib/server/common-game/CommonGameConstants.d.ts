import { CommonPlayer } from "./entities/CommonPlayer";
export declare class CommonGameConstants {
    private static player;
    static readonly PlayerId: number;
    static readonly ServerId: number;
    static get Player(): CommonPlayer;
}
