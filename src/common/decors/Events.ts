import { ErrorType, GlobalData } from "@common/GlobalData";

// TODO: setup a BaseClass and make sure all non-static methods error, whenever
// we add this we should get rid of the deprecated functions.

const AsyncFunction: any = (async () => {}).constructor;

/**
 * Registers the Event call for {@link eventName} to this method.
 *
 * All errors that happen inside of the event will automatically be caught, these will still
 * output a FiveM stack trace.
 *
 * @note With all decors you can overwrite `globalThis.OnError` in order to hook into these errors to get more information or log them out to an external service, or to just disable the pretty printing.
 *
 * @param eventName - the event to bind to
 */
export function OnEvent(eventName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("Event does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function () {
      on(eventName, async (...args: any[]) => {
        try {
          return await originalMethod.call(this, ...args);
        } catch (e) {
          GlobalData.OnError(ErrorType.Event, e as Error, {
            name: eventName,
            args,
          });
        }
      });
    });
  };
}

/**
 * @deprecated use OnEvent instead, this will be removed upon 2.0
 */
export const Event = OnEvent;

/**
 * Registers the Net Event call for {@link eventName} to this method
 *
 * All errors that happen inside of the event will automatically be caught, these will still
 * output a FiveM stack trace.
 *
 * @note With all decors you can overwrite `globalThis.OnError` in order to hook into these errors to get more information or log them out to an external service, or to just disable the pretty printing.
 * @param eventName the event to bind this net event to
 * @param remoteOnly if the event should only accept remote calls, if set to true it will ignore any local call via `emit`, defaults to true
 */
export function OnNetEvent(eventName: string, remoteOnly = true) {
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
          GlobalData.OnError(ErrorType.NetEvent, e as Error, {
            name: eventName,
            source: src,
            args,
          });
        }
      });
    });
  };
}

/**
 * @deprecated Use `OnNetEvent` instead this will be removed upon 2.0
 */
export const NetEvent = OnNetEvent;

export type NuiCallback = (data: string) => void;

/**
 * Registers the NUI Event call for {@link eventName} to this method, the function signature
 * will always be `(data: unknown, cb: (data?: any) => void) => void`
 *
 * There's two valid ways to return data into a callback
 * 1. Returning in the method you're currently using will automatically call the callback
 * 2. You can manually call the callback yourself
 *
 * @note With all decors you can overwrite `globalThis.OnError` in order to hook into these errors to get more information or log them out to an external service, or to just disable the pretty printing.
 * @param eventName the event this will listen for
 * @param dontErrorWhenCbIsntInvoked this will just block the event fro merroring when the callback is never invoked.
 * @throws This will throw if you don't call `cb` or return data in the method.
 * If you move this call across task bounds and call the cb, this will still throw (say doing `setImmediate(() => cb("ok"));`)
 * You can disable this by setting {@link dontErrorWhenCbIsntInvoked} to `true`
 * @example
 * ```typescript
 * class NuiEventManager {
 *   #is_ui_ready = false;
 *   \@OnNuiEvent("ui_ready")
 *   on_ui_ready(data: unknown, cb: NuiCallback) {
 *     this.#is_ui_ready = true;
 *     // will invoke the callback itself
 *     return "ok";
 *     // cb("ok"); // you can use this too
 *   }
 * }
 * ```
 */
export function OnNuiEvent(eventName: string, dontErrorWhenCbIsntInvoked = false) {
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

        let retData: string;

        try {
          retData = await originalMethod.call(this, data, cbWrapper);
        } catch (e) {
          GlobalData.OnError(ErrorType.Nui, e as Error, { name: eventName });
          return;
        }

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
 * @deprecated use OnNuiEvent instead
 */
export const NuiEvent = OnNuiEvent;
