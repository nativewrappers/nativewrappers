/**
 * Disables pretty printing in error messages
 */
export declare const DisablePrettyPrint: () => boolean;
/**
 * Registers the Event call for {@link eventName} to this method.
 *
 * This has internal pretty-printing to make errors easier to track, if
 * you want to disable this you will need to call {@link DisablePrettyPrint}, or if you're
 * using esbuild you can add `REMOVE_EVENT_LOG` to your drop label {@link https://esbuild.github.io/api/#drop-labels}
 *
 * @param eventName the event to bind to
 */
export declare function OnEvent(eventName: string): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
export declare const Event: typeof OnEvent;
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
export declare function OnNetEvent(eventName: string, remoteOnly?: boolean): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
export declare const NetEvent: typeof OnNetEvent;
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
export declare function OnNuiEvent(eventName: string, dontErrorWhenCbIsntInvoked?: boolean): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
export declare const NuiEvent: typeof OnNuiEvent;
