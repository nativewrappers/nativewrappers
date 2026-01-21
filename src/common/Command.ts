import { GlobalData } from "./GlobalData";

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

const commands: Partial<Command>[] = [];

$SERVER: {
  (() => {
    $CLIENT: if (GlobalData.IS_CLIENT) return;
    on("playerJoining", () => emitNet("chat:addSuggestions", source, commands));
  })();
}

type MappedParameters<T extends Parameter[]> = {
  [K in T[number] as K["name"]]: ParameterTypes[K["type"]];
} & { source: number; raw: string };

type CommandHandler<T extends Parameter[]> = (args: MappedParameters<T>) => void | Promise<void>;

function registerCommand(
  name: string | string[],
  commandHandler: (source: number, args: string[], raw: string) => void,
  restricted: Restricted = true,
) {
  if (Array.isArray(name)) {
    for (const command of name) {
      registerCommand(command, commandHandler, restricted);
    }

    return;
  }

  RegisterCommand(name, commandHandler, GlobalData.IS_CLIENT ? false : !!restricted);

  $SERVER: {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) return;
    }
    const ace = `command.${name}`;

    if (typeof restricted === "string") {
      if (IsPrincipalAceAllowed(restricted, ace)) return;

      return ExecuteCommand(`add_ace ${restricted} ${ace} allow`);
    }

    if (Array.isArray(restricted)) {
      for (const principal of restricted) {
        if (!IsPrincipalAceAllowed(principal, ace)) ExecuteCommand(`add_ace ${restricted} ${ace} allow`);
      }
    }
  }
}

type CommandContextObject<T> = {
  source: number;
  raw: string;
  defaultValue?: T;
};

type CommandTypeParser<T> = (arg: string, context: CommandContextObject<T>) => T | undefined;

const commandTypeParserRegistry = new Map<string, CommandTypeParser<any>>();

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
export function registerParameterType<K extends keyof ParameterTypes>(
  name: K,
  parser: CommandTypeParser<ParameterTypes[K]>,
): void {
  commandTypeParserRegistry.set(name, parser);
}

registerParameterType("number", (arg) => {
  const num = parseInt(arg, 10);
  if (Number.isNaN(num)) {
    throw new TypeError(`could not parse argument into a valid number`);
  }
  return num;
});

registerParameterType("string", (arg) => {
  return arg;
});

(() => {
  $CLIENT: if (GlobalData.IS_CLIENT) {
    registerParameterType("playerId", (arg) => {
      const isMe = arg === "me";
      const target = isMe ? GetPlayerServerId(PlayerId()) : parseInt(arg, 10);
      if (Number.isNaN(target)) {
        throw new TypeError(`could not parse argument into a valid playerId`);
      }

      // if we set the target to "me" then we want to early return, since the
      // GetPlayerFromServerId check will fail since our local client will be -1
      if (isMe) {
        return target;
      }

      if (GetPlayerFromServerId(target) === -1) {
        throw new Error(`player with server id $${target} didn't exist`);
      }

      return target;
    });

    return;
  }

  $SERVER: {
    registerParameterType("playerId", (arg, { source }) => {
      const target = arg === "me" ? source : parseInt(arg, 10);
      if (Number.isNaN(target)) {
        throw new TypeError(`could not parse argument into a valid playerId`);
      }

      if (!DoesPlayerExist(target as unknown as string)) {
        throw new Error(`player at ${source} didn't exist`);
      }

      return target;
    });
  }
})();

registerParameterType("longString", (arg, { raw }) => {
  return raw.substring(raw.indexOf(arg));
});

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
export class Command<T extends Parameter[] = Parameter[]> {
  #handler: CommandHandler<T>;

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
  constructor(
    readonly name: string | string[],
    handler: CommandHandler<T>,
    readonly help?: string,
    readonly params?: T,
    restricted: Restricted = true,
  ) {
    this.#handler = handler;

    registerCommand(name, (source: number, args: string[], raw: string) => this.call(source, args, raw), restricted);

    if (params) {
      for (const parameter of params) {
        if (parameter.type) {
          const defaultString = parameter.defaultValue !== undefined ? `[default: ${parameter.defaultValue}]` : "";
          const typeString = `[type: ${parameter.type}] ${defaultString}`;
          parameter.help = parameter.help ? `${parameter.help} ${typeString}` : `${typeString}`;
        }
      }
    }

    setTimeout(() => {
      const names = Array.isArray(name) ? name : [name];
      for (const name of names) {
        const commandObj = { ...this, name: `/${name}` };

        if (GlobalData.IS_CLIENT) {
          emit("chat:addSuggestion", commandObj);
        } else {
          commands.push(commandObj);
          emitNet("chat:addSuggestions", -1, commandObj);
        }
      }
    }, 100);
  }

  /**
   * Maps the arguments received from a command call to the defined parameters while validating the argument types.
   * @param source The client that executed the command, or -1 if executed by the server.
   * @param args The arguments passed to the command.
   * @param raw The raw input string passed to the command.
   * @returns A mapped object containing parsed parameters.
   */
  private mapArguments(source: number, args: string[], raw: string): MappedParameters<T> | null {
    const mapped = {
      source,
      raw,
    } as MappedParameters<T>;

    if (!this.params) return mapped;

    const defaultContextObject: CommandContextObject<any> = {
      source,
      raw,
    };

    const result = this.params.every((param, index) => {
      const arg = args[index];
      let value: unknown = arg;

      const hasArg = typeof arg === "string";

      if (!hasArg) {
        value = param.defaultValue;
      } else {
        const parser = commandTypeParserRegistry.get(param.type);
        if (!parser) {
          console.error(
            `${param.type} didn't have a valid parser, did you forget to register it with 'registerParameterType'?`,
          );
          return false;
        }

        try {
          value = parser(arg, defaultContextObject);
        } catch (e) {
          globalThis.printError("command parsing", e as Error);
          return false;
        }

        defaultContextObject.defaultValue = param.defaultValue;
      }

      if (value === undefined && (!param.optional || (param.optional && arg))) {
        return Citizen.trace(
          `^1command '${raw.split(" ")[0] || raw}' received an invalid ${param.type} for argument ${
            index + 1
          } (${param.name}), received '${arg}'^0`,
        );
      }

      mapped[param.name as keyof MappedParameters<T>] = value as any;

      return true;
    });

    return result ? mapped : null;
  }

  /**
   * Executes the command with the given arguments and source, validating and mapping the arguments before calling the handler.
   * @param source The client that executed the command.
   * @param args The arguments passed to the command.
   * @param raw The raw input string passed to the command.
   */
  public async call(source: number, args: string[], raw: string = args.join(" ")) {
    const parsed = this.mapArguments(source, args, raw);

    if (!parsed) return;

    try {
      await this.#handler(parsed);
    } catch (err: any) {
      Citizen.trace(`^1command '${raw.split(" ")[0] || raw}' failed to execute!^0\n${err.message}`);
    }
  }
}
