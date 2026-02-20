/**
 * Gets called per server/client tick, this is asyncronous though, if you await
 * in it, it will not be called until whatever was being awaited resolves.
 * @param contextName - used whenever the function errors, will provide context to the tick
 */
export declare function OnTick(contextName: string): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
/**
 * @see OnTick
 */
export declare const SetTick: typeof OnTick;
/**
 * Gets called on the frame after the class is initialized.
 * @param contextName - used whenever the function errors, will provide context to the function
 */
export declare function OnInit(contextName: string): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
export declare const SetImmediate: typeof OnInit;
