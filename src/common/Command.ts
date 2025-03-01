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

if (GlobalData.IS_SERVER) {
  on("playerJoining", () => emitNet("chat:addSuggestions", source, commands));
}

type MappedParameters<T extends Parameter[]> = {
  [K in T[number] as K["name"]]: ParameterTypes[K["type"]];
} & { source: number; raw: string };

type CommandHandler<T extends Parameter[]> = (
  args: MappedParameters<T>,
) => void | Promise<void>;

function registerCommand(
  name: string | string[],
  commandHandler: Function,
  restricted?: Restricted,
) {
  if (Array.isArray(name))
    return name.forEach((name) =>
      registerCommand(name, commandHandler, restricted),
    );

  RegisterCommand(name, commandHandler, !!restricted);

  if (GlobalData.IS_CLIENT) return;

  const ace = `command.${name}`;

  if (typeof restricted === "string") {
    if (IsPrincipalAceAllowed(restricted, ace)) return;

    return ExecuteCommand(`add_ace ${restricted} ${ace} allow`);
  }

  if (Array.isArray(restricted)) {
    restricted.forEach(
      (principal) =>
        !IsPrincipalAceAllowed(principal, ace) &&
        ExecuteCommand(`add_ace ${restricted} ${ace} allow`),
    );
  }
}

export class Command<T extends Parameter[] = Parameter[]> {
  #handler: CommandHandler<T>;

  constructor(
    readonly name: string | string[],
    readonly help: string,
    handler: CommandHandler<T>,
    readonly params?: T,
    restricted: Restricted = true,
  ) {
    this.#handler = handler;
    this.name = `/${name}`;

    registerCommand(
      name,
      (source: number, args: string[], raw: string) =>
        this.call(source, args, raw),
      restricted,
    );

    if (params) {
      params.forEach((param) => {
        if (param.type)
          param.help = param.help
            ? `${param.help} (type: ${param.type})`
            : `(type: ${param.type})`;
      });

      setTimeout(() => {
        if (GlobalData.IS_SERVER) {
          commands.push(this);
          return emitNet("chat:addSuggestions", -1, this);
        }

        emit("chat:addSuggestion", this);
      }, 100);
    }
  }

  private mapArguments(
    source: number,
    args: string[],
    raw: string,
  ): MappedParameters<T> | null {
    const mapped = {
      source,
      raw,
    } as MappedParameters<T>;

    if (!this.params) return mapped;

    const result = this.params.every((param, index) => {
      const arg = args[index];
      let value: any = arg;

      switch (param.type) {
        case "number":
          value = +arg;
          break;
        case "string":
          value = !Number(arg) ? arg : false;
          break;
        case "playerId":
          if (GlobalData.IS_SERVER) {
            value = arg === "me" ? source : +arg;

            if (!value || !DoesPlayerExist(value.toString())) value = undefined;
          } else {
            value = arg === "me" ? GetPlayerServerId(PlayerId()) : +arg;

            if (!value || GetPlayerFromServerId(value) === -1)
              value = undefined;
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

      mapped[param.name as keyof MappedParameters<T>] = value;

      return true;
    });

    return result ? mapped : null;
  }

  public async call(
    source: number,
    args: string[],
    raw: string = args.join(" "),
  ) {
    const parsed = this.mapArguments(source, args, raw);

    if (!parsed) return;

    try {
      await this.#handler(parsed);
    } catch (err: any) {
      Citizen.trace(
        `^1command '${raw.split(" ")[0] || raw}' failed to execute!^0\n${err.message}`,
      );
    }
  }
}
