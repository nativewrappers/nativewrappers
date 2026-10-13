type ResourceName = string;
type ResourceOrGlobal = ResourceName | "global";
type FunctionCall = (resource_name?: string) => void;
declare class ResourceWrapper {
    #private;
    /**
     * Adds a function to get called whenever a resource is started, if the current
     * {@link resource_name} is started then it will immediately call the function.
     * @param resource_name The resource name to add to the start listener.
     * @param fn The function to call
     */
    add_to_resource_start(resource_name: ResourceOrGlobal, fn: FunctionCall): void;
    /**
     * Adds a function to get called whenever a resource is stopped
     * @param resource_name The resource name to add to the stop listener.
     * @param fn The function to call
     */
    add_to_resource_stop(resource_name: ResourceOrGlobal, fn: FunctionCall): void;
    private on_resource_start;
    private on_resource_stop;
}
export declare const EnsureResourceWrapperInit: () => void;
export declare const GetResourceWrapper: () => ResourceWrapper;
/**
 * Called whenever the specified resource is started, this will be called once on once on resource start if the resource is started.
 * NOTE: If you want to listen to *all* resource start/stop events you should send
 * {@link resource} as "global"
 */
export declare function OnResourceStart(resource?: ResourceOrGlobal): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
/**
 * Called whenever the specified resource is stopped.
 * NOTE: If you want to listen to *all* resource start/stop events you should send
 * {@link resource} as "global"
 */
export declare function OnResourceStop(resource?: ResourceOrGlobal): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
export {};
