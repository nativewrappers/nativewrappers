import { GlobalData } from "./GlobalData";

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

const commands: Partial<Command>[] = [];

$SERVER: {
  on("playerJoining", () => emitNet("chat:addSuggestions", source, commands));
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
          parameter.help = parameter.help ? `${parameter.help} (type: ${parameter.type})` : `(type: ${parameter.type})`;
        }
      }
    }

    setTimeout(() => {
      const names = Array.isArray(name) ? name : [name];
      for (const name of names) {
        const commandObj = { ...this, name: `/${name}` };
        $SERVER: {
          commands.push(commandObj);
          emitNet("chat:addSuggestions", -1, commandObj);
        }

        $CLIENT: {
          emit("chat:addSuggestion", commandObj);
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

    const result = this.params.every((param, index) => {
      const arg = args[index];
      let value: unknown = arg;

      switch (param.type) {
        case "number":
          value = +arg;
          break;
        case "string":
          value = !Number(arg) ? arg : false;
          break;
        case "playerId":
          $SERVER: {
            value = arg === "me" ? source : +arg;

            if (!value || !DoesPlayerExist(value.toString())) value = undefined;
          }

          $CLIENT: {
            value = arg === "me" ? GetPlayerServerId(PlayerId()) : +arg;

            if (!value || GetPlayerFromServerId(value as number) === -1) value = undefined;
          }

          break;
        case "longString":
          value = raw.substring(raw.indexOf(arg));
          break;
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
