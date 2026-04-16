/**
 * A utility to load an animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.
 * @param animDict the animation dictionary to load
 * @param waitTime how long to wait for the dictionary to load
 * @returns {boolean} if the animation successfully loaded
 */
export declare const LoadAnimDict: (animDict: string, waitTime?: number) => Promise<boolean>;
/**
 * A utility to load multiple animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.
 * @param animDict the animation dictionary to load
 * @param waitTime how long to wait for the dictionary to load
 * @returns if the animation successfully loaded, if the animation failed to load it will return an array of animations that failed to load
 */
export declare const LoadAnimDictArray: (animDict: string[], waitTime?: number) => Promise<[boolean, string[] | null]>;
/**
 * A utility to unload multiple animation dictionary
 * @param animDict the animation dictionaries to unload
 */
export declare const RemoveAnimDictArray: (animDict: string[]) => void;
