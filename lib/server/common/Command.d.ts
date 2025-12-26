type Restricted = boolean | string | string[];
interface ParameterTypes {
    number: number;
    playerId: number;
    string: string;
    longString: string;
}
interface Parameter {
    name: string;
    type: keyof ParameterTypes;
    defaultValue?: any;
    help?: string;
    optional?: boolean;
}
type MappedParameters<T extends Parameter[]> = {
    [K in T[number] as K["name"]]: ParameterTypes[K["type"]];
} & {
    source: number;
    raw: string;
};
type CommandHandler<T extends Parameter[]> = (args: MappedParameters<T>) => void | Promise<void>;
/**
 * ```typescript
 * new Command(["do", "deleteobjects"], async ({source, radius}) => {
 *   const entities = Prop.AllProps();
 *   const ply = new Player(source);
 *   const pos = ply.Ped.Position
 *   for (const ent of entities) {
 *     // if they're outside of the range of our specified radius just continue to next
 *     if (ent.Position.distance(pos) > radius) continue;
 *     ent.delete();
 *   }
 * }, "Deletes all objects in the specified range", [
 *   {
 *      name: "radius",
 *      type: "number",
 *      help: "The radius to delete the entities in",
 *      defaultValue: 5.0
 *   }
 * ] as const, "group.moderator")
 *  ```
 */
export declare class Command<T extends Parameter[] = Parameter[]> {
    #private;
    readonly name: string | string[];
    readonly help?: string | undefined;
    readonly params?: T | undefined;
    /**
     * Registers a new executable command with optional parameter validation and permission restrictions.
     * @param name The unique identifier(s) for the command, either as a single string or an array of strings.
     * @param handler The function to execute when the command is executed.
     * @param help A description of the command, displayed as a chat suggestion.
     * @param params An optional array of parameter definitions specifying the command's expected arguments,
     *               including their names, types, and descriptive help text for chat suggestions.
     * @param restricted Determines the command's access permissions:
     *                   - Defaults to `true`, restricting usage to users with the "command.commandName" ACE permission.
     *                   - A string such as `"group.admin"` grants the command permission to the specified principal.
     *                   - An array of strings grants permission to multiple principals.
     */
    constructor(name: string | string[], handler: CommandHandler<T>, help?: string | undefined, params?: T | undefined, restricted?: Restricted);
    /**
     * Maps the arguments received from a command call to the defined parameters while validating the argument types.
     * @param source The client that executed the command, or -1 if executed by the server.
     * @param args The arguments passed to the command.
     * @param raw The raw input string passed to the command.
     * @returns A mapped object containing parsed parameters.
     */
    private mapArguments;
    /**
     * Executes the command with the given arguments and source, validating and mapping the arguments before calling the handler.
     * @param source The client that executed the command.
     * @param args The arguments passed to the command.
     * @param raw The raw input string passed to the command.
     */
    call(source: number, args: string[], raw?: string): Promise<void>;
}
export {};
