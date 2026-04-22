/**
 * Static class for screen fading
 */
export declare abstract class Fading {
    /**
     * Gets whether the screen is faded in
     *
     * @returns True or false
     */
    static get IsFadedIn(): boolean;
    /**
     * Gets whether the screen is faded out
     *
     * @returns True or false
     */
    static get IsFadedOut(): boolean;
    /**
     * Gets whether the screen is currently fading in
     *
     * @returns True or false
     */
    static get IsFadingIn(): boolean;
    /**
     * Gets whether the screen is currently fading out
     *
     * @returns True or false
     */
    static get IsFadingOut(): boolean;
    /**
     * Fade in the screen for a certain duration.
     *
     * @param duration Time to fade in
     */
    static fadeIn(duration: number): Promise<void>;
    /**
     * Fade out the screen for a certain duration.
     *
     * @param duration Time to fade out
     */
    static fadeOut(duration: number): Promise<void>;
}
