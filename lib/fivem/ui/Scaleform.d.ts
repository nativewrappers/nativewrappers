import type { PointF } from "../common/utils/PointF";
import type { Vector3 } from "../common/utils/Vector";
/**
 * Scaleforms will automatically load when calling any of the render functions.
 *
 * Example:
 *
 * ```typescript
 * import { Scaleform } from '@nativewrappers/client/ui';
 *
 * const scaleform = new Cfx.Scaleform("MIDSIZED_MESSAGE");
 *
 * scaleform.callFunction("SHOW_MIDSIZED_MESSAGE", ["Title", "Message"]);
 *
 * setTick(() => {
 *  await scaleform.render2D();
 * });
 * ```
 */
export declare class Scaleform {
    static render2DMasked(scaleform1: Scaleform, scaleform2: Scaleform): Promise<void>;
    protected handle: number;
    protected name: string;
    protected loaded: boolean;
    constructor(name: string);
    /**
     * Get the handle of the scaleform.
     */
    get Handle(): number;
    /**
     * Get whether the handle is a valid handle.
     */
    get IsValid(): boolean;
    /**
     * Get whether the scaleform is loaded.
     */
    get IsLoaded(): boolean;
    /**
     * Dispose the scaleform allowing the GTA engine to free memory when wanted.
     */
    dispose(): void;
    /**
     * Call a function on the scaleform.
     *
     * @param name Name of the function
     * @param args Additional arguments
     */
    callFunction(name: string, ...args: unknown[]): void;
    /**
     * Calls a void method on the scaleform.
     *
     * @param name Name of the function
     */
    callVoidMethod(name: string): void;
    /**
     * Calls a string method on the scaleform.
     *
     * @param name Name of the function
     * @param param1
     * @param param2
     * @param param3
     * @param param4
     * @param param5
     */
    callStringMethod(name: string, param1?: string, param2?: string, param3?: string, param4?: string, param5?: string): void;
    /**
     * Calls a number method on the scaleform.
     *
     * @param name Name of the function
     * @param param1
     * @param param2
     * @param param3
     * @param param4
     * @param param5
     */
    callNumberMethod(name: string, param1?: number, param2?: number, param3?: number, param4?: number, param5?: number): void;
    /**
     * Calls a number & string method on the scaleform.
     *
     * @param name Name of the function
     * @param fParam1
     * @param fParam2
     * @param fParam3
     * @param fParam4
     * @param fParam5
     * @param sParam1
     * @param sParam2
     * @param sParam3
     * @param sParam4
     * @param sParam5
     */
    callSharedMethod(name: string, fParam1?: number, fParam2?: number, fParam3?: number, fParam4?: number, fParam5?: number, sParam1?: string, sParam2?: string, sParam3?: string, sParam4?: string, sParam5?: string): void;
    /**
     * Sets a duration the scaleform should be shown.
     * Useful for showing a scaleform for a known amount of time, such as messages.
     *
     * This only works for any scaleform using {@linkcode render2D};
     *
     * @param duration Duration in milliseconds
     */
    setDuration(duration: number): void;
    render2D(): Promise<void>;
    render2DScreenSpace(location: PointF, size: PointF): Promise<void>;
    render3D(position: Vector3, rotation: Vector3, scale: Vector3): Promise<void>;
    render3DAdditive(position: Vector3, rotation: Vector3, scale: Vector3): Promise<void>;
    load(): Promise<boolean>;
}
