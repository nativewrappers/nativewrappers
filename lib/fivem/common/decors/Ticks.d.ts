/**
 * Gets called per server/client tick, this is asyncronous though, if you await
 * in it, it will not be called until whatever was being awaited resolves.
 */
export declare function SetTick(): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
/**
 * Gets called on the frame after the class is initialized.
 */
export declare function SetImmediate(): (originalMethod: any, context: ClassMethodDecoratorContext) => void;
