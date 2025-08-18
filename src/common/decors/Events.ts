import { GlobalData } from "@common/GlobalData";

/**
 * Disables pretty printing in error messages
 */
export const DisablePrettyPrint = () => (GlobalData.EnablePrettyPrint = false);

// TODO: Have a way to clean all of this up (maybe hook Symbol.disposable
// somehow?)

const AsyncFunction: any = (async () => {}).constructor;

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
      const _t = this as { __permissionMap?: Map<string | symbol, Set<string>> };
      onNet(eventName, async (...args: any[]) => {
        const src = source;

        // if the method has a permission map then try and see if our current context as a permisssion assigned to it
        if (_t.__permissionMap) {
          const permissions = _t.__permissionMap.get(context.name);
          if (permissions) {
            // we only need one permission to pass
            let hasPermission = false;
            for (const perm of permissions) {
              if (IsPlayerAceAllowed(src as any, perm)) {
                // we have that permission! woo!
                hasPermission = true;
                break;
              }
            }

            if (!hasPermission) {
              emit("@nativewrappers:no_permission", { eventName, method: context.name });
              return;
            }
          }
        }

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

export type NuiCallback = (data: string) => void;

/**
 * Registers the NUI Event call for {eventName} to this method, the function signature
 * will always be (data: unknown, cb: (data?: any) => void) => void
 *
 * There's two valid ways to return data into a callback, returning in the method
 * you're currently using will automatically call the callback, or you can manually call the callback yourself
 *
 * @param eventName the event this will listen for
 * @param dontErrorWhenCbIsntInvoked this will just block the event fro merroring when the callback is never invoked.
 */
export function NuiEvent(eventName: string, dontErrorWhenCbIsntInvoked = false) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("NuiEvent does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function () {
      RegisterNuiCallback(eventName, async (data: any, cb: NuiCallback) => {
        let wasInvoked = false;

        // wrap the callback so if it gets called we don't try and invoke again if they return something too.
        const cbWrapper = (args: string) => {
          wasInvoked = true;
          cb(args);
        };

        const retData = await originalMethod.call(this, data, cbWrapper);

        if (!wasInvoked && !retData) {
          if (dontErrorWhenCbIsntInvoked) return;
          throw new Error(
            `Error in NuiEvent ${eventName} '@NuiEvent' expects you to return data in your callback, or to return from the function call`,
          );
        }

        if (!wasInvoked) {
          cb(retData);
        }
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
