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
export declare class Command<T extends Parameter[] = Parameter[]> {
    #private;
    readonly name: string | string[];
    readonly help: string;
    readonly params?: T | undefined;
    constructor(name: string | string[], help: string, handler: CommandHandler<T>, params?: T | undefined, restricted?: Restricted);
    private mapArguments;
    call(source: number, args: string[], raw?: string): Promise<void>;
}
export {};
