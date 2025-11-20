/**
 * Called whenever the specified resource is started, this will be called once on once on resource start if the resource is started.
 */
export declare function OnResourceStart(resource?: string): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
/**
 * Called whenever the specified resource is stopped.
 */
export declare function OnResourceStop(resource?: string): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
