import { Player } from "./models/Player";
export declare class GameConstants {
    private static player;
    static readonly PlayerId: number;
    static readonly ServerId: number;
    static get Player(): Player;
}
