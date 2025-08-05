import { GlobalData } from "@common/GlobalData";

export enum ConVarType {
  String,
  Integer,
  Float,
  Boolean,
}

/**
 * Disables pretty printing in error messages
 */
export const DisablePrettyPrint = () => (GlobalData.EnablePrettyPrint = false);

// TODO: Have a way to clean all of this up (maybe hook Symbol.disposable
// somehow?)

const AsyncFunction: any = (async () => {}).constructor;

/*
 * Registers the export call for {exportName} to this method
 */
export function Exports(exportName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }

    context.addInitializer(function () {
      let exportCb: any;
      if (originalMethod instanceof AsyncFunction) {
        exportCb = async (...args: any[]) => {
          try {
            return await originalMethod.call(this, ...args);
          } catch (err) {
            REMOVE_EVENT_LOG: {
              if (!GlobalData.EnablePrettyPrint) return;
              console.error("------- EXPORT ERROR --------");
              console.error(`Call to ${exportName} errored`);
              console.error(`Data: ${JSON.stringify(args)}`);
              console.error(`Error: ${err}`);
              console.error("------- END EXPORT ERROR --------");
            }
            throw err;
          }
        };
      } else {
        exportCb = (...args: any[]) => {
          try {
            return originalMethod.call(this, ...args);
          } catch (err) {
            REMOVE_EVENT_LOG: {
              if (!GlobalData.EnablePrettyPrint) return;
              console.error("------- EXPORT ERROR --------");
              console.error(`Call to ${exportName} errored`);
              console.error(`Data: ${JSON.stringify(args)}`);
              console.error(`Error: ${err}`);
              console.error("------- END EXPORT ERROR --------");
            }
            throw err;
          }
        };
      }
      exports(exportName, exportCb);
    });
  };
}

/**
 * Registers the Event call for {@link eventName} to this method.
 *
 * This has internal pretty-printing to make errors easier to track, if
 * you want to disable this you will need to call {@link DisablePrettyPrint}, or if you're
 * using esbuild you can add `REMOVE_EVENT_LOG` to your drop label {@link https://esbuild.github.io/api/#drop-labels}
 *
 * @param eventName the event to bind to
 */
export function Event(eventName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("Event does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function () {
      on(eventName, async (...args: any[]) => {
        try {
          return await originalMethod.call(this, ...args);
        } catch (e) {
          REMOVE_EVENT_LOG: {
            if (!GlobalData.EnablePrettyPrint) return;
            console.error("------- EVENT ERROR --------");
            console.error(`Call to ${eventName} errored`);
            console.error(`Data: ${JSON.stringify(args)}`);
            console.error(`Error: ${e}`);
            console.error("------- END EVENT ERROR --------");
          }
        }
      });
    });
  };
}

/**
 * Registers the Event call for {@link eventName} to this method.
 *
 * This has internal pretty-printing to make errors easier to track, if
 * you want to disable this you will need to call {@link DisablePrettyPrint}, or if you're
 * using esbuild you can add `REMOVE_EVENT_LOG` to your drop label {@link https://esbuild.github.io/api/#drop-labels}
 *
 * This is the same thing as just using `Event` but this disambiguates the call from DOM
 * @param eventName the event to bind to
 */
export const CfxEvent = Event;

/**
 * Registers the Net Event call for {@link eventName} to this method
 *
 *
 * This has internal pretty-printing to make errors easier to track, if
 * you want to disable this you will need to call {@link DisablePrettyPrint}, or if you're
 * using esbuild you can add `REMOVE_EVENT_LOG` to your drop label {@link https://esbuild.github.io/api/#drop-labels}
 *
 * @param eventName the event to bind this net event to
 * @param remoteOnly if the event should only accept remote calls, if set to true it will ignore any local call via `emit`, defaults to true
 */
export function NetEvent(eventName: string, remoteOnly = true) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("NetEvent does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function () {
      onNet(eventName, async (...args: any[]) => {
        const src = source;
        try {
          $CLIENT: {
            if (GlobalData.IS_CLIENT && remoteOnly && source !== 65535) {
              return;
            }
          }
          return await originalMethod.call(this, ...args);
        } catch (e) {
          REMOVE_NET_EVENT_LOG: {
            if (!GlobalData.EnablePrettyPrint) return;
            console.error("------- NET EVENT ERROR --------");
            console.error(`Call to ${eventName} errored`);
            console.error(`Caller: ${src}`);
            console.error(`Data: ${JSON.stringify(args)}`);
            console.error(`Error: ${e}`);
            console.error("------- END NET EVENT ERROR --------");
          }
        }
      });
    });
  };
}

/**
 * Registers the NUI Event call for {eventName} to this method, the function signature
 * should be (data: unknown, cb: (data?: any) => void) => void
 * You shoud always execute `cb` with 'ok' if you don't want to send data back to
 * the UI, otherwise you'll cause a network error for the `fetch` request
 * @param eventName the event this will listen for
 */
export function NuiEvent(eventName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("NuiEvent does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function () {
      RegisterNuiCallback(eventName, (...args: any[]) => {
        return originalMethod.call(this, ...args);
      });
    });
  };
}

type ConVarFunction = (convarName: string, defaultValue: any) => any;

const get_convar_fn = (con_var_type: ConVarType): ConVarFunction => {
  switch (con_var_type) {
    case ConVarType.String:
      return GetConvar;
    case ConVarType.Integer:
      return GetConvarInt;
    case ConVarType.Float:
      return GetConvarFloat;
    case ConVarType.Boolean:
      return GetConvarBool;
    // needed so typescript wont complain about "unreachable code" for the error below
    default:
  }

  // never guess people wont manage to hit this
  throw new Error("Got invalid ConVarType");
};

type DeserializeFn<T> = (data: T) => unknown;

/**
 * Gets the specified `ConVar`s value, this will bind to the param.
 * @param name the convar name
 * @param is_floating_point if the convar is floating point, this should be explicitly set to true if your convar will be a float
 */
export function ConVar<T>(name: string, is_floating_point?: boolean, deserialize?: DeserializeFn<T>) {
  // the implementation shows that this will be _initialValue, but it doesn't
  // seem to actually be???
  return function actualDecorator(_initialValue: any, context: ClassFieldDecoratorContext, ..._args: any[]) {
    if (context.private) {
      throw new Error("ConVar does not work on private types, please mark the field as public");
    }
    context.addInitializer(function () {
      const t = this as any;

      const default_value = Reflect.get(t, context.name);
      const default_type = typeof default_value;
      let con_var_type: ConVarType | null = null;
      if (default_type === "number") {
        if (is_floating_point || !Number.isInteger(default_value)) {
          con_var_type = ConVarType.Float;
        } else {
          con_var_type = ConVarType.Integer;
        }
      } else if (default_type === "boolean") {
        con_var_type = ConVarType.Boolean;
      } else if (default_type === "string") {
        con_var_type = ConVarType.String;
      }

      // if we're not set that means our default value was not valid, and likely
      // undefined (which we should just get rid of) or an object, and the
      // caller should send a deserialize function to work with.
      if (!deserialize && con_var_type === null) {
        throw new Error(
          `Failed to determine what to use to deserialize '${name}' was for var had type '${default_type}' which can't be deserialized without providing your own deserialize function.`,
        );
      }

      // if we got past our previous check then we're going to take the data as
      // a string and pass it to the deserialize function
      if (con_var_type === null) {
        con_var_type = ConVarType.String;
      }

      const con_var_fn = get_convar_fn(con_var_type!);

      // nice and easy wrapper
      const get_convar_value = (): unknown => {
        const data = con_var_fn(name, default_value);
        return deserialize ? deserialize(data) : data;
      };

      Reflect.set(t, context.name, get_convar_value());
      AddConvarChangeListener(name, () => {
        Reflect.set(t, context.name, get_convar_value());
      });
    });
  };
}

/**
 * Gets called per server/client tick, this is asyncronous though, if you await
 * in it, it will not be called until whatever was being awaited resolves.
 */
export function SetTick() {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("SetTick does not work on private types, please mark the field as public");
    }
    context.addInitializer(function () {
      setTick(async () => {
        await originalMethod.call(this);
      });
    });
  };
}
