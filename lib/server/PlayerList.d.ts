import { Player } from "./entities/Player";
export type PlayerMap = Map<number, Player>;
/**
 * A static helper class that will automatically handle adding/removing players from
 * a shared player map.
 *
 * This should be preferred over using constant calls to `getPlayers` since it will
 * have marginally less overhead
 */
export declare class PlayerList {
    private static playerMap;
    static get AllPlayers(): Readonly<PlayerMap>;
}
