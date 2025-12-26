var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { GlobalData } from "./GlobalData";
const commands = [];
$SERVER: {
  on("playerJoining", () => emitNet("chat:addSuggestions", source, commands));
}
function registerCommand(name, commandHandler, restricted = true) {
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
__name(registerCommand, "registerCommand");
class Command {
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
  constructor(name, handler, help, params, restricted = true) {
    this.name = name;
    this.help = help;
    this.params = params;
    this.#handler = handler;
    registerCommand(name, (source2, args, raw) => this.call(source2, args, raw), restricted);
    if (params) {
      for (const parameter of params) {
        if (parameter.type) {
          const defaultString = parameter.defaultValue !== void 0 ? `[default: ${parameter.defaultValue}]` : "";
          const typeString = `[type: ${parameter.type}] ${defaultString}`;
          parameter.help = parameter.help ? `${parameter.help} ${typeString}` : `${typeString}`;
        }
      }
    }
    setTimeout(() => {
      const names = Array.isArray(name) ? name : [name];
      for (const name2 of names) {
        const commandObj = { ...this, name: `/${name2}` };
        if (GlobalData.IS_CLIENT) {
          emit("chat:addSuggestion", commandObj);
        } else {
          commands.push(commandObj);
          emitNet("chat:addSuggestions", -1, commandObj);
        }
      }
    }, 100);
  }
  static {
    __name(this, "Command");
  }
  #handler;
  /**
   * Maps the arguments received from a command call to the defined parameters while validating the argument types.
   * @param source The client that executed the command, or -1 if executed by the server.
   * @param args The arguments passed to the command.
   * @param raw The raw input string passed to the command.
   * @returns A mapped object containing parsed parameters.
   */
  mapArguments(source2, args, raw) {
    const mapped = {
      source: source2,
      raw
    };
    if (!this.params) return mapped;
    const result = this.params.every((param, index) => {
      const arg = args[index];
      let value = arg;
      const hasDefaultValue = param.defaultValue !== void 0;
      const hasArg = typeof arg === "string";
      if (!hasArg && hasDefaultValue) {
        value = param.defaultValue;
      } else {
        switch (param.type) {
          case "number":
            if (hasDefaultValue && !hasArg) {
              value = param.defaultValue;
            } else {
              value = +arg;
            }
            break;
          case "string":
            value = !Number(arg) ? arg : false;
            break;
          case "playerId":
            $SERVER: {
              value = arg === "me" ? source2 : +arg;
              if (!value || !DoesPlayerExist(value.toString())) value = void 0;
            }
            $CLIENT: {
              value = arg === "me" ? GetPlayerServerId(PlayerId()) : +arg;
              if (!value || GetPlayerFromServerId(value) === -1) value = void 0;
            }
            break;
          case "longString":
            value = raw.substring(raw.indexOf(arg));
            break;
        }
      }
      if (value === void 0 && (!param.optional || param.optional && arg)) {
        return Citizen.trace(
          `^1command '${raw.split(" ")[0] || raw}' received an invalid ${param.type} for argument ${index + 1} (${param.name}), received '${arg}'^0`
        );
      }
      mapped[param.name] = value;
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
  async call(source2, args, raw = args.join(" ")) {
    const parsed = this.mapArguments(source2, args, raw);
    if (!parsed) return;
    try {
      await this.#handler(parsed);
    } catch (err) {
      Citizen.trace(`^1command '${raw.split(" ")[0] || raw}' failed to execute!^0
${err.message}`);
    }
  }
}
export {
  Command
};
