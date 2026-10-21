import { LoadingSpinnerType } from "../enums/LoadingSpinnerType";
/**
 * Show and hide loading prompt on the bottom right of the screen.
 *
 * Example:
 *
 * ```typescript
 * import { LoadingPrompt } from '@nativewrappers/client/ui';
 *
 * LoadingPrompt.show("Hello World");
 *
 * setTimeout(() => {
 *  LoadingPrompt.hide();
 * }, 10000)'
 * ```
 */
export declare abstract class LoadingPrompt {
    /**
     * Shows a loading prompt.
     *
     * @param loadingText Text to be displayed inside loading prompt.
     * @param spinnerType Type of spinner.
     */
    static show(loadingText?: string, spinnerType?: LoadingSpinnerType): void;
    static hide(): void;
    static get IsActive(): boolean;
}
