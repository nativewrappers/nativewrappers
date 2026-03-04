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
export declare function OnEvent(eventName: string): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
/**
 * @deprecated use OnEvent instead, this will be removed upon 2.0
 */
export declare const Event: typeof OnEvent;
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
export declare function OnNetEvent(eventName: string, remoteOnly?: boolean): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
/**
 * @deprecated Use `OnNetEvent` instead this will be removed upon 2.0
 */
export declare const NetEvent: typeof OnNetEvent;
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
export declare function OnNuiEvent(eventName: string, dontErrorWhenCbIsntInvoked?: boolean): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
/**
 * @deprecated use OnNuiEvent instead
 */
export declare const NuiEvent: typeof OnNuiEvent;
