export declare enum ConVarType {
    String = 0,
    Integer = 1,
    Float = 2,
    Boolean = 3
}
/**
 * Disables pretty printing in error messages
 */
export declare const DisablePrettyPrint: () => boolean;
export declare function Exports(exportName: string): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
/**
 * Registers the Event call for {@link eventName} to this method.
 *
 * This has internal pretty-printing to make errors easier to track, if
 * you want to disable this you will need to call {@link DisablePrettyPrint}, or if you're
 * using esbuild you can add `REMOVE_EVENT_LOG` to your drop label {@link https://esbuild.github.io/api/#drop-labels}
 *
 * @param eventName the event to bind to
 */
export declare function Event(eventName: string): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
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
export declare function NetEvent(eventName: string, remoteOnly?: boolean): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
/**
 * Registers the NUI Event call for {eventName} to this method, the function signature
 * should be (data: unknown, cb: (data?: any) => void) => void
 * You shoud always execute `cb` with 'ok' if you don't want to send data back to
 * the UI, otherwise you'll cause a network error for the `fetch` request
 * @param eventName the event this will listen for
 */
export declare function NuiEvent(eventName: string): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
type DeserializeFn<T> = (data: T) => unknown;
/**
 * Gets the specified `ConVar`s value, this will bind to the param.
 * @param name the convar name
 * @param is_floating_point if the convar is floating point, this should be explicitly set to true if your convar will be a float
 */
export declare function ConVar<T>(name: string, is_floating_point?: boolean, deserialize?: DeserializeFn<T>): (_initialValue: any, context: ClassFieldDecoratorContext, ..._args: any[]) => void;
/**
 * Gets called per server/client tick, this is asyncronous though, if you await
 * in it, it will not be called until whatever was being awaited resolves.
 */
export declare function SetTick(): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
export {};
