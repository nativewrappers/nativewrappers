type Restricted = boolean | string | string[];
export interface ParameterTypes {
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
type CommandContextObject<T> = {
    source: number;
    raw: string;
    defaultValue?: T;
};
type CommandTypeParser<T> = (arg: string, context: CommandContextObject<T>) => T | undefined;
/**
 * Defines a parser for {@link Command} so that you can dynamically add new parsers,
 * or overwrite existing parsers to your needs.
 *
 *
 * You will need to declare a module to extend the parameter types, like so:
 *  declare module "@nativewrappers/{client|common|server}" {
 *   interface ParameterTypes {
 *     playerId: MyFrameworkPlayer; // your custom player return type here
 *   }
 * }
 *
 * @param name - the name of the parser to register
 * @param parser - the parser that will be ran for the specified type, the parser cannot be async, if validation
 * fails you can throw an error, this error will be printed to the console. It should
 * be noted that if there wasn't an argument for an index the parser will never get called.
 * @example
 * ```ts
 * registerParameterType("number", (arg) => {
 *   const num = parseInt(arg, 10);
 *   if (Number.isNaN(num)) {
 *     throw new TypeError(`could not parse argument into a valid number`);
 *   }
 *   return num;
 * });
 * ```
 */
export declare function registerParameterType<K extends keyof ParameterTypes>(name: K, parser: CommandTypeParser<ParameterTypes[K]>): void;
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
