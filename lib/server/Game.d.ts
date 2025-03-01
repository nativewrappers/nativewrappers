import { Player } from "./entities/Player";
export declare abstract class Game {
    static hashCache: Map<string, number>;
    /**
     * Calculate the Jenkins One At A Time (joaat) has from the given string.
     *
     * @param input The input string to calculate the hash
     */
    static generateHash(input: string): number;
    /**
     * Gets how many milliseconds the game has been open this session
     */
    static get GameTime(): number;
    static get GameBuild(): number;
    static get GameName(): string;
    static registerCommand(name: string, handler: (player: Player, args: any[]) => void, restricted?: boolean): void;
    static get RegisteredCommands(): [{
        name: string;
    }];
    /**
     * Get an iterable list of players currently on the server.
     * @returns Iterable list of Player objects.
     */
    static PlayerList(): IterableIterator<Player>;
}
